#
#en-US-Standard-H
# female
# france male fr-FR-Standard-G
# en-US-Standard-F --rate 0.75 --pitch 1

SPEAKER_CONFIG = {
    # Italian
    "default": {
        "voice_id": "Standard-E",
        "prosody": {"rate": "70%", "pitch": "2st"},
        "emoji": "👱🏻‍♀️"
    },
    "Female": {
        "voice_id": "Standard-E",
        "prosody": {"rate": "70%", "pitch": "2st"},
        "emoji": "👩"
    },
    "Female": {
        "voice_id": "Standard-A",
        "prosody": {"rate": "70%", "pitch": "1st"},
        "emoji": "👩"
    },
    "Male": {
        "voice_id": "Standard-D",
        "prosody": {"rate": "70%", "pitch": "0st"},
        "emoji": "🧑"
    },
    "M_chef": {
        "voice_id": "Standard-D",
        "prosody": {"rate": "70%", "pitch": "0st"},
        "emoji": "👨🏻‍🍳"
    },
    "F_hd": {
        "voice_id": "Chirp3-HD-Leda",
        "prosody": {"rate": "100%", "pitch": "0st"}, # Chirp3-HD 語音的預設語速和音調可能不同，可以根據需要調整
        "emoji": "👩🏻‍🦰"
    },
    "M_hd": {
        "voice_id": "Chirp3-HD-Puck",
        "prosody": {"rate": "100%", "pitch": "0st"}, # Chirp3-HD 語音的預設語速和音調可能不同，可以根據需要調整
        "emoji": "🧑🏻‍🦱"
    },
    "M_chef_hd": {
        "voice_id": "Chirp3-HD-Puck",
        "prosody": {"rate": "100%", "pitch": "0st"}, # Chirp3-HD 語音的預設語速和音調可能不同，可以根據需要調整
        "emoji": "👨🏻‍🍳"
    },
}
