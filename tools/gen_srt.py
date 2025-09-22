# -*- coding: utf-8 -*-
"""
gen_sre.py
一鍵：Whisper 轉 SRT（small）→ 智慧合併 → 兩行換行 (≤40/行) → 常見誤聽修正
用法：
  python gen_sre.py input.mp3 --lang it --2lines
  python gen_sre.py input.mp3 --2lines --max-chars 32
  python gen_sre.py "path/ITA1-A1-Cosa-fai.mp3" --lang it
必備：
  pip install -U openai-whisper srt
  # macOS 若未裝過 ffmpeg：
  brew install ffmpeg
"""

import argparse, os, re, subprocess, sys, glob
import srt
from textwrap import wrap

# —— 常見誤聽修正（可依需求擴充；大小寫不敏感）——
FIX_MAP = [
    (re.compile(r"\bget cause of fight\b", re.I), "Che cosa fai"),
    (re.compile(r"\bcause of fight\b", re.I), "Cosa fai"),
    (re.compile(r"\bjam\b", re.I), "Che"),
    (re.compile(r"\bla voto\b", re.I), "Lavoro"),
    (re.compile(r"\bmiri lasso\b", re.I), "Mi rilasso"),
    (re.compile(r"\blavoto\b", re.I), "Lavoro"),
]

# 句尾視為「完整句」的標點
SENTENCE_END = r"[\.!\?！？。…」』」】）)]$"

# 避免行首/行尾孤兒字（斷行時用）
STOP_WORDS = {
    "a","an","the","and","or","of","to","in","on","for","at","is","it","now",
    "e","o","di","da","il","la","lo","gli","le"
}

def run_whisper(input_file: str, model: str = "small", language: str = None, prompt: str = None) -> str:
    """呼叫 whisper CLI 產生 SRT；強制輸出到輸入檔所在資料夾；回傳 SRT 路徑。"""
    abs_input = os.path.realpath(input_file)              # 穿透 symlink
    input_dir = os.path.dirname(abs_input) or "."
    base_name = os.path.splitext(os.path.basename(abs_input))[0]
    expected_out = os.path.join(input_dir, f"{base_name}.srt")

    cmd = [
        "whisper", abs_input,
        "--model", model,
        "--task", "transcribe",
        "--output_format", "srt",
        "--output_dir", input_dir,       # ✅ 輸出回原資料夾
        "--verbose", "True",
    ]
    if language: cmd += ["--language", language]
    if prompt:   cmd += ["--initial_prompt", prompt]

    print(f"[INFO] Running Whisper:\n  {' '.join(cmd)}")
    try:
        subprocess.check_call(cmd)
    except FileNotFoundError:
        print("[ERROR] 找不到 whisper；請先 `pip install -U openai-whisper`")
        sys.exit(1)
    except subprocess.CalledProcessError as e:
        print(f"[ERROR] Whisper 執行失敗：{e}")
        sys.exit(1)

    # 先找預期檔名
    if os.path.exists(expected_out):
        print(f"[DONE] Whisper SRT: {expected_out}")
        return expected_out

    # 容錯：空白/符號被正規化時，用 glob 嘗試匹配
    pattern = os.path.join(input_dir, base_name.replace(" ", "*") + "*.srt")
    candidates = sorted(glob.glob(pattern))
    if candidates:
        print(f"[DONE] Whisper SRT (matched): {candidates[0]}")
        return candidates[0]

    print(f"[ERROR] 轉錄完成但找不到輸出：{expected_out}")
    print(f"[HINT] 可在 {input_dir} 執行 `ls -l *.srt` 搜尋。")
    sys.exit(1)

def load_srt(path: str):
    with open(path, "r", encoding="utf-8") as f:
        return list(srt.parse(f.read()))

def save_srt(subs, path: str):
    # 重新索引
    for i, sub in enumerate(subs, 1):
        sub.index = i
    with open(path, "w", encoding="utf-8") as f:
        f.write(srt.compose(subs))
    print(f"[DONE] Saved: {path}")

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
    """
    智能合併策略：
      1) 若當前行很短（<= max_chars）且與下一行時間間隔小（<= max_gap），嘗試合併
      2) 若當前行不以句尾標點結束（use_punct=True），也嘗試與下一行併成完整句
    """
    merged = []
    cur = None
    for nxt in subs:
        if cur is None:
            cur = nxt
            continue
        gap = (nxt.start - cur.end).total_seconds()
        short = len(cur.content.strip()) <= max_chars
        incomplete = (not is_complete_sentence(cur.content)) if use_punct else False

        if gap <= max_gap and (short or incomplete):
            cur.content = (cur.content.rstrip() + " " + nxt.content.lstrip()).strip()
            cur.end = nxt.end
        else:
            merged.append(cur)
            cur = nxt
    if cur: merged.append(cur)

    # 清理 + 修常見誤聽
    for m in merged:
        m.content = fix_common_errors(m.content)
    return merged

