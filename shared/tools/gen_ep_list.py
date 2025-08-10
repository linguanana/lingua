"""
## gen_ep.py 腳本使用說明 (中文)

### 腳本功能
它是一個「文字整理工具」，專門為語音網站做準備。
1. 讓語音網站知道這段要念什麼，停頓多久。
2. 然後這個音檔要叫什麼名字。
3. 同時支援不同語言和特定人物的語音。

### 如何使用
請在終端機中，以以下格式執行此腳本：
$ python3 gen_ep_list.py ../../italian-life/travel/ep/ep1.js > output.txt

### 輸出結果
腳本執行後，會將轉換後的文字（包含 SSML 標籤）儲存到 output.txt 檔案中。
這個檔案將作為 gen_audio.py 腳本的輸入。

"""
# gen_ep_list.py (完整檔案)
import json
import re
import sys

# 從 speaker_config 檔案中導入語音設定
from speaker_config import SPEAKER_PROSODY_MAP

# gen_ep_list.py (corrected generate_ssml_text function)

def generate_ssml_text(js_file_path):
    """
    Reads a JavaScript file, parses it, and generates SSML text output
    structured by individual dialogue lines.
    """
    # ... (code to read and parse the JS file remains the same)

    match = re.search(r'const episodeData = ({.*?});', js_content, re.DOTALL)
    if not match:
        return f"Error: Could not find 'episodeData' object in the JS file '{js_file_path}'."

    json_string = match.group(1)
    json_string = re.sub(r'//.*?\n|/\*.*?\*/', '', json_string, flags=re.DOTALL)
    json_string = re.sub(r',\s*([}\]])', r'\1', json_string)
    json_string = re.sub(r'([{,]\s*)(\w+)(\s*:\s*)', r'\1"\2"\3', json_string)

    try:
        episode_data = json.loads(json_string)
    except json.JSONDecodeError as e:
        return f"Error parsing JSON from JS file '{js_file_path}': {e}\nProblematic string snippet:\n{json_string[max(0, e.pos-50):e.pos+50]}"

    output_blocks = []
    episode_id = episode_data.get('episodeId', '1')
    language_code = episode_data.get('voice', 'en-US')
    speaking_rate = episode_data.get('speaking_rate', '0.5')

    topics_data = episode_data.get('topics', [])
    for topic_index, topic in enumerate(topics_data):
        # We now use the full topicId string
        topic_id = topic.get('topicId', f"topic{topic_index + 1}")
        scenes_data = topic.get('scenes', [])

        for scene_index, scene in enumerate(scenes_data):
            # We now use the full sceneId string
            scene_id = scene.get('sceneId', f"scene{scene_index + 1}")
            dialogues = scene.get('dialogue', [])

            for dialogue_index, dialog in enumerate(dialogues):
                speaker = dialog.get('speaker', 'default')
                text = dialog.get('text', '')

                prosody_settings = SPEAKER_PROSODY_MAP.get(speaker, SPEAKER_PROSODY_MAP['default'])
                rate = prosody_settings.get("rate", "100%")
                pitch = prosody_settings.get("pitch", "0st")

                ssml_text = f"<voice speaker='{speaker}'><prosody rate='{rate}' pitch='{pitch}'>{text}</prosody></voice>"

                ssml_content_lines = [f"<speak lang='{language_code}'>", f"  {ssml_text} <break time='1s' />", "</speak>"]

                # New filename format using full topic and scene IDs
                mp3_filename = f"ep{episode_id}_{topic_id}_{scene_id}_d{dialogue_index + 1}.mp3"

                output_blocks.append(f"{mp3_filename} ========== (rate={speaking_rate} ep{episode_id} {topic_id} {scene_id} dialog{dialogue_index + 1})")

                output_blocks.append("\n".join(ssml_content_lines))

    return "\n\n".join(output_blocks)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 gen_ep_list.py <js_file>")
        print("Example: python3 gen_ep_list.py ep1.js > output.txt")
        sys.exit(1)

    js_file_name = sys.argv[1]
    generated_text = generate_ssml_text(js_file_name)
    print(generated_text)
