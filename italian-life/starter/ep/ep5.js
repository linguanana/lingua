const episodeData = {
  ep_title: "ep",
  episodeId: 5,
  episode: "🇮🇹 Starter 05 – Core Words for Absolute Beginners",
  episode_zh: "🇮🇹 初學零基礎 – 必學單字",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.75",
  topics: [
    {
      topicId: 1,
      topic: "🗣️ Core Words and Expressions",
      topic_zh: "🗣️ 初學必學單字與表達",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Greetings",
          scene_zh: "第 1 天 — 打招呼",
          dialogue: [
            { speaker: "Female", text: "Salve", en: "Hello", zh: "你好" },
            { speaker: "Female", text: "Ciao", en: "Hi / Bye", zh: "嗨 / 掰" },
            { speaker: "Female", text: "Buongiorno", en: "Good morning", zh: "早安" },
            { speaker: "Female", text: "Buon pomeriggio", en: "Good afternoon", zh: "午安" },
            { speaker: "Female", text: "Buonasera", en: "Good evening", zh: "晚上好" },
            { speaker: "Female", text: "Buonanotte", en: "Good night", zh: "晚安" },
            { speaker: "Female", text: "Buona giornata", en: "Have a good day", zh: "祝你有美好的一天" },
            { speaker: "Female", text: "Buona serata", en: "Have a nice evening", zh: "祝你有個愉快的夜晚" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Goodbyes",
          scene_zh: "第 2 天 — 再見",
          dialogue: [
            { speaker: "Female", text: "Arrivederci", en: "Goodbye (formal)", zh: "再見（正式）" },
            { speaker: "Female", text: "Ciao", en: "Bye (informal)", zh: "掰（非正式）" },
            { speaker: "Female", text: "A presto", en: "See you soon", zh: "回頭見" },
            { speaker: "Female", text: "A dopo", en: "See you later", zh: "待會見" },
            { speaker: "Female", text: "A domani", en: "See you tomorrow", zh: "明天見" },
            { speaker: "Female", text: "Alla prossima", en: "Until next time", zh: "下次見" },
            { speaker: "Female", text: "Ci vediamo", en: "See you", zh: "再見 / 我們會再見面" },
            { speaker: "Female", text: "Ciao ciao", en: "Bye-bye", zh: "掰掰" },
            { speaker: "Female", text: "Addio", en: "Farewell (final)", zh: "永別 / 再見（文學用語）" },
            { speaker: "Female", text: "Ci vediamo stasera", en: "See you tonight", zh: "今晚見" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Polite Words",
          scene_zh: "第 3 天 — 禮貌用語",
          dialogue: [
            { speaker: "Female", text: "Sì", en: "Yes", zh: "是的" },
            { speaker: "Female", text: "No", en: "No", zh: "不是" },
            { speaker: "Female", text: "Forse", en: "Maybe", zh: "也許" },
            { speaker: "Female", text: "Certo!", en: "Of course! / Sure!", zh: "當然！" },
            { speaker: "Female", text: "Per favore", en: "Please", zh: "請" },
            { speaker: "Female", text: "Grazie", en: "Thank you", zh: "謝謝" },
            { speaker: "Female", text: "Grazie mille", en: "Thank you very much", zh: "非常感謝" },
            { speaker: "Female", text: "Prego", en: "You’re welcome", zh: "不客氣" },
            { speaker: "Female", text: "Di niente", en: "It’s nothing", zh: "沒什麼，不客氣" },
            { speaker: "Female", text: "Mi puoi aiutare?", en: "Can you help me? (informal)", zh: "你能幫我嗎？（非正式）" },
            { speaker: "Female", text: "Può aiutarmi?", en: "Can you help me? (formal)", zh: "您能幫我嗎？（正式）" },
            { speaker: "Female", text: "Scusa", en: "Sorry (informal)", zh: "抱歉（非正式）" },
            { speaker: "Female", text: "Mi scusi", en: "Excuse me (formal)", zh: "不好意思（正式）" },
            { speaker: "Female", text: "Mi dispiace", en: "I’m sorry", zh: "對不起" },
            { speaker: "Female", text: "Non capisco.", en: "I don’t understand.", zh: "我不懂。" },
            { speaker: "Female", text: "Non lo so.", en: "I don’t know.", zh: "我不知道。" },
            { speaker: "Female", text: "Puoi ripetere, per favore?", en: "Can you repeat that, please? (informal)", zh: "你能再說一次嗎？（非正式）" },
            { speaker: "Female", text: "Può ripetere, per favore?", en: "Can you repeat that, please? (formal)", zh: "您能再說一次嗎？（正式）" },
            { speaker: "Female", text: "Nessun problema", en: "No problem", zh: "沒問題" },
            { speaker: "Female", text: "Tranquillo", en: "Don’t worry", zh: "別擔心" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – How are you?",
          scene_zh: "第 4 天 — 你好嗎？",
          dialogue: [
            { speaker: "Female", text: "Come stai?", en: "How are you? (informal)", zh: "你好嗎？（非正式）" },
            { speaker: "Female", text: "Come sta?", en: "How are you? (formal)", zh: "您好嗎？（正式）" },
            { speaker: "Female", text: "Come va?", en: "How’s it going?", zh: "過得怎麼樣？" },
            { speaker: "Female", text: "Sto bene", en: "I’m good", zh: "我很好" },
            { speaker: "Female", text: "Benissimo", en: "Very well / Great", zh: "非常好" },
            { speaker: "Female", text: "Così così", en: "So-so", zh: "馬馬虎虎" },
            { speaker: "Female", text: "Non c’è male", en: "Not bad", zh: "還不錯" },
            { speaker: "Female", text: "Sto male", en: "I’m not well / I feel bad", zh: "我不好 / 身體不舒服" },
            { speaker: "Female", text: "Sono stanco", en: "I’m tired (male)", zh: "我累了（男）" },
            { speaker: "Female", text: "Sono stanca", en: "I’m tired (female)", zh: "我累了（女）" },
            { speaker: "Female", text: "Sono felice", en: "I’m happy", zh: "我很高興" },
            { speaker: "Female", text: "Sono triste", en: "I’m sad", zh: "我很難過" },
            { speaker: "Female", text: "Ho fame", en: "I’m hungry", zh: "我餓了" },
            { speaker: "Female", text: "Ho sete", en: "I’m thirsty", zh: "我渴了" },
            { speaker: "Female", text: "E tu?", en: "And you? (informal)", zh: "你呢？（非正式）" },
            { speaker: "Female", text: "E Lei?", en: "And you? (formal)", zh: "您呢？（正式）" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Introductions",
          scene_zh: "第 5 天 — 自我介紹",
          dialogue: [
            { speaker: "Female", text: "Piacere di conoscerti", en: "Nice to meet you (informal)", zh: "很高興認識你（非正式）" },
            { speaker: "Female", text: "Piacere di conoscerLa", en: "Nice to meet you (formal)", zh: "很高興認識您（正式）" },
            { speaker: "Female", text: "Piacere!", en: "Nice to meet you! (short)", zh: "幸會！" },
            { speaker: "Female", text: "Come ti chiami?", en: "What’s your name? (informal)", zh: "你叫什麼名字？（非正式）" },
            { speaker: "Female", text: "Come si chiama?", en: "What’s your name? (formal)", zh: "您貴姓？（正式）" },
            { speaker: "Female", text: "Mi chiamo Anna", en: "My name is Anna", zh: "我叫安娜" },
            { speaker: "Female", text: "Sono Marco", en: "I’m Marco", zh: "我是馬可" },
            { speaker: "Female", text: "Sono di Roma", en: "I’m from Rome", zh: "我來自羅馬" },
            { speaker: "Female", text: "Sono italiana", en: "I’m Italian (female)", zh: "我是義大利人（女）" },
            { speaker: "Female", text: "Parlo inglese", en: "I speak English", zh: "我會說英文" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Where you live, age, and job",
          scene_zh: "第 6 天 — 你住在哪裡、幾歲、做什麼工作",
          dialogue: [
            { speaker: "Female", text: "Dove abiti?", en: "Where do you live? (informal)", zh: "你住在哪裡？（非正式）" },
            { speaker: "Female", text: "Dove abita?", en: "Where do you live? (formal)", zh: "您住在哪裡？（正式）" },
            { speaker: "Female", text: "Abito a Roma", en: "I live in Rome", zh: "我住在羅馬" },
            { speaker: "Female", text: "Quanti anni hai?", en: "How old are you? (informal)", zh: "你幾歲？（非正式）" },
            { speaker: "Female", text: "Ho venti anni", en: "I’m twenty years old", zh: "我二十歲" },
            { speaker: "Female", text: "Che lavoro fai?", en: "What do you do? (informal)", zh: "你做什麼工作？（非正式）" },
            { speaker: "Female", text: "Sono insegnante", en: "I’m a teacher", zh: "我是老師" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Everyday Reactions",
          scene_zh: "第 7 天 — 日常感嘆語",
          dialogue: [
            { speaker: "Female", text: "Buonissimo!", en: "Delicious!", zh: "太好吃了！" },
            { speaker: "Female", text: "Che bello!", en: "How nice!", zh: "太好了！" },
            { speaker: "Female", text: "Fantastico!", en: "Fantastic!", zh: "超讚的！" },
            { speaker: "Female", text: "Perfetto!", en: "Perfect!", zh: "完美！" },
            { speaker: "Female", text: "Davvero?", en: "Really?", zh: "真的嗎？" },
            { speaker: "Female", text: "Mamma mia!", en: "Oh my God!", zh: "我的天啊！" },
            { speaker: "Female", text: "Va bene!", en: "Okay!", zh: "好啊！" },
            { speaker: "Female", text: "Aiuto!", en: "Help!", zh: "救命！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Pronouns, Possessives, and Demonstratives",
          scene_zh: "第 8 天 — 人稱代詞、所有格與指示詞",
          dialogue: [
            { speaker: "Female", text: "Io sono", en: "I am", zh: "我是" },
            { speaker: "Female", text: "Tu sei", en: "You are (informal)", zh: "你是（非正式）" },
            { speaker: "Female", text: "Lui è", en: "He is", zh: "他是" },
            { speaker: "Female", text: "Lei è", en: "She is", zh: "她是" },
            { speaker: "Female", text: "Noi siamo", en: "We are", zh: "我們是" },
            { speaker: "Female", text: "Voi siete", en: "You are (plural)", zh: "你們是" },
            { speaker: "Female", text: "Loro sono", en: "They are", zh: "他們是" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Numbers 0–10",
          scene_zh: "第 9 天 — 數字 0–10",
          dialogue: [
            { speaker: "Female", text: "zero", en: "zero", zh: "零" },
            { speaker: "Female", text: "uno", en: "one", zh: "一" },
            { speaker: "Female", text: "due", en: "two", zh: "二" },
            { speaker: "Female", text: "tre", en: "three", zh: "三" },
            { speaker: "Female", text: "quattro", en: "four", zh: "四" },
            { speaker: "Female", text: "cinque", en: "five", zh: "五" },
            { speaker: "Female", text: "sei", en: "six", zh: "六" },
            { speaker: "Female", text: "sette", en: "seven", zh: "七" },
            { speaker: "Female", text: "otto", en: "eight", zh: "八" },
            { speaker: "Female", text: "nove", en: "nine", zh: "九" },
            { speaker: "Female", text: "dieci", en: "ten", zh: "十" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Mini Dialogue",
          scene_zh: "第 10 天 — 小對話",
          dialogue: [
            { speaker: "Female", text: "Ciao! Io sono Anna.", en: "Hi! I am Anna.", zh: "嗨！我是安娜。" },
            { speaker: "Male", text: "Ciao! Io sono Marco.", en: "Hi! I am Marco.", zh: "嗨！我是馬可。" },
            { speaker: "Female", text: "Piacere di conoscerti!", en: "Nice to meet you!", zh: "很高興認識你！" },
            { speaker: "Male", text: "Piacere! Come stai?", en: "Nice to meet you! How are you?", zh: "很高興認識你！你好嗎？" },
            { speaker: "Female", text: "Bene, grazie. E tu?", en: "Good, thanks. And you?", zh: "很好，謝謝。你呢？" },
            { speaker: "Male", text: "Così così. Tu sei studentessa?", en: "So-so. Are you a student?", zh: "馬馬虎虎。你是學生嗎？" },
            { speaker: "Female", text: "No, io sono insegnante.", en: "No, I am a teacher.", zh: "不，我是老師。" },
            { speaker: "Male", text: "Che bello! Io sono studente.", en: "How nice! I am a student.", zh: "真好！我是學生。" },
            { speaker: "Female", text: "Da dove sei?", en: "Where are you from?", zh: "你來自哪裡？" },
            { speaker: "Male", text: "Io sono di Roma. E tu?", en: "I am from Rome. And you?", zh: "我來自羅馬。你呢？" }
          ]
        },
        {
          sceneId: 11,
          scene: "Day 11 – Daily Shopping and Dining",
          scene_zh: "第 11 天 — 日常購物與用餐",
          dialogue: [
            { speaker: "Female", text: "Quanto costa?", en: "How much is it?", zh: "多少錢？" },
            { speaker: "Female", text: "Dov'è...?", en: "Where is...?", zh: "……在哪裡？" },
            { speaker: "Female", text: "Vorrei un caffè, per favore.", en: "I would like a coffee, please.", zh: "我想要一杯咖啡，麻煩了。" },
            { speaker: "Female", text: "Il conto, per favore.", en: "The bill, please.", zh: "麻煩結帳。" },
            { speaker: "Female", text: "Posso avere..., per favore?", en: "Can I have..., please?", zh: "我可以要……嗎？麻煩了。" },
            { speaker: "Female", text: "Accettate carte di credito?", en: "Do you accept credit cards?", zh: "你們收信用卡嗎？" },
            { speaker: "Female", text: "Cosa mi consiglia?", en: "What do you recommend?", zh: "您能推薦什麼嗎？" },
            { speaker: "Female", text: "Un tavolo per due, per favore.", en: "A table for two, please.", zh: "麻煩一張兩人桌。" },
            { speaker: "Female", text: "L'acqua naturale o frizzante?", en: "Still or sparkling water?", zh: "要礦泉水還是氣泡水？" },
            { speaker: "Female", text: "Va bene, grazie.", en: "Alright, thank you.", zh: "好的，謝謝。" }
          ]
        }
      ]
    }
  ]
};
