# combine_ep_audio.py (complete and corrected script)
import os
import re
import sys
from pydub import AudioSegment

def combine_scene_audio(audio_dir):
    """
    Combines individual dialogue MP3s into single scene MP3s and deletes the originals.
    """
    print(f"Starting audio combination in directory: {audio_dir}")

    if not os.path.isdir(audio_dir):
        print(f"Error: Directory '{audio_dir}' not found.")
        return

    scenes = {}

    # NEW REGEX: Match the new filename format
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

        print(f"\nCombining scene: {scene_prefix} with files:")

        for dialogue_num, filename in dialogue_files:
            file_path = os.path.join(audio_dir, filename)
            print(f"  - Adding {filename} (Dialogue {dialogue_num})")

            try:
                audio = AudioSegment.from_mp3(file_path)
                if combined_audio is None:
                    combined_audio = audio
                else:
                    combined_audio += AudioSegment.silent(duration=200)
                    combined_audio += audio
            except Exception as e:
                print(f"Warning: Could not load {filename}. Skipping. Error: {e}")
                continue

        if combined_audio:
            output_filename = f"{scene_prefix}.mp3"
            output_path = os.path.join(audio_dir, output_filename)

            print(f"Exporting combined file to {output_path}...")
            combined_audio.export(output_path, format="mp3")
            print("Export successful.")

            print("Deleting original dialogue files...")
            for _, filename in dialogue_files:
                os.remove(os.path.join(audio_dir, filename))
            print("Cleanup complete.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 combine_ep_audio.py <audio_directory_path>")
        sys.exit(1)

    combine_scene_audio(sys.argv[1])
