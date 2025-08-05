const episodeData = {
  ep_title: "ep",
  episodeId: 1,
  episode: "🇮🇹 Episode – Travel to Italy",
  title_en: "Italian Travel Conversations",
  title_zh: "義大利旅遊大補帖",
  toggle_title: "Scenes",
  topics: [
    {
      topicId: 1,
      topic: "☕ 10 Ways to Order Coffee",
      scenes: [
        {
          scene: "Day 1: Basic Espresso",
          dialogue: [
            { speaker: "1", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "2", text: "Buongiorno! Cosa prende?", en: "Good morning! What would you like?", zh: "早安！您要點什麼？" },
            { speaker: "1", text: "Vorrei un espresso, per favore.", en: "I’d like an espresso, please.", zh: "我想要一杯濃縮咖啡，謝謝。" },
            { speaker: "2", text: "Subito. Lo vuole qui o da portare via?", en: "Right away. For here or to go?", zh: "馬上來。內用還是外帶？" },
            { speaker: "1", text: "Qui, grazie.", en: "For here, thank you.", zh: "內用，謝謝。" },
            { speaker: "2", text: "Perfetto. Ecco il suo caffè.", en: "Perfect. Here’s your coffee.", zh: "好的。這是您的咖啡。" },
            { speaker: "1", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" },
            { speaker: "2", text: "Prego! A presto!", en: "You’re welcome! See you soon!", zh: "不客氣！回頭見！" }
          ]
        },
        {
          scene: "Day 2: With Sugar",
          dialogue: [
            { speaker: "1", text: "Salve! Che bella giornata!", en: "Hello! What a lovely day!", zh: "您好！今天天氣真好！" },
            { speaker: "2", text: "Salve a lei! Cosa posso prepararle?", en: "Hello to you! What can I get for you?", zh: "您也好！要喝點什麼呢？" },
            { speaker: "1", text: "Un caffè con due zuccheri, per favore.", en: "A coffee with two sugars, please.", zh: "請給我一杯咖啡，加兩包糖。" },
            { speaker: "2", text: "Due zuccheri... perfetto!", en: "Two sugars... perfect!", zh: "兩包糖……好的！" },
            { speaker: "1", text: "E posso avere anche un bicchiere d’acqua, per cortesia?", en: "And may I have a glass of water too, please?", zh: "也可以給我一杯水嗎？麻煩你了。" },
            { speaker: "2", text: "Subito! Acqua naturale o frizzante?", en: "Right away! Still or sparkling water?", zh: "馬上來！您要礦泉水還是氣泡水？" },
            { speaker: "1", text: "Naturale, grazie mille.", en: "Still, thank you very much.", zh: "礦泉水，謝謝你。" },
            { speaker: "2", text: "Con piacere! Ecco a lei.", en: "With pleasure! Here you go.", zh: "不客氣！給您。" },
            { speaker: "1", text: "Molto gentile. Alla prossima!", en: "Very kind. See you next time!", zh: "您人真好。下次見囉！" },
            { speaker: "2", text: "A presto! Buona giornata!", en: "See you soon! Have a great day!", zh: "下次見！祝您有個美好的一天！" }
          ]
        },
        {
          scene: "Day 3: With Milk",
          dialogue: [
            { speaker: "1", text: "Ciao amici!", en: "Hey friends!", zh: "嗨朋友們！" },
            { speaker: "2", text: "Ciao! Benvenuta!", en: "Hi! Welcome!", zh: "哈囉！歡迎光臨！" },
            { speaker: "1", text: "Vorrei un espresso con un po’ di latte.", en: "I’d like an espresso with a bit of milk.", zh: "我想要一杯濃縮，加一點牛奶。" },
            { speaker: "2", text: "Va bene. Lo vuoi caldo o freddo?", en: "Alright. Do you want it hot or cold?", zh: "好的。您要熱的還是冷的？" },
            { speaker: "1", text: "Caldo, grazie.", en: "Hot, thank you.", zh: "熱的，謝謝。" },
            { speaker: "2", text: "Perfetto. Ecco a te.", en: "Perfect. Here you go.", zh: "完美。給您。" },
            { speaker: "1", text: "Grazie! A dopo!", en: "Thanks! See you later!", zh: "謝謝！待會見！" }
          ]
        },
        {
          scene: "Day 4: Large Size",
          dialogue: [
            { speaker: "1", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "2", text: "Buongiorno! Come posso aiutare?", en: "Good morning! How can I help?", zh: "早安！有什麼需要幫忙的？" },
            { speaker: "1", text: "Avete caffè in tazza grande?", en: "Do you have coffee in a large cup?", zh: "有大杯的咖啡嗎？" },
            { speaker: "2", text: "Certo! Vuoi un caffè lungo?", en: "Sure! Do you want a long coffee?", zh: "當然！您想要淡一點的咖啡嗎？" },
            { speaker: "1", text: "Sì, lungo e grande, grazie.", en: "Yes, long and large, thanks.", zh: "是的，大杯的淡咖啡，謝謝。" },
            { speaker: "2", text: "Subito!", en: "Coming right up!", zh: "馬上來！" },
            { speaker: "1", text: "A dopo!", en: "See you later!", zh: "待會見！" }
          ]
        },
        {
          scene: "Day 5: Cold Coffee",
          dialogue: [
            { speaker: "1", text: "Salve! Fa caldo oggi!", en: "Hello! It’s hot today!", zh: "哈囉！今天好熱啊！" },
            { speaker: "2", text: "Verissimo! Vuoi qualcosa di fresco?", en: "Very true! Want something cold?", zh: "真的！您要來點冰的嗎？" },
            { speaker: "1", text: "Sì, un caffè freddo per favore.", en: "Yes, an iced coffee please.", zh: "是的，請給我冰咖啡。" },
            { speaker: "2", text: "Con ghiaccio o shakerato?", en: "With ice or shaken?", zh: "您要加冰塊還是搖的那種？" },
            { speaker: "1", text: "Con ghiaccio, grazie.", en: "With ice, thank you.", zh: "加冰塊，謝謝。" },
            { speaker: "2", text: "Ecco qua. Buon fresco!", en: "Here you go. Stay cool!", zh: "給您。消暑一下吧！" }
          ]
        },
        {
          scene: "Day 6: Paying with Cash",
          dialogue: [
            { speaker: "1", text: "Quanto costa il caffè?", en: "How much is the coffee?", zh: "這杯咖啡多少錢？" },
            { speaker: "2", text: "Un euro e cinquanta.", en: "One euro fifty.", zh: "一歐五。" },
            { speaker: "1", text: "Ecco due euro.", en: "Here’s two euros.", zh: "這裡是兩歐。" },
            { speaker: "2", text: "Hai bisogno del resto?", en: "Do you need change?", zh: "需要找零嗎？" },
            { speaker: "1", text: "No, va bene così. Grazie!", en: "No, it's fine like this. Thanks!", zh: "不用了，這樣就好。謝謝！" },
            { speaker: "2", text: "Grazie a te! Buona giornata!", en: "Thanks to you! Have a nice day!", zh: "也謝謝您！祝您有個美好的一天！" }
          ]
        },
        {
          scene: "Day 7: Paying by Card",
          dialogue: [
            { speaker: "1", text: "Posso pagare con la carta?", en: "Can I pay by card?", zh: "可以刷卡嗎？" },
            { speaker: "2", text: "Sì, accettiamo carte.", en: "Yes, we accept cards.", zh: "是的，我們接受刷卡。" },
            { speaker: "1", text: "Perfetto. Grazie mille!", en: "Perfect. Thank you so much!", zh: "太好了，非常感謝！" },
            { speaker: "2", text: "Prego. Vuoi la ricevuta?", en: "You're welcome. Do you want the receipt?", zh: "不客氣。您要收據嗎？" },
            { speaker: "1", text: "No, grazie.", en: "No, thanks.", zh: "不用了，謝謝。" }
          ]
        },
        {
          scene: "Day 8: To Go",
          dialogue: [
            { speaker: "1", text: "Buongiorno! Un cappuccino, da portare via.", en: "Good morning! A cappuccino to go.", zh: "早安！請給我一杯外帶的卡布奇諾。" },
            { speaker: "2", text: "Con latte intero o scremato?", en: "With whole milk or skim?", zh: "您要全脂還是低脂牛奶？" },
            { speaker: "1", text: "Intero, grazie.", en: "Whole, thanks.", zh: "全脂的，謝謝。" },
            { speaker: "2", text: "Ecco. Buona giornata!", en: "Here you go. Have a great day!", zh: "給您。祝您有美好的一天！" }
          ]
        },
        {
          scene: "Day 9: Asking for Recommendations",
          dialogue: [
            { speaker: "1", text: "Cosa mi consiglia oggi?", en: "What do you recommend today?", zh: "你今天有什麼推薦的嗎？" },
            { speaker: "2", text: "Il nostro marocchino è molto richiesto.", en: "Our marocchino is very popular.", zh: "我們的瑪洛奇諾很受歡迎喔。" },
            { speaker: "1", text: "Perfetto, lo prendo!", en: "Perfect, I’ll take it!", zh: "太好了，我要一杯！" }
          ]
        },
        {
          scene: "Day 10: Adding a Pastry",
          dialogue: [
            { speaker: "1", text: "Posso avere anche un cornetto?", en: "Can I also have a croissant?", zh: "我可以再來一個可頌嗎？" },
            { speaker: "2", text: "Certo! Vuoi semplice, alla crema o al cioccolato?", en: "Sure! Plain, cream or chocolate?", zh: "當然可以！您要原味、奶油或巧克力口味？" },
            { speaker: "1", text: "Al cioccolato, grazie!", en: "Chocolate, thanks!", zh: "巧克力的，謝謝！" },
            { speaker: "2", text: "Subito!", en: "Right away!", zh: "馬上來！" }
          ]
        }
      ]
    }
  ]
};
