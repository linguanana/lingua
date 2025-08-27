const episodeData = {
  ep_title: "ep",
  episodeId: 1,
  episode: "🇫🇷 Episode – French Starter Dialogues",
  episode_zh: "🇫🇷 初學者法語對話",
  toggle_title: "Scenes",
  voice: "fr-FR",
  speaking_rate: "0.65",
  topics: [
    {
      topicId: 1,
      topic: "👋 Greetings & Polite Words",
      topic_zh: "👋 打招呼與禮貌用語",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – On the street: morning greetings",
          scene_zh: "第 1 天 — 街上相遇：早安問候",
          dialogue: [
            { speaker: "Female", text: "Bonjour, Paul !", en: "Good morning, Paul!", zh: "早安，保羅！" },
            { speaker: "Male", text: "Bonjour, Marie ! Comment ça va ?", en: "Good morning, Marie! How are you?", zh: "早安，瑪麗！你好吗？" },
            { speaker: "Female", text: "Ça va bien, merci. Et toi ?", en: "I’m fine, thanks. And you?", zh: "我很好，謝謝。你呢？" },
            { speaker: "Male", text: "Comme ci, comme ça. Je suis un peu fatigué.", en: "So-so. I’m a bit tired.", zh: "馬馬虎虎。我有點累。" },
            { speaker: "Female", text: "Oh, désolée ! Tu travailles trop ?", en: "Oh, sorry! Are you working too much?", zh: "喔，不好意思！你工作太多嗎？" },
            { speaker: "Male", text: "Oui, peut-être. Merci de demander.", en: "Yes, maybe. Thanks for asking.", zh: "可能吧。謝謝關心。" },
            { speaker: "Female", text: "Bon courage alors !", en: "Hang in there!", zh: "加油喔！" },
            { speaker: "Male", text: "Merci beaucoup.", en: "Thank you very much.", zh: "非常感謝。" },
            { speaker: "Female", text: "À bientôt !", en: "See you soon!", zh: "回頭見！" },
            { speaker: "Male", text: "Salut, à plus tard !", en: "Bye, see you later!", zh: "掰，待會見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Evening goodbye",
          scene_zh: "第 2 天 — 晚上的道別",
          dialogue: [
            { speaker: "Male", text: "Bonsoir !", en: "Good evening!", zh: "晚上好！" },
            { speaker: "Female", text: "Bonsoir ! Comment ça va ?", en: "Good evening! How are you?", zh: "晚上好！你好嗎？" },
            { speaker: "Male", text: "Un peu fatigué.", en: "A little tired.", zh: "有點累。" },
            { speaker: "Female", text: "Moi aussi.", en: "Me too.", zh: "我也是。" },
            { speaker: "Male", text: "Bonne nuit !", en: "Good night!", zh: "晚安！" },
            { speaker: "Female", text: "Bonne nuit ! À demain !", en: "Good night! See you tomorrow!", zh: "晚安！明天見！" },
            { speaker: "Male", text: "Au revoir !", en: "Goodbye!", zh: "再見！" },
            { speaker: "Female", text: "Salut !", en: "Bye!", zh: "掰掰！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Meeting again",
          scene_zh: "第 3 天 — 再次見面",
          dialogue: [
            { speaker: "Female", text: "Salut !", en: "Hi!", zh: "嗨！" },
            { speaker: "Male", text: "Bonjour !", en: "Good morning!", zh: "早安！" },
            { speaker: "Female", text: "Comment ça va ?", en: "How are you?", zh: "你好嗎？" },
            { speaker: "Male", text: "Ça va bien, merci. Et toi ?", en: "I’m good, thanks. And you?", zh: "我很好，謝謝。你呢？" },
            { speaker: "Female", text: "Comme ci, comme ça.", en: "So-so.", zh: "馬馬虎虎。" },
            { speaker: "Male", text: "Ah bon.", en: "Oh, okay.", zh: "啊，好吧。" },
            { speaker: "Female", text: "À plus tard !", en: "See you later!", zh: "待會兒見！" },
            { speaker: "Male", text: "À bientôt !", en: "See you soon!", zh: "很快見！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – At the shop",
          scene_zh: "第 4 天 — 在商店",
          dialogue: [
            { speaker: "Female", text: "Bonjour monsieur.", en: "Good morning, sir.", zh: "早安，先生。" },
            { speaker: "Male", text: "Bonjour madame.", en: "Good morning, madam.", zh: "早安，女士。" },
            { speaker: "Female", text: "Excusez-moi.", en: "Excuse me.", zh: "不好意思。" },
            { speaker: "Female", text: "Où est l’eau, s’il vous plaît ?", en: "Where is the water, please?", zh: "請問水在哪裡？" },
            { speaker: "Male", text: "Là-bas.", en: "Over there.", zh: "在那邊。" },
            { speaker: "Female", text: "Merci beaucoup.", en: "Thank you very much.", zh: "非常感謝。" },
            { speaker: "Male", text: "De rien.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Female", text: "Au revoir !", en: "Goodbye!", zh: "再見！" },
            { speaker: "Male", text: "Bonne journée !", en: "Have a nice day!", zh: "祝你有美好的一天！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Polite words review",
          scene_zh: "第 5 天 — 禮貌用語複習",
          dialogue: [
            { speaker: "Male", text: "Bonjour !", en: "Good morning!", zh: "早安！" },
            { speaker: "Female", text: "Salut !", en: "Hi!", zh: "嗨！" },
            { speaker: "Male", text: "Merci !", en: "Thanks!", zh: "謝謝！" },
            { speaker: "Female", text: "Merci beaucoup !", en: "Thank you very much!", zh: "非常感謝！" },
            { speaker: "Male", text: "Pardon.", en: "Sorry.", zh: "不好意思。" },
            { speaker: "Female", text: "Pas de problème.", en: "No problem.", zh: "沒關係。" },
            { speaker: "Male", text: "Excusez-moi.", en: "Excuse me.", zh: "勞駕。" },
            { speaker: "Female", text: "Oui ?", en: "Yes?", zh: "是嗎？" },
            { speaker: "Male", text: "Au revoir !", en: "Goodbye!", zh: "再見！" },
            { speaker: "Female", text: "À bientôt !", en: "See you soon!", zh: "很快見！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – At the park: small talk",
          scene_zh: "第 6 天 — 公園閒聊",
          dialogue: [
            { speaker: "Female", text: "Salut ! Ça va ?", en: "Hi! How are you?", zh: "嗨！你好吗？" },
            { speaker: "Male", text: "Salut ! Oui, ça va bien. Et toi ?", en: "Hi! Yes, I’m good. And you?", zh: "嗨！我很好。你呢？" },
            { speaker: "Female", text: "Pas mal, merci. Tu viens souvent ici ?", en: "Not bad, thanks. Do you come here often?", zh: "還不錯，謝謝。你常來這裡嗎？" },
            { speaker: "Male", text: "Oui, j’aime marcher ici. Et toi ?", en: "Yes, I like walking here. And you?", zh: "是的，我喜歡在這裡散步。你呢？" },
            { speaker: "Female", text: "Moi aussi. Pardon, quelle heure est-il ?", en: "Me too. Excuse me, what time is it?", zh: "我也是。不好意思，現在幾點？" },
            { speaker: "Male", text: "Il est trois heures.", en: "It’s three o’clock.", zh: "三點了。" },
            { speaker: "Female", text: "Merci beaucoup !", en: "Thank you so much!", zh: "非常感謝！" },
            { speaker: "Male", text: "De rien.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Female", text: "Bon après-midi !", en: "Have a nice afternoon!", zh: "祝你下午愉快！" },
            { speaker: "Male", text: "Bonne journée, au revoir !", en: "Have a good day, goodbye!", zh: "祝你有美好的一天，再見！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – At a shop: polite requests",
          scene_zh: "第 7 天 — 商店裡：禮貌請求",
          dialogue: [
            { speaker: "Female", text: "Bonjour, monsieur !", en: "Good day, sir!", zh: "您好，先生！" },
            { speaker: "Male", text: "Bonjour, madame. Vous allez bien ?", en: "Hello, madam. Are you well?", zh: "您好，女士。您還好嗎？" },
            { speaker: "Female", text: "Oui, merci. S’il vous plaît, une bouteille d’eau.", en: "Yes, thank you. A bottle of water, please.", zh: "是，謝謝。請給我一瓶水。" },
            { speaker: "Male", text: "Bien sûr. Voilà.", en: "Of course. Here you go.", zh: "當然可以。給您。" },
            { speaker: "Female", text: "Excusez-moi, combien ça coûte ?", en: "Excuse me, how much is it?", zh: "不好意思，這多少錢？" },
            { speaker: "Male", text: "Un euro.", en: "One euro.", zh: "一歐元。" },
            { speaker: "Female", text: "D’accord. Merci beaucoup.", en: "Alright. Thank you very much.", zh: "好的。非常感謝。" },
            { speaker: "Male", text: "Je vous en prie. Bonne journée !", en: "You’re very welcome. Have a nice day!", zh: "不客氣。祝您有美好的一天！" },
            { speaker: "Female", text: "À bientôt, au revoir !", en: "See you soon, goodbye!", zh: "回頭見，再見！" },
            { speaker: "Male", text: "Au revoir, madame !", en: "Goodbye, madam!", zh: "再見，女士！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Outside class: checking in",
          scene_zh: "第 8 天 — 教室外：關心問候",
          dialogue: [
            { speaker: "Male", text: "Salut, Claire ! Comment vas-tu aujourd’hui ?", en: "Hi, Claire! How are you today?", zh: "嗨，克萊兒！妳今天好嗎？" },
            { speaker: "Female", text: "Pas très bien… je suis stressée.", en: "Not very well… I’m stressed.", zh: "不太好……我壓力很大。" },
            { speaker: "Male", text: "Oh mince ! Pourquoi ?", en: "Oh no! Why?", zh: "喔糟糕！為什麼？" },
            { speaker: "Female", text: "J’ai un examen demain.", en: "I have an exam tomorrow.", zh: "我明天考試。" },
            { speaker: "Male", text: "Je comprends. Bon courage !", en: "I understand. Good luck!", zh: "我懂。加油！" },
            { speaker: "Female", text: "Merci, tu es gentil.", en: "Thanks, you’re kind.", zh: "謝謝，你人真好。" },
            { speaker: "Male", text: "Pas de problème.", en: "No problem.", zh: "沒問題。" },
            { speaker: "Female", text: "Bon, je dois partir.", en: "Well, I have to go.", zh: "好，我得走了。" },
            { speaker: "Male", text: "À demain !", en: "See you tomorrow!", zh: "明天見！" },
            { speaker: "Female", text: "À demain, salut !", en: "See you tomorrow, bye!", zh: "明天見，掰！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – On the phone: quick check-in",
          scene_zh: "第 9 天 — 電話中：快速問候",
          dialogue: [
            { speaker: "Female", text: "Allô ? Bonjour !", en: "Hello? Good day!", zh: "喂？你好！" },
            { speaker: "Male", text: "Bonjour ! C’est Paul. Ça va ?", en: "Hi! It’s Paul. How are you?", zh: "你好！我是保羅。你好吗？" },
            { speaker: "Female", text: "Salut Paul ! Ça va bien, et toi ?", en: "Hi Paul! I’m good, and you?", zh: "嗨，保羅！我很好，你呢？" },
            { speaker: "Male", text: "Ça va très bien, merci. Tu es occupée ?", en: "I’m very well, thanks. Are you busy?", zh: "我很好，謝謝。你忙嗎？" },
            { speaker: "Female", text: "Un peu… désolée.", en: "A little… sorry.", zh: "有一點……不好意思。" },
            { speaker: "Male", text: "Pas grave. Je voulais juste dire bonjour.", en: "No worries. I just wanted to say hi.", zh: "沒關係。我只是想打個招呼。" },
            { speaker: "Female", text: "Merci beaucoup, c’est gentil.", en: "Thanks a lot, that’s kind.", zh: "非常感謝，你人真好。" },
            { speaker: "Male", text: "Avec plaisir.", en: "My pleasure.", zh: "不客氣。" },
            { speaker: "Female", text: "On se voit bientôt ?", en: "Shall we see each other soon?", zh: "我們很快見面嗎？" },
            { speaker: "Male", text: "Oui, bien sûr. À très bientôt ! Au revoir !", en: "Yes, of course. See you very soon! Goodbye!", zh: "當然可以。很快見！再見！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – On the street: sorry & help",
          scene_zh: "第 10 天 — 街上：道歉與求助",
          dialogue: [
            { speaker: "Male", text: "Oh pardon !", en: "Oh sorry!", zh: "喔，不好意思！" },
            { speaker: "Female", text: "Pas de problème.", en: "No problem.", zh: "沒關係。" },
            { speaker: "Male", text: "Je suis désolé.", en: "I’m sorry.", zh: "我很抱歉。" },
            { speaker: "Female", text: "Ça va, ça va.", en: "It’s okay, it’s fine.", zh: "沒事，沒事。" },
            { speaker: "Male", text: "Excusez-moi.", en: "Excuse me.", zh: "不好意思。" },
            { speaker: "Male", text: "Pouvez-vous m’aider ?", en: "Can you help me?", zh: "您能幫我嗎？" },
            { speaker: "Female", text: "Oui, bien sûr.", en: "Yes, of course.", zh: "可以，當然。" },
            { speaker: "Male", text: "Où est le métro ?", en: "Where is the metro?", zh: "地鐵在哪裡？" },
            { speaker: "Female", text: "Là-bas, à gauche.", en: "Over there, on the left.", zh: "在那邊，左邊。" },
            { speaker: "Male", text: "Merci beaucoup ! Au revoir !", en: "Thank you very much! Goodbye!", zh: "非常感謝！再見！" },
            { speaker: "Female", text: "Au revoir ! Bonne journée !", en: "Goodbye! Have a nice day!", zh: "再見！祝你有美好的一天！" }
          ]
        }
      ]
    }
  ]
};
