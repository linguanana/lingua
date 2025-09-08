#!/usr/bin/env python3
# Convert EP.js dialogues into grouped SRT subtitles
# Supports: 2 lines per block OR 4 lines per block
# Optional: filter by topicId

# 匯出 topic 1 (Greetings)，2行一組
# python gen_srt.py ep1.js 2 1

import re
import json5
import sys
from pathlib import Path

def load_episode(js_path: str) -> dict:
    text = Path(js_path).read_text(encoding="utf-8")
    m = re.search(r'const\s+episodeData\s*=\s*({.*});', text, re.DOTALL)
    if not m:
        raise ValueError("Could not find episodeData in file.")
    obj_text = m.group(1)
    # 用 json5 可以接受單引號 / 尾逗號
    return json5.loads(obj_text)

def group_dialogue(dialogue, group_size):
    for i in range(0, len(dialogue), group_size):
        yield dialogue[i:i+group_size]

def make_srt_block(idx, lines, start_sec):
    start = start_sec
    end = start + len(lines)*3   # 假設每行3秒
    start_ts = f"00:00:{start:02d},000"
    end_ts   = f"00:00:{end:02d},000"

    # 映射 Male / Female → emoji
    speaker_map = {
        "Male": "🕵🏼‍♂️",
        "Female": "👩🏻‍🚒"
    }

    text_lines = []
    for line in lines:
        speaker = speaker_map.get(line['speaker'], line['speaker'])
        text_lines.append(f"{speaker}: {line['text']}")

    block = f"{idx}\n{start_ts} --> {end_ts}\n" + "\n".join(text_lines) + "\n"
    return block, end

def export_srt(data, group_size=2, topic_filter=None):
    srt_lines = []
    counter = 1
    current_time = 0
    for topic in data["topics"]:
        if topic_filter and str(topic["topicId"]) != str(topic_filter):
            continue
        for scene in topic["scenes"]:
            for chunk in group_dialogue(scene["dialogue"], group_size):
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
