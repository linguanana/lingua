# 必要角色：可依你專案調整
REQUIRED_ROLES = ["default", "Female", "Male", "M_Chef", "F_hd", "M_hd", "M_Chef_hd"]

SPEAKER_CONFIG = {
    "it-IT": {
        "default":  {"voice_id": "Standard-E", "prosody": {"rate": "70%", "pitch": "2st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "Standard-E", "prosody": {"rate": "70%", "pitch": "2st"}, "emoji": "👩"},
        "Male":     {"voice_id": "Standard-D", "prosody": {"rate": "70%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "Standard-D", "prosody": {"rate": "70%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "fr-FR": {
        # Standard-F and Standard-G fr-FR-Neural2-D
        "default":  {"voice_id": "Standard-F", "prosody": {"rate": "65%", "pitch": "-1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "Standard-F", "prosody": {"rate": "65%", "pitch": "-1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "Standard-G", "prosody": {"rate": "65%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "Standard-G", "prosody": {"rate": "65%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "es-US": {
        "default":  {"voice_id": "Neural2-A", "prosody": {"rate": "68%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "Neural2-A", "prosody": {"rate": "68%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "Neural2-B", "prosody": {"rate": "68%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "Neural2-B", "prosody": {"rate": "68%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "en-US": {
        "default":  {"voice_id": "en-US-Neural2-A", "prosody": {"rate": "75%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "en-US-Standard-F", "prosody": {"rate": "75%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "en-US-Standard-H", "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "en-US-Standard-H", "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },
}
