#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 用法
# $ python3 gen_script_audio.py --input script --out-dir ../../french-life/module1/video-script

import argparse
import json
import os
import sys
from google.cloud import texttospeech

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True, help="Path to input JSON file from gen_script_list.py")
    ap.add_argument("--out-dir", default="./", help="Output directory for MP3 files")
    args = ap.parse_args()

    client = texttospeech.TextToSpeechClient()

    try:
        with open(args.input, "r", encoding="utf-8") as f:
            script_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: Input file not found at {args.input}")
        sys.exit(1)
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON format in {args.input}")
        sys.exit(1)

    if not isinstance(script_data, list):
        print(f"Error: JSON data is not a list. Check the format of {args.input}")
        sys.exit(1)

    if not os.path.exists(args.out_dir):
        os.makedirs(args.out_dir)

    print(f"Starting audio generation for {len(script_data)} item(s)...")

    for item in script_data:
        name = item.get("name")
        ssml_text = item.get("ssml")

        if not name or not ssml_text:
            print(f"Warning: Skipping malformed item: {item}")
            continue

        output_path = os.path.join(args.out_dir, name)

        synthesis_input = texttospeech.SynthesisInput(ssml=ssml_text)

        # We don't need to specify voice_selection_params here because the SSML already has the <voice> tag
        voice = texttospeech.VoiceSelectionParams(language_code="en-US")

        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

        try:
            response = client.synthesize_speech(
                input=synthesis_input,
                voice=voice,
                audio_config=audio_config
            )

            with open(output_path, "wb") as out_file:
                out_file.write(response.audio_content)
                print(f"✓ Successfully created {output_path}")

        except Exception as e:
            print(f"Error generating audio for {name}: {e}")
            continue

    print("Audio generation complete.")

if __name__ == "__main__":
    main()
