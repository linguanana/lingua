#!/bin/bash
# 用法: ./gen_ep_topic.sh ep1_topic1 ../../italian-life/travel/audio/

BASENAME=$1
AUDIODIR=$2
OUTFILE="${AUDIODIR}/${BASENAME}_full.mp3"

FILES=()

# 先加 episode intro（如果存在）
EPISODE_INTRO="${AUDIODIR}/${BASENAME%_*}_intro.mp3"
if [[ -f "$EPISODE_INTRO" ]]; then
  FILES+=("$EPISODE_INTRO")
fi

# 再加 topic intro
FILES+=("${AUDIODIR}/${BASENAME}_intro.mp3")

# 逐一檢查 scene1 ~ scene99
for i in $(seq 1 99); do
  INTRO="${AUDIODIR}/${BASENAME}_scene${i}_intro.mp3"
  MAIN="${AUDIODIR}/${BASENAME}_scene${i}.mp3"

  if [[ -f "$INTRO" ]]; then
    FILES+=("$INTRO")
  fi
  if [[ -f "$MAIN" ]]; then
    FILES+=("$MAIN")
  fi
done

echo "Merging files:"
printf '  %s\n' "${FILES[@]}"

TMPFILE=$(mktemp)
for f in "${FILES[@]}"; do
  abs_path=$(cd "$(dirname "$f")"; pwd)/$(basename "$f")
  echo "file '$abs_path'" >> "$TMPFILE"
done


ffmpeg -f concat -safe 0 -i "$TMPFILE" -c copy "$OUTFILE"

rm "$TMPFILE"

echo "Done -> $OUTFILE"