def _force_two_line_split(text: str, max_chars: int) -> list[str]:
    """
    嘗試把單行文字切成兩行：
      1. 優先在標點符號斷開（. , ? ! ;）
      2. 找不到就靠近中點找空白，避免孤兒字
      3. 最後 fallback 用 wrap
    """
    t = " ".join(text.strip().split())
    if not t:
        return [t]
    if len(t) <= 12:  # 太短就不硬拆
        return [t]

    # step 1: 優先在標點符號切
    for punct in [".", ",", "?", "!", ";"]:
        idx = t.find(punct)
        if idx != -1 and idx < len(t) - 1:
            left = t[:idx+1].strip()
            right = t[idx+1:].strip()
            if (left and right and len(left) <= max_chars and len(right) <= max_chars):
                return [left, right]

    # step 2: 靠近中點找空白
    target = len(t) // 2
    best = None
    for i in range(max(1, target - 15), min(len(t) - 1, target + 15)):
        if t[i] != " ":
            continue
        left = t[:i].strip()
        right = t[i + 1:].strip()
        if (left and right
            and len(left) <= max_chars and len(right) <= max_chars
            and len(left) >= 6 and len(right) >= 6):
            lw = left.split()[-1].lower()
            rw = right.split()[0].lower()
            if lw not in STOP_WORDS and rw not in STOP_WORDS:
                cand = (abs(i - target), left, right)
                if best is None or cand < best:
                    best = cand
    if best:
        _, left, right = best
        return [left, right]

    # step 3: fallback wrap
    lines = wrap(t, width=max_chars, break_long_words=False, break_on_hyphens=False)
    if len(lines) >= 2:
        return lines[:2]

    # step 4: 勉強在 max_chars 前最近空白切
    cut = t.rfind(" ", 0, max_chars)
    if cut != -1 and cut >= 6 and (len(t) - cut - 1) >= 6:
        left = t[:cut].strip()
        right = t[cut + 1:].strip()
        return [left, right]

    return [t]


def wrap_two_lines_or_split(sub, max_chars=32, max_lines=4, force_two=False):
    """
    把字幕排到 ≤max_lines 行（預設 2）且每行 ≤max_chars。
    - 若超過 2 行：切成兩卡（時間依字數比例切）
    - 若 force_two=True 且目前只有 1 行：嘗試強制拆為 2 行（避免孤兒字）
    """
    text = fix_common_errors(sub.content)
    text = " ".join(text.strip().split())

    # 先 wrap
    lines = wrap(text, width=max_chars, break_long_words=False, break_on_hyphens=False)

    # 需要強制兩行而目前只有一行 → 嘗試二分
    if force_two and len(lines) == 1:
        lines = _force_two_line_split(text, max_chars)

    if len(lines) <= max_lines:
        sub.content = "\n".join(lines)
        return [sub]


    # 超過 2 行 → 拆兩卡（依字數比例分時）
    total_chars = sum(len(x) for x in lines) or 1
    # 盡量均分為兩部分（最多兩行）
    block1, count = [], 0
    for ln in lines:
        if len(block1) < max_lines and count + len(ln) <= total_chars / 2:
            block1.append(ln); count += len(ln)
        else:
            break
    if not block1:
        block1 = [lines[0]]
    block2 = lines[len(block1):]
    text1 = "\n".join(block1)
    text2 = "\n".join(block2)

    dur = (sub.end - sub.start).total_seconds()
    ratio = max(0.2, min(0.8, len(text1) / total_chars))  # 20%~80% 之間
    mid = sub.start + (sub.end - sub.start) * ratio

    s1 = srt.Subtitle(index=0, start=sub.start, end=mid, content=text1)
    s2 = srt.Subtitle(index=0, start=mid, end=sub.end, content=text2)
    return [s1, s2]

def main():
    ap = argparse.ArgumentParser(description="Whisper→SRT→合併→兩行排版（每行≤N字）")
    ap.add_argument("input_file", help="音檔路徑 (mp3/wav/m4a/…)")
    ap.add_argument("--lang", default="it", help="ASR 語言（預設 it）")
    ap.add_argument("--max-lines", type=int, default=2,
                help="每卡字幕的最大行數（預設 2 行）")
    ap.add_argument("--model", default="small", help="Whisper 模型（預設 small）")
    ap.add_argument("--max-chars", type=int, default=40, help="每行最大字元（預設 40）")
    ap.add_argument("--max-gap", type=float, default=1.2, help="可合併的最大間隔秒數（預設 1.2）")
    ap.add_argument("--no-punct", action="store_true", help="關閉句尾標點合併邏輯")
    ap.add_argument("--prompt", default="Cosa fai? Che cosa fai? Che lavoro fai? Canto, Cucino, Mi rilasso, Ballo.",
                    help="initial prompt（可增詞彙以減少誤聽）")
    # 你要的旗標：--2lines（同功能名為 two_lines）
    ap.add_argument("--2lines", dest="two_lines", action="store_true",
                    help="可排兩行就盡量兩行（避免單行；字數不足時不強迫）")
    args = ap.parse_args()

    if not os.path.exists(args.input_file):
        print("[ERROR] 找不到檔案：", args.input_file); sys.exit(1)

    out_srt = run_whisper(args.input_file, model=args.model, language=args.lang, prompt=args.prompt)
    subs = load_srt(out_srt)

    print("[INFO] Smart merging …")
    subs = smart_merge(subs, max_chars=args.max_chars + 2, max_gap=args.max_gap, use_punct=(not args.no_punct))

    print(f"[INFO] Wrapping to ≤{args.max_chars} chars/line, max 2 lines …")
    wrapped = []
    for sub in subs:
        wrapped.extend(
            wrap_two_lines_or_split(
                sub,
                max_chars=args.max_chars,
                max_lines=args.max_lines,
                force_two=args.two_lines
            )
        )

    base, ext = os.path.splitext(out_srt)
    merged_path = base + "-merged" + ext
    save_srt(wrapped, merged_path)
    print("[ALL DONE] ✅ 輸出：", merged_path)

if __name__ == "__main__":
    main()
