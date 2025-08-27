# 必要角色：可依你專案調整
REQUIRED_ROLES = ["default", "Female", "Male", "M_Chef", "F_hd", "M_hd", "M_Chef_hd", "Girl"]

SPEAKER_CONFIG = {
    "it-IT": {
        "default":  {"voice_id": "it-IT-PalmiraNeural", "prosody": {"rate": "70%", "pitch": "2st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "it-IT-PalmiraNeural", "prosody": {"rate": "70%", "pitch": "2st"}, "emoji": "👩"},
        "Male":     {"voice_id": "it-IT-GianniNeural",  "prosody": {"rate": "70%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "it-IT-GianniNeural",  "prosody": {"rate": "70%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "it-IT-PalmiraNeural", "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "it-IT-GianniNeural",  "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "it-IT-GianniNeural",  "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "fr-FR": {
        "default":  {"voice_id": "fr-FR-DeniseNeural", "prosody": {"rate": "80%", "pitch": "0st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "fr-FR-DeniseNeural", "prosody": {"rate": "80%", "pitch": "0st"}, "emoji": "👩", "style": "cheerful"},
        "Male":     {"voice_id": "fr-FR-HenriNeural",    "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "🧑", "style": "cheerful"},
        "Girl":     {"voice_id": "fr-FR-EloiseNeural",   "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "🧑", "style": "cheerful"},
        "M_Chef":   {"voice_id": "fr-FR-HenriNeural",    "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "👨🏻‍🍳", "style": "cheerful"},
        "Girl":     {"voice_id": "fr-FR-EloiseNeural",   "prosody": {"rate": "80%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "fr-FR-DeniseNeural",   "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "fr-FR-HenriNeural",    "prosody": {"rate": "85%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "fr-FR-HenriNeural",    "prosody": {"rate": "90%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "es-ES": {
        "default":  {"voice_id": "es-MX-CarlotaNeural", "prosody": {"rate": "68%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "es-MX-CarlotaNeural", "prosody": {"rate": "68%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "es-MX-CecilioNeural", "prosody": {"rate": "68%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "es-MX-CecilioNeural", "prosody": {"rate": "68%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "es-ES-ElviraNeural", "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "es-ES-AlvaroNeural", "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "es-ES-AlvaroNeural", "prosody": {"rate": "95%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },

    "en-US": {
        "default":  {"voice_id": "en-US-JennyNeural", "prosody": {"rate": "75%", "pitch": "1st"}, "emoji": "👱🏻‍♀️"},
        "Female":   {"voice_id": "en-US-JennyNeural", "prosody": {"rate": "75%", "pitch": "1st"}, "emoji": "👩"},
        "Male":     {"voice_id": "en-US-GuyNeural",   "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "🧑"},
        "M_Chef":   {"voice_id": "en-US-GuyNeural",   "prosody": {"rate": "75%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
        "F_hd":     {"voice_id": "en-US-JennyNeural", "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👩🏻‍🦰"},
        "M_hd":     {"voice_id": "en-US-GuyNeural",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "🧑🏻‍🦱"},
        "M_Chef_hd":{"voice_id": "en-US-GuyNeural",   "prosody": {"rate": "100%", "pitch": "0st"}, "emoji": "👨🏻‍🍳"},
    },
}
