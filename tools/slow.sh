
# 檢查 ffmpeg 是否已安裝
if ! command -v ffmpeg &> /dev/null
then
    echo "錯誤: ffmpeg 尚未安裝。請先安裝 ffmpeg。"
    exit 1
fi

# 檢查是否提供了所有參數 (語速與檔案路徑)
if [ "$#" -ne 2 ]; then
    echo "用法: $0 <語速倍數> <MP3檔案路徑>"
    echo "範例: $0 0.9 ../../french-life/module1/video-script/a.mp3"
    exit 1
fi

SLOW_FACTOR="$1"
INPUT_FILE="$2"

# 檢查檔案是否存在
if [ ! -f "$INPUT_FILE" ]; then
    echo "錯誤: 找不到指定的檔案 '$INPUT_FILE'"
    exit 1
fi

# 從輸入路徑中分離出資料夾路徑和檔名
DIR_PATH=$(dirname "$INPUT_FILE")
FULL_FILENAME=$(basename "$INPUT_FILE")
FILENAME_WITHOUT_EXT="${FULL_FILENAME%.mp3}"

# 建立新的輸出檔名 (在檔名後加上語速倍數)
OUTPUT_FILE_NAME="${FILENAME_WITHOUT_EXT}-${SLOW_FACTOR}.mp3"
OUTPUT_FILE_PATH="$DIR_PATH/$OUTPUT_FILE_NAME"

echo "處理檔案: $INPUT_FILE"
echo "語速倍數: $SLOW_FACTOR"
echo "輸出檔案: $OUTPUT_FILE_PATH"

# 使用 ffmpeg 處理單一檔案
ffmpeg -i "$INPUT_FILE" -filter:a "atempo=$SLOW_FACTOR" -y "$OUTPUT_FILE_PATH"

echo "完成！音訊檔已儲存至 '$OUTPUT_FILE_PATH'"
