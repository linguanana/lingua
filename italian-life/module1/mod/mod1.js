const moduleData = {
  moduleTitle: "Module 1 – Greetings",
  lessons: [
    {
      lessonId: 1,
      title: "Ciao! Missione al mercato",
      levels: [
        {
          levelId: 1,
          levelName: "Level 1 (A0)",
          keyPhrases: [
            { text: "Ciao!", en: "Hi / Bye", zh: "嗨／掰" },
            { text: "Buongiorno!", en: "Good morning", zh: "早安" }
          ],
          dialogue: [
            { speaker: "1", text: "Ciao!", en: "Hi!", zh: "嗨！" },
            { speaker: "2", text: "Ciao, come stai?", en: "Hi, how are you?", zh: "嗨，你好嗎？" }
          ],
          tips: [
            { text: "Use Ciao with friends", zh: "Ciao 適合熟人" },
            { text: "Buongiorno is polite before 5pm", zh: "早上用 Buongiorno 比較有禮貌" }
          ],
          mp3: "lesson1_1.mp3"
        },
        {
          levelId: 2,
          levelName: "Level 2 (A0+)",
          ...
        }
      ]
    },
    ...
  ]
};
