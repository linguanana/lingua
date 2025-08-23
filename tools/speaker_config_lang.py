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
        # Standard-F and Standard-G
        "default":  {"voice_id": "Neural2-F", "prosody": {"rate": "62%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "Neural2-F", "prosody": {"rate": "62%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "Neural2-G", "prosody": {"rate": "62%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "Neural2-G", "prosody": {"rate": "62%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "es-ES": {
        "default":  {"voice_id": "Standard-H", "prosody": {"rate": "68%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "Standard-H", "prosody": {"rate": "68%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "Standard-B", "prosody": {"rate": "68%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "Standard-B", "prosody": {"rate": "68%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "en-US": {
        "default":  {"voice_id": "en-US-Standard-F", "prosody": {"rate": "75%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "en-US-Standard-F", "prosody": {"rate": "75%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "en-US-Standard-H", "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "en-US-Standard-H", "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "Chirp3-HD-Leda",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "Chirp3-HD-Puck",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },
}
