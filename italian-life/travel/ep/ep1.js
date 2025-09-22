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
            { speaker: "Male", text: "Subito! Al banco?", en: "Right away! At the counter?", zh: "馬上來！在吧台喝嗎？" },
            { speaker: "Female", text: "Sì, grazie. Prendo anche un po' d'acqua.", en: "Yes, thanks. I'll also have a bit of water.", zh: "是的，謝謝。我也來一點水。" },
            { speaker: "Male", text: "Perfetto. Un caffè e acqua. Sono un euro e dieci.", en: "Perfect. One espresso and water. That's one euro ten.", zh: "好的。一杯咖啡和水。總共是一歐元一角。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", en: "Here you go. Thank you so much!", zh: "給您。非常感謝！" },
            { speaker: "Male", text: "Grazie a lei. Buona giornata!", en: "Thanks to you. Have a nice day!", zh: "也謝謝您。祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Asking for sugar and milk",
          scene_zh: "第 2 天 — 詢問要糖和牛奶",
          dialogue: [
            { speaker: "Female", text: "Salve! Che bella giornata!", en: "Hello! What a lovely day!", zh: "您好！今天天氣真好！" },
            { speaker: "Female", text: "Un cappuccino, per favore.", en: "A cappuccino, please.", zh: "一杯卡布奇諾，謝謝。" },
            { speaker: "Male", text: "Con zucchero o senza?", en: "With sugar or without?", zh: "要加糖還是不加？" },
            { speaker: "Female", text: "Con un po' di zucchero, grazie.", en: "With a little sugar, thanks.", zh: "加一點糖，謝謝。" },
            { speaker: "Male", text: "E con latte intero o scremato?", en: "And with whole milk or skim milk?", zh: "那要全脂還是低脂牛奶？" },
            { speaker: "Female", text: "Intero, per favore.", en: "Whole milk, please.", zh: "麻煩全脂的。" },
            { speaker: "Male", text: "Va bene. Sono due euro.", en: "Alright. That’s two euros.", zh: "好的，兩歐元。" },
            { speaker: "Female", text: "Ecco. Alla prossima!", en: "Here you go. See you next time!!", zh: "給您，下次見囉！" },
            { speaker: "Male", text: "A presto! Buona giornata!", en: "See you soon! Have a great day!", zh: "下次見！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3: Small vs. Large – Lungo & Americano",
          scene_zh: "第 3 天 — 小杯與大杯：淡咖啡與美式咖啡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Vorrei un caffè più grande, per favore.", en: "Good morning! I’d like a bigger coffee, please.", zh: "早安！我想要一杯大一點的咖啡。" },
            { speaker: "Male", text: "L’espresso è piccolo.", en: "Espresso is small.", zh: "濃縮咖啡是小杯的。" },
            { speaker: "Male", text: "Caffè lungo e americano sono grandi.", en: "Caffè lungo and americano are big.", zh: "淡咖啡和美式咖啡都是大杯的。" },
            { speaker: "Female", text: "Cos’è un caffè lungo?", en: "What is a caffè lungo?", zh: "什麼是淡咖啡？" },
            { speaker: "Male", text: "È un espresso con più acqua.", en: "It’s an espresso with more water.", zh: "就是濃縮咖啡加多一點水。" },
            { speaker: "Female", text: "E un americano?", en: "And an americano?", zh: "那美式咖啡呢？" },
            { speaker: "Male", text: "È un espresso allungato con acqua calda.", en: "It’s an espresso stretched with hot water.", zh: "就是濃縮咖啡加上熱水沖淡的。" },
            { speaker: "Female", text: "Capisco! Allora prendo un americano, grazie!", en: "I see! Then I’ll take an americano, thanks!", zh: "我懂了！那我來一杯美式咖啡，謝謝！" },
            { speaker: "Male", text: "Perfetto! Ecco a lei.", en: "Perfect! Here you are.", zh: "太好了。這給您。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4: Latte Macchiato or Caffè Macchiato",
          scene_zh: "第 4 天：拿鐵瑪奇朵與瑪奇朵咖啡 — 外帶",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Vorrei un caffè macchiato, per favore.", en: "Good morning! I’d like a caffè macchiato, please.", zh: "早安！我想要一杯瑪奇朵咖啡，謝謝。" },
            { speaker: "Female", text: "Il caffè macchiato è con tanto latte, giusto?", en: "Caffè macchiato has a lot of milk, right?", zh: "瑪奇朵咖啡是很多牛奶的，對嗎？" },
            { speaker: "Male", text: "No, quello è il latte macchiato.", en: "No, that’s latte macchiato.", zh: "不，那是拿鐵瑪奇朵。" },
            { speaker: "Male", text: "Il caffè macchiato è espresso con un po’ di latte.", en: "Caffè macchiato is espresso with a little milk.", zh: "caffè macchiato 是濃縮咖啡加一點牛奶。" },
            { speaker: "Male", text: "Il latte macchiato è latte con un po’ di caffè.", en: "Latte macchiato is milk with a little coffee.", zh: "latte macchiato 是牛奶加一點咖啡。" },
            { speaker: "Female", text: "Quindi è come un cappuccino?", en: "So it’s like a cappuccino?", zh: "所以跟卡布奇諾一樣嗎？" },
            { speaker: "Male", text: "No. È espresso con latte caldo e tanta schiuma.", en: "No. It’s espresso with hot milk and a lot of foam.", zh: "不是的。它是濃縮咖啡加熱牛奶和很多奶泡。" },
            { speaker: "Female", text: "Capisco! Allora prendo un latte macchiato.", en: "I see. Then I’ll take a latte macchiato.", zh: "我懂了！那我來一杯拿鐵瑪奇朵。" },
            { speaker: "Male", text: "Perfetto. Sono tre euro.", en: "Perfect. That’s three euros.", zh: "太好了。三歐元。" },
            { speaker: "Female", text: "Ecco. Grazie mille!", en: "Here you go. Thank you very much!", zh: "給您。非常感謝！" },
            { speaker: "Male", text: "Prego! Buona giornata!", en: "You’re welcome! Have a nice day!", zh: "不客氣！祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5: Iced Coffee Options",
          scene_zh: "第 5 天 — 冰咖啡選項",
          dialogue: [
            { speaker: "Female", text: "Salve! Fa caldo oggi!", en: "Hello! It’s hot today!", zh: "哈囉！今天好熱啊！" },
            { speaker: "Male", text: "Verissimo! Vuoi un caffè freddo?", en: "Very true! Do you want an iced coffee?", zh: "真的！您要一杯冰咖啡嗎？" },
            { speaker: "Female", text: "Sì! Quali ci sono?", en: "Yes! Which ones are there?", zh: "要啊！有哪幾種？" },
            { speaker: "Male", text: "C’è il caffè con ghiaccio o il caffè shakerato.", en: "There’s coffee with ice or a shaken coffee.", zh: "有加冰塊的咖啡，或是搖的冰咖啡。" },
            { speaker: "Female", text: "Cos’è un caffè con ghiaccio?", en: "What is a caffè con ghiaccio?", zh: "什麼是 caffè con ghiaccio？" },
            { speaker: "Male", text: "È espresso con ghiaccio.", en: "It’s espresso with ice.", zh: "就是加冰塊的濃縮咖啡。" },
            { speaker: "Female", text: "E un caffè shakerato?", en: "And what about a caffè shakerato?", zh: "那 caffè shakerato 呢？" },
            { speaker: "Male", text: "È un espresso shakerato con ghiaccio e zucchero. ", en: "It’s an espresso shaken with ice and sugar.", zh: "就是濃縮咖啡加冰塊和糖去搖的。夏天很受歡迎！" },
            { speaker: "Female", text: "Interessante! Allora prendo un caffè shakerato.", en: "Interesting! Then I’ll take a caffè shakerato.", zh: "有趣！那我來一杯 caffè shakerato。" },
            { speaker: "Male", text: "Perfetto! Lo preparo subito.", en: "Perfect! I’ll make it right away.", zh: "好的，我馬上幫您準備。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" },
            { speaker: "Male", text: "Ecco qua. Buon fresco!", en: "Here you go. Stay cool!", zh: "給您。消暑一下吧！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6: Coffee Recommendations",
          scene_zh: "第 6 天 — 咖啡推薦",
          dialogue: [
            { speaker: "Female", text: "Cosa mi consiglia?", en: "What do you recommend?", zh: "你有什麼推薦的嗎？" },
            { speaker: "Male", text: "Dipende! Vuoi qualcosa di piccolo o di grande?", en: "It depends! Do you want something small or big?", zh: "看情況！您想要小杯的還是大杯的？" },
            { speaker: "Female", text: "Forse piccolo.", en: "Maybe small.", zh: "可能小杯的。" },
            { speaker: "Male", text: "C’è il caffè macchiato: un espresso con un po’ di latte.", en: "There’s the caffè macchiato: an espresso with a little milk.", zh: "有瑪奇朵咖啡：濃縮加一點牛奶。" },
            { speaker: "Male", text: "Un ristretto: più corto e molto forte.", en: "A ristretto: shorter and very strong.", zh: "或者 ristretto：更短、更濃烈的咖啡。" },
            { speaker: "Female", text: "Interessante!", en: "Interesting!", zh: "有趣！" },
            { speaker: "Male", text: "Allora un marocchino: espresso con cacao e latte.", en: "Then a marocchino: espresso with cocoa and milk.", zh: "marocchino：濃縮加上可可和牛奶。" },
            { speaker: "Male", text: "Un caffè corretto: espresso con un po’ di liquore.", en: "A caffè corretto: espresso with a little liqueur.", zh: "caffè corretto：濃縮咖啡加一點酒。" },
            { speaker: "Female", text: "Wow, ci sono tante opzioni!", en: "Wow, there are so many options!", zh: "哇，有好多選擇！" },
            { speaker: "Male", text: "Eh, certo! Siamo in Italia!", en: "Of course! This is Italy!", zh: "當然啦！這可是義大利！" },
            { speaker: "Female", text: "Allora oggi prendo un marocchino.", en: "Then today I’ll take a marocchino.", zh: "那今天我來一杯 marocchino。" },
            { speaker: "Male", text: "Ottima scelta! Arriva subito.", en: "Great choice! Coming right up.", zh: "很棒的選擇！馬上來。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7: With or Without Caffeine and Ginseng Coffee",
          scene_zh: "第 7 天 — 有咖啡因還是無咖啡因？還有人參咖啡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "Buongiorno! Cosa desidera?", en: "Good morning! What would you like?", zh: "早安！您要點什麼？" },
            { speaker: "Female", text: "Non so…", en: "I’m not sure…", zh: "我不太確定…" },
            { speaker: "Male", text: "Vuole provare caffè d’orzo o caffè al ginseng?", en: "Do you want to try barley coffee or ginseng coffee?", zh: "要不要嚐嚐大麥咖啡或人參咖啡？" },
            { speaker: "Female", text: "Il caffè al ginseng? È caffè con ginseng?", en: "Ginseng coffee? Is it coffee with ginseng?", zh: "人參咖啡？是咖啡加人參嗎？" },
            { speaker: "Male", text: "Non proprio. È un mix con caffè, latte, zucchero e ginseng.", en: "Not exactly. It’s a mix with coffee, milk, sugar, and ginseng.", zh: "不完全是。它是一種混合飲品，有咖啡、牛奶、糖和人參。" },
            { speaker: "Female", text: "E quale non ha caffeina?", en: "And which one has no caffeine?", zh: "那哪一個沒有咖啡因？" },
            { speaker: "Male", text: "Il caffè d’orzo non ha caffeina.", en: "Barley coffee has no caffeine.", zh: "大麥咖啡沒有咖啡因。" },
            { speaker: "Female", text: "Perfetto! Allora prendo un caffè d’orzo.", en: "Perfect! Then I’ll take a barley coffee.", zh: "太好了！那我來一杯大麥咖啡。" },
            { speaker: "Male", text: "Ottima scelta! Arriva subito.", en: "Great choice! Coming right up.", zh: "很棒的選擇！馬上來。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8: Asking for Small Favors (Napkins, Sitting, etc.)",
          scene_zh: "第 8 天：詢問小事 (餐巾紙、座位等)",
          dialogue: [
            { speaker: "Female", text: "Posso sedermi qui?", en: "Can I sit here?", zh: "我可以坐在這裡嗎？" },
            { speaker: "Male", text: "Sì.", en: "Yes.", zh: "可以。" },
            { speaker: "Male", text: "Al tavolo costa di più.", en: "It costs more at the table.", zh: "座位服務會有額外費用喔。" },
            { speaker: "Female", text: "Ah, capisco.", en: "Ah, I see.", zh: "啊，我懂了。" },
            { speaker: "Female", text: "Va bene, lo prendo al bancone.", en: "All right, I'll take my coffee at the counter.", zh: "沒關係，那我還是站在吧台喝吧。" },
            { speaker: "Female", text: "E posso avere un tovagliolo in più?", en: "And can I have an extra napkin?", zh: "可以多給我一張餐巾紙嗎？" },
            { speaker: "Male", text: "Certo, eccolo.", en: "Of course, here it is.", zh: "當然，給您。" },
            { speaker: "Male", text: "E il caffè è pronto!", en: "And your coffee is ready!", zh: "咖啡已經好了！" },
            { speaker: "Female", text: "Grazie mille!", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "Male", text: "Prego!", en: "You're welcome!", zh: "不客氣！" },
            { speaker: "Male", text: "Ciao!", en: "Bye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9: Ordering a Double Espresso (Double Shot)",
          scene_zh: "第 9 天 — 點一杯雙份濃縮咖啡）",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Prendo un caffè doppio, per favore?", en: "Good morning! I'll have a double espresso, please?", zh: "早安！我要一杯雙份濃縮咖啡" },
            { speaker: "Male", text: "Subito! Lo vuoi al bancone o al tavolo?", en: "Right away! Do you want it at the counter or at the table?", zh: "馬上來！要在吧台喝還是坐下來喝？" },
            { speaker: "Female", text: "Al bancone va bene. Grazie.", en: "At the counter is fine. Thanks.", zh: "在吧台就好。謝謝。" },
            { speaker: "Male", text: "Perfetto. Il caffè doppio è molto forte, due shot in una tazzina.", en: "Perfect. The double espresso is very strong, two shots in one cup.", zh: "好的。雙份濃縮很濃烈，就是一個小杯裡有兩份 espresso。" },
            { speaker: "Female", text: "Ottimo! Lo voglio proprio così.", en: "Great! That’s exactly what I want.", zh: "太棒了！我就是要這樣的。" },
            { speaker: "Male", text: "Arriva subito.", en: "Coming right up.", zh: "馬上來。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10: Paying for Coffee",
          scene_zh: "第 10 天 — 付款（現金或刷卡）",
          dialogue: [
            { speaker: "Female", text: "Quanto costa il caffè?", en: "How much is the coffee?", zh: "這杯咖啡多少錢？" },
            { speaker: "Male", text: "Un euro e cinquanta.", en: "One euro fifty.", zh: "一歐五。" },
            { speaker: "Female", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "Male", text: "Sì, accettiamo carte.", en: "Yes, we accept cards.", zh: "是的，我們接受刷卡。" },
            { speaker: "Female", text: "Perfetto. Grazie mille!", en: "Perfect. Thank you so much!", zh: "太好了，非常感謝！" },
            { speaker: "Male", text: "Vuoi la ricevuta?", en: "Do you want the receipt?", zh: "您要收據嗎？" },
            { speaker: "Female", text: "No, grazie.", en: "No, thanks.", zh: "不用了，謝謝。" },
            { speaker: "Female", text: "O... ecco due euro.", en: "Or... here’s two euros.", zh: "或者... 這裡是兩歐。" },
            { speaker: "Male", text: "Hai bisogno del resto?", en: "Do you need change?", zh: "需要找零嗎？" },
            { speaker: "Female", text: "No, va bene così. Grazie!", en: "No, it's fine like this. Thanks!", zh: "不用了，這樣就好。謝謝！" },
            { speaker: "Male", text: "Grazie a te! Buona giornata!", en: "Thanks to you! Have a nice day!", zh: "也謝謝您！祝您有個美好的一天！" }
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
          scene: "Day 1 – Gelato: flavors and cone or cup",
          scene_zh: "第 1 天 — 義式冰淇淋：口味與餅乾杯或小杯",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che gusti di gelato ci sono oggi?", en: "Hi! What gelato flavors do you have today?", zh: "嗨！今天有什麼口味的義式冰淇淋？" },
            { speaker: "Male", text: "Limone, cioccolato, fragola e nocciola.", en: "Lemon, chocolate, strawberry, and hazelnut.", zh: "檸檬、巧克力、草莓、榛果。" },

            { speaker: "Female", text: "Un cono piccolo al cioccolato, per me.", en: "A small cone with chocolate, for me.", zh: "我要一個小的甜筒，巧克力口味。" },
            { speaker: "Female", text: "E per lei, un cono grande alla nocciola.", en: "And for her, a big cone with hazelnut.", zh: "她要一個大的甜筒，榛果口味。" },
            { speaker: "Female", text: "E per lui, una coppetta piccola alla fragola.", en: "And for him, a small cup with strawberry.", zh: "他要一個小杯的，草莓口味。" },

            { speaker: "Male", text: "Perfetto. Con cialda croccante per i coni?", en: "Perfect. With crunchy cones for the cones?", zh: "太好了。甜筒要脆皮餅乾杯嗎？" },
            { speaker: "Female", text: "Sì, tutti con la cialda croccante, grazie!", en: "Yes, all with crunchy cones, thank you!", zh: "是的，都要脆皮餅乾杯，謝謝！" },

            { speaker: "Female", text: "Scusi, il cono e la coppetta costano uguale?", en: "Excuse me, does the cone and the cup cost the same?", zh: "請問，甜筒和小杯是一樣的價格嗎？" },
            { speaker: "Male", text: "Sì, il prezzo è lo stesso.", en: "Yes, the price is the same.", zh: "是的，價格一樣。" },

            { speaker: "Male", text: "Va bene, arrivo subito.", en: "Alright, coming right up.", zh: "好的，馬上來。" },
            { speaker: "Female", text: "Grazie mille, arrivederci!", en: "Thanks a lot, goodbye!", zh: "非常感謝，再見！" },
            { speaker: "Male", text: "Arrivederci, buona giornata!", en: "Goodbye, have a nice day!", zh: "再見，祝你有美好的一天！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Tiramisù: with alcohol or homemade?",
          scene_zh: "第 2 天 — 提拉米蘇：含酒精還是自製？",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Avete il tiramisù oggi?", en: "Good morning! Do you have tiramisù today?", zh: "早安！你們今天有提拉米蘇嗎？" },
            { speaker: "Male", text: "Sì, certo! È fatto in casa.", en: "Yes, of course! It’s homemade.", zh: "有的，是我們自製的。" },
            { speaker: "Female", text: "Contiene liquore?", en: "Does it contain alcohol?", zh: "裡面有酒嗎？" },
            { speaker: "Male", text: "Solo un po’ di Marsala. Vuole provarlo?", en: "Just a bit of Marsala wine. Want to try it?", zh: "只有一點馬沙拉酒。要來一份嗎？" },
            { speaker: "Female", text: "Sì, grazie. Uno per me.", en: "Yes, thank you. One for me.", zh: "好，謝謝，來一個。" },
            { speaker: "Male", text: "Prego!", en: "You’re welcome!", zh: "不客氣！" },
            { speaker: "Female", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" },
            { speaker: "Male", text: "A domani!", en: "See you tomorrow!", zh: "明天見！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Affogato: espresso over gelato",
          scene_zh: "第 3 天 — 阿佛加托：咖啡淋冰淇淋",
          dialogue: [
            { speaker: "Female", text: "Ciao! Cos’è l’affogato al caffè?", en: "Hi! What is affogato al caffè?", zh: "嗨！什麼是 affogato 咖啡淋冰淇淋？" },
            { speaker: "Male", text: "È gelato alla vaniglia con espresso caldo versato sopra.", en: "It’s vanilla gelato with hot espresso poured over it.", zh: "是香草冰淇淋，上面澆熱濃縮咖啡。" },
            { speaker: "Female", text: "Perfetto! Lo prendo!", en: "Perfect! I’ll take it!", zh: "太棒了！我要一份！" },
            { speaker: "Female", text: "Posso avere un cucchiaino?", en: "Can I have a small spoon?", zh: "可以給我一支小湯匙嗎？" },
            { speaker: "Male", text: "Certo, subito!", en: "Of course, right away!", zh: "當然，馬上來！" },
            { speaker: "Female", text: "Posso avere anche un tovagliolo?", en: "Can I also have a napkin?", zh: "我也可以要一張紙巾嗎？" },
            { speaker: "Male", text: "Certo, ecco a lei.", en: "Of course, here you are.", zh: "當然，給您。" },
            { speaker: "Female", text: "Grazie mille, arrivederci!", en: "Thanks a lot, goodbye!", zh: "非常感謝，再見！" },
            { speaker: "Male", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Cannoli: flavor choices",
          scene_zh: "第 4 天 — 卡諾里：口味選擇",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Che tipo di cannoli avete?", en: "Good evening! What kinds of cannoli do you have?", zh: "晚安！你們有什麼口味的卡諾里？" },
            { speaker: "Male", text: "Al cioccolato, alla ricotta e al pistacchio.", en: "Chocolate, ricotta, and pistachio.", zh: "有巧克力、乳酪、還有開心果口味。" },
            { speaker: "Female", text: "Ne prendo uno al pistacchio.", en: "I’ll take one pistachio.", zh: "我要一個開心果口味的。" },
            { speaker: "Male", text: "Subito!", en: "Right away!", zh: "馬上來！" },
            { speaker: "Female", text: "Posso avere un tovagliolo?", en: "Can I have a napkin?", zh: "可以給我一張紙巾嗎？" },
            { speaker: "Male", text: "Certo, ecco a lei.", en: "Of course, here you are.", zh: "當然，給您。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" },
            { speaker: "Male", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Panna Cotta: sauce options",
          scene_zh: "第 5 天 — 奶酪布丁：醬料選擇",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Cos’è la panna cotta?", en: "Good morning! What is panna cotta?", zh: "早安！什麼是奶酪布丁？" },
            { speaker: "Male", text: "È un dolce al cucchiaio, morbido, simile a un budino.", en: "It’s a spoon dessert, soft, similar to pudding.", zh: "它是一種用湯匙吃的甜點，口感柔軟，像布丁。" },
            { speaker: "Female", text: "È molto dolce?", en: "Is it very sweet?", zh: "會不會很甜？" },
            { speaker: "Male", text: "No, è delicata, non troppo dolce.", en: "No, it’s delicate, not too sweet.", zh: "不，味道清淡，不會太甜。" },
            { speaker: "Female", text: "Che salse avete per la panna cotta?", en: " What sauces do you have for panna cotta?", zh: "早安！你們的奶酪有什麼醬料可選？" },
            { speaker: "Male", text: "Fragola, caramello o cioccolato.", en: "Strawberry, caramel, or chocolate.", zh: "草莓、焦糖或巧克力醬。" },
            { speaker: "Female", text: "Fragola, per favore.", en: "Strawberry, please.", zh: "我要草莓口味的，謝謝。" },
            { speaker: "Male", text: "Perfetto, arrivo subito.", en: "Perfect, coming right up.", zh: "好的，馬上來。" },
            { speaker: "Female", text: "Grazie, buona giornata!", en: "Thanks, have a good day!", zh: "謝謝，祝你有美好的一天！" },
            { speaker: "Male", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Babà al rum: a boozy dessert",
          scene_zh: "第 6 天 — 蘭姆酒巴巴：含酒甜點",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Il babà al rum è una specialità del sud, vero?", en: "Good morning! The babà al rum is a specialty of the south, right?", zh: "早安！蘭姆酒巴巴是南義的特色甜點，對吧？" },
            { speaker: "Male", text: "Esatto! È molto soffice e con un gusto deciso di rum.", en: "Exactly! It’s very soft with a strong rum flavor.", zh: "沒錯！它非常鬆軟，而且有濃濃的蘭姆酒味。" },
            { speaker: "Female", text: "La bagna al rum è molto forte?", en: "Is the rum syrup very strong?", zh: "那個蘭姆酒糖漿很濃嗎？" },
            { speaker: "Male", text: "È presente, ma non troppo. Si sente, ma è equilibrato.", en: "It's noticeable, but not too much. You can taste it, but it's balanced.", zh: "酒味很明顯，但不會太過。可以嚐到，但很平衡。" },
            { speaker: "Female", text: "Ottimo! Ne prendo uno. Lo mangio qui, posso avere una forchetta?", en: "Great! I’ll take one. I'll eat it here, can I have a fork?", zh: "太好了！我要一個。我在這裡吃，可以給我一個叉子嗎？" },
            { speaker: "Male", text: "Certo, ecco a lei.", en: "Of course, here you are.", zh: "當然，給您。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Crostata: Italian jam tart",
          scene_zh: "第 7 天 — 果醬派：義式傳統甜點",
          dialogue: [
            { speaker: "Female", text: "Ciao! Cosa c'è di nuovo oggi?", en: "Hi! What's new today?", zh: "嗨！今天有什麼新品嗎？" },
            { speaker: "Male", text: "Abbiamo la crostata della nonna, appena sfornata.", en: "We have the 'grandma's tart', just baked.", zh: "我們有剛出爐的「奶奶的塔」喔！" },
            { speaker: "Female", text: "Che gusti avete per la crostata?", en: "What flavors do you have for the tart?", zh: "你們的果醬派有什麼口味？" },
            { speaker: "Male", text: "Albicocca, frutti di bosco e un classico di mela.", en: "Apricot, berries, and a classic apple.", zh: "杏桃、野莓，還有一款經典的蘋果口味。" },
            { speaker: "Female", text: "Ah, prendo una fetta di quella ai frutti di bosco, per favore.", en: "Ah, I’ll take a slice of the berries one, please.", zh: "啊，我要一片野莓的，謝謝。" },
            { speaker: "Male", text: "Subito! Ti riscaldo un po'?", en: "Right away! Shall I heat it up for you a little?", zh: "馬上來！需要幫你加熱一下嗎？" },
            { speaker: "Female", text: "Sì, grazie. Un po' tiepida è perfetta!", en: "Yes, thanks. A little warm is perfect!", zh: "好，謝謝。溫溫的剛剛好！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Profiteroles: cream puffs with chocolate",
          scene_zh: "第 8 天 — 泡芙球：奶油與巧克力",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Che cosa sono i profiteroles?", en: "Good evening! What are profiteroles?", zh: "晚上好！什麼是奶油泡芙球？" },
            { speaker: "Male", text: "Sono tanti bignè ripieni di panna e ricoperti di cioccolato fondente.", en: "They are many small cream puffs filled with cream and covered with dark chocolate.", zh: "它們是很多小泡芙，裡面塞滿了奶油，外面淋上黑巧克力醬。" },
            { speaker: "Female", text: "Sembrano buonissimi! Uno per me e uno per il mio amico, per favore.", en: "They look delicious! One for me and one for my friend, please.", zh: "看起來超好吃！請給我一份，再給我朋友一份。" },
            { speaker: "Male", text: "Certo! Volete aggiungere un po' di panna montata?", en: "Certainly! Would you like to add some whipped cream?", zh: "好的！要加一點鮮奶油嗎？" },
            { speaker: "Female", text: "Sì, grazie! E un tovagliolo per favore.", en: "Yes, thank you! And a napkin, please.", zh: "好，謝謝！再給我一張紙巾。" },
            { speaker: "Male", text: "Ecco a voi!", en: "Here you are!", zh: "給你們！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Sfogliatella: crispy or smooth?",
          scene_zh: "第 9 天 — 千層貝殼酥：酥脆還是軟Q？",
          dialogue: [
            { speaker: "Female", text: "Salve! Vedo due tipi di sfogliatella. Qual è la differenza?", en: "Hi! I see two types of sfogliatella. What's the difference?", zh: "您好！我看到兩種千層貝殼酥。有什麼不同嗎？" },
            { speaker: "Male", text: "Questa è la **Sfogliatella Riccia**, con pasta croccante. L'altra è la **Sfogliatella Frolla**, con pasta frolla più morbida.", en: "This is the **Sfogliatella Riccia**, with a crispy pastry. The other is the **Sfogliatella Frolla**, with a softer shortcrust pastry.", zh: "這是 **Riccia**，外層是酥脆的千層。另一款 **Frolla** 則是口感比較柔軟的麵皮。" },
            { speaker: "Female", text: "Ah, capisco! La farcitura è la stessa?", en: "Ah, I see! Is the filling the same?", zh: "啊，我懂了！內餡是一樣的嗎？" },
            { speaker: "Male", text: "Sì, in entrambe c'è ricotta, semolino e canditi.", en: "Yes, both have ricotta cheese, semolina, and candied fruits.", zh: "是的，兩種裡面都有瑞可塔起司、粗麥粉和蜜餞。" },
            { speaker: "Female", text: "Perfetto. Ne prendo una Riccia!", en: "Perfect. I’ll take one Riccia!", zh: "太好了。我要一份 Riccia！" },
            { speaker: "Male", text: "Una scelta eccellente!", en: "An excellent choice!", zh: "一個絕佳的選擇！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Zeppole: festive fried sweets?",
          scene_zh: "第 10 天 — 澤波萊：節日限定炸甜點？",
          dialogue: [
            { speaker: "Female", text: "Avete le zeppole oggi? Sono tipiche di San Giuseppe, giusto?", en: "Do you have zeppole today? They're typical for Saint Joseph's Day, right?", zh: "今天有炸泡芙嗎？這是不是聖約瑟夫節特有的甜點？" },
            { speaker: "Male", text: "Sì, sono un dolce di Carnevale e della Festa del Papà.", en: "Yes, they are a dessert for Carnival and Father's Day.", zh: "是的，它們是狂歡節和父親節的甜點。" },
            { speaker: "Female", text: "Come sono fatte?", en: "How are they made?", zh: "它們是怎麼做的？" },
            { speaker: "Male", text: "Sono dolci fritti, ripieni di crema pasticcera e una ciliegia amarena.", en: "They are fried sweets, filled with pastry cream and a black cherry on top.", zh: "它們是炸的甜點，裡面有卡士達醬，上面放一顆黑櫻桃。" },
            { speaker: "Female", text: "Ne prendo due allora!", en: "I’ll take two then!", zh: "那我要兩個！" }
          ]
        },
        {
          sceneId: 11,
          scene: "Day 11 – Millefoglie: Italian custard cream slice",
          scene_zh: "第 11 天 — 千層派：義式卡士達奶油塔",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Volevo provare la millefoglie.", en: "Good morning! I wanted to try the millefoglie.", zh: "早安！我想要試試千層派。" },
            { speaker: "Male", text: "Certo! È un dolce con strati di pasta sfoglia e crema pasticcera.", en: "Certainly! It's a dessert with layers of puff pastry and pastry cream.", zh: "好的！這是一款由千層酥皮和卡士達奶油層層堆疊的甜點。" },
            { speaker: "Female", text: "È molto croccante?", en: "Is it very crunchy?", zh: "它很酥脆嗎？" },
            { speaker: "Male", text: "Sì, la pasta sfoglia è molto croccante e la crema è fresca.", en: "Yes, the puff pastry is very crunchy and the cream is fresh.", zh: "是的，酥皮非常酥脆，奶油也很新鮮。" },
            { speaker: "Female", text: "Mi dia una fetta, per favore.", en: "Give me one slice, please.", zh: "請給我一片。" },
            { speaker: "Male", text: "La prendo subito. E qualcos'altro?", en: "I'll get it right away. And anything else?", zh: "馬上來。還需要別的嗎？" },
            { speaker: "Female", text: "No, grazie. Questo è tutto.", en: "No, thank you. That's all.", zh: "不用了，謝謝。就這樣。" }
          ]
        }
      ]
    },
    {
      topicId: 3,
      topic: "🍞 10 Italian Breads & Pastries - One Example a Day",
      topic_zh: "🍞 10 款義大利麵包與糕點 - 每天一個例子",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – A Cornetto for breakfast",
          scene_zh: "第 1 天 — 早餐來個義式可頌",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Vorrei un cornetto e un cappuccino, per favore.", en: "Good morning! I'd like a cornetto and a cappuccino, please.", zh: "早安！我想要一個可頌和一杯卡布奇諾，謝謝。" },
            { speaker: "Male", text: "Con crema, marmellata o semplice?", en: "With cream, jam, or plain?", zh: "要加奶油、果醬還是原味的？" },
            { speaker: "Female", text: "Con marmellata di albicocca, grazie.", en: "With apricot jam, thank you.", zh: "杏桃果醬的，謝謝。" },
            { speaker: "Female", text: "E per il cappuccino, con un po' di zucchero.", en: "And for the cappuccino, with a little sugar.", zh: "卡布奇諾要加一點糖。" },
            { speaker: "Male", text: "Certamente. Al bancone?", en: "Certainly. At the counter?", zh: "好的。在吧台喝嗎？" },
            { speaker: "Female", text: "Sì, al bancone. Grazie.", en: "Yes, at the counter. Thanks.", zh: "好的，在吧台。謝謝。" },
            { speaker: "Male", text: "Prego! Buona giornata.", en: "You're welcome! Have a nice day.", zh: "不客氣！祝你有美好的一天。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Ordering Focaccia",
          scene_zh: "第 2 天 — 點佛卡夏麵包",
          dialogue: [
            { speaker: "Female", text: "Salve! Avete della focaccia oggi?", en: "Hello! Do you have focaccia today?", zh: "您好！今天有佛卡夏麵包嗎？" },
            { speaker: "Male", text: "Sì, con rosmarino e sale, oppure ripiena di prosciutto.", en: "Yes, with rosemary and salt, or stuffed with ham.", zh: "有，有迷迭香和鹽的原味，或是包火腿的。" },
            { speaker: "Female", text: "Una fetta di quella semplice con rosmarino, per favore.", en: "A slice of the plain one with rosemary, please.", zh: "麻煩給我一片原味迷迭香的。" },
            { speaker: "Male", text: "La riscaldo un po' per lei?", en: "Shall I heat it up a little for you?", zh: "需要幫你加熱一下嗎？" },
            { speaker: "Female", text: "Sì, grazie. Un po' tiepida è perfetta.", en: "Yes, thank you. A little warm is perfect.", zh: "好，謝謝。溫熱的剛剛好。" },
            { speaker: "Male", text: "Ecco a lei. Buon appetito!", en: "Here you are. Enjoy your meal!", zh: "給您。祝您用餐愉快！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Ordering Panino or Tramezzino",
          scene_zh: "第 3 天 — 點三明治或軟麵包三明治",
          dialogue: [
            { speaker: "Female", text: "Ciao! Vorrei un panino, per favore.", en: "Hi! I'd like a panino, please.", zh: "嗨！我想要一個三明治。" },
            { speaker: "Male", text: "Certo. Con prosciutto crudo o cotto?", en: "Certainly. With cured ham or cooked ham?", zh: "好的。要生火腿還是熟火腿的？" },
            { speaker: "Female", text: "Con prosciutto crudo e formaggio, grazie.", en: "With cured ham and cheese, thanks.", zh: "我要生火腿加起司的，謝謝。" },
            { speaker: "Female", text: "Qual è la differenza tra panino e tramezzino?", en: "What is the difference between panino and tramezzino?", zh: "請問 panino 和 tramezzino 有什麼差別？" },
            { speaker: "Male", text: "Il panino ha un pane più croccante.", en: "Panino has a crunchier bread.", zh: "Panino 的麵包比較脆。" },
            { speaker: "Male", text: "Il tramezzino ha un pane più morbido.", en: "Tramezzino has a softer bread.", zh: "Tramezzino 的麵包比較軟。" },
            { speaker: "Female", text: "Ah, ho capito. Allora prendo un tramezzino.", en: "Ah, I see. Then I'll take a tramezzino.", zh: "啊，我懂了。那我拿一個 tramezzino。" },
            { speaker: "Male", text: "Perfetto. Sono cinque euro.", en: "Perfect. That's five euros.", zh: "好的。總共五歐元。" },
            { speaker: "Female", text: "Ecco a lei. Grazie!", en: "Here you are. Thank you!", zh: "給你。謝謝！" },
            { speaker: "Male", text: "Prego! Arrivederci.", en: "You're welcome! Goodbye.", zh: "不客氣！再見。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Asking about Maritozz and the ingredients",
          scene_zh: "第 4 天 — 詢問甜點的成分",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Che cos'è il maritozzo?", en: "Good morning! What is a maritozzo?", zh: "早安！什麼是 maritozzo？" },
            { speaker: "Male", text: "È una brioche dolce tagliata a metà.", en: "It’s a sweet brioche cut in half.", zh: "它是一種甜麵包，從中間切開。" },
            { speaker: "Male", text: "Ripiena di panna montata.", en: "Filled with whipped cream.", zh: "裡面塞滿了鮮奶油。" },
            { speaker: "Female", text: "Sembra delizioso. C'è altro dentro?", en: "It looks delicious. Is there anything else inside?", zh: "看起來很好吃。裡面還有別的嗎？" },
            { speaker: "Male", text: "A volte ci sono anche delle gocce di cioccolato.", en: "Sometimes there are also chocolate chips.", zh: "有時候裡面也會加巧克力豆。" },
            { speaker: "Female", text: "Ottimo! Ne prendo uno, per favore.", en: "Great! I'll take one, please.", zh: "太棒了！我買一個，麻煩了。" },
            { speaker: "Male", text: "Perfetto. Sono due euro e cinquanta.", en: "Perfect. That's two euros fifty.", zh: "好的。總共兩歐元五。" },
            { speaker: "Male", text: "Buona giornata!", en: "Have a nice day!", zh: "祝你有美好的一天！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Buying different types of bread",
          scene_zh: "第 5 天 — 買不同種類的麵包",
          dialogue: [
            { speaker: "Female", text: "Salve! Vorrei del pane. Che tipi di pane avete oggi?", en: "Hello! I'd like some bread. What types of bread do you have today?", zh: "您好！我想要買麵包。今天有什麼種類？" },
            { speaker: "Male", text: "Abbiamo la ciabatta, il pane integrale.", en: "We have ciabatta, whole wheat bread.", zh: "我們有拖鞋麵包、全麥麵包。" },
            { speaker: "Male", text: "E il pane di segale.", en: "And rye bread.", zh: "和裸麥麵包。" },
            { speaker: "Female", text: "Prendo mezzo chilo di ciabatta, per favore.", en: "I'll take half a kilo of ciabatta, please.", zh: "我買半公斤的拖鞋麵包，謝謝。" },
            { speaker: "Male", text: "Subito. Sono tre euro.", en: "Right away. That's three euros.", zh: "馬上來。總共三歐元。" },
            { speaker: "Male", text: "Arrivederci!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – A quick chat about breakfast pastries",
          scene_zh: "第 6 天 — 關於早餐點心的簡短對話",
          dialogue: [
            { speaker: "Female", text: "Buonasera! Volevo un caffè", en: "Good evening! I'd like a coffee", zh: "晚安！我想要一杯咖啡" },
            { speaker: "Female", text: "Qual è la differenza tra un cornetto e un brioche?", en: "What is the difference between a cornetto and a brioche?", zh: "請問 cornetto 和 brioche 有什麼不同？" },
            { speaker: "Male", text: "Il cornetto è a forma di mezzaluna.", en: "The cornetto is crescent-shaped.", zh: "cornetto 是月亮形。" },
            { speaker: "Male", text: "La brioche è rotonda.", en: "The brioche is round.", zh: "brioche 則是圓形的。" },
            { speaker: "Female", text: "Capisco. E il sapore è diverso?", en: "I see. Is the flavor different?", zh: "我懂了。味道有差別嗎？" },
            { speaker: "Male", text: "Sì, il cornetto ha più burro.", en: "Yes, cornetto has more butter.", zh: "是的，cornetto 的奶油味更重。" },
            { speaker: "Male", text: "La brioche è più soffice e dolce.", en: "The brioche is softer and sweeter.", zh: "brioche 則比較鬆軟香甜。" },
            { speaker: "Female", text: "Grazie per la spiegazione! Allora prendo un caffè macchiato.", en: "Thanks for the explanation! Then I’ll take a caffè macchiato.", zh: "謝謝你解釋！那我來一杯瑪奇朵。" },
            { speaker: "Female", text: "E una brioche, per favore.", en: "And a brioche, please.", zh: "再一個 brioche，麻煩了。" },
            { speaker: "Male", text: "Perfetto! Prego!", en: "Perfect! You're welcome!", zh: "太好了！不客氣！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 8 – Ordering a sandwich with special requests",
          scene_zh: "第 8 天 — 點一份客製化三明治",
          dialogue: [
            { speaker: "Female", text: "Ciao! Vorrei un panino con prosciutto e formaggio.", en: "Hi! I'd like a panino with ham and cheese.", zh: "嗨！我想要一個火腿起司三明治。" },
            { speaker: "Male", text: "Va bene. Vuoi anche dell'insalata?", en: "Alright. Do you also want some lettuce?", zh: "好的。要加點生菜嗎？" },
            { speaker: "Female", text: "Sì, e un po' di maionese, per favore.", en: "Yes, and a little mayonnaise, please.", zh: "好的，再加一點美乃滋，謝謝。" },
            { speaker: "Male", text: "Certo. Lo tostiamo?", en: "Of course. Shall we toast it?", zh: "沒問題。要幫你烤一下嗎？" },
            { speaker: "Female", text: "Sì, lo tosti, grazie.", en: "Yes, please toast it, thanks.", zh: "好的，麻煩烤一下，謝謝。" },
            { speaker: "Male", text: "Perfetto. Sono sei euro.", en: "Perfect. That's six euros.", zh: "好的。總共六歐元。" },
            { speaker: "Female", text: "Ecco i soldi. Grazie!", en: "Here's the money. Thanks!", zh: "錢給你。謝謝！" },
            { speaker: "Male", text: "Prego! Arrivederci!", en: "You're welcome! Goodbye!", zh: "不客氣！再見！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Paying for bread and asking for a bag",
          scene_zh: "第 10 天 — 結帳與要袋子",
          dialogue: [
            { speaker: "Female", text: "Quanto costa il pane?", en: "How much does the bread cost?", zh: "這個麵包多少錢？" },
            { speaker: "Male", text: "Cinque euro.", en: "Five euros.", zh: "五歐元。" },
            { speaker: "Female", text: "Perfetto. Posso pagare con la carta?", en: "Perfect. Can I pay by card?", zh: "太好了。可以刷卡嗎？" },
            { speaker: "Male", text: "Sì, certo. Vuoi un sacchetto?", en: "Yes, of course. Do you want a bag?", zh: "可以，當然。要一個袋子嗎？" },
            { speaker: "Female", text: "Sì, grazie mille!", en: "Yes, thank you very much!", zh: "是的，非常感謝！" },
            { speaker: "Male", text: "Prego! Arrivederci.", en: "You're welcome! Goodbye.", zh: "不客氣！再見。" }
          ]
        }
      ]
    }
   // new
  ]
};
