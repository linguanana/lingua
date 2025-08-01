// lessons/lesson1.js
// This object contains all the data for the lesson, including key phrases, dialogs, and tips.
const lessonData = {
  lessonId: 1,
  lesson_title: "🇫🇷 Lesson 1 – Say Hello",
  title_en: "Say Hello",
  title_zh: "打招呼",
  levels: [
    {
      level: "A0",
      keyPhrases: [
        { fr: "Salut", en: "Hi (casual)", zh: "嗨（口語）" },
        { fr: "Coucou", en: "Hey there! (cute/informal)", zh: "哈囉～（可愛語氣）" },
        { fr: "Bonjour", en: "Hello (formal)", zh: "你好（正式）" },
        { fr: "Bon après-midi", en: "Good afternoon", zh: "午安" },
        { fr: "Bonsoir", en: "Good evening", zh: "晚上好" },
        { fr: "Bonne nuit", en: "Good night (before bed)", zh: "睡前說晚安" },
      ],
      dialog: [
        {
          id: "1",
          dialogue: [
            { speaker: "1", text: "Bonjour.", en: "Hello (formal)", zh: "你好（正式）" },
            { speaker: "2", text: "Salut !", en: "Hi! (casual)", zh: "嗨！（口語）" },
            { speaker: "1", text: "Bonsoir.", en: "Good evening.", zh: "晚上好。" }
          ]
        }
      ],
      tips: [
        { en: "Use 'Bonjour' during the day, can be until 5-6pm", zh: "白天時使用 Bonjour。" },
        { en: "Use 'Salut' with friends.", zh: "與朋友之間使用" },
        { en: "'Bon après-midi' is used in the afternoon", zh: "下午使用的問候語。" },
        { en: "Use 'Bonsoir' after 6 PM.", zh: "晚上六點後使用" }
      ]
    },
    {
      level: "A0+",
      keyPhrases: [
        { fr: "Au revoir", en: "Goodbye (formal)", zh: "正式的再見" },
        { fr: "À tout à l'heure", en: "See you later today", zh: "今天稍後見" },
        { fr: "À bientôt", en: "See you soon", zh: "很快再見" },
        { fr: "À demain", en: "See you tomorrow", zh: "明天見" },
        { fr: "Enchanté", en: "Nice to meet you", zh: "初次見面" },
      ],
      dialog: [
        {
          id: "1",
          dialogue: [
            { speaker: "1", text: "Au revoir.", en: "Goodbye.", zh: "再見。" },
            { speaker: "2", text: "À tout à l'heure !", en: "See you later today!", zh: "今天稍後見！" },
            { speaker: "1", text: "Enchanté !", en: "Nice to meet you!", zh: "初次見面！" },
            { speaker: "2", text: "Coucou !", en: "Hey there!", zh: "哈囉～" }
          ]
        }
      ],
      tips: [
        { en: "'Au revoir' is more formal than 'Salut'.", zh: "Au revoir 比 Salut 更正式。" },
        { en: "'Coucou' is very informal and cute.", zh: "Coucou 非常非正式而且可愛。" },
        { en: "'Bonne soirée' is used in the evening.", zh: "晚上使用 Bonne soirée。" },
        { en: "'Bonne journée' is used in the morning or early afternoon.", zh: "早上或下午初使用 Bonne journée。" },
        { en: "'À plus' is a casual way to say 'see you later'.", zh: "À plus 是 À plus tard 的口語說法。" }
      ]
    },
    {
      level: "A1",
      keyPhrases: [
        { fr: "À plus", en: "See you later", zh: "待會見" },
        { fr: "À plus tard", en: "See you later today", zh: "今天稍後見" },
        { fr: "On se voit bientôt", en: "See you soon (in person)", zh: "很快再見（面對面）" },
        { fr: "On se parle bientôt", en: "Talk soon", zh: "再聯絡" },
        { fr: "On s'appelle demain", en: "Talk to you tomorrow", zh: "明天再聯絡" },
        { fr: "À très bientôt", en: "See you very soon", zh: "非常快再見" },
        { fr: "Bonne soirée", en: "Have a nice evening", zh: "祝你今晚愉快" },
        { fr: "Bonne journée", en: "Have a good day", zh: "祝你今天愉快" },
        { fr: "À la prochaine", en: "See you next time", zh: "下次見" },
        { fr: "À la semaine prochaine", en: "See you next week", zh: "下週見" },
        { fr: "À une prochaine fois", en: "Until next time", zh: "等下次見面" }
      ],
      dialog: [
        {
          id: "1",
          dialogue: [
            { speaker: "1", text: "À plus !", en: "See you later!", zh: "待會見！" },
            { speaker: "2", text: "Bonne soirée !", en: "Have a nice evening!", zh: "祝你今晚愉快！" },
            { speaker: "1", text: "On se parle bientôt.", en: "Talk soon.", zh: "再聯絡。" },
            { speaker: "2", text: "À très bientôt !", en: "See you very soon!", zh: "非常快再見！" }
          ]
        }
      ],
      tips: [
        { en: "'À plus' is very common among friends.", zh: "À plus 在朋友之間非常常見。" },
        { en: "'On se voit bientôt' implies an in-person meeting.", zh: "On se voit bientôt 意味著面對面會見。" },
        { en: "'À la semaine prochaine' is useful for weekly meetings.", zh: "À la semaine prochaine 常用於每週會面。" }
      ]
    }
  ]
};
