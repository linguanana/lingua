const episodeData = {
  ep_title: "ep",
  episodeId: 2,
  episode: "🇮🇹 Episode – Italian Travel Conversations",
  episode_zh: "🇮🇹 特別篇 - 義大利旅遊大補帖",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "🍽️ 11 Ways to Order Food - One Example a Day",
      topic_zh: "🍽️ 11 種義式點餐方式 - 每天一個例子",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Basic Ordering: Pasta",
          scene_zh: "第 1 天 — 基本點餐：義大利麵",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Un tavolo per due, per favore.", en: "Good morning! A table for two, please.", zh: "早安！麻煩一張兩人桌。" },
            { speaker: "M_Chef", text: "Certo. Ecco il menù. Cosa desiderate?", en: "Of course. Here is the menu. What would you like?", zh: "好的，這是菜單。想吃點什麼？" },
            { speaker: "Female", text: "Grazie. Un attimo, per favore.", en: "Thanks. One moment, please.", zh: "謝謝。稍等一下。" },
            { speaker: "M_Chef", text: "Va bene. Mi chiami dopo.", en: "Okay. Call me later.", zh: "好的。等一下再叫我。" },
            { speaker: "Female", text: "Vorrei un piatto di pasta al pomodoro.", en: "I would like pasta with tomato sauce.", zh: "我想要一份番茄義大利麵。" },
            { speaker: "M_Chef", text: "Perfetto. E da bere?", en: "Perfect. And to drink?", zh: "好的。那要喝點什麼呢？" },
            { speaker: "Female", text: "Acqua naturale, grazie.", en: "Still water, thanks.", zh: "礦泉水，謝謝。" },
            { speaker: "M_Chef", text: "Va bene. Arriva subito!", en: "Alright. Coming right up!", zh: "好的，馬上就來！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Ordering Pizza",
          scene_zh: "第 2 天 — 點披薩",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Posso ordinare?", en: "Good evening! Can I order?", zh: "晚安！我可以點餐了嗎？" },
            { speaker: "M_Chef", text: "Sì, certo. Cosa prende?", en: "Yes, of course. What will you have?", zh: "好的，當然。您要點什麼？" },
            { speaker: "Female", text: "Per me, una pizza Margherita. E per il mio amico, una pizza con acciughe.", en: "For me, a Margherita pizza. And for my friend, an anchovy pizza.", zh: "我要一份瑪格麗特披薩。我的朋友要一份鯷魚披薩。" },
            { speaker: "M_Chef", text: "Va bene. E da bere?", en: "Okay. And to drink?", zh: "好的。那要喝什麼？" },
            { speaker: "Female", text: "Due birre medie, per favore. Sono fredde?", en: "Two medium beers, please. Are they cold?", zh: "兩杯中杯啤酒，謝謝。是冰的嗎？" },
            { speaker: "M_Chef", text: "Certo, freschissime! Vi porto subito tutto.", en: "Of course, very cold! I'll bring everything right away.", zh: "當然，非常冰！馬上為您送上。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "M_Chef", text: "Prego, buon appetito!", en: "You're welcome, enjoy your meal!", zh: "不客氣，祝您用餐愉快！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Ordering a Drink and Water",
          scene_zh: "第 3 天 — 點飲料和水",
          dialogue: [
            { speaker: "Female", text: "Vorrei del vino rosso della casa.", en: "I’d like the house red wine.", zh: "我想要一杯自釀紅酒。" },
            { speaker: "M_Chef", text: "Un bicchiere o una caraffa?", en: "A glass or a carafe?", zh: "要一杯還是一壺？" },
            { speaker: "Female", text: "Un bicchiere, grazie. E una bottiglia d’acqua frizzante.", en: "A glass, thanks. And a bottle of sparkling water.", zh: "一杯，謝謝。還要一瓶氣泡水。" },
            { speaker: "M_Chef", text: "Va bene. Con ghiaccio?", en: "Alright. With ice?", zh: "好的，要加冰嗎？" },
            { speaker: "Female", text: "No, senza ghiaccio.", en: "No, without ice.", zh: "不用，加冰塊。" },
            { speaker: "M_Chef", text: "Perfetto. Subito.", en: "Perfect. Right away.", zh: "好的，馬上來。" },
            { speaker: "M_Chef", text: "Prego. Desidera altro?", en: "You're welcome. Do you wish for anything else?", zh: "不客氣。還需要點別的嗎？" },
            { speaker: "Female", text: "No, è tutto. Grazie.", en: "No, that's all. Thanks.", zh: "沒了，就這些。謝謝。" },
            { speaker: "M_Chef", text: "Perfetto. Arriva subito.", en: "Perfect. It's coming right away.", zh: "好的。馬上就來。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Asking for Cutlery and Napkins",
          scene_zh: "第 4 天 — 要餐具和紙巾",
          dialogue: [
            { speaker: "Female", text: "Scusi, posso avere una forchetta?", en: "Excuse me, can I have a fork?", zh: "不好意思，可以給我一支叉子嗎？" },
            { speaker: "M_Chef", text: "Certo, subito.", en: "Of course, right away.", zh: "當然，馬上來。" },
            { speaker: "Female", text: "E anche un cucchiaio, per favore.", en: "And also a spoon, please.", zh: "還有一支湯匙，謝謝。" },
            { speaker: "M_Chef", text: "Va bene, un cucchiaio.", en: "Alright, a spoon.", zh: "好的，一支湯匙。" },
            { speaker: "Female", text: "Potrei avere anche un coltello?", en: "Could I also have a knife?", zh: "可以再給我一把刀嗎？" },
            { speaker: "M_Chef", text: "Sì, un coltello subito.", en: "Yes, a knife right away.", zh: "好的，馬上給您刀子。" },
            { speaker: "Female", text: "E qualche tovagliolo di carta, grazie.", en: "And some paper napkins, thanks.", zh: "還有一些紙巾，謝謝。" },
            { speaker: "M_Chef", text: "Ecco a Lei: forchetta, cucchiaio, coltello e tovaglioli.", en: "Here you are: fork, spoon, knife and napkins.", zh: "給您：叉子、湯匙、刀子和紙巾。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Requesting an English Menu",
          scene_zh: "第 5 天 — 索取英文菜單",
          dialogue: [
            { speaker: "Female", text: "Scusi, parlo poco italiano. Avete menù in inglese?", en: "Excuse me, I speak little Italian. Do you have an English menu?", zh: "不好意思，我義大利語不太好。有英文菜單嗎？" },
            { speaker: "M_Chef", text: "Sì, ecco il menù in inglese.", en: "Yes, here’s the English menu.", zh: "有的，這是英文菜單。" },
            { speaker: "Female", text: "Grazie! Qual è il piatto speciale?", en: "Thanks! What is the special dish?", zh: "謝謝！你們的招牌菜是什麼？" },
            { speaker: "M_Chef", text: "La carbonara. È molto famosa.", en: "Carbonara. It’s very famous.", zh: "培根蛋麵，很有名。" },
            { speaker: "Female", text: "Perfetto, prendo quello. E una Coca Cola.", en: "Perfect, I’ll take that. And a Coke.", zh: "太好了，我要這個。再加一瓶可樂。" },
            { speaker: "M_Chef", text: "Carbonara e Coca Cola. Va bene!", en: "Carbonara and a Coke. Okay!", zh: "培根蛋麵和可樂。好的！" },
            { speaker: "Female", text: "Quanto costa?", en: "How much is it?", zh: "多少錢？" },
            { speaker: "M_Chef", text: "Quindici euro e cinquanta.", en: "Fifteen euros fifty.", zh: "十五歐元五角。" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – What's Recommended Today? And Cutlery, Please",
          scene_zh: "第 6 天 — 今天有什麼推薦？還有餐具麻煩了",
          dialogue: [
            { speaker: "Female", text: "Scusi, cosa consiglia oggi?", en: "Excuse me, what do you recommend today?", zh: "不好意思，今天有什麼推薦？" },
            { speaker: "M_Chef", text: "Oggi abbiamo i ravioli al tartufo.", en: "Today we have ravioli with truffle.", zh: "今天有松露餃子。" },
            { speaker: "Female", text: "Buono! È popolare?", en: "Nice! Is it popular?", zh: "不錯！很受歡迎嗎？" },
            { speaker: "M_Chef", text: "Sì, è la nostra specialità.", en: "Yes, it’s our specialty.", zh: "是的，這是我們的招牌菜。" },
            { speaker: "Female", text: "Cosa c’è dentro?", en: "What’s inside?", zh: "裡面有什麼？" },
            { speaker: "M_Chef", text: "Ricotta e spinaci, con salsa al tartufo.", en: "Ricotta and spinach, with truffle sauce.", zh: "乳酪和菠菜，加松露醬。" },
            { speaker: "M_Chef", text: "Vuole una zuppa per iniziare?", en: "Would you like a soup to start?", zh: "要不要先來碗湯？" },
            { speaker: "Female", text: "Sì, una zuppa va bene. E per i ravioli, una forchetta e un cucchiaio, per favore.", en: "Yes, a soup is fine. And for the ravioli, a fork and a spoon, please.", zh: "好，來碗湯。另外松露餃要叉子和湯匙，謝謝。" },
            { speaker: "M_Chef", text: "Certamente. Zuppa e ravioli, con posate. Subito!", en: "Of course. Soup and ravioli, with cutlery. Right away!", zh: "當然。湯和松露餃，餐具齊全。馬上來！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Menu Introduction",
          scene_zh: "第 7 天 — 介紹菜單",
          dialogue: [
            { speaker: "M_Chef", text: "Benvenuti! Questo è il menù.", en: "Welcome! This is the menu.", zh: "歡迎！這是菜單。" },
            { speaker: "Female", text: "Grazie. Cosa c’è nel menù?", en: "Thanks. What’s on the menu?", zh: "謝謝。菜單上有什麼？" },
            { speaker: "M_Chef", text: "Abbiamo antipasti, come bruschette. Poi i primi: pasta o risotto.",
              en: "We have appetizers, like bruschetta. Then first courses: pasta or risotto.",
              zh: "我們有前菜，比如烤麵包片。接著是第一道：義大利麵或燉飯。" },
            { speaker: "Female", text: "Ah, capisco.", en: "Ah, I see.", zh: "啊，我懂了。" },
            { speaker: "M_Chef", text: "Poi i secondi: carne o pesce.", en: "Then the second courses: meat or fish.", zh: "接著是第二道：肉或魚。" },
            { speaker: "Female", text: "E ci sono contorni?", en: "And side dishes?", zh: "有配菜嗎？" },
            { speaker: "M_Chef", text: "Sì, patate o insalata.", en: "Yes, potatoes or salad.", zh: "有，馬鈴薯或沙拉。" },
            { speaker: "Female", text: "Perfetto, grazie!", en: "Perfect, thanks!", zh: "太好了，謝謝！" },
            { speaker: "Female", text: "E i dolci? Avete tiramisù?", en: "And desserts? Do you have tiramisù?", zh: "那甜點呢？有提拉米蘇嗎？" },
            { speaker: "M_Chef", text: "Certo! Tiramisù, panna cotta e gelato.", en: "Of course! Tiramisu, panna cotta and ice cream.", zh: "當然！提拉米蘇、奶酪布丁和冰淇淋。" },
            { speaker: "Female", text: "E dopo il dolce, caffè?", en: "And after dessert, coffee?", zh: "甜點後有咖啡嗎？" },
            { speaker: "M_Chef", text: "Sì, sempre espresso.", en: "Yes, always espresso.", zh: "有的，永遠是濃縮咖啡。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Ordering a Side Dish or Appetizer",
          scene_zh: "第 8 天 — 點配菜或開胃菜",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Vorrei un antipasto.", en: "Good morning! I’d like an appetizer.", zh: "早安！我想要一份開胃菜。" },
            { speaker: "M_Chef", text: "Quale antipasto?", en: "Which appetizer?", zh: "哪一種開胃菜？" },
            { speaker: "Female", text: "Prendo affettati e formaggi.", en: "I’ll take cold cuts and cheeses.", zh: "我要綜合冷盤和起司。" },
            { speaker: "M_Chef", text: "Va bene. Altro?", en: "Okay. Anything else?", zh: "好的。還要別的嗎？" },
            { speaker: "Female", text: "Un’insalata mista, per favore.", en: "A mixed salad, please.", zh: "一份綜合沙拉，謝謝。" },
            { speaker: "M_Chef", text: "Affettati, formaggi e insalata. Perfetto.", en: "Cold cuts, cheeses and salad. Perfect.", zh: "冷盤、起司和沙拉。太好了。" },
            { speaker: "Female", text: "Grazie!", en: "Thank you!", zh: "謝謝！" },
            { speaker: "M_Chef", text: "Prego!", en: "You’re welcome!", zh: "不客氣！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Asking for a Doggy Bag",
          scene_zh: "第 9 天 — 詢問能否打包",
          dialogue: [
            { speaker: "Female", text: "Il cibo era buono, ma non finisco tutto.", en: "The food was good, but I can’t finish it all.", zh: "食物很好吃，但我吃不完。" },
            { speaker: "M_Chef", text: "Vuole una vaschetta per portare via?", en: "Do you want a box to take away?", zh: "要不要一個盒子打包？" },
            { speaker: "Female", text: "Sì, per favore.", en: "Yes, please.", zh: "好的，麻煩了。" },
            { speaker: "M_Chef", text: "Va bene, lo porto in cucina.", en: "Okay, I’ll take it to the kitchen.", zh: "好的，我幫您送去廚房。" },
            { speaker: "Female", text: "Grazie!", en: "Thank you!", zh: "謝謝！" },
            { speaker: "M_Chef", text: "Prego! Vuole altro?", en: "You’re welcome! Do you want anything else?", zh: "不客氣！還要別的嗎？" },
            { speaker: "Female", text: "Questo è tutto.", en: "That’s all.", zh: "就這樣。" },
            { speaker: "M_Chef", text: "Perfetto. Quando vuole il conto, mi chiami.", en: "Perfect. When you want the bill, call me.", zh: "好的。要帳單的時候再叫我。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Complimenting the Food",
          scene_zh: "第 10 天 — 讚美食物與結帳",
          dialogue: [
            { speaker: "Female", text: "Scusi, la pasta era molto buona!", en: "Excuse me, the pasta was very good!", zh: "不好意思，這義大利麵很好吃！" },
            { speaker: "M_Chef", text: "Grazie! Lo dirò allo chef.", en: "Thanks! I’ll tell the chef.", zh: "謝謝！我會告訴主廚。" },
            { speaker: "Female", text: "Anche il tiramisù era ottimo!", en: "The tiramisu was great too!", zh: "提拉米蘇也很好吃！" },
            { speaker: "M_Chef", text: "Sono felice che Le sia piaciuto.", en: "I’m happy you liked it.", zh: "很高興您喜歡。" },
            { speaker: "Female", text: "Possiamo avere il conto, per favore?", en: "Can we have the bill, please?", zh: "可以給我們帳單嗎？" },
            { speaker: "M_Chef", text: "Certo, subito.", en: "Of course, right away.", zh: "好的，馬上就來。" },
            { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "M_Chef", text: "Sì, ecco il POS.", en: "Yes, here is the card machine.", zh: "可以，這是刷卡機。" }
          ]
        },
        {
          sceneId: 11,
          scene: "Day 11 - Asking for the Bill and Paying",
          scene_zh: "第 11 天 - 結帳與付款",
          dialogue: [
            { speaker: "Female", text: "Scusi, il conto per favore.", en: "Excuse me, the bill please.", zh: "不好意思，請給我帳單。" },
            { speaker: "M_Chef", text: "Certo, ecco il conto.", en: "Of course, here’s the bill.", zh: "好的，這是帳單。" },
            { speaker: "Female", text: "Accettate carte di credito?", en: "Do you accept credit cards?", zh: "你們收信用卡嗎？" },
            { speaker: "M_Chef", text: "Sì, il totale è venticinque euro.", en: "Yes, the total is twenty-five euros.", zh: "是的，總共二十五歐元。" },
            { speaker: "Female", text: "Perfetto. Una ricevuta, per favore.", en: "Perfect. A receipt, please.", zh: "太好了。請給我收據。" },
            { speaker: "M_Chef", text: "Ecco la ricevuta.", en: "Here’s the receipt.", zh: "這是收據。" },
            { speaker: "Female", text: "Grazie! Buona serata!", en: "Thanks! Have a good evening!", zh: "謝謝！祝您晚上愉快！" },
            { speaker: "M_Chef", text: "Arrivederci! Anche a lei.", en: "Goodbye! You too.", zh: "再見！也祝您愉快。" }
          ]
        }
      ]
    }
   // new
  ]
};
