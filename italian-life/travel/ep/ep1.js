// Episode 1 – Al bar (At the Coffee Bar / 咖啡館)
window.epData  = {
  episode: "Episode 1 – Al bar", title_en: "At the Coffee Bar", title_zh: "咖啡館",
  topics: [
    {
      topicId: 1, scenes: [
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
      topicId: 2, scenes: [
          { scene: "Ordering a croissant", dialogue: [
          { speaker: "1", text: "Vorrei un cornetto, per favore.", en: "I’d like a croissant, please.", zh: "我想要一個可頌，謝謝。" },
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
      // adding more topic if any
    }
  ]
};
