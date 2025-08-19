"""
## gen_ep.py 腳本使用說明 (中文)
它是一個「文字整理工具」，專門為語音網站做準備。
1. 讓語音網站知道這段要念什麼，停頓多久。
2. 然後這個音檔要叫什麼名字。
3. 同時支援不同語言和特定人物的語音。

### 如何使用
請在終端機中，以以下格式執行此腳本：
$ python3 gen_ep_list.py ../../italian-life/travel/ep/ep1.js > ep
$ python3 gen_ep_list.py 2 ../../italian-life/travel/ep/ep1.js > ep2

### 輸出結果
腳本執行後，會將轉換後的文字（包含 SSML 標籤）儲存到 output.txt 檔案中。
這個檔案將作為 gen_audio.py 腳本的輸入。

"""
import json
import re
import sys
from speaker_config_lang import SPEAKER_CONFIG

def generate_ssml_text(js_file_path, topic_filter=None):
    try:
        with open(js_file_path, 'r', encoding='utf-8') as f:
            js_content = f.read()
    except FileNotFoundError:
        return f"Error: File not found at '{js_file_path}'."
    except Exception as e:
        return f"Error reading file '{js_file_path}': {e}"

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
    speaking_rate = episode_data.get('speaking_rate', '1.0')
    language_code = episode_data.get('voice', 'en-US')

    topics = episode_data.get('topics', [])
    for topic in topics:
        try:
            topic_id = int(topic.get('topicId', 1))
        except ValueError:
            topic_id = 1

        if topic_filter is not None and topic_id != topic_filter:
            continue

        scenes = topic.get('scenes', [])
        for scene in scenes:
            scene_id = scene.get('sceneId', '1')

            dialogue = scene.get('dialogue', [])
            for i, line in enumerate(dialogue):
                dialog_id = i + 1

                speaker_name = line.get('speaker', 'default')
                speaker_info = SPEAKER_CONFIG.get(language_code, {}).get(
                    speaker_name,
                    SPEAKER_CONFIG.get(language_code, {}).get("default")
                )
                prosody_settings = speaker_info['prosody']

                rate = prosody_settings.get("rate", "100%")
                pitch = prosody_settings.get("pitch", "0st")
                text = line.get("text", "")

                # CORRECTED FILENAME FORMAT
                mp3_filename = f"ep{episode_id}_topic{topic_id}_scene{scene_id}_d{dialog_id}.mp3"

                break_tag = "<break time='1s'/>"
                ssml_content = f"<speak lang='{language_code}'><voice speaker='{speaker_name}'><prosody rate='{rate}' pitch='{pitch}'>{text}{break_tag}</prosody></voice></speak>"

                output_blocks.append(f"{mp3_filename} ========== (rate={speaking_rate} ep{episode_id} topic{topic_id} scene{scene_id} dialog{dialog_id})")
                output_blocks.append(ssml_content)

    return "\n\n".join(output_blocks)

if __name__ == "__main__":
    # 支援兩種用法：
    # 1) python3 gen_ep_list.py <js_file>
    # 2) python3 gen_ep_list.py <topic_number> <js_file>   # 僅輸出 ep[x]_topic<topic_number>
    if len(sys.argv) == 2:
        topic_filter = None
        js_file_name = sys.argv[1]
    elif len(sys.argv) == 3 and sys.argv[1].isdigit():
        topic_filter = int(sys.argv[1])
        js_file_name = sys.argv[2]
    else:
        print("Usage: python3 gen_ep_list.py [<topic_number>] <js_file>")
        sys.exit(1)

    generated_text = generate_ssml_text(js_file_name, topic_filter)
    print(generated_text)
