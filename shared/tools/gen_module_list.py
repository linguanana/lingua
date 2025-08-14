# -*- coding: utf-8 -*-
# Usage:
#   python3 gen_module_list.py path/to/mod1.js --lang it-IT > out.txt
# Optional:
#   --kp_speaker Female
#   --break 0.7s

import argparse
import json
import re
import sys
import os

# --- robust import for speaker config (same folder) ---
try:
    import speaker_conf as _sc
except ImportError:
    try:
        import speaker_config as _sc
    except ImportError:
        print("Error: cannot import speaker_conf.py or speaker_config.py (must be next to this script).")
        sys.exit(2)

SPEAKER_MAP = None
for name in ("SPEAKER_CONFIG", "SPAKER_CONFIG", "EAKER_CONFIG"):
    if hasattr(_sc, name):
        SPEAKER_MAP = getattr(_sc, name)
        break
if SPEAKER_MAP is None:
    print("Error: speaker_conf/config.py missing SPEAKER_CONFIG / SPAKER_CONFIG / EAKER_CONFIG")
    sys.exit(2)

# --- constants ---
LANG_MAP = {
    "IT": "it-IT",
    "EN": "en-US",
    "ZH": "zh-TW",
}

DEFAULT_BREAK = "1s"

# --- helpers ---
def js_obj_to_json(s: str) -> str:
    s = re.sub(r'//.*?\n|/\*.*?\*/', '', s, flags=re.DOTALL)         # strip comments
    s = re.sub(r',\s*([}\]])', r'\1', s)                             # trailing commas
    s = re.sub(r'([{,]\s*)([A-Za-z_]\w*)(\s*:\s*)', r'\1"\2"\3', s) # quote keys
    return s

def load_module_data(js_path: str):
    with open(js_path, "r", encoding="utf-8") as f:
        raw = f.read()
    m = re.search(r'const\s+moduleData\s*=\s*({.*?});', raw, re.DOTALL)
    if not m:
        raise ValueError("Cannot find `const moduleData = {...};` in JS file.")
    return json.loads(js_obj_to_json(m.group(1)))

def resolve_lang_code(vc: str | None, override: str | None) -> str:
    if override:
        return override
    if not vc:
        return "it-IT"
    return LANG_MAP.get(vc, vc)

def get_voice_spec(speaker_name: str):
    conf = SPEAKER_MAP.get(speaker_name) or SPEAKER_MAP.get("default", {})
    voice_id = conf.get("voice_id", "")
    prosody = conf.get("prosody", {})
    rate = prosody.get("rate", "100%")
    pitch = prosody.get("pitch", "0st")
    resolved = speaker_name if speaker_name in SPEAKER_MAP else "default"
    return voice_id, rate, pitch, resolved

def make_ssml(text: str, speaker_name: str, lang_code: str, break_time: str):
    voice_id, rate, pitch, resolved = get_voice_spec(speaker_name)
    # Keep your existing structure (<voice speaker='...'>). If your TTS expects name=voice_id, swap attributes.
    return (
        f"<speak lang='{lang_code}'>"
        f"<voice speaker='{resolved}'>"
        f"<prosody rate='{rate}' pitch='{pitch}'>"
        f"{text}<break time='{break_time}'/>"
        f"</prosody></voice></speak>"
    ), voice_id, resolved

# --- main generation ---
def generate_for_module(module: dict, lang_code: str, kp_speaker: str, break_time: str) -> str:
    module_id = str(module.get("moduleId", "1"))
    lessons = module.get("lessons", [])
    speaking_rate = module.get("speaking_rate", "1.0")

    out_lines = []

    for lesson in lessons:
        les_id = lesson.get("lessonId", 1)
        levels = lesson.get("levels", [])

        for level in levels:
            lvl_id = level.get("levelId", 1)

            # (1) KeyPhrases (single voice)
            kps = level.get("keyPhrases", [])
            for i, kp in enumerate(kps, start=1):
                it_text = (kp.get("text") or "").strip()
                if not it_text:
                    continue
                ssml, voice_id, resolved_speaker = make_ssml(it_text, kp_speaker, lang_code, break_time)
                fn = f"mod{module_id}_lesson{les_id}_level{lvl_id}_kp{i}.mp3"
                header = (f"{fn} ========== (type=keyphrase rate={speaking_rate} "
                          f"mod{module_id} lesson{les_id} level{lvl_id} idx{i} "
                          f"speaker={resolved_speaker} voice_id={voice_id})")
                out_lines.append(header)
                out_lines.append(ssml)
                out_lines.append("")

            # (2) Dialogues (per-line speaker)
            dlgs = level.get("dialogues", [])
            for j, line in enumerate(dlgs, start=1):
                it_text = (line.get("text") or "").strip()
                if not it_text:
                    continue
                spk = (line.get("speaker") or "default").strip()
                ssml, voice_id, resolved_speaker = make_ssml(it_text, spk, lang_code, break_time)
                fn = f"mod{module_id}_lesson{les_id}_level{lvl_id}_dlg{j}.mp3"
                header = (f"{fn} ========== (type=dialog rate={speaking_rate} "
                          f"mod{module_id} lesson{les_id} level{lvl_id} line{j} "
                          f"speaker={resolved_speaker} voice_id={voice_id})")
                out_lines.append(header)
                out_lines.append(ssml)
                out_lines.append("")

    return "\n".join(out_lines).strip()

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("js_file", help="Path to modX.js (contains const moduleData = {...})")
    ap.add_argument("--kp_speaker", default="Female", help="Default keyphrase voice (e.g., Female/Male)")
    ap.add_argument("--break", dest="break_time", default=DEFAULT_BREAK, help="SSML break time (e.g., 1s, 0.5s)")
    ap.add_argument("--lang", dest="lang_override", default=None, help="Override language code (e.g., it-IT)")
    args = ap.parse_args()

    try:
        module = load_module_data(args.js_file)
    except Exception as e:
        print(f"Error parsing {args.js_file}: {e}")
        sys.exit(2)

    lang_code = resolve_lang_code(module.get("voice"), args.lang_override)
    print(generate_for_module(module, lang_code, args.kp_speaker, args.break_time))

if __name__ == "__main__":
    main()
