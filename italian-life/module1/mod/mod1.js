// mod/mod1.js
const moduleData = {
    moduleId: "1",
    title: "Module 1 – Greetings",
    speakers: {
    "1": "👩",
    "2": "👨",
    "3": "👩",
    "4": "👨"
    },
    lessons: [
        {
            lessonId: 1,
            title: "Lesson 1 – Ciao! Missione al mercato",
            theme: "Greetings in everyday Italian",
            levels: [
                {
                    levelId: 1,
                    title: "Level 1 (A0)",
                    mp3: "lesson1_1.mp3",
                    keyPhrases: [
                        { text: "Ciao!", en: "Hi / Bye", zh: "嗨／掰" },
                        { text: "Buongiorno!", en: "Good morning", zh: "早安" }
                    ],
                    dialogues: [
                        { speaker: "1", text: "Ciao!", en: "Hi!", zh: "嗨！" },
                        { speaker: "2", text: "Ciao, come stai?", en: "Hi, how are you?", zh: "嗨，你好嗎？" }
                    ],
                    tips: [
                        { text: "Ciao is for friends", zh: "Ciao 適合朋友" },
                        { text: "Buongiorno is polite", zh: "Buongiorno 比較正式" }
                    ]
                },
                {
                    levelId: 2,
                    title: "Level 2 (A1)",
                    mp3: "lesson1_2.mp3",
                    keyPhrases: [
                        { text: "Come ti chiami?", en: "What's your name? (informal)", zh: "你叫什麼名字？(非正式)" },
                        { text: "Mi chiamo...", en: "My name is...", zh: "我叫..." }
                    ],
                    dialogues: [
                        { speaker: "1", text: "Come ti chiami?", en: "What's your name?", zh: "你叫什麼名字？" },
                        { speaker: "2", text: "Mi chiamo Marco.", en: "My name is Marco.", zh: "我叫馬可。" }
                    ],
                    tips: [
                      { en: "**Come ti chiami** is informal", zh: "非正式的" },
                      { en: "**Mi chiamo** is how you state your name", zh: "是用來介紹自己的" }
                    ]
                }
            ]
        },
        {
            lessonId: 2,
            title: "Lesson 2 – Introduce Yourself",
            levels: [
                {
                    levelId: 1,
                    title: "Level 1 (A0)",
                    mp3: "lesson2_1.mp3",
                    keyPhrases: [
                        { text: "Piacere!", en: "Nice to meet you!", zh: "很高興認識你！" },
                        { text: "Di dove sei?", en: "Where are you from?", zh: "你來自哪裡？" }
                    ],
                    dialogues: [
                        { speaker: "1", text: "Piacere, io sono Sofia.", en: "Nice to meet you, I'm Sofia.", zh: "很高興認識你，我是索非亞。" },
                        { speaker: "2", text: "Piacere! Di dove sei?", en: "Nice to meet you! Where are you from?", zh: "很高興認識你！你來自哪裡？" }
                    ],
                    tips: [
                        { en: "Piacere is a common and friendly greeting.", zh: "Piacere 是一個常見且友好的問候語。" }
                    ]
                }
            ]
        }
    ]
};
