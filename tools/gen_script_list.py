#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 使用方法
# $ python3 gen_script_list.py --foreign-lang fr-FR --input ../../french-life/module1/video-script/lesson1.txt > script
# $ python3 gen_script_list.py --foreign-lang it-IT --input ../../italian-life/module1/video-script/lesson7.txt > script

import argparse, json, re, sys, ast, os
from typing import Dict, List

# we are not using this , we use one in inout file
DEFAULT_SPEAKER_CONFIG = {
    "en-US": {"voice_id": "en-US-Standard-H", "prosody": {"rate": "88%", "pitch": "2st"}},
    "fr-FR": {"voice_id": "fr-FR-Standard-E", "prosody": {"rate": "60%", "pitch": "2st"}},
    "it-IT": {"voice_id": "it-IT-Standard-E", "prosody": {"rate": "70%", "pitch": "2st"}},
    "es-ES": {"voice_id": "it-IT-Standard-E", "prosody": {"rate": "70%", "pitch": "2st"}},
}

# 設定外語單字前後的停頓時間（毫秒)
FOREIGN_PAUSE_MS = 500

#FILENAME_RE = re.compile(r"^\s*(lesson\d+-part\d+\.mp3)\s*:?\s*$", re.IGNORECASE)
FILENAME_RE = re.compile(r"^\s*([\w\-\_]+\.mp3)\s*:?\s*$", re.IGNORECASE)
END_RE = re.compile(r"^\s*===\s*end\b.*$", re.IGNORECASE)

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
    # 先標記段落（兩個以上換行）
    s = re.sub(r'\n{1,}', r'<break time="1000ms"/>', s)

    # 將單個換行轉空白（不再額外加 break，避免重複）
    s = s.replace('\n', ' ')

    # 句末停頓
    s = re.sub(r'([\.!])(\s+)', r'\1<break time="500ms"/>\2', s)
    #s = re.sub(r'([\.!?])(\s+)', r'\1<break time="550ms"/>\2', s)

    # 逗號、分號：修正你的 ( ,; ) regex
    #s = re.sub(r'([,;])(\s+)', r'\1<break time="250ms"/>\2', s)

    # 冒號
    #s = re.sub(r'(:)(\s+)', r'\1<break time="300ms"/>\2', s)

    # 合併多個空白
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def autotag_asterisks_as_foreign(s: str, foreign_lang: str) -> str:
    """
    Marks **word**, ***word***, or @@word@@ as foreign content.
    """
    # Use a unique temporary marker to avoid collisions
    def repl(text):
        return f"[[{foreign_lang}]]{text.strip()}[[/]]"

    # handle **word** and ***word***
    s = re.sub(r"\*\*\*(.+?)\*\*\*", lambda m: repl(m.group(1)), s, flags=re.DOTALL)
    s = re.sub(r"\*\*(.+?)\*\*",     lambda m: repl(m.group(1)), s, flags=re.DOTALL)

    # handle @@word@@
    s = re.sub(r"@@(.+?)@@",         lambda m: repl(m.group(1)), s, flags=re.DOTALL)

    return s

def build_ssml_blocks(raw_text: str, base_lang: str, foreign_lang: str) -> List[Dict]:
    speaker_cfg = parse_speaker_config(raw_text)
    base_cfg = speaker_cfg.get(base_lang, DEFAULT_SPEAKER_CONFIG.get(base_lang, {}))
    foreign_cfg = speaker_cfg.get(foreign_lang, DEFAULT_SPEAKER_CONFIG.get(foreign_lang, {}))

    if not base_cfg or not foreign_cfg:
        print("錯誤: SPEAKER_CONFIG 中缺少基礎語言或外語設定。")
        sys.exit(1)

    # Extract audio blocks from the text file
    blocks = find_blocks(raw_text)
    out = []

    for b in blocks:
        body = b["body"]

        # 1) Auto-tag @@...@@ as foreign markers
        body = autotag_asterisks_as_foreign(body, foreign_lang)

        # 2) Escape text to be SSML-safe
        body = escape_text(body)

        # 3) Insert punctuation-based pauses
        body = insert_punctuation_breaks(body)

        # 4) Split the text by the foreign language markers
        parts = re.split(r"(\[\[" + re.escape(foreign_lang) + r"\]\](?:.+?)\[\[/\]\])", body)

        # 5) Build the SSML with separate voice tags for each language
        ssml_inner = []
        for part in parts:
            if not part:
                continue

            m = re.match(r"\[\[(.+?)\]\](.+?)\[\[/\]\]", part)
            if m:
                # This is a foreign language segment
                lang_code = m.group(1)
                text_content = m.group(2).strip()
                cfg = speaker_cfg.get(lang_code, {})
                if not cfg:
                    print(f"警告: 找不到語言 {lang_code} 的設定，使用基礎語言。")
                    cfg = base_cfg

                ssml_inner.append(
                    f"<break time='{FOREIGN_PAUSE_MS}ms'/>"
                    f"<voice name=\"{cfg['voice_id']}\">"
                    f"<prosody rate=\"{cfg['prosody']['rate']}\" pitch=\"{cfg['prosody']['pitch']}\">"
                    f"{text_content}"
                    f"</prosody>"
                    f"</voice>"
                    f"<break time='{FOREIGN_PAUSE_MS}ms'/>"
                )
            else:
                # This is the base language segment
                ssml_inner.append(
                    f"<voice name=\"{base_cfg['voice_id']}\">"
                    f"<prosody rate=\"{base_cfg['prosody']['rate']}\" pitch=\"{base_cfg['prosody']['pitch']}\">"
                    f"{part.strip()}"
                    f"</prosody>"
                    f"</voice>"
                )

        final_ssml = f"<speak>{''.join(ssml_inner)}</speak>"

        out.append({"name": b["name"], "ssml": final_ssml})

    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lang", default="en-US", help="Base narration language (e.g., en-US)")
    ap.add_argument("--input", required=True, help="Path to lesson text")
    ap.add_argument("--out", default="script.json", help="Output JSON")
    ap.add_argument("--foreign-lang", default="fr-FR", help="Foreign language tag (for @@…@@)")
    args = ap.parse_args()

    with open(args.input, "r", encoding="utf-8") as f:
        text = f.read()

    items = build_ssml_blocks(text, args.lang, args.foreign_lang)

    json.dump(items, sys.stdout, ensure_ascii=False, indent=2)

    print(f"\n✓ Generated {len(items)} item(s). Use ' > filename.json' to save.", file=sys.stderr)


if __name__ == "__main__":
    main()
