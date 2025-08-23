# -*- coding: utf-8 -*-
# Usage:
#   (1) 先確定 speaker_config_lang.py
#   python3 gen_module_list.py path/to/mod1.js --lang it-IT > mod
# Optional:
#   --kp_speaker Female
#   --break 0.7s

import argparse
import json
import re
import sys
import os

# --- robust import for speaker config (prefer multi-language file) ---
try:
    import speaker_config_lang as _sc      # 新：優先載入多語版
except ImportError:
    try:
        import speaker_conf as _sc         # 舊：備援
    except ImportError:
        try:
            import speaker_config as _sc   # 舊：再備援
        except ImportError:
            print("Error: cannot import speaker_config_lang.py / speaker_conf.py / speaker_config.py (must be next to this script).")
            sys.exit(2)

# 期望 _sc 內有多語大表 SPEAKER_CONFIG = { "it-IT": {...}, "fr-FR": {...}, ... }
if hasattr(_sc, "SPEAKER_CONFIG") and isinstance(_sc.SPEAKER_CONFIG, dict):
    SPEAKER_MAP_LANG = _sc.SPEAKER_CONFIG
else:
    # 向後相容：若只有單層表，就套到多語鍵上（全語言共用同一份）
    legacy = getattr(_sc, "SPEAKER_CONFIG", None)
    if isinstance(legacy, dict):
        SPEAKER_MAP_LANG = {"it-IT": legacy, "en-US": legacy, "fr-FR": legacy, "es-ES": legacy, "zh-TW": legacy}
    else:
        print("Error: missing SPEAKER_CONFIG in loaded speaker config module.")
        sys.exit(2)

# --- constants ---
LANG_MAP = {
    "IT": "it-IT",
    "FR": "fr-FR",
    "EN": "en-US",
    "ES": "es-ES",
    "ZH": "zh-TW",
}

DEFAULT_BREAK = "1s"

def parse_lesson_spec(spec: str | None) -> set[int] | None:
    """Parse '3', '2,4', '2-5' into a set of ints. Return None if spec is None/empty."""
    if not spec:
        return None
    spec = spec.strip()
    result: set[int] = set()
    for part in spec.split(","):
        part = part.strip()
        if not part:
            continue
        if "-" in part:
            a, b = part.split("-", 1)
            a = a.strip(); b = b.strip()
            if a.isdigit() and b.isdigit():
                start = int(a); end = int(b)
                if start > end:
                    start, end = end, start
                result.update(range(start, end + 1))
            else:
                raise ValueError(f"Invalid lesson range: '{part}'")
        else:
            if part.isdigit():
                result.add(int(part))
            else:
                raise ValueError(f"Invalid lesson number: '{part}'")
    return result or None

# --- helpers ---
def js_obj_to_json_string_safe(s: str) -> str:
    # Remove invisible characters
    for ch in ("\ufeff", "\u200b", "\u200c", "\u200d", "\u00a0"):
        s = s.replace(ch, " ")

    # Strip comments (string-aware)
    out, i, n, in_s, esc, q = [], 0, len(s), False, False, ""
    while i < n:
        c = s[i]
        if in_s:
            out.append(c)
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == q:
                in_s, q = False, ""
            i += 1
            continue
        if c in ("'", '"'):
            in_s, q = True, c
            out.append(c)
            i += 1
            continue
        if c == "/" and i+1 < n and s[i+1] == "/":
            i += 2
            while i < n and s[i] != "\n": i += 1
            continue
        if c == "/" and i+1 < n and s[i+1] == "*":
            i += 2
            while i+1 < n and not (s[i] == "*" and s[i+1] == "/"): i += 1
            i += 2
            continue
        out.append(c)
        i += 1
    s = "".join(out)

    # Remove trailing commas (string-aware)
    out, i, n, in_s, esc, q = [], 0, len(s), False, False, ""
    while i < n:
        c = s[i]
        if in_s:
            out.append(c)
            esc = (not esc and c == "\\")
            if not esc and c == q:
                in_s = False
            i += 1
            continue
        if c in ("'", '"'):
            in_s, q = True, c
            out.append(c)
            i += 1
            continue
        if c == ",":
            j = i+1
            while j < n and s[j].isspace(): j += 1
            if j < n and s[j] in "]}":
                i += 1
                continue  # skip this comma
        out.append(c)
        i += 1
    s = "".join(out)

    # Quote bare keys (string-aware)
    out, i, n, in_s, esc, q = [], 0, len(s), False, False, ""
    while i < n:
        c = s[i]
        if in_s:
            out.append(c)
            esc = (not esc and c == "\\")
            if not esc and c == q:
                in_s = False
            i += 1
            continue
        if c in ("'", '"'):
            in_s, q = True, c
            out.append(c)
            i += 1
            continue
        if c in "{,":
            out.append(c)
            i += 1
            while i < n and s[i].isspace():
                out.append(s[i])
                i += 1
            start = i
            while i < n and (s[i].isalnum() or s[i] in "_$"):
                i += 1
            key = s[start:i]
            j = i
            while j < n and s[j].isspace():
                j += 1
            if key and j < n and s[j] == ":":
                out.append(f'"{key}"')
            else:
                out.append(s[start:i])
            i = j
            continue
        out.append(c)
        i += 1
    return "".join(out)

