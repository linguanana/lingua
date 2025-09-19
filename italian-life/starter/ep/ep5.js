const episodeData = {
  ep_title: "ep",
  episodeId: 4,
  episode: "🇮🇹 Episode – Starter 04: Subject Pronouns",
  episode_zh: "🇮🇹 入門 04：人稱代詞",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "I, you, he, she (Io, Tu, Lui, Lei)",
      topic_zh: "我、你、他、她",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – I am, you are (Io sono / Tu sei)",
          scene_zh: "第 1 天 – 我是 / 你是",
          dialogue: [
            { speaker: "Female", text: "Ciao! Io sono Anna.", en: "Hi! I’m Anna.", zh: "嗨！我是 Anna。" },
            { speaker: "Male", text: "Piacere, io sono Marco.", en: "Nice to meet you, I’m Marco.", zh: "很高興認識你，我是 Marco。" },
            { speaker: "Female", text: "Tu sei studente?", en: "Are you a student?", zh: "你是學生嗎？" },
            { speaker: "Male", text: "Sì, io sono studente.", en: "Yes, I’m a student.", zh: "是的，我是學生。" },
            { speaker: "Female", text: "Io sono studentessa di lingue.", en: "I’m a language student.", zh: "我是語言系的學生。" },
            { speaker: "Male", text: "Interessante! Tu sei di Roma?", en: "Interesting! Are you from Rome?", zh: "有趣！你是羅馬人嗎？" },
            { speaker: "Female", text: "No, io sono di Milano.", en: "No, I’m from Milan.", zh: "不是，我來自米蘭。" },
            { speaker: "Male", text: "Capisco! Io sono di Firenze.", en: "I see! I’m from Florence.", zh: "我懂了！我是佛羅倫斯人。" },
            { speaker: "Female", text: "Perfetto, allora siamo tutti italiani!", en: "Perfect, then we’re all Italians!", zh: "太好了，那我們都是義大利人！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – He is",
          scene_zh: "第 2 天 – 他是",
          dialogue: [
            { speaker: "Female", text: "Chi è lui?", en: "Who is he?", zh: "他是誰？" },
            { speaker: "Male", text: "Lui è Paolo.", en: "He is Paolo.", zh: "他是 Paolo。" },
            { speaker: "Female", text: "Lui è tuo amico?", en: "Is he your friend?", zh: "他是你的朋友嗎？" },
            { speaker: "Male", text: "Sì, lui è un mio amico.", en: "Yes, he is my friend.", zh: "是的，他是我的朋友。" },
            { speaker: "Female", text: "Lui è studente anche lui?", en: "Is he also a student?", zh: "他也是學生嗎？" },
            { speaker: "Male", text: "No, lui è insegnante.", en: "No, he is a teacher.", zh: "不是，他是老師。" },
            { speaker: "Female", text: "Davvero? Lui è insegnante di matematica?", en: "Really? Is he a math teacher?", zh: "真的嗎？他是數學老師嗎？" },
            { speaker: "Male", text: "No, lui è insegnante di italiano.", en: "No, he is an Italian teacher.", zh: "不是，他是義大利語老師。" },
            { speaker: "Female", text: "Fantastico! Allora lui è molto utile per noi.", en: "Fantastic! Then he’s very useful for us.", zh: "太棒了！那他對我們很有幫助。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – She is",
          scene_zh: "第 3 天 – 她是",
          dialogue: [
            { speaker: "Female", text: "Chi è lei?", en: "Who is she?", zh: "她是誰？" },
            { speaker: "Female", text: "Lei è Maria, mia sorella.", en: "She is Maria, my sister.", zh: "她是瑪麗亞，我的姐姐/妹妹。" },
            { speaker: "Male", text: "Ah, lei è tua sorella!", en: "Ah, she is your sister!", zh: "啊，她是你的姐姐/妹妹！" },
            { speaker: "Female", text: "Sì, lei è mia sorella.", en: "Yes, she is my sister.", zh: "是的，她是我的姐姐/妹妹。" },
            { speaker: "Male", text: "Capisco. Lei è studentessa?", en: "I see. Is she a student?", zh: "我懂了。她是學生嗎？" },
            { speaker: "Female", text: "No, lei è dottoressa.", en: "No, she is a doctor.", zh: "不是，她是醫生。" },
            { speaker: "Male", text: "Interessante! Lei è di Roma?", en: "Interesting! Is she from Rome?", zh: "有趣！她是羅馬人嗎？" },
            { speaker: "Female", text: "No, lei è di Napoli.", en: "No, she is from Naples.", zh: "不是，她來自拿坡里。" },
            { speaker: "Male", text: "Perfetto, allora lei è del Sud.", en: "Perfect, then she is from the South.", zh: "太好了，那她是來自南部。" },
            { speaker: "Teacher", text: "Nuova parola: sorella = sister. Fratello = brother.", en: "New word: sorella = sister. Fratello = brother.", zh: "新單詞：sorella = 姐姐/妹妹；fratello = 哥哥/弟弟。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – I am/ I’m. subject pronoun can be omitted in Italian",
          scene_zh: "第 4 天 – 我是 / 省略代詞的小提示課",
          dialogue: [
            { speaker: "Teacher", text: "In italiano a volte non serve dire il pronome.", en: "In Italian sometimes you don’t need to say the pronoun.", zh: "在義大利文裡，有時候不需要說代詞。" },
            { speaker: "Teacher", text: "Per esempio: Io sono Anna, oppure: Sono Anna.", en: "For example: Io sono Anna, or: Sono Anna.", zh: "例如：Io sono Anna，或者：Sono Anna。" },
            { speaker: "Female", text: "Io sono Anna, oppure: Sono Anna.", en: "I am Anna, or: I am Anna.", zh: "我是安娜，或者：Sono Anna。" },
            { speaker: "Male", text: "Tu sei Marco, oppure: Sei Marco.", en: "You are Marco, or: You are Marco.", zh: "你是馬可，或者：Sei Marco。" },
            { speaker: "Teacher", text: "Con lui: Lui è Paolo, oppure: È Paolo.", en: "With he: Lui è Paolo, or: È Paolo.", zh: "用『他』：Lui è Paolo，或者：È Paolo。" },
            { speaker: "Female", text: "Lei è Maria, oppure: È Maria.", en: "She is Maria, or: She is Maria.", zh: "她是瑪麗亞，或者：È Maria。" },
            { speaker: "Male", text: "Noi siamo studenti, oppure: Siamo studenti.", en: "We are students, or: We are students.", zh: "我們是學生，或者：Siamo studenti。" },
            { speaker: "Female", text: "Voi siete amici, oppure: Siete amici.", en: "You are friends, or: You are friends.", zh: "你們是朋友，或者：Siete amici。" },
            { speaker: "Male", text: "Loro sono felici, oppure: Sono felici.", en: "They are happy, or: They are happy.", zh: "他們很開心，或者：Sono felici。" },
            { speaker: "Teacher", text: "Bravo! Basta il verbo, si capisce lo stesso.", en: "Good! The verb alone is enough to understand.", zh: "很好！只要動詞就能懂。" }
          ]
        }
      ]
    }
  ]
};
