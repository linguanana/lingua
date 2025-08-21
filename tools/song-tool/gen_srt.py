# -*- coding: utf-8 -*-
"""
gen_sre.py
一鍵：Whisper 轉 SRT（small）→ 智慧合併 → 兩行換行 (≤40/行) → 常見誤聽修正
用法：
  python gen_sre.py input.mp3 --lang it
"""

import argparse, os, re, subprocess, sys, srt
from textwrap import wrap

# 你可擴充這些常見誤聽修正（大小寫不敏感）
FIX_MAP = [
    (re.compile(r"\bget cause of fight\b", re.I), "Che cosa fai"),
    (re.compile(r"\bcause of fight\b", re.I), "Cosa fai"),
    (re.compile(r"\bjam\b", re.I), "Che"),
    (re.compile(r"\bla voto\b", re.I), "Lavoro"),
    (re.compile(r"\bmiri lasso\b", re.I), "Mi rilasso"),
    (re.compile(r"\blavoto\b", re.I), "Lavoro"),
]

SENTENCE_END = r"[\.!\?！？。…」』」】）)]$"

def run_whisper(input_file, model="small", language=None, prompt=None):
    base, _ = os.path.splitext(input_file)
    out_srt = base + ".srt"
    cmd = [
        "whisper", input_file,
        "--model", model,
        "--task", "transcribe",
        "--output_format", "srt",
        "--verbose", "True",
    ]
    if language: cmd += ["--language", language]
    if prompt:   cmd += ["--initial_prompt", prompt]
    print("[INFO] Running:", " ".join(cmd))
    try:
        subprocess.check_call(cmd)
    except FileNotFoundError:
        print("[ERROR] 找不到 whisper，請先 pip install -U openai-whisper"); sys.exit(1)
    except subprocess.CalledProcessError as e:
        print("[ERROR] Whisper 執行失敗：", e); sys.exit(1)
    if not os.path.exists(out_srt):
        print("[ERROR] 轉錄完成但沒找到輸出：", out_srt); sys.exit(1)
    print("[DONE] Whisper SRT:", out_srt)
    return out_srt

def load_srt(path):
    with open(path, "r", encoding="utf-8") as f:
        return list(srt.parse(f.read()))

def save_srt(subs, path):
    for i, sub in enumerate(subs, 1):
        sub.index = i
    with open(path, "w", encoding="utf-8") as f:
        f.write(srt.compose(subs))
    print("[DONE] Saved:", path)

def is_complete_sentence(text: str) -> bool:
    return re.search(SENTENCE_END, text.strip()) is not None

def fix_common_errors(text: str) -> str:
    t = text
    for pat, repl in FIX_MAP:
        t = pat.sub(repl, t)
    # 壓縮多空白
    t = re.sub(r"[ \t]{2,}", " ", t.strip())
    return t

def smart_merge(subs, max_chars=42, max_gap=1.2, use_punct=True):
    merged = []
    cur = None
    for nxt in subs:
        if cur is None:
            cur = nxt; continue
        gap = (nxt.start - cur.end).total_seconds()
        short = len(cur.content.strip()) <= max_chars
        incomplete = (not is_complete_sentence(cur.content)) if use_punct else False
        if gap <= max_gap and (short or incomplete):
            cur.content = (cur.content.rstrip() + " " + nxt.content.lstrip()).strip()
            cur.end = nxt.end
        else:
            merged.append(cur); cur = nxt
    if cur: merged.append(cur)
    # 清理＋修常見錯字
    for m in merged:
        m.content = fix_common_errors(m.content)
    return merged

def wrap_two_lines_or_split(sub, max_chars=40, max_lines=2):
    """
    回傳 list[Subtitle]：若 >2 行則把字幕切成兩卡（時間依字數比例切）
    """
    text = fix_common_errors(sub.content)
    # 優先用標點斷句，再 word wrap
    text = re.sub(r"\s*\n\s*", " ", text.strip())
    # 先嘗試用 wrap
    lines = wrap(text, width=max_chars, break_long_words=False, break_on_hyphens=False)
    if len(lines) <= max_lines:
        sub.content = "\n".join(lines)
        return [sub]

    # 超過 2 行：分兩卡
    total_chars = sum(len(x) for x in lines)
    # 盡量保留 2 行以內
    block1 = []
    count = 0
    for ln in lines:
        if len(block1) < max_lines and count + len(ln) <= total_chars/2:
            block1.append(ln); count += len(ln)
        else:
            break
    if not block1:  # fallback 至至少一行
        block1 = [lines[0]]
    block2 = lines[len(block1):]
    text1 = "\n".join(block1)
    text2 = "\n".join(block2)

    # 依字數比例切時間
    dur = (sub.end - sub.start).total_seconds()
    ratio = max(0.2, min(0.8, len(text1) / max(1, total_chars)))
    mid = sub.start + (sub.end - sub.start) * ratio

    s1 = srt.Subtitle(index=0, start=sub.start, end=mid, content=text1)
    s2 = srt.Subtitle(index=0, start=mid, end=sub.end, content=text2)
    return [s1, s2]

def main():
    ap = argparse.ArgumentParser(description="Whisper→SRT→合併→兩行換行（≤40/行）")
    ap.add_argument("input_file", help="音檔路徑 (mp3/wav/m4a/…)")
    ap.add_argument("--lang", default="it", help="ASR 語言（預設 it）")
    ap.add_argument("--model", default="small", help="Whisper 模型（預設 small）")
    ap.add_argument("--max-chars", type=int, default=40, help="每行最大字元（預設 40）")
    ap.add_argument("--max-gap", type=float, default=1.2, help="可合併的最大間隔秒數（預設 1.2）")
    ap.add_argument("--no-punct", action="store_true", help="關閉句尾標點合併邏輯")
    ap.add_argument("--prompt", default="Cosa fai? Che cosa fai? Che lavoro fai? Canto, Cucino, Mi rilasso, Ballo.",
                    help="initial prompt（可增詞彙以減少誤聽）")
    args = ap.parse_args()

    if not os.path.exists(args.input_file):
        print("[ERROR] 找不到檔案：", args.input_file); sys.exit(1)

    out_srt = run_whisper(args.input_file, model=args.model, language=args.lang, prompt=args.prompt)
    subs = load_srt(out_srt)

    print("[INFO] Smart merging …")
    subs = smart_merge(subs, max_chars=args.max_chars+2, max_gap=args.max_gap, use_punct=(not args.no_punct))

    print("[INFO] Wrapping to ≤%d chars/line, max 2 lines …" % args.max_chars)
    wrapped = []
    for sub in subs:
        wrapped.extend(wrap_two_lines_or_split(sub, max_chars=args.max_chars, max_lines=2))

    base, ext = os.path.splitext(out_srt)
    merged_path = base + "-merged" + ext
    save_srt(wrapped, merged_path)
    print("[ALL DONE] ✅ 輸出：", merged_path)

if __name__ == "__main__":
    main()
