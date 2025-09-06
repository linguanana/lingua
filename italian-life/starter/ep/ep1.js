const episodeData = {
  ep_title: "ep",
  episodeId: 1,
  episode: "🇮🇹 Episode – Italian Starter Dialogues",
  episode_zh: "🇮🇹 初學者義大利語對話",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.70",
  topics: [
    {
      topicId: 1,
      topic: "👋 Greetings and Courtesy Expressions",
      topic_zh: "👋 打招呼與禮貌用語",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Morning greeting on the street",
          scene_zh: "第 1 天 — 街上：早安問候",
          dialogue: [
            { speaker: "Female", text: "Ciao!", en: "Hi!", zh: "嗨！" },
            { speaker: "Male", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "Female", text: "Come stai?", en: "How are you?", zh: "你好嗎？" },
            { speaker: "Male", text: "Sto bene, grazie. E tu?", en: "I’m good, thanks. And you?", zh: "我很好，謝謝。你呢？" },
            { speaker: "Female", text: "Così così.", en: "So-so.", zh: "馬馬虎虎。" },
            { speaker: "Male", text: "Capisco. Buona giornata!", en: "I see. Have a nice day!", zh: "我懂。祝你今天愉快！" },
            { speaker: "Female", text: "Grazie, anche a te!", en: "Thanks, you too!", zh: "謝謝，你也一樣！" },
            { speaker: "Male", text: "A presto!", en: "See you soon!", zh: "回頭見！" },
            { speaker: "Female", text: "Ciao, a dopo!", en: "Bye, see you later!", zh: "掰，待會見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – At school hallway",
          scene_zh: "第 2 天 — 學校走廊",
          dialogue: [
            { speaker: "Male", text: "Ciao, Maria!", en: "Hi, Maria!", zh: "嗨，瑪麗亞！" },
            { speaker: "Female", text: "Ciao, Luca! Come va?", en: "Hi, Luca! How’s it going?", zh: "嗨，盧卡！過得怎麼樣？" },
            { speaker: "Male", text: "Non c’è male.", en: "Not bad.", zh: "還不錯。" },
            { speaker: "Female", text: "Scusa, devo andare in classe.", en: "Sorry, I have to go to class.", zh: "不好意思，我得去上課了。" },
            { speaker: "Male", text: "Nessun problema.", en: "No problem.", zh: "沒問題。" },
            { speaker: "Female", text: "Grazie! A dopo!", en: "Thanks! See you later!", zh: "謝謝！待會兒見！" },
            { speaker: "Male", text: "A più tardi!", en: "See you later!", zh: "待會兒見！" },
            { speaker: "Female", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Evening goodbye",
          scene_zh: "第 3 天 — 晚上的道別",
          dialogue: [
            { speaker: "Female", text: "Buonasera!", en: "Good evening!", zh: "晚上好！" },
            { speaker: "Male", text: "Buonasera! Come stai?", en: "Good evening! How are you?", zh: "晚上好！你好嗎？" },
            { speaker: "Female", text: "Sono stanca.", en: "I’m tired.", zh: "我累了。" },
            { speaker: "Male", text: "Anch’io.", en: "Me too.", zh: "我也是。" },
            { speaker: "Female", text: "Allora, buonanotte!", en: "Well then, good night!", zh: "那麼，晚安！" },
            { speaker: "Male", text: "Buonanotte! A domani!", en: "Good night! See you tomorrow!", zh: "晚安！明天見！" },
            { speaker: "Female", text: "Ciao ciao!", en: "Bye bye!", zh: "掰掰！" },
            { speaker: "Male", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – At a shop: polite request",
          scene_zh: "第 4 天 — 商店：禮貌請求",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, signore.", en: "Good day, sir.", zh: "您好，先生。" },
            { speaker: "Male", text: "Buongiorno, signora. Desidera?", en: "Good day, madam. What would you like?", zh: "您好，女士。需要什麼？" },
            { speaker: "Female", text: "Per favore, una bottiglia d’acqua.", en: "A bottle of water, please.", zh: "請給我一瓶水。" },
            { speaker: "Male", text: "Certo. Ecco a lei.", en: "Sure. Here you are.", zh: "好的。給您。" },
            { speaker: "Female", text: "Mi scusi, quanto costa?", en: "Excuse me, how much is it?", zh: "不好意思，多少錢？" },
            { speaker: "Male", text: "Un euro.", en: "One euro.", zh: "一歐元。" },
            { speaker: "Female", text: "Grazie mille.", en: "Thank you very much.", zh: "非常感謝。" },
            { speaker: "Male", text: "Prego. Buona giornata!", en: "You’re welcome. Have a nice day!", zh: "不客氣。祝你今天愉快！" },
            { speaker: "Female", text: "Arrivederci! A presto!", en: "Goodbye! See you soon!", zh: "再見！回頭見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Quick phone check-in",
          scene_zh: "第 5 天 — 電話上的簡短問候",
          dialogue: [
            { speaker: "Female", text: "Pronto? Ciao!", en: "Hello? Hi!", zh: "喂？嗨！" },
            { speaker: "Male", text: "Ciao! Sono Marco. Come va?", en: "Hi! It’s Marco. How’s it going?", zh: "嗨！我是馬可。過得怎麼樣？" },
            { speaker: "Female", text: "Bene, grazie. E tu?", en: "Good, thanks. And you?", zh: "很好，謝謝。你呢？" },
            { speaker: "Male", text: "Tutto bene.", en: "All good.", zh: "一切都好。" },
            { speaker: "Female", text: "Scusa, sono un po’ occupata.", en: "Sorry, I’m a bit busy.", zh: "不好意思，我有點忙。" },
            { speaker: "Male", text: "Nessun problema.", en: "No problem.", zh: "沒問題。" },
            { speaker: "Female", text: "Grazie per la chiamata!", en: "Thanks for the call!", zh: "謝謝你的來電！" },
            { speaker: "Male", text: "Prego. A presto! Ciao!", en: "You’re welcome. See you soon! Bye!", zh: "不客氣。回頭見！掰！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – On the street: sorry & help",
          scene_zh: "第 6 天 — 街上：道歉與求助",
          dialogue: [
            { speaker: "Male", text: "Oh, scusi!", en: "Oh, sorry!", zh: "喔，不好意思！" },
            { speaker: "Female", text: "Non c’è problema.", en: "No problem.", zh: "沒關係。" },
            { speaker: "Male", text: "Mi dispiace davvero.", en: "I’m really sorry.", zh: "我真的很抱歉。" },
            { speaker: "Female", text: "Tranquillo, va bene.", en: "It’s fine, no worries.", zh: "沒事，別擔心。" },
            { speaker: "Male", text: "Per favore, può aiutarmi?", en: "Please, can you help me?", zh: "請問，您能幫我嗎？" },
            { speaker: "Female", text: "Sì, certo.", en: "Yes, of course.", zh: "可以，當然。" },
            { speaker: "Male", text: "Dov’è la metro?", en: "Where is the metro?", zh: "地鐵在哪裡？" },
            { speaker: "Female", text: "Là, a sinistra.", en: "There, on the left.", zh: "在那邊，左邊。" },
            { speaker: "Male", text: "Grazie mille! Arrivederci!", en: "Thank you very much! Goodbye!", zh: "非常感謝！再見！" },
            { speaker: "Female", text: "Arrivederci! Buona giornata!", en: "Goodbye! Have a nice day!", zh: "再見！祝你有美好的一天！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – On the bus: small courtesy",
          scene_zh: "第 7 天 — 公車上：小小禮讓",
          dialogue: [
            { speaker: "Female", text: "Scusi, questo posto è libero?", en: "Excuse me, is this seat free?", zh: "不好意思，這位子有人坐嗎？" },
            { speaker: "Male", text: "Sì, prego.", en: "Yes, please.", zh: "是的，請坐。" },
            { speaker: "Female", text: "Grazie.", en: "Thank you.", zh: "謝謝。" },
            { speaker: "Male", text: "Di nulla.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Female", text: "Mi scusi, devo scendere.", en: "Excuse me, I need to get off.", zh: "不好意思，我要下車了。" },
            { speaker: "Male", text: "Certo, prego.", en: "Sure, go ahead.", zh: "當然，請。" },
            { speaker: "Female", text: "Buona giornata!", en: "Have a nice day!", zh: "祝你今天愉快！" },
            { speaker: "Male", text: "A presto! Ciao!", en: "See you soon! Bye!", zh: "回頭見！掰！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – At the café: order & farewell",
          scene_zh: "第 8 天 — 咖啡館：點餐與道別",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Un caffè, per favore.", en: "Good morning! An espresso, please.", zh: "早安！一杯濃縮咖啡，謝謝。" },
            { speaker: "Male", text: "Subito. Al banco o al tavolo?", en: "Right away. At the counter or at the table?", zh: "馬上。在吧台還是桌邊？" },
            { speaker: "Female", text: "Al banco, grazie.", en: "At the counter, thanks.", zh: "在吧台，謝謝。" },
            { speaker: "Male", text: "Ecco il caffè.", en: "Here is the coffee.", zh: "您的咖啡好了。" },
            { speaker: "Female", text: "Perfetto. Quanto è?", en: "Perfect. How much is it?", zh: "太好了。多少錢？" },
            { speaker: "Male", text: "Un euro e dieci.", en: "One euro ten.", zh: "一歐元一角。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", en: "Here you go. Thank you so much!", zh: "給您。非常感謝！" },
            { speaker: "Male", text: "Grazie a lei. Buona giornata!", en: "Thanks to you. Have a nice day!", zh: "也謝謝您。祝您有美好的一天！" },
            { speaker: "Female", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Asking the time",
          scene_zh: "第 9 天 — 問時間",
          dialogue: [
            { speaker: "Male", text: "Scusi, che ore sono?", en: "Excuse me, what time is it?", zh: "不好意思，現在幾點？" },
            { speaker: "Female", text: "Sono le tre.", en: "It’s three o’clock.", zh: "三點。" },
            { speaker: "Male", text: "Grazie.", en: "Thank you.", zh: "謝謝。" },
            { speaker: "Female", text: "Prego.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Male", text: "Mi dispiace, ho fretta.", en: "Sorry, I’m in a hurry.", zh: "抱歉，我趕時間。" },
            { speaker: "Female", text: "Va bene, a dopo!", en: "Alright, see you later!", zh: "好的，待會見！" },
            { speaker: "Male", text: "A più tardi! Ciao!", en: "See you later! Bye!", zh: "待會見！掰！" },
            { speaker: "Female", text: "Ciao!", en: "Bye!", zh: "掰掰！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Review: many goodbyes",
          scene_zh: "第 10 天 — 複習：各種再見",
          dialogue: [
            { speaker: "Female", text: "Ciao, come va oggi?", en: "Hi, how are you today?", zh: "嗨，今天好嗎？" },
            { speaker: "Male", text: "Bene, grazie. E tu?", en: "Good, thanks. And you?", zh: "很好，謝謝。你呢？" },
            { speaker: "Female", text: "Non c’è male.", en: "Not bad.", zh: "還不錯。" },
            { speaker: "Male", text: "Devo andare.", en: "I have to go.", zh: "我得走了。" },
            { speaker: "Female", text: "Va bene. Buona serata!", en: "Alright. Have a nice evening!", zh: "好的。祝你晚上愉快！" },
            { speaker: "Male", text: "Grazie! A domani!", en: "Thanks! See you tomorrow!", zh: "謝謝！明天見！" },
            { speaker: "Female", text: "A presto! Arrivederci!", en: "See you soon! Goodbye!", zh: "回頭見！再見！" },
            { speaker: "Male", text: "Ciao ciao!", en: "Bye bye!", zh: "掰掰！" }
          ]
        }
      ]
    },
    {
      topicId: 2,
      topic: "🙋‍♀️ Names, Origins & What You Do",
      topic_zh: "🙋‍♀️ 名字、出身與在做什麼/工作",
      scenes: [

        // Day 1 – First introductions (casual)
        {
          sceneId: 1,
          scene: "Day 1 – First introductions (casual)",
          scene_zh: "第 1 天 – 初次見面（非正式）",
          dialogue: [
            { speaker: "Female", text: "Ciao! Buongiorno.", en: "Hi! Good morning.", zh: "嗨！早安。" },
            { speaker: "Male", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. E tu?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Mi chiamo Carlo.", en: "My name is Carlo.", zh: "我叫 Carlo。" },
            { speaker: "Female", text: "Piacere di conoscerti, Carlo.", en: "Nice to meet you, Carlo.", zh: "幸會，Carlo。" },
            { speaker: "Male", text: "Il piacere è mio, Emily.", en: "The pleasure is mine, Emily.", zh: "我也很高興，Emily。" },
            { speaker: "Female", text: "Sei di qui?", en: "Are you from here?", zh: "你是這裡人嗎？" },
            { speaker: "Male", text: "Sì, sono di Roma. E tu, di dove sei?", en: "Yes, I’m from Rome. Where are you from?", zh: "對，我來自羅馬。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti, dalla California.", en: "I’m from the United States, from California.", zh: "我來自美國，加州。" },
            { speaker: "Male", text: "Che bello! Vivi qui adesso?", en: "Nice! Do you live here now?", zh: "不錯！你現在住這裡嗎？" },
            { speaker: "Female", text: "No, resto vicino al centro per qualche giorno.", en: "No, I’m staying near the center for a few days.", zh: "沒有，我在市中心附近住幾天。" },
            { speaker: "Male", text: "Perfetto. A dopo!", en: "Perfect. See you later!", zh: "太好了。待會見！" }
          ]
        },

        // Day 2 – Formal introductions (reception)
        {
          sceneId: 2,
          scene: "Day 2 – Formal introductions (reception)",
          scene_zh: "第 2 天 – 正式介紹（櫃台）",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, signore. Come si chiama?", en: "Good morning, sir. What’s your name?", zh: "早安，先生。您貴姓？" },
            { speaker: "Male", text: "Buongiorno. Mi chiamo Carlo Rossi.", en: "Good morning. My name is Carlo Rossi.", zh: "早安。我叫 Carlo Rossi。" },
            { speaker: "Female", text: "Piacere, signor Rossi.", en: "Nice to meet you, Mr. Rossi.", zh: "幸會，Rossi 先生。" },
            { speaker: "Male", text: "Il piacere è mio. Lei è la signorina Laura?", en: "The pleasure is mine. Are you Miss Laura?", zh: "我也很高興。您是 Laura 小姐嗎？" },
            { speaker: "Female", text: "Sì, sono Laura Bianchi.", en: "Yes, I’m Laura Bianchi.", zh: "是的，我是 Laura Bianchi。" },
            { speaker: "Male", text: "Incantato, signora Bianchi.", en: "Nice to meet you, Ms. Bianchi.", zh: "很高興認識您，Bianchi 女士。" },
            { speaker: "Female", text: "Mi scusi, può firmare qui, per favore?", en: "Excuse me, can you sign here, please?", zh: "不好意思，請您在這裡簽名，好嗎？" },
            { speaker: "Male", text: "Certo. Ecco qua.", en: "Of course. Here you go.", zh: "當然。給您。" },
            { speaker: "Female", text: "Grazie mille. Di dov’è, signore?", en: "Thank you very much. Where are you from?", zh: "非常感謝。您來自哪裡？" },
            { speaker: "Male", text: "Sono di Milano, ma vivo a Roma.", en: "I’m from Milan, but I live in Rome.", zh: "我來自米蘭，但住在羅馬。" },
            { speaker: "Female", text: "Perfetto. Benvenuto e buona giornata!", en: "Perfect. Welcome and have a nice day!", zh: "太好了。歡迎您。祝您今天愉快！" },
            { speaker: "Male", text: "Grazie, altrettanto. Arrivederci.", en: "Thanks, same to you. See you later.", zh: "謝謝，您也是。待會見。" }
          ]
        },

        // Day 3 – Where are you from & where do you live?
        {
          sceneId: 3,
          scene: "Day 3 – Where are you from & where do you live?",
          scene_zh: "第 3 天 – 你來自哪裡／住在哪裡？",
          dialogue: [
            { speaker: "Female", text: "Ciao, di dove sei?", en: "Hi, where are you from?", zh: "嗨，你來自哪裡？" },
            { speaker: "Male", text: "Sono del Cile. E tu?", en: "I’m from Chile. And you?", zh: "我來自智利。你呢？" },
            { speaker: "Female", text: "Vengo dal Messico; ora vivo a Firenze.", en: "I come from Mexico; now I live in Florence.", zh: "我來自墨西哥；現在住在佛羅倫斯。" },
            { speaker: "Male", text: "Ah, che bello. Io vivo a Roma.", en: "Oh, how nice. I live in Rome.", zh: "哇，不錯。我住在羅馬。" },
            { speaker: "Female", text: "Ti piace Roma?", en: "Do you like Rome?", zh: "你喜歡羅馬嗎？" },
            { speaker: "Male", text: "Sì, molto. E Firenze?", en: "Yes, a lot. And Florence?", zh: "是，非常喜歡。那佛羅倫斯呢？" },
            { speaker: "Female", text: "Anche a me piace. In che quartiere vivi?", en: "I like it too. Which neighborhood do you live in?", zh: "我也喜歡。你住在哪個區？" },
            { speaker: "Male", text: "Vivo a Trastevere. E tu?", en: "I live in Trastevere. And you?", zh: "我住在 Trastevere。你呢？" },
            { speaker: "Female", text: "Vivo vicino a Campo de’ Fiori.", en: "I live near Campo de’ Fiori.", zh: "我住在鮮花廣場附近。" },
            { speaker: "Male", text: "Sei qui in vacanza o lavori qui?", en: "Are you here on vacation or do you work here?", zh: "你是來度假，還是在這裡工作？" },
            { speaker: "Female", text: "Lavoro qui, sono insegnante.", en: "I work here; I’m a teacher.", zh: "我在這裡工作；我是老師。" },
            { speaker: "Male", text: "Io sono ingegnere. Piacere di conoscerti!", en: "I’m an engineer. Nice to meet you!", zh: "我是工程師。很高興認識你！" }
          ]
        },
        // Day 4 – Hotel lobby: greetings, names & origin
        {
          sceneId: 4,
          scene: "Day 4 – Hotel lobby: greetings, names & origin",
          scene_zh: "第 4 天 – 飯店大廳：打招呼、名字與來自哪裡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. E tu?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Sono Carlo. Piacere.", en: "I’m Carlo. Nice to meet you.", zh: "我是 Carlo。幸會。" },
            { speaker: "Female", text: "Piacere, Carlo. Sei di Roma?", en: "Nice to meet you, Carlo. Are you from Rome?", zh: "幸會，Carlo。你是羅馬人嗎？" },
            { speaker: "Male", text: "Sì, sono di qui. E tu di dove sei?", en: "Yes, I’m from here. Where are you from?", zh: "是的，我在地人。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti. Vivo in California.", en: "I’m from the United States. I live in California.", zh: "我來自美國，住在加州。" },
            { speaker: "Male", text: "Che bello! Ti fermi vicino al centro?", en: "Nice! Are you staying near the center?", zh: "太好了！你住在市中心附近嗎？" },
            { speaker: "Female", text: "Sì, all’Hotel Centrale, a due minuti da Piazza Venezia.", en: "Yes, at Hotel Centrale, two minutes from Piazza Venezia.", zh: "是的，住在 Centrale 飯店，離威尼斯廣場走路兩分鐘。" },
            { speaker: "Male", text: "Perfetto. Quanti giorni resti a Roma?", en: "Perfect. How many days are you staying in Rome?", zh: "太好了。你在羅馬待幾天？" },
            { speaker: "Female", text: "Quattro giorni. Oggi riposo un po’.", en: "Four days. Today I’m just resting a bit.", zh: "四天。今天先休息一下。" },
            { speaker: "Male", text: "Capisco. Benvenuta e buona permanenza.", en: "I understand. Welcome and have a nice stay.", zh: "了解。歡迎你，祝你入住愉快。" },
            { speaker: "Female", text: "Grazie, Carlo. A dopo!", en: "Thanks, Carlo. See you later!", zh: "謝謝你，Carlo。待會見！" }
          ]
        },

        // Day 5 – Café: where you’re from & where you stay
        {
          sceneId: 5,
          scene: "Day 5 – Café: where you’re from & where you stay",
          scene_zh: "第 5 天 – 咖啡館：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Ciao, Emily! Come stai oggi?", en: "Hi, Emily! How are you today?", zh: "嗨，Emily！今天好嗎？" },
            { speaker: "Female", text: "Molto bene, grazie. E tu, Carlo?", en: "Very well, thanks. And you, Carlo?", zh: "很好，謝謝。你呢，Carlo？" },
            { speaker: "Male", text: "Bene anch’io. Sei sempre all’Hotel Centrale?", en: "Good too. Are you still at Hotel Centrale?", zh: "也不錯。你還住在 Centrale 嗎？" },
            { speaker: "Female", text: "Sì, mi piace perché è vicino alla metro.", en: "Yes, I like it because it’s close to the metro.", zh: "是的，我喜歡它離地鐵很近。" },
            { speaker: "Male", text: "Fantastico. Di dove sei?", en: "Great. Where are you from?", zh: "太好了。你來自哪裡？" },
            { speaker: "Female", text: "Sono di Los Angeles.", en: "I’m from Los Angeles.", zh: "我來自洛杉磯。" },
            { speaker: "Male", text: "Interessante. Cosa fai oggi pomeriggio?", en: "Interesting. What are you doing this afternoon?", zh: "有意思。你今天下午做什麼？" },
            { speaker: "Female", text: "Passeggiare in centro e visitare Piazza Navona.", en: "Walk around downtown and visit Piazza Navona.", zh: "在市中心走走，去納沃納廣場。" },
            { speaker: "Male", text: "Bel programma. Se hai bisogno di aiuto, dimmi.", en: "Good plan. If you need help, tell me.", zh: "不錯的計畫。需要幫忙就跟我說。" },
            { speaker: "Female", text: "Grazie. A dopo!", en: "Thanks. See you later!", zh: "謝謝。待會見！" }
          ]
        },
        // Day 6 – Villa Borghese: what you do & what you’re doing now
        {
          sceneId: 6,
          scene: "Day 6 – Villa Borghese: what you do & what you’re doing now",
          scene_zh: "第 6 天 – 博爾蓋塞別墅：你的工作與你現在在做什麼",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, Carlo! Cosa fai oggi?", en: "Good morning, Carlo! What are you doing today?", zh: "早安，Carlo！你今天在做什麼？" },
            { speaker: "Male", text: "Passeggio a Villa Borghese. E tu?", en: "I’m strolling in Villa Borghese. And you?", zh: "我在博爾蓋塞別墅散步。你呢？" },
            { speaker: "Female", text: "Prendo un caffè e leggo un po’.", en: "I’m having a coffee and reading a bit.", zh: "我喝咖啡、看一下書。" },
            { speaker: "Male", text: "Suona bene. Che lavoro fai?", en: "Sounds good. What’s your job?", zh: "聽起來不錯。你做什麼工作？" },
            { speaker: "Female", text: "Sono insegnante. E tu?", en: "I’m a teacher. And you?", zh: "我是老師。你呢？" },
            { speaker: "Male", text: "Lavoro in ufficio e studio la sera.", en: "I work in an office and study in the evenings.", zh: "我在辦公室上班，傍晚去念書。" },
            { speaker: "Female", text: "Interessante! Vivi qui a Roma?", en: "Interesting! Do you live here in Rome?", zh: "真有趣！你住在羅馬嗎？" },
            { speaker: "Male", text: "Sì, vivo vicino a Termini. E tu dove stai adesso?", en: "Yes, I live near Termini. And where are you staying now?", zh: "是的，我住在特米尼附近。你現在住哪裡？" },
            { speaker: "Female", text: "All’Hotel Centrale, vicino alla metro.", en: "At Hotel Centrale, near the metro.", zh: "在 Centrale 飯店，靠近地鐵。" },
            { speaker: "Male", text: "È comodo.", en: "It’s convenient.", zh: "很方便。" },
            { speaker: "Female", text: "Sì. Poi vado in centro.", en: "Yes. Later I’m going downtown.", zh: "是啊。等一下要去市中心。" },
            { speaker: "Male", text: "Ottimo piano! Ci vediamo stasera in hotel.", en: "Great plan! See you tonight in the hotel.", zh: "好主意！今晚在飯店見。" },
            { speaker: "Female", text: "Va bene. A dopo!", en: "Alright. See you later!", zh: "好的。待會見！" }
          ]
        },
        // Day 7 – Hotel lobby: names & stay
        {
          sceneId: 7,
          scene: "Day 7 – Hotel lobby: names & stay",
          scene_zh: "第 7 天 – 飯店大廳：名字與住宿",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Male", text: "Buongiorno. Mi chiamo Carlo. E tu?", en: "Good morning. My name is Carlo. And you?", zh: "早安。我叫 Carlo。你呢？" },
            { speaker: "Female", text: "Mi chiamo Emily. Piacere.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Incantato, Emily. Di dove sei?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti, della California. E tu?", en: "I’m from the United States, from California. And you?", zh: "我來自美國，加州。你呢？" },
            { speaker: "Male", text: "Sono di Roma. Dove stai adesso?", en: "I’m from Rome. Where are you staying now?", zh: "我來自羅馬。你現在住哪裡？" },
            { speaker: "Female", text: "Sto all’Hotel Centrale, vicino al centro.", en: "I’m staying at Hotel Centrale, near the center.", zh: "我住在 Centrale 飯店，靠近市中心。" },
            { speaker: "Male", text: "Perfetto. Cosa fai oggi?", en: "Perfect. What are you doing today?", zh: "太好了。你今天在做什麼？" },
            { speaker: "Female", text: "Adesso faccio il check-in e poi passeggio in piazza.", en: "Now I’m checking in and then I’ll walk around the square.", zh: "我先辦理入住，之後去廣場走走。" },
            { speaker: "Male", text: "Bene. Io lavoro qui vicino; esco alle sei.", en: "Good. I work nearby; I get off at six.", zh: "好。我在附近上班；六點下班。" },
            { speaker: "Female", text: "Geniale. Ci vediamo nel pomeriggio!", en: "Great. See you in the afternoon!", zh: "太好了。下午見！" },
            { speaker: "Male", text: "A dopo!", en: "See you later!", zh: "待會見！" }
          ]
        },

        // Day 8 – Piazza: where you're from & live
        {
          sceneId: 8,
          scene: "Day 8 – Piazza: where you're from & live",
          scene_zh: "第 8 天 – 廣場：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Ciao! Come va, Emily?", en: "Hi! How’s it going, Emily?", zh: "嗨！最近如何，Emily？" },
            { speaker: "Female", text: "Molto bene, grazie. E tu, Carlo?", en: "Very well, thanks. And you, Carlo?", zh: "很好，謝謝。你呢，Carlo？" },
            { speaker: "Male", text: "Bene. Vivi negli Stati Uniti?", en: "Good. Do you live in the United States?", zh: "不錯。你住在美國嗎？" },
            { speaker: "Female", text: "Sì, vivo a San Diego, in California.", en: "Yes, I live in San Diego, in California.", zh: "對，我住在加州的聖地牙哥。" },
            { speaker: "Male", text: "Io vivo a Roma, vicino al parco.", en: "I live in Rome, near the park.", zh: "我住在羅馬，公園附近。" },
            { speaker: "Female", text: "E la tua famiglia, di dove è?", en: "And where is your family from?", zh: "那你的家人來自哪裡？" },
            { speaker: "Male", text: "La mia famiglia è di Napoli.", en: "My family is from Naples.", zh: "我家人來自拿坡里。" },
            { speaker: "Female", text: "Che lavoro fai?", en: "What do you do (for work)?", zh: "你的工作是什麼？" },
            { speaker: "Male", text: "Sono designer e lavoro in centro.", en: "I’m a designer and I work downtown.", zh: "我是設計師，在市中心上班。" },
            { speaker: "Female", text: "Interessante. Io lavoro nella tecnologia.", en: "Interesting. I work in tech.", zh: "有意思。我在科技業。" },
            { speaker: "Male", text: "Perfetto. Prendiamo un caffè e continuiamo a parlare.", en: "Perfect. Let’s have a coffee and keep talking.", zh: "太好了。我們喝杯咖啡再聊。" },
            { speaker: "Female", text: "Certo. Grazie per l’invito.", en: "Sure. Thanks for the invitation.", zh: "好的。謝謝邀請。" }
          ]
        },

        // Day 9 – Class circle: names & where from
        {
          sceneId: 9,
          scene: "Day 9 – Class circle: names & where from",
          scene_zh: "第 9 天 – 語言課：自我介紹",
          dialogue: [
            { speaker: "Female", text: "Buon pomeriggio. Mi chiamo Emily.", en: "Good afternoon. My name is Emily.", zh: "午安。我叫 Emily。" },
            { speaker: "Male", text: "Piacere, Emily. Io sono Daniele.", en: "Nice to meet you, Emily. I’m Daniele.", zh: "幸會，Emily。我是 Daniele。" },
            { speaker: "Female", text: "Piacere, Daniele. Di dove sei?", en: "Nice to meet you, Daniele. Where are you from?", zh: "很高興認識你，Daniele。你來自哪裡？" },
            { speaker: "Male", text: "Sono di Boston, negli Stati Uniti. E tu?", en: "I’m from Boston, in the United States. And you?", zh: "我來自美國波士頓。你呢？" },
            { speaker: "Female", text: "Sono della California. Vivo a San Diego.", en: "I’m from California. I live in San Diego.", zh: "我來自加州，住在聖地牙哥。" },
            { speaker: "Male", text: "Dove stai ora a Roma?", en: "Where are you staying now in Rome?", zh: "你現在在羅馬住在哪裡？" },
            { speaker: "Female", text: "Sto in un hotel vicino a Termini.", en: "I’m staying in a hotel near Termini.", zh: "我住在特米尼附近的一家飯店。" },
            { speaker: "Male", text: "Che bello. Io sto in un piccolo appartamento.", en: "Nice. I’m staying in a small apartment.", zh: "不錯。我住在一間小公寓。" },
            { speaker: "Female", text: "Cosa fai dopo la lezione?", en: "What are you doing after class?", zh: "下課之後你要做什麼？" },
            { speaker: "Male", text: "Vado al museo e poi ceno con amici.", en: "I’m going to the museum and then having dinner with friends.", zh: "我要去博物館，之後和朋友吃晚餐。" },
            { speaker: "Female", text: "Perfetto. Ci vediamo domani!", en: "Perfect. See you tomorrow!", zh: "太好了。明天見！" },
            { speaker: "Male", text: "A domani! Grazie per la chiacchierata.", en: "See you tomorrow! Thanks for the chat.", zh: "明天見！謝謝聊天。" }
          ]
        },

        // Day 10 – Train: quick intro & plans
        {
          sceneId: 10,
          scene: "Day 10 – Train: quick intro & plans",
          scene_zh: "第 10 天 – 火車上：快速認識與行程",
          dialogue: [
            { speaker: "Female", text: "Scusi, questo posto è libero?", en: "Excuse me, is this seat free?", zh: "不好意思，這個位子有人嗎？" },
            { speaker: "Male", text: "Sì, prego. Sono Luigi. Come ti chiami?", en: "Yes, please. I’m Luigi. What’s your name?", zh: "請坐。我是 Luigi。你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. Piacere.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Piacere, Emily. Di dove sei?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti. E tu?", en: "I’m from the United States. And you?", zh: "我來自美國。你呢？" },
            { speaker: "Male", text: "Sono di Napoli. Dove stai lì?", en: "I’m from Naples. Where are you staying there?", zh: "我來自拿坡里。你到那邊住哪裡？" },
            { speaker: "Female", text: "Sto in un hotel vicino alla stazione.", en: "I’m staying at a hotel near the station.", zh: "我住在車站附近的一家飯店。" },
            { speaker: "Male", text: "Perfetto. Cosa fai adesso sul treno?", en: "Perfect. What are you doing now on the train?", zh: "太好了。你現在在火車上做什麼呢？" },
            { speaker: "Female", text: "Leggo un po’ e ascolto musica.", en: "I’m reading a bit and listening to music.", zh: "我看看書、聽聽音樂。" },
            { speaker: "Male", text: "Benissimo. Io controllo le mail di lavoro.", en: "Very good. I’m checking work emails.", zh: "很好。我在看工作郵件。" },
            { speaker: "Female", text: "Che produttivo. Buon viaggio!", en: "So productive. Have a good trip!", zh: "很有效率。旅途愉快！" },
            { speaker: "Male", text: "Grazie. A dopo!", en: "Thanks. See you later!", zh: "謝謝。待會見！" }
          ]
        }
      ]
    },
    {
      topicId: 3,
      topic: "❓ Le Domande – Question Words",
      topic_zh: "❓ 問句與疑問詞",
      scenes: [

        // Day 1 – Chi, Come, Dove
        {
          sceneId: 1,
          scene: "Day 1 – Meeting a new friend",
          scene_zh: "第 1 天 – 認識新朋友",
          dialogue: [
            { speaker: "Male", text: "Ciao! Come stai?", en: "Hi! How are you?", zh: "嗨！你怎麼樣？" },
            { speaker: "Female", text: "Bene, grazie. E tu?", en: "Fine, thanks. And you?", zh: "很好，謝謝。你呢？" },
            { speaker: "Male", text: "Anch’io bene. Chi è con te?", en: "I’m good too. Who is with you?", zh: "我也不錯。跟你在一起的是誰？" },
            { speaker: "Female", text: "È mia sorella, si chiama Anna.", en: "It’s my sister, her name is Anna.", zh: "她是我妹妹，叫 Anna。" },
            { speaker: "Male", text: "Piacere! Dove abita lei?", en: "Nice to meet her! Where does she live?", zh: "幸會！她住在哪裡？" },
            { speaker: "Female", text: "Abita a Milano, vicino al centro.", en: "She lives in Milan, near the center.", zh: "她住在米蘭市中心附近。" },
            { speaker: "Male", text: "Davvero? E tu di dove sei?", en: "Really? And where are you from?", zh: "真的嗎？那你是從哪裡來的？" },
            { speaker: "Female", text: "Io sono di Firenze, ma adesso vivo a Roma.", en: "I’m from Florence, but now I live in Rome.", zh: "我來自佛羅倫斯，但現在住在羅馬。" },
            { speaker: "Male", text: "Interessante! Da quanto tempo vivi a Roma?", en: "Interesting! How long have you lived in Rome?", zh: "有趣！你在羅馬住多久了？" },
            { speaker: "Female", text: "Da due anni.", en: "For two years.", zh: "兩年了。" },
            { speaker: "Male", text: "Capisco. Allora magari ci vediamo ancora!", en: "I see. Then maybe we’ll see each other again!", zh: "我明白了。那我們或許還會再見！" },
            { speaker: "Female", text: "Certo, a presto!", en: "Of course, see you soon!", zh: "當然，回頭見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – At a café",
          scene_zh: "第 2 天 – 在咖啡館",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Cosa prendi oggi?", en: "Good morning! What are you having today?", zh: "早安！你今天要喝什麼？" },
            { speaker: "Male", text: "Prendo un cappuccino. E tu?", en: "I’ll have a cappuccino. And you?", zh: "我要一杯卡布奇諾。你呢？" },
            { speaker: "Female", text: "Io prendo un tè verde.", en: "I’ll have a green tea.", zh: "我要一杯綠茶。" },
            { speaker: "Male", text: "Perché non prendi il caffè oggi?", en: "Why aren’t you having coffee today?", zh: "你今天怎麼不喝咖啡？" },
            { speaker: "Female", text: "Perché sono un po’ stanca.", en: "Because I’m a bit tired.", zh: "因為我有點累。" },
            { speaker: "Male", text: "Capisco. Quanto costa il cappuccino qui?", en: "I see. How much does the cappuccino cost here?", zh: "我懂。這裡的卡布奇諾多少錢？" },
            { speaker: "Female", text: "Costa due euro e cinquanta.", en: "It costs two euros and fifty.", zh: "要兩歐五。" },
            { speaker: "Male", text: "Non è caro. Quale bar preferisci di solito?", en: "That’s not expensive. Which café do you usually prefer?", zh: "不貴啊。你平常喜歡哪一家咖啡館？" },
            { speaker: "Female", text: "Mi piace questo bar perché è tranquillo.", en: "I like this café because it’s quiet.", zh: "我喜歡這家，因為很安靜。" },
            { speaker: "Male", text: "Ottimo. Allora ci vediamo qui domani?", en: "Great. So shall we meet here tomorrow?", zh: "太好了。那我們明天在這裡見？" },
            { speaker: "Female", text: "Sì, domani mattina alle dieci.", en: "Yes, tomorrow morning at ten.", zh: "對，明天早上十點。" },
            { speaker: "Male", text: "Perfetto, a domani!", en: "Perfect, see you tomorrow!", zh: "太好了，明天見！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Making plans",
          scene_zh: "第 3 天 – 訂計劃",
          dialogue: [
            { speaker: "Male", text: "Quando parti per Firenze?", en: "When are you leaving for Florence?", zh: "你什麼時候出發去佛羅倫斯？" },
            { speaker: "Female", text: "Parto domani mattina presto.", en: "I’m leaving tomorrow morning early.", zh: "我明天一大早出發。" },
            { speaker: "Male", text: "Davvero? Quale treno prendi?", en: "Really? Which train are you taking?", zh: "真的嗎？你搭哪一班火車？" },
            { speaker: "Female", text: "Prendo il treno delle otto e mezza.", en: "I’m taking the eight-thirty train.", zh: "我要搭八點半的火車。" },
            { speaker: "Male", text: "E dove ti siedi di solito? Vicino al finestrino?", en: "And where do you usually sit? By the window?", zh: "你通常坐哪裡？靠窗嗎？" },
            { speaker: "Female", text: "Sì, preferisco il finestrino.", en: "Yes, I prefer the window seat.", zh: "是的，我喜歡靠窗的位置。" },
            { speaker: "Male", text: "Quanto dura il viaggio?", en: "How long is the trip?", zh: "旅程多久？" },
            { speaker: "Female", text: "Circa un’ora e mezza.", en: "About an hour and a half.", zh: "大概一個半小時。" },
            { speaker: "Male", text: "Perché vai a Firenze?", en: "Why are you going to Florence?", zh: "你為什麼要去佛羅倫斯？" },
            { speaker: "Female", text: "Perché voglio visitare un’amica.", en: "Because I want to visit a friend.", zh: "因為我要去看一個朋友。" },
            { speaker: "Male", text: "Che bello! Allora buon viaggio.", en: "That’s nice! Have a good trip.", zh: "真好啊！祝你旅途愉快。" },
            { speaker: "Female", text: "Grazie mille! Ci sentiamo presto.", en: "Thanks a lot! Talk to you soon.", zh: "非常感謝！回頭再聊。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Nationalities",
          scene_zh: "第 4 天 – 國籍",
          dialogue: [
            { speaker: "Male", text: "Ciao! Di dove sei?", en: "Hi! Where are you from?", zh: "嗨！你是哪裡人？" },
            { speaker: "Female", text: "Sono di Parigi. E tu?", en: "I’m from Paris. And you?", zh: "我來自巴黎。你呢？" },
            { speaker: "Male", text: "Io sono di Roma.", en: "I’m from Rome.", zh: "我來自羅馬。" },
            { speaker: "Female", text: "Interessante! Qual è la tua nazionalità?", en: "Interesting! What’s your nationality?", zh: "有趣！你的國籍是什麼？" },
            { speaker: "Male", text: "Sono italiano. E tu, sei francese?", en: "I’m Italian. And you, are you French?", zh: "我是義大利人。你是法國人嗎？" },
            { speaker: "Female", text: "Sì, sono francese.", en: "Yes, I’m French.", zh: "是的，我是法國人。" },
            { speaker: "Male", text: "Conosci anche altre lingue?", en: "Do you also know other languages?", zh: "你還會其他語言嗎？" },
            { speaker: "Female", text: "Sì, parlo anche inglese e un po’ di spagnolo.", en: "Yes, I also speak English and a bit of Spanish.", zh: "會，我還會英語和一點西班牙語。" },
            { speaker: "Male", text: "Bravissima! Io parlo solo italiano.", en: "Very good! I only speak Italian.", zh: "太棒了！我只會義大利語。" },
            { speaker: "Female", text: "Non c’è problema, possiamo praticare insieme.", en: "No problem, we can practice together.", zh: "沒問題，我們可以一起練習。" },
            { speaker: "Male", text: "Ottima idea. A domani!", en: "Great idea. See you tomorrow!", zh: "好主意。明天見！" },
            { speaker: "Female", text: "A domani, ciao!", en: "See you tomorrow, bye!", zh: "明天見，再見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Asking directions",
          scene_zh: "第 5 天 – 問路",
          dialogue: [
            { speaker: "Male", text: "Scusi, dov’è la stazione?", en: "Excuse me, where is the station?", zh: "請問，火車站在哪裡？" },
            { speaker: "Female", text: "È vicino, a dieci minuti a piedi.", en: "It’s close, about ten minutes on foot.", zh: "很近，走路大約十分鐘。" },
            { speaker: "Male", text: "Perfetto. Quale strada devo prendere?", en: "Perfect. Which street should I take?", zh: "太好了。我應該走哪一條路？" },
            { speaker: "Female", text: "Prenda via Garibaldi, poi giri a sinistra.", en: "Take Garibaldi street, then turn left.", zh: "走加里波第街，然後左轉。" },
            { speaker: "Male", text: "Grazie mille. E il museo, dov’è esattamente?", en: "Thank you very much. And the museum, where exactly is it?", zh: "非常感謝。那博物館在哪裡？" },
            { speaker: "Female", text: "È accanto alla stazione.", en: "It’s next to the station.", zh: "就在火車站旁邊。" },
            { speaker: "Male", text: "Ottimo. Quanto tempo ci vuole in autobus?", en: "Great. How long does it take by bus?", zh: "太棒了。坐公車要多久？" },
            { speaker: "Female", text: "Solo cinque minuti.", en: "Only five minutes.", zh: "只要五分鐘。" },
            { speaker: "Male", text: "Perfetto. Quale autobus devo prendere?", en: "Perfect. Which bus should I take?", zh: "太好了。我應該搭哪一路公車？" },
            { speaker: "Female", text: "Il numero 12.", en: "Bus number 12.", zh: "12 號公車。" },
            { speaker: "Male", text: "Grazie ancora, è molto gentile.", en: "Thanks again, you’re very kind.", zh: "再次感謝，您真好。" },
            { speaker: "Female", text: "Di niente, buona giornata!", en: "You’re welcome, have a good day!", zh: "不客氣，祝您有美好的一天！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – In Italian class",
          scene_zh: "第 6 天 – 在義大利文課堂",
          dialogue: [
            { speaker: "Female", text: "Professore, come si dice ‘apple’ in italiano?", en: "Professor, how do you say ‘apple’ in Italian?", zh: "老師，apple 用義大利語怎麼說？" },
            { speaker: "Male", text: "Si dice ‘mela’.", en: "You say ‘mela’.", zh: "說 ‘mela’。" },
            { speaker: "Female", text: "E cosa significa ‘pere’?", en: "And what does ‘pere’ mean?", zh: "那 ‘pere’ 是什麼意思？" },
            { speaker: "Male", text: "Significa ‘pears’.", en: "It means pears.", zh: "意思是梨子。" },
            { speaker: "Female", text: "Grazie! Perché ‘mela’ è femminile?", en: "Thanks! Why is ‘mela’ feminine?", zh: "謝謝！為什麼 ‘mela’ 是陰性？" },
            { speaker: "Male", text: "Perché molte parole che finiscono con -a sono femminili.", en: "Because many words ending with -a are feminine.", zh: "因為很多以 -a 結尾的字是陰性。" },
            { speaker: "Female", text: "Capisco. Quali altre parole sono femminili?", en: "I see. Which other words are feminine?", zh: "我明白了。還有哪些字是陰性？" },
            { speaker: "Male", text: "Ad esempio: casa, porta, strada.", en: "For example: house, door, street.", zh: "例如：家、門、街。" },
            { speaker: "Female", text: "E quanto tempo serve per imparare bene l’italiano?", en: "And how much time is needed to learn Italian well?", zh: "那學好義大利語需要多少時間？" },
            { speaker: "Male", text: "Dipende! Ma con pratica ogni giorno, pochi mesi.", en: "It depends! But with daily practice, a few months.", zh: "看情況！不過每天練習的話，幾個月。" },
            { speaker: "Female", text: "Perfetto, allora continuo a studiare!", en: "Perfect, then I’ll keep studying!", zh: "太好了，那我會繼續學習！" },
            { speaker: "Male", text: "Brava! Ci vediamo domani.", en: "Good! See you tomorrow.", zh: "很好！明天見。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Buying a ticket",
          scene_zh: "第 7 天 – 在火車站買票",
          dialogue: [
            { speaker: "Male", text: "Buongiorno! Vorrei un biglietto per Napoli.", en: "Good morning! I’d like a ticket to Naples.", zh: "早安！我要一張去拿坡里的票。" },
            { speaker: "Female", text: "Quando vuole partire?", en: "When do you want to leave?", zh: "您想什麼時候出發？" },
            { speaker: "Male", text: "Parto oggi pomeriggio.", en: "I’m leaving this afternoon.", zh: "今天下午出發。" },
            { speaker: "Female", text: "Quale treno preferisce, l’alta velocità o il regionale?", en: "Which train do you prefer, the high-speed or the regional?", zh: "您要哪一班火車，高速還是區間？" },
            { speaker: "Male", text: "Preferisco l’alta velocità.", en: "I prefer the high-speed train.", zh: "我想要高速火車。" },
            { speaker: "Female", text: "Benissimo. Costa quaranta euro.", en: "Very good. It costs forty euros.", zh: "好的。要四十歐元。" },
            { speaker: "Male", text: "Quanto dura il viaggio?", en: "How long does the trip take?", zh: "旅程要多久？" },
            { speaker: "Female", text: "Circa un’ora e dieci minuti.", en: "About one hour and ten minutes.", zh: "大約一個小時十分鐘。" },
            { speaker: "Male", text: "Perfetto. A che ora parte il prossimo treno?", en: "Perfect. What time does the next train leave?", zh: "太好了。下一班火車幾點出發？" },
            { speaker: "Female", text: "Alle due e mezza.", en: "At two-thirty.", zh: "下午兩點半。" },
            { speaker: "Male", text: "Grazie mille, allora prendo questo.", en: "Thank you very much, then I’ll take this one.", zh: "非常感謝，那我就買這一班。" },
            { speaker: "Female", text: "Prego, buon viaggio!", en: "You’re welcome, have a good trip!", zh: "不客氣，祝您旅途愉快！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Visiting a friend",
          scene_zh: "第 8 天 – 拜訪朋友",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che bella casa hai!", en: "Hi! What a beautiful house you have!", zh: "嗨！你的房子好漂亮！" },
            { speaker: "Male", text: "Grazie! Vuoi vedere il giardino?", en: "Thanks! Do you want to see the garden?", zh: "謝謝！你要看看花園嗎？" },
            { speaker: "Female", text: "Volentieri. Quanto è grande la casa?", en: "Gladly. How big is the house?", zh: "好啊。房子有多大？" },
            { speaker: "Male", text: "Ha tre stanze e una cucina grande.", en: "It has three rooms and a big kitchen.", zh: "有三個房間和一個大廚房。" },
            { speaker: "Female", text: "Chi vive qui con te?", en: "Who lives here with you?", zh: "誰和你一起住？" },
            { speaker: "Male", text: "Vivo con due coinquilini.", en: "I live with two roommates.", zh: "我和兩個室友一起住。" },
            { speaker: "Female", text: "Che lavoro fanno loro?", en: "What work do they do?", zh: "他們做什麼工作？" },
            { speaker: "Male", text: "Uno è studente, l’altro lavora in un ufficio.", en: "One is a student, the other works in an office.", zh: "一個是學生，另一個在辦公室工作。" },
            { speaker: "Female", text: "Interessante! E dove studia lo studente?", en: "Interesting! And where does the student study?", zh: "有趣！那位學生在哪裡讀書？" },
            { speaker: "Male", text: "Studia all’università di Roma.", en: "He studies at the University of Rome.", zh: "他在羅馬大學讀書。" },
            { speaker: "Female", text: "Capisco. La tua casa è molto accogliente.", en: "I see. Your house is very cozy.", zh: "我明白了。你的家很溫馨。" },
            { speaker: "Male", text: "Grazie, torna a trovarmi presto!", en: "Thanks, come visit me again soon!", zh: "謝謝，快再來玩！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Shopping at the market",
          scene_zh: "第 9 天 – 在市場買東西",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Quanto costa questo pane?", en: "Good morning! How much does this bread cost?", zh: "早安！這個麵包多少錢？" },
            { speaker: "Male", text: "Costa un euro.", en: "It costs one euro.", zh: "一歐元。" },
            { speaker: "Female", text: "Perfetto, ne prendo due.", en: "Perfect, I’ll take two.", zh: "太好了，我要兩個。" },
            { speaker: "Male", text: "Vuole anche del formaggio?", en: "Do you also want some cheese?", zh: "你要不要也買些起司？" },
            { speaker: "Female", text: "Sì, grazie. Quanto costa al chilo?", en: "Yes, thanks. How much is it per kilo?", zh: "好啊，謝謝。一公斤多少錢？" },
            { speaker: "Male", text: "Otto euro al chilo.", en: "Eight euros per kilo.", zh: "八歐元一公斤。" },
            { speaker: "Female", text: "È un po’ caro. Quale mi consiglia?", en: "That’s a bit expensive. Which one do you recommend?", zh: "有點貴。你推薦哪一個？" },
            { speaker: "Male", text: "Questo è più fresco e costa solo sei euro.", en: "This one is fresher and only costs six euros.", zh: "這個比較新鮮，只要六歐元。" },
            { speaker: "Female", text: "Perfetto, ne prendo mezzo chilo.", en: "Perfect, I’ll take half a kilo.", zh: "太好了，我要半公斤。" },
            { speaker: "Male", text: "Va bene. Qualcos’altro?", en: "Okay. Anything else?", zh: "好的。還要別的嗎？" },
            { speaker: "Female", text: "No, grazie. Quanto pago in totale?", en: "No, thanks. How much do I pay in total?", zh: "不用了，謝謝。我總共要付多少？" },
            { speaker: "Male", text: "Sette euro in tutto.", en: "Seven euros in total.", zh: "總共七歐元。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Review and age",
          scene_zh: "第 10 天 – 複習與年齡",
          dialogue: [
            { speaker: "Male", text: "Ciao! Quanti anni hai?", en: "Hi! How old are you?", zh: "嗨！你幾歲？" },
            { speaker: "Female", text: "Ho vent’anni. E tu?", en: "I’m twenty. And you?", zh: "我二十歲。你呢？" },
            { speaker: "Male", text: "Ho ventidue anni.", en: "I’m twenty-two.", zh: "我二十二歲。" },
            { speaker: "Female", text: "E quanti anni ha tua sorella?", en: "And how old is your sister?", zh: "你妹妹幾歲？" },
            { speaker: "Male", text: "Ha diciotto anni.", en: "She is eighteen.", zh: "她十八歲。" },
            { speaker: "Female", text: "Capisco! Dove studia lei?", en: "I see! Where does she study?", zh: "我懂！她在哪裡讀書？" },
            { speaker: "Male", text: "Studia a Milano, all’università.", en: "She studies in Milan, at the university.", zh: "她在米蘭的大學讀書。" },
            { speaker: "Female", text: "Quando la vedi di solito?", en: "When do you usually see her?", zh: "你通常什麼時候見她？" },
            { speaker: "Male", text: "Ogni fine settimana.", en: "Every weekend.", zh: "每個週末。" },
            { speaker: "Female", text: "Che bello! Perché non vieni un giorno con lei a Roma?", en: "That’s nice! Why don’t you come one day with her to Rome?", zh: "真好！你為什麼不哪天帶她來羅馬？" },
            { speaker: "Male", text: "Ottima idea! Quanto costa il treno Milano–Roma?", en: "Great idea! How much does the Milan–Rome train cost?", zh: "好主意！米蘭到羅馬的火車要多少錢？" },
            { speaker: "Female", text: "Dipende, circa cinquanta euro.", en: "It depends, about fifty euros.", zh: "看情況，大概五十歐元。" }
          ]
        }
      ]
    }
  ]
};
