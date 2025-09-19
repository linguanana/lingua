const episodeData = {
  ep_title: "ep",
  episodeId: 2,
  episode: "🇮🇹 Episode – Starter 02: Names, Origins & Work",
  episode_zh: "🇮🇹 特別篇 - 入門 02：名字、來自哪裡與工作／職業",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "🙋‍♀️ Names, Origins & What You Do",
      topic_zh: "🙋‍♀️ 名字、出身與在做什麼/工作",
      scenes: [

        // Day 1 – First introductions (casual)
        {
          sceneId: 1,
          scene: "Day 1 – First introductions (casual)",
          scene_zh: "第 1 天 – 初次見面（非正式）",
          dialogue: [
            { speaker: "Female", text: "Ciao! Buongiorno.", en: "Hi! Good morning.", zh: "嗨！早安。" },
            { speaker: "Male", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. E tu?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Mi chiamo Carlo.", en: "My name is Carlo.", zh: "我叫 Carlo。" },
            { speaker: "Female", text: "Piacere di conoscerti, Carlo.", en: "Nice to meet you, Carlo.", zh: "幸會，Carlo。" },
            { speaker: "Male", text: "Il piacere è mio, Emily.", en: "The pleasure is mine, Emily.", zh: "我也很高興，Emily。" },
            { speaker: "Female", text: "Sei di qui?", en: "Are you from here?", zh: "你是這裡人嗎？" },
            { speaker: "Male", text: "Sì, sono di Roma. E tu, di dove sei?", en: "Yes, I’m from Rome. Where are you from?", zh: "對，我來自羅馬。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti, dalla California.", en: "I’m from the United States, from California.", zh: "我來自美國，加州。" },
            { speaker: "Male", text: "Che bello! Vivi qui adesso?", en: "Nice! Do you live here now?", zh: "不錯！你現在住這裡嗎？" },
            { speaker: "Female", text: "No, resto vicino al centro per qualche giorno.", en: "No, I’m staying near the center for a few days.", zh: "沒有，我在市中心附近住幾天。" },
            { speaker: "Male", text: "Perfetto. A dopo!", en: "Perfect. See you later!", zh: "太好了。待會見！" }
          ]
        },

        // Day 2 – Formal introductions (reception)
        {
          sceneId: 2,
          scene: "Day 2 – Formal introductions (reception)",
          scene_zh: "第 2 天 – 正式介紹（櫃台）",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, signore. Come si chiama?", en: "Good morning, sir. What’s your name?", zh: "早安，先生。您貴姓？" },
            { speaker: "Male", text: "Buongiorno. Mi chiamo Carlo Rossi.", en: "Good morning. My name is Carlo Rossi.", zh: "早安。我叫 Carlo Rossi。" },
            { speaker: "Female", text: "Piacere, signor Rossi.", en: "Nice to meet you, Mr. Rossi.", zh: "幸會，Rossi 先生。" },
            { speaker: "Male", text: "Il piacere è mio. Lei è la signorina Laura?", en: "The pleasure is mine. Are you Miss Laura?", zh: "我也很高興。您是 Laura 小姐嗎？" },
            { speaker: "Female", text: "Sì, sono Laura Bianchi.", en: "Yes, I’m Laura Bianchi.", zh: "是的，我是 Laura Bianchi。" },
            { speaker: "Male", text: "Incantato, signora Bianchi.", en: "Nice to meet you, Ms. Bianchi.", zh: "很高興認識您，Bianchi 女士。" },
            { speaker: "Female", text: "Mi scusi, può firmare qui, per favore?", en: "Excuse me, can you sign here, please?", zh: "不好意思，請您在這裡簽名，好嗎？" },
            { speaker: "Male", text: "Certo. Ecco qua.", en: "Of course. Here you go.", zh: "當然。給您。" },
            { speaker: "Female", text: "Grazie mille. Di dov’è, signore?", en: "Thank you very much. Where are you from?", zh: "非常感謝。您來自哪裡？" },
            { speaker: "Male", text: "Sono di Milano, ma vivo a Roma.", en: "I’m from Milan, but I live in Rome.", zh: "我來自米蘭，但住在羅馬。" },
            { speaker: "Female", text: "Perfetto. Benvenuto e buona giornata!", en: "Perfect. Welcome and have a nice day!", zh: "太好了。歡迎您。祝您今天愉快！" },
            { speaker: "Male", text: "Grazie, altrettanto. Arrivederci.", en: "Thanks, same to you. See you later.", zh: "謝謝，您也是。待會見。" }
          ]
        },

        // Day 3 – Where are you from & where do you live?
        {
          sceneId: 3,
          scene: "Day 3 – Where are you from & where do you live?",
          scene_zh: "第 3 天 – 你來自哪裡／住在哪裡？",
          dialogue: [
            { speaker: "Female", text: "Ciao, di dove sei?", en: "Hi, where are you from?", zh: "嗨，你來自哪裡？" },
            { speaker: "Male", text: "Sono del Cile. E tu?", en: "I’m from Chile. And you?", zh: "我來自智利。你呢？" },
            { speaker: "Female", text: "Vengo dal Messico; ora vivo a Firenze.", en: "I come from Mexico; now I live in Florence.", zh: "我來自墨西哥；現在住在佛羅倫斯。" },
            { speaker: "Male", text: "Ah, che bello. Io vivo a Roma.", en: "Oh, how nice. I live in Rome.", zh: "哇，不錯。我住在羅馬。" },
            { speaker: "Female", text: "Ti piace Roma?", en: "Do you like Rome?", zh: "你喜歡羅馬嗎？" },
            { speaker: "Male", text: "Sì, molto. E Firenze?", en: "Yes, a lot. And Florence?", zh: "是，非常喜歡。那佛羅倫斯呢？" },
            { speaker: "Female", text: "Anche a me piace. In che quartiere vivi?", en: "I like it too. Which neighborhood do you live in?", zh: "我也喜歡。你住在哪個區？" },
            { speaker: "Male", text: "Vivo a Trastevere. E tu?", en: "I live in Trastevere. And you?", zh: "我住在 Trastevere。你呢？" },
            { speaker: "Female", text: "Vivo vicino a Campo de’ Fiori.", en: "I live near Campo de’ Fiori.", zh: "我住在鮮花廣場附近。" },
            { speaker: "Male", text: "Sei qui in vacanza o lavori qui?", en: "Are you here on vacation or do you work here?", zh: "你是來度假，還是在這裡工作？" },
            { speaker: "Female", text: "Lavoro qui, sono insegnante.", en: "I work here; I’m a teacher.", zh: "我在這裡工作；我是老師。" },
            { speaker: "Male", text: "Io sono ingegnere. Piacere di conoscerti!", en: "I’m an engineer. Nice to meet you!", zh: "我是工程師。很高興認識你！" }
          ]
        },
        // Day 4 – Hotel lobby: greetings, names & origin
        {
          sceneId: 4,
          scene: "Day 4 – Hotel lobby: greetings, names & origin",
          scene_zh: "第 4 天 – 飯店大廳：打招呼、名字與來自哪裡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. E tu?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Sono Carlo. Piacere.", en: "I’m Carlo. Nice to meet you.", zh: "我是 Carlo。幸會。" },
            { speaker: "Female", text: "Piacere, Carlo. Sei di Roma?", en: "Nice to meet you, Carlo. Are you from Rome?", zh: "幸會，Carlo。你是羅馬人嗎？" },
            { speaker: "Male", text: "Sì, sono di qui. E tu di dove sei?", en: "Yes, I’m from here. Where are you from?", zh: "是的，我在地人。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti. Vivo in California.", en: "I’m from the United States. I live in California.", zh: "我來自美國，住在加州。" },
            { speaker: "Male", text: "Che bello! Ti fermi vicino al centro?", en: "Nice! Are you staying near the center?", zh: "太好了！你住在市中心附近嗎？" },
            { speaker: "Female", text: "Sì, all’Hotel Centrale.", en: "Yes, at Hotel Centrale", zh: "是的，住在 Centrale 飯店。" },
            { speaker: "Male", text: "Perfetto. Quanti giorni resti a Roma?", en: "Perfect. How many days are you staying in Rome?", zh: "太好了。你在羅馬待幾天？" },
            { speaker: "Female", text: "Quattro giorni. Oggi riposo un po’.", en: "Four days. Today I’m just resting a bit.", zh: "四天。今天先休息一下。" },
            { speaker: "Male", text: "Capisco. Benvenuta e buona permanenza.", en: "I understand. Welcome and have a nice stay.", zh: "了解。歡迎你，祝你入住愉快。" },
            { speaker: "Female", text: "Grazie, Carlo. A dopo!", en: "Thanks, Carlo. See you later!", zh: "謝謝你，Carlo。待會見！" }
          ]
        },

        // Day 5 – Café: where you’re from & where you stay
        {
          sceneId: 5,
          scene: "Day 5 – Café: where you’re from & where you stay",
          scene_zh: "第 5 天 – 咖啡館：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Ciao, Emily! Come stai oggi?", en: "Hi, Emily! How are you today?", zh: "嗨，Emily！今天好嗎？" },
            { speaker: "Female", text: "Molto bene, grazie. E tu, Carlo?", en: "Very well, thanks. And you, Carlo?", zh: "很好，謝謝。你呢，Carlo？" },
            { speaker: "Male", text: "Bene anch’io. Sei sempre all’Hotel Centrale?", en: "Good too. Are you still at Hotel Centrale?", zh: "也不錯。你還住在 Centrale 嗎？" },
            { speaker: "Female", text: "Sì, mi piace perché è vicino alla metro.", en: "Yes, I like it because it’s close to the metro.", zh: "是的，我喜歡它離地鐵很近。" },
            { speaker: "Male", text: "Fantastico. Di dove sei?", en: "Great. Where are you from?", zh: "太好了。你來自哪裡？" },
            { speaker: "Female", text: "Sono di Los Angeles.", en: "I’m from Los Angeles.", zh: "我來自洛杉磯。" },
            { speaker: "Male", text: "Interessante. Cosa fai oggi pomeriggio?", en: "Interesting. What are you doing this afternoon?", zh: "有意思。你今天下午做什麼？" },
            { speaker: "Female", text: "Passeggiare in centro e visitare Piazza Navona.", en: "Walk around downtown and visit Piazza Navona.", zh: "在市中心走走，去納沃納廣場。" },
            { speaker: "Male", text: "Bel programma. Se hai bisogno di aiuto, dimmi.", en: "Good plan. If you need help, tell me.", zh: "不錯的計畫。需要幫忙就跟我說。" },
            { speaker: "Female", text: "Grazie. A dopo!", en: "Thanks. See you later!", zh: "謝謝。待會見！" }
          ]
        },
        // Day 6 – Villa Borghese: what you do & what you’re doing now
        {
          sceneId: 6,
          scene: "Day 6 – Villa Borghese: what you do & what you’re doing now",
          scene_zh: "第 6 天 – 博爾蓋塞別墅：你的工作與你現在在做什麼",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, Carlo! Cosa fai oggi?", en: "Good morning, Carlo! What are you doing today?", zh: "早安，Carlo！你今天在做什麼？" },
            { speaker: "Male", text: "Passeggio a Villa Borghese. E tu?", en: "I’m strolling in Villa Borghese. And you?", zh: "我在博爾蓋塞別墅散步。你呢？" },
            { speaker: "Female", text: "Prendo un caffè e leggo un po’.", en: "I’m having a coffee and reading a bit.", zh: "我喝咖啡、看一下書。" },
            { speaker: "Male", text: "Suona bene. Che lavoro fai?", en: "Sounds good. What’s your job?", zh: "聽起來不錯。你做什麼工作？" },
            { speaker: "Female", text: "Sono insegnante. E tu?", en: "I’m a teacher. And you?", zh: "我是老師。你呢？" },
            { speaker: "Male", text: "Lavoro in ufficio e studio la sera.", en: "I work in an office and study in the evenings.", zh: "我在辦公室上班，傍晚去念書。" },
            { speaker: "Female", text: "Interessante! Vivi qui a Roma?", en: "Interesting! Do you live here in Rome?", zh: "真有趣！你住在羅馬嗎？" },
            { speaker: "Male", text: "Sì, vivo vicino a Termini. E tu dove stai adesso?", en: "Yes, I live near Termini. And where are you staying now?", zh: "是的，我住在特米尼附近。你現在住哪裡？" },
            { speaker: "Female", text: "All’Hotel Centrale, vicino alla metro.", en: "At Hotel Centrale, near the metro.", zh: "在 Centrale 飯店，靠近地鐵。" },
            { speaker: "Male", text: "È comodo.", en: "It’s convenient.", zh: "很方便。" },
            { speaker: "Female", text: "Sì. Poi vado in centro.", en: "Yes. Later I’m going downtown.", zh: "是啊。等一下要去市中心。" },
            { speaker: "Male", text: "Ottimo piano! Ci vediamo stasera in hotel.", en: "Great plan! See you tonight in the hotel.", zh: "好主意！今晚在飯店見。" },
            { speaker: "Female", text: "Va bene. A dopo!", en: "Alright. See you later!", zh: "好的。待會見！" }
          ]
        },
        // Day 7 – Hotel lobby: names & stay
        {
          sceneId: 7,
          scene: "Day 7 – Hotel lobby: names & stay",
          scene_zh: "第 7 天 – 飯店大廳：名字與住宿",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Male", text: "Buongiorno. Mi chiamo Carlo. E tu?", en: "Good morning. My name is Carlo. And you?", zh: "早安。我叫 Carlo。你呢？" },
            { speaker: "Female", text: "Mi chiamo Emily. Piacere.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Incantato, Emily. Di dove sei?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti, della California. E tu?", en: "I’m from the United States, from California. And you?", zh: "我來自美國，加州。你呢？" },
            { speaker: "Male", text: "Sono di Roma. Dove stai adesso?", en: "I’m from Rome. Where are you staying now?", zh: "我來自羅馬。你現在住哪裡？" },
            { speaker: "Female", text: "Sto all’Hotel Centrale, vicino al centro.", en: "I’m staying at Hotel Centrale, near the center.", zh: "我住在 Centrale 飯店，靠近市中心。" },
            { speaker: "Male", text: "Perfetto. Cosa fai oggi?", en: "Perfect. What are you doing today?", zh: "太好了。你今天在做什麼？" },
            { speaker: "Female", text: "Adesso faccio il check-in e poi passeggio in piazza.", en: "Now I’m checking in and then I’ll walk around the square.", zh: "我先辦理入住，之後去廣場走走。" },
            { speaker: "Male", text: "Bene. Io lavoro qui vicino; esco alle sei.", en: "Good. I work nearby; I get off at six.", zh: "好。我在附近上班；六點下班。" },
            { speaker: "Female", text: "Geniale. Ci vediamo nel pomeriggio!", en: "Great. See you in the afternoon!", zh: "太好了。下午見！" },
            { speaker: "Male", text: "A dopo!", en: "See you later!", zh: "待會見！" }
          ]
        },

        // Day 8 – Piazza: where you're from & live
        {
          sceneId: 8,
          scene: "Day 8 – Piazza: where you're from & live",
          scene_zh: "第 8 天 – 廣場：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Ciao! Come va, Emily?", en: "Hi! How’s it going, Emily?", zh: "嗨！最近如何，Emily？" },
            { speaker: "Female", text: "Molto bene, grazie. E tu, Carlo?", en: "Very well, thanks. And you, Carlo?", zh: "很好，謝謝。你呢，Carlo？" },
            { speaker: "Male", text: "Bene. Vivi negli Stati Uniti?", en: "Good. Do you live in the United States?", zh: "不錯。你住在美國嗎？" },
            { speaker: "Female", text: "Sì, vivo a San Diego, in California.", en: "Yes, I live in San Diego, in California.", zh: "對，我住在加州的聖地牙哥。" },
            { speaker: "Male", text: "Io vivo a Roma, vicino al parco.", en: "I live in Rome, near the park.", zh: "我住在羅馬，公園附近。" },
            { speaker: "Female", text: "E la tua famiglia, di dove è?", en: "And where is your family from?", zh: "那你的家人來自哪裡？" },
            { speaker: "Male", text: "La mia famiglia è di Napoli.", en: "My family is from Naples.", zh: "我家人來自拿坡里。" },
            { speaker: "Female", text: "Che lavoro fai?", en: "What do you do (for work)?", zh: "你的工作是什麼？" },
            { speaker: "Male", text: "Sono designer e lavoro in centro.", en: "I’m a designer and I work downtown.", zh: "我是設計師，在市中心上班。" },
            { speaker: "Female", text: "Interessante. Io lavoro nella tecnologia.", en: "Interesting. I work in tech.", zh: "有意思。我在科技業。" },
            { speaker: "Male", text: "Perfetto. Prendiamo un caffè e continuiamo a parlare.", en: "Perfect. Let’s have a coffee and keep talking.", zh: "太好了。我們喝杯咖啡再聊。" },
            { speaker: "Female", text: "Certo. Grazie per l’invito.", en: "Sure. Thanks for the invitation.", zh: "好的。謝謝邀請。" }
          ]
        },

        // Day 9 – Class circle: names & where from
        {
          sceneId: 9,
          scene: "Day 9 – Class circle: names & where from",
          scene_zh: "第 9 天 – 語言課：自我介紹",
          dialogue: [
            { speaker: "Female", text: "Buon pomeriggio. Mi chiamo Emily.", en: "Good afternoon. My name is Emily.", zh: "午安。我叫 Emily。" },
            { speaker: "Male", text: "Piacere, Emily. Io sono Daniele.", en: "Nice to meet you, Emily. I’m Daniele.", zh: "幸會，Emily。我是 Daniele。" },
            { speaker: "Female", text: "Piacere, Daniele. Di dove sei?", en: "Nice to meet you, Daniele. Where are you from?", zh: "很高興認識你，Daniele。你來自哪裡？" },
            { speaker: "Male", text: "Sono di Boston, negli Stati Uniti. E tu?", en: "I’m from Boston, in the United States. And you?", zh: "我來自美國波士頓。你呢？" },
            { speaker: "Female", text: "Sono della California. Vivo a San Diego.", en: "I’m from California. I live in San Diego.", zh: "我來自加州，住在聖地牙哥。" },
            { speaker: "Male", text: "Dove stai ora a Roma?", en: "Where are you staying now in Rome?", zh: "你現在在羅馬住在哪裡？" },
            { speaker: "Female", text: "Sto in un hotel vicino a Termini.", en: "I’m staying in a hotel near Termini.", zh: "我住在特米尼附近的一家飯店。" },
            { speaker: "Male", text: "Che bello. Io sto in un piccolo appartamento.", en: "Nice. I’m staying in a small apartment.", zh: "不錯。我住在一間小公寓。" },
            { speaker: "Female", text: "Cosa fai dopo la lezione?", en: "What are you doing after class?", zh: "下課之後你要做什麼？" },
            { speaker: "Male", text: "Vado al museo e poi ceno con amici.", en: "I’m going to the museum and then having dinner with friends.", zh: "我要去博物館，之後和朋友吃晚餐。" },
            { speaker: "Female", text: "Perfetto. Ci vediamo domani!", en: "Perfect. See you tomorrow!", zh: "太好了。明天見！" },
            { speaker: "Male", text: "A domani! Grazie per la chiacchierata.", en: "See you tomorrow! Thanks for the chat.", zh: "明天見！謝謝聊天。" }
          ]
        },

        // Day 10 – Train: quick intro & plans
        {
          sceneId: 10,
          scene: "Day 10 – Train: quick intro & plans",
          scene_zh: "第 10 天 – 火車上：快速認識與行程",
          dialogue: [
            { speaker: "Female", text: "Scusi, questo posto è libero?", en: "Excuse me, is this seat free?", zh: "不好意思，這個位子有人嗎？" },
            { speaker: "Male", text: "Sì, prego. Sono Luigi. Come ti chiami?", en: "Yes, please. I’m Luigi. What’s your name?", zh: "請坐。我是 Luigi。你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. Piacere.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Piacere, Emily. Di dove sei?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti. E tu?", en: "I’m from the United States. And you?", zh: "我來自美國。你呢？" },
            { speaker: "Male", text: "Sono di Napoli. Dove stai lì?", en: "I’m from Naples. Where are you staying there?", zh: "我來自拿坡里。你到那邊住哪裡？" },
            { speaker: "Female", text: "Sto in un hotel vicino alla stazione.", en: "I’m staying at a hotel near the station.", zh: "我住在車站附近的一家飯店。" },
            { speaker: "Male", text: "Perfetto. Cosa fai adesso sul treno?", en: "Perfect. What are you doing now on the train?", zh: "太好了。你現在在火車上做什麼呢？" },
            { speaker: "Female", text: "Leggo un po’ e ascolto musica.", en: "I’m reading a bit and listening to music.", zh: "我看看書、聽聽音樂。" },
            { speaker: "Male", text: "Benissimo. Io controllo le mail di lavoro.", en: "Very good. I’m checking work emails.", zh: "很好。我在看工作郵件。" },
            { speaker: "Female", text: "Che produttivo. Buon viaggio!", en: "So productive. Have a good trip!", zh: "很有效率。旅途愉快！" },
            { speaker: "Male", text: "Grazie. A dopo!", en: "Thanks. See you later!", zh: "謝謝。待會見！" }
          ]
        }
      ]
    }
  ]
};
