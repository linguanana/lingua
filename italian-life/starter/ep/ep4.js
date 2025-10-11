const episodeData = {
  ep_title: "ep",
  episodeId: 4,
  episode: "🇮🇹 Episode – Starter 04: Subject Pronouns",
  episode_zh: "🇮🇹 入門 04：人稱代詞",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "I, you, he, she, we, you, them, my, yours, his and her",
      topic_zh: "我、你、他、她....",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – I am / You are (Io sono / Tu sei)",
          scene_zh: "第 1 天 – 我是 / 你是",
          dialogue: [
            { speaker: "Female", text: "Ciao! Io sono Anna.", en: "Hi! I am Anna.", zh: "嗨！我是安娜。" },
            { speaker: "Male", text: "Piacere! Io sono Marco.", en: "Nice to meet you! I am Marco.", zh: "很高興認識你！我是馬可。" },
            { speaker: "Female", text: "Tu sei studente?", en: "Are you a student?", zh: "你是學生嗎？" },
            { speaker: "Male", text: "Sì, io sono studente.", en: "Yes, I am a student.", zh: "是的，我是學生。" },
            { speaker: "Female", text: "Io sono studentessa di lingue.", en: "I am a language student.", zh: "我是語言系的學生。" },
            { speaker: "Male", text: "Interessante! Tu sei di Roma?", en: "Interesting! Are you from Rome?", zh: "有趣！你是羅馬人嗎？" },
            { speaker: "Female", text: "No, io sono di Milano.", en: "No, I am from Milan.", zh: "不是，我來自米蘭。" },
            { speaker: "Male", text: "Capisco. Io sono di Firenze.", en: "I see. I am from Florence.", zh: "我懂了。我來自佛羅倫斯。" },
            { speaker: "Female", text: "Io sono stanca, vado a casa.", en: "I am tired, I’m going home.", zh: "我累了，我要回家。" },
            { speaker: "Male", text: "Anch’io sono stanco. A domani!", en: "I’m tired too. See you tomorrow!", zh: "我也累了。明天見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – He is, my and yours",
          scene_zh: "第 2 天 – 他是",
          dialogue: [
            { speaker: "Female", text: "Chi è lui?", en: "Who is he?", zh: "他是誰？" },
            { speaker: "Male", text: "Lui è Paolo.", en: "He is Paolo.", zh: "他是 Paolo。" },
            { speaker: "Female", text: "Lui è tuo amico?", en: "Is he your friend?", zh: "他是你的朋友嗎？" },
            { speaker: "Male", text: "Sì, lui è un mio amico.", en: "Yes, he is my friend.", zh: "是的，他是我的朋友。" },
            { speaker: "Female", text: "Lui è studente anche lui?", en: "Is he also a student?", zh: "他也是學生嗎？" },
            { speaker: "Male", text: "No, lui è insegnante.", en: "No, he is a teacher.", zh: "不是，他是老師。" },
            { speaker: "Female", text: "Davvero? Lui è insegnante di matematica?", en: "Really? Is he a math teacher?", zh: "真的嗎？他是數學老師嗎？" },
            { speaker: "Male", text: "No, lui è insegnante di italiano.", en: "No, he is an Italian teacher.", zh: "不是，他是義大利語老師。" },
            { speaker: "Female", text: "Fantastico! Allora lui è molto utile per noi.", en: "Fantastic! Then he’s very useful for us.", zh: "太棒了！那他對我們很有幫助。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Subject pronoun can be omitted (Io sono → Sono, Tu sei → Sei…)",
          scene_zh: "第 3 天 – 義大利文主詞可省略",
          dialogue: [
            { speaker: "Male", text: "Io sono Marco. Oppure: Sono Marco.", en: "I am Marco. Or simply: I’m Marco.", zh: "我是馬可。或者簡單說：我是馬可。" },
            { speaker: "Female", text: "Tu sei Anna. O: Sei Anna.", en: "You are Anna. Or: You’re Anna.", zh: "你是安娜。或者：你是安娜。" },
            { speaker: "Male", text: "Lui è Paolo. O solo: È Paolo.", en: "He is Paolo. Or simply: He’s Paolo.", zh: "他是保羅。或者：他是保羅。" },
            { speaker: "Female", text: "Lei è Maria. Oppure: È Maria.", en: "She is Maria. Or: She’s Maria.", zh: "她是瑪麗亞。或者：她是瑪麗亞。" },
            { speaker: "Male", text: "Noi siamo amici. O: Siamo amici.", en: "We are friends. Or: We’re friends.", zh: "我們是朋友。或者：我們是朋友。" },
            { speaker: "Female", text: "Voi siete studenti. O: Siete studenti.", en: "You are students. Or: You’re students.", zh: "你們是學生。或者：你們是學生。" },
            { speaker: "Male", text: "Loro sono italiani. O: Sono italiani.", en: "They are Italians. Or: They’re Italians.", zh: "他們是義大利人。或者：他們是義大利人。" },
            { speaker: "Female", text: "Perfetto! Tutti insieme siamo una classe.", en: "Perfect! All together we are a class.", zh: "太好了！我們大家一起就是一個班級。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – We and You all - At a party",
          scene_zh: "在派對上",
          dialogue: [
            { speaker: "Male", text: "Ciao! Voi siete studenti?", en: "Hi! Are you (all) students?", zh: "嗨！你們是學生嗎？" },
            { speaker: "Female", text: "Sì, noi siamo studenti. E voi?", en: "Yes, we are students. And you?", zh: "對，我們是學生。你們呢？" },
            { speaker: "Male", text: "Noi siamo in vacanza a Roma. Parliamo inglese.", en: "We are on vacation in Rome. We speak English.", zh: "我們在羅馬度假。我們說英文。" },
            { speaker: "Female", text: "Che bello! Voi siete americani? Noi parliamo un po' di inglese.", en: "How nice! Are you (all) American? We speak a little English.", zh: "真好！你們是美國人嗎？我們說一點點英文。" },
            { speaker: "Male", text: "Sì, noi siamo americani. Voi parlate bene italiano!", en: "Yes, we are American. You (all) speak Italian well!", zh: "對，我們是美國人。你們說義大利文說得很好！" },
            { speaker: "Female", text: "Grazie! È stato un piacere conoscervi. Voi siete molto simpatici.", en: "Thanks! It was a pleasure to meet you. You (all) are very nice.", zh: "謝謝！很高興認識你們。你們人很好。" },
            { speaker: "Male", text: "Anche voi siete simpatiche. Noi siamo contenti di avervi conosciuto.", en: "You are nice too. We are happy to have met you.", zh: "你們也很好。我們很高興認識你們。" },
            { speaker: "Female", text: "Voi siete i migliori! Andiamo a prendere un caffè insieme.", en: "You (all) are the best! Let's go get a coffee together.", zh: "你們最棒了！我們一起去喝杯咖啡吧。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 - Talking about others",
          scene_zh: "第 5 天 – 談論別人",
          dialogue: [
            { speaker: "Male", text: "Chi sono loro?", en: "Who are they?", zh: "他們是誰？" },
            { speaker: "Female", text: "Loro sono i miei amici. Sono di Milano.", en: "They are my friends. They are from Milan.", zh: "他們是我的朋友。他們來自米蘭。" },
            { speaker: "Male", text: "Fantastico! Loro vanno in vacanza?", en: "Fantastic! Are they going on vacation?", zh: "太棒了！他們要去度假嗎？" },
            { speaker: "Female", text: "No, loro non vanno in vacanza. Loro lavorano qui.", en: "No, they are not going on vacation. They work here.", zh: "不，他們不去度假。他們在這裡工作。" },
            { speaker: "Male", text: "Capisco. Loro sono stanchi?", en: "I see. Are they tired?", zh: "我懂了。他們累了嗎？" },
            { speaker: "Female", text: "Sì, sono un po' stanchi. Ma loro sono felici.", en: "Yes, they are a little tired. But they are happy.", zh: "對，他們有點累。但他們很開心。" },
            { speaker: "Male", text: "Bene. Loro parlano bene l'italiano?", en: "Good. Do they speak Italian well?", zh: "很好。他們義大利文說得好嗎？" },
            { speaker: "Female", text: "Sì, parlano molto bene.", en: "Yes, they speak very well.", zh: "是的，他們說得很好。" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Possessive Adjectives (mio, tuo, suo, sua)",
          scene_zh: "第 6 天 – 所有格形容詞（我的 / 你的 / 他的 / 她的）",
          dialogue: [
            { speaker: "Male", text: "Di chi è questa borsa?", en: "Whose bag is this?", zh: "這是誰的包包？" },
            { speaker: "Female", text: "È la mia borsa.", en: "It’s my bag.", zh: "這是我的包包。" },
            { speaker: "Male", text: "E questo telefono è tuo?", en: "And is this phone yours?", zh: "這支手機是你的嗎？" },
            { speaker: "Female", text: "Sì, è il mio telefono.", en: "Yes, it’s my phone.", zh: "是的，這是我的手機。" },
            { speaker: "Male", text: "Guarda, quella è la sua macchina.", en: "Look, that’s his car.", zh: "看，那是他的車。" },
            { speaker: "Female", text: "E questa è la sua valigia.", en: "And this is her suitcase.", zh: "而這是她的行李箱。" },
            { speaker: "Male", text: "Il suo orologio è molto bello.", en: "His watch is very nice.", zh: "他的手錶很好看。" },
            { speaker: "Female", text: "La sua giacca è elegante.", en: "Her jacket is elegant.", zh: "她的外套很優雅。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Possessive Adjectives (nostro, vostro, loro)",
          scene_zh: "第 7 天 – 所有格形容詞（我們的 / 你們的 / 他們的）",
          dialogue: [
            { speaker: "Male", text: "Questo è il nostro caffè.", en: "This is our coffee.", zh: "這是我們的咖啡。" },
            { speaker: "Female", text: "E questo è il vostro tè.", en: "And this is your tea.", zh: "而這是你們的茶。" },
            { speaker: "Male", text: "Il nostro tavolo è vicino alla finestra.", en: "Our table is near the window.", zh: "我們的桌子在窗邊。" },
            { speaker: "Female", text: "Il vostro tavolo è in giardino.", en: "Your table is in the garden.", zh: "你們的桌子在花園裡。" },
            { speaker: "Male", text: "I loro biglietti sono qui.", en: "Their tickets are here.", zh: "他們的票在這裡。" },
            { speaker: "Female", text: "La loro valigia è grande.", en: "Their suitcase is big.", zh: "他們的行李箱很大。" },
            { speaker: "Male", text: "Il loro amico è simpatico.", en: "Their friend is nice.", zh: "他們的朋友很友善。" },
            { speaker: "Female", text: "La loro macchina è nuova.", en: "Their car is new.", zh: "他們的車是新的。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Mix & Review: Pronouns + Possessives",
          scene_zh: "第 8 天 – 綜合複習：代詞與所有格",
          dialogue: [
            { speaker: "Male", text: "Ripetiamo! Io sono Marco. Tu sei Anna.", en: "Let’s review! I am Marco. You are Anna.", zh: "我們來複習！我是馬可。你是安娜。" },
            { speaker: "Female", text: "Lui è Paolo. Lei è Maria.", en: "He is Paolo. She is Maria.", zh: "他是保羅。她是瑪麗亞。" },
            { speaker: "Male", text: "Noi siamo amici.", en: "We are friends.", zh: "我們是朋友。" },
            { speaker: "Female", text: "Voi siete studenti.", en: "You all are students.", zh: "你們是學生。" },
            { speaker: "Male", text: "Loro sono turisti.", en: "They are tourists.", zh: "他們是遊客。" },
            { speaker: "Female", text: "Questo è il mio telefono.", en: "This is my phone.", zh: "這是我的手機。" },
            { speaker: "Male", text: "Quella è la tua valigia.", en: "That is your suitcase.", zh: "那是你的行李箱。" },
            { speaker: "Female", text: "La loro macchina è nuova.", en: "Their car is new.", zh: "他們的車是新的。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Talking about Plans",
          scene_zh: "第 9 天 – 談論計畫",
          dialogue: [
            { speaker: "Female", text: "Ciao! Noi andiamo al parco.", en: "Hi! We are going to the park.", zh: "嗨！我們要去公園。" },
            { speaker: "Male", text: "Noi andiamo al ristorante.", en: "We are going to the restaurant.", zh: "我們要去餐廳。" },
            { speaker: "Female", text: "Loro vanno al cinema.", en: "They are going to the cinema.", zh: "他們要去電影院。" },
            { speaker: "Male", text: "Perfetto. La mia macchina è pronta.", en: "Perfect. My car is ready.", zh: "太好了。我的車準備好了。" },
            { speaker: "Female", text: "Il tuo biglietto è qui.", en: "Your ticket is here.", zh: "你的票在這裡。" },
            { speaker: "Male", text: "Il suo zaino è pesante.", en: "His backpack is heavy.", zh: "他的背包很重。" },
            { speaker: "Female", text: "La sua borsa è leggera.", en: "Her bag is light.", zh: "她的包包很輕。" },
            { speaker: "Male", text: "Va bene! Allora ci vediamo domani.", en: "Alright! Then see you tomorrow.", zh: "好！那我們明天見。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Final Mix & Review (Travel Talk)",
          scene_zh: "第 10 天 – 最終綜合複習（旅行對話）",
          dialogue: [
            { speaker: "Male", text: "Siamo a Roma! La nostra vacanza inizia oggi.", en: "We are in Rome! Our vacation starts today.", zh: "我們在羅馬！我們的假期今天開始。" },
            { speaker: "Female", text: "Fantastico! Il mio biglietto è qui, il tuo è pronto?", en: "Fantastic! My ticket is here, is yours ready?", zh: "太棒了！我的票在這裡，你的準備好了嗎？" },
            { speaker: "Male", text: "Sì, il mio è pronto. E la sua valigia è grande!", en: "Yes, mine is ready. And his suitcase is big!", zh: "是的，我的準備好了。而他的行李箱很大！" },
            { speaker: "Female", text: "La sua borsa invece è piccola.", en: "Her bag instead is small.", zh: "而她的包包卻很小。" },
            { speaker: "Male", text: "Loro sono già al treno.", en: "They are already at the train.", zh: "他們已經在火車那裡了。" },
            { speaker: "Female", text: "Perfetto, noi siamo quasi pronti.", en: "Perfect, we are almost ready.", zh: "太好了，我們快準備好了。" },
            { speaker: "Male", text: "Voi siete emozionati per il viaggio?", en: "Are you all excited for the trip?", zh: "你們對這趟旅行興奮嗎？" },
            { speaker: "Female", text: "Sì, siamo tutti felici!", en: "Yes, we are all happy!", zh: "是的，我們都很開心！" }
          ]
        }
      ]
    }
  ]
};
