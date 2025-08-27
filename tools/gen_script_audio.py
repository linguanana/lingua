#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Usage:
#   python3 gen_script_audio.py --input script.json --out-dir ../../italian-life/module1/video-script
#
# What it does:
# - Reads items [{"name": "...mp3", "ssml": "<speak>..."}]
# - Splits SSML per <voice name="..."> ... </voice> block
# - Splits again by bytes to keep each request < 4800 bytes
# - Synthesizes each chunk to BASE-pXX.mp3 with the correct request-level voice
# - Merges all parts to BASE.mp3 and deletes the parts

import argparse
import json
import os
import sys
import re
import subprocess
from typing import List, Tuple, Optional
from google.cloud import texttospeech

# -----------------------------------
# Config
# -----------------------------------
MAX_BYTES = 5000
TARGET_BYTES = 4800  # safety margin for SSML bytes per request
DEFAULT_VOICE_NAME = "en-US-Standard-H"
DEFAULT_VOICE_LANG = "en-US"

# Try optional merger dependency
try:
    from pydub import AudioSegment  # type: ignore
    HAVE_PYDUB = True
except Exception:
    HAVE_PYDUB = False

VOICE_BLOCK_RE = re.compile(r'(?is)<voice\s+[^>]*name="([^"]+)"[^>]*>(.*?)</voice>')
BREAK_RE = re.compile(r'(?is)<break\s+[^>]*?/>')


# -----------------------------------
# Helpers
# -----------------------------------
def infer_lang_from_voice_name(name: str) -> str:
    """Infer language_code from voice name 'xx-YY-...'."""
    m = re.match(r'^([a-z]{2}-[A-Z]{2})-', name)
    return m.group(1) if m else DEFAULT_VOICE_LANG

def ssml_wrap(inner: str) -> str:
    return f"<speak>{inner}</speak>"

def strip_outer_speak(ssml: str) -> str:
    s = ssml.strip()
    sl = s.lower()
    if sl.startswith("<speak>") and sl.endswith("</speak>"):
        return s[7:-8]
    return s

def byte_len(s: str) -> int:
    return len(s.encode("utf-8"))

def split_by_bytes(ssml_fragment: str, target_bytes: int = TARGET_BYTES) -> List[str]:
    """
    Hard split a single-voice SSML fragment into multiple <speak>...</speak> chunks.
    Tries to split on <break/> or sentence enders; falls back to byte slicing.
    Returns list of full SSML strings.
    """
    inner = ssml_fragment
    if inner.lower().startswith("<speak>") and inner.lower().endswith("</speak>"):
        inner = inner[7:-8]

    # Quick path
    if byte_len(ssml_fragment) <= target_bytes:
        return [ssml_fragment]

    tokens = re.split(r"(?<=/>)|(?<=[\.\?\!])", inner)
    chunks: List[str] = []
    cur = ""

    def push():
        nonlocal cur
        if cur.strip():
            chunks.append(ssml_wrap(cur))
        cur = ""

    for tok in tokens:
        if not tok:
            continue
        cand = cur + tok
        if byte_len(ssml_wrap(cand)) <= target_bytes:
            cur = cand
        else:
            if cur.strip():
                push()
                cur = tok
            else:
                # Single token still too big: slice by bytes
                b = tok.encode("utf-8")
                room = target_bytes - len("<speak></speak>".encode()) - 50
                start = 0
                while start < len(b):
                    end = min(start + room, len(b))
                    piece = b[start:end].decode("utf-8", errors="ignore")
                    if piece.strip():
                        chunks.append(ssml_wrap(piece))
                    start = end
                cur = ""
    if cur.strip():
        push()

    return chunks or [ssml_fragment]

def parse_voiced_sequence(full_ssml: str) -> List[Tuple[str, str]]:
    """
    Parse the SSML into an ordered list of (voice_name, fragment_ssml) where each fragment
    is a single-voice SSML <speak>...</speak> string. We attach any standalone <break/>
    that appears between voices to the @@preceding@@ fragment so pauses are preserved.
    """
    s = full_ssml.strip()
    if s.lower().startswith("<speak>") and s.lower().endswith("</speak>"):
        s = s[7:-8]

    items: List[Tuple[str, str]] = []
    last_idx = 0

    for m in VOICE_BLOCK_RE.finditer(s):
        voice_name = m.group(1)
        content = m.group(2)

        # Material between previous end and this voice start (e.g. <break/>)
        between = s[last_idx:m.start()]
        if between and items:
            prev_voice, prev_inner = items[-1]
            items[-1] = (prev_voice, prev_inner + between)

        items.append((voice_name, content))
        last_idx = m.end()

    # Tail after last voice
    tail = s[last_idx:]
    if tail and items:
        v, inner = items[-1]
        items[-1] = (v, inner + tail)

    # Wrap each inner with <speak>...</speak>
    fragments: List[Tuple[str, str]] = []
    for vname, inner in items:
        fragments.append((vname, ssml_wrap(inner)))

    return fragments

