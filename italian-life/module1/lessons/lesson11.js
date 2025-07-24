// lessons/lesson1.js (UPDATED with new TIP structures)

window.lessonData = { // Added 'window.' to address declaration error
    lessonId: 11, // Assuming this is lesson11.js based on your last input
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
                    lines: [ // Using 'lines' directly as it's not a multi-speaker scenario here
                        { emoji: "🫂", text: "Ciao!", en: "Hello / Hi (informal)", zh: "你好" },
                        { emoji: "☀️", text: "Buongiorno!", en: "Good morning / Good day", zh: "早安 / 你好" },
                        { emoji: "🌆", text: "Buonasera!", en: "Good afternoon / Good evening", zh: "午安 / 晚上好" },
                        { emoji: "🌙", text: "Buonanotte!", en: "Good night", zh: "晚安" },
                        { emoji: "👋", text: "Arrivederci!", en: "Goodbye (formal & informal)", zh: "再見" },
                        { emoji: "😊", text: "Ciao!", en: "Bye (informal)", zh: "再見，非正式" }
                    ]
                },
                {
                    type: "tip",
                    title: "📌 Tip",
                    content: [
                        { type: "paragraph", emoji: "🗣️", text: "Ciao", en: "is versatile for hello/hi/bye.", zh: "多用途的打招呼語" },
                        { type: "paragraph", emoji: "☀️", text: "Buongiorno", en: "is 'good day' and used throughout the morning and early afternoon.", zh: "用於早上及下午初" },
                        { type: "paragraph", emoji: "🌆", text: "Buonasera", en: "is 'good evening' from late afternoon onwards.", zh: "用於下午末開始" },
                        { type: "paragraph", emoji: "🌙", text: "Buonanotte", en: "is strictly 'good night' before bed.", zh: "睡前才說" },
                        // Refactored Sub-Tip for "Which Goodbye"
                        {
                            type: "categorized_phrases_tip", // NEW TYPE: for tips with categorized phrases/examples
                            title: "Which Goodbye Should You Use? (何時說再見？)",
                            categories: [ // Renamed from 'sections' for clarity within a 'tip' item
                                {
                                    emoji: "👋",
                                    context_en: "Standard Goodbye", // Added en context for clarity
                                    context_zh: "標準的再見",
                                    phrases: [ // Renamed from 'examples' to 'phrases'
                                        { text: "Arrivederci!", en: "Standard goodbye, polite.", zh: "標準有禮" }
                                    ]
                                },
                                {
                                    emoji: "😊",
                                    context_en: "Informal Goodbye", // Added en context
                                    context_zh: "非正式的再見",
                                    phrases: [
                                        { text: "Ciao!", en: "Informal bye, used with friends/family.", zh: "與朋友家人" }
                                    ]
                                }
                            ]
                        }
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
                    scenarios: [
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
                        // Refactored Comparison: Come ti chiami? vs. Come si chiama?
                        {
                            type: "comparison_paragraph", // NEW TYPE: for direct comparisons
                            emoji: "✨",
                            phrase1: "Come ti chiami?",
                            phrase1_en: "(informal)",
                            phrase1_zh: "(非正式)",
                            vs_text: "vs.", // Explicit 'vs' field
                            phrase2: "Come si chiama?",
                            phrase2_en: "(formal).",
                            phrase2_zh: "(正式)。",
                            overall_note_zh: "非正式與正式"
                        },
                        { type: "paragraph", emoji: "🗣️", text: "Piacere!", en: "is a quick way to say 'Nice to meet you!'", zh: "快速說法" },
                        // Refactored Comparison: Piacere di conoscerti vs. Piacere di conoscerla
                        {
                            type: "comparison_paragraph",
                            emoji: "🤝",
                            phrase1: "Piacere di conoscerti",
                            phrase1_en: "(informal)",
                            phrase1_zh: "(非正式)",
                            vs_text: "vs.",
                            phrase2: "Piacere di conoscerla",
                            phrase2_en: "(formal)",
                            phrase2_zh: "(正式)",
                            overall_note_en: "are more complete phrases.",
                            overall_note_zh: "更完整的說法"
                        },
                        // Refactored Comparison: Come va? vs. Come stai?
                        {
                            type: "comparison_paragraph",
                            emoji: "💬",
                            phrase1: "Come va?",
                            phrase1_en: "(casual)",
                            phrase1_zh: "(口語)",
                            vs_text: "vs.", // Explicit 'vs'
                            phrase2: "Come stai?",
                            phrase2_en: "(standard)",
                            phrase2_zh: "(標準)",
                            overall_note_en: " 'How are you?' - 'Come va?' is more casual.",
                            overall_note_zh: "『你好嗎？』 - 『Come va？』更口語。"
                        },
                        // Refactored List: Molto bene / Non c'è male / Così così
                        {
                            type: "list_paragraph", // NEW TYPE: for lists of items/responses
                            emoji: "👍",
                            introduction_en: "are common responses.",
                            introduction_zh: "常見回答",
                            items: [ // Array of list items
                                { text: "Molto bene", en: "(Very good)", zh: "非常好" },
                                { text: "Non c'è male", en: "(Not bad)", zh: "還不錯" },
                                { text: "Così così", en: "(So-so)", zh: "馬馬虎虎" }
                            ]
                        }
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
                    scenarios: [
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
                        // Refactored List: Formal Titles
                        {
                            type: "list_paragraph",
                            emoji: "🤵",
                            introduction_en: "are formal titles.",
                            introduction_zh: "正式稱謂",
                            items: [
                                { text: "Signore", en: "(Mr./Sir)", zh: "先生" },
                                { text: "Signora", en: "(Mrs./Madam)", zh: "女士" },
                                { text: "Signorina", en: "(Miss)", zh: "小姐" }
                            ]
                        },
                        // Refactored List: Common Goodbyes
                        {
                            type: "list_paragraph",
                            emoji: "👋",
                            introduction_en: "are common goodbyes depending on when you'll meet again.",
                            introduction_zh: "根據再見時間使用",
                            items: [
                                { text: "A presto!", en: "(See you soon)", zh: "很快再見" },
                                { text: "A dopo!", en: "(See you later)", zh: "稍後見" },
                                { text: "Ci vediamo!", en: "(See you!)", zh: "再見！(常用)" }
                            ]
                        },
                        { type: "paragraph", emoji: "🎩", text: "Molto lieto/a", en: "(Very pleased to meet you) is a formal response.", zh: "正式回應" },
                        { type: "paragraph", emoji: "☀️", text: "Buona giornata!", en: "is used when parting during the day, wishing someone a good remainder of their day.", zh: "日間告別，祝願一天愉快" },
                        { type: "paragraph", emoji: "🌇", text: "Buona serata!", en: "is used when parting in the evening, wishing someone a good remainder of their evening.", zh: "晚間告別，祝願晚上愉快" }
                    ]
                }
            ]
        }
    ]
};
