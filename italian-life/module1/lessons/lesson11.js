// lessons/lesson11.js (Example)
// Make sure lessonData is defined globally or attached to window
const lessonData = { // or var lessonData = {
    lesson: "Lesson 11",
    title_en: "Making Reservations",
    title_zh: "预订",
    levels: [
        {
            levelId: "level-1",
            title: "Level 1: Basic Phrases",
            sections: [
                {
                    title: "Key Phrases for Booking",
                    type: "keyPhrase",
                    audio: "lesson11_level1_keyphrases.mp3",
                    phrases: [
                        { text: "Vorrei prenotare un tavolo.", en: "I would like to book a table.", zh: "我想预订一张桌子。" },
                        { text: "Per quante persone?", en: "For how many people?", zh: "几位？" },
                        { text: "Per stasera alle otto.", en: "For tonight at eight.", zh: "今晚八点。" },
                        { text: "Un tavolo per due.", en: "A table for two.", zh: "一张两人桌。" }
                    ]
                },
                {
                    title: "Important Tip: 'Prego'",
                    type: "tip",
                    content: [
                        {
                            type: "paragraph",
                            emoji: "💡",
                            text: "Prego",
                            en: "is a versatile Italian word.",
                            zh: "是一个多功能的意大利语单词。",
                            text_2: "It can mean 'You're welcome', 'Please', 'Go ahead', 'How can I help you?', or 'After you'.",
                            en_2: "",
                            zh_2: "它可以表示'不客气'、'请'、'请便'、'我能帮你什么忙？'或'您先请'。"
                        },
                        {
                            type: "list_paragraph",
                            introduction_en: "Common uses:",
                            introduction_zh: "常见用法：",
                            items: [
                                { text: "Grazie! Prego!", en: "Thank you! You're welcome!", zh: "谢谢！不客气！" },
                                { text: "Prego, si accomodi.", en: "Please, have a seat.", zh: "请坐。" },
                                { text: "Prego?", en: "Yes?", en_context: "(When someone calls your name or you want to know what someone wants)", zh: "请问？（当有人叫你或你想知道别人想要什么时）" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
