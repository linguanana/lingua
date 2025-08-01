// lessons/lesson1.js (已調整結構以匹配您的 lesson-load.js)
const lessonData = {
    lessonId: 1,
    title_en: "Hello! Market mission",
    title_zh: "打招呼！市場任務",
    module: "Module 1",
    lesson: "Lesson 1: Ciao! Missione al mercato",
    theme: "Greetings in everyday Italian",
    levels: [
        {
            levelId: 1,
            title: "✅ Level 1 (A0): Basic Greetings & Introductions",
            sections: [
                {
                    type: "keyPhrase",
                    title: "📗 Key Phrases",
                    audio: "lesson1_1k.mp3",
                    phrases: [
                        { text: "Ciao", en: "Hello / Hi / Bye (informal)", zh: "你好 / 再見 (非正式)" },
                        { text: "Buongiorno", en: "Good morning / Good day", zh: "早安 / 你好" },
                        { text: "Buonasera", en: "Good afternoon / Good evening", zh: "午安 / 晚上好" },
                        { text: "Buonanotte", en: "Good night", zh: "晚安" },
                        { text: "Arrivederci", en: "Goodbye (formal & informal)", zh: "再見" },
                        { text: "Mi chiamo...", en: "My name is...", zh: "我叫..." },
                        { text: "Piacere!", en: "Nice to meet you!", zh: "很高興認識你！" },
                        { text: "Come stai?", en: "How are you? (informal)", zh: "你好嗎？(非正式)" },
                        { text: "Sto bene, grazie.", en: "I'm fine, thank you.", zh: "我很好，謝謝。" }
                    ]
                },
                {
                    type: "dialogue",
                    title: "🎯 Dialogue",
                    audio: "lesson1_1.mp3",
                    dialogues: [
                        {
                            title: "🩷 Informal & Formal Greetings (非正式與正式問候)",
                            lines: [
                                { emoji: "🫂", text: "Ciao!", en: "Hello / Hi (informal)", zh: "你好" },
                                { emoji: "☀️", text: "Buongiorno!", en: "Good morning / Good day", zh: "早安 / 你好" },
                                { emoji: "🌆", text: "Buonasera!", en: "Good afternoon / Good evening", zh: "午安 / 晚上好" },
                                { emoji: "🌙", text: "Buonanotte!", en: "Good night", zh: "晚安" },
                                { emoji: "👋", text: "Arrivederci!", en: "Goodbye (formal & informal)", zh: "再見" },
                                { emoji: "😊", text: "Ciao!", en: "Bye (informal)", zh: "再見，非正式" }
                            ]
                        }
                    ]
                },
                {
                    type: "tip",
                    title: "📌 Tip",
                    content: [
                        { type: "paragraph", emoji: "🗣️", text: "Ciao", en: "is versatile for 'hello', 'hi' and 'bye'.", zh: "是多用途的打招呼語，可用於「你好」、「嗨」和「再見」。" },
                        { type: "paragraph", emoji: "👋", text: "Arrivederci", en: "is a standard and polite way to say goodbye.", zh: "是標準有禮的再見方式。" },
                        { type: "paragraph", emoji: "😊", text: "Ciao", en: "is an informal goodbye, used with friends and family.", zh: "是一種非正式的再見，用於朋友和家人之間。" },
                        { type: "paragraph", emoji: "☀️", text: "Buongiorno", en: "is 'good day' and used throughout the morning and early afternoon.", zh: "是「美好的一天」，用於整個早上和下午初。" },
                        { type: "paragraph", emoji: "🌆", text: "Buonasera", en: "is 'good evening' from late afternoon onwards.", zh: "是「晚上好」，從下午末開始使用。" },
                        { type: "paragraph", emoji: "🌙", text: "Buonanotte", en: "is strictly 'good night' before bed.", zh: "嚴格來說是睡前的「晚安」。" }
                    ]
                }
            ]
        },
        {
            levelId: 2,
            title: "✅ Level 2 (A0+): Asking Names & Well-being",
            sections: [
                {
                    type: "keyPhrase",
                    title: "📗 Key Phrases",
                    audio: "lesson1_2k.mp3",
                    phrases: [
                        { text: "Come ti chiami?", en: "What's your name? (informal)", zh: "你叫什麼名字？(非正式)" },
                        { text: "Come si chiama?", en: "What's your name? (formal)", zh: "您叫什麼名字？(正式)" },
                        { text: "Io sono...", en: "I am...", zh: "我是..." },
                        { text: "Piacere di conoscerti.", en: "Nice to meet you. (informal)", zh: "很高興認識你。(非正式)" },
                        { text: "Piacere di conoscerla.", en: "Nice to meet you. (formal)", zh: "很高興認識您。(正式)" },
                        { text: "Come va?", en: "How's it going? (casual)", zh: "近來好嗎？(口語)" },
                        { text: "Tutto bene?", en: "All good?", zh: "一切都好嗎？" },
                        { text: "Molto bene.", en: "Very good.", zh: "非常好。" },
                        { text: "Non c'è male.", en: "Not bad.", zh: "還不錯。" },
                        { text: "Così così.", en: "So-so.", zh: "馬馬虎虎。" }
                    ]
                },
                {
                    type: "dialogue",
                    title: "🎯 Dialogue",
                    audio: "lesson1_2.mp3",
                    dialogues: [
                        {
                            title: "🩷 Dialogue 1: Informal Introduction (非正式介紹)",
                            lines: [
                                { speaker: "1", text: "Ciao! Come ti chiami?", en: "Hi! What's your name?", zh: "嗨！你叫什麼名字？" },
                                { speaker: "2", text: "Ciao! Mi chiamo Marco. Piacere!", en: "Hi! My name is Marco. Nice to meet you!", zh: "嗨！我叫馬可。很高興認識你！" },
                                { speaker: "1", text: "Piacere, io sono Sofia.", en: "Nice to meet you, I'm Sofia.", zh: "很高興認識你，我是索非亞。" }
                            ]
                        },
                        {
                            title: "🩷 Dialogue 2: Checking In (問候近況)",
                            lines: [
                                { speaker: "1", text: "Come va, Marco?", en: "How's it going, Marco?", zh: "馬可，近來好嗎？" },
                                { speaker: "2", text: "Tutto bene, grazie!", en: "All good, thank you!", zh: "一切都好，謝謝！" }
                            ]
                        }
                    ]
                },
                {
                    type: "tip",
                    title: "📌 Tip",
                    content: [
                        { type: "paragraph", emoji: "✨", text: "Come ti chiami", en: "is informal, while", text_2: "Come si chiama", en_2: "is formal.", zh: "是非正式的，而 是正式的。" },
                        { type: "paragraph", emoji: "🗣️", text: "Piacere!", en: "is a quick way to say 'Nice to meet you!'.", zh: "是「很高興認識你！」的快速說法。" },
                        { type: "paragraph", emoji: "🤝", text: "Piacere di conoscerti", en: "(informal) and", text_2: "Piacere di conoscerla", en_2: "(formal) are more complete phrases.", zh: "（非正式）和（正式）是更完整的說法。" },
                        { type: "paragraph", emoji: "💬", text: "Come va?", en: "is a more casual 'How are you?' than", text_2: "Come stai?", zh: "是比 更口語化的「你好嗎？」" },
                        { type: "paragraph", emoji: "👍", text: "Molto bene", en: "(Very good),", text_2: "Non c'è male", en_2: "(Not bad), and", text_3: "Così così", en_3: "(So-so) are common responses.", zh: "（非常好）、（還不錯）和（馬馬虎虎）是常見的回答。" }
                    ]
                }
            ]
        },
        {
            levelId: 3,
            title: "✅ Level 3 (A1): Formal Greetings & Polite Inquiries",
            sections: [
                {
                    type: "keyPhrase",
                    title: "📗 Key Phrases",
                    audio: "lesson1_3k.mp3",
                    phrases: [
                        { text: "Signore", en: "Mr. / Sir", zh: "先生" },
                        { text: "Signora", en: "Mrs. / Madam", zh: "女士" },
                        { text: "Signorina", en: "Miss", zh: "小姐" },
                        { text: "Buona giornata!", en: "Have a good day!", zh: "祝你一天愉快！" },
                        { text: "Buona serata!", en: "Have a good evening!", zh: "祝你晚上愉快！" },
                        { text: "A presto!", en: "See you soon!", zh: "很快再見！" },
                        { text: "A dopo!", en: "See you later!", zh: "稍後見！" },
                        { text: "Ci vediamo!", en: "See you! (general)", zh: "再見！(常用)" },
                        { text: "Molto lieto/a.", en: "Very pleased to meet you. (formal)", zh: "非常高興認識您。(正式)" }
                    ]
                },
                {
                    type: "dialogue",
                    title: "🎯 Dialogue",
                    audio: "lesson1_3.mp3",
                    dialogues: [
                        {
                            title: "🩷 Dialogue 1: Formal Introduction (正式介紹)",
                            lines: [
                                { speaker: "1", text: "Buongiorno, Signora Rossi. Piacere di conoscerla.", en: "Good morning, Mrs. Rossi. Nice to meet you.", zh: "早安，羅西女士。很高興認識您。" },
                                { speaker: "2", text: "Molto lieta, Signore Bianchi.", en: "Very pleased to meet you, Mr. Bianchi.", zh: "非常高興認識您，比安奇先生。" }
                            ]
                        },
                        {
                            title: "🩷 Dialogue 2: Polite Farewell (禮貌告別)",
                            lines: [
                                { speaker: "1", text: "Arrivederci, Signora.", en: "Goodbye, Madam.", zh: "再見，女士。" },
                                { speaker: "2", text: "Arrivederci, Signore. Buona giornata!", en: "Goodbye, Sir. Have a good day!", zh: "再見，先生。祝您一天愉快！" }
                            ]
                        }
                    ]
                },
                {
                    type: "tip",
                    title: "📌 Tip",
                    content: [
                        { type: "paragraph", emoji: "🤵", text: "Signore", en: "(Mr./Sir),", text_2: "Signora", en_2: "(Mrs./Madam), and", text_3: "Signorina", en_3: "(Miss) are formal titles.", zh: "（先生）、（女士）和（小姐）是正式稱謂。" },
                        { type: "paragraph", emoji: "👋", text: "A presto!", en: "(See you soon),", text_2: "A dopo!", en_2: "(See you later), and", text_3: "Ci vediamo!", en_3: "(See you!) are common goodbyes depending on when you'll meet again.", zh: "（很快再見）、（稍後見）和（再見！）是根據再次見面時間而定的常見告別語。" },
                        { type: "paragraph", emoji: "🎩", text: "Molto lieto/a", en: "(Very pleased to meet you) is a formal response.", zh: "（非常高興認識您）是一種正式的回應。" },
                        { type: "paragraph", emoji: "☀️", text: "Buona giornata!", en: "is used when parting during the day, wishing someone a good remainder of their day.", zh: "用於日間告別，祝願對方有個美好的一天。" },
                        { type: "paragraph", emoji: "🌇", text: "Buona serata!", en: "is used when parting in the evening, wishing someone a good remainder of their evening.", zh: "用於晚間告別，祝願對方有個美好的夜晚。" }
                    ]
                }
            ]
        }
    ]
};
