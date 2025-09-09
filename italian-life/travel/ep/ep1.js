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
            { speaker: "Female", text: "Buongiorno! Un caffè, per favore.", en: "Good morning! An espresso, please.", zh: "早安！一杯濃縮咖啡，謝謝。" },
            { speaker: "M_Chef", text: "Subito! Al banco?", en: "Right away! At the counter?", zh: "馬上來！在吧台喝嗎？" },
            { speaker: "Female", text: "Sì, grazie. Prendo anche un po' d'acqua.", en: "Yes, thanks. I'll also have a bit of water.", zh: "是的，謝謝。我也來一點水。" },
            { speaker: "M_Chef", text: "Perfetto. Un caffè e acqua. Sono un euro e dieci.", en: "Perfect. One espresso and water. That's one euro ten.", zh: "好的。一杯咖啡和水。總共是一歐元一角。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", en: "Here you go. Thank you so much!", zh: "給您。非常感謝！" },
            { speaker: "M_Chef", text: "Grazie a lei. Buona giornata!", en: "Thanks to you. Have a nice day!", zh: "也謝謝您。祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Asking for sugar and milk",
          scene_zh: "第 2 天 — 詢問要糖和牛奶",
          dialogue: [
            { speaker: "Female", text: "Salve! Che bella giornata!", en: "Hello! What a lovely day!", zh: "您好！今天天氣真好！" },
            { speaker: "Female", text: "Un cappuccino, per favore.", en: "A cappuccino, please.", zh: "一杯卡布奇諾，謝謝。" },
            { speaker: "M_Chef", text: "Con zucchero o senza?", en: "With sugar or without?", zh: "要加糖還是不加？" },
            { speaker: "Female", text: "Con un po' di zucchero, grazie.", en: "With a little sugar, thanks.", zh: "加一點糖，謝謝。" },
            { speaker: "M_Chef", text: "E con latte intero o scremato?", en: "And with whole milk or skim milk?", zh: "那要全脂還是低脂牛奶？" },
            { speaker: "Female", text: "Intero, per favore.", en: "Whole milk, please.", zh: "麻煩全脂的。" },
            { speaker: "M_Chef", text: "Va bene. Sono due euro.", en: "Alright. That’s two euros.", zh: "好的，兩歐元。" },
            { speaker: "Female", text: "Ecco. Alla prossima!", en: "Here you go. See you next time!!", zh: "給您，下次見囉！" },
            { speaker: "M_Chef", text: "A presto! Buona giornata!", en: "See you soon! Have a great day!", zh: "下次見！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3: Ordering a Macchiato To Go",
          scene_zh: "第 3 天：點一杯瑪奇朵並外帶",
          dialogue: [
            { speaker: "Female", text: "Vorrei un caffè macchiato, per favore.", en: "I would like a macchiato, please.", zh: "我想要一杯瑪奇朵，謝謝。" },
            { speaker: "M_Chef", text: "Per qui o da portare via?", en: "For here or to take away?", zh: "這裡喝還是外帶？" },
            { speaker: "Female", text: "Da portare via, grazie.", en: "To take away, thanks.", zh: "外帶，謝謝。" },
            { speaker: "M_Chef", text: "Va bene. Sono un euro e cinquanta.", en: "Alright. That's one euro fifty.", zh: "好的，一歐元五角。" },
            { speaker: "Female", text: "Ecco a lei. Buona giornata!", en: "Here you go. Have a nice day!", zh: "給您。祝您有美好的一天！" },
            { speaker: "M_Chef", text: "Grazie! Anche a te!", en: "Thanks! You too!", zh: "謝謝！你也是！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4: Asking for a Small vs. Large",
          scene_zh: "第四天：詢問「小杯」與「大杯」",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "M_Chef", text: "Buongiorno! Come posso aiutare?", en: "Good morning! How can I help?", zh: "早安！有什麼需要幫忙的？" },
            { speaker: "Female", text: "Avete caffè in tazza grande?", en: "Do you have coffee in a large cup?", zh: "有大杯的咖啡嗎？" },
            { speaker: "M_Chef", text: "Certo! Vuoi un caffè lungo?", en: "Sure! Do you want a long coffee?", zh: "當然！您想要淡一點的咖啡嗎？" },
            { speaker: "Female", text: "Sì, lungo e grande, grazie. ", en: "Yes, long and large, thanks.", zh: "是的，大杯的淡咖啡，謝謝。" },
            { speaker: "Female", text: "Allora posso avere anche un espresso?", en: "then can I also have an espresso?", zh: "那我可以再來一杯濃縮咖啡嗎？" },
            { speaker: "M_Chef", text: "Per un caffè normale, usiamo solo tazza piccola.", en: "For a normal espresso, we only use a small cup.", zh: "對於濃縮咖啡，我們只用小杯喔。" },
            { speaker: "Female", text: "Ah, capisco. Allora prendo una tazza piccola. Grazie!", en: "Ah, I understand. I'll take a small cup then. Thanks!", zh: "啊，我懂了。那我來一杯小杯的。謝謝！" },
            { speaker: "M_Chef", text: "Prego. Ecco a lei.", en: "You're welcome. Here you go.", zh: "不客氣。這給您。" },
            { speaker: "Female", text: "Grazie! A dopo!", en: "Thank you. See you later!", zh: "謝謝！待會見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5: Iced Coffee Options",
          scene_zh: "第 5 天 — 冰咖啡選項",
          dialogue: [
            { speaker: "Female", text: "Salve! Fa caldo oggi!", en: "Hello! It’s hot today!", zh: "哈囉！今天好熱啊！" },
            { speaker: "M_Chef", text: "Verissimo! Vuoi qualcosa di fresco?", en: "Very true! Want something cold?", zh: "真的！您要來點冰的嗎？" },
            { speaker: "Female", text: "Avete caffè freddo?", en: "Do you have iced coffee?", zh: "你們有冰咖啡嗎？" },
            { speaker: "M_Chef", text: "Certo! Puoi scegliere tra caffè con ghiaccio o caffè shakerato.", en: "Sure! You can choose between coffee with ice or a shaken coffee.", zh: "當然！您可以選擇加冰塊的咖啡，或是搖的冰咖啡。" },
            { speaker: "Female", text: "Come si chiama quello shakerato?", en: "What do you call the shaken one?", zh: "那種搖的叫什麼名字？" },
            { speaker: "M_Chef", text: "Si chiama 'caffè shakerato'. Molto popolare in estate!", en: "It's called 'caffè shakerato'. Very popular in summer!", zh: "叫做 caffè shakerato，是夏天很受歡迎的！" },
            { speaker: "Female", text: "Interessante! Allora prendo un caffè shakerato.", en: "Interesting! Then I’ll take a caffè shakerato.", zh: "有趣！那我來一杯 caffè shakerato。" },
            { speaker: "M_Chef", text: "Perfetto! Lo preparo subito.", en: "Perfect! I’ll make it right away.", zh: "好的，我馬上幫您準備。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" },
            { speaker: "M_Chef", text: "Ecco qua. Buon fresco!", en: "Here you go. Stay cool!", zh: "給您。消暑一下吧！" },
            { speaker: "M_Chef", text: "A presto! Goditi il fresco!", en: "See you soon! Enjoy the cool!", zh: "下次見！好好消暑喔！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6: Paying for Coffee",
          scene_zh: "第 6 天 — 付款（現金或刷卡）",
          dialogue: [
            { speaker: "Female", text: "Quanto costa il caffè?", en: "How much is the coffee?", zh: "這杯咖啡多少錢？" },
            { speaker: "M_Chef", text: "Un euro e cinquanta.", en: "One euro fifty.", zh: "一歐五。" },
            { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "M_Chef", text: "Sì, accettiamo carte.", en: "Yes, we accept cards.", zh: "是的，我們接受刷卡。" },
            { speaker: "Female", text: "Perfetto. Grazie mille!", en: "Perfect. Thank you so much!", zh: "太好了，非常感謝！" },
            { speaker: "M_Chef", text: "Vuoi la ricevuta?", en: "Do you want the receipt?", zh: "您要收據嗎？" },
            { speaker: "Female", text: "No, grazie.", en: "No, thanks.", zh: "不用了，謝謝。" },
            { speaker: "Female", text: "O... ecco due euro.", en: "Or... here’s two euros.", zh: "或者... 這裡是兩歐。" },
            { speaker: "M_Chef", text: "Hai bisogno del resto?", en: "Do you need change?", zh: "需要找零嗎？" },
            { speaker: "Female", text: "No, va bene così. Grazie!", en: "No, it's fine like this. Thanks!", zh: "不用了，這樣就好。謝謝！" },
            { speaker: "M_Chef", text: "Grazie a te! Buona giornata!", en: "Thanks to you! Have a nice day!", zh: "也謝謝您！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7: Asking for Small Favors (Napkins, Sitting, etc.)",
          scene_zh: "第 7 天：詢問小事 (餐巾紙、座位等)",
          dialogue: [
            { speaker: "Female", text: "Posso sedermi qui?", en: "Can I sit here?", zh: "我可以坐在這裡嗎？" },
            { speaker: "M_Chef", text: "Sì, ma per il servizio al tavolo c'è un costo extra.", en: "Yes, but there is an extra cost for table service.", zh: "可以，但座位服務會有額外費用喔。" },
            { speaker: "Female", text: "Ah, capisco. Non fa niente, allora prendo il mio caffè al bancone. E posso avere un tovagliolo in più?", en: "Ah, I see. Never mind, I'll take my coffee at the counter then. And can I have an extra napkin?", zh: "啊，我懂了。沒關係，那我還是站在吧台喝吧。可以多給我一張餐巾紙嗎？" },
            { speaker: "M_Chef", text: "Certo, eccolo. E il caffè è pronto!", en: "Of course, here it is. And your coffee is ready!", zh: "當然，給您。咖啡已經好了！" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "M_Chef", text: "Prego! Ciao!", en: "You're welcome! Bye!", zh: "不客氣！再見！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8: Ordering a Latte Macchiato with a Pastry",
          scene_zh: "第 8 天：點一杯拿鐵瑪奇朵和點心",
          dialogue: [
            { speaker: "Female", text: "Salve! Un latte macchiato e un cornetto semplice, per favore.", en: "Hello! A latte macchiato and a plain croissant, please.", zh: "您好！一杯拿鐵瑪奇朵和一個原味可頌，謝謝。" },
            { speaker: "M_Chef", text: "Subito. Mangia qui o porta via?", en: "Right away. Eating here or taking away?", zh: "馬上好。是在這裡吃還是外帶？" },
            { speaker: "Female", text: "Mangio qui. Grazie.", en: "I’ll eat here. Thanks.", zh: "我在這裡吃。謝謝。" },
            { speaker: "M_Chef", text: "Il totale è quattro euro e venti.", en: "The total is four euros twenty.", zh: "總共四歐元兩角。" },
            { speaker: "Female", text: "Ecco a lei. Grazie!", en: "Here you go. Thanks!", zh: "給您。謝謝！" },
            { speaker: "M_Chef", text: "Prego! A te!", en: "You're welcome! For you!", zh: "不客氣！給您！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9: Asking for a Recommendation",
          scene_zh: "第 9 天：如何向店員詢問推薦",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Cosa mi consiglia di provare oggi?", en: "Good morning! What do you recommend I try today?", zh: "早安！你今天有什麼推薦的嗎？" },
            { speaker: "M_Chef", text: "Oggi abbiamo un ottimo caffè al ginseng, molto energizzante.", en: "Today we have a great ginseng coffee, it's very energizing.", zh: "今天我們有很棒的人參咖啡，很提神。" },
            { speaker: "Female", text: "Interessante! Allora prendo quello.", en: "Interesting! I'll have that then.", zh: "聽起來不錯！那我要這個。" },
            { speaker: "M_Chef", text: "Ottima scelta! Arriva subito.", en: "Great choice! Coming right up.", zh: "很棒的選擇！馬上來。" },
            { speaker: "Female", text: "Grazie!", en: "Thanks!", zh: "謝謝！" },
            { speaker: "M_Chef", text: "Prego!", en: "You're welcome!", zh: "不客氣！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10: Ordering a Double Espresso",
          scene_zh: "第 10 天 — 點一杯雙份濃縮咖啡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Potrei avere un caffè doppio, per favore?", en: "Good morning! Could I have a double espresso, please?", zh: "早安！可以給我一杯雙份濃縮咖啡嗎？" },
            { speaker: "M_Chef", text: "Subito! Lo vuoi al bancone?", en: "Right away! Do you want it at the counter?", zh: "馬上來！在吧台喝嗎？" },
            { speaker: "Female", text: "Sì, al bancone va bene. Grazie.", en: "Yes, at the counter is fine. Thanks.", zh: "好的，在吧台就好。謝謝。" },
            { speaker: "M_Chef", text: "Perfetto. Per il doppio sono due euro e trenta.", en: "Perfect. For the double espresso, it's two euros thirty.", zh: "好的。雙份是兩歐元三角。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", en: "Here you go. Thank you so much!", zh: "給您。非常感謝！" },
            { speaker: "M_Chef", text: "Prego! Ci vediamo!", en: "You're welcome! See you!", zh: "不客氣！再見！" }
          ]
        }
      ]
    },
    {
      topicId: 2,
      topic: "10 Italian Desserts 🍰 You Must Try - One Example a Day",
      topic_zh: "10 款必嚐的義大利甜點 🍰 - 每天一個例子",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Tiramisù: with alcohol or homemade?",
          scene_zh: "第 1 天 — 提拉米蘇：含酒精還是自製？",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Avete il tiramisù oggi?", en: "Good morning! Do you have tiramisù today?", zh: "早安！你們今天有提拉米蘇嗎？" },
            { speaker: "M_Chef", text: "Sì, certo! È fatto in casa.", en: "Yes, of course! It’s homemade.", zh: "有的，是我們自製的。" },
            { speaker: "Female", text: "Contiene liquore?", en: "Does it contain alcohol?", zh: "裡面有酒嗎？" },
            { speaker: "M_Chef", text: "Solo un po’ di Marsala. Vuole provarlo?", en: "Just a bit of Marsala wine. Want to try it?", zh: "只有一點馬沙拉酒。要來一份嗎？" },
            { speaker: "Female", text: "Sì, grazie. Uno per me.", en: "Yes, thank you. One for me.", zh: "好，謝謝，來一個。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Cannoli: flavor choices",
          scene_zh: "第 2 天 — 卡諾里：口味選擇",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Che tipo di cannoli avete?", en: "Good evening! What kinds of cannoli do you have?", zh: "晚安！你們有什麼口味的卡諾里？" },
            { speaker: "M_Chef", text: "Al cioccolato, alla ricotta e al pistacchio.", en: "Chocolate, ricotta, and pistachio.", zh: "有巧克力、乳酪、還有開心果口味。" },
            { speaker: "Female", text: "Ne prendo uno al pistacchio.", en: "I’ll take one pistachio.", zh: "我要一個開心果口味的。" },
            { speaker: "M_Chef", text: "Subito!", en: "Right away!", zh: "馬上來！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Affogato: espresso over gelato",
          scene_zh: "第 3 天 — 阿佛加托：咖啡淋冰淇淋",
          dialogue: [
            { speaker: "Female", text: "Ciao! Cos’è l’affogato al caffè?", en: "Hi! What is affogato al caffè?", zh: "嗨！什麼是 affogato 咖啡淋冰淇淋？" },
            { speaker: "M_Chef", text: "È gelato alla vaniglia con espresso caldo versato sopra.", en: "It’s vanilla gelato with hot espresso poured over it.", zh: "是香草冰淇淋，上面澆熱濃縮咖啡。" },
            { speaker: "Female", text: "Perfetto! Lo prendo!", en: "Perfect! I’ll take it!", zh: "太棒了！我要一份！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Panna Cotta: sauce options",
          scene_zh: "第 4 天 — 奶酪布丁：醬料選擇",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Che salse avete per la panna cotta?", en: "Good morning! What sauces do you have for panna cotta?", zh: "早安！你們的奶酪有什麼醬料可選？" },
            { speaker: "M_Chef", text: "Fragola, caramello o cioccolato.", en: "Strawberry, caramel, or chocolate.", zh: "草莓、焦糖或巧克力醬。" },
            { speaker: "Female", text: "Fragola, per favore.", en: "Strawberry, please.", zh: "我要草莓口味的，謝謝。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Gelato: flavors and cone or cup",
          scene_zh: "第 5 天 — 義式冰淇淋：口味與餅乾杯",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che gusti di gelato ci sono oggi?", en: "Hi! What gelato flavors do you have today?", zh: "嗨！今天有什麼口味的義式冰淇淋？" },
            { speaker: "M_Chef", text: "Limone, cioccolato, fragola e nocciola.", en: "Lemon, chocolate, strawberry, and hazelnut.", zh: "檸檬、巧克力、草莓、榛果。" },
            { speaker: "Female", text: "Un cono piccolo, cioccolato e nocciola.", en: "A small cone, chocolate and hazelnut.", zh: "我要一個小的甜筒，巧克力和榛果口味。" },
            { speaker: "M_Chef", text: "Con cialda croccante?", en: "With a crunchy cone?", zh: "要脆皮餅乾杯嗎？" },
            { speaker: "Female", text: "Sì, grazie!", en: "Yes, thanks!", zh: "好，謝謝！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Babà al rum: a boozy dessert",
          scene_zh: "第 6 天 — 蘭姆酒巴巴：含酒甜點",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Com’è il babà al rum?", en: "Good morning! How’s the babà al rum?", zh: "早安！請問這個蘭姆酒蛋糕怎麼樣？" },
            { speaker: "M_Chef", text: "È molto soffice e con un gusto deciso di rum.", en: "It’s very soft with a strong rum flavor.", zh: "非常鬆軟，而且有濃濃的蘭姆酒味。" },
            { speaker: "Female", text: "Ne prendo uno. Lo mangio subito.", en: "I’ll take one. I’ll eat it right away.", zh: "我要一個，馬上吃掉。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Crostata: Italian jam tart",
          scene_zh: "第 7 天 — 果醬派：義式傳統甜點",
          dialogue: [
            { speaker: "Female", text: "Ciao! Quali crostate avete oggi?", en: "Hi! What crostatas do you have today?", zh: "嗨！今天有什麼口味的果醬派？" },
            { speaker: "M_Chef", text: "Albicocca, frutti di bosco e mela.", en: "Apricot, berries, and apple.", zh: "杏桃、野莓和蘋果口味。" },
            { speaker: "Female", text: "Una alla mela, grazie.", en: "An apple one, please.", zh: "我要蘋果的，謝謝。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Profiteroles: cream puffs with chocolate",
          scene_zh: "第 8 天 — 泡芙球：奶油與巧克力",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Avete i profiteroles?", en: "Good evening! Do you have profiteroles?", zh: "晚上好！你們有奶油泡芙嗎？" },
            { speaker: "M_Chef", text: "Sì, con panna e copertura al cioccolato.", en: "Yes, with cream and chocolate topping.", zh: "有的，有奶油餡，淋上巧克力醬。" },
            { speaker: "Female", text: "Perfetto. Uno per me.", en: "Perfect. One for me.", zh: "太好了，來一份。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Sfogliatella: crispy or not?",
          scene_zh: "第 9 天 — 千層貝殼酥：酥脆口感？",
          dialogue: [
            { speaker: "Female", text: "Salve! La sfogliatella è croccante?", en: "Hi! Is the sfogliatella crunchy?", zh: "您好！這個千層酥脆嗎？" },
            { speaker: "M_Chef", text: "Appena sfornata! Croccantissima!", en: "Just baked! Super crunchy!", zh: "剛出爐的！超酥脆！" },
            { speaker: "Female", text: "Ne voglio una!", en: "I want one!", zh: "我要一個！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Zeppole: festive fried sweets?",
          scene_zh: "第 10 天 — 澤波萊：節日限定炸甜點？",
          dialogue: [
            { speaker: "Female", text: "Avete le zeppole oggi?", en: "Do you have zeppole today?", zh: "今天有炸泡芙嗎？" },
            { speaker: "M_Chef", text: "Sì, freschissime! Appena fatte.", en: "Yes, super fresh! Just made.", zh: "有的，非常新鮮！剛炸好的。" },
            { speaker: "Female", text: "Ne prendo due allora!", en: "I’ll take two then!", zh: "那我要兩個！" }
          ]
        }
      ]
    }
   // new
  ]
};
