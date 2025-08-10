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
from google.cloud import texttospeech
from speaker_config import SPEAKER_CONFIG

def _synthesize_and_save(client, mp3_filename, ssml_content, output_directory):
    print(f"DEBUG: Processing '{mp3_filename}'")

    speaker_match = re.search(r"<voice\s+speaker=['\"](.*?)['\"]>", ssml_content)
    speaker_name = speaker_match.group(1) if speaker_match else "default"

    if speaker_name not in SPEAKER_CONFIG:
        print(f"WARNING: Speaker '{speaker_name}' not found in SPEAKER_CONFIG. Using 'default'.")
        speaker_name = 'default'

    speaker_info = SPEAKER_CONFIG[speaker_name]
    voice_id = speaker_info['voice_id']

    lang_match = re.search(r"<speak\s+lang=['\"](.*?)['\"]>", ssml_content)
    language_code = lang_match.group(1) if lang_match else "en-US"

    # Fix the voice name format
    if not voice_id.startswith(f'{language_code}-'):
        full_voice_name = f"{language_code}-{voice_id}"
    else:
        full_voice_name = voice_id

    # Replace the invalid speaker tag with a valid voice name tag
    cleaned_ssml = re.sub(
        r"<voice\s+speaker=['\"].*?['\"]>",
        f"<voice name='{full_voice_name}'>",
        ssml_content
    )

    synthesis_input = texttospeech.SynthesisInput(ssml=cleaned_ssml)

    voice = texttospeech.VoiceSelectionParams(
        language_code=language_code,
        name=full_voice_name
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
            raise ValueError("API returned an empty audio response.")

        output_path = os.path.join(output_directory, mp3_filename)
        with open(output_path, "wb") as out_file:
            out_file.write(response.audio_content)
        print(f"DEBUG: Audio content written to file '{output_path}'")
        return True
    except Exception as e:
        print(f"ERROR: Failed to synthesize audio for '{mp3_filename}': {e}")
        return False

def synthesize_ssml_to_mp3(ssml_file_path, output_directory):
    print(f"DEBUG: Starting synthesize_ssml_to_mp3 for path: {ssml_file_path}")

    try:
        client = texttospeech.TextToSpeechClient()
        print("DEBUG: Google Cloud Text-to-Speech client initialized.")
    except Exception as e:
        print(f"ERROR: Failed to initialize Google Cloud client. Check GOOGLE_APPLICATION_CREDENTIALS. {e}")
        return

    try:
        with open(ssml_file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print("DEBUG: Successfully read SSML file.")
    except Exception as e:
        print(f"ERROR: Failed to read SSML file '{ssml_file_path}': {e}")
        return

    print(f"DEBUG: Found {len(lines)} lines to process.")

    current_mp3_filename = None
    current_ssml_content = []

    for line in lines:
        stripped_line = line.strip()
        if "==========" in stripped_line:
            # We found a new block. If we have a previous block, process it.
            if current_mp3_filename and current_ssml_content:
                _synthesize_and_save(client, current_mp3_filename, " ".join(current_ssml_content), output_directory)

            current_mp3_filename = stripped_line.split("==========")[0].strip()
            current_ssml_content = []
        elif stripped_line:
            current_ssml_content.append(stripped_line)

    # Process the last block after the loop ends
    if current_mp3_filename and current_ssml_content:
        _synthesize_and_save(client, current_mp3_filename, " ".join(current_ssml_content), output_directory)

    print("DEBUG: Script finished.")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 gen_ep_audio.py <ssml_file_path> <output_directory>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_dir = sys.argv[2]

    os.makedirs(output_dir, exist_ok=True)

    synthesize_ssml_to_mp3(input_file, output_dir)
