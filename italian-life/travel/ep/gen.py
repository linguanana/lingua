import json
import re
import sys # Import the sys module to access command-line arguments

def generate_ssml_text(js_file_path):
    """
    Reads a JavaScript file containing episodeData, parses it,
    and generates SSML-like text output, with a separate block
    for each scene, including its MP3 filename header.
    <break time='1s' /> is added after each dialogue line.
    <break time='2s' /> is added between scenes and between topics.

    Args:
        js_file_path (str): The path to the JavaScript file (e.g., 'ep1.js').

    Returns:
        str: The generated formatted text suitable for SSML.
    """
    try:
        with open(js_file_path, 'r', encoding='utf-8') as f:
            js_content = f.read()
    except FileNotFoundError:
        return f"Error: File not found at '{js_file_path}'"
    except Exception as e:
        return f"Error reading file '{js_file_path}': {e}"

    # Extract the JSON-like part of the JS content
    match = re.search(r'const episodeData = ({.*?});', js_content, re.DOTALL)
    if not match:
        return f"Error: Could not find 'episodeData' object in the JS file '{js_file_path}'."

    json_string = match.group(1)

    # Clean up the JSON string to make it valid for json.loads
    json_string = re.sub(r'//.*', '', json_string) # Remove single-line comments
    json_string = re.sub(r'/\*.*?\*/', '', json_string, flags=re.DOTALL) # Remove multi-line comments
    json_string = re.sub(r',\s*([}\]])', r'\1', json_string) # Remove trailing commas
    json_string = re.sub(r'([{,]\s*)(\w+)(\s*:)', r'\1"\2"\3', json_string) # Quote unquoted keys

    try:
        episode_data = json.loads(json_string)
    except json.JSONDecodeError as e:
        return f"Error parsing JSON from JS file '{js_file_path}': {e}\nProblematic string snippet:\n{json_string[max(0, e.pos-50):e.pos+50]}"

    output_blocks = []
    episode_id = episode_data.get('episodeId', '1') # Default to '1' if not found

    topics_data = episode_data.get('topics', [])
    for topic_index, topic in enumerate(topics_data):
        # Use topicId from data, or generate one if missing
        topic_id = topic.get('topicId', str(topic_index + 1))

        scenes_data = topic.get('scenes', [])
        for scene_index, scene in enumerate(scenes_data):
            scene_lines = []

            # Construct the MP3 filename for THIS SPECIFIC SCENE
            # This matches the frontend's auto-generated name
            scene_mp3_filename = f"ep{episode_id}_topic{topic_id}_scene{scene_index + 1}.mp3"

            # Add the header for this scene's MP3 block
            scene_lines.append(f"{scene_mp3_filename} ========== (ep{episode_id} topic{topic_id} scene{scene_index + 1})")

            dialogues = scene.get('dialogue', [])
            for dialog_index, dialog in enumerate(dialogues):
                # Each dialogue text followed by a 1-second break
                scene_lines.append(f"{dialog['text']} <break time='1s' />")

            # After all dialogues in a scene, add a 2-second break
            # if it's not the very last scene in the very last topic.
            # This break will separate scenes for audio synthesis.
            if not (topic_index == len(topics_data) - 1 and scene_index == len(scenes_data) - 1):
                scene_lines.append("<break time='2s' />")

            output_blocks.append("\n".join(scene_lines))

            # Add an empty line between scene blocks for visual separation in the output file
            # This is purely for readability of the generated text file
            if not (topic_index == len(topics_data) - 1 and scene_index == len(scenes_data) - 1):
                output_blocks.append("")

    return "\n".join(output_blocks)

# --- Main execution block ---
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 gen.py <js_file_path>")
        print("Example: python3 gen.py ep1.js")
        sys.exit(1) # Exit with an error code

    js_file_name = sys.argv[1] # The first argument after the script name is the file path
    generated_text = generate_ssml_text(js_file_name)
    print(generated_text)

    # Optional: Save to a file (uncomment if you want to save to a file automatically)
    # output_filename = js_file_name.replace('.js', '_ssml_output.txt')
    # with open(output_filename, 'w', encoding='utf-8') as f:
    #     f.write(generated_text)
    # print(f"\nGenerated text saved to '{output_filename}'")
