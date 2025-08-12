"""
### 如何使用
請在終端機中，以以下格式執行此腳本：

首先，請使用 gen_ep.py 和 gen_ep_list.py 來生成 SSML 腳本檔案（例如 output.txt）。
然後，執行此腳本：
$ python3 gen_ep_audio.py <ssml_檔案路徑> <音訊輸出目錄路徑>
例如：
$ python3 gen_ep_audio.py output.txt ../../italian-life/travel/audio/
"""

import os
import re
import sys
from pydub import AudioSegment
from google.cloud import texttospeech
from speaker_config import SPEAKER_CONFIG

def _synthesize_and_save(client, mp3_filename, ssml_content, output_directory):
    """
    使用 Google Cloud TTS API 合成 SSML 內容或純文字並將其儲存為 MP3 檔案。
    """
    print(f"DEBUG: Processing '{mp3_filename}'")

    # 從 SSML 內容中提取說話者名稱
    speaker_match = re.search(r"<voice\s+speaker=['\"](.*?)['\"]>", ssml_content)
    speaker_name = speaker_match.group(1) if speaker_match else "default"

    if speaker_name not in SPEAKER_CONFIG:
        print(f"WARNING: Speaker '{speaker_name}' not found in SPEAKER_CONFIG. Using 'default'.")
        speaker_name = 'default'

    speaker_info = SPEAKER_CONFIG[speaker_name]
    voice_id = speaker_info['voice_id']

    # 從 SSML 內容中提取語言代碼
    lang_match = re.search(r"<speak\s+lang=['\"](.*?)['\"]>", ssml_content)
    language_code = lang_match.group(1) if lang_match else "en-US"

    # 檢查說話者的 voice_id 是否為 Chirp3-HD 系列，並據此決定輸入類型
    if 'Chirp3-HD' in voice_id:
        # Chirp3-HD 不支援 SSML，因此需要提取純文字
        # 移除 SSML 標籤
        text_content = re.sub(r'<[^>]+>', '', ssml_content)
        synthesis_input = texttospeech.SynthesisInput(text=text_content)
        print(f"DEBUG: Using text-only input for Chirp3-HD voice: {voice_id}")
    else:
        # 其他語音支援 SSML
        # 將無效的說話者標籤替換為有效的語音名稱標籤
        cleaned_ssml = re.sub(
            r"<voice\s+speaker=['\"].*?['\"]>",
            f"<voice name='{language_code}-{voice_id}'>",
            ssml_content
        )
        synthesis_input = texttospeech.SynthesisInput(ssml=cleaned_ssml)
        print(f"DEBUG: Using SSML input for voice: {voice_id}")


    voice = texttospeech.VoiceSelectionParams(
        language_code=language_code,
        name=f"{language_code}-{voice_id}"
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        sample_rate_hertz=24000
    )

    try:
        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )
        if not response.audio_content:
            raise ValueError("API 返回了空的音訊回應。")

        output_path = os.path.join(output_directory, mp3_filename)
        with open(output_path, "wb") as out_file:
            out_file.write(response.audio_content)
        print(f"DEBUG: 音訊內容已寫入檔案 '{output_path}'")
        return True
    except Exception as e:
        print(f"ERROR: 無法為 '{mp3_filename}' 合成音訊：{e}")
        return False

