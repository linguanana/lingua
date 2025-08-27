#!/usr/bin/env python3
# gen_ep_list_azure.py — Generate Azure SSML from episodeData.js using speaker_azure.py

"""
Usage:
  # all topics
  python3 gen_ep_list_azure.py path/to/ep1.js > ep_azure

  # only topic 2
  python3 gen_ep_list_azure.py 2 path/to/ep1.js > ep_azure_t2
"""

import json
import re
import sys
import html
import unicodedata
from pathlib import Path

from speaker_azure import SPEAKER_CONFIG  # Azure voices + optional "style"

# --- tolerant loader for episodeData.js ---
def load_episode_data(js_path: str) -> dict:
    text = Path(js_path).read_text(encoding="utf-8")
    m = re.search(r'const\s+episodeData\s*=\s*({.*?});', text, re.DOTALL)
    if not m:
        raise ValueError("Could not find `const episodeData = {...};` in JS file.")
    obj = m.group(1)
    # strip JS comments
    obj = re.sub(r'//.*?$', '', obj, flags=re.MULTILINE)
    obj = re.sub(r'/\*.*?\*/', '', obj, flags=re.DOTALL)
    # remove trailing commas
    obj = re.sub(r',\s*([}\]])', r'\1', obj)
    # quote bare keys
    obj = re.sub(r'([{,]\s*)([A-Za-z_]\w*)(\s*:\s*)', r'\1"\2"\3', obj)
    return json.loads(obj)

# --- Azure prosody conversions ---
def to_azure_rate(rate_str: str) -> str:
    m = re.fullmatch(r'\s*(\d+)\s*%\s*', (rate_str or ''))
    if not m: return '+0%'
    delta = int(m.group(1)) - 100
    return f'{delta:+d}%'

def to_azure_pitch(pitch_str: str) -> str:
    s = (pitch_str or '').strip()
    if not s: return '+0st'
    return s if s.startswith(('+','-')) else f'+{s}'

def pick_role_cfg(lang_code: str, role: str) -> dict:
    lang = SPEAKER_CONFIG.get(lang_code, {})
    return lang.get(role) or lang.get('default') or {}

# --- Build Azure SSML (short, conditional break + optional style) ---
_ENDS_WITH_PUNCT = re.compile(r'[.!?…。！？；;:]\s*$')

def build_azure_ssml(lang_code: str, voice_name: str, rate: str, pitch: str,
                     text: str, break_s: str = "0.3s", style: str | None = None) -> str:
    rate_adj  = to_azure_rate(rate)
    pitch_adj = to_azure_pitch(pitch)
    # add a tiny break only if there is no sentence-ending punctuation
    needs_break = not _ENDS_WITH_PUNCT.search(text)
    br = f"<break time='{break_s}'/>" if (break_s not in ("0","0s","0.0s") and needs_break) else ""

    if style:
        return (
            f"<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' "
            f"xmlns:mstts='https://www.w3.org/2001/mstts' xml:lang='{lang_code}'>"
            f"<voice name='{voice_name}'>"
            f"<mstts:express-as style='{style}'>"
            f"<prosody rate='{rate_adj}' pitch='{pitch_adj}'>"
            f"{text}{br}"
            f"</prosody></mstts:express-as></voice></speak>"
        )
    else:
        return (
            f"<speak version='1.0' xml:lang='{lang_code}'>"
            f"<voice name='{voice_name}'>"
            f"<prosody rate='{rate_adj}' pitch='{pitch_adj}'>"
            f"{text}{br}"
            f"</prosody></voice></speak>"
        )

# --- Normalization to avoid Azure cancels on fancy punctuation/spaces ---
def normalize_for_azure(s: str) -> str:
    if not s:
        return ""
    s = unicodedata.normalize("NFKC", s)
    s = (s
         .replace("\u00A0", " ")   # NBSP
         .replace("\u202F", " ")   # narrow NBSP
         .replace("\u2007", " ")   # figure space
         .replace("\u2009", " ")   # thin space
         .replace("\u200B", "")    # ZWSP
         .replace("\u200C", "")    # ZWNJ
         .replace("\u200D", "")    # ZWJ
         .replace("\ufeff", ""))   # BOM
    s = (s.replace("’", "'")
         .replace("“", '"').replace("”", '"')
         .replace("–", "-").replace("—", "-"))
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\s+([!?;:])", r"\1", s)  # trim space before French punct
    return s.strip()

# --- Main generator ---
def generate(js_file_path: str, topic_filter: int | None) -> str:
    data = load_episode_data(js_file_path)
    episode_id    = data.get('episodeId', '1')
    speaking_rate = data.get('speaking_rate', '1.0')  # info only
    language_code = data.get('voice', 'en-US')

    out_lines = []
    for topic in data.get('topics', []):
        try:
            topic_id = int(topic.get('topicId', 1))
        except Exception:
            topic_id = 1
        if topic_filter is not None and topic_id != topic_filter:
            continue

        for scene in topic.get('scenes', []):
            scene_id = scene.get('sceneId', '1')

            for i, line in enumerate(scene.get('dialogue', []), start=1):
                role = line.get('speaker', 'default')

                # text -> normalize -> escape
                text_raw  = (line.get('text') or '')
                text_norm = normalize_for_azure(text_raw)
                text      = html.escape(text_norm, quote=True)

                role_cfg    = pick_role_cfg(language_code, role)
                azure_voice = role_cfg.get('voice_id') or 'en-US-JennyNeural'
                prosody     = role_cfg.get('prosody', {})
                rate        = prosody.get('rate', '100%')
                pitch       = prosody.get('pitch', '0st')
                style       = role_cfg.get('style')  # optional: e.g. "cheerful"

                mp3_filename = f"ep{episode_id}_topic{topic_id}_scene{scene_id}_d{i}.mp3"
                header = (f"{mp3_filename} ========== "
                          f"(ep{episode_id} topic{topic_id} scene{scene_id} dialog{i} "
                          f"tts=azure rate={speaking_rate})")
                ssml = build_azure_ssml(language_code, azure_voice, rate, pitch, text,
                                        break_s="0.3s", style=style)

                out_lines.append(header)
                out_lines.append(ssml)
                out_lines.append("")  # spacer

    return "\n".join(out_lines).strip()

# --- CLI ---
if __name__ == "__main__":
    if len(sys.argv) == 2:
        topic_filter = None
        js_file = sys.argv[1]
    elif len(sys.argv) == 3 and sys.argv[1].isdigit():
        topic_filter = int(sys.argv[1])
        js_file = sys.argv[2]
    else:
        print("Usage: python3 gen_ep_list_azure.py [<topic_number>] <episodeData.js>")
        sys.exit(1)

    print(generate(js_file, topic_filter))
