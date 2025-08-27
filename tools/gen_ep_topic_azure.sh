#!/bin/bash
# 用法:
#   ./gen_ep_topic_azure.sh BASENAME AUDIODIR   # 只合併單一 topic
#   ./gen_ep_topic_azure.sh AUDIODIR            # 自動合併該資料夾所有 ep*_topic*

set -euo pipefail

merge_one_topic () {
  local BASENAME="$1"
  local AUDIODIR="$2"
  local OUT_STD="${AUDIODIR}/${BASENAME}_full-azure.mp3"
  local OUT_SMALL="${AUDIODIR}/${BASENAME}_full-azure-small.mp3"

  local FILES=()
  if [[ -f "${AUDIODIR}/${BASENAME}_intro.mp3" ]]; then
    FILES+=("${AUDIODIR}/${BASENAME}_intro.mp3")
  fi

  for i in $(seq 1 99); do
    local INTRO="${AUDIODIR}/${BASENAME}_scene${i}_intro.mp3"
    local MAIN="${AUDIODIR}/${BASENAME}_scene${i}.mp3"
    if [[ -f "$INTRO" && -f "$MAIN" ]]; then
      FILES+=("$INTRO" "$MAIN")
    fi
  done

  if [[ ${#FILES[@]} -eq 0 ]]; then
    echo "⚠️  No files for $BASENAME, skip."
    return
  fi

  echo "🔊 Merging $BASENAME ->"
  printf '  %s\n' "${FILES[@]}"

  local TMPFILE
  TMPFILE=$(mktemp)
  # 自動清理暫存清單
  trap 'rm -f "$TMPFILE"' RETURN

  > "$TMPFILE"
  for f in "${FILES[@]}"; do
    echo "file '$(realpath "$f")'" >> "$TMPFILE"
  done

  # 先產生標準合併檔（高一點的品質，立體聲 44.1k / 192k）
  ffmpeg -hide_banner -loglevel error -y \
    -f concat -safe 0 -i "$TMPFILE" \
    -ac 2 -ar 44100 -c:a libmp3lame -b:a 192k \
    "$OUT_STD"

  echo "✅ Wrote: $OUT_STD"

  # 再轉出小檔版（你指定的 44.1kHz / mono / 128k）
  ffmpeg -hide_banner -loglevel error -y \
    -i "$OUT_STD" -ar 44100 -ac 1 -c:a libmp3lame -b:a 128k \
    "$OUT_SMALL"

  echo "✅ Wrote: $OUT_SMALL"
}

# --- 主流程 ---
if [[ $# -eq 2 ]]; then
  BASENAME="$1"
  AUDIODIR="$2"
  merge_one_topic "$BASENAME" "$AUDIODIR"
elif [[ $# -eq 1 ]]; then
  AUDIODIR="$1"
  for intro in "${AUDIODIR}"/ep*_topic*_intro.mp3; do
    [[ -f "$intro" ]] || continue
    BASENAME=$(basename "$intro" _intro.mp3)
    merge_one_topic "$BASENAME" "$AUDIODIR"
  done
else
  echo "Usage:"
  echo "  $0 BASENAME AUDIODIR   # single topic"
  echo "  $0 AUDIODIR            # merge all topics in folder"
  exit 1
fi
