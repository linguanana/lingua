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
            { speaker: "Female", text: "Grazie. Ci dia un attimo per decidere.", en: "Thanks. Give us a moment to decide.", zh: "謝謝。給我們一點時間想一下。" },
            { speaker: "M_Chef", text: "Prego. Chiamatemi quando siete pronti.", en: "You're welcome. Call me when you are ready.", zh: "不客氣。你們準備好時再叫我。" },
            { speaker: "Female", text: "Vorrei un piatto di pasta al pomodoro.", en: "I would like a plate of pasta with tomato sauce.", zh: "我想要一份番茄義大利麵。" },
            { speaker: "M_Chef", text: "Perfetto. E da bere?", en: "Perfect. And to drink?", zh: "好的。那要喝點什麼呢？" },
            { speaker: "Female", text: "Acqua naturale, grazie.", en: "Still water, thanks.", zh: "礦泉水，謝謝。" },
            { speaker: "M_Chef", text: "Va bene. Arriva subito!", en: "Alright. Coming right up!", zh: "好的，馬上就來！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Menu Introduction",
          scene_zh: "第 2 天 — 介紹菜單",
          dialogue: [
            { speaker: "M_Chef", text: "Benvenuti! Ecco i nostri menù.", en: "Welcome! Here are our menus.", zh: "歡迎！這是我們的菜單。" },
            { speaker: "Female", text: "Grazie. Come è diviso il menù?", en: "Thank you. How is the menu structured?", zh: "謝謝。請問菜單是如何分類的？" },
            { speaker: "M_Chef", text: "Abbiamo gli antipasti (come bruschette), poi i primi (pasta e risotti).", en: "We have appetizers (like bruschetta), then first courses (pasta and risotto).", zh: "我們有前菜（像烤麵包片），接著是第一道主菜（義大利麵和燉飯）。" },
            { speaker: "Female", text: "Ah, capisco. E dopo i primi?", en: "Ah, I see. And after the first courses?", zh: "啊，我懂了。那第一道主菜之後呢？" },
            { speaker: "M_Chef", text: "Poi ci sono i secondi, che sono i piatti principali di carne o pesce.", en: "Then there are the second courses, which are the main meat or fish dishes.", zh: "接著是第二道主菜，也就是主菜類的肉或魚料理。" },
            { speaker: "Female", text: "E ci sono anche contorni?", en: "And are there side dishes as well?", zh: "那也有配菜嗎？" },
            { speaker: "M_Chef", text: "Sì, sotto la voce contorni (come patate al forno o insalata).", en: "Yes, under the heading of side dishes (like roasted potatoes or salad).", zh: "有的，在配菜這一區（像是烤馬鈴薯或沙拉）。" },
            { speaker: "Female", text: "Perfetto. Grazie per la spiegazione!", en: "Perfect. Thanks for the explanation!", zh: "太好了。謝謝你的解說！" },
            { speaker: "Female", text: "E i dolci? Avete tiramisù?", en: "And desserts? Do you have tiramisù?", zh: "那甜點呢？有提拉米蘇嗎？" },
            { speaker: "M_Chef", text: "Certo! Abbiamo tiramisù, panna cotta e gelato artigianale.", en: "Of course! We have tiramisù, panna cotta, and homemade gelato.", zh: "當然！我們有提拉米蘇、奶酪布丁，還有手工冰淇淋。" },
            { speaker: "Female", text: "Ottimo! E dopo il dolce si prende il caffè, giusto?", en: "Great! And after dessert, you have coffee, right?", zh: "太棒了！甜點之後就是咖啡，對嗎？" },
            { speaker: "M_Chef", text: "Esatto, l’espresso non manca mai.", en: "Exactly, espresso is never missing.", zh: "沒錯，濃縮咖啡永遠不會缺席。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Ordering Pizza",
          scene_zh: "第 3 天 — 點披薩",
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
          sceneId: 4,
          scene: "Day 4 – What's Recommended Today? And Cutlery, Please",
          scene_zh: "第 4 天 — 今天有什麼推薦？還有餐具麻煩了",
          dialogue: [
            { speaker: "Female", text: "Scusi, cosa ci consiglia oggi?", en: "Excuse me, what do you recommend today?", zh: "不好意思，請問今天有什麼推薦菜嗎？" },
            { speaker: "M_Chef", text: "Oggi il nostro piatto del giorno sono i ravioli con tartufo.", en: "Today our dish of the day is ravioli with truffle.", zh: "今天我們的每日特餐是松露義式餃。" },
            { speaker: "Female", text: "Sembra delizioso! È il più popolare?", en: "That sounds delicious! Is it the most popular?", zh: "聽起來很好吃！它是最受歡迎的嗎？" },
            { speaker: "M_Chef", text: "Sì, molti clienti lo ordinano. È la nostra specialità.", en: "Yes, many customers order it. It's our specialty.", zh: "是的，很多客人都點這道。這是我們的招牌菜。" },
            { speaker: "Female", text: "E cosa c’è dentro?", en: "And what's inside?", zh: "那裡面有什麼餡料？" },
            { speaker: "M_Chef", text: "Sono ripieni di ricotta e spinaci, con salsa al tartufo fresco.", en: "They are filled with ricotta and spinach, with a fresh truffle sauce.", zh: "內餡是瑞可達起司和菠菜，搭配新鮮的松露醬。" },
            { speaker: "M_Chef", text: "Vuole iniziare con una zuppa? Abbiamo una vellutata di verdure molto leggera.", en: "Would you like to start with a soup? We have a very light vegetable cream soup.", zh: "要不要先來一碗湯？我們有很清爽的蔬菜濃湯。" },
            { speaker: "Female", text: "Mh, sì, una zuppa va bene. E per i ravioli, posso avere anche un cucchiaio e una forchetta, per favore?", en: "Hmm, yes, a soup sounds good. And for the ravioli, could I also have a spoon and a fork, please?", zh: "嗯，好啊，那就來碗湯。另外松露餃也麻煩給我湯匙和叉子，謝謝。" },
            { speaker: "M_Chef", text: "Certamente, signora. Zuppa e ravioli con posate complete. Arriva subito!", en: "Of course, madam. Soup and ravioli with full cutlery. Coming right up!", zh: "當然，女士。一碗湯加松露餃，餐具齊全。馬上就來！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Ordering a Drink and Water",
          scene_zh: "第 5 天 — 點飲料和水",
          dialogue: [
            { speaker: "Female", text: "Vorrei ordinare da bere. Avete del vino rosso della casa?", en: "I would like to order a drink. Do you have house red wine?", zh: "我想要點飲料。你們有自釀的紅酒嗎？" },
            { speaker: "M_Chef", text: "Sì, certo. Un bicchiere o una caraffa?", en: "Yes, of course. A glass or a carafe?", zh: "有的。要一杯還是一壺？" },
            { speaker: "Female", text: "Un bicchiere, grazie. E anche una bottiglia d'acqua frizzante.", en: "A glass, thanks. And also a bottle of sparkling water.", zh: "一杯，謝謝。另外再來一瓶氣泡水。" },
            { speaker: "M_Chef", text: "Va bene. E ghiaccio?", en: "Alright. And ice?", zh: "好的。要冰塊嗎？" },
            { speaker: "Female", text: "No, senza ghiaccio, per favore.", en: "No, without ice, please.", zh: "不用冰塊，謝謝。" },
            { speaker: "M_Chef", text: "Prego. Desidera altro?", en: "You're welcome. Do you wish for anything else?", zh: "不客氣。還需要點別的嗎？" },
            { speaker: "Female", text: "No, è tutto. Grazie.", en: "No, that's all. Thanks.", zh: "沒了，就這些。謝謝。" },
            { speaker: "M_Chef", text: "Perfetto. Arriva subito.", en: "Perfect. It's coming right away.", zh: "好的。馬上就來。" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Asking about Ingredients (Allergies)",
          scene_zh: "第 6 天 — 詢問食材（過敏）",
          dialogue: [
            { speaker: "Female", text: "Mi scusi, ho un'allergia al glutine. Questa zuppa contiene farina?", en: "Excuse me, I have a gluten allergy. Does this soup contain flour?", zh: "不好意思，我對麩質過敏。這道湯裡有麵粉嗎？" },
            { speaker: "M_Chef", text: "Aspetti che chiedo in cucina. Non sono sicuro.", en: "Wait, I'll ask in the kitchen. I'm not sure.", zh: "請稍等，我去廚房問一下。我不確定。" },
            { speaker: "M_Chef", text: "No, non c'è farina. Ma ci sono crostini di pane a parte.", en: "No, there is no flour. But there are bread croutons on the side.", zh: "沒有，沒有麵粉。但旁邊有麵包丁。" },
            { speaker: "Female", text: "Ah, capisco. Grazie per averlo specificato.", en: "Ah, I see. Thanks for specifying that.", zh: "啊，我懂了。謝謝你特別說明。" },
            { speaker: "M_Chef", text: "Prego. Allora Le tolgo i crostini?", en: "You're welcome. So, should I remove the croutons for you?", zh: "不客氣。那要幫您把麵包丁拿掉嗎？" },
            { speaker: "Female", text: "Sì, per favore. E posso prendere la zuppa. Grazie per aver controllato.", en: "Yes, please. And I'll have the soup. Thanks for checking.", zh: "好的，麻煩了。那我點這個湯。謝謝您幫我確認。" },
            { speaker: "M_Chef", text: "Prego! Per noi è un piacere.", en: "You're welcome! It's our pleasure.", zh: "不客氣！這是我們的榮幸。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Requesting an English Menu",
          scene_zh: "第 7 天 — 索取英文菜單",
          dialogue: [
            { speaker: "Female", text: "Mi scusi, parlo poco italiano. Avete un menù in inglese?", en: "Excuse me, I speak very little Italian. Do you have an English menu?", zh: "不好意思，我義大利語說得不太好。請問有英文菜單嗎？" },
            { speaker: "M_Chef", text: "Sì, certo! Ecco qui il menù in inglese.", en: "Yes, of course! Here is the menu in English.", zh: "有的，當然！這份是英文菜單。" },
            { speaker: "Female", text: "Grazie mille! Qual è il vostro piatto forte?", en: "Thank you very much! What is your house specialty?", zh: "非常感謝！你們的招牌菜是什麼？" },
            { speaker: "M_Chef", text: "I nostri spaghetti alla carbonara sono molto famosi.", en: "Our spaghetti carbonara is very famous.", zh: "我們的培根蛋麵非常有名。" },
            { speaker: "Female", text: "Allora prendo quello. E una coca cola.", en: "Then I'll have that. And a Coke.", zh: "那我點那道。還有一瓶可樂。" },
            { speaker: "M_Chef", text: "Spaghetti carbonara e Coca Cola. Va bene!", en: "Spaghetti carbonara and a Coke. Okay!", zh: "培根蛋麵和可樂。好的！" },
            { speaker: "Female", text: "Tutto qui. Quanto costa?", en: "That's all. How much does it cost?", zh: "就這些。多少錢？" },
            { speaker: "M_Chef", text: "Il totale è quindici euro e cinquanta.", en: "The total is fifteen fifty.", zh: "總共十五歐元五角。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Ordering a Side Dish or Appetizer",
          scene_zh: "第 8 天 — 點配菜或開胃菜",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Vorrei ordinare un antipasto.", en: "Good morning! I would like to order an appetizer.", zh: "早安！我想要點一份開胃菜。" },
            { speaker: "M_Chef", text: "Quale antipasto?", en: "Which appetizer?", zh: "哪一種開胃菜？" },
            { speaker: "Female", text: "Prendo il piatto di affettati e formaggi.", en: "I'll take the plate of cold cuts and cheeses.", zh: "我要點綜合冷盤和起司拼盤。" },
            { speaker: "M_Chef", text: "Ottima scelta. E come piatto principale?", en: "Great choice. And for the main course?", zh: "很棒的選擇。那主菜呢？" },
            { speaker: "Female", text: "Poi un'insalata mista, per favore.", en: "Then a mixed salad, please.", zh: "然後再來一份綜合沙拉，謝謝。" },
            { speaker: "M_Chef", text: "Affettati, formaggi e insalata. Tutto chiaro.", en: "Cold cuts, cheeses, and salad. Everything is clear.", zh: "冷盤、起司和沙拉。都清楚了。" },
            { speaker: "Female", text: "Grazie!", en: "Thank you!", zh: "謝謝！" },
            { speaker: "M_Chef", text: "Prego! A lei!", en: "You're welcome! Here you go!", zh: "不客氣！給您！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Asking for a Doggy Bag",
          scene_zh: "第 9 天 — 詢問能否打包",
          dialogue: [
            { speaker: "Female", text: "Il cibo era delizioso, grazie! Ma non riesco a finire tutto.", en: "The food was delicious, thank you! But I can't finish everything.", zh: "食物很美味，謝謝！但我吃不完。" },
            { speaker: "M_Chef", text: "Vuole che Le prepariamo una vaschetta per portare via?", en: "Would you like us to prepare a container for you to take away?", zh: "您需要我們為您準備一個盒子打包嗎？" },
            { speaker: "Female", text: "Sì, per favore. Posso avere il resto da portare via?", en: "Yes, please. Can I have the rest to take away?", zh: "好的，麻煩了。我可以把剩下的打包嗎？" },
            { speaker: "M_Chef", text: "Certo! Lo portiamo subito in cucina.", en: "Of course! We'll take it to the kitchen right away.", zh: "當然！我們馬上送去廚房。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "M_Chef", text: "Prego! Ha bisogno di altro?", en: "You're welcome! Do you need anything else?", zh: "不客氣！還需要別的嗎？" },
            { speaker: "Female", text: "No, va bene così. Grazie!", en: "No, it's fine. Thanks!", zh: "不用了，這樣就好。謝謝！" },
            { speaker: "M_Chef", text: "Quando vuole il conto, mi chiami.", en: "When you want the bill, just call me.", zh: "如果您需要帳單，再叫我。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Complimenting the Food",
          scene_zh: "第 10 天 — 讚美食物與結帳",
          dialogue: [
            { speaker: "Female", text: "Scusi, posso dirle che la pasta era squisita!", en: "Excuse me, may I tell you that the pasta was exquisite!", zh: "不好意思，我想說這義大利麵太美味了！" },
            { speaker: "M_Chef", text: "La ringrazio molto! Lo dirò allo chef.", en: "Thank you very much! I will tell the chef.", zh: "非常感謝您！我會轉告主廚。" },
            { speaker: "Female", text: "Il tiramisù è anche il migliore che abbia mai mangiato!", en: "The tiramisu is also the best I have ever eaten!", zh: "這份提拉米蘇也是我吃過最棒的！" },
            { speaker: "M_Chef", text: "Sono felice che Le sia piaciuto così tanto. Grazie ancora.", en: "I'm happy that you liked it so much. Thank you again.", zh: "很高興您這麼喜歡。再次感謝。" },
            { speaker: "Female", text: "È un piacere. Possiamo avere il conto, per favore?", en: "It's my pleasure. Can we have the bill, please?", zh: "這是我的榮幸。可以給我們帳單嗎？" },
            { speaker: "M_Chef", text: "Certo, arriva subito.", en: "Of course, it's coming right away.", zh: "好的，馬上就來。" },
            { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "M_Chef", text: "Sì, certo. Ecco il POS.", en: "Yes, of course. Here is the card machine.", zh: "好的，當然。這是刷卡機。" }
          ]
        },
        {
          sceneId: 11,
          scene: "Day 11 - Asking for the Bill and Paying",
          scene_zh: "第 11 天 - 結帳與付款",
          dialogue: [
            { speaker: "Female", text: "Mi scusi, posso avere il conto, per favore?", en: "Excuse me, can I have the bill, please?", zh: "不好意思，可以給我帳單嗎？" },
            { speaker: "M_Chef", text: "Certo. Ecco a lei.", en: "Of course. Here you are.", zh: "好的。這是您的帳單。" },
            { speaker: "Female", text: "Grazie. Accettate carte di credito?", en: "Thanks. Do you accept credit cards?", zh: "謝謝。你們接受信用卡嗎？" },
            { speaker: "M_Chef", text: "Sì, accettiamo carte. Il totale è venticinque euro.", en: "Yes, we accept cards. The total is twenty-five euros.", zh: "是的，我們接受刷卡。總共二十五歐元。" },
            { speaker: "Female", text: "Perfetto. Posso avere anche la ricevuta?", en: "Perfect. Can I also have the receipt?", zh: "太好了。可以順便給我收據嗎？" },
            { speaker: "M_Chef", text: "Certamente. Ecco la ricevuta.", en: "Certainly. Here is the receipt.", zh: "當然。這是您的收據。" },
            { speaker: "Female", text: "Grazie mille! Buona serata!", en: "Thank you very much! Have a good evening!", zh: "非常感謝！祝您有個愉快的夜晚！" },
            { speaker: "M_Chef", text: "Anche a lei, grazie! Arrivederci!", en: "You too, thanks! Goodbye!", zh: "也祝您如此，謝謝！再見！" }
          ]
        }
      ]
    }
   // new
  ]
};
