# gen_mod_list.py
import json
import re
import sys
from speaker_config import SPEAKER_PROSODY_MAP

def generate_mod_ssml_text(js_file_path):
    """
    Reads a JavaScript file for a module, parses it, and generates
    SSML for key phrases and dialogues, grouped by lesson.
    """
    try:
        with open(js_file_path, 'r', encoding='utf-8') as f:
            js_content = f.read()
    except FileNotFoundError:
        return f"Error: File not found at '{js_file_path}'"
    except Exception as e:
        return f"Error reading file '{js_file_path}': {e}"

    match = re.search(r'const moduleData = ({.*?});', js_content, re.DOTALL)
    if not match:
        return f"Error: Could not find 'moduleData' object in the JS file '{js_file_path}'."

    json_string = match.group(1)
    json_string = re.sub(r'//.*?\n|/\*.*?\*/', '', json_string, flags=re.DOTALL)
    json_string = re.sub(r',\s*([}\]])', r'\1', json_string)
    json_string = re.sub(r'([{,]\s*)(\w+)(\s*:\s*)', r'\1"\2"\3', json_string)

    try:
        module_data = json.loads(json_string)
    except json.JSONDecodeError as e:
        return f"Error parsing JSON from JS file '{js_file_path}': {e}\nProblematic string snippet:\n{json_string[max(0, e.pos-50):e.pos+50]}"

    output_blocks = []
    module_id = module_data.get('moduleId', '1')
    language_code = module_data.get('voice', 'en-US')

    lessons = module_data.get('lessons', [])
    for lesson in lessons:
        lesson_id = lesson.get('lessonId', '1')

        all_key_phrases = []
        all_dialogues = []

        # Gather all key phrases and dialogues from all levels
        levels = lesson.get('levels', [])
        for level in levels:
            key_phrases = level.get('keyPhrases', [])
            dialogues = level.get('dialogues', [])
            all_key_phrases.extend(key_phrases)
            all_dialogues.extend(dialogues)

        # Generate SSML for all key phrases in this lesson
        if all_key_phrases:
            ssml_content = f"<speak lang='{language_code}'>"
            for phrase in all_key_phrases:
                ssml_content += f"<voice speaker='default'><prosody rate='100%' pitch='0st'>{phrase['text']}</prosody></voice><break time='1s' />"
            ssml_content += "</speak>"

            mp3_filename = f"mod{module_id}-lesson{lesson_id}-keyphrase.mp3"
            output_blocks.append(f"{mp3_filename} ========== (rate=0.5 mod{module_id} lesson{lesson_id} keyphrase)")
            output_blocks.append(ssml_content)

        # Generate SSML for all dialogues in this lesson
        if all_dialogues:
            ssml_content = f"<speak lang='{language_code}'>"
            for dialog in all_dialogues:
                speaker = dialog.get('speaker', 'default')
                text = dialog.get('text', '')
                prosody_settings = SPEAKER_PROSODY_MAP.get(speaker, SPEAKER_PROSODY_MAP['default'])
                rate = prosody_settings.get("rate", "100%")
                pitch = prosody_settings.get("pitch", "0st")

                ssml_content += f"<voice speaker='{speaker}'><prosody rate='{rate}' pitch='{pitch}'>{text}</prosody></voice><break time='1s' />"
            ssml_content += "</speak>"

            mp3_filename = f"mod{module_id}-lesson{lesson_id}-dialogue.mp3"
            output_blocks.append(f"{mp3_filename} ========== (rate=0.5 mod{module_id} lesson{lesson_id} dialogue)")
            output_blocks.append(ssml_content)

    return "\n\n".join(output_blocks)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 gen_mod_list.py <js_file>")
        print("Example: python3 gen_mod_list.py mod1.js > output.txt")
        sys.exit(1)

    js_file_name = sys.argv[1]
    generated_text = generate_mod_ssml_text(js_file_name)
    print(generated_text)
