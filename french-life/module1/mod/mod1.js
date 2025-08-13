// mod/mod1.js
const moduleData = {
  moduleId: "1",
  title: "Module 1 – Salutations",
  title_zh: "模組 1 – 打招呼",
  voice: "fr-FR",
  lessons: [
    {
      lessonId: 1,
      title: "Leçon 1 – Salut ! Mission au marché",
      theme: "Les salutations dans la vie quotidienne française",
      theme_zh: "日常法語的問候語",
      levels: [
        {
          levelId: 1,
          title: "Niveau 1 (A0+): Dire bonjour !",
          title_zh: "第一級（A0+）: 打招呼！",
          keyPhrases: [
            { text: "Salut !", en: "Hi / Bye!", zh: "嗨／掰" },
            { text: "Bonjour !", en: "Good morning / Hello", zh: "早安／你好" },
            { text: "Bonsoir !", en: "Good evening", zh: "晚上好" },
            { text: "Enchanté(e) !", en: "Nice to meet you!", zh: "很高興認識你" }
          ],
          dialogues: [
            { speaker: "Female", when: "Talking to friends or classmates", text: "Salut !", en: "Hi!", zh: "嗨！" },
            { speaker: "Female", when: "Morning at a bakery or store", text: "Bonjour !", en: "Good morning!", zh: "早安！" },
            { speaker: "Female", when: "Evening at a restaurant", text: "Bonsoir !", en: "Good evening!", zh: "晚上好！" },
            { speaker: "Female", when: "Meeting someone for the first time", text: "Enchanté !", en: "Nice to meet you!", zh: "很高興認識你！" },
            { speaker: "Female", when: "Leaving a chat", text: "À bientôt !", en: "See you soon!", zh: "待會見！" },
            { speaker: "Female", when: "Greeting a group", text: "Salut tout le monde !", en: "Hi everyone!", zh: "大家好！" }
          ],
          tips: [
            { en: "**Salut** is informal and very common in France.", zh: "**Salut** 是非正式且在法國非常常見的用法。" },
            { en: "**Bonjour** is polite and used from the morning until about 6 p.m.", zh: "**Bonjour** 較正式，通常在下午 6 點前使用。" },
            { en: "**Bonsoir** is for after 6 p.m.", zh: "**Bonsoir** 用於下午 6 點之後的問候語。" },
            { en: "**Bonjour** is essential! Always say it when you enter a shop, café, or interact with a stranger.", zh: "**Bonjour** 是必須的！進入商店、咖啡廳或與陌生人互動時，務必先說這句話。" },
            { en: "**Salut** can be used for both greeting and saying goodbye!", zh: "**Salut** 同時可以用於打招呼和說再見！" }
          ]
        },
        {
          levelId: 2,
          title: "Niveau 2 (A0+): Plus de salutations et d'adieux",
          title_zh: "第二級（A0+）: 更多問候與道別",
          keyPhrases: [
            { text: "Bonne journée !", en: "Have a good day!", zh: "祝你今天愉快" },
            { text: "Bonne soirée !", en: "Have a good evening!", zh: "祝你今晚愉快" },
            { text: "Bonne nuit !", en: "Good night", zh: "晚安（睡前說）" },
            { text: "Au revoir !", en: "Goodbye (formal)", zh: "再見（正式）" },
            { text: "À bientôt !", en: "See you soon", zh: "很快再見" },
            { text: "À demain !", en: "See you tomorrow", zh: "明天見" },
            { text: "À plus !", en: "See you later (informal)", zh: "待會見（口語）" }
          ],
          dialogues: [
            { speaker: "Female", when: "Leaving a shop in the afternoon", text: "Bonne journée !", en: "Have a good day!", zh: "祝你今天愉快！" },
            { speaker: "Female", when: "Leaving a restaurant in the evening", text: "Bonne soirée !", en: "Have a good evening!", zh: "祝你今晚愉快！" },
            { speaker: "Female", when: "Heading to bed?", text: "Bonne nuit !", en: "Good night", zh: "晚安" },
            { speaker: "Female", when: "Leaving formally (e.g., meeting or with a stranger)?", text: "Au revoir !", en: "Goodbye (formal)", zh: "再見（正式）" },
            { speaker: "Female", when: "Ending a quick conversation or short visit?", text: "À bientôt !", en: "See you soon", zh: "很快再見" },
            { speaker: "Female", when: "Parting ways until tomorrow?", text: "À demain !", en: "See you tomorrow", zh: "明天見" },
            { speaker: "Female", when: "Saying bye to a friend you'll see later today?", text: "À plus tard !", en: "See you later today", zh: "今天稍後見" },
            { speaker: "Female", when: "Saying goodbye with a cute or friendly tone?", text: "Salut, salut !", en: "Bye-bye!", zh: "再見再見" }
          ],
          tips: [
            { en: "**Bonne nuit** is only for bedtime 🌙, while **Bonsoir** is a general evening greeting.", zh: "**Bonne nuit** 只在睡前說 🌙，而 **Bonsoir** 是一般的晚上問候語。" },
            { en: "**Au revoir** is a very standard goodbye, more formal than **Salut**.", zh: "**Au revoir** 是一個非常標準的再見，比 **Salut** 更正式。" },
            { en: "**À bientôt** is for seeing someone again soon, but without a specific time. **À tout à l'heure** is for seeing them later today.", zh: "**À bientôt** 用在很快會再見面但沒有具體時間的情況。**À tout à l'heure** 則是今天稍後會見面。" },
            { en: "**Enchanté(e)** is for first meetings, but you can also just say **Bonjour** and then introduce yourself.", zh: "**Enchanté(e)** 用在第一次見面，但你也可以只說 **Bonjour** 然後自我介紹。" }
          ]
        },
        {
          levelId: 3,
          title: "Niveau 3 (A0+): D'autres façons de dire au revoir",
          title_zh: "第三級（A0+）: 更多道別方式",
          keyPhrases: [
            { text: "À plus tard !", en: "See you later", zh: "待會見" },
            { text: "À tout de suite !", en: "See you right away!", zh: "馬上見！" },
            { text: "À la prochaine !", en: "See you next time", zh: "下次見" },
            { text: "À la semaine prochaine !", en: "See you next week", zh: "下週見" },
            { text: "À un de ces quatre !", en: "See you one of these days!", zh: "改天見！" },
            { text: "Prenez soin de vous !", en: "Take care of yourself! (formal/plural)", zh: "請保重！" },
            { text: "Fais attention !", en: "Take care! (informal)", zh: "小心/保重！" },
            { text: "On se voit !", en: "We’ll see each other!", zh: "到時見（我們預計會見面）" },
            { text: "On se parle !", en: "We’ll talk!", zh: "再聊（我們預計會聯絡）" }
          ],
          dialogues: [
            { speaker: "Female", when: "Wrapping up a conversation and will meet in a few hours", text: "À tout à l'heure !", en: "See you later today!", zh: "今天稍後見！" },
            { speaker: "Female", when: "Meeting again later today", text: "On se voit plus tard !", en: "We’ll see each other later today!", zh: "我們今天晚點見！" },
            { speaker: "Female", when: "You will contact again soon?", text: "On se parle bientôt !", en: "We’ll talk soon!", zh: "我們很快再聊！" },
            { speaker: "Female", when: "Saying goodbye for a while, but no specific date", text: "À la prochaine !", en: "See you next time!", zh: "下次見！" },
            { speaker: "Female", when: "Saying goodbye in the evening?", text: "Passe une bonne soirée !", en: "Have a nice evening!", zh: "祝你今晚愉快！" },
            { speaker: "Female", when: "Saying goodbye in the morning or early afternoon?", text: "Passe une bonne journée !", en: "Have a good day!", zh: "祝你今天愉快！" },
            { speaker: "Female", when: "When you really want to say goodbye for a long time or to someone sick", text: "Prenez soin de vous !", en: "Take care!", zh: "請保重！" }
          ],
          tips: [
            { en: "**On se voit** is for when you expect to meet in person.", zh: "**On se voit** 用於預計會當面見面的情況。" },
            { en: "**On se parle** is more for calls, messages, or emails.", zh: "**On se parle** 比較常用在電話、訊息或電子郵件。" },
            { en: "The French often use verb conjugations for formal vs. informal. For example, use **Passe une bonne journée** (informal) vs **Passez une bonne journée** (formal).", zh: "法語常透過動詞變位來區分正式與非正式。例如，使用 **Passe une bonne journée** (非正式) 對比 **Passez une bonne journée** (正式)。" },
            { en: "**À tout de suite** is for 'right away' or 'in just a moment.'", zh: "**À tout de suite** 用在「馬上」或「很快」就會再見面的情況。" }
          ]
        }
      ]
    },
    {
      lessonId: 2,
      title: "Leçon 2 – Comment ça va ? Mission au marché",
      theme: "Comment vas-tu ? Sentiments et réponses",
      theme_zh: "你好嗎？感受與回應",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0+): Asking 'How are you?'",
          title_zh: "第一級（A1）: 詢問「你最近好嗎？」",
          keyPhrases: [
            { text: "Comment ça va ?", en: "How are you? / How's it going?", zh: "你好嗎？／最近如何？" },
            { text: "Comment vas-tu ?", en: "How are you? (informal)", zh: "你好嗎？（非正式）" },
            { text: "Comment allez-vous ?", en: "How are you? (formal)", zh: "您好嗎？（正式）" },
            { text: "Ça va bien.", en: "I'm good / Fine", zh: "我很好" },
            { text: "Ça va, merci.", en: "I'm fine, thanks.", zh: "我很好，謝謝" },
            { text: "Comme ci, comme ça.", en: "So-so", zh: "普普通通" }
          ],
          dialogues: [
            { speaker: "Female", when: "Greeting a friend casually", text: "Salut ! Comment ça va ?", en: "Hi! How's it going?", zh: "嗨！最近如何？" },
            { speaker: "Male", when: "Replying to a friend", text: "Ça va bien, merci ! Et toi ?", en: "I'm good, thanks! And you?", zh: "我很好，謝謝！你呢？" },
            { speaker: "Female", when: "Talking to a teacher or someone older", text: "Bonjour ! Comment allez-vous ?", en: "Hello! How are you? (formal)", zh: "您好！您好嗎？" },
            { speaker: "Male", when: "Meeting a friend at a café", text: "Comment vas-tu ?", en: "How are you?", zh: "你好嗎？" },
            { speaker: "Female", when: "Feeling good", text: "Ça va super bien !", en: "I'm doing great!", zh: "我非常好！" },
            { speaker: "Male", when: "Feeling okay", text: "Comme ci, comme ça.", en: "Just so-so.", zh: "普普通通" },
            { speaker: "Female", when: "Not feeling great", text: "Ça ne va pas très bien.", en: "I'm not doing very well.", zh: "我不太好" }
          ],
          tips: [
            { en: "**Comment ça va ?** is the most common and versatile way to ask 'How are you?'. You can reply with just **Ça va**!", zh: "**Comment ça va ?** 是最常見且萬用的問法。你可以直接用 **Ça va** 來回答！" },
            { en: "**Comment vas-tu ?** is the informal version, and **Comment allez-vous ?** is the formal version.", zh: "**Comment vas-tu ?** 是非正式用法，而 **Comment allez-vous ?** 是正式用法。" },
            { en: "**Merci** means 'thank you'. It's polite to add it after your reply.", zh: "**Merci** 是「謝謝」的意思。回答後加上它會比較有禮貌。" },
            { en: "You can also reply simply with **Bien** or **Super bien** for 'great', or **Pas mal** for 'not bad'.", zh: "你也可以簡單回答 **Bien** 或 **Super bien**（非常好），或 **Pas mal**（還不錯）。" },
            { en: "**Comme ci, comme ça** literally means 'like this, like that,' and is used for 'so-so'.", zh: "**Comme ci, comme ça** 字面意思為「這樣、那樣」，用於表示「普普通通」。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0+): Responding 'How are you?'",
          title_zh: "第二級（A0+）: 回答「你最近好嗎？」",
          keyPhrases: [
            { text: "Je vais très bien !", en: "I'm very well!", zh: "我非常好！" },
            { text: "Ça va pas mal.", en: "I'm not bad.", zh: "我還不錯" },
            { text: "Je suis fatigué(e).", en: "I'm tired.", zh: "我累了" },
            { text: "Et toi ?", en: "And you? (informal)", zh: "你呢？" },
            { text: "Et vous ?", en: "And you? (formal)", zh: "您呢？" }
          ],
          dialogues: [],
          tips: [
            { en: "To express you are feeling great, you can say **Je vais très bien !** (I'm very well!).", zh: "要表達你感覺非常好，你可以說 **Je vais très bien !**（我非常好！）" },
            { en: "**Fatigué** is for male speakers, and **fatiguée** is for female speakers. Remember to add the 'e'!", zh: "男性用 **fatigué**，女性用 **fatiguée**。別忘了加上 'e'！" },
            { en: "**Pas mal** is a common and casual way to say you are doing okay.", zh: "**Pas mal** 是一個常用且隨性的說法，表示你還不錯。" },
            { en: "**Et toi ?** is for friends and people your age, while **Et vous ?** is for strangers, teachers, or elders.", zh: "**Et toi ?** 用於朋友或同輩之間，而 **Et vous ?** 則用於陌生人、老師或長輩。" },
            { en: "The verb **aller** (to go) is used to talk about how you are doing, e.g., **Je vais bien** = I'm going well.", zh: "動詞 **aller**（去）用於談論你的近況，例如：**Je vais bien** = 我很好。" }
          ]
        }
      ]
    },
    {
      lessonId: 3,
      title: "Lesson 3 – Être poli ! Mission à la gare",
      theme: "Being polite and asking for help",
      theme_zh: "禮貌用語&請求幫忙",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Basic polite words",
          title_zh: "第一級（A0）: 基礎禮貌用語",
          keyPhrases: [
            { text: "Merci", en: "Thank you", zh: "謝謝" },
            { text: "De rien", en: "You’re welcome / No problem", zh: "不客氣 / 沒關係" },
            { text: "S'il vous plaît", en: "Please (formal)", zh: "請（正式）" },
            { text: "S'il te plaît", en: "Please (informal)", zh: "請（非正式）" },
            { text: "Pardon", en: "Excuse me / Sorry", zh: "不好意思 / 對不起" },
            { text: "Excusez-moi", en: "Excuse me (formal)", zh: "不好意思（正式）" },
            { text: "Excuse-moi", en: "Excuse me (informal)", zh: "不好意思（非正式）" },
            { text: "Monsieur / Madame", en: "Sir / Ma’am", zh: "先生 / 女士" }
          ],
          dialogues: [],
          tips: [
            { en: "Use **S'il vous plaît** in formal settings or with strangers, and **S'il te plaît** only with friends or people you know well.", zh: "對陌生人或在正式場合使用 **S'il vous plaît**，而 **S'il te plaît** 僅用於朋友或熟人之間。" },
            { en: "**Pardon** is a versatile and common option, good for getting attention or apologizing for a small mistake.", zh: "**Pardon** 是一個萬用且常見的選項，適合用來引起注意或為小錯誤道歉。" },
            { en: "**De rien** literally means 'of nothing' and is a casual way to say 'you're welcome'. **Je vous en prie** is a more formal option.", zh: "**De rien** 的字面意思是「沒什麼」，是一種隨意的「不客氣」。**Je vous en prie** 則更為正式。" },
            { en: "The French often use these phrases frequently, so don't be shy about saying 'Merci' and 'S'il vous plaît' often!", zh: "法國人常使用這些詞彙，所以大方地多說 **Merci** 和 **S'il vous plaît** 吧！" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Asking for information and making requests",
          title_zh: "第二級（A1）: 詢問資訊與提出請求",
          keyPhrases: [
            { text: "Puis-je...?", en: "Can I...?", zh: "我可以……嗎？" },
            { text: "Pouvez-vous...?", en: "Can you...? (formal)", zh: "您可以……嗎？（正式）" },
            { text: "Je voudrais...", en: "I would like...", zh: "我想要……" },
            { text: "Il y a...?", en: "Is there...? / Are there...?", zh: "有……嗎？" },
            { text: "Puis-je vous aider ?", en: "Can I help you? (formal)", zh: "我可以幫您嗎？（正式）" },
            { text: "Excusez-moi", en: "Excuse me (to pass by / interrupt)", zh: "不好意思（用於通過或打斷時）" },
            { text: "Puis-je utiliser les toilettes ?", en: "Can I use the bathroom?", zh: "我可以用洗手間嗎？" }
          ],
          dialogues: [
            { speaker: "Male", text: "Excusez-moi ! Monsieur, puis-je vous demander un renseignement ?", en: "Excuse me! Sir, may I ask you for some information?", zh: "不好意思，先生，我可以向您詢問資訊嗎？" },
            { speaker: "Female", text: "Bien sûr, je peux vous aider ?", en: "Certainly, can I help you?", zh: "當然，我可以幫您嗎？" },
            { speaker: "Male", text: "Je voudrais acheter un souvenir. Y a-t-il un magasin par ici ?", en: "I'd like to buy a souvenir. Is there a shop nearby?", zh: "我想要買個紀念品。這附近有商店嗎？" },
            { speaker: "Female", text: "Oui, il y a un magasin là-bas, à droite.", en: "Yes, there’s a shop over there, to the right.", zh: "有的，那邊有一家商店，在右邊。" },
            { speaker: "Male", text: "Merci beaucoup ! Et puis-je utiliser les toilettes, s'il vous plaît ?", en: "Thank you very much! And can I use the bathroom, please?", zh: "非常感謝！還有，我可以用洗手間嗎？" },
            { speaker: "Female", text: "Oui, les toilettes sont là, au fond.", en: "Yes, the bathroom is over there at the end.", zh: "好的，洗手間在裡面盡頭處。" },
            { speaker: "Male", text: "Merci !", en: "Thank you!", "zh": "謝謝！" },
            { speaker: "Female", text: "De rien !", en: "You're welcome!", zh: "不客氣！" }
          ],
          tips: [
            { en: "Use **Je voudrais...** (I would like...) to make a request politely, as it's much less direct than **Je veux...** (I want...).", zh: "使用 **Je voudrais...** (我想要...) 來禮貌地提出請求，它比 **Je veux...** (我想要...) 更加委婉。" },
            { en: "**Puis-je...?** is for asking permission for yourself, while **Pouvez-vous...?** is for asking someone else to do something (formally).", zh: "**Puis-je...?** 用於為自己尋求許可，而 **Pouvez-vous...?** 則用於（正式地）請他人做某事。" },
            { en: "Always add **s'il vous plaît** (please) to the end of a request to sound more polite.", zh: "在請求後加上 **s'il vous plaît** (請)，會聽起來更禮貌。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Understanding, clarifying and responding",
          title_zh: "第三級（A1）: 理解、澄清與回應",
          keyPhrases: [
            { text: "Je comprends / Je ne comprends pas", en: "I understand / I don’t understand", zh: "我懂 / 我不懂" },
            { text: "Pouvez-vous répéter, s'il vous plaît ?", en: "Can you repeat, please?", zh: "請您再說一遍，好嗎？" },
            { text: "Pouvez-vous parler plus lentement ?", en: "Can you speak more slowly?", zh: "您可以說慢一點嗎？" },
            { text: "Je suis désolé(e)", en: "I’m sorry", zh: "我很抱歉" },
            { text: "Bien sûr / Bien entendu", en: "Certainly / Of course", zh: "當然" },
            { text: "Avec plaisir", en: "Gladly / With pleasure", zh: "樂意之至 / 很願意" }
          ],
          dialogues: [
            { speaker: "Female", text: "Excusez-moi, je peux poser une question ? Il y a un train pour Paris ?", en: "Excuse me, can I ask a question? Is there a train to Paris?", zh: "不好意思，我可以問一個問題嗎？有去巴黎的火車嗎？" },
            { speaker: "Male", text: "Bien sûr ! Avec plaisir ! Le train de 14h30 part de la voie neuf. C'est le TGV.", en: "Of course! Gladly! The 2:30 PM train leaves from platform nine. It's the TGV.", zh: "當然！樂意之至！下午兩點半的火車從第九月台出發。是高速列車。" },
            { speaker: "Female", text: "Je suis désolé, je ne comprends pas bien le français... Pouvez-vous parler plus lentement, s'il vous plaît ?", en: "I'm sorry, I don't understand French well... Can you speak more slowly, please?", zh: "我很抱歉，我不太懂法語……可以請您說慢一點嗎？" },
            { speaker: "Male", text: "Ah, bien sûr ! Le train part à quatorze heures trente. De la voie numéro neuf.", en: "Oh, of course! The train leaves at fourteen thirty. From platform number nine.", zh: "啊，好的！火車會在十四點三十分發車。從第九月台。" },
            { speaker: "Female", text: "Pouvez-vous répéter le numéro de la voie ?", en: "Can you repeat the platform number?", zh: "您可以再重複一次月台號碼嗎？" },
            { speaker: "Male", text: "Oui, voie neuf. Et le train est le TGV.", en: "Yes, platform nine. And the train is the TGV.", zh: "好的，第九月台。火車是高速列車。" },
            { speaker: "Female", text: "Ah ! Je comprends, merci beaucoup !", en: "Ah! I understand, thank you very much!", zh: "啊！我懂了，非常感謝！" }
          ],
          tips: [
            { en: "It's completely normal to not understand, especially with fast speech. Using phrases like **Pouvez-vous répéter ?** shows you are engaged and trying to learn.", zh: "不理解是很正常的，特別是當對方說話很快時。使用 **Pouvez-vous répéter ?** 這樣的句子表明你正在專心並努力學習。" },
            { en: "There's a subtle difference: **Je suis désolé(e)** is for apologizing, while **Excusez-moi** is for excusing yourself or getting someone's attention.", zh: "**Je suis désolé(e)** 用於道歉，而 **Excusez-moi** 則用於致歉或引起他人注意。" },
            { en: "You can combine phrases, such as **Je ne comprends pas, je suis désolé.** (I don't understand, I'm sorry).", zh: "你可以將句子組合起來使用，例如 **Je ne comprends pas, je suis désolé.** (我不懂，很抱歉)。" }
          ]
        }
      ]
    },
    {
      lessonId: 4,
      title: "Lesson 4 – What is your name?",
      title_zh: "第 4 課 – 你叫什麼名字？",
      theme: "Greet someone naturally and simply",
      theme_zh: "自然且簡單地向某人問好",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Basic name introduction",
          title_zh: "第一級（A0）: 基本名字介紹",
          keyPhrases: [
            { text: "Comment tu t'appelles ?", en: "What’s your name? (informal)", zh: "你叫什麼名字？（非正式）" },
            { text: "Je m'appelle...", en: "My name is...", zh: "我叫……" },
            { text: "Et toi ?", en: "And you? (informal)", zh: "你呢？" },
            { text: "Moi, c'est...", en: "I'm... (informal)", zh: "我呀，是……" }
          ],
          dialogues: [
            { speaker: "Female", text: "Salut ! Comment tu t'appelles ?", en: "Hi! What’s your name?", zh: "嗨！你叫什麼名字？" },
            { speaker: "Male", text: "Je m'appelle Marc. Et toi ?", en: "My name is Marc. And you?", zh: "我叫馬克。你呢？" },
            { speaker: "Female", text: "Moi, c'est Laura.", en: "My name is Laura.", zh: "我呀，是蘿拉。" }
          ],
          tips: [
            { en: "**Comment tu t'appelles ?** literally means 'How do you call yourself?'. It's the most common informal way to ask for a name.", zh: "**Comment tu t'appelles ?** 的字面意思是「你如何稱呼自己？」。這是最常見的非正式問法。" },
            { en: "**Je m'appelle...** means 'I call myself...' and is the standard reply.", zh: "**Je m'appelle...** 的意思是「我稱呼自己是……」，是標準的回答方式。" },
            { en: "In French, you can also use **Moi, c'est...** as a very common and informal way to introduce yourself.", zh: "在法語中，你也可以用 **Moi, c'est...** 來做非常口語且非正式的自我介紹。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0): Formal version and polite expressions",
          title_zh: "第二級（A0）: 正式版本與禮貌用語",
          keyPhrases: [
            { text: "Comment vous vous appelez ?", en: "What is your name? (formal)", zh: "您貴姓？" },
            { text: "Je m'appelle Jean Dupont.", en: "My name is Jean Dupont.", zh: "我叫尚．杜邦。" },
            { text: "Enchanté(e) !", en: "Nice to meet you! (masc./fem.)", zh: "很高興認識您！" },
            { text: "Et vous ?", en: "And you? (formal)", zh: "您呢？" },
            { text: "Moi de même.", en: "Me too. / Likewise.", zh: "我也是。" }
          ],
          dialogues: [
            { speaker: "Male", text: "Bonjour ! Comment vous vous appelez ?", en: "Good morning! What’s your name?", zh: "早安！您貴姓？" },
            { speaker: "Female", text: "Je m'appelle Marie Duval. Et vous ?", en: "My name is Marie Duval. And you?", zh: "我叫瑪麗．杜瓦。您呢？" },
            { speaker: "Male", text: "Je m'appelle Jean Dupont. Enchanté !", en: "My name is Jean Dupont. Nice to meet you!", zh: "我叫尚．杜邦。很高興認識您！" },
            { speaker: "Female", text: "Enchantée !", en: "Nice to meet you too! (female speaker)", zh: "我也很高興！" }
          ],
          tips: [
            { en: "Use **Comment vous vous appelez ?** for formal situations, like with a stranger, a boss, or an older person.", zh: "在正式場合（例如與陌生人、老闆或長輩），使用 **Comment vous vous appelez ?**。" },
            { en: "The verb `appeler` (to call) is a reflexive verb, so it requires **vous vous** in the formal 'you' form.", zh: "動詞 `appeler`（呼叫）是反身動詞，所以在正式的「您」形式中需要使用 **vous vous**。" },
            { en: "**Enchanté** is for male speakers, and **Enchantée** (with an extra 'e') is for female speakers.", zh: "男性說 **Enchanté**，而女性則要多加一個 'e' 變成 **Enchantée**。" },
            { en: "You can simply reply with **Moi de même** (me too) to reciprocate the sentiment.", zh: "你也可以簡單地用 **Moi de même** (我也是) 來回應同樣的心情。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0): Say 'Nice to meet you' in different ways",
          title_zh: "第三級（A0）: 用不同方式說「很高興認識你」",
          keyPhrases: [
            { text: "Ravi(e) de te connaître", en: "Happy to know you (informal)", zh: "很高興認識你（非正式）" },
            { text: "Ravi(e) de vous connaître", en: "Happy to know you (formal)", zh: "很高興認識您（正式）" },
            { text: "Très heureux / Très heureuse", en: "Very pleased (masc. / fem.)", zh: "非常榮幸" },
            { text: "Le plaisir est pour moi", en: "The pleasure is mine", zh: "這是我的榮幸" }
          ],
          dialogues: [
            { speaker: "Female", text: "Salut ! Moi, c'est Julie.", en: "Hi! I'm Julie.", zh: "嗨！我是茱莉。" },
            { speaker: "Female", text: "Ravi de te connaître !", en: "Happy to know you! (informal)", zh: "很高興認識你！" },
            { speaker: "Male", text: "Moi de même !", en: "Me too!", zh: "我也是！" },
            { speaker: "Female", text: "Ravi de vous connaître.", en: "Happy to know you (formal and polite).", zh: "很高興認識您。" },
            { speaker: "Male", text: "Très heureux !", en: "Very pleased! (male speaker)", zh: "非常榮幸！" },
            { speaker: "Female", text: "Très heureuse !", en: "Very pleased! (female speaker)", zh: "非常榮幸！" },
            { speaker: "Male", text: "Le plaisir est pour moi !", en: "The pleasure is mine!", zh: "這是我的榮幸！" }
          ],
          tips: [
            { en: "In French, **Ravi(e) de te connaître** is a friendly and casual way to say 'Nice to meet you', while **Ravi(e) de vous connaître** is the formal version.", zh: "在法語中，**Ravi(e) de te connaître** 是隨和且友好的「很高興認識你」，而 **Ravi(e) de vous connaître** 則是正式版本。" },
            { en: "**Ravi** (masculine) and **ravie** (feminine) are adjectives that must agree with the speaker's gender.", zh: "**Ravi**（陽性）和 **ravie**（陰性）是形容詞，必須與說話者的性別一致。" },
            { en: "The phrase **Très heureux/heureuse** is a strong and formal way to express pleasure at meeting someone.", zh: "**Très heureux/heureuse** 是一個非常強烈且正式的方式，來表達認識某人感到非常榮幸。" }
          ]
        }
      ]
    },
    {
      lessonId: 5,
      title: "Lesson 5 – Where are you from?",
      title_zh: "第 5 課 – 你來自哪裡？",
      theme: "Ask where someone is from and where they live",
      theme_zh: "詢問某人來自哪裡以及他們住在哪裡",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Asking about origin (informal)",
          title_zh: "第一級（A0）: 詢問來自哪裡（非正式）",
          keyPhrases: [
            { text: "D'où viens-tu ?", en: "Where are you from? (informal)", zh: "你來自哪裡？（非正式）" },
            { text: "Je viens de Paris.", en: "I'm from Paris.", zh: "我來自巴黎" },
            { text: "Tu es d'où ?", en: "Where are you from? (informal)", zh: "你來自哪裡？（非正式）" },
            { text: "Je suis de Rome.", en: "I'm from Rome.", zh: "我來自羅馬" },
            { text: "Et toi ?", en: "And you?", zh: "你呢？" }
          ],
          dialogues: [
            { speaker: "Female", text: "Salut ! Tu es d'où ?", "en": "Hi! Where are you from?", zh: "嗨！你來自哪裡？" },
            { speaker: "Male", text: "Je suis de Milan. C'est une ville magnifique ! Et toi ?", en: "I'm from Milan. It's a beautiful city! And you?", zh: "我來自米蘭。那是一個很美的城市！你呢？" },
            { speaker: "Female", text: "Moi, je suis de Rome. Mais j'habite à Lyon maintenant.", en: "Me, I'm from Rome. But I live in Lyon now.", zh: "我來自羅馬。但我現在住在里昂。" },
            { speaker: "Male", text: "Ah, c'est super ! Tu es de Rome mais tu habites à Lyon... C'est loin !", en: "Oh, that's great! You are from Rome but you live in Lyon... That's far!", zh: "啊，太棒了！你來自羅馬但住在里昂…這很遠呢！" },
            { speaker: "Female", text: "Oui, mais j'aime beaucoup la France. Et toi, tu habites toujours à Milan ?", en: "Yes, but I like France a lot. And you, do you still live in Milan?", zh: "是的，但我很喜歡法國。你呢，你還住在米蘭嗎？" }
          ],
          tips: [
            { en: "In French, you can use two common verbs to talk about your origin: **être** (to be) or **venir** (to come from).", zh: "在法語中，你可以用兩種常見動詞來表達你的來源：**être**（是）或 **venir**（來自）。" },
            { en: "The phrases **Tu es d'où ?** and **D'où viens-tu ?** are both common informal ways to ask where someone is from.", zh: "**Tu es d'où ?** 和 **D'où viens-tu ?** 都是常見的非正式問法。" },
            { en: "To say you are from a city, use the preposition **de**. For example, **Je suis de Rome** (I am from Rome).", zh: "要說你來自某城市，使用前置詞 **de**。例如：**Je suis de Rome**（我來自羅馬）。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0+): Asking about residence and formal versions",
          title_zh: "第二級（A0+）: 詢問居住地與正式說法",
          keyPhrases: [
            { text: "Où habites-tu ?", en: "Where do you live? (informal)", zh: "你住在哪裡？（非正式）" },
            { text: "J'habite à Lyon.", en: "I live in Lyon.", zh: "我住在里昂" },
            { text: "Vous êtes d'où ?", en: "Where are you from? (formal)", zh: "您來自哪裡？（正式）" },
            { text: "J'habite à Paris maintenant.", en: "I live in Paris now.", zh: "我現在住在巴黎" },
            { text: "Et vous ?", en: "And you? (formal)", zh: "您呢？" }
          ],
          dialogues: [
            { speaker: "Female", text: "Bonjour ! Vous êtes d'où ?", en: "Hello! Where are you from? (formal)", zh: "您好！您來自哪裡？" },
            { speaker: "Male", text: "Je suis de Milan. Et vous ?", en: "I'm from Milan. And you?", zh: "我來自米蘭，您呢？" },
            { speaker: "Female", text: "Je suis de Paris. Et où habitez-vous ?", en: "I'm from Paris. And where do you live?", zh: "我來自巴黎。您住在哪裡？" },
            { speaker: "Male", text: "J'habite à Lyon.", en: "I live in Lyon.", zh: "我住在里昂。" }
          ],
          tips: [
            { en: "Use **Où habites-tu ?** (informal) or **Où habitez-vous ?** (formal) to ask where someone lives.", zh: "使用 **Où habites-tu ?**（非正式）或 **Où habitez-vous ?**（正式）來詢問某人住在何處。" },
            { en: "The preposition **à** is used with the verb **habiter** (to live) when you mention a city. For example, **J'habite à Lyon** (I live in Lyon).", zh: "動詞 **habiter**（居住）後面接城市時，使用前置詞 **à**。例如：**J'habite à Lyon**（我住在里昂）。" },
            { en: "To ask someone 'Where are you from?' in a formal way, use **Vous êtes d'où ?**", zh: "要以正式的方式詢問某人「來自哪裡？」，使用 **Vous êtes d'où ?**。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Talking about countries and prepositions",
          title_zh: "第三級（A1）: 談論國家與前置詞",
          keyPhrases: [
            { text: "Je viens du Japon.", en: "I come from Japan.", zh: "我來自日本" },
            { text: "Je viens de Chine.", en: "I come from China.", zh: "我來自中國" },
            { text: "Je viens des États-Unis.", en: "I come from the United States.", zh: "我來自美國" },
            { text: "Je suis français(e).", en: "I am French.", zh: "我是法國人" }
          ],
          dialogues: [
            { speaker: "Female", text: "Bonjour ! De quel pays venez-vous ?", en: "Hello! Which country are you from?", zh: "您好！您來自哪個國家？" },
            { speaker: "Male", text: "Je viens de France, et vous ?", en: "I'm from France, and you?", zh: "我來自法國，您呢？" },
            { speaker: "Female", text: "Je viens des États-Unis.", en: "I'm from the United States.", zh: "我來自美國。" },
            { speaker: "Male", text: "Ah, et vous êtes où en ce moment ?", en: "Oh, and where are you right now?", zh: "哦，那你現在在哪裡？" },
            { speaker: "Female", text: "J'habite à Lyon maintenant.", en: "I live in Lyon now.", zh: "我現在住在里昂。" }
          ],
          tips: [
            { en: "When talking about your home country, the preposition changes based on the country's gender and number:", zh: "當談論你的國家時，前置詞會根據國家的性別和單複數而變化：" },
            { en: "**de** — used for feminine countries (e.g., **de France**)", zh: "**de** — 用於陰性國家（例如：**de France**）" },
            { en: "**du** — used for masculine countries (e.g., **du Japon**)", zh: "**du** — 用於陽性國家（例如：**du Japon**）" },
            { en: "**des** — used for plural countries (e.g., **des États-Unis**)", zh: "**des** — 用於複數國家（例如：**des États-Unis**）" },
            { en: "**d'** — used before a vowel or mute 'h' (e.g., **d'Iran**)", zh: "**d'** — 用於母音或無聲 'h' 開頭的國家（例如：**d'Iran**）" },
            { en: "You can also describe your nationality directly. For example, **Je suis français** (male) or **Je suis française** (female).", zh: "你也可以直接描述你的國籍。例如，**Je suis français**（男性）或 **Je suis française**（女性）。" }
          ]
        }
      ]
    },
    {
      lessonId: 6,
      title: "Lesson 6 - What are you doing? / What is your job?",
      title_zh: "第六課 - 你在做什麼？/ 你的職業是什麼？",
      theme: "Ask what someone is doing and what their job is",
      theme_zh: "詢問某人正在做什麼以及他們的職業",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Asking about current activities",
          title_zh: "第一級（A0）: 詢問現在的活動",
          keyPhrases: [
            { text: "Qu'est-ce que tu fais ?", en: "What are you doing?", zh: "你正在做什麼？" },
            { text: "Je travaille.", en: "I'm working.", zh: "我在工作" },
            { text: "J'étudie.", en: "I'm studying.", zh: "我在學習" },
            { text: "Je lis un livre.", en: "I'm reading a book.", zh: "我在讀書" },
            { text: "Je regarde la télé.", en: "I'm watching TV.", zh: "我在看電視" },
            { text: "Je cuisine.", en: "I'm cooking.", zh: "我在做飯" },
            { text: "Je me détends.", en: "I'm relaxing.", zh: "我在放鬆" },
            { text: "Rien de spécial.", en: "Nothing special.", zh: "沒什麼特別的" }
          ],
          dialogues: [
            { speaker: "A", text: "Salut Marc ! Qu'est-ce que tu fais en ce moment ?", en: "Hi Marc! What are you doing right now?", zh: "嗨，馬克！你現在在做什麼？" },
            { speaker: "B", text: "Salut Julie ! Je suis en train de cuisiner pour ce soir. C'est un plat italien que je n'ai jamais fait. Et toi, tu fais quoi de beau ?", en: "Hi Julie! I'm cooking for tonight. It's an Italian dish I've never made before. And you, what are you up to?", zh: "嗨，茱莉！我正在準備今晚的晚餐。這是一道我從沒做過的義大利菜。你呢，你在忙什麼？" },
            { speaker: "A", text: "Pas grand-chose. Je regarde un film très intéressant à la télé. J'ai aussi un peu étudié le français ce matin, après le petit-déjeuner.", en: "Not much. I'm watching a very interesting movie on TV. I also studied a bit of French this morning, after breakfast.", zh: "沒什麼。我在看一部很有趣的電影。今天早上吃完早餐後，我也稍微學了點法語。" },
            { speaker: "B", text: "C'est super ! Mon plat est presque prêt. J'espère que c'est bon ! On se parle plus tard, d'accord ?", en: "That's great! My dish is almost ready. I hope it tastes good! We'll talk later, okay?", zh: "太棒了！我的菜快做好了。希望味道不錯！我們晚點再聊，好嗎？" }
          ],
          tips: [
            { en: "The phrase **Qu'est-ce que tu fais ?** is a versatile way to ask about a current activity.", zh: "片語 **Qu'est-ce que tu fais ?** 是詢問當前活動的一種多用途方式。" },
            { en: "You can use the simple present tense to describe what you are doing. For example, **Je lis** (I am reading) or **Je travaille** (I am working).", zh: "你可以直接使用簡單現在式來描述你正在做的事情。例如，**Je lis** (我在讀書) 或 **Je travaille** (我在工作)。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Asking about profession",
          title_zh: "第二級（A1）: 詢問職業",
          keyPhrases: [
            { text: "Quel est ton métier ?", en: "What is your job? (informal)", zh: "你的工作是什麼？" },
            { text: "Je suis professeur.", en: "I am a teacher.", zh: "我是老師" },
            { text: "Je travaille dans un bureau.", en: "I work in an office.", zh: "我在辦公室工作" },
            { text: "Je suis étudiant(e).", en: "I am a student.", zh: "我是學生" }
          ],
          dialogues: [
            { speaker: "A", text: "Alors, quel est ton métier ?", en: "So, what is your job?", zh: "那麼，你的工作是什麼？" },
            { speaker: "B", text: "Je travaille dans une banque comme conseiller financier. C'est assez stressant, mais j'aime aider les clients avec leurs investissements. Et toi, tu fais quoi dans la vie ?", en: "I work in a bank as a financial advisor. It's quite stressful, but I enjoy helping clients with their investments. And you, what do you do for a living?", zh: "我在銀行工作，擔任理財顧問。壓力有點大，但我喜歡幫助客戶進行投資。那你呢，你是做什麼的？" },
            { speaker: "A", text: "Je suis professeur d'histoire dans un lycée. C'est un travail passionnant. Je trouve ça gratifiant d'enseigner aux jeunes et de voir leurs progrès.", en: "I am a history teacher at a high school. It's a fascinating job. I find it rewarding to teach young people and see their progress.", zh: "我是高中歷史老師。這是一份充滿熱情的工作。我覺得教導年輕人並看到他們的進步很有成就感。" }
          ],
          tips: [
            { en: "You can use **Quel est ton métier ?** (informal) or **Quel est votre métier ?** (formal) to ask someone about their job.", zh: "你可以用 **Quel est ton métier ?**（非正式）或 **Quel est votre métier ?**（正式）來詢問某人的工作。" },
            { en: "Use **Je suis...** to state your profession directly (e.g., **Je suis professeur**). You can also use **Je travaille comme...** (I work as a...) to be more specific.", zh: "用 **Je suis...** 直接說明你的職業（例如：**Je suis professeur**）。你也可以用 **Je travaille comme...**（我擔任...）來更具體地說明。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): The two meanings of 'Qu'est-ce que tu fais?'",
          title_zh: "第三級（A1）: 「Qu'est-ce que tu fais?」的兩種意思",
          keyPhrases: [
            { text: "Qu'est-ce que tu fais ?", en: "What are you doing? / What do you do?", zh: "你現在做什麼？／你做什麼工作？" },
            { text: "Je suis ingénieur.", en: "I'm an engineer.", zh: "我是工程師" },
            { text: "Je travaille dans une école.", en: "I work in a school.", zh: "我在學校工作" }
          ],
          dialogues: [
            { speaker: "A", text: "Salut ! Ça va ? Qu'est-ce que tu fais ?", en: "Hi! How are you? What are you up to?", zh: "嗨！你好嗎？你在幹嘛？" },
            { speaker: "B", text: "Ça va, merci. Je me détends, je ne fais rien de spécial. Et toi, qu'est-ce que tu fais dans la vie ?", en: "I'm good, thanks. I'm relaxing, nothing special. And you, what do you do for a living?", zh: "我很好，謝謝。我在放鬆，沒什麼特別的。那你平時是做什麼的呢？" },
            { speaker: "A", text: "Je suis ingénieur. Je travaille dans le développement de logiciels. C'est passionnant, surtout quand on crée quelque chose de nouveau.", en: "I'm an engineer. I work in software development. It's fascinating, especially when you create something new.", zh: "我是工程師。我在軟體開發領域工作。這很吸引人，特別是當你創造出新東西的時候。" },
            { speaker: "B", text: "Ah, c'est super ! Moi, je travaille dans une école maternelle, je suis assistante de direction. C'est un travail qui demande beaucoup de patience et d'énergie, mais c'est très gratifiant.", en: "Oh, that's great! I work in a preschool, I'm an executive assistant. It's a job that requires a lot of patience and energy, but it's very rewarding.", zh: "啊，太好了！我則是在幼兒園工作，我是行政助理。這份工作需要很多耐心和精力，但很有回報。" }
          ],
          tips: [
            { en: "The phrase **Qu'est-ce que tu fais ?** can be confusing because it can mean 'What are you doing right now?' or 'What do you do for a living?'.", zh: "**Qu'est-ce que tu fais ?** 這個句子可能會讓人困惑，因為它既可以指「你現在正在做什麼？」，也可以指「你的職業是什麼？」" },
            { en: "The context and the tone of the conversation usually help clarify the meaning. You can also use **Qu'est-ce que tu fais dans la vie ?** to specifically ask about a job.", zh: "上下文和語氣通常有助於釐清意思。你也可以用 **Qu'est-ce que tu fais dans la vie ?** 來明確地詢問職業。" }
          ]
        }
      ]
    },
    {
      lessonId: 7,
      title: "Lesson 7 – Les Questions (Question Words)",
      title_zh: "學習法語疑問詞",
      theme: "how, who, what, where, when, why, which and how much/many",
      theme_zh: "怎麼樣、誰、什麼、哪裡、何時、為什麼、哪一個以及多少",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Les questions de base – Basic Question Words",
          title_zh: "第一級（A1）：基本疑問詞",
          keyPhrases: [
            { text: "Comment", en: "How", zh: "怎麼樣" },
            { text: "Qui", en: "Who", zh: "誰" },
            { text: "Qu'est-ce que / Que", en: "What", zh: "什麼" },
            { text: "Où", en: "Where", zh: "哪裡" }
          ],
          dialogues: [
            { speaker: "Female", text: "Comment ça va?", en: "How are you?", zh: "你好嗎？" },
            { speaker: "Female", text: "Qui est-ce?", en: "Who is this?", zh: "這是誰？" },
            { speaker: "Female", text: "Qu'est-ce que tu fais aujourd'hui?", en: "What are you doing today?", zh: "你今天做什麼？" },
            { speaker: "Female", text: "Où vas-tu?", en: "Where are you going?", zh: "你去哪裡？" },
            { speaker: "Female", text: "Où sont les toilettes?", en: "Where is the bathroom?", zh: "洗手間在哪裡？" }
          ],
          tips: [
            { en: "**Comment** — used to ask about manner or condition, like asking 'how' someone is.", zh: "**Comment** — 用來詢問方式或狀態，相當於中文的「怎麼樣、如何」。" },
            { en: "**Qui** — used to ask about a person. It's for the subject of the sentence.", zh: "**Qui** — 用來詢問人是誰，作為句子的主語。" },
            { en: "**Qu'est-ce que / Que** — means 'what'. Use *Qu'est-ce que* for full sentences, or *Que* in a more formal style or when the object is at the end.", zh: "**Qu'est-ce que / Que** — 意思是「什麼」。通常在完整句子中使用 **Qu'est-ce que**，而 **Que** 較常用於正式語境或當「什麼」是句子的受詞時。" },
            { en: "**Où** — used for locations or destinations.", zh: "**Où** — 用來詢問地點或目的地，相當於中文的「哪裡」。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Plus de questions – More Question Words",
          title_zh: "第二級（A1）：更多疑問詞",
          keyPhrases: [
            { text: "Quand", en: "When", zh: "何時" },
            { text: "Pourquoi", en: "Why", zh: "為什麼" },
            { text: "Quel / Quelle", en: "Which", zh: "哪一個" },
            { text: "Combien", en: "How much / How many", zh: "多少" }
          ],
          dialogues: [
            { speaker: "Female", text: "Quand part le train?", en: "When does the train leave?", zh: "火車什麼時候開？" },
            { speaker: "Female", text: "Pourquoi n'es-tu pas venu ce matin?", en: "Why didn’t you come this morning?", zh: "你今天早上為什麼沒來？" },
            { speaker: "Female", text: "Quel gâteau veux-tu?", en: "Which cake do you want?", zh: "你想要哪一種蛋糕？" },
            { speaker: "Female", text: "Combien d'amis as-tu en France?", en: "How many friends do you have in France?", zh: "你在法國有幾個朋友？" },
            { speaker: "Female", text: "Pourquoi aimes-tu tant le café?", en: "Why do you like coffee so much?", zh: "你為什麼這麼喜歡咖啡？" }
          ],
          tips: [
            { en: "**Quand** — for asking about time or a specific moment.", zh: "**Quand** — 用來詢問時間或特定時刻。" },
            { en: "**Pourquoi** — for asking the reason for something. The answer often starts with *parce que* (because).", zh: "**Pourquoi** — 用來詢問原因，回答時通常會用 *parce que*（因為）開頭。" },
            { en: "**Quel / Quelle** — a pronoun that must agree in gender with the noun it refers to. **Quel** is for masculine nouns, **Quelle** is for feminine nouns.", zh: "**Quel / Quelle** — 這個疑問詞要根據後面的名詞來變化陰陽性。**Quel** 用於陽性名詞，**Quelle** 用於陰性名詞。" },
            { en: "**Combien** — used for quantity. If followed by a noun, you must add *de* (of) after it, like *Combien de*.", zh": "**Combien** — 用來詢問數量。如果後面接名詞，必須加上 *de*，例如 *Combien de*。" }
          ]
        }
      ]
    },
    {
      lessonId: 8,
      title: "Lesson 8 - The Verb 'être' & Pronouns",
      title_zh: "第八課 - 動詞 'être' 與代名詞",
      theme: "Introducing yourself and others, subject pronouns, and possessive pronouns",
      theme_zh: "介紹自己與他人、主詞代名詞、所有格代名詞",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Introducing Yourself and Others",
          title_zh: "第一級（A1）：介紹自己和他人",
          keyPhrases: [
            { text: "Je suis...", en: "I am...", zh: "我是..." },
            { text: "Tu es...?", en: "Are you...?", zh: "你是...嗎？" },
            { text: "C'est...", en: "This is...", zh: "這是..." },
            { text: "Qui est-ce ?", en: "Who is this?", zh: "這是誰？" }
          ],
          dialogues: [
            { speaker: "A", text: "Salut ! Tu es Paul ?", en: "Hi! Are you Paul?", zh: "嗨！你是保羅嗎？" },
            { speaker: "B", text: "Oui, je suis Paul. Et toi, tu es Emma ?", en: "Yes, I am Paul. And you, are you Emma?", zh: "對，我是保羅。你呢，你是艾瑪嗎？" },
            { speaker: "A", text: "Oui, c'est ça, je suis Emma. Et qui est-ce ? C'est ton ami ?", en: "Yes, that's right, I'm Emma. And who is this? Is he your friend?", zh: "對，沒錯，我是艾瑪。這是誰？他是你朋友嗎？" },
            { speaker: "B", text: "Oui, c'est mon ami Marc. Marc, c'est Emma.", en: "Yes, this is my friend Marc. Marc, this is Emma.", zh: "對，這是我朋友馬克。馬克，這是艾瑪。" }
          ],
          tips: [
            { en: "The verb **être** (to be) is one of the most important verbs in French. Here is the conjugation for the pronouns we've learned: **Je suis** (I am), **Tu es** (You are), **Il/Elle est** (He/She is).", zh: "動詞 **être** (是) 是法語中最重要的動詞之一。這是我們學過的主詞代名詞變化：**Je suis** (我是), **Tu es** (你是), **Il/Elle est** (他/她是)。" },
            { en: "Use **C'est...** to introduce someone or something. It literally means 'it is' or 'this is'. In an introductory context, it can refer to a person.", zh: "用 **C'est...** 來介紹某人或某物。字面上是「這是」或「它是」，但在介紹情境中也可以指「他是」或「她是」。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Meet the French Subject Pronouns",
          title_zh: "第二級（A1）：認識法語主詞代名詞",
          keyPhrases: [
            { text: "je suis", en: "I am", zh: "我是" },
            { text: "tu es", en: "you are (informal)", zh: "你是（非正式）" },
            { text: "il / elle est", en: "he / she is", zh: "他／她是" },
            { text: "nous sommes", en: "we are", zh: "我們是" },
            { text: "vous êtes", en: "you are (formal / plural)", zh: "你是（正式）／你們是" },
            { text: "ils / elles sont", en: "they are", zh: "他們／她們是" }
          ],
          dialogues: [
            { speaker: "A", text: "Nous sommes des étudiants, et vous ?", en: "We are students, and you?", zh: "我們是學生，你們呢？" },
            { speaker: "B", text: "Nous sommes aussi étudiants. Il est français et elle est belge. Et vous, d'où êtes-vous ?", en: "We are also students. He is French and she is Belgian. And you, where are you from?", zh: "我們也是學生。他是法國人，她是比利時人。你們呢，來自哪裡？" },
            { speaker: "A", text: "Moi, je suis chinois et elle est taïwanaise. Nous sommes tous les deux des étudiants en échange.", en: "Me, I am Chinese and she is Taiwanese. We are both exchange students.", zh: "我，我是中國人，而她是台灣人。我們都是交換學生。" }
          ],
          tips: [
            { en: "The verb **être** has a different form for each subject pronoun. You need to memorize all of them: **suis**, **es**, **est**, **sommes**, **êtes**, **sont**.", zh: "動詞 **être** 的每個人稱都有不同的形式。你需要將它們全部記住：**suis**, **es**, **est**, **sommes**, **êtes**, **sont**。" },
            { en: "Use **vous** when speaking to more than one person, or to a single person in a formal context (e.g., a boss, a stranger). Use **tu** for friends and family.", zh: "當你與一個以上的人說話，或是在正式場合（例如老闆、陌生人）對單獨一人說話時，使用 **vous**。對朋友和家人則使用 **tu**。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Possessive Adjectives",
          title_zh: "第三級（A1）：所有格形容詞",
          keyPhrases: [
            { text: "mon / ma / mes", en: "my", zh: "我的" },
            { text: "ton / ta / tes", en: "your (informal)", zh: "你的（非正式）" },
            { text: "son / sa / ses", en: "his / her / its", zh: "他／她／它的" },
            { text: "notre / nos", en: "our", zh: "我們的" },
            { text: "votre / vos", en: "your (formal / plural)", zh: "你／你們的" },
            { text: "leur / leurs", en: "their", zh: "他們／她們的" }
          ],
          dialogues: [
            { speaker: "A", text: "C'est ton livre ?", en: "Is this your book?", zh: "這是你的書嗎？" },
            { speaker: "B", text: "Non, ce n'est pas mon livre. C'est son livre, à lui. Et ça, c'est ta voiture ?", "en": "No, this is not my book. It's his book. And this, is it your car?", zh: "不，這不是我的書。那是他的書。那台是你的車嗎？" },
            { speaker: "A", text: "Oui, c'est ma nouvelle voiture. Notre maison est là-bas. Tu vois nos vélos ?", en: "Yes, it's my new car. Our house is over there. Do you see our bikes?", zh: "對，這是我的新車。我們的房子在那邊。你有看到我們的腳踏車嗎？" },
            { speaker: "B", text: "Oui, je vois leurs vélos. Leurs vélos sont très beaux !", en: "Yes, I see their bikes. Their bikes are very nice!", zh: "有，我看到他們的腳踏車。他們的腳踏車很漂亮！" }
          ],
          tips: [
            { en: "In French, the choice of possessive adjective (**mon / ma / mes**) depends on the gender and number of the noun that is being owned, not the gender of the owner.", zh: "在法語中，所有格形容詞（**mon / ma / mes**）的選擇取決於被擁有的名詞的性別和單複數，而不是擁有者的性別。" },
            { en: "For example: **mon livre** (my book - masculine noun), but **ma voiture** (my car - feminine noun).", zh: "例如：**mon livre** (我的書—陽性名詞)，但 **ma voiture** (我的車—陰性名詞)。" },
            { en: "Special rule: Use **mon** instead of **ma** before a feminine noun that starts with a vowel (e.g., **mon amie** - my female friend).", zh": "特殊規則：在以母音開頭的陰性名詞前，用 **mon** 來取代 **ma**（例如：**mon amie** - 我的女性朋友）。" }
          ]
        }
      ]
    }
    // new lesson
  ]
};
