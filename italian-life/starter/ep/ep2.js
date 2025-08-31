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
      topic: "🙋‍♀️ Nomi, Origini e Lavoro",
      topic_zh: "🙋‍♀️ 名字、來自哪裡與工作／職業",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Prime presentazioni (casual)",
          scene_zh: "第 1 天 – 初次見面（非正式）",
          dialogue: [
            { speaker: "Female", text: "Ciao! Buongiorno.", en: "Hi! Good morning.", zh: "嗨！早安。" },
            { speaker: "Male", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. E tu?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Mi chiamo Marco.", en: "My name is Marco.", zh: "我叫 Marco。" },
            { speaker: "Female", text: "Piacere, Marco.", en: "Nice to meet you, Marco.", zh: "幸會，Marco。" },
            { speaker: "Male", text: "Piacere, Emily.", en: "Nice to meet you, Emily.", zh: "幸會，Emily。" },
            { speaker: "Female", text: "Sei di qui?", en: "Are you from here?", zh: "你是這裡人嗎？" },
            { speaker: "Male", text: "No, sono di Milano. E tu?", en: "No, I’m from Milan. And you?", zh: "不是，我來自米蘭。你呢？" },
            { speaker: "Female", text: "Vengo dagli Stati Uniti. Vivo in California.", en: "I come from the United States. I live in California.", zh: "我來自美國，住在加州。" },
            { speaker: "Male", text: "Che bello! Io vivo a Roma.", en: "Nice! I live in Rome.", zh: "不錯！我住在羅馬。" },
            { speaker: "Female", text: "A presto!", en: "See you soon!", zh: "回頭見！" },
            { speaker: "Male", text: "A dopo!", en: "See you later!", zh: "待會見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Presentazioni formali (reception)",
          scene_zh: "第 2 天 – 正式介紹（櫃台）",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, signore. Come si chiama?", en: "Good morning, sir. What’s your name?", zh: "早安，先生。您貴姓？" },
            { speaker: "Male", text: "Buongiorno. Mi chiamo Carlo Rossi.", en: "Good morning. My name is Carlo Rossi.", zh: "早安。我叫 Carlo Rossi。" },
            { speaker: "Female", text: "Piacere, signor Rossi.", en: "Nice to meet you, Mr. Rossi.", zh: "幸會，Rossi 先生。" },
            { speaker: "Male", text: "Il piacere è mio. Lei è la signorina Laura?", en: "The pleasure is mine. Are you Miss Laura?", zh: "我也很高興。您是 Laura 小姐嗎？" },
            { speaker: "Female", text: "Sì, sono Laura Bianchi.", en: "Yes, I’m Laura Bianchi.", zh: "是的，我是 Laura Bianchi。" },
            { speaker: "Male", text: "Molto lieto, signora Bianchi.", en: "Nice to meet you, Ms. Bianchi.", zh: "很高興認識您，Bianchi 女士。" },
            { speaker: "Female", text: "Per favore, può firmare qui?", en: "Could you sign here, please?", zh: "請您在這裡簽名，好嗎？" },
            { speaker: "Male", text: "Certo. Ecco.", en: "Of course. Here you go.", zh: "當然。給您。" },
            { speaker: "Female", text: "Grazie mille. Di dov’è?", en: "Thank you very much. Where are you from?", zh: "非常感謝。您來自哪裡？" },
            { speaker: "Male", text: "Sono di Bologna, ma vivo a Roma.", en: "I’m from Bologna, but I live in Rome.", zh: "我來自波隆納，但住在羅馬。" },
            { speaker: "Female", text: "Perfetto. Benvenuto e buona giornata!", en: "Perfect. Welcome and have a nice day!", zh: "太好了。歡迎您，祝您今天愉快！" },
            { speaker: "Male", text: "Grazie, altrettanto. Arrivederci.", en: "Thanks, same to you. Goodbye.", zh: "謝謝，您也是。再見。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Di dove sei e dove vivi?",
          scene_zh: "第 3 天 – 你來自哪裡／住在哪裡？",
          dialogue: [
            { speaker: "Female", text: "Ciao, di dove sei?", en: "Hi, where are you from?", zh: "嗨，你來自哪裡？" },
            { speaker: "Male", text: "Sono di Napoli. E tu?", en: "I’m from Naples. And you?", zh: "我來自拿坡里。你呢？" },
            { speaker: "Female", text: "Vengo da Los Angeles; ora vivo a San Diego.", en: "I come from Los Angeles; now I live in San Diego.", zh: "我來自洛杉磯；現在住在聖地牙哥。" },
            { speaker: "Male", text: "Interessante. Io vivo vicino al centro.", en: "Interesting. I live near the center.", zh: "有意思。我住在市中心附近。" },
            { speaker: "Female", text: "Ti piace Roma?", en: "Do you like Rome?", zh: "你喜歡羅馬嗎？" },
            { speaker: "Male", text: "Sì, moltissimo. E la California?", en: "Yes, very much. And California?", zh: "是，非常喜歡。那加州呢？" },
            { speaker: "Female", text: "Mi piace anche. In quale quartiere abiti?", en: "I like it too. Which neighborhood do you live in?", zh: "我也喜歡。你住在哪個社區？" },
            { speaker: "Male", text: "Abito a Trastevere. E tu?", en: "I live in Trastevere. And you?", zh: "我住在特拉斯提弗列。你呢？" },
            { speaker: "Female", text: "Alloggio vicino alla stazione Termini.", en: "I’m staying near Termini station.", zh: "我住在特米尼車站附近。" },
            { speaker: "Male", text: "Perfetto. Prendiamo un caffè?", en: "Perfect. Shall we get a coffee?", zh: "太好了。喝杯咖啡嗎？" },
            { speaker: "Female", text: "Volentieri. Andiamo!", en: "Gladly. Let’s go!", zh: "好啊。走吧！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Hotel a Roma: saluti, nome e origine",
          scene_zh: "第 4 天 – 羅馬飯店：打招呼、名字與來自哪裡",
          dialogue: [
            { speaker: "Female", text: "Buongiorno!", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. E tu?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Sono Marco. Piacere.", en: "I’m Marco. Nice to meet you.", zh: "我是 Marco。幸會。" },
            { speaker: "Female", text: "Piacere, Marco. Sei di Roma?", en: "Nice to meet you, Marco. Are you from Rome?", zh: "幸會，Marco。你是羅馬人嗎？" },
            { speaker: "Male", text: "Sì, sono di qui. E tu di dove sei?", en: "Yes, I’m from here. Where are you from?", zh: "是的，我在地人。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti. Vivo in California.", en: "I’m from the United States. I live in California.", zh: "我來自美國，住在加州。" },
            { speaker: "Male", text: "Che bello! Alloggi vicino al centro?", en: "Nice! Are you staying near the center?", zh: "太好了！你住在市中心附近嗎？" },
            { speaker: "Female", text: "Sì, all’Hotel Centro, a due minuti dalla metro.", en: "Yes, at Hotel Centro, two minutes from the metro.", zh: "是的，住在 Hotel Centro，離地鐵走路兩分鐘。" },
            { speaker: "Male", text: "Perfetto. Benvenuta e buona permanenza.", en: "Perfect. Welcome and have a nice stay.", zh: "太好了。歡迎你，祝入住愉快。" },
            { speaker: "Female", text: "Grazie, Marco. A dopo!", en: "Thanks, Marco. See you later!", zh: "謝謝你，Marco。待會見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Bar vicino a Piazza di Spagna: da dove vieni & dove stai",
          scene_zh: "第 5 天 – 西班牙廣場附近咖啡吧：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Ciao, Emily! Come stai oggi?", en: "Hi, Emily! How are you today?", zh: "嗨，Emily！今天好嗎？" },
            { speaker: "Female", text: "Molto bene, grazie. E tu, Marco?", en: "Very well, thanks. And you, Marco?", zh: "很好，謝謝。你呢，Marco？" },
            { speaker: "Male", text: "Bene anch’io. Sei ancora all’Hotel Centro?", en: "I’m good too. Are you still at Hotel Centro?", zh: "我也不錯。你還住在 Hotel Centro 嗎？" },
            { speaker: "Female", text: "Sì, mi piace perché è vicino alla metro.", en: "Yes, I like it because it’s close to the metro.", zh: "是的，我喜歡它離地鐵很近。" },
            { speaker: "Male", text: "Di quale città degli Stati Uniti sei?", en: "What U.S. city are you from?", zh: "你在美國哪個城市？" },
            { speaker: "Female", text: "Vengo da Los Angeles, ma ora vivo nel nord della California.", en: "I come from Los Angeles, but now I live in Northern California.", zh: "我來自洛杉磯，不過現在住在加州北部。" },
            { speaker: "Male", text: "Ottimo. Che cosa fai oggi pomeriggio?", en: "Great. What are you doing this afternoon?", zh: "太好了。你今天下午要做什麼？" },
            { speaker: "Female", text: "Passeggio in centro e visito Piazza Navona.", en: "I’ll walk around downtown and visit Piazza Navona.", zh: "在市中心走走，去納沃納廣場。" },
            { speaker: "Male", text: "Buon programma. Se hai bisogno, dimmelo.", en: "Good plan. If you need anything, tell me.", zh: "不錯的計畫。需要幫忙就跟我說。" },
            { speaker: "Female", text: "Grazie, Marco. A stasera!", en: "Thanks, Marco. See you tonight!", zh: "謝謝你，Marco。今晚見！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Parco del Colosseo: lavoro & cosa fai adesso",
          scene_zh: "第 6 天 – 鬥獸場公園：工作與你現在在做什麼",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, Marco! Che fai oggi?", en: "Good morning, Marco! What are you doing today?", zh: "早安，Marco！你今天在做什麼？" },
            { speaker: "Male", text: "Passeggio al parco. E tu?", en: "I’m strolling in the park. And you?", zh: "我在公園散步。你呢？" },
            { speaker: "Female", text: "Prendo un caffè e leggo un po’.", en: "I’m having a coffee and reading a bit.", zh: "我喝咖啡、看一下書。" },
            { speaker: "Male", text: "Suona bene. Di che ti occupi?", en: "Sounds good. What do you do (for work)?", zh: "聽起來不錯。你的工作是什麼？" },
            { speaker: "Female", text: "Lavoro nella tecnologia. E tu?", en: "I work in tech. And you?", zh: "我在科技業。你呢？" },
            { speaker: "Male", text: "Lavoro in ufficio e studio la sera.", en: "I work in an office and study in the evenings.", zh: "我在辦公室上班，晚上念書。" },
            { speaker: "Female", text: "Interessante! Vivi qui a Roma?", en: "Interesting! Do you live here in Rome?", zh: "真有趣！你住在羅馬嗎？" },
            { speaker: "Male", text: "Sì, abito vicino a Termini. E tu dove alloggi?", en: "Yes, I live near Termini. Where are you staying?", zh: "是的，我住在特米尼附近。你住哪裡？" },
            { speaker: "Female", text: "All’Hotel Centro, vicino alla metro.", en: "At Hotel Centro, near the metro.", zh: "在 Hotel Centro，靠近地鐵。" },
            { speaker: "Male", text: "Perfetto per muoverti in città.", en: "Perfect for getting around the city.", zh: "很適合在城裡走動。" },
            { speaker: "Female", text: "Sì. Dopo vado al museo.", en: "Yes. Later I’m going to the museum.", zh: "是啊。等一下要去博物館。" },
            { speaker: "Male", text: "Ottimo! A dopo in hotel.", en: "Great! See you later at the hotel.", zh: "太棒了！待會在飯店見。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Hall dell’hotel: nomi e soggiorno",
          scene_zh: "第 7 天 – 飯店大廳：名字與住宿",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Come ti chiami?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Male", text: "Buongiorno. Mi chiamo Marco. E tu?", en: "Good morning. My name is Marco. And you?", zh: "早安。我叫 Marco。你呢？" },
            { speaker: "Female", text: "Mi chiamo Emily. Piacere.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Piacere, Emily. Di dove sei?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti, della California. E tu?", en: "I’m from the United States, from California. And you?", zh: "我來自美國，加州。你呢？" },
            { speaker: "Male", text: "Sono di Roma. Dove stai adesso?", en: "I’m from Rome. Where are you staying now?", zh: "我來自羅馬。你現在住哪裡？" },
            { speaker: "Female", text: "Sto all’Hotel Centro, vicino al centro.", en: "I’m at Hotel Centro, near the center.", zh: "我住在 Hotel Centro，靠近市中心。" },
            { speaker: "Male", text: "Perfetto. Che fai oggi?", en: "Perfect. What are you doing today?", zh: "太好了。你今天在做什麼？" },
            { speaker: "Female", text: "Faccio il check-in e poi passeggio in piazza.", en: "I’m checking in and then walking around the square.", zh: "我先辦入住，之後去廣場走走。" },
            { speaker: "Male", text: "Va bene. Se ti serve aiuto, dimmi.", en: "Alright. If you need help, tell me.", zh: "好。如果你需要幫忙，跟我說。" },
            { speaker: "Female", text: "Grazie, Marco. A dopo!", en: "Thanks, Marco. See you later!", zh: "謝謝你，Marco。待會見！" },
            { speaker: "Male", text: "Di nulla. A presto!", en: "You’re welcome. See you soon!", zh: "不客氣。回頭見！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – In piazza: da dove vieni & dove vivi",
          scene_zh: "第 8 天 – 廣場：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Ciao! Come va, Emily?", en: "Hi! How’s it going, Emily?", zh: "嗨！最近如何，Emily？" },
            { speaker: "Female", text: "Benissimo, grazie. E tu, Marco?", en: "Very well, thanks. And you, Marco?", zh: "很好，謝謝。你呢，Marco？" },
            { speaker: "Male", text: "Bene. Vivi negli Stati Uniti, vero?", en: "Good. You live in the U.S., right?", zh: "不錯。你住在美國，對吧？" },
            { speaker: "Female", text: "Sì, abito a San Diego, in California.", en: "Yes, I live in San Diego, in California.", zh: "對，我住在加州聖地牙哥。" },
            { speaker: "Male", text: "Io vivo a Roma, vicino al parco.", en: "I live in Rome, near the park.", zh: "我住在羅馬，公園附近。" },
            { speaker: "Female", text: "E la tua famiglia di dove è?", en: "And where is your family from?", zh: "那你的家人來自哪裡？" },
            { speaker: "Male", text: "La mia famiglia è di Firenze.", en: "My family is from Florence.", zh: "我家人來自佛羅倫斯。" },
            { speaker: "Female", text: "Che bello. Dove alloggi quando viaggi?", en: "Nice. Where do you stay when you travel?", zh: "不錯。你旅行時都住哪裡？" },
            { speaker: "Male", text: "Di solito in un hotel vicino al centro.", en: "Usually at a hotel near the center.", zh: "通常住在市中心附近的飯店。" },
            { speaker: "Female", text: "Adesso sto in un ostello, ma è tranquillo.", en: "Now I’m in a hostel, but it’s quiet.", zh: "我現在住青年旅館，不過很安靜。" },
            { speaker: "Male", text: "Perfetto. Prendiamo un caffè e continuiamo a parlare.", en: "Perfect. Let’s have a coffee and keep talking.", zh: "太好了。我們喝杯咖啡再聊。" },
            { speaker: "Female", text: "Certo. Grazie per l’invito.", en: "Sure. Thanks for the invitation.", zh: "好的。謝謝邀請。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Lezione di lingua: giro di presentazioni",
          scene_zh: "第 9 天 – 語言課：自我介紹",
          dialogue: [
            { speaker: "Female", text: "Buon pomeriggio. Mi chiamo Emily.", en: "Good afternoon. My name is Emily.", zh: "午安。我叫 Emily。" },
            { speaker: "Male", text: "Piacere, Emily. Io sono Daniel.", en: "Nice to meet you, Emily. I’m Daniel.", zh: "幸會，Emily。我是 Daniel。" },
            { speaker: "Female", text: "Piacere, Daniel. Di dove sei?", en: "Nice to meet you, Daniel. Where are you from?", zh: "很高興認識你，Daniel。你來自哪裡？" },
            { speaker: "Male", text: "Sono di Boston, negli Stati Uniti. E tu?", en: "I’m from Boston, in the United States. And you?", zh: "我來自美國波士頓。你呢？" },
            { speaker: "Female", text: "Sono della California. Abito a San Diego.", en: "I’m from California. I live in San Diego.", zh: "我來自加州，住在聖地牙哥。" },
            { speaker: "Male", text: "Dove alloggi adesso a Roma?", en: "Where are you staying now in Rome?", zh: "你現在在羅馬住在哪裡？" },
            { speaker: "Female", text: "In un hotel vicino a Termini.", en: "In a hotel near Termini.", zh: "在特米尼附近的一家飯店。" },
            { speaker: "Male", text: "Bene. Io sto in un piccolo appartamento.", en: "Nice. I’m in a small apartment.", zh: "不錯。我住在一間小公寓。" },
            { speaker: "Female", text: "Che fai dopo lezione?", en: "What are you doing after class?", zh: "下課之後你要做什麼？" },
            { speaker: "Male", text: "Vado al museo e poi ceno con amici.", en: "I’m going to the museum and then having dinner with friends.", zh: "我要去博物館，之後跟朋友吃晚餐。" },
            { speaker: "Female", text: "Perfetto. Ci vediamo domani!", en: "Perfect. See you tomorrow!", zh: "太好了。明天見！" },
            { speaker: "Male", text: "A domani! Grazie della chiacchierata.", en: "See you tomorrow! Thanks for the chat.", zh: "明天見！謝謝聊天。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Treno per Firenze: presentazione veloce & piani",
          scene_zh: "第 10 天 – 火車上：快速認識與行程",
          dialogue: [
            { speaker: "Female", text: "Scusi, questo posto è libero?", en: "Excuse me, is this seat free?", zh: "不好意思，這個位子有人嗎？" },
            { speaker: "Male", text: "Sì, prego. Sono Luca. Come ti chiami?", en: "Yes, please. I’m Luca. What’s your name?", zh: "請坐。我是 Luca。你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Emily. Piacere.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Piacere, Emily. Di dove sei?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Sono degli Stati Uniti. E tu?", en: "I’m from the United States. And you?", zh: "我來自美國。你呢？" },
            { speaker: "Male", text: "Sono di Firenze. Dove stai lì?", en: "I’m from Florence. Where are you staying there?", zh: "我來自佛羅倫斯。你到那邊住哪裡？" },
            { speaker: "Female", text: "In un hotel vicino alla stazione.", en: "At a hotel near the station.", zh: "在車站附近的飯店。" },
            { speaker: "Male", text: "Perfetto. Che fai ora sul treno?", en: "Perfect. What are you doing now on the train?", zh: "太好了。你現在在火車上做什麼？" },
            { speaker: "Female", text: "Leggo un po’ e ascolto musica.", en: "I’m reading a bit and listening to music.", zh: "我看看書、聽音樂。" },
            { speaker: "Male", text: "Benissimo. Se ti serve qualcosa, dimmi.", en: "Great. If you need anything, tell me.", zh: "好的，如果需要什麼就跟我說。" },
            { speaker: "Female", text: "Grazie, Luca. A dopo!", en: "Thanks, Luca. See you later!", zh: "謝謝你，Luca。待會見！" },
            { speaker: "Male", text: "Di nulla. Buon viaggio!", en: "You’re welcome. Have a good trip!", zh: "不客氣。旅途愉快！" }
          ]
        }
      ]
    }
  ]
};