def synthesize_ssml_to_mp3(ssml_file_path, output_directory):
    """
    從 SSML 檔案中讀取對話，並為每一行生成一個 MP3 檔案。
    """
    print(f"DEBUG: Starting synthesize_ssml_to_mp3 for path: {ssml_file_path}")

    try:
        client = texttospeech.TextToSpeechClient()
        print("DEBUG: Google Cloud Text-to-Speech client initialized.")
    except Exception as e:
        print(f"ERROR: 無法初始化 Google Cloud 客戶端。請檢查 GOOGLE_APPLICATION_CREDENTIALS。{e}")
        return

    try:
        with open(ssml_file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print("DEBUG: 成功讀取 SSML 檔案。")
    except Exception as e:
        print(f"ERROR: 無法讀取 SSML 檔案 '{ssml_file_path}'：{e}")
        return

    print(f"DEBUG: 找到 {len(lines)} 行需要處理。")

    current_mp3_filename = None
    current_ssml_content = []

    for line in lines:
        stripped_line = line.strip()
        if "==========" in stripped_line:
            if current_mp3_filename and current_ssml_content:
                _synthesize_and_save(client, current_mp3_filename, " ".join(current_ssml_content), output_directory)

            current_mp3_filename = stripped_line.split("==========")[0].strip()
            current_ssml_content = []
        elif stripped_line:
            current_ssml_content.append(stripped_line)

    if current_mp3_filename and current_ssml_content:
        _synthesize_and_save(client, current_mp3_filename, " ".join(current_ssml_content), output_directory)

    print("DEBUG: 個別音訊檔案生成完畢。")


def combine_scene_audio(audio_dir):
    """
    將單獨的對話 MP3 合併成單一場景 MP3，並刪除原始檔案。
    """
    print(f"\n--- 開始音訊合併程序於目錄：{audio_dir} ---")

    if not os.path.isdir(audio_dir):
        print(f"錯誤：找不到目錄 '{audio_dir}'。")
        return

    scenes = {}

    # 匹配新的檔案命名格式 (例如: ep1_topic1_scene1_d1.mp3)
    dialogue_pattern = re.compile(r'(ep\d+_topic\d+_scene\d+)_d(\d+)\.mp3')

    for filename in os.listdir(audio_dir):
        match = dialogue_pattern.match(filename)
        if match:
            scene_prefix = match.group(1)
            dialogue_num = int(match.group(2))

            if scene_prefix not in scenes:
                scenes[scene_prefix] = []
            scenes[scene_prefix].append((dialogue_num, filename))

    for scene_prefix, dialogue_files in scenes.items():
        dialogue_files.sort(key=lambda x: x[0])

        combined_audio = None

        print(f"\n正在合併場景：{scene_prefix}，檔案清單：")

        for dialogue_num, filename in dialogue_files:
            file_path = os.path.join(audio_dir, filename)
            print(f"  - 加入 {filename} (對話 {dialogue_num})")

            try:
                audio = AudioSegment.from_mp3(file_path)
                if combined_audio is None:
                    combined_audio = audio
                else:
                    # 在對話之間加入短暫的靜音
                    combined_audio += AudioSegment.silent(duration=200)
                    combined_audio += audio
            except Exception as e:
                print(f"警告：無法載入 {filename}，跳過。錯誤訊息：{e}")
                continue

        if combined_audio:
            output_filename = f"{scene_prefix}.mp3"
            output_path = os.path.join(audio_dir, output_filename)

            print(f"正在將合併檔案匯出到 {output_path}...")
            combined_audio.export(output_path, format="mp3")
            print("匯出成功。")

            print("正在刪除原始對話檔案...")
            for _, filename in dialogue_files:
                os.remove(os.path.join(audio_dir, filename))
            print("Ep清理完成。")

        # ==== 新增：Module 對話合併 ====
    # ---------- Module 合併（新增，注意縮排＆位置） ----------
    mod_pattern = re.compile(r'^(mod\d+-lesson\d+-level\d+)-dialogue(\d+)\.mp3$')
    mod_groups = {}

    for filename in os.listdir(audio_dir):
        m = mod_pattern.match(filename)
        if m:
            base, num = m.group(1), int(m.group(2))
            mod_groups.setdefault(base, []).append((num, filename))

    if not mod_groups:
        print("[MOD] 沒找到可合併的 module 對話檔（*dialogueN.mp3）。")
    for base, items in mod_groups.items():
        items.sort(key=lambda x: x[0])
        combined = None
        print(f"\n[MOD] 合併：{base}-dialogue  檔案：{[f for _, f in items]}")
        for _, fname in items:
            path = os.path.join(audio_dir, fname)
            try:
                seg = AudioSegment.from_mp3(path)
                combined = seg if combined is None else combined + AudioSegment.silent(duration=200) + seg
            except Exception as e:
                print(f"警告：無法載入 {fname}，跳過。錯誤：{e}")
        if combined:
            out_path = os.path.join(audio_dir, f"{base}-dialogue.mp3")
            combined.export(out_path, format="mp3")
            print(f"[MOD] 匯出：{out_path}")
            # 如需刪除逐句檔，取消以下註解：
            for _, fname in items:
                 try:
                     os.remove(os.path.join(audio_dir, fname))
                 except Exception as e:
                     print(f"警告：刪除 {fname} 失敗：{e}")
            print("Mod 清理完成。")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("用法：python3 gen_ep_audio.py <ssml_檔案路徑> <音訊輸出目錄路徑>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_dir = sys.argv[2]

    os.makedirs(output_dir, exist_ok=True)

    # 步驟 1: 生成個別音訊檔案
    synthesize_ssml_to_mp3(input_file, output_dir)

    # 步驟 2: 合併場景音訊檔案
    combine_scene_audio(output_dir)