def load_module_data(js_path: str):
    import re, json
    with open(js_path, "r", encoding="utf-8") as f:
        raw = f.read()
    m = re.search(r'const\s+moduleData\s*=\s*({.*?});', raw, re.DOTALL)
    if not m:
        raise ValueError("Cannot find `const moduleData = {...};` in JS file.")
    cleaned = js_obj_to_json_string_safe(m.group(1))
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError as e:
        start = max(0, e.pos - 60)
        end = min(len(cleaned), e.pos + 60)
        snippet = cleaned[start:end]
        raise ValueError(
            f"JSON parse failed at line {e.lineno} col {e.colno} pos {e.pos}\n"
            f"Context:\n{snippet}"
        ) from e


def resolve_lang_code(vc: str | None, override: str | None) -> str:
    if override:
        return override
    if not vc:
        return "it-IT"
    return LANG_MAP.get(vc, vc)

def get_voice_spec(speaker_name: str, lang_code: str):
    # 取該語言的整份 speaker 表；若沒有該語言，給空表防呆
    lang_map = SPEAKER_MAP_LANG.get(lang_code, {}) or {}

    # 大小寫不敏感 + 將 '-' 正規化成 '_'
    spk_raw = (speaker_name or "default").strip()
    spk_key = spk_raw.replace("-", "_").lower()

    # 建立 CI 索引表
    ci_map = {k.lower(): v for k, v in lang_map.items()}

    conf = ci_map.get(spk_key) or lang_map.get("default", {})
    if not conf:
        # 最後保險，避免 KeyError
        conf = {"voice_id": "Standard-E", "prosody": {"rate": "100%", "pitch": "0st"}}

    voice_id = conf.get("voice_id", "")
    prosody = conf.get("prosody", {})
    rate = prosody.get("rate", "100%")
    pitch = prosody.get("pitch", "0st")

    # 回報實際使用到的 speaker 名（若 fallback 就標 'default'）
    resolved = spk_raw if ci_map.get(spk_key) else "default"
    return voice_id, rate, pitch, resolved


def make_ssml(text: str, speaker_name: str, lang_code: str, break_time: str):
    voice_id, rate, pitch, resolved = get_voice_spec(speaker_name, lang_code)
    return (
        f"<speak lang='{lang_code}'>"
        f"<voice speaker='{resolved}'>"
            f"<prosody rate='{rate}' pitch='{pitch}'>"
                f"{text}<break time='{break_time}'/>"
            f"</prosody>"
        f"</voice></speak>"
    ), voice_id, resolved


