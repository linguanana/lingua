"""
### 如何使用
$ python3 gen_hdvoice.py fr ../../french-life/module1/video-script/lesson1.txt
"""
import os
import argparse
import re
from google.cloud import texttospeech

# Configuration dictionary for different speakers/languages
SPEAKER_CONFIG = {
    # FRENCH
    "fr": {
        "voice_id": "Standard-E",
        "language_code": "fr-FR",
        "prosody": {"rate": "55%", "pitch": "2st"},
    },
    # ITALIAN (example, you can customize this)
    "it": {
        "voice_id": "Standard-E",
        "language_code": "it-IT",
        "prosody": {"rate": "55%", "pitch": "2st"},
    },
    "en": {
        "voice_id": "Standard-E",
        "language_code": "it-IT",
        "prosody": {"rate": "55%", "pitch": "2st"},
    },
}

def parse_lesson_text(file_path):
    """
    Reads the lesson file and extracts the filenames and teaching scripts for any MP3 marker.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    parts = re.split(r'(\S+\.mp3:)', content)

    if len(parts) < 3:
        raise ValueError("No valid .mp3: markers found in the file.")

    mp3_files = []
    for i in range(1, len(parts), 2):
        filename_marker = parts[i]
        script_text = parts[i+1]

        filename = filename_marker.replace(':', '').strip()
        cleaned_text = script_text.split('===end')[0].strip()

        if not filename or not cleaned_text:
            continue

        mp3_files.append((filename, cleaned_text))

    return mp3_files

def synthesize_text_to_mp3(text, output_file, voice_name, language_code):
    """
    Converts text to an MP3 audio file using Google Cloud TTS.
    """
    client = texttospeech.TextToSpeechClient()
    synthesis_input = texttospeech.SynthesisInput(text=text)

    voice = texttospeech.VoiceSelectionParams(
        language_code=language_code,
        name=voice_name,
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, "wb") as out:
        out.write(response.audio_content)
        print(f'Successfully generated audio file: {output_file}')

def main():
    """
    Main function to run the script from the command line.
    """
    parser = argparse.ArgumentParser(description="Generate lesson MP3 files from a text file.")
    parser.add_argument("language_code", choices=SPEAKER_CONFIG.keys(), help="The language code for the lesson (e.g., 'fr', 'it').")
    parser.add_argument("input_file", help="Path to the input text file (e.g., ../../french-life/module1/video-script/lesson.txt)")

    args = parser.parse_args()

    # Look up the voice settings based on the provided language code
    voice_settings = SPEAKER_CONFIG[args.language_code]
    voice_id = voice_settings["voice_id"]
    language_code = voice_settings["language_code"]

    output_dir = os.path.dirname(args.input_file)

    mp3_files_data = parse_lesson_text(args.input_file)

    for filename, script_text in mp3_files_data:
        output_file_path = os.path.join(output_dir, filename)
        synthesize_text_to_mp3(script_text, output_file_path, voice_id, language_code)

if __name__ == "__main__":
    main()
