# shared/tools/speaker_config.py

# 這裡設定了人物名稱與 Google Cloud 語音代號的對應關係。
# 您可以根據自己的需求，從 Google Cloud 官方文件中選擇不同的語音。
# 參考連結：https://cloud.google.com/text-to-speech/docs/voices?hl=zh-cn
SPEAKER_VOICE_MAP = {
    "default": "Standard-E",
    "Female": "Neural2-E",
    "Male": "Neural2-F",
    "M_chef": "Neural2-F",    # 也可以讓多個人物共用同一個語音
    "F_std": "Standard-E",
    "M_std": "Standard-F",
    "F_hd": "Chirp3-HD-Leda",
    "M_hd": "Chirp3-HD-Puck"
    "Girl": "Neural2-D",      # <prosody pitch="+4st">
    "Boy": "Neural2-B",       # <prosody pitch="+4st">
}

# --- 新增: 每個角色的語速和音調設定 ---
SPEAKER_PROSODY_MAP = {
    "default": {"rate": "85%", "pitch": "2st"}, # 預設值
    "Female": {"rate": "85%", "pitch": "3st"},
    "Male": {"rate": "85%", "pitch": "2st"},
    "M_chef": {"rate": "85%", "pitch": "2st"},   # 語速慢 10%
    "F_hd": {"rate": "90%", "pitch": "1st"}, # 預設值
    "M_hd": {"rate": "90%", "pitch": "1st"},
    "F_std": {"rate": "85%", "pitch": "2st"},
    "M_std": {"rate": "85%", "pitch": "2st"},   # 語速慢 10%
    "Girl": {"rate": "80%", "pitch": "+4st"},   # 語速快 10%，音調高 4 個半音
    "Boy": {"rate": "80%", "pitch": "+3st"},    # 語速快 5%，音調高 2 個半音
}