# --- main generation ---
def generate_for_module(module: dict, lang_code: str, kp_speaker: str, break_time: str,
                        lesson_filter: set[int] | None = None) -> str:
    module_id = str(module.get("moduleId", "1"))
    lessons = module.get("lessons", [])
    speaking_rate = module.get("speaking_rate", "1.0")

    out_lines = []

    for lesson in lessons:
        les_id = int(lesson.get("lessonId", 1))

        # 如果有過濾條件，但這堂課不在列表，就跳過
        if lesson_filter is not None and les_id not in lesson_filter:
            continue

        levels = lesson.get("levels", [])

        for level in levels:
            lvl_id = level.get("levelId", 1)

            # (1) KeyPhrases — merge per level (single voice)
            kps = level.get("keyPhrases", [])
            kp_texts = [(kp.get("text") or "").strip() for kp in kps]
            kp_texts = [t for t in kp_texts if t]
            if kp_texts:
                voice_id, rate, pitch, resolved_speaker = get_voice_spec(kp_speaker, lang_code)
                merged_body = "".join(f"{t}<break time='{break_time}'/>" for t in kp_texts)

                ssml = (
                    f"<speak lang='{lang_code}'>"
                    f"<voice speaker='{resolved_speaker}'>"
                    f"<prosody rate='{rate}' pitch='{pitch}'>"
                    f"{merged_body}"
                    f"</prosody></voice></speak>"
                )

                fn = f"mod{module_id}-lesson{les_id}-level{lvl_id}-keyphrase.mp3"
                header = (
                    f"{fn} ========== (type=keyphrases_merged "
                    f"mod{module_id} lesson{les_id} level{lvl_id} "
                    f"speaker={resolved_speaker} voice_id={voice_id})"
                )
                out_lines.append(header)
                out_lines.append(ssml)
                out_lines.append("")

            # (2) Dialogues (per-line speaker)
            dlgs = level.get("dialogues", [])
            for j, line in enumerate(dlgs, start=1):
                it_text = (line.get("text") or "").strip()
                if not it_text:
                    continue  # 例如你的 Example 標題行（沒有 speaker 或 text 空）會被跳過
                spk = (line.get("speaker") or "default").strip()
                ssml, voice_id, resolved_speaker = make_ssml(it_text, spk, lang_code, break_time)
                fn = f"mod{module_id}-lesson{les_id}-level{lvl_id}-dialogue{j}.mp3"
                header = (f"{fn} ========== (type=dialog rate={speaking_rate} "
                          f"mod{module_id} lesson{les_id} level{lvl_id} line{j} "
                          f"speaker={resolved_speaker} voice_id={voice_id})")
                out_lines.append(header)
                out_lines.append(ssml)
                out_lines.append("")

    return "\n".join(out_lines).strip()

def main():
    ap = argparse.ArgumentParser()
    # 允許兩個位置參數：
    # - 只有 1 個時：視為 js_file（原本用法）
    # - 有 2 個時：前面是課次規格，後面是 js_file
    ap.add_argument("pos1", help="Either the lesson spec (e.g., '3' or '2,4' or '2-5') OR the path to modX.js")
    ap.add_argument("pos2", nargs="?", help="Path to modX.js if first arg is a lesson spec")
    ap.add_argument("--lesson", dest="lesson_flag", default=None,
                    help="Alternative lesson filter (e.g., '3' or '2,4' or '2-5')")
    ap.add_argument("--kp_speaker", default="Female", help="Default keyphrase voice (e.g., Female/Male)")
    ap.add_argument("--break", dest="break_time", default=DEFAULT_BREAK, help="SSML break time (e.g., 1s, 0.5s)")
    ap.add_argument("--lang", dest="lang_override", default=None, help="Override language code (e.g., it-IT)")
    args = ap.parse_args()

    # 決定 js_file 與 lesson_spec
    if args.pos2 is not None:
        lesson_spec = args.pos1
        js_file = args.pos2
    else:
        lesson_spec = args.lesson_flag
        js_file = args.pos1

    # 嘗試把 lesson_spec 解析成 set[int]；如果 None 代表不過濾
    try:
        lesson_filter = parse_lesson_spec(lesson_spec)
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(2)

    try:
        module = load_module_data(js_file)
    except Exception as e:
        print(f"Error parsing {js_file}: {e}")
        sys.exit(2)

    # 若有指定課次，但 module 裡沒有該課次，提早報錯比較友善
    if lesson_filter:
        available = {int(les.get("lessonId", 0)) for les in module.get("lessons", [])}
        missing = [x for x in sorted(lesson_filter) if x not in available]
        if missing:
            print(f"Error: lessons not found in module: {missing}. Available: {sorted(available)}")
            sys.exit(2)

    lang_code = resolve_lang_code(module.get("voice"), args.lang_override)
    print(generate_for_module(module, lang_code, args.kp_speaker, args.break_time, lesson_filter))

if __name__ == "__main__":
    main()
