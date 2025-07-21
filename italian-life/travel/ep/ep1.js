const episodeData = {
  episodeId: 1,
  episode: "🇮🇹 Episode 1 – Al bar",
  title_en: "At the Coffee Bar",
  title_zh: "咖啡館",
  topics: [
    // --- TOPIC 1 (Existing) ---
    {
      topicId: 1,
      // Assuming 'mp3' property is added to each topic as you indicated in previous conversation
      // e.g., mp3: "ep1_1.mp3" will be constructed as part of the dynamic audio source.
      // So no need to explicitly add `mp3: ep1_1.mp3` here, as the JS already builds it from episodeId and topicId
      scenes: [
        { scene: "Ordering a coffee", dialogue: [
          { speaker: "1", text: "Vorrei un caffè, per favore.", en: "I’d like a coffee, please.", zh: "我想要一杯咖啡，謝謝。" },
          { speaker: "2", text: "Subito! Un espresso?", en: "Right away! An espresso?", zh: "馬上來！是濃縮咖啡嗎？" },
          { speaker: "1", text: "Sì, un espresso va benissimo.", en: "Yes, an espresso is perfect.", zh: "對，濃縮咖啡就好。" }
        ]},
        { scene: "Choosing size", dialogue: [
          { speaker: "2", text: "Lo vuole grande o piccolo?", en: "Do you want it large or small?", zh: "您要大杯還是小杯？" },
          { speaker: "1", text: "Piccolo, grazie.", en: "Small, thank you.", zh: "小杯，謝謝。" },
          { speaker: "2", text: "Perfetto, un piccolo espresso.", en: "Perfect, a small espresso.", zh: "好的，小杯濃縮。" }
        ]},
        { scene: "Sugar & Milk", dialogue: [
          { speaker: "2", text: "Con zucchero o senza?", en: "With sugar or without?", zh: "加糖還是不加？" },
          { speaker: "1", text: "Senza zucchero, ma con un po’ di latte.", en: "No sugar, but with a bit of milk.", zh: "不加糖，但加一點牛奶。" },
          { speaker: "2", text: "Va bene, con latte, senza zucchero.", en: "Alright, with milk, no sugar.", zh: "好的，加牛奶，不加糖。" }
        ]},
        { scene: "Custom requests", dialogue: [
          { speaker: "1", text: "Posso averlo un po’ più lungo?", en: "Can I have it a bit longer?", zh: "可以沖淡一點嗎？" },
          { speaker: "2", text: "Certo, un caffè lungo.", en: "Sure, a long coffee.", zh: "當然，來杯淡一點的咖啡。" },
          { speaker: "1", text: "Grazie, preferisco così.", en: "Thanks, I prefer it that way.", zh: "謝謝，我喜歡這樣。" }
        ]},
        { scene: "Final confirmation", dialogue: [
          { speaker: "2", text: "Allora: piccolo, lungo, con latte e senza zucchero?", en: "So: small, long, with milk and no sugar?", zh: "所以是：小杯、淡一點、加牛奶、不加糖，對嗎？" },
          { speaker: "1", text: "Esatto, grazie mille!", en: "Exactly, thanks a lot!", zh: "沒錯，非常感謝！" },
          { speaker: "2", text: "Arriva subito!", en: "Coming right up!", zh: "馬上來！" }
        ]}
      ]
    },
    // --- TOPIC 2 (Existing) ---
    {
      topicId: 2,
      scenes: [
        { scene: "Ordering a croissant", dialogue: [
          { speaker: "1", text: "Vorrei un cornetto, per favor.", en: "I’d like a croissant, please.", zh: "我想要一個可頌，謝謝。" },
          { speaker: "2", text: "Lo vuole semplice o con cioccolato?", en: "Do you want it plain or with chocolate?", zh: "您要原味的還是巧克力的？" },
          { speaker: "1", text: "Con cioccolato, grazie.", en: "With chocolate, thank you.", zh: "加巧克力的，謝謝。" }
        ]},
        { scene: "Asking for recommendations", dialogue: [
          { speaker: "1", text: "Cosa mi consiglia?", en: "What do you recommend?", zh: "你有什麼推薦的嗎？" },
          { speaker: "2", text: "Il nostro tiramisù è molto buono!", en: "Our tiramisù is very good!", zh: "我們的提拉米蘇很好吃喔！" }
        ]},
        { scene: "Flavor discussion", dialogue: [
          { speaker: "1", text: "È molto dolce?", en: "Is it very sweet?", zh: "它很甜嗎？" },
          { speaker: "2", text: "È dolce, ma non troppo.", en: "It’s sweet, but not too much.", zh: "甜，但不會太膩。" }
        ]},
        { scene: "Final decision", dialogue: [
          { speaker: "1", text: "Allora prendo anche un tiramisù.", en: "Then I’ll also take a tiramisù.", zh: "那我也來一個提拉米蘇。" },
          { speaker: "2", text: "Perfetto, arrivo subito.", en: "Perfect, I’ll be right there.", zh: "好的，我馬上來。" }
        ]}
      ]
    },
    // --- NEW TOPIC 3: Sit or Stand ---
    {
      topicId: 3,
      scenes: [
       { scene: "Asking about price difference", dialogue: [ // 🔥 NEW SCENE
       { speaker: "1", text: "Il caffè al tavolo costa di più?", en: "Does coffee at the table cost more?", zh: "在桌邊喝咖啡會比較貴嗎？" },
       { speaker: "2", text: "Sì, c'è un piccolo supplemento.", en: "Yes, there's a small surcharge.", zh: "是的，有一點點額外費用。" },
       { speaker: "1", text: "Capito. Grazie.", en: "Got it. Thank you.", zh: "明白了。謝謝。" }
       ]},
       { scene: "Asking about Sitting", dialogue: [
       { speaker: "1", text: "Posso sedermi?", en: "Can I sit down?", zh: "我可以坐下嗎？" },
       { speaker: "2", text: "Sì, certo.", en: "Yes, of course.", zh: "是的，當然。" },
       { speaker: "1", text: "Grazie.", en: "Thank you.", zh: "謝謝。" }
        ]},
        { scene: "Asking for a table (Al tavolo)", dialogue: [
          { speaker: "1", text: "C'è un tavolo libero?", en: "Is there a free table?", zh: "有空桌嗎？" },
          { speaker: "2", text: "Sì, prego. C'è un supplemento per il servizio al tavolo.", en: "Yes, please. There's a surcharge for table service.", zh: "有，請進。桌邊服務會有額外費用。" },
          { speaker: "1", text: "Ah, capisco. Grazie.", en: "Ah, I understand. Thank you.", zh: "啊，我明白了。謝謝。" }
        ]},
        { scene: "Moving to a table", dialogue: [
          { speaker: "1", text: "Posso sedermi a quel tavolo?", en: "Can I sit at that table?", zh: "我可以坐在那個桌子嗎？" },
          { speaker: "2", text: "Sì, certo, si accomodi pure.", en: "Yes, of course, please make yourself comfortable.", zh: "是的，當然，請您坐下。" },
          { speaker: "1", text: "Grazie mille.", en: "Thanks a lot.", zh: "非常感謝。" }
        ]}
      ]
    },
    // --- NEW TOPIC 4: Restroom ---
    {
      topicId: 4,
      scenes: [
        { scene: "Asking for the restroom", dialogue: [
          { speaker: "1", text: "Scusi, c'è un bagno?", en: "Excuse me, is there a restroom?", zh: "不好意思，有洗手間嗎？" },
          { speaker: "2", text: "Sì, è in fondo a destra.", en: "Yes, it's at the end on the right.", zh: "有，在最裡面右邊。" },
          { speaker: "1", text: "Grazie.", en: "Thank you.", zh: "謝謝。" }
        ]},
        { scene: "Asking for the key", dialogue: [
          { speaker: "1", text: "Il bagno è a chiave?", en: "Is the restroom locked?", zh: "洗手間有上鎖嗎？" },
          { speaker: "2", text: "Sì, ecco la chiave.", en: "Yes, here's the key.", zh: "是的，這是鑰匙。" },
          { speaker: "1", text: "Grazie mille.", en: "Thanks a lot.", zh: "非常感謝。" }
        ]},
        { scene: "Returning the key", dialogue: [
          { speaker: "1", text: "Ecco la chiave del bagno, grazie.", en: "Here's the restroom key, thank you.", zh: "這是洗手間鑰匙，謝謝。" },
          { speaker: "2", text: "Prego!", en: "You're welcome!", zh: "不客氣！" }
        ]}
      ]
    },
    // --- NEW TOPIC 5: Bill ---
    {
      topicId: 5,
      scenes: [
        { scene: "Asking for the bill (at counter)", dialogue: [
          { speaker: "1", text: "Posso pagare?", en: "Can I pay?", zh: "我可以付錢嗎？" },
          { speaker: "2", text: "Certo, sono tre euro e cinquanta.", en: "Of course, that's three euros fifty.", zh: "當然，總共三歐元五十。" },
          { speaker: "1", text: "Ecco a lei.", en: "Here you go (to you).", zh: "給您。" }
        ]},
        { scene: "Asking for the bill (at table)", dialogue: [
          { speaker: "1", text: "Il conto, per favore.", en: "The bill, please.", zh: "請給我帳單。" },
          { speaker: "2", text: "Subito! Ecco a lei.", en: "Right away! Here you go.", zh: "馬上！給您。" },
          { speaker: "1", text: "Grazie.", en: "Thank you.", zh: "謝謝。" }
        ]},
        { scene: "Paying with card", dialogue: [
          { speaker: "1", text: "Accettate carte di credito?", en: "Do you accept credit cards?", zh: "你們接受信用卡嗎？" },
          { speaker: "2", text: "Sì, certo.", en: "Yes, of course.", zh: "是的，當然。" },
          { speaker: "1", text: "Grazie.", en: "Thank you.", zh: "謝謝。" }
        ]},
        { scene: "Paying with cash", dialogue: [
          { speaker: "1", text: "Posso pagare in contanti?", en: "Can I pay in cash?", zh: "我可以付現金嗎？" },
          { speaker: "2", text: "Sì, va bene.", en: "Yes, that's fine.", zh: "是的，可以。" },
          { speaker: "1", text: "Ecco.", en: "Here.", zh: "給。" }
        ]}
      ]
    }
  ]
};