def synthesize_single_voice(client, voice_name: str, ssml_fragment: str, out_path: str):
    """Synthesize one fragment with a request-level voice (voice+locale)."""
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )
    voice = texttospeech.VoiceSelectionParams(
        name=voice_name,
        language_code=infer_lang_from_voice_name(voice_name),
    )
    response = client.synthesize_speech(
        input=texttospeech.SynthesisInput(ssml=ssml_fragment),
        voice=voice,
        audio_config=audio_config
    )
    with open(out_path, "wb") as f:
        f.write(response.audio_content)
    print(f"✓ {out_path}")

def merge_with_pydub(files: List[str], out_path: str) -> bool:
    if not HAVE_PYDUB:
        return False
    combined = AudioSegment.empty()
    for f in files:
        combined += AudioSegment.from_file(f, format="mp3")
    combined.export(out_path, format="mp3")
    print(f"★ merged into {out_path} (pydub)")
    return True

def merge_with_ffmpeg(files: List[str], out_path: str) -> bool:
    # Use ffmpeg concat demuxer
    if not files:
        return False
    list_path = out_path + ".concat.txt"
    with open(list_path, "w", encoding="utf-8") as fp:
        for f in files:
            fp.write(f"file '{os.path.abspath(f)}'\n")
    try:
        cmd = [
            "ffmpeg", "-y", "-f", "concat", "-safe", "0",
            "-i", list_path, "-c", "copy", out_path
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"★ merged into {out_path} (ffmpeg)")
        return True
    except Exception as e:
        print(f"[warn] ffmpeg merge failed: {e}")
        return False
    finally:
        try:
            os.remove(list_path)
        except Exception:
            pass

def merge_and_cleanup(part_files: List[str], final_path: str):
    if not part_files:
        return
    ok = merge_with_pydub(part_files, final_path)
    if not ok:
        ok = merge_with_ffmpeg(part_files, final_path)
    if ok:
        # delete parts
        for f in part_files:
            try:
                os.remove(f)
            except Exception:
                pass
    else:
        print("[warn] Could not merge parts automatically. Parts were kept.")

# -----------------------------------
# Main
# -----------------------------------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True, help="Path to input JSON file from gen_script_list.py")
    ap.add_argument("--out-dir", default="./", help="Output directory for MP3 files")
    args = ap.parse_args()

    client = texttospeech.TextToSpeechClient()

    # Read JSON
    try:
        with open(args.input, "r", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: Input file not found at {args.input}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format in {args.input}: {e}")
        sys.exit(1)

    if not isinstance(data, list):
        print("Error: JSON root must be a list.")
        sys.exit(1)

    os.makedirs(args.out_dir, exist_ok=True)
    print(f"Starting audio generation for {len(data)} item(s)...")

    for item in data:
        name = (item.get("name") or "").strip()
        ssml_text = (item.get("ssml") or "").strip()

        if not name or not ssml_text:
            print("Warning: Skipping malformed item (missing name/ssml).")
            continue

        base = name[:-4] if name.lower().endswith(".mp3") else name
        final_path = os.path.join(args.out_dir, base + ".mp3")

        try:
            # 1) Parse per-voice fragments
            voiced_frags = parse_voiced_sequence(ssml_text)
            if not voiced_frags:
                print(f"[warn] {name}: no <voice> blocks detected; using default voice.")
                voiced_frags = [(DEFAULT_VOICE_NAME, ssml_text)]

            # 2) Synthesize to parts (always as -pXX)
            part_files: List[str] = []
            part_idx = 1
            for voice_name, fragment_ssml in voiced_frags:
                chunks = split_by_bytes(fragment_ssml, TARGET_BYTES)
                for chunk in chunks:
                    out_path = os.path.join(args.out_dir, f"{base}-p{part_idx:02}.mp3")
                    synthesize_single_voice(client, voice_name, chunk, out_path)
                    part_files.append(out_path)
                    part_idx += 1

            # 3) Merge all parts into final, then delete parts
            merge_and_cleanup(part_files, final_path)

        except Exception as e:
            print(f"Error generating audio for {name}: {e}")
            continue

    print("Audio generation complete.")

if __name__ == "__main__":
    main()
