// lessons/lesson3.js (UPDATED with 'en' and 'zh' for all translations)

const lessonData = {
    lessonId: 3,
    title_en: "Polite Words",
    title_zh: "感謝與禮貌詞",
    module: "Module 1",
    lesson: "Lesson 3: Parole di cortesia",
    theme: "Learn to say \"thank you, please\" and more in daily interactions",
    levels: [
        {
            levelId: 1,
            title: "✅ Level 1 (A0): Basic polite words",
            sections: [
                {
                    type: "keyPhrase",
                    title: "📗 Key Phrases",
                    audio: "lesson3_1k.mp3",
                    phrases: [
                        { text: "Grazie", en: "Thank you", zh: "謝謝" },
                        { text: "Prego", en: "You’re welcome", zh: "不客氣" },
                        { text: "Per favore", en: "Please", zh: "請" },
                        { text: "Scusa", en: "Excuse me / Sorry (informal)", zh: "不好意思，非正式" },
                        { text: "Scusi", en: "Excuse me / Sorry (formal)", zh: "對陌生人或長輩" },
                        { text: "Mi scusi", en: "Excuse me (more polite to get attention)", zh: "更正式用於引起注意" },
                        { text: "Di niente", en: "No problem / Don’t mention it", zh: "沒關係" },
                        { text: "Signore", en: "Mr. / Sir", zh: "先生 / 紳士" },
                        { text: "Signora", en: "Mrs. / Madam", zh: "女士 / 太太" },
                        { text: "Signori", en: "Ladies and gentlemen / Sirs", zh: "先生們女士們 / 各位" }
                    ]
                },
                {
                    type: "dialogue",
                    title: "🎯 Dialogue",
                    audio: "lesson3_1.mp3",
                    scenarios: [
                        {
                            title: "🩷 Dialogue 1: At the market (市場對話)",
                            lines: [
                                { speaker: "1", text: "Per favore, Signore, un chilo di mele.", en: "Please, sir, one kilo of apples.", zh: "請給我一公斤蘋果，先生" },
                                { speaker: "2", text: "Ecco a te.", en: "Here you go.", zh: "給你" },
                                { speaker: "1", text: "Grazie!", en: "Thank you!", zh: "謝謝" },
                                { speaker: "2", text: "Prego!", en: "You’re welcome!", zh: "不客氣" },
                                { speaker: "1", text: "Per favore, anche una banana.", en: "Please, also a banana.", zh: "再加一根香蕉" },
                                { speaker: "2", text: "Ecco.", en: "Here.", zh: "來了" },
                                { speaker: "1", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝" },
                                { speaker: "2", text: "Prego, buona giornata!", en: "You’re welcome. Have a good day!", zh: "不客氣，祝你有美好的一天" }
                            ]
                        },
                        {
                            title: "🩷 Dialogue 2: Passing by and asking for directions (通行與問路)",
                            lines: [
                                { speaker: "1", text: "Scusi, Signora, posso passare?", en: "Excuse me, madam, can I pass?", zh: "不好意思，女士，我可以過嗎？" },
                                { speaker: "2", text: "Certo, scusa!", en: "Of course, sorry!", zh: "當然可以，不好意思" },
                                { speaker: "1", text: "Mi scusi, Signore, dov’è il bagno?", en: "Excuse me, sir, where is the bathroom?", zh: "請問，先生，廁所在哪裡？" },
                                { speaker: "2", text: "Lì, a sinistra.", en: "There, to the left.", zh: "在那邊，左手邊" },
                                { speaker: "1", text: "Grazie!", en: "Thank you!", zh: "謝謝" },
                                { speaker: "2", text: "Di niente!", en: "No problem!", zh: "沒關係" },
                                { speaker: "1", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
                            ]
                        }
                    ]
                },
                {
                    type: "tip",
                    title: "📌 Tip",
                    content: [
                        { type: "paragraph", emoji: "💠", text: "Grazie mille", en: "= Thanks a lot", zh: "非常感謝" },
                        { type: "paragraph", emoji: "💠", text: "Prego can also mean " },
                        { type: "nested-paragraph", text: "– Please, go ahead", zh: "請" },
                        { type: "nested-paragraph", text: "– You may enter/proceed", zh: "請便", example: "Prego, entri!" },
                        { type: "paragraph", emoji: "💠", text: "Di niente", en: "is casual, meaning \"nothing\" or \"No problem\"", zh: "沒關係" },
                        { type: "paragraph", emoji: "💠", text: "Scusa (informal) vs. Scusi / Mi scusi (formal)" },
                        { type: "nested-paragraph", text: "– Use Scusa with friends/family" },
                        { type: "nested-paragraph", text: "– Use Scusi or Mi scusi with strangers or in formal settings. " },
                        { type: "nested-paragraph", text: "– Mi scusi is very polite and used to get attention.", zh: "用來引起對方注意" },
                        { type: "paragraph", emoji: "💠", text: "When to use Prego vs. Di niente:" },
                        { type: "dialogue-example", speaker_a_emoji: "👧", speaker_a: "A", text_a: "Grazie per il caffè!", speaker_b_emoji: "👦", speaker_b: "B", text_b: "Prego!" },
                        { type: "nested-2-paragraph", text: "Prego :Use for giving things (food, drinks, store help). It's the standard 'you're welcome." },
                        { type: "dialogue-example", speaker_a_emoji: "👧", speaker_a: "A", text_a: "Grazie per l’aiuto di oggi!", speaker_b_emoji: "👦", speaker_b: "B", text_b: "Di niente!" },
                        { type: "nested-2-paragraph", text: "Di niente :Use in casual situations to say \"It's nothing\" or \"No problem.\"", zh: "較輕鬆口語" }
                    ]
                }
            ]
        },
        {
            levelId: 2,
            title: "✅ Level 2 (A0+): More Phrases",
            sections: [
                {
                    type: "keyPhrase",
                    title: "📗 Key Phrases",
                    audio: "lesson3_2k.mp3",
                    phrases: [
                        { text: "Prego", en: "You’re welcome / Go ahead / After you", zh: "不客氣 / 請便 / 您先" },
                        { text: "Per favore", en: "Please", zh: "請" },
                        { text: "Scusa", en: "Excuse me / Sorry (informal)", zh: "不好意思 / 對不起，非正式" },
                        { text: "Scusi", en: "Excuse me / Sorry (formal)", zh: "不好意思 / 對不起，正式" },
                        { text: "Mi scusi", en: "Excuse me (very polite)", zh: "對不起，打擾一下" },
                        { text: "Di niente", en: "No problem / Don’t mention it", zh: "沒關係 / 不客氣" },
                        { text: "Signore / Signora", en: "Sir / Ma’am", zh: "先生 / 女士" }
                    ]
                }
            ]
        },
        {
            levelId: 3,
            title: "✅ Level 3 (A1): Polite Requests & Offers",
            sections: [
                {
                    type: "keyPhrase",
                    title: "📗 Key Phrases",
                    audio: "lesson3_3k.mp3",
                    phrases: [
                        { text: "Posso...?", en: "Can I...? / May I...?", zh: "我可以…嗎？" },
                        { text: "Vorrei...", en: "I would like...", zh: "比 voglio 更客氣" },
                        { text: "C'è...? / Ci sono...?", en: "Is there...? / Are there...?", zh: "有…嗎？" },
                        { text: "Le / Ti posso aiutare?", en: "Can I help you?", zh: "正式 / 非正式" },
                        { text: "Certamente / Certo", en: "Certainly / Of course" },
                        { text: "Volentieri", en: "Gladly / With pleasure" },
                        { text: "Mi dispiace", en: "I'm sorry / I regret", zh: "比 scusa 更正式" },
                        { text: "Con permesso", en: "Excuse me", zh: "借過 / 禮貌打斷" }
                    ]
                },
                {
                    type: "dialogue",
                    title: "🎯 Dialogue / When to use",
                    audio: "lesson3_3.mp3",
                    scenarios: [
                        {
                            title: "🩷 Scenario: Asking for information in a shop (在商店詢問資訊)",
                            lines: [
                                { speaker: "1", text: "Mi scusi, Signora, posso chiederle un'informazione?", en: "Excuse me, Madam, may I ask you for some information?", zh: "不好意思，女士，我可以向您詢問一些資訊嗎？" },
                                { speaker: "2", text: "Certamente, prego!", en: "Certainly, please go ahead!", zh: "當然可以，請說吧！" },
                                { speaker: "1", text: "Vorrei comprare un souvenir. C'è un negozio di souvenir qui vicino?", en: "I would like to buy a souvenir. Is there a souvenir shop nearby?", zh: "我想要買紀念品。附近有紀念品店嗎？" },
                                { speaker: "2", text: "Sì, c'è un negozio lì, a destra.", en: "Yes, there's a shop there, to the right.", zh: "有，那邊右手邊有一家店。" },
                                { speaker: "1", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
                                { speaker: "2", text: "Prego!", en: "You're welcome!", zh: "不客氣！" }
                            ]
                        }
                    ]
                },
                {
                    type: "tip",
                    title: "📌 Tip",
                    content: [
                        { type: "paragraph", emoji: "💠", text: "Polite Phrases – Be kind and respectful" },
                        { type: "nested-paragraph", text: "- Posso...?", en: "– May I...?", zh: "禮貌請求" },
                        { type: "nested-paragraph", text: "- Vorrei...", en: "is more polite than Voglio...", zh: "「我想要...」更客氣" },
                        { type: "nested-paragraph", text: "- C'è...? / Ci sono...?", en: "– Is there...?", zh: "詢問是否有" },
                        { type: "nested-paragraph", text: "- Mi dispiace", en: "shows deeper regret than Scusa/Scusi", zh: "更強烈的道歉" },
                        { type: "nested-paragraph", text: "- Use Ti (informal) or Le (formal) based on the person", zh: "根據對象選擇你/您" }
                    ]
                }
            ]
        }
    ]
};
