#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse, json, re, sys, ast, os
from typing import Dict, List

DEFAULT_SPEAKER_CONFIG = {
    "en-US": {"voice_id": "en-US-Standard-E", "prosody": {"rate": "70%", "pitch": "1st"}},
    "fr-FR": {"voice_id": "fr-FR-Standard-E", "prosody": {"rate": "60%", "pitch": "2st"}},
    "it-IT": {"voice_id": "it-IT-Standard-E", "prosody": {"rate": "60%", "pitch": "1st"}},
}

FILENAME_RE = re.compile(r"^\s*(lesson\d+-part\d+\.mp3)\s*:?\s*$", re.IGNORECASE)
END_RE = re.compile(r"^\s*===end\s*$", re.IGNORECASE)

def parse_speaker_config(text: str) -> Dict:
    """
    Reads an optional SPEAKER_CONFIG = { ... } block at the top of the file.
    Accepts Python dict syntax with // or # comments.
    Returns merged config (user overrides > defaults).
    """
    m = re.search(r"SPEAKER_CONFIG\s*=\s*\{", text)
    if not m:
        return DEFAULT_SPEAKER_CONFIG.copy()

    start = m.start()
    # crude brace matcher to extract the dict body
    depth, i = 0, text.find("{", start)
    if i == -1:
        return DEFAULT_SPEAKER_CONFIG.copy()
    for j in range(i, len(text)):
        if text[j] == "{": depth += 1
        elif text[j] == "}":
            depth -= 1
            if depth == 0:
                block = text[i:j+1]
                break
    else:
        return DEFAULT_SPEAKER_CONFIG.copy()

    # strip comments
    cleaned = []
    for line in block.splitlines():
        line = re.sub(r"//.*$", "", line)     # remove // comments
        line = re.sub(r"#.*$", "", line)      # remove # comments
        cleaned.append(line)
    cleaned = "\n".join(cleaned)

    try:
        user_cfg = ast.literal_eval(cleaned)
        if not isinstance(user_cfg, dict):
            return DEFAULT_SPEAKER_CONFIG.copy()
    except Exception:
        return DEFAULT_SPEAKER_CONFIG.copy()

    # normalize voice_id names for Google (allow short like "Standard-E")
    merged = DEFAULT_SPEAKER_CONFIG.copy()
    for lang, cfg in user_cfg.items():
        vc = dict(cfg)
        vid = vc.get("voice_id")
        if vid and "-" not in vid:
            vc["voice_id"] = f"{lang}-{vid}"
        merged[lang] = vc
    return merged

def find_blocks(text: str) -> List[Dict[str, str]]:
    """
    Scans for:
      lessonX-partY.mp3
      <body...>
      ===end
    Returns list of dicts: {"name": ..., "body": ...}
    Ignores everything before the first filename and between blocks.
    """
    lines = text.splitlines()
    blocks = []
    cur_name, cur_buf = None, []

    def flush():
        nonlocal cur_name, cur_buf
        if cur_name is not None:
            body = "\n".join(cur_buf).strip()
            if body:
                blocks.append({"name": cur_name, "body": body})
        cur_name, cur_buf = None, []

    for line in lines:
        m = FILENAME_RE.match(line)
        if m:
            flush()
            cur_name = m.group(1)
            continue
        if END_RE.match(line):
            flush()
            continue
        if cur_name is not None:
            cur_buf.append(line)

    flush()
    return blocks

def escape_text(s: str) -> str:
    # escape & < >
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return s

def insert_punctuation_breaks(s: str) -> str:
    # sentence endings
    s = re.sub(r"([\.!?])(\s+)", r"\1<break time='550ms'/>\2", s)
    # commas/semicolons
    s = re.sub(r"(,|;)(\s+)", r"\1<break time='250ms'/>\2", s)
    # colon
    s = re.sub(r"(:)(\s+)", r"\1<break time='300ms'/>\2", s)
    # double newlines => paragraph pause
    s = re.sub(r"\n{2,}", r"<break time='650ms'/>", s)
    # single newlines => space
    s = re.sub(r"\n", " ", s)
    return s

def autotag_asterisks_as_foreign(s: str, foreign_lang: str) -> str:
    """
    ***word*** or **word** -> [FR]word[/FR] markers (temporary)
    We'll convert markers to <lang> with 500ms breaks around later.
    """
    def repl(m): return f"[FR]{m.group(1).strip()}[/FR]"
    s = re.sub(r"\*\*\*(.+?)\*\*\*", repl, s, flags=re.DOTALL)
    s = re.sub(r"\*\*(.+?)\*\*", repl, s, flags=re.DOTALL)
    return s

def convert_markers_to_lang(s: str, foreign_lang: str) -> str:
    # ensure spacing around markers (add 0.5s before & after)
    s = s.replace("[FR]", f"<break time='500ms'/><lang xml:lang='{foreign_lang}'>")
    s = s.replace("[/FR]", f"</lang><break time='500ms'/>")
    return s

def wrap_with_voice(ssml_inner: str, base_voice: str, base_rate: str, base_pitch: str) -> str:
    return (
        f"<speak>"
        f"<voice name=\"{base_voice}\">"
        f"<prosody rate=\"{base_rate}\" pitch=\"{base_pitch}\">"
        f"{ssml_inner}"
        f"</prosody></voice></speak>"
    )

def build_ssml_blocks(raw_text: str, base_lang: str, foreign_lang: str) -> List[Dict]:
    speaker_cfg = parse_speaker_config(raw_text)
    base_cfg = speaker_cfg.get(base_lang, DEFAULT_SPEAKER_CONFIG[base_lang])
    base_voice = base_cfg["voice_id"]
    base_rate = base_cfg["prosody"].get("rate", "70%")
    base_pitch = base_cfg["prosody"].get("pitch", "0st")

    # extract audio blocks
    blocks = find_blocks(raw_text)
    out = []

    for b in blocks:
        body = b["body"]

        # 1) auto-tag **…** as foreign markers
        body = autotag_asterisks_as_foreign(body, foreign_lang)

        # 2) escape text (so literal < > don’t break SSML)
        body = escape_text(body)

        # 3) punctuation-based pauses + paragraph pauses
        body = insert_punctuation_breaks(body)

        # 4) convert [FR] markers to <lang xml:lang='fr-FR'>…</lang> with 500ms pads
        body = convert_markers_to_lang(body, foreign_lang)

        # 5) produce final SSML (base voice; Google respects <lang> inside)
        ssml = wrap_with_voice(body, base_voice, base_rate, base_pitch)

        out.append({"name": b["name"], "ssml": ssml})

    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lang", required=True, help="Base narration language (e.g., en-US)")
    ap.add_argument("--input", required=True, help="Path to lesson text")
    ap.add_argument("--out", default="script.json", help="Output JSON")
    ap.add_argument("--foreign-lang", default="fr-FR", help="Foreign language tag (for **…**)")
    args = ap.parse_args()

    with open(args.input, "r", encoding="utf-8") as f:
        text = f.read()

    items = build_ssml_blocks(text, args.lang, args.foreign_lang)

    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

    print(f"✓ Wrote {args.out} with {len(items)} item(s).")

if __name__ == "__main__":
    main()
