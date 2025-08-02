const moduleData = {
  moduleId: "1",
  lessonId: 1,
  title: "Module 1 – Greetings",
  lessons: [
    {
      lessonId: 1,
      title: "Lesson 1 – Say Hello!",
      levels: [
        {
          levelId: 1,
          levelName: "Level 1 (A0)",
          mp3: "lesson1_1.mp3",
          keyPhrases: [
            { text: "Ciao!", en: "Hi / Bye", zh: "嗨／掰" },
            { text: "Buongiorno!", en: "Good morning", zh: "早安" }
          ],
          dialogue: [
            { speaker: "1", text: "Ciao!", en: "Hi!", zh: "嗨！" },
            { speaker: "2", text: "Ciao, come stai?", en: "Hi, how are you?", zh: "嗨，你好嗎？" }
          ],
          tips: [
            { text: "Ciao is for friends", zh: "Ciao 適合朋友" },
            { text: "Buongiorno is polite", zh: "Buongiorno 比較正式" }
          ]
        }
        // 其他 Level...
      ]
    }
    // 其他 Lesson...
  ]
};
