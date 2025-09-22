#!/usr/bin/env python3
# Convert EP.js dialogues into grouped SRT subtitles
# Supports: 2 lines per block OR 4 lines per block
# Optional: filter by topicId

# 匯出 topic 1 (Greetings)，2行一組
# python gen_srt.py ep1.js 2 1
# 若你想調整每行時長/行間停頓，修改 LINE_SECS / GAP_SECS

import re
import json5
import sys
from pathlib import Path

# ===== Timing config =====
LINE_SECS = 3.0     # 每行台詞顯示時間（秒）
GAP_SECS  = 1.5     # 行與行之間的額外停頓（秒）
# ========================

def clean_text(text: str) -> str:
    import re
    text = text.replace("’", "'").replace("‘", "'")
    text = text.replace("“", '"').replace("”", '"')
    text = text.replace("‛", "'").replace("‚", "'")
    text = text.replace("´", "'").replace("`", "'")
    text = re.sub(r"[\u200B-\u200D\uFEFF\u00A0]", " ", text)
    return text.strip()


def load_episode(js_path: str) -> dict:
    text = Path(js_path).read_text(encoding="utf-8")
    m = re.search(r'const\s+episodeData\s*=\s*({.*});', text, re.DOTALL)
    if not m:
        raise ValueError("Could not find episodeData in file.")
    obj_text = m.group(1)
    return json5.loads(obj_text)

def group_dialogue(dialogue, group_size):
    for i in range(0, len(dialogue), group_size):
        yield dialogue[i:i+group_size]

def fmt_ts(total_seconds: float) -> str:
    # 轉成 HH:MM:SS,mmm
    ms = int(round(total_seconds * 1000))
    h, rem = divmod(ms, 3600_000)
    m, rem = divmod(rem, 60_000)
    s, ms = divmod(rem, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"

def make_srt_block(idx, lines, start_sec):
    # 總時長 = 每行顯示時間 * 行數 + 行間停頓 * (行數 - 1)
    n = len(lines)
    duration = n * LINE_SECS + max(0, n - 1) * GAP_SECS

    start = float(start_sec)
    end = start + duration
    start_ts = fmt_ts(start)
    end_ts   = fmt_ts(end)

    # 映射 Male / Female → emoji
    speaker_map = {
        "Male": "🤵🏻‍♂️",
        "Female": "👩🏼‍🦰",
        "M_Chef": "👨🏼‍🍳"
    }

    text_lines = []
    for line in lines:
        speaker = speaker_map.get(line.get('speaker', ''), line.get('speaker', ''))
        text = clean_text(line.get("text", ""))
        text_lines.append(f"{speaker}: {text}")

    block = f"{idx}\n{start_ts} --> {end_ts}\n" + "\n".join(text_lines) + "\n"
    return block, end

def export_srt(data, group_size=2, topic_filter=None):
    srt_lines = []
    counter = 1
    current_time = 0.0
    for topic in data.get("topics", []):
        if topic_filter is not None and str(topic.get("topicId")) != str(topic_filter):
            continue
        for scene in topic.get("scenes", []):
            for chunk in group_dialogue(scene.get("dialogue", []), group_size):
                block, current_time = make_srt_block(counter, chunk, current_time)
                srt_lines.append(block)
                counter += 1
    return "\n".join(srt_lines)

def main():
    if len(sys.argv) < 3:
        print("Usage: python gen_srt.py path/to/ep.js mode(2|4) [topicId]")
        sys.exit(1)

    js_path = sys.argv[1]
    mode = int(sys.argv[2])   # 2 or 4 lines per block
    topic_filter = sys.argv[3] if len(sys.argv) > 3 else None

    data = load_episode(js_path)
    srt_text = export_srt(data, group_size=mode, topic_filter=topic_filter)

    suffix = f".topic{topic_filter}" if topic_filter else ""
    out_path = Path(js_path).with_suffix(f".{mode}line{suffix}.srt")
    out_path.write_text(srt_text, encoding="utf-8")
    print(f"✅ Exported {out_path}")

if __name__ == "__main__":
    main()
