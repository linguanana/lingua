#!/usr/bin/env python3
# gen_audio_azure.py — Synthesize MP3s from Azure SSML and merge scenes.

"""
Usage:
  export AZURE_SPEECH_KEY="your_key"
  export AZURE_SPEECH_REGION="eastus"

  python3 gen_audio_azure.py ep_azure.txt ../../french-life/starter/audio/

Notes:
  - Input must be Azure-style SSML (from gen_ep_list_azure.py).
  - Output uses 24kHz / 160kbps MP3 for good quality.
"""

import os
import re
import sys
from typing import List, Tuple, Dict

from pydub import AudioSegment

def ensure_azure():
    try:
        import azure.cognitiveservices.speech as speechsdk
        return speechsdk
    except Exception:
        print("ERROR: Please install Azure SDK: pip install azure-cognitiveservices-speech")
        sys.exit(2)

def read_blocks(ssml_file_path: str) -> List[Tuple[str, str]]:
    with open(ssml_file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    blocks = []
    current_name = None
    buf: List[str] = []
    for line in lines:
        s = line.strip()
        if not s:
            continue
        if "==========" in s:
            if current_name and buf:
                blocks.append((current_name, " ".join(buf)))
            current_name = s.split("==========")[0].strip()
            buf = []
        else:
            buf.append(s)
    if current_name and buf:
        blocks.append((current_name, " ".join(buf)))
    return blocks

def synthesize_azure_block(speechsdk, mp3_filename: str, ssml: str, out_dir: str) -> bool:
    key = os.getenv("AZURE_SPEECH_KEY")
    region = os.getenv("AZURE_SPEECH_REGION")
    if not key or not region:
        print("ERROR: Missing AZURE_SPEECH_KEY or AZURE_SPEECH_REGION.")
        return False

    speech_config = speechsdk.SpeechConfig(subscription=key, region=region)
    # High-quality MP3 (good default). You can switch to WAV for lossless.
    speech_config.set_speech_synthesis_output_format(
        speechsdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3
    )

    # sanity check: encourage correct SSML
    if re.search(r"<voice\s+speaker=", ssml) and not re.search(r"<voice\s+name=", ssml):
        print(f"[WARN] SSML seems Google-style (<voice speaker=...>). Use gen_ep_list_azure.py to generate Azure SSML.")

    out_path = os.path.join(out_dir, mp3_filename)
    audio_config = speechsdk.audio.AudioOutputConfig(filename=out_path)
    synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

    try:
        result = synthesizer.speak_ssml_async(ssml).get()
        if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print(f"[Azure] Wrote {out_path}")
            return True
        else:
            detail = getattr(result, "cancellation_details", None)
            print(f"[Azure][ERROR] {mp3_filename}: {result.reason} {detail}")
            return False
    except Exception as e:
        print(f"[Azure][ERROR] {mp3_filename}: {e}")
        return False

def combine_scene_audio(audio_dir: str):
    print(f"\n--- 合併音訊：{audio_dir} ---")
    if not os.path.isdir(audio_dir):
        print(f"錯誤：找不到目錄 '{audio_dir}'。")
        return

    # unify params during merge
    def norm(seg: AudioSegment) -> AudioSegment:
        return seg.set_frame_rate(48000).set_channels(1)

    scenes: Dict[str, List[Tuple[int, str]]] = {}
    pat = re.compile(r'(ep\d+_topic\d+_scene\d+)_d(\d+)\.mp3')

    for fn in os.listdir(audio_dir):
        m = pat.match(fn)
        if m:
            scenes.setdefault(m.group(1), []).append((int(m.group(2)), fn))

    for scene_prefix, items in scenes.items():
        items.sort(key=lambda x: x[0])
        combined = None
        print(f"\n合併場景：{scene_prefix} → {len(items)} 段")
        for _, fn in items:
            p = os.path.join(audio_dir, fn)
            try:
                seg = AudioSegment.from_file(p)
                seg = norm(seg).fade_in(5).fade_out(5)
                combined = seg if combined is None else combined + AudioSegment.silent(200) + seg
            except Exception as e:
                print(f"警告：無法載入 {fn}，跳過。錯誤：{e}")
        if combined:
            out_path = os.path.join(audio_dir, f"{scene_prefix}.mp3")
            combined.export(out_path, format="mp3", bitrate="192k")
            print(f"已匯出：{out_path}")
            # 清理
            for _, fn in items:
                try:
                    os.remove(os.path.join(audio_dir, fn))
                except Exception as e:
                    print(f"警告：刪除 {fn} 失敗：{e}")

    # (optional) module dialogue merge: modX-lessonY-levelZ-dialogueN.mp3 → one file
    mod_pat = re.compile(r'^(mod\d+-lesson\d+-level\d+)-dialogue(\d+)\.mp3$')
    mod_groups: Dict[str, List[Tuple[int, str]]] = {}

    for fn in os.listdir(audio_dir):
        m = mod_pat.match(fn)
        if m:
            base, num = m.group(1), int(m.group(2))
            mod_groups.setdefault(base, []).append((num, fn))

    for base, items in mod_groups.items():
        items.sort(key=lambda x: x[0])
        combined = None
        print(f"\n[MOD] 合併：{base}-dialogue → {len(items)} 段")
        for _, fn in items:
            p = os.path.join(audio_dir, fn)
            try:
                seg = AudioSegment.from_file(p)
                seg = norm(seg).fade_in(5).fade_out(5)
                combined = seg if combined is None else combined + AudioSegment.silent(200) + seg
            except Exception as e:
                print(f"[MOD][WARN] 無法載入 {fn}：{e}")
        if combined:
            out_path = os.path.join(audio_dir, f"{base}-dialogue.mp3")
            combined.export(out_path, format="mp3", bitrate="192k")
            print(f"[MOD] 已匯出：{out_path}")
            for _, fn in items:
                try:
                    os.remove(os.path.join(audio_dir, fn))
                except Exception as e:
                    print(f"[MOD][WARN] 刪除 {fn} 失敗：{e}")

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 gen_audio_azure.py <ssml_file> <output_dir>")
        sys.exit(1)

    ssml_file = sys.argv[1]
    out_dir = sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)

    speechsdk = ensure_azure()

    blocks = read_blocks(ssml_file)
    print(f"DEBUG: Azure SSML blocks = {len(blocks)}")

    for name, ssml in blocks:
        synthesize_azure_block(speechsdk, name, ssml, out_dir)

    combine_scene_audio(out_dir)
    print("Done.")

if __name__ == "__main__":
    main()
