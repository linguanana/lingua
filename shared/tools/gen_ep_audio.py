"""
### 如何使用
請在終端機中，以以下格式執行此腳本：
$ python3 /home/shared/tools/gen_ep.py /home/italian-life/travel/ep/ep1.js
$ python3 shared/tools/gen_ep_list.py italian-life/travel/ep/ep1.js > output.txt

$ python3 gen_ep_audio.py output.txt ../../italian-life/travel/audio/
"""

import os
import re
import sys
import warnings
import urllib3
from google.cloud import texttospeech

# --- 導入新的語音設定檔 ---
# 請確認您的 speaker_config.py 檔案名稱和路徑正確
from speaker_config import SPEAKER_VOICE_MAP

warnings.filterwarnings("ignore", category=urllib3.exceptions.NotOpenSSLWarning)

# --- Helper function for synthesizing and saving audio ---
def _synthesize_and_save(client, mp3_filename, ssml_content, speaking_rate, output_directory):
    """
    Synthesizes SSML content to an MP3 file and saves it to the specified directory.
    """
    os.makedirs(output_directory, exist_ok=True)
    full_mp3_path = os.path.join(output_directory, mp3_filename)

    print(f"Synthesizing '{full_mp3_path}'...")

    lang_match = re.search(r"<speak\s+lang=['\"](.*?)['\"]>", ssml_content)
    language_code = lang_match.group(1) if lang_match else "en-US"

    speaker_match = re.search(r"<voice\s+speaker=['\"](.*?)['\"]>", ssml_content)
    speaker_name = speaker_match.group(1) if speaker_match else "default"

    # Now, look up the speaker name in the map
    short_voice_name = SPEAKER_VOICE_MAP.get(speaker_name, SPEAKER_VOICE_MAP['default'])
    full_voice_name = f"{language_code}-{short_voice_name}"

    # --- DEBUGGING LINES (CORRECTED PLACEMENT) ---
    print(f"DEBUG: Found language_code: {language_code}")
    print(f"DEBUG: Found speaker_name: {speaker_name}")
    print(f"DEBUG: Calculated voice ID: {full_voice_name}")
    # --- END DEBUGGING LINES ---

    synthesis_input = texttospeech.SynthesisInput(ssml=ssml_content)

    voice = texttospeech.VoiceSelectionParams(
        language_code=language_code,
        name=full_voice_name
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        speaking_rate=float(speaking_rate)
    )

    try:
        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )

        with open(full_mp3_path, "wb") as out:
            out.write(response.audio_content)
        print(f"Audio content written to file '{full_mp3_path}'")
    except Exception as e:
        print(f"Error synthesizing audio for '{full_mp3_path}': {e}")
        print(f"Problematic SSML: {ssml_content}")

def synthesize_ssml_to_mp3(ssml_text_path, output_dir):
    """
    Reads SSML text from a file, parses it into blocks,
    and synthesizes each block into a separate MP3 file.
    """
    print(f"DEBUG: Starting synthesize_ssml_to_mp3 for path: {ssml_text_path}")

    client = texttospeech.TextToSpeechClient()
    print("DEBUG: Google Cloud Text-to-Speech client initialized.")

    try:
        with open(ssml_text_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print(f"DEBUG: Successfully read SSML file.")
    except FileNotFoundError:
        print(f"Error: SSML text file not found at '{ssml_text_path}'")
        return
    except Exception as e:
        print(f"Error reading SSML text file: {e}")
        return

    current_mp3_filename = None
    current_speaking_rate = '0.5'
    current_ssml_block = []

    # Process each line in the SSML file
    for line_num, original_line in enumerate(lines):
        line = original_line.strip()

        # Check if the line is a header indicating a new MP3 file
        if '==========' in line:
            # If there was a previous block, synthesize and save it
            if current_mp3_filename and current_ssml_block:
                _synthesize_and_save(client, current_mp3_filename, "".join(current_ssml_block), current_speaking_rate, output_dir)

            # Start a new block: extract the MP3 filename and speaking rate
            header_parts = line.split('==========')
            current_mp3_filename = header_parts[0].strip()

            rate_match = re.search(r'rate=(.+?)\s', header_parts[1])
            current_speaking_rate = rate_match.group(1) if rate_match else '0.5'

            current_ssml_block = [] # Reset SSML block for the new file
        elif line: # If not a header and not empty
            current_ssml_block.append(original_line)

    # After the loop, process any remaining SSML content for the last block
    if current_mp3_filename and current_ssml_block:
        _synthesize_and_save(client, current_mp3_filename, "".join(current_ssml_block), current_speaking_rate, output_dir)

# --- Main execution block ---
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 gen_audio.py <ssml_text_file_path> <output_directory_path>")
        print("Example: python3 gen_audio.py output_ssml.txt ../audio")
        sys.exit(1)

    ssml_file_path = sys.argv[1]
    output_directory = sys.argv[2]
    print(f"DEBUG: Script starting. Input SSML file path: {ssml_file_path}, Output Directory: {output_directory}")
    synthesize_ssml_to_mp3(ssml_file_path, output_directory)
    print("DEBUG: Script finished.")
