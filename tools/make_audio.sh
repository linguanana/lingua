#!/usr/bin/env bash
# 用法:
#   ./make_audio.sh it starter ep3 2              # 預設 ep3.js, topic 2
#   ./make_audio.sh it starter ep3 2 --dry        # dry-run
#   ./make_audio.sh es travel ep1 1
#   ./make_audio.sh fr mod ep1 1

set -euo pipefail

# -------- Args --------
lang="${1:-}"
style="${2:-}"
epname="${3:-}"   # e.g. ep3
topic="${4:-}"    # e.g. 2
dry="${5:-}"

if [[ -z "${lang}" || -z "${style}" || -z "${epname}" || -z "${topic}" ]]; then
  echo "用法: $0 <lang: it|es|fr> <style: starter|travel|mod> <epN> <topicId> [--dry]"
  exit 1
fi

# normalize epname → epN.js
if [[ ! "$epname" =~ \.js$ ]]; then
  epfile="${epname}.js"
else
  epfile="$epname"
fi

# -------- Language → folder --------
case "$lang" in
  it) lang_code="italian" ;;
  es) lang_code="spanish" ;;
  fr) lang_code="french" ;;
  *)  echo "未知語言: $lang（只支援 it/es/fr）"; exit 1 ;;
esac

# -------- Helpers --------
run() {
  echo "==> $*"
  if [[ "${dry:-}" != "--dry" ]]; then
    eval "$@"
  fi
}

# -------- Main --------
if [[ "$style" == "starter" || "$style" == "travel" ]]; then
  base="../${lang_code}-life/$style/ep/$epfile"
  audio="../${lang_code}-life/$style/audio"

  run "python gen_ep_list.py $topic $base > ep-$style-$epname-$topic.txt"
  run "python gen_audio.py ep-$style-$epname-$topic.txt $audio"
  run "python gen_eng_intro.py $base $audio"
  run "./gen_ep_topic.sh ${epname}_topic$topic $audio/"
  run "python gen_srt_ep.py $base 4 $topic"

elif [[ "$style" == "mod" ]]; then
  base="../${lang_code}-life/module$topic/mod1.js"
  audio="../${lang_code}-life/module$topic/audio"

  run "python gen_ep_list.py $topic $base > ep-mod$topic.txt"
  run "python gen_audio.py ep-mod$topic.txt $audio"

else
  echo "未知 style: $style (只能是 starter, travel, mod)"
  exit 1
fi

echo "✅ 全部完成!"
