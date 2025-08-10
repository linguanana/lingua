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
            { speaker: "M_chef", text: "Subito!", en: "Right away!", zh: "馬上來！" },
            { speaker: "M_chef", text: "Ecco il caffè. Altro?", en: "Here’s your coffee. Anything else?", zh: "您的咖啡。還需要別的嗎？" },
            { speaker: "Female", text: "No, grazie. Quanto costa?", en: "No, thanks. How much is it?", zh: "不用了，謝謝。多少錢？" },
            { speaker: "M_chef", text: "Un euro e dieci.", en: "One euro ten.", zh: "一歐元一角。" },
            { speaker: "Female", text: "Ecco a lei. Grazie!", en: "Here you go. Thank you!", zh: "給您，謝謝！" },
            { speaker: "M_chef", text: "Grazie a lei. Arrivederci!", en: "Thanks to you. Goodbye!", zh: "也謝謝您，再見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Asking for sugar and milk",
          scene_zh: "第 2 天 — 詢問要糖和牛奶",
          dialogue: [
            { speaker: "F_std", text: "Salve! Che bella giornata!", en: "Hello! What a lovely day!", zh: "您好！今天天氣真好！" },
            { speaker: "F_std", text: "Un cappuccino, per favore.", en: "A cappuccino, please.", zh: "一杯卡布奇諾，謝謝。" },
            { speaker: "M_std", text: "Con zucchero?", en: "With sugar?", zh: "要加糖嗎？" },
            { speaker: "F_std", text: "Sì, grazie.", en: "Yes, thanks.", zh: "要，謝謝。" },
            { speaker: "M_std", text: "Con latte?", en: "With milk?", zh: "要加牛奶嗎？" },
            { speaker: "F_std", text: "No, senza latte.", en: "No, without milk.", zh: "不要，不加牛奶。" },
            { speaker: "M_std", text: "Va bene. Sono due euro.", en: "Alright. That’s two euros.", zh: "好的，兩歐元。" },
            { speaker: "F_std", text: "Ecco. Alla prossima!", en: "Here you go. See you next time!!", zh: "給您，下次見囉！" },
            { speaker: "M_std", text: "A presto! Buona giornata!", en: "See you soon! Have a great day!", zh: "下次見！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3: With Milk, hot and no sugar",
          scene_zh: "第 3 天 — 加牛奶、要熱、不加糖",
          dialogue: [
            { speaker: "F_wave", text: "Ciao amici!", en: "Hey friends!", zh: "嗨朋友們！" },
            { speaker: "M_wave", text: "Ciao! Benvenuta!", en: "Hi! Welcome!", zh: "哈囉！歡迎光臨！" },
            { speaker: "F_wave", text: "Vorrei un caffè macchiato, per favore.", en: "I would like a macchiato, please.", zh: "我想要一杯瑪奇朵，謝謝。" },
            { speaker: "M_wave", text: "Per qui o da portare via?", en: "For here or to take away?", zh: "這裡喝還是外帶？" },
            { speaker: "F_wave", text: "Da portare via, grazie.", en: "To take away, thanks.", zh: "外帶，謝謝。" },
            { speaker: "M_wave", text: "Con zucchero?", en: "With sugar?", zh: "要加糖嗎？" },
            { speaker: "F_wave", text: "No, grazie.", en: "No, thanks.", zh: "不用，謝謝。" },
            { speaker: "M_wave", text: "Va bene. Sono un euro e cinquanta.", en: "Alright. That’s one euro fifty.", zh: "好的，一歐五角。" },
            { speaker: "F_wave", text: "Ecco. Buona giornata!", en: "Here you go. Have a nice day!", zh: "給您，祝您有美好的一天！" },
            { speaker: "F_wave", text: "Anche a lei!", en: "You too!", zh: "您也是！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4: Large Size",
          scene_zh: "第 4 天 — 大杯尺寸",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "M_chef", text: "Buongiorno! Come posso aiutare?", en: "Good morning! How can I help?", zh: "早安！有什麼需要幫忙的？" },
            { speaker: "Female", text: "Avete caffè in tazza grande?", en: "Do you have coffee in a large cup?", zh: "有大杯的咖啡嗎？" },
            { speaker: "M_chef", text: "Certo! Vuoi un caffè lungo?", en: "Sure! Do you want a long coffee?", zh: "當然！您想要淡一點的咖啡嗎？" },
            { speaker: "Female", text: "Sì, lungo e grande, grazie.", en: "Yes, long and large, thanks.", zh: "是的，大杯的淡咖啡，謝謝。" },
            { speaker: "M_chef", text: "Subito!", en: "Coming right up!", zh: "馬上來！" },
            { speaker: "Female", text: "A dopo!", en: "See you later!", zh: "待會見！" }
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
          scene: "Day 7: Paying by Card",
          scene_zh: "第 7 天 — 刷卡付款",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "M_chef", text: "Buongiorno! Desidera?", en: "Good morning! What would you like?", zh: "早安！您想要什麼？" },
            { speaker: "Female", text: "Vorrei un caffè macchiato, per favore.", en: "I’d like a macchiato, please.", zh: "我想要一杯瑪奇朵，謝謝。" },
            { speaker: "M_chef", text: "Con zucchero o latte?", en: "With sugar or milk?", zh: "加糖還是加奶？" },
            { speaker: "Female", text: "Con un po’ di zucchero, grazie.", en: "With a little sugar, thanks.", zh: "加一點糖，謝謝。" },
            { speaker: "M_chef", text: "Perfetto, arrivo subito.", en: "Perfect, coming right up.", zh: "好的，馬上來。" },
            { speaker: "M_chef", text: "Ecco il suo caffè macchiato.", en: "Here’s your macchiato.", zh: "您的瑪奇朵好了。" },
            { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "M_chef", text: "Sì, accettiamo carte.", en: "Yes, we accept cards.", zh: "是的，我們接受刷卡。" },
            { speaker: "Female", text: "Perfetto. Grazie mille!", en: "Perfect. Thank you so much!", zh: "太好了，非常感謝！" },
            { speaker: "M_chef", text: "Prego. Vuoi la ricevuta?", en: "You're welcome. Do you want the receipt?", zh: "不客氣。您要收據嗎？" },
            { speaker: "Female", text: "No, grazie.", en: "No, thanks.", zh: "不用了，謝謝。" },
            { speaker: "M_chef", text: "Grazie a te! Buona giornata!", en: "Thanks to you! Have a nice day!", zh: "也謝謝您！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8: To Go",
          scene_zh: "第 8 天 — 外帶",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Un cappuccino, da portare via.", en: "Good morning! A cappuccino to go.", zh: "早安！請給我一杯外帶的卡布奇諾。" },
            { speaker: "M_chef", text: "Con latte intero o scremato?", en: "With whole milk or skim?", zh: "您要全脂還是低脂牛奶？" },
            { speaker: "Female", text: "Intero, grazie.", en: "Whole, thanks.", zh: "全脂的，謝謝。" },
            { speaker: "M_chef", text: "Ecco. Buona giornata!", en: "Here you go. Have a great day!", zh: "給您。祝您有美好的一天！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9: Asking for Recommendations",
          scene_zh: "第 9 天 — 詢問推薦",
          dialogue: [
            { speaker: "Female", text: "Cosa mi consiglia oggi?", en: "What do you recommend today?", zh: "你今天有什麼推薦的嗎？" },
            { speaker: "M_chef", text: "Il nostro marocchino è molto richiesto.", en: "Our marocchino is very popular.", zh: "我們的瑪洛奇諾很受歡迎喔。" },
            { speaker: "Female", text: "Perfetto, lo prendo!", en: "Perfect, I’ll take it!", zh: "太好了，我要一杯！" }
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
