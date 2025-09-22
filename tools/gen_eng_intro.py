# gen_en_intro.py
# Generate ONLY:
# - ep{ep}_topic{topic}_intro.mp3 (topic intro, EN)
# - ep{ep}_topic{topic}_scene{scene}_intro.mp3 (scene intro, EN)
# python gen_en_intros.py path/to/episodeData.js out_dir/
# Notes:
# - This script adds BOTH a pre-speech break and a post-speech break to
#   every intro line. Configure them in the CONFIG section below.


import re
from pathlib import Path
import unicodedata
import json5
from google.cloud import texttospeech

# ====== CONFIG ======
VOICE  = "en-US-Standard-H"   # GCP TTS voice name (en-US)
RATE   = 0.8                  # speaking rate
PITCH  = 3                    # semitones; can be float

# ---- Break settings (milliseconds) ----
# Choose 2000 (2s) or 3000 (3s), or any value you like.
PRE_BREAK_MS  = 1000   # pause BEFORE speaking each intro
POST_BREAK_MS = 2000   # pause AFTER speaking each intro
# ======================================


# ---------- Helpers ----------
def ensure_dir(d: str):
    Path(d).mkdir(parents=True, exist_ok=True)

def norm_quotes(s: str) -> str:
    # Normalize various punctuation/quotes to ASCII
    return (s or "").replace("“", '"').replace("”", '"') \
                    .replace("’", "'").replace("‘", "'") \
                    .replace("—", "-").replace("–", "-")

def strip_emoji(s: str) -> str:
    # Remove Symbol, Other category which often captures emoji
    return "".join(ch for ch in s if ch.isprintable() and unicodedata.category(ch) != "So")

def clean_for_tts(s: str) -> str:
    # Step 1: normalize punctuation and strip emoji
    s = strip_emoji(norm_quotes(s)).strip()
    # Step 2: remove anything inside parentheses (and the parentheses themselves)
    s = re.sub(r"\([^)]*\)", "", s)
    # Step 3: cleanup多餘空格
    return " ".join(s.split())

def ssml_with_breaks(text: str, pre_ms: int, post_ms: int) -> str:
    """Wrap a line with <speak>, adding pre & post breaks."""
    text = clean_for_tts(text)
    pre  = f"<break time='{pre_ms/1000:.1f}s'/>" if pre_ms  > 0 else ""
    post = f"<break time='{post_ms/1000:.1f}s'/>" if post_ms > 0 else ""
    return f"<speak>{pre}{text}{post}</speak>"

def synth_ssml_to_mp3(ssml: str, out_path: Path):
    client = texttospeech.TextToSpeechClient()
    input_ = texttospeech.SynthesisInput(ssml=ssml)
    voice = texttospeech.VoiceSelectionParams(language_code="en-US", name=VOICE)
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        speaking_rate=RATE,
        pitch=float(PITCH),
    )
    resp = client.synthesize_speech(input=input_, voice=voice, audio_config=audio_config)
    out_path.write_bytes(resp.audio_content)

def read_episode_data(path: str):
    """
    Read a JS file that contains: const episodeData = { ... };
    and return the dict.
    """
    text = Path(path).read_text(encoding="utf-8")
    m = re.search(r'const\s+episodeData\s*=\s*', text)
    if not m:
        # Fall back: try to load whole file if it is pure JSON5
        return json5.loads(text)
    text = text[m.end():]          # slice after 'const episodeData ='
    end = text.rfind('};')         # include final brace
    if end != -1:
        text = text[:end+1]
    return json5.loads(text)

# ---------- Filenames ----------
def fname_topic_intro(ep_id: int, topic_id: int) -> str:
    return f"ep{ep_id}_topic{topic_id}_intro.mp3"

def fname_scene_intro(ep_id: int, topic_id: int, scene_id: int) -> str:
    return f"ep{ep_id}_topic{topic_id}_scene{scene_id}_intro.mp3"


# ---------- Main ----------
def main():
    import sys
    if len(sys.argv) < 3:
        print("Usage: python gen_en_intros.py episodeData.js out_dir/")
        sys.exit(1)

    episode_file = sys.argv[1]
    out_dir = Path(sys.argv[2])
    ensure_dir(out_dir)

    data = read_episode_data(episode_file)
    ep_id = int(data.get("episodeId", 1))
    topics = data.get("topics", [])
    ep_title = clean_for_tts(data.get("episode", f"Episode {ep_id}"))

    # ---- Episode intro ----
    out_ep = out_dir / f"ep{ep_id}_intro.mp3"
    print(f"-> {out_ep.name} (pre = {PRE_BREAK_MS} ms, post = {POST_BREAK_MS} ms)")
    ssml = ssml_with_breaks(ep_title, PRE_BREAK_MS, POST_BREAK_MS)
    synth_ssml_to_mp3(ssml, out_ep)

    for t in topics:
        topic_id = int(t.get("topicId", 1))
        topic_title = clean_for_tts(t.get("topic", f"Topic {topic_id}"))

        # ---- Topic intro ----
        out_topic = out_dir / fname_topic_intro(ep_id, topic_id)
        print(f"-> {out_topic.name} (pre = {PRE_BREAK_MS} ms, post = {POST_BREAK_MS} ms)")
        ssml = ssml_with_breaks(f"Topic {topic_id}: {topic_title}", PRE_BREAK_MS, POST_BREAK_MS)
        synth_ssml_to_mp3(ssml, out_topic)

        # ---- Scene intros ----
        scenes = t.get("scenes", [])
        for s in scenes:
            scene_id = int(s.get("sceneId", 1))
            scene_title = clean_for_tts(s.get("scene", f"Day {scene_id}"))
            out_scene = out_dir / fname_scene_intro(ep_id, topic_id, scene_id)

            print(f"-> {out_scene.name} (pre = {PRE_BREAK_MS} ms, post = {POST_BREAK_MS} ms)")
            ssml = ssml_with_breaks(scene_title, PRE_BREAK_MS, POST_BREAK_MS)
            synth_ssml_to_mp3(ssml, out_scene)

    print("Done.")

if __name__ == "__main__":
    main()
