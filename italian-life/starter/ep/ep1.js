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
    }
  ]
};
