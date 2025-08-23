#!/bin/bash
# mp3info.sh - show duration of MP3 files in minutes and seconds

if [ $# -eq 0 ]; then
  echo "Usage: $0 file1.mp3 [file2.mp3 ...]"
  exit 1
fi

for f in "$@"; do
  if [ ! -f "$f" ]; then
    echo "File not found: $f"
    continue
  fi

  dur=$(afinfo "$f" | grep "estimated duration" | awk '{print $3}')
  if [ -z "$dur" ]; then
    echo "Could not read duration: $f"
    continue
  fi

  secs=${dur%.*}
  mins=$(( secs / 60 ))
  sec=$(( secs % 60 ))

  printf "%s → %d:%02d (%s seconds)\n" "$f" "$mins" "$sec" "$dur"
done
