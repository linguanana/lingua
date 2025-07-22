import json
import re
import sys # Import the sys module to access command-line arguments

def generate_ssml_text(js_file_path):
    """
    Reads a JavaScript file containing episodeData, parses it,
    and generates SSML-like text output for MP3 generation,
    with <break time='2s' /> on its own line between scenes and topics.

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
    episode_id = episode_data.get('episodeId', 'UNKNOWN_EP')

    topics_data = episode_data.get('topics', [])
    for topic_index, topic in enumerate(topics_data):
        topic_id = topic.get('topicId', 'UNKNOWN_TOPIC')

        # Start a new block for each topic, with its MP3 filename and header
        topic_lines = []
        topic_lines.append(f"ep{episode_id}_{topic_id}.mp3 ======= (ep{episode_id} topic{topic_id})")

        scenes = topic.get('scenes', [])
        for scene_index, scene in enumerate(scenes):
            dialogues = scene.get('dialogue', [])
            for dialog_index, dialog in enumerate(dialogues):
                # Each dialogue text followed by a 1-second break
                topic_lines.append(f"{dialog['text']} <break time='1s' />")

            # After all dialogues in a scene, if it's not the last scene in this topic,
            # add a 2-second break on its own line.
            if scene_index < len(scenes) - 1:
                topic_lines.append("<break time='2s' />")

        # After all scenes in a topic, if it's not the last topic in the episode,
        # add a 2-second break on its own line to signify the end of the topic.
        if topic_index < len(topics_data) - 1:
            topic_lines.append("<break time='2s' />")

        output_blocks.append("\n".join(topic_lines))

        # Add an empty line between the full topic blocks for visual separation in the output
        if topic_index < len(topics_data) - 1:
            output_blocks.append("")

    return "\n".join(output_blocks)

# --- Main execution block ---
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 generate_mp3text.py <js_file_path>")
        print("Example: python3 generate_mp3text.py ep1.js")
        sys.exit(1) # Exit with an error code

    js_file_name = sys.argv[1] # The first argument after the script name is the file path
    generated_text = generate_ssml_text(js_file_name)
    print(generated_text)

    # Optional: Save to a file (uncomment if you want to save to a file automatically)
    # output_filename = js_file_name.replace('.js', '_ssml_output.txt')
    # with open(output_filename, 'w', encoding='utf-8') as f:
    #     f.write(generated_text)
    # print(f"\nGenerated text saved to '{output_filename}'")
