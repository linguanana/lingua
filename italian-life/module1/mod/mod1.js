// mod/mod1.js

/**
 * 課程模組資料結構
 * 這個物件包含了義大利文課程模組 1 的所有內容。
 * 它可以被其他 JavaScript 檔案匯入和使用，以便動態渲染課程。
 */
const moduleData = {
  moduleId: "1",
  title: "Module 1 – Greetings",
  speakers: {
    "1": "👩",
    "2": "👨🏻‍🍳",
    "3": "🧸",
    "4": "🐳"
  },
  lessons: [
    {
      lessonId: 1,
      title: "Lesson 1 – Ciao! Missione al mercato",
      theme: "Greetings in everyday Italian",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Say Hello!",
          keyPhrases: [
            { text: "Ciao!", en: "Hi / Bye!", zh: "嗨／掰" },
            { text: "Buongiorno!", en: "Good morning!", zh: "早安／你好" },
            { text: "Buonasera!", en: "Good evening!", zh: "晚上好" },
            { text: "Salve!", en: "Hello (formal or neutral)", zh: "您好" }
          ],
          dialogues: [
            { speaker: "1", when: "Talking to friends or classmates", text: "Ciao!", en: "Hi!", zh: "嗨！" },
            { speaker: "1", when: "Morning at a hotel or store", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "1", when: "Evening at a restaurant", text: "Buonasera!", en: "Good evening!", zh: "晚上好！" },
            { speaker: "1", when: "‍Not sure what to say", text: "Salve!", en: "Hello!", zh: "您好！" },
            { speaker: "1", when: "Leaving a chat", text: "A presto!", en: "See you soon!", zh: "待會見！" },
            { speaker: "1", when: "Greeting a group", text: "Ciao a tutti!", en: "Hi everyone!", zh: "大家好！" }
          ],
          tips: [
            { en: "**Ciao** is informal and very common in Italy.", zh: "是非正式且在義大利非常常見的用法。" },
            { en: "**Buongiorno** is polite and used until about 5 p.m.", zh: "較正式，通常在下午 5 點前使用。" },
            { en: "**Buonasera** is for after 5–6 p.m.", zh: "用於下午 5-6 點之後的問候語。" },
            { en: "**Salve** is a nice neutral option if you're unsure which to use.", zh: "如果不確定要用哪一個，這是一個很好的中性選項。" },
            { en: "You can use **Ciao** for both greeting and saying goodbye!", zh: "**Ciao** 同時可以用於打招呼和說再見！" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0+): More Greetings & Goodbyes",
          keyPhrases: [
            { text: "Sto bene.", en: "I’m fine.", zh: "我很好" },
            { text: "Tutto bene?", en: "Everything okay?", zh: "都好嗎？" },
            { text: "Come va?", en: "How’s it going?", zh: "近期如何？" },
            { text: "Stai bene?", en: "Are you okay?", zh: "你還好嗎？" },
            { text: "Grazie!", en: "Thank you!", zh: "謝謝" },
            { text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝" }
          ],
          dialogues: [
            { speaker: "3", when: "Early afternoon and want to be polite?", text: "Buon pomeriggio!", en: "Good afternoon", zh: "午安" },
            { speaker: "3", when: "Heading to bed?", text: "Buonanotte!", en: "Good night", zh: "睡前說晚安" },
            { speaker: "3", when: "Leaving formally (e.g., restaurant or meeting)?", text: "Arrivederci!", en: "Goodbye (formal)", zh: "正式的再見" },
            { speaker: "3", when: "Saying goodbye for now but will meet later today?", text: "A dopo!", en: "See you later today", zh: "今天稍後見" },
            { speaker: "3", when: "Ending a quick conversation or short visit?", text: "A presto!", en: "See you soon", zh: "很快再見" },
            { speaker: "3", when: "Parting ways until tomorrow?", text: "A domani!", en: "See you tomorrow", zh: "明天見" },
            { speaker: "3", when: "Meeting someone for the first time?", text: "Piacere!", en: "Nice to meet you", zh: "初次見面" },
            { speaker: "3", when: "Saying bye with a cute or friendly tone?", text: "Ciao ciao!", en: "Bye-bye!", zh: "可愛口吻的掰掰" }
          ],
          tips: [
            { en: "**Buonanotte** is only for bedtime 🌙", zh: "" },
            { en: "**Arrivederci** is more formal than **Ciao**", zh: "" },
            { en: "**A presto** and **A dopo** are good when you’ll see someone again soon", zh: "" },
            { en: "**Piacere** is for first meetings", zh: "" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0+): Even More Ways to Say Goodbye",
          keyPhrases: [],
          dialogues: [
            { speaker: "3", when: "Wrapping up a conversation?", text: "A dopo!", en: "See you later", zh: "待會見" },
            { speaker: "3", when: "🧑Saying goodbye to a group of friends?", text: "A dopo ragazzi!", en: "See you later, guys!", zh: "大家待會見" },
            { speaker: "3", when: "Meeting again later today?", text: "A più tardi!", en: "See you later today", zh: "今天稍後見" },
            { speaker: "3", when: "🙋Planning to see someone in person?", text: "Ci vediamo!", en: "See you in person", zh: "到時見" },
            { speaker: "3", when: "Scheduled to meet tomorrow?", text: "Ci vediamo domani!", en: "See you tomorrow", zh: "明天見面" },
            { speaker: "3", when: "Will contact again soon?", text: "Ci sentiamo!", en: "Talk soon", zh: "再聯絡" },
            { speaker: "3", when: "Planning to call or message tomorrow?", text: "Ci sentiamo domani!", en: "Talk to you tomorrow", zh: "明天再聯絡" },
            { speaker: "3", when: "Really soon – like within the hour?", text: "A prestissimo!", en: "See you very soon", zh: "非常快再見" },
            { speaker: "3", when: "Saying goodbye in the evening?", text: "Buona serata!", en: "Have a nice evening", zh: "祝你今晚愉快" },
            { speaker: "3", when: "Saying goodbye in the morning or early afternoon?", text: "Buona giornata!", en: "Have a good day", zh: "祝你今天愉快" },
            { speaker: "3", when: "Ending for now, but you’ll meet again?", text: "Alla prossima!", en: "See you next time", zh: "下次見" },
            { speaker: "3", when: "Meeting again next week?", text: "Alla prossima settimana!", en: "See you next week", zh: "下週見" },
            { speaker: "3", when: "No date planned, but you'll reconnect later?", text: "Alla prossima volta!", en: "Until next time", zh: "等下次見面" }
          ],
          tips: [
            { en: "**Ci vediamo** is used when you expect to meet in person", zh: "" },
            { en: "**Ci sentiamo** is more for calls, messages, or emails", zh: "" }
          ]
        }
      ]
    },
    {
      lessonId: 2,
      title: "Lesson 2 – Come stai? Missione al mercato",
      theme: "How are you? Feelings and responses",
      levels: [
        {
          levelId: 1,
          title: "Ask 'How are you?'",
          keyPhrases: [
            // Changed "it" key to "text" for consistency with other data
            { text: "Come stai?", en: "How are you?", zh: "你好嗎？" },
            { text: "Come sta?", en: "How are you? (formal)", zh: "您好嗎？" },
            { text: "Come va?", en: "How’s it going?", zh: "最近如何？" },
            { text: "Bene", en: "I’m good / Fine", zh: "我很好" },
            { text: "Così così", en: "So-so", zh: "普普通通" }
          ],
          dialogues: [
            // The 'en' and 'zh' fields here might need to be filled with direct translations instead of descriptions
            { speaker: "1", when: "Greeting a friend casually", text: "Come stai?", en: "Informal, friendly.", zh: "" },
            { speaker: "1", when: "Talking to a teacher or someone older", text: "Come sta?", en: "Formal version.", zh: "" },
            { speaker: "1", when: "Meeting someone at a café", text: "Come va?", en: "Neutral and common.", zh: "" },
            { speaker: "1", when: "Feeling good", text: "Bene!", en: "", zh: "" },
            { speaker: "1", when: "Feeling okay", text: "Così così", en: "Just so-so.", zh: "" },
            { speaker: "1", when: "Not feeling great", text: "Non molto bene", en: "Not so good.", zh: "" }
          ],
          tips: [
            { en: "Try asking someone: **Come stai?** – 'How are you?", zh: "" },
            { en: "When replying, say: **Sto bene.** – 'I’m fine.", zh: ""  },
            { en: "**Sto** comes from **stare** (to be / to stay), and **bene** means 'well'.", zh: ""  },
            { en: "You can also reply simply with **Bene** or **Così così**", zh: ""  }
          ]
        },
        {
          levelId: 2,
          title: "More Emotional Replies",
          keyPhrases: [
            // Changed "it" key to "text" for consistency
            { text: "Sto benissimo!", en: "I’m great!", zh: "我非常好" },
            { text: "Così così.", en: "So-so", zh: "馬馬虎虎" },
            { text: "Non molto bene.", en: "Not very well", zh: "不太好" },
            { text: "Sono stanco / stanca.", en: "I’m tired", zh: "我累了" },
            { text: "E tu?", en: "And you?", zh: "你呢？" }
          ],
          dialogues: [],
          tips: [
            // The first tip here seems to be a question, not a statement.
            { en: "Use **Sto benissimo** when you're feeling great.?", zh: "" },
            { en: "Use **benissimo** after something great — like good news or a perfect day.", zh: ""  },
            { en: "Use **Così così** if you feel just okay.", zh: ""  },
            { en: "**Sono stanco** – I’m tired (male speaker)", zh: ""  },
            { en: "**Sono stanca** – I’m tired (female speaker)", zh: ""  }
          ]
        }
      ]
    },
    {
      lessonId: 3,
      title: "Lesson 3 – Essere gentili! Missione alla stazione",
      theme: "Being polite and asking for help",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Basic polite words",
          keyPhrases: [
            { text: "Grazie", en: "Thank you" },
            { text: "Prego", en: "You’re welcome / Please go ahead" },
            { text: "Per favore", en: "Please" },
            { text: "Scusa", en: "Excuse me / Sorry (informal)" },
            { text: "Scusi", en: "Excuse me / Sorry (formal)" },
            { text: "Mi scusi", en: "Excuse me (very polite)" },
            { text: "Di niente", en: "No problem / Don’t mention it" },
            { text: "Signore / Signora / Signori", en: "Sir / Ma’am / Ladies and gentlemen" }
          ],
          dialogues: [],
          tips: []
        },
        {
          levelId: 2,
          title: "Level 2 (A0+): Requests & understanding",
          keyPhrases: [
            { text: "Capisco / Non capisco", en: "I understand / I don’t understand" },
            { text: "Posso...?", en: "Can I...?" },
            { text: "Può...?", en: "Can you...? (formal)" },
            { text: "Può ripetere, per favore?", en: "Can you repeat, please?" },
            { text: "Posso entrare?", en: "Can I come in?" },
            { text: "Posso usare il bagno?", en: "Can I use the bathroom?" },
            { text: "Non capisco bene l’italiano.", en: "I don’t understand Italian well" },
            { text: "Può parlare più lentamente?", en: "Can you speak more slowly?" }
          ],
          dialogues: [
            { speaker: "1", text: "Scusi, posso fare una domanda?", en: "Excuse me, can I ask a question?" },
            { speaker: "2", text: "Certo! Dimmi pure.", en: "Of course! Go ahead and ask." },
            { speaker: "1", text: "Non capisco... Può ripetere, per favore?", en: "I don’t understand… Can you repeat, please?" },
            { speaker: "2", text: "Sì! Ripeto lentamente.", en: "Yes! I’ll repeat slowly." },
            { speaker: "1", text: "Ah! Capisco, grazie mille!", en: "Ah! I understand, thank you very much!" },
            { speaker: "2", text: "Prego!", en: "You’re welcome!" }
          ],
          tips: []
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Real-life polite requests",
          keyPhrases: [
            { text: "Vorrei...", en: "I would like..." },
            { text: "C'è...? / Ci sono...?", en: "Is there...? / Are there...?" },
            { text: "Le / Ti posso aiutare?", en: "Can I help you? (formal / informal)" },
            { text: "Certamente / Certo", en: "Certainly / Of course" },
            { text: "Volentieri", en: "Gladly / With pleasure" },
            { text: "Mi dispiace", en: "I’m sorry" },
            { text: "Con permesso", en: "Excuse me (to pass by / interrupt)" }
          ],
          dialogues: [
            { speaker: "1", text: "Mi scusi, Signora, posso chiederle un’informazione?", en: "Excuse me, Madam, may I ask you for some information?" },
            { speaker: "2", text: "Certamente, prego!", en: "Certainly, please go ahead!" },
            { speaker: "1", text: "Vorrei comprare un souvenir. C’è un negozio di souvenir qui vicino?", en: "I’d like to buy a souvenir. Is there a souvenir shop nearby?" },
            { speaker: "2", text: "Sì, c’è un negozio lì, a destra.", en: "Yes, there’s a shop there, to the right." },
            { speaker: "1", text: "Grazie mille!", en: "Thank you very much!" },
            { speaker: "2", text: "Prego!", en: "You’re welcome!" }
          ],
          tips: []
        }
      ]
    },
    {
      lessonId: 1,
      title: "Lesson 1 – Ciao! Missione al mercato",
      theme: "Greetings in everyday Italian",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Basic name introduction",
          keyPhrases: [
            { text: "Come ti chiami?", en: "What’s your name?", zh: "你叫什麼名字？" },
            { text: "Mi chiamo Marco.", en: "My name is Marco.", zh: "我叫 Marco" },
            { text: "E tu?", en: "And you?", zh: "你呢？" },
          ],
          dialogues: [
            { speaker: "1", text: "Ciao! Come ti chiami?", en: "Hi! What’s your name?", zh: "嗨！你叫什麼名字？" },
            { speaker: "2", text: "Mi chiamo Marco. E tu?", en: "My name is Marco. And you?", zh: "我叫 Marco。你呢？" },
            { speaker: "1", text: "Mi chiamo Laura.", en: "My name is Laura.", zh: "我叫 Laura。" },
          ],
          tips: [
            {
              en: "**Come ti chiami?** →\n- *Come* = how\n- *ti* = yourself\n- *chiami* = you call\nUsed to ask someone's name.",
              zh: "用來問「你叫…？」"
            },
            {
              en: "**Mi chiamo...** →\n- *mi* = myself\n- *chiamo* = I call\nUsed to say your name.",
              zh: "用來介紹自己的名字"
            }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Formal version and polite expressions",
          keyPhrases: [
            { text: "Come si chiama?", en: "What’s your name? (formal)", zh: "您貴姓？" },
            { text: "Mi chiamo Giovanni Rossi.", en: "My name is Giovanni Rossi.", zh: "我叫 Giovanni Rossi" },
            { text: "Piacere!", en: "Nice to meet you.", zh: "很高興認識你" },
            { text: "Il piacere è mio", en: "The pleasure is mine.", zh: "我也很高興認識你" },
          ],
          dialogues: [
            { speaker: "1", text: "Buongiorno! Come si chiama?", en: "Good morning! What’s your name?", zh: "早安！您貴姓？" },
            { speaker: "2", text: "Mi chiamo Maria Verdi. E Lei?", en: "My name is Maria Verdi. And you?", zh: "我叫 Maria Verdi。您呢？" },
            { speaker: "1", text: "Mi chiamo Giovanni Rossi. Piacere!", en: "My name is Giovanni Rossi. Nice to meet you!", zh: "我叫 Giovanni Rossi。很高興認識您！" },
            { speaker: "2", text: "Il piacere è mio!", en: "The pleasure is mine!", zh: "我也很高興認識您！" },
          ],
          tips: [
            {
              en: "**Come si chiama?** → Used in formal situations.\n**E Lei?** = formal version of 'E tu?'\n**Piacere** = pleasure, standard greeting.\n**Il piacere è mio** = the pleasure is mine.",
              zh: "正式場合中使用的禮貌說法。"
            }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Say “Nice to meet you” in different ways",
          keyPhrases: [
            { text: "Piacere di conoscerti", en: "Nice to meet you (informal)", zh: "認識你很高興" },
            { text: "Piacere di conoscerla", en: "Nice to meet you (formal)", zh: "認識您很高興" },
            { text: "Molto lieto / Molto lieta", en: "Very pleased to meet you", zh: "非常榮幸" },
            { text: "Piacere mio", en: "The pleasure is mine", zh: "我也很高興" }
          ],
          dialogues: [
            { speaker: "1", when: "Meeting someone informally", text: "Ciao! Io sono Giulia.", en: "Hi! I'm Giulia.", zh: "你好，我是 Giulia" },
            { speaker: "1", when: "", text: "Piacere di conoscerti!", en: "Nice to meet you (informal).", zh: "很高興認識你" },
            { speaker: "2", when: "", text: "Piacere mio!", en: "My pleasure!", zh: "我也很高興" },
            { speaker: "1", when: "You meet someone formally", text: "Piacere di conoscerla.", en: "Nice to meet you (formal).", zh: "很高興認識您" },
            { speaker: "2", when: "You want to sound very polite (male)", text: "Molto lieto!", en: "Very pleased (formal).", zh: "男生說：非常榮幸" },
            { speaker: "1", when: "You want to sound very polite (female)", text: "Molto lieta!", en: "Very pleased (formal).", zh: "女生說：非常榮幸" },
            { speaker: "1", when: "You meet a classmate or neighbor", text: "Piacere di conoscerti!", en: "Nice to meet you (informal and friendly)", zh: "認識你很高興" },
            { speaker: "2", when: "Someone says “Piacere!” to you", text: "Piacere mio!", en: "The pleasure is mine", zh: "我也很高興" },
          ],
          tips: [
            {en: "**conoscerti** = to meet you (informal)\n**conoscerla** = to meet you (formal)",zh: "你 / 您"},
            {en: "**Piacere di conoscerti** = Pleasure to meet you\n- *Piacere* = pleasure\n- *di* = to\n- *conoscerti* = know you",zh: "很高興認識你"},
            {en: "**Molto lieto! / Molto lieta!** → Said when you want to be very polite",zh: "表示非常榮幸"}
          ]
        }
      ]
    }
    // new lesson
  ]
};
