const episodeData = {
  ep_title: "ep",
  episodeId: 1,
  episode: "🇮🇹 Episode – Italian Travel Conversations",
  episode_zh: "🇮🇹 特別篇 - 義大利旅遊大補帖",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "☕ 10 Ways to Order Coffee - One Example a Day",
      topic_zh: "☕10 種義大利咖啡點法 - 每天一個例子",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Ordering an espresso at the bar",
          scene_zh: "第 1 天 — 在吧台點濃縮咖啡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Un caffè, per favore.", "en": "Good morning! An espresso, please.", "zh": "早安！一杯濃縮咖啡，謝謝。" },
            { speaker: "M_chef", text: "Subito! Al banco?", "en": "Right away! At the counter?", "zh": "馬上來！在吧台喝嗎？" },
            { speaker: "Female", text: "Sì, grazie. Prendo anche un po' d'acqua.", "en": "Yes, thanks. I'll also have a bit of water.", "zh": "是的，謝謝。我也來一點水。" },
            { speaker: "M_chef", text: "Perfetto. Un caffè e acqua. Sono un euro e dieci.", "en": "Perfect. One espresso and water. That's one euro ten.", "zh": "好的。一杯咖啡和水。總共是一歐元一角。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", "en": "Here you go. Thank you so much!", "zh": "給您。非常感謝！" },
            { speaker: "M_chef", text: "Grazie a lei. Buona giornata!", "en": "Thanks to you. Have a nice day!", "zh": "也謝謝您。祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Asking for sugar and milk",
          scene_zh: "第 2 天 — 詢問要糖和牛奶",
          dialogue: [
            { speaker: "Female", text: "Salve! Che bella giornata!", en: "Hello! What a lovely day!", zh: "您好！今天天氣真好！" },
            { speaker: "Female", text: "Un cappuccino, per favore.", en: "A cappuccino, please.", zh: "一杯卡布奇諾，謝謝。" },
            { speaker: "M_chef", text: "Con zucchero o senza?", en: "With sugar or without?", zh: "要加糖還是不加？" },
            { speaker: "Female", text: "Con un po' di zucchero, grazie.", en: "With a little sugar, thanks.", zh: "加一點糖，謝謝。" },
            { speaker: "M_chef", text: "E con latte intero o scremato?", en: "And with whole milk or skim milk?", zh: "那要全脂還是低脂牛奶？" },
            { speaker: "Female", text: "Intero, per favore.", en: "Whole milk, please.", zh: "麻煩全脂的。" },
            { speaker: "M_chef", text: "Va bene. Sono due euro.", en: "Alright. That’s two euros.", zh: "好的，兩歐元。" },
            { speaker: "Female", text: "Ecco. Alla prossima!", en: "Here you go. See you next time!!", zh: "給您，下次見囉！" },
            { speaker: "M_chef", text: "A presto! Buona giornata!", en: "See you soon! Have a great day!", zh: "下次見！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3: Ordering a Macchiato To Go",
          scene_zh: "第 3 天：點一杯瑪奇朵並外帶",
          dialogue: [
            { speaker: "Female", text: "Vorrei un caffè macchiato, per favore.", en: "I would like a macchiato, please.", zh: "我想要一杯瑪奇朵，謝謝。" },
            { speaker: "M_chef", text: "Per qui o da portare via?", en: "For here or to take away?", zh: "這裡喝還是外帶？" },
            { speaker: "Female", text: "Da portare via, grazie.", en: "To take away, thanks.", zh: "外帶，謝謝。" },
            { speaker: "M_chef", text: "Va bene. Sono un euro e cinquanta.", en: "Alright. That's one euro fifty.", zh: "好的，一歐元五角。" },
            { speaker: "Female", text: "Ecco a lei. Buona giornata!", en: "Here you go. Have a nice day!", zh: "給您。祝您有美好的一天！" },
            { speaker: "M_chef", text: "Grazie! Anche a te!", en: "Thanks! You too!", zh: "謝謝！你也是！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4: Asking for a Small vs. Large",
          scene_zh: "第四天：詢問「小杯」與「大杯」",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "M_chef", text: "Buongiorno! Come posso aiutare?", en: "Good morning! How can I help?", zh: "早安！有什麼需要幫忙的？" },
            { speaker: "Female", text: "Avete caffè in tazza grande?", en: "Do you have coffee in a large cup?", zh: "有大杯的咖啡嗎？" },
            { speaker: "M_chef", text: "Certo! Vuoi un caffè lungo?", en: "Sure! Do you want a long coffee?", zh: "當然！您想要淡一點的咖啡嗎？" },
            { speaker: "Female", text: "Sì, lungo e grande, grazie. ", en: "Yes, long and large, thanks.", zh: "是的，大杯的淡咖啡，謝謝。" },
            { speaker: "Female", text: "Allora posso avere anche un espresso?", en: "then can I also have an espresso?", zh: "那我可以再來一杯濃縮咖啡嗎？" },
            { speaker: "M_chef", text: "Per un caffè normale, usiamo solo tazza piccola.", en: "For a normal espresso, we only use a small cup.", zh: "對於濃縮咖啡，我們只用小杯喔。" },
            { speaker: "Female", text: "Ah, capisco. Allora prendo una tazza piccola. Grazie!", en: "Ah, I understand. I'll take a small cup then. Thanks!", zh: "啊，我懂了。那我來一杯小杯的。謝謝！" },
            { speaker: "M_chef", text: "Prego. Ecco a lei.", en: "You're welcome. Here you go.", zh: "不客氣。這給您。" },
            { speaker: "Female", text: "Grazie! A dopo!", en: "Thank you. See you later!", zh: "謝謝！待會見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5: Iced Coffee Options",
          scene_zh: "第 5 天 — 冰咖啡選項",
          dialogue: [
            { speaker: "Female", text: "Salve! Fa caldo oggi!", en: "Hello! It’s hot today!", zh: "哈囉！今天好熱啊！" },
            { speaker: "M_chef", text: "Verissimo! Vuoi qualcosa di fresco?", en: "Very true! Want something cold?", zh: "真的！您要來點冰的嗎？" },
            { speaker: "Female", text: "Avete caffè freddo?", en: "Do you have iced coffee?", zh: "你們有冰咖啡嗎？" },
            { speaker: "M_chef", text: "Certo! Puoi scegliere tra caffè con ghiaccio o caffè shakerato.", en: "Sure! You can choose between coffee with ice or a shaken coffee.", zh: "當然！您可以選擇加冰塊的咖啡，或是搖的冰咖啡。" },
            { speaker: "Female", text: "Come si chiama quello shakerato?", en: "What do you call the shaken one?", zh: "那種搖的叫什麼名字？" },
            { speaker: "M_chef", text: "Si chiama 'caffè shakerato'. Molto popolare in estate!", en: "It's called 'caffè shakerato'. Very popular in summer!", zh: "叫做 caffè shakerato，是夏天很受歡迎的！" },
            { speaker: "Female", text: "Interessante! Allora prendo un caffè shakerato.", en: "Interesting! Then I’ll take a caffè shakerato.", zh: "有趣！那我來一杯 caffè shakerato。" },
            { speaker: "M_chef", text: "Perfetto! Lo preparo subito.", en: "Perfect! I’ll make it right away.", zh: "好的，我馬上幫您準備。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" },
            { speaker: "M_chef", text: "Ecco qua. Buon fresco!", en: "Here you go. Stay cool!", zh: "給您。消暑一下吧！" },
            { speaker: "M_chef", text: "A presto! Goditi il fresco!", en: "See you soon! Enjoy the cool!", zh: "下次見！好好消暑喔！" }
          ]
        },
        {
          topicId: 2,
          topic: "🍽️ 10 Ways to Order Food - One Example a Day",
          topic_zh: "🍽️ 10 種義式點餐方式 - 每天一個例子",
          scenes: [
            {
              sceneId: 1,
              scene: "Day 1 – Basic Ordering: Pasta",
              scene_zh: "第 1 天 — 基本點餐：義大利麵",
              dialogue: [
                { speaker: "Female", text: "Buongiorno! Un tavolo per due, per favore.", en: "Good morning! A table for two, please.", zh: "早安！麻煩一張兩人桌。" },
                { speaker: "M_cameriere", text: "Certo. Ecco il menù. Cosa desiderate?", en: "Of course. Here is the menu. What would you like?", zh: "好的，這是菜單。想吃點什麼？" },
                { speaker: "Female", text: "Grazie. Ci dia un attimo per decidere.", en: "Thanks. Give us a moment to decide.", zh: "謝謝。給我們一點時間想一下。" },
                { speaker: "M_cameriere", text: "Prego. Chiamatemi quando siete pronti.", en: "You're welcome. Call me when you are ready.", zh: "不客氣。你們準備好時再叫我。" },
                { speaker: "Female", text: "Vorrei un piatto di pasta al pomodoro.", en: "I would like a plate of pasta with tomato sauce.", zh: "我想要一份番茄義大利麵。" },
                { speaker: "M_cameriere", text: "Perfetto. E da bere?", en: "Perfect. And to drink?", zh: "好的。那要喝點什麼呢？" },
                { speaker: "Female", text: "Acqua naturale, grazie.", en: "Still water, thanks.", zh: "礦泉水，謝謝。" },
                { speaker: "M_cameriere", text: "Va bene. Arriva subito!", en: "Alright. Coming right up!", zh: "好的，馬上就來！" }
              ]
            },
            {
              sceneId: 2,
              scene: "Day 2 – Menu Introduction",
              scene_zh: "第 2 天 — 介紹菜單",
              dialogue: [
                { speaker: "M_cameriere", text: "Benvenuti! Ecco i nostri menù.", en: "Welcome! Here are our menus.", zh: "歡迎！這是我們的菜單。" },
                { speaker: "Female", text: "Grazie. Come è diviso il menù?", en: "Thank you. How is the menu structured?", zh: "謝謝。請問菜單是如何分類的？" },
                { speaker: "M_cameriere", text: "Abbiamo gli antipasti (come bruschette), poi i primi (pasta e risotti).", en: "We have appetizers (like bruschetta), then first courses (pasta and risotto).", zh: "我們有前菜（像烤麵包片），接著是第一道主菜（義大利麵和燉飯）。" },
                { speaker: "Female", text: "Ah, capisco. E dopo i primi?", en: "Ah, I see. And after the first courses?", zh: "啊，我懂了。那第一道主菜之後呢？" },
                { speaker: "M_cameriere", text: "Poi ci sono i secondi, che sono i piatti principali di carne o pesce.", en: "Then there are the second courses, which are the main meat or fish dishes.", zh: "接著是第二道主菜，也就是主菜類的肉或魚料理。" },
                { speaker: "Female", text: "E ci sono anche contorni?", en: "And are there side dishes as well?", zh: "那也有配菜嗎？" },
                { speaker: "M_cameriere", text: "Sì, sotto la voce contorni (come patate al forno o insalata).", en: "Yes, under the heading of side dishes (like roasted potatoes or salad).", zh: "有的，在配菜這一區（像是烤馬鈴薯或沙拉）。" },
                { speaker: "Female", text: "Perfetto. Grazie per la spiegazione!", en: "Perfect. Thanks for the explanation!", zh: "太好了。謝謝你的解說！" }
              ]
            },
            {
              sceneId: 3,
              scene: "Day 3 – Ordering Pizza",
              scene_zh: "第 3 天 — 點披薩",
              dialogue: [
                { speaker: "Female", text: "Buonasera! Posso ordinare?", en: "Good evening! Can I order?", zh: "晚安！我可以點餐了嗎？" },
                { speaker: "M_cameriere", text: "Sì, certo. Cosa prende?", en: "Yes, of course. What will you have?", zh: "好的，當然。您要點什麼？" },
                { speaker: "Female", text: "Per me, una pizza Margherita. E per il mio amico, una pizza con acciughe.", en: "For me, a Margherita pizza. And for my friend, an anchovy pizza.", zh: "我要一份瑪格麗特披薩。我的朋友要一份鯷魚披薩。" },
                { speaker: "M_cameriere", text: "Va bene. E da bere?", en: "Okay. And to drink?", zh: "好的。那要喝什麼？" },
                { speaker: "Female", text: "Due birre medie, per favore. Sono fredde?", en: "Two medium beers, please. Are they cold?", zh: "兩杯中杯啤酒，謝謝。是冰的嗎？" },
                { speaker: "M_cameriere", text: "Certo, freschissime! Vi porto subito tutto.", en: "Of course, very cold! I'll bring everything right away.", zh: "當然，非常冰！馬上為您送上。" },
                { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
                { speaker: "M_cameriere", text: "Prego, buon appetito!", en: "You're welcome, enjoy your meal!", zh: "不客氣，祝您用餐愉快！" }
              ]
            },
            {
              sceneId: 4,
              scene: "Day 4 – Asking for a Recommendation",
              scene_zh: "第 4 天 — 詢問推薦菜色",
              dialogue: [
                { speaker: "Female", text: "Scusi, cosa ci consiglia oggi?", en: "Excuse me, what do you recommend today?", zh: "不好意思，請問今天有什麼推薦菜嗎？" },
                { speaker: "M_cameriere", text: "Oggi il nostro piatto del giorno sono i ravioli con tartufo.", en: "Today our dish of the day is ravioli with truffle.", zh: "今天我們的每日特餐是松露義式餃。" },
                { speaker: "Female", text: "Sembra delizioso! È il più popolare?", en: "That sounds delicious! Is it the most popular?", zh: "聽起來很好吃！它是最受歡迎的嗎？" },
                { speaker: "M_cameriere", text: "Sì, molti clienti lo ordinano. È la nostra specialità.", en: "Yes, many customers order it. It's our specialty.", zh: "是的，很多客人都點這道。這是我們的招牌菜。" },
                { speaker: "Female", text: "E cosa c’è dentro?", en: "And what's inside?", zh: "那裡面有什麼餡料？" },
                { speaker: "M_cameriere", text: "Sono ripieni di ricotta e spinaci, con salsa al tartufo fresco.", en: "They are filled with ricotta and spinach, with a fresh truffle sauce.", zh: "內餡是瑞可達起司和菠菜，搭配新鮮的松露醬。" },
                { speaker: "Female", text: "Perfetto, allora prendo i ravioli. Grazie!", en: "Perfect, I'll have the ravioli then. Thanks!", zh: "太好了，那我點松露義式餃。謝謝！" },
                { speaker: "M_cameriere", text: "Ottima scelta! Arriva subito.", en: "Great choice! Coming right up.", zh: "很棒的選擇！馬上就來。" }
              ]
            },
            {
              sceneId: 5,
              scene: "Day 5 – Ordering a Drink and Water",
              scene_zh: "第 5 天 — 點飲料和水",
              dialogue: [
                { speaker: "Female", text: "Vorrei ordinare da bere. Avete del vino rosso della casa?", en: "I would like to order a drink. Do you have house red wine?", zh: "我想要點飲料。你們有自釀的紅酒嗎？" },
                { speaker: "M_cameriere", text: "Sì, certo. Un bicchiere o una caraffa?", en: "Yes, of course. A glass or a carafe?", zh: "有的。要一杯還是一壺？" },
                { speaker: "Female", text: "Un bicchiere, grazie. E anche una bottiglia d'acqua frizzante.", en: "A glass, thanks. And also a bottle of sparkling water.", zh: "一杯，謝謝。另外再來一瓶氣泡水。" },
                { speaker: "M_cameriere", text: "Va bene. E ghiaccio?", en: "Alright. And ice?", zh: "好的。要冰塊嗎？" },
                { speaker: "Female", text: "No, senza ghiaccio, per favore.", en: "No, without ice, please.", zh: "不用冰塊，謝謝。" },
                { speaker: "M_cameriere", text: "Prego. Desidera altro?", en: "You're welcome. Do you wish for anything else?", zh: "不客氣。還需要點別的嗎？" },
                { speaker: "Female", text: "No, è tutto. Grazie.", en: "No, that's all. Thanks.", zh: "沒了，就這些。謝謝。" },
                { speaker: "M_cameriere", text: "Perfetto. Arriva subito.", en: "Perfect. It's coming right away.", zh: "好的。馬上就來。" }
              ]
            },
            {
              sceneId: 6,
              scene: "Day 6 – Asking about Ingredients (Allergies)",
              scene_zh: "第 6 天 — 詢問食材（過敏）",
              dialogue: [
                { speaker: "Female", text: "Mi scusi, ho un'allergia al glutine. Questa zuppa contiene farina?", en: "Excuse me, I have a gluten allergy. Does this soup contain flour?", zh: "不好意思，我對麩質過敏。這道湯裡有麵粉嗎？" },
                { speaker: "M_cameriere", text: "Aspetti che chiedo in cucina. Non sono sicuro.", en: "Wait, I'll ask in the kitchen. I'm not sure.", zh: "請稍等，我去廚房問一下。我不確定。" },
                { speaker: "M_cameriere", text: "No, non c'è farina. Ma ci sono crostini di pane a parte.", en: "No, there is no flour. But there are bread croutons on the side.", zh: "沒有，沒有麵粉。但旁邊有麵包丁。" },
                { speaker: "Female", text: "Ah, capisco. Grazie per averlo specificato.", en: "Ah, I see. Thanks for specifying that.", zh: "啊，我懂了。謝謝你特別說明。" },
                { speaker: "M_cameriere", text: "Prego. Allora Le tolgo i crostini?", en: "You're welcome. So, should I remove the croutons for you?", zh: "不客氣。那要幫您把麵包丁拿掉嗎？" },
                { speaker: "Female", text: "Sì, per favore. E posso prendere la zuppa. Grazie per aver controllato.", en: "Yes, please. And I'll have the soup. Thanks for checking.", zh: "好的，麻煩了。那我點這個湯。謝謝您幫我確認。" },
                { speaker: "M_cameriere", text: "Prego! Per noi è un piacere.", en: "You're welcome! It's our pleasure.", zh: "不客氣！這是我們的榮幸。" },
                { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" }
              ]
            },
            {
              sceneId: 7,
              scene: "Day 7 – Requesting an English Menu",
              scene_zh: "第 7 天 — 索取英文菜單",
              dialogue: [
                { speaker: "Female", text: "Mi scusi, parlo poco italiano. Avete un menù in inglese?", en: "Excuse me, I speak very little Italian. Do you have an English menu?", zh: "不好意思，我義大利語說得不太好。請問有英文菜單嗎？" },
                { speaker: "M_cameriere", text: "Sì, certo! Ecco qui il menù in inglese.", en: "Yes, of course! Here is the menu in English.", zh: "有的，當然！這份是英文菜單。" },
                { speaker: "Female", text: "Grazie mille! Qual è il vostro piatto forte?", en: "Thank you very much! What is your house specialty?", zh: "非常感謝！你們的招牌菜是什麼？" },
                { speaker: "M_cameriere", text: "I nostri spaghetti alla carbonara sono molto famosi.", en: "Our spaghetti carbonara is very famous.", zh: "我們的培根蛋麵非常有名。" },
                { speaker: "Female", text: "Allora prendo quello. E una coca cola.", en: "Then I'll have that. And a Coke.", zh: "那我點那道。還有一瓶可樂。" },
                { speaker: "M_cameriere", text: "Spaghetti carbonara e Coca Cola. Va bene!", en: "Spaghetti carbonara and a Coke. Okay!", zh: "培根蛋麵和可樂。好的！" },
                { speaker: "Female", text: "Tutto qui. Quanto costa?", en: "That's all. How much does it cost?", zh: "就這些。多少錢？" },
                { speaker: "M_cameriere", text: "Il totale è quindici euro e cinquanta.", en: "The total is fifteen fifty.", zh: "總共十五歐元五角。" }
              ]
            },
            {
              sceneId: 8,
              scene: "Day 8 – Ordering a Side Dish or Appetizer",
              scene_zh: "第 8 天 — 點配菜或開胃菜",
              dialogue: [
                { speaker: "Female", text: "Buongiorno! Vorrei ordinare un antipasto.", en: "Good morning! I would like to order an appetizer.", zh: "早安！我想要點一份開胃菜。" },
                { speaker: "M_cameriere", text: "Quale antipasto?", en: "Which appetizer?", zh: "哪一種開胃菜？" },
                { speaker: "Female", text: "Prendo il piatto di affettati e formaggi.", en: "I'll take the plate of cold cuts and cheeses.", zh: "我要點綜合冷盤和起司拼盤。" },
                { speaker: "M_cameriere", text: "Ottima scelta. E come piatto principale?", en: "Great choice. And for the main course?", zh: "很棒的選擇。那主菜呢？" },
                { speaker: "Female", text: "Poi un'insalata mista, per favore.", en: "Then a mixed salad, please.", zh: "然後再來一份綜合沙拉，謝謝。" },
                { speaker: "M_cameriere", text: "Affettati, formaggi e insalata. Tutto chiaro.", en: "Cold cuts, cheeses, and salad. Everything is clear.", zh: "冷盤、起司和沙拉。都清楚了。" },
                { speaker: "Female", text: "Grazie!", en: "Thank you!", zh: "謝謝！" },
                { speaker: "M_cameriere", text: "Prego! A lei!", en: "You're welcome! Here you go!", zh: "不客氣！給您！" }
              ]
            },
            {
              sceneId: 9,
              scene: "Day 9 – Asking for a Doggy Bag",
              scene_zh: "第 9 天 — 詢問能否打包",
              dialogue: [
                { speaker: "Female", text: "Il cibo era delizioso, grazie! Ma non riesco a finire tutto.", en: "The food was delicious, thank you! But I can't finish everything.", zh: "食物很美味，謝謝！但我吃不完。" },
                { speaker: "M_cameriere", text: "Vuole che Le prepariamo una vaschetta per portare via?", en: "Would you like us to prepare a container for you to take away?", zh: "您需要我們為您準備一個盒子打包嗎？" },
                { speaker: "Female", text: "Sì, per favore. Posso avere il resto da portare via?", en: "Yes, please. Can I have the rest to take away?", zh: "好的，麻煩了。我可以把剩下的打包嗎？" },
                { speaker: "M_cameriere", text: "Certo! Lo portiamo subito in cucina.", en: "Of course! We'll take it to the kitchen right away.", zh: "當然！我們馬上送去廚房。" },
                { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
                { speaker: "M_cameriere", text: "Prego! Ha bisogno di altro?", en: "You're welcome! Do you need anything else?", zh: "不客氣！還需要別的嗎？" },
                { speaker: "Female", text: "No, va bene così. Grazie!", en: "No, it's fine. Thanks!", zh: "不用了，這樣就好。謝謝！" },
                { speaker: "M_cameriere", text: "Quando vuole il conto, mi chiami.", en: "When you want the bill, just call me.", zh: "如果您需要帳單，再叫我。" }
              ]
            },
            {
              sceneId: 10,
              scene: "Day 10 – Complimenting the Food",
              scene_zh: "第 10 天 — 讚美食物",
              dialogue: [
                { speaker: "Female", text: "Scusi, posso dirle che la pasta era squisita!", en: "Excuse me, may I tell you that the pasta was exquisite!", zh: "不好意思，我想說這義大利麵太美味了！" },
                { speaker: "M_cameriere", text: "La ringrazio molto! Lo dirò allo chef.", en: "Thank you very much! I will tell the chef.", zh: "非常感謝您！我會轉告主廚。" },
                { speaker: "Female", text: "Il tiramisù è anche il migliore che abbia mai mangiato!", en: "The tiramisu is also the best I have ever eaten!", zh: "這份提拉米蘇也是我吃過最棒的！" },
                { speaker: "M_cameriere", text: "Sono felice che Le sia piaciuto così tanto. Grazie ancora.", en: "I'm happy that you liked it so much. Thank you again.", zh: "很高興您這麼喜歡。再次感謝。" },
                { speaker: "Female", text: "È un piacere. Possiamo avere il conto, per favore?", en: "It's my pleasure. Can we have the bill, please?", zh: "這是我的榮幸。可以給我們帳單嗎？" },
                { speaker: "M_cameriere", text: "Certo, arriva subito.", en: "Of course, it's coming right away.", zh: "好的，馬上就來。" },
                { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
                { speaker: "M_cameriere", text: "Sì, certo. Ecco il POS.", en: "Yes, of course. Here is the card machine.", zh: "好的，當然。這是刷卡機。" }
              ]
            },
            {
              sceneId: 11,
              scene: "Day 11 - Asking for the Bill and Paying",
              scene_zh: "第 11 天 - 結帳與付款",
              dialogue: [
                { speaker: "Female", text: "Mi scusi, posso avere il conto, per favore?", en: "Excuse me, can I have the bill, please?", zh: "不好意思，可以給我帳單嗎？" },
                { speaker: "M_cameriere", text: "Certo. Ecco a lei.", en: "Of course. Here you are.", zh: "好的。這是您的帳單。" },
                { speaker: "Female", text: "Grazie. Accettate carte di credito?", en: "Thanks. Do you accept credit cards?", zh: "謝謝。你們接受信用卡嗎？" },
                { speaker: "M_cameriere", text: "Sì, accettiamo carte. Il totale è venticinque euro.", en: "Yes, we accept cards. The total is twenty-five euros.", zh: "是的，我們接受刷卡。總共二十五歐元。" },
                { speaker: "Female", text: "Perfetto. Posso avere anche la ricevuta?", en: "Perfect. Can I also have the receipt?", zh: "太好了。可以順便給我收據嗎？" },
                { speaker: "M_cameriere", text: "Certamente. Ecco la ricevuta.", en: "Certainly. Here is the receipt.", zh: "當然。這是您的收據。" },
                { speaker: "Female", text: "Grazie mille! Buona serata!", en: "Thank you very much! Have a good evening!", zh: "非常感謝！祝您有個愉快的夜晚！" },
                { speaker: "M_cameriere", text: "Anche a lei, grazie! Arrivederci!", en: "You too, thanks! Goodbye!", zh: "也祝您如此，謝謝！再見！" }
              ]
            }
          ]
        },
        {
          topicId: 3,
          topic: "🗺️ 10 Ways to Ask for Directions - One Example a Day",
          topic_zh: "🗺️ 10 種問路方式 - 每天一個例子",
          scenes: [
            {
              sceneId: 1,
              scene: "Day 1 – Using 'Dov'è...?'",
              scene_zh: "第 1 天 — 使用「...在哪裡？」",
              dialogue: [
                { speaker: "Female", text: "Scusi, dov'è il duomo?", en: "Excuse me, where is the cathedral?", zh: "不好意思，請問大教堂在哪裡？" },
                { speaker: "M_passante", text: "Il duomo? È lì, in fondo alla via, dopo la piazza.", en: "The cathedral? It's there, at the end of the street, after the square.", zh: "大教堂？它就在那裡，這條路的盡頭，廣場之後。" },
                { speaker: "Female", text: "In fondo alla via... Ho capito.", en: "At the end of the street... I understand.", zh: "在路的盡頭…我明白了。" },
                { speaker: "M_passante", text: "Sì, lo vede subito. È l'edificio più grande.", en: "Yes, you'll see it immediately. It's the largest building.", zh: "是的，您馬上就會看到了。它是那邊最大的建築物。" },
                { speaker: "Female", text: "Quindi, dritto e non devo girare da nessuna parte?", en: "So, straight and I don't have to turn anywhere?", zh: "所以是直走，中間都不用轉彎對嗎？" },
                { speaker: "M_passante", text: "Esatto, è dritto per dritto. Sono solo un paio di minuti.", en: "Exactly, it's straight ahead. It's just a couple of minutes away.", zh: "沒錯，就是直直走。只要幾分鐘就到了。" },
                { speaker: "Female", text: "Perfetto! Grazie mille.", en: "Perfect! Thank you very much.", zh: "太好了！非常感謝您。" },
                { speaker: "M_passante", text: "Prego, buona passeggiata!", en: "You're welcome, have a nice walk!", zh: "不客氣，祝您散步愉快！" }
              ]
            },
            {
              sceneId: 2,
              scene: "Day 2 – Asking for a Route ('Per andare a...')",
              scene_zh: "第 2 天 — 詢問路線 (使用 'Per andare a...')",
              dialogue: [
                { speaker: "Female", text: "Scusi, per andare alla stazione, per favore?", en: "Excuse me, how can I get to the station, please?", zh: "不好意思，請問火車站怎麼走？" },
                { speaker: "M_passante", text: "Deve andare dritto su questa strada.", en: "You have to go straight on this street.", zh: "您要沿著這條路直走。" },
                { speaker: "Female", text: "Dritto? E dopo?", en: "Straight? And after that?", zh: "直走？然後呢？" },
                { speaker: "M_passante", text: "Poi la vede, è sulla destra. Non può sbagliare.", en: "Then you will see it, it's on the right. You can't miss it.", zh: "然後您就會看到它了，就在右手邊。您不會錯過的。" },
                { speaker: "Female", text: "Quindi, dritto e poi a destra. Ho capito. È lontano?", en: "So, straight and then on the right. I understand. Is it far?", zh: "所以，直走然後在右手邊。我明白了。遠嗎？" },
                { speaker: "M_passante", text: "No, sono solo cinque minuti a piedi.", en: "No, it's only a five-minute walk.", zh: "不遠，走路只要五分鐘。" },
                { speaker: "Female", text: "Perfetto! Grazie mille!", en: "Perfect! Thank you very much!", zh: "太好了！非常感謝！" },
                { speaker: "M_passante", text: "Prego, buona giornata!", en: "You're welcome, have a good day!", zh: "不客氣，祝您有個美好的一天！" }
              ]
            },
            {
              sceneId: 3,
              scene: "Day 3 – Using Landmarks",
              scene_zh: "第 3 天 — 使用地標",
              dialogue: [
                { speaker: "Female", text: "Mi scusi, il Colosseo è da questa parte?", en: "Excuse me, is the Colosseum this way?", zh: "不好意思，請問競技場是這個方向嗎？" },
                { speaker: "M_passante", text: "No, è dall'altra parte. Deve tornare indietro.", en: "No, it's the other way. You have to go back.", zh: "不是的，在另一個方向。您必須往回走。" },
                { speaker: "Female", text: "Oh, davvero? Fino a che punto devo tornare?", en: "Oh, really? How far do I have to go back?", zh: "喔，真的嗎？要回到哪裡？" },
                { speaker: "M_passante", text: "Fino alla piazza principale. Lì vede una grande fontana?", en: "Until the main square. Do you see a big fountain there?", zh: "回到主要廣場。您在那裡有看到一個大噴水池嗎？" },
                { speaker: "Female", text: "Sì, la vedo da qui.", en: "Yes, I can see it from here.", zh: "有，我從這裡看得到。" },
                { speaker: "M_passante", text: "Bene, da lì gira a sinistra e lo troverà dopo 200 metri.", en: "Good, from there you turn left and you will find it after 200 meters.", zh: "好的，從那裡左轉，走約兩百公尺就會到了。" },
                { speaker: "Female", text: "Grazie per l'aiuto! Siete molto gentili.", en: "Thanks for the help! You are very kind.", zh: "謝謝您的幫忙！您人真好。" },
                { speaker: "M_passante", text: "Di niente! È un piacere.", en: "Not at all! It's a pleasure.", zh: "不客氣！這是我的榮幸。" }
              ]
            },
            {
              sceneId: 4,
              scene: "Day 4 – Using Turns",
              scene_zh: "第 4 天 — 使用轉彎詞彙",
              dialogue: [
                { speaker: "Female", text: "Scusi, come arrivo al cinema?", en: "Excuse me, how do I get to the cinema?", zh: "不好意思，請問電影院怎麼走？" },
                { speaker: "M_passante", text: "Allora, prenda la prima a destra, poi la seconda a sinistra.", en: "So, take the first right, then the second left.", zh: "好的，第一個路口右轉，然後第二個路口左轉。" },
                { speaker: "Female", text: "La prima a destra e la seconda a sinistra, giusto?", en: "The first right and the second left, is that correct?", zh: "第一個路口右轉，然後第二個路口左轉，對嗎？" },
                { speaker: "M_passante", text: "Esatto! Poi continua dritto per circa tre isolati.", en: "Exactly! Then continue straight for about three blocks.", zh: "沒錯！然後再直走大約三個街區。" },
                { speaker: "Female", text: "È un edificio grande? Lo vedo facilmente?", en: "Is it a big building? Will I see it easily?", zh: "是個大建築物嗎？會很顯眼嗎？" },
                { speaker: "M_passante", text: "Sì, è un edificio rosso e molto grande. Lo vedrà sicuramente.", en: "Yes, it's a very large red building. You will definitely see it.", zh: "是的，那是一棟很大的紅色建築。您一定會看到的。" },
                { speaker: "Female", text: "Fantastico! Grazie mille per le indicazioni.", en: "Great! Thank you very much for the directions.", zh: "太好了！非常感謝您的指引。" },
                { speaker: "M_passante", text: "Prego! Divertiti al cinema!", en: "You're welcome! Have fun at the cinema!", zh: "不客氣！祝您看電影愉快！" }
              ]
            },
            {
              sceneId: 5,
              scene: "Day 5 – Asking about Distance",
              scene_zh: "第 5 天 — 詢問距離",
              dialogue: [
                { speaker: "Female", text: "Mi scusi, sa dirmi dov'è la farmacia più vicina?", en: "Excuse me, can you tell me where the nearest pharmacy is?", zh: "不好意思，請問最近的藥局在哪裡？" },
                { speaker: "M_passante", text: "Certo. Va dritto fino al semaforo e poi gira a destra.", en: "Of course. Go straight until the traffic light and then turn right.", zh: "好的。您直走到紅綠燈，然後右轉。" },
                { speaker: "Female", text: "È lontano da qui?", en: "Is it far from here?", zh: "從這裡走會很遠嗎？" },
                { speaker: "M_passante", text: "No, sono circa dieci minuti a piedi, non più di un chilometro.", en: "No, it's about a ten-minute walk, no more than a kilometer.", zh: "不遠，走路大約十分鐘，不會超過一公里。" },
                { speaker: "Female", text: "Ah, va bene. Pensavo fosse più distante.", en: "Ah, okay. I thought it was farther.", zh: "啊，好的。我以為會比較遠。" },
                { speaker: "M_passante", text: "La trova dopo il supermercato, sulla sinistra.", en: "You'll find it after the supermarket, on the left.", zh: "您在超市之後就會看到它了，在左手邊。" },
                { speaker: "Female", text: "Ottimo, grazie per la precisione.", en: "Great, thanks for the precise information.", zh: "太好了，謝謝您說得這麼詳細。" },
                { speaker: "M_passante", text: "Prego, si figuri!", en: "You're welcome, don't mention it!", zh: "不客氣，別客氣！" }
              ]
            },
            {
              sceneId: 6,
              scene: "Day 6 – Asking for Directions to a Bus Stop",
              scene_zh: "第 6 天 — 詢問公車站",
              dialogue: [
                { speaker: "Female", text: "Buongiorno, sa dove posso prendere l'autobus per il centro?", en: "Good morning, do you know where I can catch the bus to the city center?", zh: "早安，請問哪裡可以搭公車去市中心？" },
                { speaker: "M_passante", text: "Sì, deve andare in fondo a questa via.", en: "Yes, you have to go to the end of this street.", zh: "有的，您必須走到這條路的盡頭。" },
                { speaker: "Female", text: "In fondo? E poi?", en: "To the end? And then?", zh: "盡頭？然後呢？" },
                { speaker: "M_passante", text: "Alla fine, attraversa la strada e vede la fermata dell'autobus.", en: "At the end, cross the street and you'll see the bus stop.", zh: "到了盡頭，過馬路就會看到公車站牌了。" },
                { speaker: "Female", text: "Quale numero di autobus devo prendere?", en: "Which bus number should I take?", zh: "我應該搭幾號公車？" },
                { speaker: "M_passante", text: "Il numero 12. Passa ogni 15 minuti.", en: "Number 12. It passes every 15 minutes.", zh: "12號公車。它每15分鐘會來一班。" },
                { speaker: "Female", text: "Ottimo, grazie per tutte le informazioni!", en: "Great, thanks for all the information!", zh: "太好了，謝謝您提供這麼多資訊！" },
                { speaker: "M_passante", text: "Prego. L'autobus arriva a momenti.", en: "You're welcome. The bus will be here any moment.", zh: "不客氣。公車快來了。" }
              ]
            },
            {
              sceneId: 7,
              scene: "Day 7 – Asking for Directions to a Pharmacy",
              scene_zh: "第 7 天 — 詢問藥局",
              dialogue: [
                { speaker: "Female", text: "Scusi, c'è una farmacia qui vicino?", en: "Excuse me, is there a pharmacy nearby?", zh: "不好意思，附近有藥局嗎？" },
                { speaker: "M_passante", text: "Sì, ce n'è una in Piazza Garibaldi.", en: "Yes, there is one in Garibaldi Square.", zh: "有的，加里波底廣場那邊有一家。" },
                { speaker: "Female", text: "Piazza Garibaldi... è molto lontana?", en: "Garibaldi Square... is that very far?", zh: "加里波底廣場…會很遠嗎？" },
                { speaker: "M_passante", text: "No, sono solo duecento metri. Gira a sinistra alla prossima via.", en: "No, it's only two hundred meters. Turn left at the next street.", zh: "不遠，大約兩百公尺而已。在下一個路口左轉。" },
                { speaker: "Female", text: "Giro a sinistra. E la farmacia dove si trova?", en: "I turn left. And where is the pharmacy located?", zh: "我左轉。那藥局在哪裡？" },
                { speaker: "M_passante", text: "La vede subito dopo la chiesa, con la croce verde.", en: "You'll see it right after the church, with the green cross.", zh: "您在教堂之後就會看到它了，上面有個綠色的十字。" },
                { speaker: "Female", text: "Grazie! Era proprio quello che cercavo.", en: "Thank you! That's exactly what I was looking for.", zh: "謝謝！這正是我在找的地方。" },
                { speaker: "M_passante", text: "Prego, felice di averla aiutata.", en: "You're welcome, happy to have helped you.", zh: "不客氣，很高興能幫到你。" }
              ]
            },
            {
              sceneId: 8,
              scene: "Day 8 – Giving Directions",
              scene_zh: "第 8 天 — 指引方向",
              dialogue: [
                { speaker: "Female", text: "Mi scusi, sa come si arriva al museo?", en: "Excuse me, do you know how to get to the museum?", zh: "不好意思，請問去博物館怎麼走？" },
                { speaker: "M_passante", text: "Certo. Vede quel ponte laggiù? Attraversi il fiume.", en: "Of course. Do you see that bridge over there? Cross the river.", zh: "好的。您看到那邊那座橋了嗎？過那條河。" },
                { speaker: "Female", text: "Il ponte. Ok.", en: "The bridge. Okay.", zh: "橋。好的。" },
                { speaker: "M_passante", text: "Poi continua dritto per un altro isolato. Il museo è sulla destra, proprio di fronte al parco.", en: "Then continue straight for another block. The museum is on the right, right in front of the park.", zh: "然後再直走一個街區。博物館就在右手邊，公園的正對面。" },
                { speaker: "Female", text: "Di fronte al parco... E c'è una fermata della metro vicina?", en: "In front of the park... And is there a metro station nearby?", zh: "公園對面…那附近有地鐵站嗎？" },
                { speaker: "M_passante", text: "Sì, la fermata 'Centrale' è proprio a fianco del museo.", en: "Yes, the 'Centrale' station is right next to the museum.", zh: "有的，「中央站」就在博物館旁邊。" },
                { speaker: "Female", text: "Perfetto, grazie mille! È stato molto utile.", en: "Perfect, thank you very much! That was very helpful.", zh: "太好了，非常感謝！您說得很有用。" },
                { speaker: "M_passante", text: "Prego, si figuri!", en: "You're welcome, don't mention it!", zh: "不客氣，別客氣！" }
              ]
            },
            {
              sceneId: 9,
              scene: "Day 9 – Asking to Repeat",
              scene_zh: "第 9 天 — 請求重複",
              dialogue: [
                { speaker: "Female", text: "Scusi, per andare al teatro? Non ho capito bene l'ultima parte.", en: "Excuse me, to get to the theater? I didn't quite understand the last part.", zh: "不好意思，去劇院怎麼走？我沒有聽清楚最後一部分。" },
                { speaker: "M_passante", text: "Certo, nessun problema. Segua la strada per circa 300 metri.", en: "Of course, no problem. Follow the street for about 300 meters.", zh: "好的，沒問題。沿著這條路走大約300公尺。" },
                { speaker: "Female", text: "300 metri, ok. E poi?", en: "300 meters, okay. And then?", zh: "300公尺，好的。然後呢？" },
                { speaker: "M_passante", text: "Poi la trova, è l'edificio giallo a sinistra, dopo la banca.", en: "Then you'll find it, it's the yellow building on the left, after the bank.", zh: "然後您就會看到它了，是左手邊的黃色建築，在銀行之後。" },
                { speaker: "Female", text: "Ah, il palazzo giallo a sinistra. Adesso ho capito, grazie!", en: "Ah, the yellow building on the left. Now I understand, thanks!", zh: "啊，左手邊的黃色建築。現在我明白了，謝謝！" },
                { speaker: "M_passante", text: "Prego, si assicuri di non girare troppo presto.", en: "You're welcome, make sure you don't turn too early.", zh: "不客氣，請務必不要太早轉彎。" },
                { speaker: "Female", text: "No, no. Farò attenzione.", en: "No, no. I'll be careful.", zh: "不會的，我會小心的。" },
                { speaker: "M_passante", text: "Bene. Buona passeggiata!", en: "Good. Have a nice walk!", zh: "好的。祝您散步愉快！" }
              ]
            },
            {
              sceneId: 10,
              scene: "Day 10 – Asking to Speak Slower",
              scene_zh: "第 10 天 — 請求講慢一點",
              dialogue: [
                { speaker: "Female", text: "Scusi, potrebbe parlare un po' più lentamente? Non sono italiano.", en: "Excuse me, could you speak a little slower? I'm not Italian.", zh: "不好意思，您能說慢一點嗎？我不是義大利人。" },
                { speaker: "M_passante", text: "Certo, mi scusi. Allora, deve camminare fino al negozio di alimentari.", en: "Of course, my apologies. So, you must walk until the grocery store.", zh: "好的，抱歉。您要走到雜貨店那邊。" },
                { speaker: "Female", text: "Fino al negozio di alimentari... ok.", en: "Until the grocery store... okay.", zh: "走到雜貨店…好的。" },
                { speaker: "M_passante", text: "Dopo il negozio, attraversa la strada e la biblioteca è lì.", en: "After the store, you cross the street and the library is there.", zh: "過了雜貨店，您過馬路，圖書館就在那裡。" },
                { speaker: "Female", text: "Dopo il negozio, attraversa e c'è la biblioteca. Ho capito. Grazie!", en: "After the store, cross and there's the library. I understand. Thanks!", zh: "過了雜貨店，過馬路，圖書館就在那裡。我明白了。謝謝！" },
                { speaker: "M_passante", text: "Prego! Ha bisogno di altro aiuto?", en: "You're welcome! Do you need any other help?", zh: "不客氣！還需要其他協助嗎？" },
                { speaker: "Female", text: "No, va bene così. Molto gentile, grazie.", en: "No, I'm good. Very kind of you, thanks.", zh: "不用了，這樣就好。您人真好，謝謝。" },
                { speaker: "M_passante", text: "Di niente! È un piacere.", en: "Not at all! It's a pleasure.", zh: "不客氣！這是我的榮幸。" }
              ]
            },
            {
              sceneId: 11,
              scene: "Day 11 – Thanking and Confirming",
              scene_zh: "第 11 天 — 感謝與確認",
              dialogue: [
                { speaker: "Female", text: "Scusi, per il museo, devo girare a destra o a sinistra?", en: "Excuse me, for the museum, should I turn right or left?", zh: "不好意思，去博物館是要右轉還是左轉？" },
                { speaker: "M_passante", text: "Deve girare a destra. Segua la strada per 10 minuti.", en: "You have to turn right. Follow the street for 10 minutes.", zh: "您要右轉。沿著這條路走10分鐘。" },
                { speaker: "Female", text: "Dieci minuti... ok. E poi è facile da trovare?", en: "Ten minutes... okay. And then is it easy to find?", zh: "10分鐘…好的。那之後會很容易找到嗎？" },
                { speaker: "M_passante", text: "Sì, è un edificio moderno con un grande muro di vetro. Non può mancarlo.", en: "Yes, it's a modern building with a large glass wall. You can't miss it.", zh: "是的，那是一棟有大片玻璃牆的現代建築。您不會錯過的。" },
                { speaker: "Female", text: "Grazie. Quindi riassumendo: giro a destra, vado dritto per 10 minuti e cerco un edificio con una parete di vetro.", en: "Thanks. So to summarize: I turn right, go straight for 10 minutes and look for a building with a glass wall.", zh: "謝謝。所以總結一下：我右轉，直走10分鐘，然後尋找一棟有玻璃牆的建築物。" },
                { speaker: "M_passante", text: "Esatto! Proprio così.", en: "Exactly! That's right.", zh: "沒錯！就是這樣。" },
                { speaker: "Female", text: "Perfetto! Lei è stato molto chiaro. Grazie mille!", en: "Perfect! You were very clear. Thank you very much!", zh: "太好了！您說得非常清楚。非常感謝！" },
                { speaker: "M_passante", text: "Prego, buona visita!", en: "You're welcome, enjoy your visit!", zh: "不客氣，祝您參觀愉快！" }
              ]
            }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6: Paying for Coffee",
          scene_zh: "第 6 天 — 付款（現金或刷卡）",
          dialogue: [
            { speaker: "Female", text: "Quanto costa il caffè?", en: "How much is the coffee?", zh: "這杯咖啡多少錢？" },
            { speaker: "M_chef", text: "Un euro e cinquanta.", en: "One euro fifty.", zh: "一歐五。" },
            { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "M_chef", text: "Sì, accettiamo carte.", en: "Yes, we accept cards.", zh: "是的，我們接受刷卡。" },
            { speaker: "Female", text: "Perfetto. Grazie mille!", en: "Perfect. Thank you so much!", zh: "太好了，非常感謝！" },
            { speaker: "M_chef", text: "Vuoi la ricevuta?", en: "Do you want the receipt?", zh: "您要收據嗎？" },
            { speaker: "Female", text: "No, grazie.", en: "No, thanks.", zh: "不用了，謝謝。" },
            { speaker: "Female", text: "O... ecco due euro.", en: "Or... here’s two euros.", zh: "或者... 這裡是兩歐。" },
            { speaker: "M_chef", text: "Hai bisogno del resto?", en: "Do you need change?", zh: "需要找零嗎？" },
            { speaker: "Female", text: "No, va bene così. Grazie!", en: "No, it's fine like this. Thanks!", zh: "不用了，這樣就好。謝謝！" },
            { speaker: "M_chef", text: "Grazie a te! Buona giornata!", en: "Thanks to you! Have a nice day!", zh: "也謝謝您！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7: Asking for Small Favors (Napkins, Sitting, etc.)",
          scene_zh: "第 7 天：詢問小事 (餐巾紙、座位等)",
          dialogue: [
            { speaker: "Female", text: "Posso sedermi qui?", en: "Can I sit here?", zh: "我可以坐在這裡嗎？" },
            { speaker: "M_chef", text: "Sì, ma per il servizio al tavolo c'è un costo extra.", en: "Yes, but there is an extra cost for table service.", zh: "可以，但座位服務會有額外費用喔。" },
            { speaker: "Female", text: "Ah, capisco. Non fa niente, allora prendo il mio caffè al bancone. E posso avere un tovagliolo in più?", en: "Ah, I see. Never mind, I'll take my coffee at the counter then. And can I have an extra napkin?", zh: "啊，我懂了。沒關係，那我還是站在吧台喝吧。可以多給我一張餐巾紙嗎？" },
            { speaker: "M_chef", text: "Certo, eccolo. E il caffè è pronto!", en: "Of course, here it is. And your coffee is ready!", zh: "當然，給您。咖啡已經好了！" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "M_chef", text: "Prego! Ciao!", en: "You're welcome! Bye!", zh: "不客氣！再見！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8: Ordering a Latte Macchiato with a Pastry",
          scene_zh: "第 8 天：點一杯拿鐵瑪奇朵和點心",
          dialogue: [
            { speaker: "Female", text: "Salve! Un latte macchiato e un cornetto semplice, per favore.", en: "Hello! A latte macchiato and a plain croissant, please.", zh: "您好！一杯拿鐵瑪奇朵和一個原味可頌，謝謝。" },
            { speaker: "M_chef", text: "Subito. Mangia qui o porta via?", en: "Right away. Eating here or taking away?", zh: "馬上好。是在這裡吃還是外帶？" },
            { speaker: "Female", text: "Mangio qui. Grazie.", en: "I’ll eat here. Thanks.", zh: "我在這裡吃。謝謝。" },
            { speaker: "M_chef", text: "Il totale è quattro euro e venti.", en: "The total is four euros twenty.", zh: "總共四歐元兩角。" },
            { speaker: "Female", text: "Ecco a lei. Grazie!", en: "Here you go. Thanks!", zh: "給您。謝謝！" },
            { speaker: "M_chef", text: "Prego! A te!", en: "You're welcome! For you!", zh: "不客氣！給您！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9: Asking for a Recommendation",
          scene_zh: "第 9 天：如何向店員詢問推薦",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Cosa mi consiglia di provare oggi?", en: "Good morning! What do you recommend I try today?", zh: "早安！你今天有什麼推薦的嗎？" },
            { speaker: "M_chef", text: "Oggi abbiamo un ottimo caffè al ginseng, molto energizzante.", en: "Today we have a great ginseng coffee, it's very energizing.", zh: "今天我們有很棒的人參咖啡，很提神。" },
            { speaker: "Female", text: "Interessante! Allora prendo quello.", en: "Interesting! I'll have that then.", zh: "聽起來不錯！那我要這個。" },
            { speaker: "M_chef", text: "Ottima scelta! Arriva subito.", en: "Great choice! Coming right up.", zh: "很棒的選擇！馬上來。" },
            { speaker: "Female", text: "Grazie!", en: "Thanks!", zh: "謝謝！" },
            { speaker: "M_chef", text: "Prego!", en: "You're welcome!", zh: "不客氣！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10: Adding a Pastry",
          scene_zh: "第 10 天 — 再加一份點心",
          dialogue: [
            { speaker: "Female", text: "Posso avere anche un cornetto?", en: "Can I also have a croissant?", zh: "我可以再來一個可頌嗎？" },
            { speaker: "M_chef", text: "Certo! Vuoi semplice, alla crema o al cioccolato?", en: "Sure! Plain, cream or chocolate?", zh: "當然可以！您要原味、奶油或巧克力口味？" },
            { speaker: "Female", text: "Al cioccolato, grazie!", en: "Chocolate, thanks!", zh: "巧克力的，謝謝！" },
            { speaker: "M_chef", text: "Subito!", en: "Right away!", zh: "馬上來！" }
          ]
        },
        {
          sceneId: 11,
          scene: "Ordering a Marocchino",
          scene_zh: "第十一天：點一杯馬羅基諾 (Marocchino)",
          dialogue: [
            { speaker: "Female", text: "Un marocchino, per favore.", en: "A marocchino, please.", zh: "一杯馬羅基諾，謝謝。" },
            { speaker: "M_chef", text: "Certo. Con un po' di cacao in più?", en: "Of course. With a little extra cocoa?", zh: "好的。要再多加一點可可粉嗎？" },
            { speaker: "Female", text: "Sì, grazie. E un po' più di schiuma, se possibile.", en: "Yes, thanks. And a little more foam, if possible.", zh: "是的，謝謝。如果可以的話，奶泡多一點。" },
            { speaker: "M_chef", text: "Va bene, arriva subito! Sono due euro.", en: "Alright, coming right up! That's two euros.", zh: "好的，馬上就好！兩歐元。" },
            { speaker: "Female", text: "Perfetto, ecco a lei. Grazie!", en: "Perfect, here you go. Thanks!", zh: "太好了，給您。謝謝！" },
            { speaker: "M_chef", text: "Prego, buona giornata!", en: "You're welcome, have a nice day!", zh: "不客氣，祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 12,
          scene: "Ordering a Caffè Corretto",
          scene_zh: "第十二天：點一杯加料的「修正咖啡」(Corretto)",
          dialogue: [
            { speaker: "Female", text: "Vorrei un caffè, corretto, per favore.", en: "I'd like a coffee, corrected, please.", zh: "我想要一杯修正咖啡，謝謝。" },
            { speaker: "M_chef", text: "Certo. Con grappa o sambuca?", en: "Of course. With grappa or sambuca?", zh: "好的。要加格拉巴酒還是茴香酒？" },
            { speaker: "Female", text: "Con un po' di sambuca, grazie.", en: "With a little sambuca, thanks.", zh: "加一點茴香酒，謝謝。" },
            { speaker: "M_chef", text: "Perfetto. E lo zucchero?", en: "Perfect. And sugar?", zh: "好的。要加糖嗎？" },
            { speaker: "Female", text: "No, senza zucchero, grazie.", en: "No, without sugar, thanks.", zh: "不用糖，謝謝。" },
            { speaker: "M_chef", text: "Va bene. Ecco a lei, due euro e cinquanta.", en: "Alright. Here you go, two fifty.", zh: "好的。給您，兩歐元五角。" }
          ]
        },
        {
          sceneId: 13,
          scene: "Day 13: Ordering a Double Espresso",
          scene_zh: "第十三天：點一杯雙份濃縮咖啡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Potrei avere un caffè doppio, per favore?", en: "Good morning! Could I have a double espresso, please?", zh: "早安！可以給我一杯雙份濃縮咖啡嗎？" },
            { speaker: "M_chef", text: "Subito! Lo vuoi al bancone?", en: "Right away! Do you want it at the counter?", zh: "馬上來！在吧台喝嗎？" },
            { speaker: "Female", text: "Sì, al bancone va bene. Grazie.", en: "Yes, at the counter is fine. Thanks.", zh: "好的，在吧台就好。謝謝。" },
            { speaker: "M_chef", text: "Perfetto. Per il doppio sono due euro e trenta.", en: "Perfect. For the double espresso, it's two euros thirty.", zh: "好的。雙份是兩歐元三角。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", en: "Here you go. Thank you so much!", zh: "給您。非常感謝！" },
            { speaker: "M_chef", text: "Prego! Ci vediamo!", en: "You're welcome! See you!", zh: "不客氣！再見！" }
          ]
        }
      ]
    },
    {
      topicId: 6,
      topic: "10 Italian Desserts 🍰 You Must Try - One Example a Day",
      topic_zh: "10 款必嚐的義大利甜點 🍰 - 每天一個例子",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1: Tiramisù – 酒精？自製？",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Avete il tiramisù oggi?", en: "Good morning! Do you have tiramisù today?", zh: "早安！你們今天有提拉米蘇嗎？" },
            { speaker: "M_chef", text: "Sì, certo! È fatto in casa.", en: "Yes, of course! It’s homemade.", zh: "有的，是我們自製的。" },
            { speaker: "Female", text: "Contiene liquore?", en: "Does it contain alcohol?", zh: "裡面有酒嗎？" },
            { speaker: "M_chef", text: "Solo un po’ di Marsala. Vuole provarlo?", en: "Just a bit of Marsala wine. Want to try it?", zh: "只有一點馬沙拉酒。要來一份嗎？" },
            { speaker: "Female", text: "Sì, grazie. Uno per me.", en: "Yes, thank you. One for me.", zh: "好，謝謝，來一個。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2: Cannoli – 口味選擇",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Che tipo di cannoli avete?", en: "Good evening! What kinds of cannoli do you have?", zh: "晚安！你們有什麼口味的卡諾里？" },
            { speaker: "M_chef", text: "Al cioccolato, alla ricotta e al pistacchio.", en: "Chocolate, ricotta, and pistachio.", zh: "有巧克力、乳酪、還有開心果口味。" },
            { speaker: "Female", text: "Ne prendo uno al pistacchio.", en: "I’ll take one pistachio.", zh: "我要一個開心果口味的。" },
            { speaker: "M_chef", text: "Subito!", en: "Right away!", zh: "馬上來！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3: Affogato – 咖啡淋冰淇淋",
          dialogue: [
            { speaker: "Female", text: "Ciao! Cos’è l’affogato al caffè?", en: "Hi! What is affogato al caffè?", zh: "嗨！什麼是 affogato 咖啡淋冰淇淋？" },
            { speaker: "M_chef", text: "È gelato alla vaniglia con espresso caldo versato sopra.", en: "It’s vanilla gelato with hot espresso poured over it.", zh: "是香草冰淇淋，上面澆熱濃縮咖啡。" },
            { speaker: "Female", text: "Perfetto! Lo prendo!", en: "Perfect! I’ll take it!", zh: "太棒了！我要一份！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4: Panna Cotta – 選醬料",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Che salse avete per la panna cotta?", en: "Good morning! What sauces do you have for panna cotta?", zh: "早安！你們的奶酪有什麼醬料可選？" },
            { speaker: "M_chef", text: "Fragola, caramello o cioccolato.", en: "Strawberry, caramel, or chocolate.", zh: "草莓、焦糖或巧克力醬。" },
            { speaker: "Female", text: "Fragola, per favore.", en: "Strawberry, please.", zh: "我要草莓口味的，謝謝。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5: Gelato – 冰淇淋口味與餅乾杯",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che gusti di gelato ci sono oggi?", en: "Hi! What gelato flavors do you have today?", zh: "嗨！今天有什麼口味的義式冰淇淋？" },
            { speaker: "M_chef", text: "Limone, cioccolato, fragola e nocciola.", en: "Lemon, chocolate, strawberry, and hazelnut.", zh: "檸檬、巧克力、草莓、榛果。" },
            { speaker: "Female", text: "Un cono piccolo, cioccolato e nocciola.", en: "A small cone, chocolate and hazelnut.", zh: "我要一個小的甜筒，巧克力和榛果口味。" },
            { speaker: "M_chef", text: "Con cialda croccante?", en: "With a crunchy cone?", zh: "要脆皮餅乾杯嗎？" },
            { speaker: "Female", text: "Sì, grazie!", en: "Yes, thanks!", zh: "好，謝謝！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6: Babà al rum – 含酒味甜點",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Com’è il babà al rum?", en: "Good morning! How’s the babà al rum?", zh: "早安！請問這個蘭姆酒蛋糕怎麼樣？" },
            { speaker: "M_chef", text: "È molto soffice e con un gusto deciso di rum.", en: "It’s very soft with a strong rum flavor.", zh: "非常鬆軟，而且有濃濃的蘭姆酒味。" },
            { speaker: "Female", text: "Ne prendo uno. Lo mangio subito.", en: "I’ll take one. I’ll eat it right away.", zh: "我要一個，馬上吃掉。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7: Crostata – 義式果醬派",
          dialogue: [
            { speaker: "Female", text: "Ciao! Quali crostate avete oggi?", en: "Hi! What crostatas do you have today?", zh: "嗨！今天有什麼口味的果醬派？" },
            { speaker: "M_chef", text: "Albicocca, frutti di bosco e mela.", en: "Apricot, berries, and apple.", zh: "杏桃、野莓和蘋果口味。" },
            { speaker: "Female", text: "Una alla mela, grazie.", en: "An apple one, please.", zh: "我要蘋果的，謝謝。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8: Profiteroles – 奶油泡芙",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Avete i profiteroles?", en: "Good evening! Do you have profiteroles?", zh: "晚上好！你們有奶油泡芙嗎？" },
            { speaker: "M_chef", text: "Sì, con panna e copertura al cioccolato.", en: "Yes, with cream and chocolate topping.", zh: "有的，有奶油餡，淋上巧克力醬。" },
            { speaker: "Female", text: "Perfetto. Uno per me.", en: "Perfect. One for me.", zh: "太好了，來一份。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9: Sfogliatella – 酥不酥脆？",
          dialogue: [
            { speaker: "Female", text: "Salve! La sfogliatella è croccante?", en: "Hi! Is the sfogliatella crunchy?", zh: "您好！這個千層酥脆嗎？" },
            { speaker: "M_chef", text: "Appena sfornata! Croccantissima!", en: "Just baked! Super crunchy!", zh: "剛出爐的！超酥脆！" },
            { speaker: "Female", text: "Ne voglio una!", en: "I want one!", zh: "我要一個！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10: Zeppole – 炸甜點，限節日？",
          dialogue: [
            { speaker: "Female", text: "Avete le zeppole oggi?", en: "Do you have zeppole today?", zh: "今天有炸泡芙嗎？" },
            { speaker: "M_chef", text: "Sì, freschissime! Appena fatte.", en: "Yes, super fresh! Just made.", zh: "有的，非常新鮮！剛炸好的。" },
            { speaker: "Female", text: "Ne prendo due allora!", en: "I’ll take two then!", zh: "那我要兩個！" }
          ]
        }
      ]
    }
   // new
  ]
};
