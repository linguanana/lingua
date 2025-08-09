// mod/mod1.js
const moduleData = {
  moduleId: "1",
  title: "Module 1 – Greetings",
  title_zh: "模組 1 – 打招呼",
  voice: "IT",
  speakers: {
    "Female": "👩",       // 女遊客
    "M_chef": "👨🏻‍🍳",   // 男咖啡師
    "Men": "🧑",        // 男店員
    "G_girl": "👧",          // 小女孩
    "B_boy": "👦🏻‍🎨",       // 小男孩
    "A_bear": "🧸",          // 熊
    "A_llama": "🦙"           // 魚
  },
  lessons: [
    {
      lessonId: 1,
      title: "Lesson 1 – Ciao! Missione al mercato",
      theme: "Greetings in everyday Italian",
      theme_zh: "日常義大利語的問候語",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0+): Say Hello!",
          title_zh: "第一級（A0+）: 打招呼！",
          keyPhrases: [
            { text: "Ciao!", en: "Hi / Bye!", zh: "嗨／掰" },
            { text: "Buongiorno!", en: "Good morning!", zh: "早安／你好" },
            { text: "Buonasera!", en: "Good evening!", zh: "晚上好" },
            { text: "Salve!", en: "Hello (formal or neutral)", zh: "您好" }
          ],
          dialogues: [
            { speaker: "Female", when: "Talking to friends or classmates", text: "Ciao!", en: "Hi!", zh: "嗨！" },
            { speaker: "Female", when: "Morning at a hotel or store", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "Female", when: "Evening at a restaurant", text: "Buonasera!", en: "Good evening!", zh: "晚上好！" },
            { speaker: "Female", when: "‍Not sure what to say", text: "Salve!", en: "Hello!", zh: "您好！" },
            { speaker: "Female", when: "Leaving a chat", text: "A presto!", en: "See you soon!", zh: "待會見！" },
            { speaker: "Female", when: "Greeting a group", text: "Ciao a tutti!", en: "Hi everyone!", zh: "大家好！" }
          ],
          tips: [
            { en: "**Ciao** is informal and very common in Italy.", zh: "**Ciao** 是非正式且在義大利非常常見的用法。" },
            { en: "**Buongiorno** is polite and used until about 5 p.m.", zh: "**Buongiorno** 較正式，通常在下午 5 點前使用。" },
            { en: "**Buonasera** is for after 5–6 p.m.", zh: "**Buonasera** 用於下午 5-6 點之後的問候語。" },
            { en: "**Salve** is a nice neutral option if you're unsure which to use.", zh: "**Salve** 如果不確定要用哪一個，這是一個很好的中性選項。" },
            { en: "You can use **Ciao** for both greeting and saying goodbye!", zh: "**Ciao** 同時可以用於打招呼和說再見！" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0+): More Greetings & Goodbyes",
          title_zh: "第二級（A0+）: 更多問候與道別",
          keyPhrases: [
            { text: "Buon pomeriggio!", en: "Good afternoon", zh: "午安" },
            { text: "Buonanotte!", en: "Good night", zh: "晚安（睡前說）" },
            { text: "Arrivederci!", en: "Goodbye (formal)", zh: "正式的再見" },
            { text: "A presto!", en: "See you soon", zh: "很快再見" },
            { text: "A domani!", en: "See you tomorrow", zh: "明天見" },
            { text: "Piacere!", en: "Nice to meet you", zh: "初次見面" },
            { text: "Ciao ciao!", en: "Bye-bye!", zh: "掰掰（可愛口吻）" }
          ],
          dialogues: [
            { speaker: "Men", when: "Early afternoon and want to be polite?", text: "Buon pomeriggio!", en: "Good afternoon", zh: "午安" },
            { speaker: "Men", when: "Heading to bed?", text: "Buonanotte!", en: "Good night", zh: "睡前說晚安" },
            { speaker: "Men", when: "Leaving formally (e.g., restaurant or meeting)?", text: "Arrivederci!", en: "Goodbye (formal)", zh: "正式的再見" },
            { speaker: "Men", when: "Saying goodbye for now but will meet later today?", text: "A dopo!", en: "See you later today", zh: "今天稍後見" },
            { speaker: "Men", when: "Ending a quick conversation or short visit?", text: "A presto!", en: "See you soon", zh: "很快再見" },
            { speaker: "Men", when: "Parting ways until tomorrow?", text: "A domani!", en: "See you tomorrow", zh: "明天見" },
            { speaker: "Men", when: "Meeting someone for the first time?", text: "Piacere!", en: "Nice to meet you", zh: "初次見面" },
            { speaker: "Men", when: "Saying bye with a cute or friendly tone?", text: "Ciao ciao!", en: "Bye-bye!", zh: "可愛口吻的掰掰" }
          ],
          tips: [
            { en: "**Buonanotte** is only for bedtime 🌙", zh: "**Buonanotte** 只在睡前說 🌙" },
            { en: "**Arrivederci** is more formal than **Ciao**", zh: "**Arrivederci** 比 **Ciao** 更正式" },
            { en: "**A presto** and **A dopo** are good when you’ll see someone again soon", zh: "**A presto** 和 **A dopo** 適合用在很快會再見面的情況" },
            { en: "**Piacere** is for first meetings", zh: "**Piacere** 用在第一次見面時" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0+): Even More Ways to Say Goodbye",
          title_zh: "第三級（A0+）: 更多道別方式",
          keyPhrases: [],
          dialogues: [
            { speaker: "Men", when: "Wrapping up a conversation?", text: "A dopo!", en: "See you later", zh: "待會見" },
            { speaker: "Men", when: "🧑Saying goodbye to a group of friends?", text: "A dopo ragazzi!", en: "See you later, guys!", zh: "大家待會見" },
            { speaker: "Men", when: "Meeting again later today?", text: "A più tardi!", en: "See you later today", zh: "今天稍後見" },
            { speaker: "Men", when: "🙋Planning to see someone in person?", text: "Ci vediamo!", en: "See you in person", zh: "到時見" },
            { speaker: "Men", when: "Scheduled to meet tomorrow?", text: "Ci vediamo domani!", en: "See you tomorrow", zh: "明天見面" },
            { speaker: "Men", when: "Will contact again soon?", text: "Ci sentiamo!", en: "Talk soon", zh: "再聯絡" },
            { speaker: "Men", when: "Planning to call or message tomorrow?", text: "Ci sentiamo domani!", en: "Talk to you tomorrow", zh: "明天再聯絡" },
            { speaker: "Men", when: "Really soon – like within the hour?", text: "A prestissimo!", en: "See you very soon", zh: "非常快再見" },
            { speaker: "Men", when: "Saying goodbye in the evening?", text: "Buona serata!", en: "Have a nice evening", zh: "祝你今晚愉快" },
            { speaker: "Men", when: "Saying goodbye in the morning or early afternoon?", text: "Buona giornata!", en: "Have a good day", zh: "祝你今天愉快" },
            { speaker: "Men", when: "Ending for now, but you’ll meet again?", text: "Alla prossima!", en: "See you next time", zh: "下次見" },
            { speaker: "Men", when: "Meeting again next week?", text: "Alla prossima settimana!", en: "See you next week", zh: "下週見" },
            { speaker: "Men", when: "No date planned, but you'll reconnect later?", text: "Alla prossima volta!", en: "Until next time", zh: "等下次見面" }
          ],
          tips: [
            { en: "**Ci vediamo** is used when you expect to meet in person", zh: "**Ci vediamo** 用在預計會當面見面的情況" },
            { en: "**Ci sentiamo** is more for calls, messages, or emails", zh: "**Ci sentiamo** 比較常用在電話、訊息或電子郵件" }
          ]
        }
      ]
    },
    {
      lessonId: 2,
      title: "Lesson 2 – Come stai? Missione al mercato",
      theme: "How are you? Feelings and responses",
      theme_zh: "你好嗎？感受與回應",
      levels: [
        {
          levelId: 1,
          title: "第一級（A0）: Ask 'How are you?'",
          title_zh: "第一級（A0）: 詢問「你最近好嗎？」",
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
            { speaker: "Female", when: "Greeting a friend casually", text: "Come stai?", en: "Informal, friendly.", zh: "非正式，朋友間使用" },
            { speaker: "Female", when: "Talking to a teacher or someone older", text: "Come sta?", en: "Formal version.", zh: "正式版本，用於老師或年長者" },
            { speaker: "Female", when: "Meeting someone at a café", text: "Come va?", en: "Neutral and common.", zh: "中性且常用" },
            { speaker: "Female", when: "Feeling good", text: "Bene!", en: "Good.", zh: "很好" },
            { speaker: "Female", when: "Feeling okay", text: "Così così", en: "Just so-so.", zh: "馬馬虎虎／普普通通" },
            { speaker: "Female", when: "Not feeling great", text: "Non molto bene", en: "Not so good.", zh: "不太好" }
          ],
          tips: [
            { en: "Try asking someone: **Come stai?** – 'How are you?'", zh: "試著問別人: **Come stai?** – 你最近好嗎？" },
            { en: "When replying, say: **Sto bene.** – 'I’m fine.'", zh: "回覆時可以說: **Sto bene.** – 我很好。" },
            { en: "**Sto** comes from **stare** (to be / to stay), and **bene** means 'well'.", zh: "**Sto** 來自 **stare**（表示『是／停留』），而 **bene** 的意思是『好』。" },
            { en: "You can also reply simply with **Bene** or **Così così**", zh: "你也可以簡單回: **Bene**（很好）或 **Così così**（馬馬虎虎）。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0): Answer 'How are you?'",
          title_zh: "第二級（A0）: 回答「你最近好嗎？」",
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
            { en: "Use **Sto benissimo** when you're feeling great.", zh: "當你感覺非常好時，可以用 **Sto benissimo**。" },
            { en: "Use **benissimo** after something great — like good news or a perfect day.", zh: "在發生很棒的事情後，例如好消息或完美的一天，可以用 **benissimo**。" },
            { en: "Use **Così così** if you feel just okay.", zh: "如果只是覺得普普通通，可以用 **Così così**。" },
            { en: "**Sono stanco** – I’m tired (male speaker)", zh: "**Sono stanco** – 我很累（男性說法）" },
            { en: "**Sono stanca** – I’m tired (female speaker)", zh: "**Sono stanca** – 我很累（女性說法）" }
          ]
        }
      ]
    },
    {
      lessonId: 3,
      title: "Lesson 3 – Essere gentili! Missione alla stazione",
      theme: "Being polite and asking for help",
      theme_zh: "禮貌用語&請求幫忙",
      levels: [
        {
          levelId: 1,
          title: "第一級（A0）: Basic polite words",
          title_zh: "第一級（A0）: 基礎禮貌用語",
          keyPhrases: [
            { text: "Grazie", en: "Thank you", zh: "謝謝" },
            { text: "Prego", en: "You’re welcome / Please go ahead", zh: "不客氣 / 請先請" },
            { text: "Per favore", en: "Please", zh: "請" },
            { text: "Scusa", en: "Excuse me / Sorry (informal)", zh: "不好意思 / 對不起（非正式）" },
            { text: "Scusi", en: "Excuse me / Sorry (formal)", zh: "不好意思 / 對不起（正式）" },
            { text: "Mi scusi", en: "Excuse me (very polite)", zh: "不好意思（非常禮貌）" },
            { text: "Di niente", en: "No problem / Don’t mention it", zh: "沒關係 / 別客氣" },
            { text: "Signore / Signora / Signori", en: "Sir / Ma’am / Ladies and gentlemen", zh: "先生 / 女士 / 各位先生女士" }
          ],
          dialogues: [],
          tips: []
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Requests & understanding",
          title_zh: "第二級（A1）: 請求與表達理解",
          keyPhrases: [
            { text: "Capisco / Non capisco", en: "I understand / I don’t understand", zh: "我懂 / 我不懂" },
            { text: "Posso...?", en: "Can I...?", zh: "我可以……嗎？" },
            { text: "Può...?", en: "Can you...? (formal)", zh: "您可以……嗎？（正式）" },
            { text: "Può ripetere, per favore?", en: "Can you repeat, please?", zh: "請您再說一遍，好嗎？" },
            { text: "Posso entrare?", en: "Can I come in?", zh: "我可以進來嗎？" },
            { text: "Posso usare il bagno?", en: "Can I use the bathroom?", zh: "我可以用洗手間嗎？" },
            { text: "Non capisco bene l’italiano.", en: "I don’t understand Italian well", zh: "我不太懂義大利語" },
            { text: "Può parlare più lentamente?", en: "Can you speak more slowly?", zh: "您可以說慢一點嗎？" }
          ],
          dialogues: [
            { speaker: "Female", text: "Scusi, posso fare una domanda?", en: "Excuse me, can I ask a question?", zh: "不好意思，我可以問一個問題嗎？" },
            { speaker: "Men", text: "Certo! Dimmi pure.", en: "Of course! Go ahead and ask.", zh: "當然！儘管問吧。" },
            { speaker: "Female", text: "Non capisco... Può ripetere, per favore?", en: "I don’t understand… Can you repeat, please?", zh: "我不明白……可以請您再說一遍嗎？" },
            { speaker: "Men", text: "Sì! Ripeto lentamente.", en: "Yes! I’ll repeat slowly.", zh: "好的！我會慢慢重複。" },
            { speaker: "Female", text: "Ah! Capisco, grazie mille!", en: "Ah! I understand, thank you very much!", zh: "啊！我懂了，非常感謝！" },
            { speaker: "Men", text: "Prego!", en: "You’re welcome!", zh: "不客氣！" }
          ],
          tips: []
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Real-life polite requests",
          title_zh: "第三級（A1）: 真實情境中的禮貌請求",
          keyPhrases: [
            { text: "Vorrei...", en: "I would like...", zh: "我想要……" },
            { text: "C'è...? / Ci sono...?", en: "Is there...? / Are there...?", zh: "有……嗎？ / 有……嗎？（複數）" },
            { text: "Le / Ti posso aiutare?", en: "Can I help you? (formal / informal)", zh: "我可以幫您嗎？（正式）/ 我可以幫你嗎？（非正式）" },
            { text: "Certamente / Certo", en: "Certainly / Of course", zh: "當然" },
            { text: "Volentieri", en: "Gladly / With pleasure", zh: "樂意之至 / 很願意" },
            { text: "Mi dispiace", en: "I’m sorry", zh: "我很抱歉" },
            { text: "Con permesso", en: "Excuse me (to pass by / interrupt)", zh: "不好意思（用於通過或打斷時）" }
          ],

          dialogues: [
            { speaker: "Female", text: "Mi scusi, Signora, posso chiederle un’informazione?", en: "Excuse me, Madam, may I ask you for some information?", zh: "不好意思，女士，我可以問您一個問題嗎？" },
            { speaker: "Men", text: "Certamente, prego!", en: "Certainly, please go ahead!", zh: "當然，請說！" },
            { speaker: "Female", text: "Vorrei comprare un souvenir. C’è un negozio di souvenir qui vicino?", en: "I’d like to buy a souvenir. Is there a souvenir shop nearby?", zh: "我想買一個紀念品。這附近有紀念品商店嗎？" },
            { speaker: "Men", text: "Sì, c’è un negozio lì, a destra.", en: "Yes, there’s a shop there, to the right.", zh: "有的，那邊有一家商店，在右邊。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "Men", text: "Prego!", en: "You’re welcome!", zh: "不客氣！" }
          ],
          tips: []
        }
      ]
    },
    {
      lessonId: 4,
      title: "Lesson 4 – Come ti chiami?",
      title_zh: "第 4 課 – 你叫什麼名字？",
      theme: "Greet someone at the market naturally and simply",
      theme_zh: "在市場上自然且簡單地向某人問好",
      levels: [
        {
          levelId: 1,
          title: "第一級（A0）: Basic name introduction",
          title_zh: "第一級（A0）: 基本名字介紹",
          keyPhrases: [
            { text: "Come ti chiami?", en: "What’s your name?", zh: "你叫什麼名字？" },
            { text: "Mi chiamo Marco.", en: "My name is Marco.", zh: "我叫 Marco。" },
            { text: "E tu?", en: "And you?", zh: "你呢？" }
          ],
          dialogues: [
            { speaker: "Female", text: "Ciao! Come ti chiami?", en: "Hi! What’s your name?", zh: "嗨！你叫什麼名字？" },
            { speaker: "Men", text: "Mi chiamo Marco. E tu?", en: "My name is Marco. And you?", zh: "我叫 Marco。你呢？" },
            { speaker: "Female", text: "Mi chiamo Laura.", en: "My name is Laura.", zh: "我叫 Laura。" }
          ],
          tips: [
            { en: "**Come ti chiami?** — **Come** = how • **ti** = yourself (to you) • **chiami** = you call → used to ask 'What’s your name?'", zh: "**Come** = 怎麼／如何 • **ti** = 你自己 • **chiami** = 你叫 → 用來問「你叫什麼名字？」" },
            { en: "**Mi chiamo ...** — **mi** = myself • **chiamo** = I call → used to say 'My name is...'", zh: "**mi** = 我自己 • **chiamo** = 我叫（叫做） → 用來回答「我叫……」" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0): Formal version and polite expressions",
          title_zh: "第二級（A0）: 正式版本與禮貌用語",
          keyPhrases: [
            { text: "Come si chiama?", en: "What’s your name? (formal)", zh: "您貴姓？" },
            { text: "Mi chiamo Giovanni Rossi.", en: "My name is Giovanni Rossi.", zh: "我叫 Giovanni Rossi。" },
            { text: "Piacere!", en: "Nice to meet you.", zh: "很高興認識您。" },
            { text: "Il piacere è mio (piacere mio)", en: "The pleasure is mine.", zh: "我也很高興認識您。" }
          ],
          dialogues: [
            { speaker: "Female", text: "Buongiorno! Come si chiama?", en: "Good morning! What’s your name?", zh: "早安！您貴姓？" },
            { speaker: "Men", text: "Mi chiamo Maria Verdi. E Lei?", en: "My name is Maria Verdi. And you?", zh: "我叫 Maria Verdi。您呢？" },
            { speaker: "Female", text: "Mi chiamo Giovanni Rossi. Piacere!", en: "My name is Giovanni Rossi. Nice to meet you!", zh: "我叫 Giovanni Rossi。很高興認識您！" },
            { speaker: "Men", text: "Il piacere è mio!", en: "The pleasure is mine!", zh: "我也很高興認識您！" }
          ],
          tips: [
            { en: "Use **Come si chiama?** for formal situations", zh: "在正式場合使用 **Come si chiama?**" },
            { en: "**E Lei?** is the formal version of **E tu?**", zh: "**E Lei?** 是**E tu?** 的正式版本" },
            { en: "**Piacere** = pleasure, the standard way to say nice to meet you", zh: "**Piacere**= 榮幸、高興，是說「很高興認識你」的標準方式" },
            { en: "**Il piacere** = the pleasure → **Il** is the masculine article. The phrase means “The pleasure is mine.”", zh: "**Il piacere**= 榮幸 → **Il** 是陽性冠詞。這句話的意思是「我也很高興」" },
            { en: "You can simply say **Piacere mio**", zh: "你也可以簡單地說**Piacere mio**" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0): Say “Nice to meet you” in different ways",
          title_zh: "第三級（A0）: 用不同方式說「很高興認識你」",
          keyPhrases: [
            { text: "Piacere di conoscerti", en: "Nice to meet you (informal)", zh: "認識你很高興" },
            { text: "Piacere di conoscerla", en: "Nice to meet you (formal)", zh: "認識您很高興(更正式)" },
            { text: "Molto lieto / Molto lieta", en: "Very pleased to meet you", zh: "非常榮幸" },
            { text: "Piacere mio", en: "The pleasure is mine", zh: "我也很高興" }
          ],
          dialogues: [
            { speaker: "Female", text: "Ciao! Io sono Giulia.", en: "Hi! I'm Giulia.", zh: "你好，我是 Giulia。" },
            { speaker: "Men", text: "Piacere di conoscerti!", en: "Nice to meet you (informal).", zh: "很高興認識你。" },
            { speaker: "Female", text: "Piacere mio!", en: "My pleasure!", zh: "我也很高興。" },
            { speaker: "Female", when: "You meet someone formally", text: "Piacere di conoscerla.", en: "Nice to meet you (formal and polite).", zh: "很高興認識您。" },
            { speaker: "Men", when: "You want to sound very polite (said by a man)", text: "Molto lieto!", en: "Very pleased (formal).", zh: "非常榮幸。" },
            { speaker: "Female", when: "You want to sound very polite (said by a woman)", text: "Molto lieta!", en: "Very pleased (formal).", zh: "非常榮幸。" },
            { speaker: "Female", when: "You meet a classmate or neighbor", text: "Piacere di conoscerti!", en: "Nice to meet you (informal and friendly).", zh: "認識你很高興。" },
            { speaker: "Men", when: "Someone says “Piacere!” to you", text: "Piacere mio!", en: "The pleasure is mine.", zh: "我也很高興。" }
          ],
          tips: [
            { en: "**Piacere di conoscerti** vs **Piacere di conoscerla** : **conoscerti** = to meet you (informal 'you') | **conoscerla** = to meet you (formal 'you') | Use **conoscerti ** with friends;", zh: "**conoscerti** = 認識你（非正式）(你) • **conoscerla** = 認識您（正式）(您） • 和朋友一起用 **conoscerti**；" },
            { en: "What does **Piacere di conoscerti** mean? **Piacere** = pleasure • **di** = to • **conoscerti** = know you → The full phrase means: “Nice to meet you”", zh: "**Piacere** = 高興 • **di** = 相當於英文的 'to' • **conoscerti** = 認識你 → 全句意思是: 「很高興認識你」" },
            { en: "**Molto lieto!** = Very pleased! . Female version: **Molto lieta!** ", zh: "男生:  **Molto lieto!**。 女生說法是: Molto lieta！" }
          ]
        }
      ]
    },
    {
      lessonId: 5,
      title: "Lesson 5 – Di dove sei?",
      title_zh: "第 5 課 – 你來自哪裡？",
      theme: "Ask where someone is from and where they live",
      theme_zh: "詢問某人來自哪裡以及他們住在哪裡",
      levels: [
        {
          levelId: 1,
          title: "第一級（A0）: Ask where someone is from",
          title_zh: "第一級（A0）: 詢問某人來自哪裡",
          keyPhrases: [
            {text: "Di dove sei?", en: "Where are you from?", zh: "你來自哪裡？"},
            {text: "Sono di Roma.", en: "I’m from Rome.", zh: "我來自羅馬"},
            {text: "E tu?", en: "And you?", zh: "你呢？"},
            {text: "Io abito a <city>", en: "I live in...", zh: "我住在...<城市>"}
          ],
          dialogues: [
            {speaker: "Female", text: "Ciao! Di dove sei?", en: "Hi! Where are you from?", zh: "你來自哪裡？"},
            {speaker: "Men", text: "Sono di Milano. E tu?", en: "I’m from Milan. And you?", zh: "我來自米蘭，你呢？"},
            {speaker: "Female", text: "Sono di Roma!", en: "I’m from Rome!", zh: "我來自羅馬！"},
            {speaker: "Men", text: "Io abito a Firenze ora.", en: "I live in Florence now.", zh: "我現在住在佛羅倫斯"}
          ],
          tips: [
            { en: "When someone asks **Di dove sei?**, you can answer in different ways: (1) **Sono di Milano** = I'm from Milan (2) **Vengo dall'Italia** = I come from Italy (3) **Abito a Firenze** = I live in Florence",
              zh: "當有人問「**Di dove sei?**」，你可以用不同方式回答: (1) **Sono di Milano** = 我來自米蘭 (2) **Vengo dall'Italia** = 我來自義大利 (3) **Abito a Firenze** = 我住在佛羅倫斯" },
            { en: "Grammar mini-notes: (1) **sei** = are (you) (2) **di** = from — used with cities for origin (**Sono di...**) (3) **da** = from — used with countries for origin (**dalla Francia**) (4) **a** = in/to — used with cities for current living location (**Abito a...**)",
              zh: "文法小筆記: (1) **sei** = 你是 (2) **di** = 從／來自 — 用於城市的來源（**Sono di...**）(3) **da** = 從／來自 — 用於國家的來源（**dalla Francia**）(4) **a** = 在／到 — 用於表示現居的城市（**Abito a...**）"}
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Talking about country and current city",
          title_zh: "第二級（A1）: 談論國家和目前居住的城市",
          keyPhrases: [
            {text: "Vengo da Parigi.", en: "I come from Paris.", zh: "我來自巴黎"},
            {text: "Abito a Firenze.", en: "I live in Florence.", zh: "我住在佛羅倫斯"},
            {text: "E tu?", en: "And you?", zh: "你呢？"}
          ],
          dialogues: [
            {speaker: "A_bear", text: "Ciao! Di dove sei?", en: "Hi! Where are you from?", zh: "你來自哪裡？"},
            {speaker: "A_llama", text: "Sono di Milano. E tu?", en: "I’m from Milan. And you?", zh: "我來自米蘭，你呢？"},
            {speaker: "A_bear", text: "Io vengo da Parigi. Ora abito a Firenze.", en: "I come from Paris. Now I live in Florence.", zh: "我來自巴黎，現在住在佛羅倫斯"},
            {speaker: "A_llama", text: "Che bello! Firenze è bellissima!", en: "How nice! Florence is beautiful!", zh: "太美了！佛羅倫斯很美！"}
          ],
          tips: [
            { en: "You can use three main phrases to talk about where you are from or live:", zh: "你可以用這三種主要句型來表達你來自哪裡或住在哪裡: " },
            { en: "Use **Sono di** + city (e.g., **Sono di Milano**) → I’m from a city.", zh: "使用 **Sono di** + 城市（例: **Sono di Milano**）→ 表示來自某城市。" },
            { en: "Use **Vengo da** + country (e.g., **Vengo dalla Francia**) → I come from a country.", zh: "使用 **Vengo da** + 國家（例: **Vengo dalla Francia**）→ 表示來自某國家。" },
            { en: "Use **Abito a** + city (e.g., **Abito a Firenze**) → I live in a city.", zh: "使用 **Abito a** + 城市（例: **Abito a Firenze**）→ 表示住在某城市。" },

            { en: "Reminder about Prepositions:", zh: "前置詞提醒: " },
            { en: "**di** — from a city, casual and commonly used", zh: "**di** — 來自城市，口語且常用" },
            { en: "**da** — from a country or origin, more formal or precise", zh: "**da** — 來自國家或來源，較正式或精確" },
            { en: "**a** — in/to (commonly with the verb 'abitare')", zh: "**a** — 在／到（常用於動詞 **abitare**）" },

            { en: "Common Countries and their Prepositions:", zh: "常見國家與前置詞: " },
            { en: "**dalla** — used for feminine singular countries.", zh: "**dalla** — 用於陰性單數國家。" },
            { en: "**dal** — used for masculine singular countries.", zh: "**dal** — 用於陽性單數國家。" },

            { en: "**Giappone** (Japan) → **dal Giappone**", zh: "日本 → **dal Giappone**" },
            { en: "**Cina** (China) → **dalla Cina**", zh: "中國 → **dalla Cina**" },
            { en: "**Francia** (France) → **dalla Francia**", zh: "法國 → **dalla Francia**" },
            { en: "**Stati Uniti** (USA) → **dagli Stati Uniti**", zh: "美國 → **dagli Stati Uniti**" },
            { en: "**Italia** (Italy) → **dall'Italia**", zh: "義大利 → **dall'Italia**" },
            { en: "**Germania** (Germany) → **dalla Germania**", zh: "德國 → **dalla Germania**" },
            { en: "**Spagna** (Spain) → **dalla Spagna**", zh: "西班牙 → **dalla Spagna**" }
          ]
        }
      ]
    },
    {
      lessonId: 6,
      title: "Lesson 6 – Cosa fai? / Che lavoro fai?",
      title_zh: "你在做什麼？／你的職業是什麼",
      theme: "Ask what someone is doing now and what their job is",
      theme_zh: "詢問某人現在在做什麼以及他們的職業是什麼",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Ask what someone is doing now",
          title_zh: "第一級（A1）: 詢問某人現在在做什麼",
          keyPhrases: [
            {text: "Che cosa fai?", en: "What are you doing?", zh: "你現在在做什麼？"},
            {text: "Cosa fai?", en: "What are you doing?", zh: "你在幹嘛？（比較口語）"},
            {text: "Studio.", en: "I’m studying.", zh: "我在學習"},
            {text: "Lavoro.", en: "I’m working.", zh: "我在工作"},
            {text: "Guardo la TV.", en: "I’m watching TV.", zh: "我在看電視"},
            {text: "Leggo un libro.", en: "I’m reading a book.", zh: "我在讀書"},
            {text: "Cucino.", en: "I’m cooking.", zh: "我在做飯"},
            {text: "Mi rilasso.", en: "I’m relaxing.", zh: "我在放鬆"},
            {text: "Faccio colazione", en: "I’m having breakfast", zh: "我在吃早餐"},
            {text: "Faccio pranzo.", en: "I’m having lunch.", zh: "我在吃午餐"},
            {text: "Faccio cena.", en: "I’m having dinner.", zh: "我在吃晚餐"},
            {text: "Niente (di speciale).", en: "Nothing (special).", zh: "沒什麼特別的"},
            {text: "Sto studiando l'italiano.", en: "I’m studying Italian.", zh: "我在學習義大利語"},
            {text: "Sto navigando in internet.", en: "I’m surfing the internet.", zh: "我在上網"}
          ],
          dialogues: [
            {speaker: "Female", text: "Cosa fai?", en: "What are you doing?", zh: "你在幹嘛？"},
            {speaker: "Men", text: "Cucino. E tu?", en: "I’m cooking. And you?", zh: "我在做飯，你呢？"},
            {speaker: "4", text: "Guardo la TV.", en: "I’m watching TV.", zh: "我在看電視"},
            {speaker: "Men", text: "Faccio cena.", en: "I’m making dinner.", zh: "我在做晚餐"},
            {speaker: "6", text: "Studio l'italiano.", en: "I’m studying Italian.", zh: "我在學習義大利語"},
            {speaker: "7", text: "Navigo in internet.", en: "I’m surfing the internet.", zh: "我在上網"},
            {speaker: "8", text: "Niente di speciale.", en: "Nothing special.", zh: "沒什麼特別的"}
          ],
          tips: [
            { en: "**Cosa fai?** — used for casual questions.", zh: "**Cosa fai?** — 用於比較口語、非正式的提問。" },
            { en: "Use present tense verbs to describe what you’re doing now.", zh: "用現在式動詞來描述你現在正在做的事情。" },
            { en: "Many activities don’t need an object: **Studio**, **Lavoro** = I study, I work.", zh: "許多活動不需要受詞: **Studio**（我學習）、**Lavoro**（我工作）。" },
            { en: "For ongoing actions, use **sto** + verb = I am ...", zh: "對於正在進行的動作，使用 **sto** + 動詞 = 我正在……" },
            { en: "**Niente di speciale** — means 'nothing much' or 'just chilling'.", zh: "**Niente di speciale** — 表示「沒什麼特別的事」或「隨便放鬆一下」。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Ask and answer about professions",
          title_zh: "第二級（A1): 詢問和回答關於職業",
          keyPhrases: [
            {text: "Che lavoro fai?", en: "What do you do for work?", zh: "你是做什麼的？"},
            {text: "Faccio l'insegnante.", en: "I’m a teacher.", zh: "我是老師"},
            {text: "Faccio il medico.", en: "I’m a doctor.", zh: "我是醫生"},
            {text: "Lavoro in un ufficio.", en: "I work in an office.", zh: "我在辦公室工作"},
            {text: "Sono studente/studentessa.", en: "I’m a student.", zh: "我是學生"},
            {text: "Sono disoccupato/a.", en: "I’m unemployed.", zh: "我沒有工作"}
          ],
          dialogues: [
            {speaker: "Female", text: "Che lavoro fai?", en: "What do you do?", zh: "你是做什麼的？"},
            {speaker: "Men", text: "Lavoro in banca.", en: "I work in a bank.", zh: "我在銀行工作"},
            {speaker: "Female", text: "Io sono insegnante. E tu?", en: "I’m a teacher. And you?", zh: "我是老師，你呢？"},
            {speaker: "Men", text: "Faccio la designer grafica.", en: "I’m a graphic designer.", zh: "我是幾何設計師"},
            {speaker: "Female", text: "Io sono studente.", en: "I’m a student.", zh: "我是學生"}
          ],
          tips: [
            { en: "**Che lavoro fai?** — used to ask someone’s job or profession.", zh: "**Che lavoro fai?** — 用來詢問對方的職業。" },
            { en: "You can answer with **Sono...** or **Faccio...**", zh: "你可以用 **Sono...** 或 **Faccio...** 回答。" },
            { en: "**Sono** (I am) — generally used with professions (e.g., **Sono un insegnante** = I am a teacher).", zh: "**Sono**（我是）通常用於職業（例如: **Sono un insegnante** = 我是老師）。" },
            { en: "**Faccio** (I do/make) — often used to describe the type of work (e.g., **Faccio il medico** = I am a doctor; **Faccio l'insegnante di inglese** = I am an English teacher).", zh: "**Faccio**（我做）通常用於描述工作類型（例如: **Faccio il medico** = 我是醫生；**Faccio l'insegnante di inglese** = 我是英文老師）。" },
            { en: "**Cosa fai?** — can also mean 'What’s your job?' depending on the context.", zh: "**Cosa fai?** 根據上下文，也可以表示「你的工作是什麼？」" }
          ]
        },
        {
          levelId: 3,
          title: "Level 1 (A1): Understand that 'Cosa fai?' can mean different things",
          title_zh: "第一級（A1）: 理解「Cosa fai?」可以代表不同意思",
          keyPhrases: [
            {text: "Cosa fai?", en: "What are you doing? / What do you do?", zh: "你現在做什麼？／你做什麼工作？"},
            {text: "Che lavoro fai?", en: "What job do you do?", zh: "你做什麼工作"},
            {text: "Faccio l’infermiera.", en: "I’m a nurse.", zh: "我是護士"},
            {text: "Lavoro in una scuola.", en: "I work in a school.", zh: "我在學校工作"},
            {text: "Sono un ingegnere.", en: "I’m an engineer.", zh: "我是工程師"},
            {text: "Sono disoccupata.", en: "I’m unemployed.", zh: "我目前沒工作"}
          ],
          dialogues: [
            {speaker: "Female", text: "Cosa fai?", en: "What do you do?", zh: "你是做什麼的？"},
            {speaker: "Men", text: "Sono un ingegnere. E tu?", en: "I’m an engineer. And you?", zh: "我是工程師，你呢？"},
            {speaker: "Female", text: "Io lavoro in una scuola materna.", en: "I work in a preschool.", zh: "我在幼兒園工作"},
            {speaker: "Men", text: "Io sono disoccupata al momento.", en: "I’m currently unemployed.", zh: "我現在沒在工作"},
            {speaker: "4", text: "Io studio, non lavoro ancora.", en: "I’m studying, not working yet.", zh: "我還在唸書，還沒工作"}
          ],
          tips: [
            { en: "**Cosa fai?** — can mean 'What are you doing now?' or 'What do you do for a living?'", zh: "**Cosa fai?** 可以表示「你現在在做什麼？」或「你的職業是什麼？」" },
            { en: "It's common to ask just **Cosa fai?** and the reply depends on the conversation.", zh: "很常用 **Cosa fai?** 來提問，而回答取決於上下文。" }
          ]
        }
      ]
    },
    {
      lessonId: 7,
      title: "Lesson 7 – Le Domande (Question Words)",
      title_zh: "學習義大利提問詞",
      theme: "how, who, what, where, when, why, which and how much/many",
      theme_zh: "怎麼樣、誰、什麼、哪裡、何時、為什麼、哪一個以及多少",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Le domande base – Basic Question Words",
          title_zh: "第一級（A0）: 基本提問詞",
          keyPhrases: [
            {text: "Come", en: "How", zh: "怎麼樣"},
            {text: "Chi", en: "Who", zh: "誰"},
            {text: "Cosa / Che cosa", en: "What", zh: "什麼"},
            {text: "Dove", en: "Where", zh: "哪裡"}
          ],
          dialogues: [
            {speaker: "Female", text: "Come stai?", en: "How are you?", zh: "你好嗎？"},
            {speaker: "Female", text: "Chi è lei?", en: "Who is she?", zh: "她是誰？"},
            {speaker: "Female", text: "Cosa fai oggi?", en: "What are you doing today?", zh: "你今天做什麼？"},
            {speaker: "Female", text: "Dove vai?", en: "Where are you going?", zh: "你去哪裡？"},
            {speaker: "Female", text: "Dove è il bagno?", en: "Where is the bathroom?", zh: "洗手間在哪裡？"}
          ],
          tips: [
            { en: "**Come** — asks about manner or condition, like 'how' someone feels.", zh: "**Come** — 用來詢問方式或狀態，例如詢問一個人感覺如何。" },
            { en: "**Chi** — used to ask about a person.", zh: "**Chi** — 用來詢問人是誰。" },
            { en: "**Cosa / Che cosa** — means 'what'. You can use either.", zh: "**Cosa / Che cosa** — 意思是「什麼」，兩者都可以用。" },
            { en: "**Dove** — used for locations or destinations.", zh: "**Dove** — 用來詢問地點或目的地。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Le domande in più – More Question Words",
          title_zh: "Level 2 (A1): 更多提問詞",
          keyPhrases: [
            {text: "Quando", en: "When", zh: "何時"},
            {text: "Perché", en: "Why", zh: "為什麼"},
            {text: "Quale", en: "Which", zh: "哪一個"},
            {text: "Quanto / Quanti", en: "How much / How many", zh: "多少"}
          ],
          dialogues: [
            {speaker: "Female", text: "Quando parte il treno?", en: "When does the train leave?", zh: "火車什麼時候開？"},
            {speaker: "Female", text: "Perché non sei venuto stamattina?", en: "Why didn’t you come this morning?", zh: "你今天早上為什麼沒來？"},
            {speaker: "Female", text: "Quale gelato vuoi?", en: "Which ice cream do you want?", zh: "你想要哪一種冰淇淋？"},
            {speaker: "Female", text: "Quanti amici hai in Italia?", en: "How many friends do you have in Italy?", zh: "你在義大利有幾個朋友？"},
            {speaker: "Female", text: "Perché ti piace tanto il caffè?", en: "Why do you like coffee so much?", zh: "你為什麼這麼喜歡咖啡？"}
          ],
          tips: []
        }
      ]
    },
    {
      lessonId: 8,
      title: "Lesson 8 – The Verb 'Essere' & Pronouns",
      title_zh: "動詞 essere 與代名詞",
      theme: "Introducing Yourself and Others, Subject Pronouns, and Possessive Pronouns",
      theme_zh: "介紹自己與他人、主詞代名詞、所有格代名詞",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Introducing Yourself and Others",
          title_zh: "第一級（A1）: 介紹自己和他人",
          keyPhrases: [
            {text: "Io sono...", en: "I am...", zh: "我是..."},
            {text: "Sono...", en: "I'm... - *subject omitted*", zh: "我是... 主詞可省略"},
            {text: "Tu sei...", en: "You are...", zh: "你是..."},
            {text: "Sei...?", en: "Are you...? - *subject omitted*", zh: "你是...嗎？主詞可省略"}
          ],
          dialogues: [
            {speaker: "Female", text: "Sei Marco?", en: "Are you Marco?", zh: "你是馬可嗎？"},
            {speaker: "Men", text: "Sì, sono Marco.", en: "Yes, I'm Marco.", zh: "對，我是馬可"},
            {speaker: "Female", text: "E tu?", en: "And you?", zh: "那你呢？"},
            {speaker: "Men", text: "Sono Laura.", en: "I'm Laura.", zh: "我是勞拉"}
          ],
          tips: [
            { en: "In Italian, people often drop **io** because the verb already shows who’s speaking.", zh: "在義大利語中，人們常省略 **io**，因為動詞變化已經透露主詞是誰。" },
            { en: "Example: **Io sono Anna → Sono Anna**", zh: "例子: **Io sono Anna** → **Sono Anna**" },
            { en: "In a question, you can just use the verb: **Sei Marco?** instead of '**Tu sei Marco?**", zh: "在問句中，你可以只用動詞: **Sei Marco?** 取代 **Tu sei Marco?**" },
            { en: "**Sei Marco?** (Are you Marco?) is more common.", zh: "「**Sei Marco?**」（你是馬可嗎？）比較常見。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Meet the Italian Subject Pronouns",
          title_zh: "第二級（A1）: 認識義大利主詞代名詞",
          keyPronouns: [
            {text: "io", en: "I", zh: "我"},
            {text: "io sono...", en: "I am...", zh: "我是..."},
            {text: "tu", en: "you (informal)", zh: "你"},
            {text: "tu sei...", en: "You are...", zh: "你、非正式單數"},
            {text: "lui", en: "he", zh: "他"},
            {text: "lui è...", en: "He is...", zh: "他是..."},
            {text: "lei", en: "she", zh: "她"},
            {text: "lei è...", en: "She is...", zh: "她是..."},
            {text: "Lei", en: "you (formal)", zh: "您，正式"},
            {text: "Lei è...", en: "You are...", zh: "您、正式單數"},
            {text: "noi", en: "we", zh: "我們"},
            {text: "noi siamo...", en: "We are...", zh: "我們是..."},
            {text: "voi", en: "you all", zh: "你們"},
            {text: "voi siete...", en: "You all are...", zh: "你們是..."},
            {text: "loro", en: "they", zh: "他們 / 她們"},
            {text: "loro sono...", en: "They are...", zh: "他們/她們是..."}
          ],
          dialogues: [
            {speaker: "Men", text: "Tu sei Maria?", en: "Are you Maria?", zh: "你是瑪麗亞嗎？"},
            {speaker: "Female", text: "Sì, io sono Maria.", en: "Yes, I am Maria.", zh: "對，我是瑪麗亞"},
            {speaker: "Men", text: "Sei pronto?", en: "Are you ready?", zh: "你準備好了嗎？"},
            {speaker: "Female", text: "Sì, sono pronto.", en: "Yes, I am ready.", zh: "對，我準備好了"},
            {speaker: "Female", text: "Lui è Luca?", en: "Is he Luca?", zh: "他是路卡嗎？"},
            {speaker: "Men", text: "Sì, lui è Luca.", en: "Yes, he is Luca.", zh: "對，他是路卡"},
            {speaker: "Female", text: "Lei è italiana?", en: "Is she Italian?", zh: "她是義大利人嗎？"},
            {speaker: "Men", text: "Sì, lei è italiana.", en: "Yes, she is Italian.", zh: "對，她是義大利人"},
            {speaker: "Female", text: "Scusi, Lei è il signor Bianchi?", en: "Excuse me, are you Mr. Bianchi? (Formal)", zh: "打擾了，您是比安奇先生嗎？"},
            {speaker: "Men", text: "Sì, sono io.", en: "Yes, it's me.", zh: "對，是我"},
            {speaker: "Female", text: "Noi siamo amici?", en: "Are we friends?", zh: "我們是朋友嗎？"},
            {speaker: "Men", text: "Sì, siamo amici.", en: "Yes, we are friends.", zh: "對，我們是朋友"},
            {speaker: "Female", text: "Voi siete turisti?", en: "Are you all tourists?", zh: "你們是遊客嗎？"},
            {speaker: "Men", text: "Sì, siamo turisti", en: "Yes, we are tourists.", zh: "對，我們是遊客"},
            {speaker: "Female", text: "Loro sono americani?", en: "Are they American?", zh: "他們是美國人嗎？"},
            {speaker: "Men", text: "Sì, sono americani.", en: "Yes, they are American.", zh: "對，他們是美國人"}
          ],
          tasks: [],
          tips: [
            { en: "In Italian, subject pronouns are often dropped because the verb form already shows who’s speaking.", zh: "在義大利語中，主詞常被省略，因為動詞本身就能看出是誰。" },
            { en: "Example: **(Io) sono Laura**, **(Lui) è Marco**.", zh: "例子: **（Io）sono Laura**，**（Lui）è Marco**。" },
            { en: "Capitalized **'Lei'** (formal “you”) is the same as “she” **'lei'** — context matters!", zh: "大寫的 **Lei**（正式的「您」）與小寫的 **lei**（「她」）拼法相同，需要靠語境來判斷。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Possessive Pronouns",
          title_zh: "第三級（A1）: 所有格代名詞",
          keyPhrases: [
            {title: "Masculine Singular / Feminine Singular"},
            {text: "il mio / la mia", en: "my + Singular", zh: "我的"},
            {text: "il tuo / la tua", en: "your (informal) + Singular", zh: "你的"},
            {text: "il suo / la sua", en: "his / her / your (formal)", zh: "他/她/您的"},
            {text: "il nostro / la nostra", en: "our", zh: "我們的"},
            {text: "il vostro / la vostra", en: "your", zh: "你們的"},
            {text: "il loro / la loro", en: "their / your (formal)", zh: "他們/她們/您們的"},
            {title: "Masculine Plural / Feminine Plural"},
            {text: "i miei / le mie", en: "my + Plural", zh: "我的"},
            {text: "i tuoi / le tue", en: "your (informal) + Plural", zh: "你的"},
            {text: "i suoi / le sue", en: "his / her / your (formal)", zh: "他/她/您的"},
            {text: "i nostri / le nostre", en: "our", zh: "我們的"},
            {text: "i vostri / le vostre", en: "your", zh: "你們的"},
            {text: "i loro / le loro", en: "their / your (formal)", zh: "他們/她們/您們的"}
          ],
          dialogues: [
            {speaker: "Female", text: "È la tua borsa?", en: "Is it your bag?", zh: "這是你的包包嗎？"},
            {speaker: "Men", text: "Sì, è la mia borsa.", en: "Yes, it’s my bag.", zh: "對，是我的包包"},
            {speaker: "Female", text: "Dov’è il suo telefono?", en: "Where is his/her phone?", zh: "他的/她的手機在哪？"},
            {speaker: "Men", text: "Ecco il suo telefono.", en: "Here’s his/her phone.", zh: "這是他的/她的手機"},
            {speaker: "Female", text: "È la vostra macchina?", en: "Is this your (plural) car?", zh: "這是你們的車嗎？"},
            {speaker: "Men", text: "Sì, è la nostra macchina.", en: "Yes, it’s our car.", zh: "對，是我們的車"},
            {speaker: "Female", text: "Sono le loro chiavi?", en: "Are these their keys?", zh: "這些是他們的鑰匙嗎？"},
            {speaker: "Men", text: "No, non sono le loro chiavi. Sono le mie.", en: "No, they aren't their keys. They are mine.", zh: "不，那些不是他們的鑰匙。是我的。"}
          ],
          tips: [
            { en: "Possessive words change based on the thing you are talking about, not who owns it.", zh: "所有格形容詞的性別與所修飾的名詞一致，而不是與擁有者一致。" },
            { en: "**la mia borsa** (my bag – feminine word), **il mio libro** (my book – masculine word).", zh: "**la mia borsa**（我的包包——陰性名詞）、**il mio libro**（我的書——陽性名詞）。" },
            { en: "Most of the time, you also add **il / la / i / le** before the possessive.", zh: "大多數時候，所有格形容詞前會加上 **il / la / i / le**。" },
            { en: "But for singular family members, you usually skip the article:", zh: "但對於單數的家庭成員，通常會省略冠詞: " },
            { en: "**mia madre** (my mother), **tuo fratello** (your brother).", zh: "**mia madre**（我的媽媽）、**tuo fratello**（你的哥哥／弟弟）。" },
            { en: "If it's plural or has an adjective, you add the article: **i miei genitori** (my parents), **il mio fratello maggiore** (my older brother).", zh: "如果是複數或帶有形容詞，則會加上冠詞: **i miei genitori**（我的父母）、**il mio fratello maggiore**（我的哥哥／弟弟）。" }
          ]
        }
      ]
    }
    // new lesson
  ]
};
