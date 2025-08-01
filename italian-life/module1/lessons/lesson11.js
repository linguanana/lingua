// lessons/lesson2.js (Example lesson data file)

const lessonData = {
    // --- Top-level lesson metadata (for the main H1 and info text) ---
    module_emoji: "🇮🇹",
    module_id: 1,
    lesson_id: 11,
    lesson_display_title: "Come stai? Missione al mercato",
    module_title_tooltip: "How are you? Market mission（你好嗎？市場任務）",

    theme: "Asking how someone is",

    // Navigation links for the "📚 Lessons: 1 | 2 | 3..." part
    lesson_navigation: [
        { id: "1", label: "1" },
        { id: "2", label: "2" }, // This will be marked as current
        { id: "3", label: "3" },
        { id: "4", label: "4" },
        { id: "5", label: "5" },
        { id: "6", label: "6" },
        { id: "7", label: "7" },
        { id: "8", label: "8" },
        { id: "9", label: "9" }
        { id: "10", label: "10" },
        { id: "11", label: "11" }, // Current lesson
        { id: "12", label: "12" } // Next lesson, if applicable
    ],
    level_guidance: `Start with Level 1 — come back for Level 2 or/and 3 as you progress.`,

    // --- Levels and Sections (the core lesson content) ---
    levels: [
        {
            levelId: "1",
            title: "✅ Level 1 (A0): Ask \"How are you?\"",
            sections: [
                {
                    title: "Key Phrase",
                    type: "keyPhrase",
                    // audio: "lesson2_level1_keyphrase.mp3", // Ensure this audio file exists in your 'audio' folder
                    phrases: [
                        { text: "Come stai?", en: "How are you?", zh: "你好嗎？" },
                        { text: "Come sta?", en: "How are you? formal", zh: "您好嗎？" },
                        { text: "Come va?", en: "How’s it going?", zh: "最近如何？" },
                        { text: "Bene", en: "I’m good / Fine", zh: "我很好" },
                        { text: "Così così", en: "So-so", zh: "普普通通" }
                    ]
                },
                {
                    title: "Dialogue / When to use",
                    type: "dialogue",
                    audio: "lesson2_1.mp3", // Ensure this audio file exists
                    contexts: [ // For the "When to use" format
                        { emoji: "👋", title: "Greeting a friend casually", phrase: "Come stai?", en: "informal, friendly." },
                        { emoji: "🧑‍🏫", title: "Talking to a teacher or someone older", phrase: "Come sta?", en: "formal version." },
                        { emoji: "🤝", title: "Meeting someone at a café", phrase: "Come va?", en: "neutral and common." },
                        { emoji: "😊", title: "Feeling good", phrase: "Bene!" },
                        { emoji: "😐", title: "Feeling okay", phrase: "Così così", en: "just so-so." },
                        { emoji: "😟", title: "Not feeling great", phrase: "Non molto bene", en: "not so good." }
                    ]
                },
                {
                    title: "Task or Homework",
                    type: "task",
                    content: `Ask someone today: “<span class="italian-word">Come stai?</span>” and answer with “<span class="italian-word">Bene</span>” or “<span class="italian-word">Così così</span>.”`
                },
                {
                    title: "Tip",
                    type: "tip",
                    content: [
                        { type: "paragraph", text: "Try asking someone: ", text_2: "Come stai?", en_2: "– “How are you?”" },
                        { type: "paragraph", text: "When replying, say: ", text_2: "Sto bene.", en_2: "– “I’m fine.”" },
                        { type: "nested_paragraph", emoji: "➕", strong: "Note:", text: "Sto", en: "comes from", text_2: "stare", en_2: "(to be / to stay), and", text_3: "bene", en_3: "means “well.”" },
                        { type: "paragraph", emoji: "💬", text: "You can also reply simply with ", text_2: "Bene", en_2: "or", text_3: "Così così", en_3: "." }
                    ]
                }
            ]
        },
        {
            levelId: "2",
            title: "✅ Level 2 (A0+): Answer with “Sto bene”",
            sections: [
                {
                    title: "Key Phrase (Review)",
                    type: "keyPhrase",
                    phrases: [
                        { text: "Sto bene.", en: "I’m fine.", zh: "我很好" },
                        { text: "Tutto bene?", en: "Everything okay?", zh: "都好嗎？" },
                        { text: "Come va?", en: "How’s it going?", zh: "近期如何？" },
                        { text: "Stai bene?", en: "Are you okay?", zh: "你還好嗎？" },
                        { text: "Grazie!", en: "Thank you!", zh: "謝謝" },
                        { text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝" }
                    ]
                },
                {
                    title: "Dialogue Examples",
                    type: "dialogue",
                    audio: "lesson2_2.mp3",
                    lines: [ // For direct simple dialogue lines
                        { speaker: "👩‍🏫", text: "Come stai?", en: "" },
                        { speaker: "🧑", text: "Sto bene, grazie!", en: "I'm fine, thank you!" },
                        { speaker: "👨‍🍳", text: "Tutto bene?", en: "" },
                        { speaker: "👩", text: "Sì, sto bene!", en: "Yes, I’m fine!" },
                        { speaker: "👧", text: "Come va oggi?", en: "" },
                        { speaker: "👦", text: "Sto bene. Un po’ stanco, ma bene.", en: "I’m fine. A bit tired, but fine." },
                        { speaker: "🧑‍💻", text: "Stai bene?", en: "" },
                        { speaker: "👩‍🎓", text: "Sì, sto bene adesso.", en: "Yes, I’m okay now." }
                    ]
                },
                {
                    title: "Task or Homework",
                    type: "task",
                    content: `Use <span class="italian-word">Sto bene</span> in a real conversation.<br>
                              <span class="italian-word">oggi</span> – “today” in Italian.<br>
                              <span class="italian-word">adesso</span> – “now / at this moment.”`
                }
            ]
        },
        {
            levelId: "3",
            title: "✅ Level 3 (A1): More Emotional Replies",
            sections: [
                {
                    title: "Phrases for How You Feel",
                    type: "dialogue",
                    audio: "lesson2_3.mp3",
                    lines: [
                        { speaker: "🧑", text: "Sto benissimo!", en: "I’m great!", zh: "我非常好" },
                        { speaker: "🧑", text: "Così così.", en: "So-so", zh: "馬馬虎虎" },
                        { speaker: "🧑", text: "Non molto bene.", en: "Not very well", zh: "不太好" },
                        { speaker: "🧑", text: "Sono stanco / stanca.", en: "I’m tired", zh: "我累了" },
                        { speaker: "🧑", text: "E tu?", en: "And you?", zh: "你呢？" }
                    ]
                },
                {
                    title: "Tip",
                    type: "tip",
                    className: "tip-box", // Custom class for this tip's container
                    content: [
                        { type: "paragraph", emoji: "💠", text: "Use ", text_2: "Sto benissimo", en_2: "when you're feeling great" },
                        { type: "nested_paragraph", className: "tip-nested", text: "- Use ", text_2: "“benissimo”", en_2: "after something great — like good news or a perfect day." },
                        { type: "nested_paragraph", className: "tip-nested", text: "- (非常好、超棒的心情時使用，例如剛完成重要任務）" },
                        { type: "paragraph", emoji: "💠", text: "Use ", text_2: "Così così", en_2: "if you feel just okay" },
                        { type: "paragraph", emoji: "💠", text: "Sono stanco", en: "– I’m tired (male speaker)" },
                        { type: "paragraph", emoji: "💠", text: "Sono stanca", en: "– I’m tired (female speaker)" }
                    ]
                }
            ]
        }
    ]
};
