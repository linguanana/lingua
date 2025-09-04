# gen_en_intro.py
# Generate ONLY:
# - ep{ep}_topic{topic}_intro.mp3 (topic intro, EN)
# - ep{ep}_topic{topic}_scene{scene}_intro.mp3 (scene intro, EN)
# python gen_en_intros.py path/to/episodeData.js out_dir/

import re
from pathlib import Path
import unicodedata
import json5
import random
from google.cloud import texttospeech

# ====== CONFIG ======
VOICE  = "en-US-Standard-H"   # 語音
RATE   = 0.8                  # 語速
PITCH  = 3                    # 音高 (semitones)
# =====================

# Scene intro 停頓
BREAK_MS_SCENE = 2500          # 每個 scene intro 後停頓 1.5 秒
BREAK_MS_TOPIC_RANGE_BY_ID = { 1: (2500, 2500) }  # e.g., 3.6s for Topic 1

# Topic intro 停頓
BREAK_MS_TOPIC_DEFAULT = 2000  # 其他 topic 預設停頓 2 秒
BREAK_MS_TOPIC_RANGE_BY_ID = {
    1: (3600, 3600),           # Topic 1 固定停頓 3.6 秒
}
# =====================

def read_episode_data(path: str):
    text = Path(path).read_text(encoding="utf-8")
    m = re.search(r'const\s+episodeData\s*=\s*', text)
    if m:
        text = text[m.end():]
        end = text.rfind('};')
        if end != -1:
            text = text[:end+1]
    return json5.loads(text)

def ensure_dir(d: str):
    Path(d).mkdir(parents=True, exist_ok=True)

def norm_quotes(s: str) -> str:
    return s.replace("“", '"').replace("”", '"').replace("’", "'").replace("‘", "'") \
            .replace("—", "-").replace("–", "-")

def strip_emoji(s: str) -> str:
    return "".join(ch for ch in s if ch.isprintable() and unicodedata.category(ch) != "So")

def clean_for_tts(s: str) -> str:
    return strip_emoji(norm_quotes(s or "")).strip()

def ssml_wrap_ms(text: str, ms: int) -> str:
    text = clean_for_tts(text)
    return f"<speak>{text}<break time='{ms/1000:.1f}s'/></speak>"

def choose_topic_break_ms(topic_id: int) -> int:
    rng = BREAK_MS_TOPIC_RANGE_BY_ID.get(topic_id)
    if rng:
        return random.randint(rng[0], rng[1])
    return BREAK_MS_TOPIC_DEFAULT

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

# ---------- Filenames ----------
def fname_topic_intro(ep_id: int, topic_id: int) -> str:
    return f"ep{ep_id}_topic{topic_id}_intro.mp3"

def fname_scene_intro(ep_id: int, topic_id: int, scene_id: int) -> str:
    return f"ep{ep_id}_topic{topic_id}_scene{scene_id}_intro.mp3"

# ---------- Main ----------
def main():
    import sys
    if len(sys.argv) < 3:
        print("Usage: python gen_en_intros.py episodeData.js out_dir")
        sys.exit(1)
    episode_file = sys.argv[1]
    out_dir = Path(sys.argv[2])
    ensure_dir(out_dir)

    data = read_episode_data(episode_file)
    ep_id = int(data.get("episodeId", 1))
    topics = data.get("topics", [])

    for t in topics:
        topic_id = int(t.get("topicId", 1))
        topic_title = clean_for_tts(t.get("topic", f"Topic {topic_id}"))

        # Topic intro
        out_topic = out_dir / fname_topic_intro(ep_id, topic_id)
        topic_break = choose_topic_break_ms(topic_id)

        # 🖨️ debug print
        print(f"-> {out_topic.name} (break = {topic_break} ms)")

        ssml = ssml_wrap_ms(f"Topic {topic_id}: {topic_title}", topic_break)
        synth_ssml_to_mp3(ssml, out_topic)

        # Scene intros
        for s in t.get("scenes", []):
            scene_id = int(s.get("sceneId", 1))
            scene_title = clean_for_tts(s.get("scene", f"Day {scene_id}"))
            out_scene = out_dir / fname_scene_intro(ep_id, topic_id, scene_id)

            # Topic 1 / Scene 1: prepend the long topic break before saying "Day 1 ..."
            if topic_id == 1 and scene_id == 1:
                topic_break = choose_topic_break_ms(topic_id)  # e.g., 3600 ms
                print(f"-> {out_scene.name} (pre-break = {topic_break} ms, tail = {BREAK_MS_SCENE} ms)")
                ssml = (
                f"<speak>"
                f"<break time='{topic_break/1000:.1f}s'/>"
                f"{scene_title}"
                f"<break time='{BREAK_MS_SCENE/1000:.1f}s'/>"
                f"</speak>"
                )
            else:
                print(f"-> {out_scene.name} (break = {BREAK_MS_SCENE} ms)")
                ssml = ssml_wrap_ms(scene_title, BREAK_MS_SCENE)

                synth_ssml_to_mp3(ssml, out_scene)


    print("Done.")

if __name__ == "__main__":
    main()
