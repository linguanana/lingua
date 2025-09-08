const episodeData = {
  ep_title: "ep",
  episodeId: 3,
  episode: "🇮🇹 Episode – Starter 03: Italian Question Words",
  episode_zh: "🇮🇹 特別篇 - 入門 03：疑問詞與問句",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "❓ Everyday Mix – Common Question Practice",
      topic_zh: "❓ 日常混合練習 – 常見問句",
      scenes: [
        // Day 1 – Chi, Come, Dove
        {
          sceneId: 1,
          scene: "Day 1 – Meeting a new friend",
          scene_zh: "第 1 天 – 認識新朋友 – 怎麼樣、誰、哪裡、多久",
          dialogue: [
            { speaker: "Male", text: "Ciao! Come stai?", en: "Hi! How are you?", zh: "嗨！你怎麼樣？" },
            { speaker: "Female", text: "Bene, grazie. E tu?", en: "Fine, thanks. And you?", zh: "很好，謝謝。你呢？" },
            { speaker: "Male", text: "Anch’io bene. Chi è con te?", en: "I’m good too. Who is with you?", zh: "我也不錯。跟你在一起的是誰？" },
            { speaker: "Female", text: "È mia sorella, si chiama Anna.", en: "It’s my sister, her name is Anna.", zh: "她是我妹妹，叫 Anna。" },
            { speaker: "Male", text: "Piacere! Dove abita lei?", en: "Nice to meet her! Where does she live?", zh: "幸會！她住在哪裡？" },
            { speaker: "Female", text: "Abita a Milano, vicino al centro.", en: "She lives in Milan, near the center.", zh: "她住在米蘭市中心附近。" },
            { speaker: "Male", text: "Davvero? E tu di dove sei?", en: "Really? And where are you from?", zh: "真的嗎？那你是從哪裡來的？" },
            { speaker: "Female", text: "Io sono di Firenze, ma adesso vivo a Roma.", en: "I’m from Florence, but now I live in Rome.", zh: "我來自佛羅倫斯，但現在住在羅馬。" },
            { speaker: "Male", text: "Interessante! Da quanto tempo vivi a Roma?", en: "Interesting! How long have you lived in Rome?", zh: "有趣！你在羅馬住多久了？" },
            { speaker: "Female", text: "Da due anni.", en: "For two years.", zh: "兩年了。" },
            { speaker: "Male", text: "Capisco. Allora magari ci vediamo ancora!", en: "I see. Then maybe we’ll see each other again!", zh: "我明白了。那我們或許還會再見！" },
            { speaker: "Female", text: "Certo, a presto!", en: "Of course, see you soon!", zh: "當然，回頭見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – At a café",
          scene_zh: "第 2 天 – 在咖啡館 – 什麼、為什麼、多少、哪一個、什麼時候",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Cosa prendi oggi?", en: "Good morning! What are you having today?", zh: "早安！你今天要喝什麼？" },
            { speaker: "Male", text: "Prendo un cappuccino. E tu?", en: "I’ll have a cappuccino. And you?", zh: "我要一杯卡布奇諾。你呢？" },
            { speaker: "Female", text: "Io prendo un tè verde.", en: "I’ll have a green tea.", zh: "我要一杯綠茶。" },
            { speaker: "Male", text: "Perché non prendi il caffè oggi?", en: "Why aren’t you having coffee today?", zh: "你今天怎麼不喝咖啡？" },
            { speaker: "Female", text: "Perché sono un po’ stanca.", en: "Because I’m a bit tired.", zh: "因為我有點累。" },
            { speaker: "Male", text: "Capisco. Quanto costa il cappuccino qui?", en: "I see. How much does the cappuccino cost here?", zh: "我懂。這裡的卡布奇諾多少錢？" },
            { speaker: "Female", text: "Costa due euro e cinquanta.", en: "It costs two euros and fifty.", zh: "要兩歐五。" },
            { speaker: "Male", text: "Non è caro. Quale bar preferisci di solito?", en: "That’s not expensive. Which café do you usually prefer?", zh: "不貴啊。你平常喜歡哪一家咖啡館？" },
            { speaker: "Female", text: "Mi piace questo bar perché è tranquillo.", en: "I like this café because it’s quiet.", zh: "我喜歡這家，因為很安靜。" },
            { speaker: "Male", text: "Ottimo. Allora ci vediamo qui domani?", en: "Great. So shall we meet here tomorrow?", zh: "太好了。那我們明天在這裡見？" },
            { speaker: "Female", text: "Sì, domani mattina alle dieci.", en: "Yes, tomorrow morning at ten.", zh: "對，明天早上十點。" },
            { speaker: "Male", text: "Perfetto, a domani!", en: "Perfect, see you tomorrow!", zh: "太好了，明天見！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Travel plans",
          scene_zh: "第 3 天 – 旅行計劃 – 什麼時候、哪一個、哪裡、多久、為什麼",
          dialogue: [
            { speaker: "Male", text: "Quando parti per Firenze?", en: "When are you leaving for Florence?", zh: "你什麼時候出發去佛羅倫斯？" },
            { speaker: "Female", text: "Parto domani mattina presto.", en: "I’m leaving tomorrow morning early.", zh: "我明天一大早出發。" },
            { speaker: "Male", text: "Davvero? Quale treno prendi?", en: "Really? Which train are you taking?", zh: "真的嗎？你搭哪一班火車？" },
            { speaker: "Female", text: "Prendo il treno delle otto e mezza.", en: "I’m taking the eight-thirty train.", zh: "我要搭八點半的火車。" },
            { speaker: "Male", text: "E dove ti siedi di solito? Vicino al finestrino?", en: "And where do you usually sit? By the window?", zh: "你通常坐哪裡？靠窗嗎？" },
            { speaker: "Female", text: "Sì, preferisco il finestrino.", en: "Yes, I prefer the window seat.", zh: "是的，我喜歡靠窗的位置。" },
            { speaker: "Male", text: "Quanto dura il viaggio?", en: "How long is the trip?", zh: "旅程多久？" },
            { speaker: "Female", text: "Circa un’ora e mezza.", en: "About an hour and a half.", zh: "大概一個半小時。" },
            { speaker: "Male", text: "Perché vai a Firenze?", en: "Why are you going to Florence?", zh: "你為什麼要去佛羅倫斯？" },
            { speaker: "Female", text: "Perché voglio visitare un’amica.", en: "Because I want to visit a friend.", zh: "因為我要去看一個朋友。" },
            { speaker: "Male", text: "Che bello! Allora buon viaggio.", en: "That’s nice! Have a good trip.", zh: "真好啊！祝你旅途愉快。" },
            { speaker: "Female", text: "Grazie mille! Ci sentiamo presto.", en: "Thanks a lot! Talk to you soon.", zh: "非常感謝！回頭再聊。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Talking about nationality",
          scene_zh: "第 4 天 – 談國籍 – 哪裡、哪個",
          dialogue: [
            { speaker: "Male", text: "Ciao! Di dove sei?", en: "Hi! Where are you from?", zh: "嗨！你是哪裡人？" },
            { speaker: "Female", text: "Sono di Parigi. E tu?", en: "I’m from Paris. And you?", zh: "我來自巴黎。你呢？" },
            { speaker: "Male", text: "Io sono di Roma.", en: "I’m from Rome.", zh: "我來自羅馬。" },
            { speaker: "Female", text: "Interessante! Qual è la tua nazionalità?", en: "Interesting! What’s your nationality?", zh: "有趣！你的國籍是什麼？" },
            { speaker: "Male", text: "Sono italiano. E tu, sei francese?", en: "I’m Italian. And you, are you French?", zh: "我是義大利人。你是法國人嗎？" },
            { speaker: "Female", text: "Sì, sono francese.", en: "Yes, I’m French.", zh: "是的，我是法國人。" },
            { speaker: "Male", text: "Conosci anche altre lingue?", en: "Do you also know other languages?", zh: "你還會其他語言嗎？" },
            { speaker: "Female", text: "Sì, parlo anche inglese e un po’ di spagnolo.", en: "Yes, I also speak English and a bit of Spanish.", zh: "會，我還會英語和一點西班牙語。" },
            { speaker: "Male", text: "Bravissima! Io parlo solo italiano.", en: "Very good! I only speak Italian.", zh: "太棒了！我只會義大利語。" },
            { speaker: "Female", text: "Non c’è problema, possiamo praticare insieme.", en: "No problem, we can practice together.", zh: "沒問題，我們可以一起練習。" },
            { speaker: "Male", text: "Ottima idea. A domani!", en: "Great idea. See you tomorrow!", zh: "好主意。明天見！" },
            { speaker: "Female", text: "A domani, ciao!", en: "See you tomorrow, bye!", zh: "明天見，再見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Asking for directions",
          scene_zh: "第 5 天 – 問路 – 哪裡、哪個、多久",
          dialogue: [
            { speaker: "Male", text: "Scusi, dov’è la stazione?", en: "Excuse me, where is the station?", zh: "請問，火車站在哪裡？" },
            { speaker: "Female", text: "È vicino, a dieci minuti a piedi.", en: "It’s close, about ten minutes on foot.", zh: "很近，走路大約十分鐘。" },
            { speaker: "Male", text: "Perfetto. Quale strada devo prendere?", en: "Perfect. Which street should I take?", zh: "太好了。我應該走哪一條路？" },
            { speaker: "Female", text: "Prenda via Garibaldi, poi giri a sinistra.", en: "Take Garibaldi street, then turn left.", zh: "走加里波第街，然後左轉。" },
            { speaker: "Male", text: "Grazie mille. E il museo, dov’è esattamente?", en: "Thank you very much. And the museum, where exactly is it?", zh: "非常感謝。那博物館在哪裡？" },
            { speaker: "Female", text: "È accanto alla stazione.", en: "It’s next to the station.", zh: "就在火車站旁邊。" },
            { speaker: "Male", text: "Ottimo. Quanto tempo ci vuole in autobus?", en: "Great. How long does it take by bus?", zh: "太棒了。坐公車要多久？" },
            { speaker: "Female", text: "Solo cinque minuti.", en: "Only five minutes.", zh: "只要五分鐘。" },
            { speaker: "Male", text: "Perfetto. Quale autobus devo prendere?", en: "Perfect. Which bus should I take?", zh: "太好了。我應該搭哪一路公車？" },
            { speaker: "Female", text: "Il numero 12.", en: "Bus number 12.", zh: "12 號公車。" },
            { speaker: "Male", text: "Grazie ancora, è molto gentile.", en: "Thanks again, you’re very kind.", zh: "再次感謝，您真好。" },
            { speaker: "Female", text: "Di niente, buona giornata!", en: "You’re welcome, have a good day!", zh: "不客氣，祝您有美好的一天！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – In class with the teacher",
          scene_zh: "第 6 天 – 在課堂上問老師 – 怎麼、什麼、為什麼、哪些、多少時間",
          dialogue: [
            { speaker: "Female", text: "Professore, come si dice ‘apple’ in italiano?", en: "Professor, how do you say ‘apple’ in Italian?", zh: "老師，apple 用義大利語怎麼說？" },
            { speaker: "Male", text: "Si dice ‘mela’.", en: "You say ‘mela’.", zh: "說 ‘mela’。" },
            { speaker: "Female", text: "E cosa significa ‘pere’?", en: "And what does ‘pere’ mean?", zh: "那 ‘pere’ 是什麼意思？" },
            { speaker: "Male", text: "Significa ‘pears’.", en: "It means pears.", zh: "意思是梨子。" },
            { speaker: "Female", text: "Grazie! Perché ‘mela’ è femminile?", en: "Thanks! Why is ‘mela’ feminine?", zh: "謝謝！為什麼 ‘mela’ 是陰性？" },
            { speaker: "Male", text: "Perché molte parole che finiscono con -a sono femminili.", en: "Because many words ending with -a are feminine.", zh: "因為很多以 -a 結尾的字是陰性。" },
            { speaker: "Female", text: "Capisco. Quali altre parole sono femminili?", en: "I see. Which other words are feminine?", zh: "我明白了。還有哪些字是陰性？" },
            { speaker: "Male", text: "Ad esempio: casa, porta, strada.", en: "For example: house, door, street.", zh: "例如：家、門、街。" },
            { speaker: "Female", text: "E quanto tempo serve per imparare bene l’italiano?", en: "And how much time is needed to learn Italian well?", zh: "那學好義大利語需要多少時間？" },
            { speaker: "Male", text: "Dipende! Ma con pratica ogni giorno, pochi mesi.", en: "It depends! But with daily practice, a few months.", zh: "看情況！不過每天練習的話，幾個月。" },
            { speaker: "Female", text: "Perfetto, allora continuo a studiare!", en: "Perfect, then I’ll keep studying!", zh: "太好了，那我會繼續學習！" },
            { speaker: "Male", text: "Brava! Ci vediamo domani.", en: "Good! See you tomorrow.", zh: "很好！明天見。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – At the train station",
          scene_zh: "第 7 天 – 在火車站買票 – 什麼時候、哪一個、多久、幾點",
          dialogue: [
            { speaker: "Male", text: "Buongiorno! Vorrei un biglietto per Napoli.", en: "Good morning! I’d like a ticket to Naples.", zh: "早安！我要一張去拿坡里的票。" },
            { speaker: "Female", text: "Quando vuole partire?", en: "When do you want to leave?", zh: "您想什麼時候出發？" },
            { speaker: "Male", text: "Parto oggi pomeriggio.", en: "I’m leaving this afternoon.", zh: "今天下午出發。" },
            { speaker: "Female", text: "Quale treno preferisce, l’alta velocità o il regionale?", en: "Which train do you prefer, the high-speed or the regional?", zh: "您要哪一班火車，高速還是區間？" },
            { speaker: "Male", text: "Preferisco l’alta velocità.", en: "I prefer the high-speed train.", zh: "我想要高速火車。" },
            { speaker: "Female", text: "Benissimo. Costa quaranta euro.", en: "Very good. It costs forty euros.", zh: "好的。要四十歐元。" },
            { speaker: "Male", text: "Quanto dura il viaggio?", en: "How long does the trip take?", zh: "旅程要多久？" },
            { speaker: "Female", text: "Circa un’ora e dieci minuti.", en: "About one hour and ten minutes.", zh: "大約一個小時十分鐘。" },
            { speaker: "Male", text: "Perfetto. A che ora parte il prossimo treno?", en: "Perfect. What time does the next train leave?", zh: "太好了。下一班火車幾點出發？" },
            { speaker: "Female", text: "Alle due e mezza.", en: "At two-thirty.", zh: "下午兩點半。" },
            { speaker: "Male", text: "Grazie mille, allora prendo questo.", en: "Thank you very much, then I’ll take this one.", zh: "非常感謝，那我就買這一班。" },
            { speaker: "Female", text: "Prego, buon viaggio!", en: "You’re welcome, have a good trip!", zh: "不客氣，祝您旅途愉快！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Visiting a friend’s home",
          scene_zh: "第 8 天 – 拜訪朋友的家 – 多大、誰、什麼、哪裡",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che bella casa hai!", en: "Hi! What a beautiful house you have!", zh: "嗨！你的房子好漂亮！" },
            { speaker: "Male", text: "Grazie! Vuoi vedere il giardino?", en: "Thanks! Do you want to see the garden?", zh: "謝謝！你要看看花園嗎？" },
            { speaker: "Female", text: "Volentieri. Quanto è grande la casa?", en: "Gladly. How big is the house?", zh: "好啊。房子有多大？" },
            { speaker: "Male", text: "Ha tre stanze e una cucina grande.", en: "It has three rooms and a big kitchen.", zh: "有三個房間和一個大廚房。" },
            { speaker: "Female", text: "Chi vive qui con te?", en: "Who lives here with you?", zh: "誰和你一起住？" },
            { speaker: "Male", text: "Vivo con due coinquilini.", en: "I live with two roommates.", zh: "我和兩個室友一起住。" },
            { speaker: "Female", text: "Che lavoro fanno loro?", en: "What work do they do?", zh: "他們做什麼工作？" },
            { speaker: "Male", text: "Uno è studente, l’altro lavora in un ufficio.", en: "One is a student, the other works in an office.", zh: "一個是學生，另一個在辦公室工作。" },
            { speaker: "Female", text: "Interessante! E dove studia lo studente?", en: "Interesting! And where does the student study?", zh: "有趣！那位學生在哪裡讀書？" },
            { speaker: "Male", text: "Studia all’università di Roma.", en: "He studies at the University of Rome.", zh: "他在羅馬大學讀書。" },
            { speaker: "Female", text: "Capisco. La tua casa è molto accogliente.", en: "I see. Your house is very cozy.", zh: "我明白了。你的家很溫馨。" },
            { speaker: "Male", text: "Grazie, torna a trovarmi presto!", en: "Thanks, come visit me again soon!", zh: "謝謝，快再來玩！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – At the market",
          scene_zh: "第 9 天 – 在市場買東西 – 多少、哪一個",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Quanto costa questo pane?", en: "Good morning! How much does this bread cost?", zh: "早安！這個麵包多少錢？" },
            { speaker: "Male", text: "Costa un euro.", en: "It costs one euro.", zh: "一歐元。" },
            { speaker: "Female", text: "Perfetto, ne prendo due.", en: "Perfect, I’ll take two.", zh: "太好了，我要兩個。" },
            { speaker: "Male", text: "Vuole anche del formaggio?", en: "Do you also want some cheese?", zh: "你要不要也買些起司？" },
            { speaker: "Female", text: "Sì, grazie. Quanto costa al chilo?", en: "Yes, thanks. How much is it per kilo?", zh: "好啊，謝謝。一公斤多少錢？" },
            { speaker: "Male", text: "Otto euro al chilo.", en: "Eight euros per kilo.", zh: "八歐元一公斤。" },
            { speaker: "Female", text: "È un po’ caro. Quale mi consiglia?", en: "That’s a bit expensive. Which one do you recommend?", zh: "有點貴。你推薦哪一個？" },
            { speaker: "Male", text: "Questo è più fresco e costa solo sei euro.", en: "This one is fresher and only costs six euros.", zh: "這個比較新鮮，只要六歐元。" },
            { speaker: "Female", text: "Perfetto, ne prendo mezzo chilo.", en: "Perfect, I’ll take half a kilo.", zh: "太好了，我要半公斤。" },
            { speaker: "Male", text: "Va bene. Qualcos’altro?", en: "Okay. Anything else?", zh: "好的。還要別的嗎？" },
            { speaker: "Female", text: "No, grazie. Quanto pago in totale?", en: "No, thanks. How much do I pay in total?", zh: "不用了，謝謝。我總共要付多少？" },
            { speaker: "Male", text: "Sette euro in tutto.", en: "Seven euros in total.", zh: "總共七歐元。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Talking about family",
          scene_zh: "第 10 天 – 談家人 – 幾歲、哪裡、什麼時候、為什麼、多少",
          dialogue: [
            { speaker: "Male", text: "Ciao! Quanti anni hai?", en: "Hi! How old are you?", zh: "嗨！你幾歲？" },
            { speaker: "Female", text: "Ho vent’anni. E tu?", en: "I’m twenty. And you?", zh: "我二十歲。你呢？" },
            { speaker: "Male", text: "Ho ventidue anni.", en: "I’m twenty-two.", zh: "我二十二歲。" },
            { speaker: "Female", text: "E quanti anni ha tua sorella?", en: "And how old is your sister?", zh: "你妹妹幾歲？" },
            { speaker: "Male", text: "Ha diciotto anni.", en: "She is eighteen.", zh: "她十八歲。" },
            { speaker: "Female", text: "Capisco! Dove studia lei?", en: "I see! Where does she study?", zh: "我懂！她在哪裡讀書？" },
            { speaker: "Male", text: "Studia a Milano, all’università.", en: "She studies in Milan, at the university.", zh: "她在米蘭的大學讀書。" },
            { speaker: "Female", text: "Quando la vedi di solito?", en: "When do you usually see her?", zh: "你通常什麼時候見她？" },
            { speaker: "Male", text: "Ogni fine settimana.", en: "Every weekend.", zh: "每個週末。" },
            { speaker: "Female", text: "Che bello! Perché non vieni un giorno con lei a Roma?", en: "That’s nice! Why don’t you come one day with her to Rome?", zh: "真好！你為什麼不哪天帶她來羅馬？" },
            { speaker: "Male", text: "Ottima idea! Quanto costa il treno Milano–Roma?", en: "Great idea! How much does the Milan–Rome train cost?", zh: "好主意！米蘭到羅馬的火車要多少錢？" },
            { speaker: "Female", text: "Dipende, circa cinquanta euro.", en: "It depends, about fifty euros.", zh: "看情況，大概五十歐元。" }
          ]
        }
      ]
    },
    {
      topicId: 2,
      topic: "❓ Come & Perché – How and Why",
      topic_zh: "❓ Come 與 Perché – 怎麼樣與為什麼",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Greetings – How are you?",
          scene_zh: "第 1 天 – 打招呼 – 你好嗎？",
          dialogue: [
            { speaker: "Male", text: "Ciao, Anna! Come stai?", en: "Hi, Anna! How are you?", zh: "嗨，Anna！你好嗎？" },
            { speaker: "Female", text: "Bene, grazie. E tu, Marco?", en: "Fine, thanks. And you, Marco?", zh: "很好，謝謝。你呢，Marco？" },
            { speaker: "Male", text: "Anch’io bene.", en: "I’m good too.", zh: "我也很好。" },
            { speaker: "Female", text: "Ciao, Luca! Come va?", en: "Hi, Luca! How’s it going?", zh: "嗨，Luca！最近怎樣？" },
            { speaker: "Male", text: "Va bene, grazie. E tu?", en: "It’s going well, thanks. And you?", zh: "不錯，謝謝。你呢？" },
            { speaker: "Female", text: "Non c’è male.", en: "Not bad.", zh: "還行。" },
            { speaker: "Male", text: "Perfetto, ci vediamo stasera?", en: "Perfect, see you tonight?", zh: "太好了，今晚見？" },
            { speaker: "Female", text: "Sì, a dopo!", en: "Yes, see you later!", zh: "是的，待會見！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Names – What’s your name?",
          scene_zh: "第 2 天 – 問名字 – 你叫什麼名字？",
          dialogue: [
            { speaker: "Female", text: "Ciao! Come ti chiami?", en: "Hi! What’s your name?", zh: "嗨！你叫什麼名字？" },
            { speaker: "Male", text: "Mi chiamo Paolo. E tu?", en: "My name is Paolo. And you?", zh: "我叫 Paolo。你呢？" },
            { speaker: "Female", text: "Mi chiamo Giulia.", en: "My name is Giulia.", zh: "我叫 Giulia。" },
            { speaker: "Male", text: "Piacere di conoscerti, Giulia.", en: "Nice to meet you, Giulia.", zh: "幸會，Giulia。" },
            { speaker: "Female", text: "Il piacere è mio.", en: "The pleasure is mine.", zh: "我也很高興認識你。" },
            { speaker: "Male", text: "Come si chiama il tuo amico?", en: "What’s your friend’s name?", zh: "你的朋友叫什麼名字？" },
            { speaker: "Female", text: "Si chiama Luca.", en: "His name is Luca.", zh: "他叫 Luca。" },
            { speaker: "Male", text: "Perfetto! Allora a presto.", en: "Perfect! See you soon.", zh: "太好了！回頭見。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – In class – How do you say…?",
          scene_zh: "第 3 天 – 在課堂上 – 怎麼說…？",
          dialogue: [
            { speaker: "Female", text: "Professore, come si dice ‘apple’ in italiano?", en: "Professor, how do you say ‘apple’ in Italian?", zh: "老師，apple 用義大利語怎麼說？" },
            { speaker: "Male", text: "Si dice ‘mela’.", en: "You say ‘mela’.", zh: "說 ‘mela’。" },
            { speaker: "Female", text: "E come si dice ‘pear’?", en: "And how do you say ‘pear’?", zh: "那 pear 怎麼說？" },
            { speaker: "Male", text: "Si dice ‘pera’.", en: "You say ‘pera’.", zh: "說 ‘pera’。" },
            { speaker: "Female", text: "Perfetto, grazie!", en: "Perfect, thank you!", zh: "太好了，謝謝！" },
            { speaker: "Male", text: "Prego. Vuoi un altro esempio?", en: "You’re welcome. Do you want another example?", zh: "不客氣。你要不要再來一個例子？" },
            { speaker: "Female", text: "Sì, come si dice ‘banana’?", en: "Yes, how do you say ‘banana’?", zh: "好，那 banana 怎麼說？" },
            { speaker: "Male", text: "Si dice ‘banana’. Facile!", en: "You say ‘banana’. Easy!", zh: "說 ‘banana’。很簡單！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Describing things – How is it?",
          scene_zh: "第 4 天 – 形容東西 – 它怎麼樣？",
          dialogue: [
            { speaker: "Male", text: "Com’è la pizza qui?", en: "How is the pizza here?", zh: "這裡的披薩怎麼樣？" },
            { speaker: "Female", text: "È buonissima!", en: "It’s really good!", zh: "非常好吃！" },
            { speaker: "Male", text: "Com’è il tuo professore?", en: "How is your professor?", zh: "你的老師怎麼樣？" },
            { speaker: "Female", text: "È simpatico e gentile.", en: "He’s nice and kind.", zh: "他很親切、很友善。" },
            { speaker: "Male", text: "Com’è la tua città?", en: "How is your city?", zh: "你的城市怎麼樣？" },
            { speaker: "Female", text: "È grande e bellissima.", en: "It’s big and beautiful.", zh: "很大、很漂亮。" },
            { speaker: "Male", text: "Perfetto. Com’è la vita lì?", en: "Perfect. How is life there?", zh: "太好了。在那裡的生活怎麼樣？" },
            { speaker: "Female", text: "Tranquilla ma interessante.", en: "Quiet but interesting.", zh: "安靜但有趣。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Asking reasons – How come?",
          scene_zh: "第 5 天 – 問原因 – 怎麼會？",
          dialogue: [
            { speaker: "Female", text: "Ciao Marco! Come mai sei qui?", en: "Hi Marco! How come you are here?", zh: "嗨，Marco！你怎麼會在這裡？" },
            { speaker: "Male", text: "Sono venuto a trovarti.", en: "I came to visit you.", zh: "我來看你。" },
            { speaker: "Female", text: "Davvero? Che sorpresa!", en: "Really? What a surprise!", zh: "真的嗎？太驚喜了！" },
            { speaker: "Male", text: "Come mai non sei a scuola oggi?", en: "How come you’re not at school today?", zh: "你今天怎麼沒去上課？" },
            { speaker: "Female", text: "Perché è domenica!", en: "Because it’s Sunday!", zh: "因為今天星期天！" },
            { speaker: "Male", text: "Ah, giusto. E come mai sei così felice?", en: "Ah, right. And how come you’re so happy?", zh: "啊，對喔。你怎麼這麼開心？" },
            { speaker: "Female", text: "Perché domani vado in vacanza.", en: "Because tomorrow I’m going on vacation.", zh: "因為明天要去度假。" },
            { speaker: "Male", text: "Fantastico! Buone vacanze!", en: "Fantastic! Have a great holiday!", zh: "太棒了！祝你假期愉快！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – At school – Why aren’t you here?",
          scene_zh: "第 6 天 – 在學校 – 為什麼沒來？",
          dialogue: [
            { speaker: "Male", text: "Ciao, Maria! Non sei a scuola oggi?", en: "Hi, Maria! You’re not at school today?", zh: "嗨，Maria！你今天沒去學校？" },
            { speaker: "Female", text: "No, perché sono malata.", en: "No, because I’m sick.", zh: "沒有，因為我生病了。" },
            { speaker: "Male", text: "Oh no! Perché non vai dal dottore?", en: "Oh no! Why don’t you go to the doctor?", zh: "喔，不！你為什麼不去看醫生？" },
            { speaker: "Female", text: "Perché non è grave.", en: "Because it’s not serious.", zh: "因為不嚴重。" },
            { speaker: "Male", text: "Capisco. Vuoi un tè caldo?", en: "I see. Do you want a hot tea?", zh: "我懂。要不要來杯熱茶？" },
            { speaker: "Female", text: "Sì, grazie mille.", en: "Yes, thank you very much.", zh: "好啊，非常感謝。" },
            { speaker: "Male", text: "E perché non chiami i tuoi genitori?", en: "And why don’t you call your parents?", zh: "你為什麼不打給你爸媽？" },
            { speaker: "Female", text: "Perché vivono lontano.", en: "Because they live far away.", zh: "因為他們住很遠。" },
            { speaker: "Male", text: "Va bene. Riposati!", en: "Alright. Rest well!", zh: "好吧。好好休息！" },
            { speaker: "Female", text: "Grazie, sei gentile.", en: "Thanks, you’re kind.", zh: "謝謝，你人真好。" },
            { speaker: "Male", text: "Ci vediamo domani?", en: "See you tomorrow?", zh: "明天見？" },
            { speaker: "Female", text: "Spero di sì!", en: "I hope so!", zh: "希望可以！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Talking about languages – Why Italian?",
          scene_zh: "第 7 天 – 談語言 – 為什麼學義大利語？",
          dialogue: [
            { speaker: "Female", text: "Perché studi l’italiano?", en: "Why are you studying Italian?", zh: "你為什麼學義大利語？" },
            { speaker: "Male", text: "Perché amo la cultura italiana.", en: "Because I love Italian culture.", zh: "因為我喜歡義大利文化。" },
            { speaker: "Female", text: "Interessante! E perché non studi il francese?", en: "Interesting! And why don’t you study French?", zh: "有趣！那你為什麼不學法語？" },
            { speaker: "Male", text: "Perché il francese è più difficile per me.", en: "Because French is more difficult for me.", zh: "因為法語對我來說比較難。" },
            { speaker: "Female", text: "Capisco. Perché ti piace Roma?", en: "I see. Why do you like Rome?", zh: "我懂。你為什麼喜歡羅馬？" },
            { speaker: "Male", text: "Perché è una città bellissima.", en: "Because it’s a beautiful city.", zh: "因為它是一個很美的城市。" },
            { speaker: "Female", text: "Bravo! E perché sei qui oggi?", en: "Great! And why are you here today?", zh: "太棒了！那你今天為什麼在這裡？" },
            { speaker: "Male", text: "Per seguire il corso.", en: "To attend the course.", zh: "為了上課。" },
            { speaker: "Female", text: "Perfetto! Allora buon studio.", en: "Perfect! Then happy studying.", zh: "太好了！祝你學習愉快。" },
            { speaker: "Male", text: "Grazie! E tu, perché studi l’italiano?", en: "Thanks! And you, why are you studying Italian?", zh: "謝謝！那你呢，你為什麼學義大利語？" },
            { speaker: "Female", text: "Perché voglio viaggiare in Italia.", en: "Because I want to travel in Italy.", zh: "因為我想去義大利旅行。" },
            { speaker: "Male", text: "Bellissimo motivo!", en: "Beautiful reason!", zh: "很棒的理由！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Making plans – Why not go out?",
          scene_zh: "第 8 天 – 約計畫 – 為什麼不出去？",
          dialogue: [
            { speaker: "Male", text: "Andiamo al cinema stasera?", en: "Shall we go to the cinema tonight?", zh: "今晚去看電影嗎？" },
            { speaker: "Female", text: "No, non posso.", en: "No, I can’t.", zh: "不行，我不能。" },
            { speaker: "Male", text: "Perché no?", en: "Why not?", zh: "為什麼不行？" },
            { speaker: "Female", text: "Perché devo studiare.", en: "Because I have to study.", zh: "因為我要讀書。" },
            { speaker: "Male", text: "Capisco. E domani?", en: "I see. And tomorrow?", zh: "我懂。那明天呢？" },
            { speaker: "Female", text: "Domani lavoro tutto il giorno.", en: "Tomorrow I work all day.", zh: "明天我整天工作。" },
            { speaker: "Male", text: "Allora quando sei libera?", en: "Then when are you free?", zh: "那你什麼時候有空？" },
            { speaker: "Female", text: "Sabato pomeriggio.", en: "Saturday afternoon.", zh: "星期六下午。" },
            { speaker: "Male", text: "Perfetto, cinema sabato?", en: "Perfect, cinema on Saturday?", zh: "太好了，星期六去看電影？" },
            { speaker: "Female", text: "Va bene!", en: "Alright!", zh: "好啊！" },
            { speaker: "Male", text: "Grazie, non vedo l’ora.", en: "Thanks, I can’t wait.", zh: "謝謝，我等不及了。" },
            { speaker: "Female", text: "Anch’io!", en: "Me too!", zh: "我也是！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Talking about food – Why do you like it?",
          scene_zh: "第 9 天 – 談食物 – 為什麼喜歡？",
          dialogue: [
            { speaker: "Female", text: "Ti piace la pasta?", en: "Do you like pasta?", zh: "你喜歡義大利麵嗎？" },
            { speaker: "Male", text: "Sì, moltissimo.", en: "Yes, very much.", zh: "是的，非常喜歡。" },
            { speaker: "Female", text: "Perché ti piace così tanto?", en: "Why do you like it so much?", zh: "你為什麼這麼喜歡？" },
            { speaker: "Male", text: "Perché è semplice e buona.", en: "Because it’s simple and good.", zh: "因為它簡單又好吃。" },
            { speaker: "Female", text: "Ti piace anche la pizza?", en: "Do you also like pizza?", zh: "你也喜歡披薩嗎？" },
            { speaker: "Male", text: "Certo!", en: "Of course!", zh: "當然！" },
            { speaker: "Female", text: "E perché la pizza?", en: "And why pizza?", zh: "那為什麼是披薩？" },
            { speaker: "Male", text: "Perché è famosa in tutto il mondo.", en: "Because it’s famous all over the world.", zh: "因為它舉世聞名。" },
            { speaker: "Female", text: "Capisco. Perché non ti piace il pesce?", en: "I see. Why don’t you like fish?", zh: "我懂。那你為什麼不喜歡魚？" },
            { speaker: "Male", text: "Perché ha un odore forte.", en: "Because it has a strong smell.", zh: "因為味道太重。" },
            { speaker: "Female", text: "Ah, interessante.", en: "Ah, interesting.", zh: "啊，有趣。" },
            { speaker: "Male", text: "Sì, ognuno ha i suoi gusti.", en: "Yes, everyone has their own tastes.", zh: "是啊，每個人都有自己的口味。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 10 – Traveling – Why the trip?",
          scene_zh: "第 10 天 – 旅行 – 為什麼旅行？",
          dialogue: [
            { speaker: "Male", text: "Parti domani?", en: "Are you leaving tomorrow?", zh: "你明天要出發嗎？" },
            { speaker: "Female", text: "Sì, vado a Firenze.", en: "Yes, I’m going to Florence.", zh: "是的，我要去佛羅倫斯。" },
            { speaker: "Male", text: "Perché vai a Firenze?", en: "Why are you going to Florence?", zh: "你為什麼去佛羅倫斯？" },
            { speaker: "Female", text: "Perché ho un convegno.", en: "Because I have a conference.", zh: "因為我要參加一個研討會。" },
            { speaker: "Male", text: "E poi?", en: "And then?", zh: "然後呢？" },
            { speaker: "Female", text: "Poi visito gli Uffizi.", en: "Then I’ll visit the Uffizi.", zh: "然後我會去烏菲茲美術館。" },
            { speaker: "Male", text: "Perfetto. Perché non vai anche a Pisa?", en: "Perfect. Why don’t you also go to Pisa?", zh: "太棒了。你為什麼不順便去比薩？" },
            { speaker: "Female", text: "Perché non ho tempo.", en: "Because I don’t have time.", zh: "因為我沒有時間。" },
            { speaker: "Male", text: "Capisco. Perché non rimandi il viaggio?", en: "I see. Why don’t you postpone the trip?", zh: "我懂。你為什麼不延期？" },
            { speaker: "Female", text: "Perché devo lavorare la prossima settimana.", en: "Because I have to work next week.", zh: "因為我下週要上班。" },
            { speaker: "Male", text: "Allora buon viaggio!", en: "Then have a good trip!", zh: "那祝你旅途愉快！" },
            { speaker: "Female", text: "Grazie, a presto!", en: "Thanks, see you soon!", zh: "謝謝，回頭見！" }
          ]
        }
      ]
    },
    {
      topicId: 3,
      topic: "❓ Cosa & Quale – What and Which",
      topic_zh: "❓ Cosa 與 Quale – 什麼與哪一個",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – What is this? (Che cos’è?)",
          scene_zh: "第 1 天 – 這是什麼？ (Che cos’è?)",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che cos’è questo?", en: "Hi! What is this?", zh: "嗨！這是什麼？" },
            { speaker: "Male", text: "È un libro.", en: "It’s a book.", zh: "這是一本書。" },
            { speaker: "Female", text: "E quello? Che cos’è quello?", en: "And that? What is that?", zh: "那那個呢？那是什麼？" },
            { speaker: "Male", text: "È un quaderno.", en: "It’s a notebook.", zh: "那是一本筆記本。" },
            { speaker: "Female", text: "Che cos’è sul tavolo?", en: "What is on the table?", zh: "桌上的是什麼？" },
            { speaker: "Male", text: "È un telefono.", en: "It’s a phone.", zh: "那是一支手機。" },
            { speaker: "Female", text: "Interessante! E nella borsa, che cos’è?", en: "Interesting! And in the bag, what is it?", zh: "有趣！那包包裡是什麼？" },
            { speaker: "Male", text: "È una bottiglia d’acqua.", en: "It’s a bottle of water.", zh: "是一瓶水。" },
            { speaker: "Female", text: "Perfetto. E questo piccolo oggetto, cos’è?", en: "Perfect. And this small object, what is it?", zh: "太好了。這個小東西是什麼？" },
            { speaker: "Male", text: "È una penna.", en: "It’s a pen.", zh: "是一支筆。" },
            { speaker: "Female", text: "Capisco! Tutto chiaro adesso.", en: "I see! Everything is clear now.", zh: "我懂了！現在都清楚了。" },
            { speaker: "Male", text: "Bravo! A domani.", en: "Great! See you tomorrow.", zh: "太棒了！明天見。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – What does it mean? (Cosa significa?)",
          scene_zh: "第 2 天 – 這是什麼意思？(Cosa significa?)",
          dialogue: [
            { speaker: "Female", text: "Ciao! Cosa significa ‘ciao’?", en: "Hi! What does ‘ciao’ mean?", zh: "嗨！『ciao』是什麼意思？" },
            { speaker: "Male", text: "Significa ‘hello’ o ‘hi’.", en: "It means ‘hello’ or ‘hi’.", zh: "意思是『你好』或『嗨』。" },
            { speaker: "Female", text: "Perfetto! E cosa significa ‘grazie’?", en: "Perfect! And what does ‘grazie’ mean?", zh: "太好了！那『grazie』是什麼意思？" },
            { speaker: "Male", text: "Significa ‘thank you’.", en: "It means ‘thank you’.", zh: "意思是『謝謝』。" },
            { speaker: "Female", text: "Benissimo. E ‘prego’ cosa significa?", en: "Great. And what does ‘prego’ mean?", zh: "太棒了。那『prego』是什麼意思？" },
            { speaker: "Male", text: "Vuol dire ‘you’re welcome’.", en: "It means ‘you’re welcome’.", zh: "意思是『不客氣』。" },
            { speaker: "Female", text: "Interessante! E ‘scusa’ cosa vuol dire?", en: "Interesting! And what does ‘scusa’ mean?", zh: "有趣！那『scusa』是什麼意思？" },
            { speaker: "Male", text: "Vuol dire ‘sorry’ o ‘excuse me’.", en: "It means ‘sorry’ or ‘excuse me’.", zh: "意思是『對不起』或『不好意思』。" },
            { speaker: "Female", text: "Capisco. Cosa significa ‘arrivederci’?", en: "I see. What does ‘arrivederci’ mean?", zh: "我懂了。那『arrivederci』是什麼意思？" },
            { speaker: "Male", text: "Vuol dire ‘goodbye’.", en: "It means ‘goodbye’.", zh: "意思是『再見』。" },
            { speaker: "Female", text: "Perfetto, grazie mille!", en: "Perfect, thank you very much!", zh: "太好了，非常感謝！" },
            { speaker: "Male", text: "Prego, a domani!", en: "You’re welcome, see you tomorrow!", zh: "不客氣，明天見！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Cosa fai? (What are you doing?)",
          scene_zh: "第 3 天 – 你在做什麼？",
          dialogue: [
            { speaker: "Male", text: "Ciao! Cosa fai adesso?", en: "Hi! What are you doing now?", zh: "嗨！你現在在做什麼？" },
            { speaker: "Female", text: "Sto bevendo un caffè.", en: "I’m drinking a coffee.", zh: "我在喝咖啡。" },
            { speaker: "Male", text: "Interessante! E cosa fai dopo?", en: "Interesting! And what are you doing after?", zh: "有趣！那你等一下要做什麼？" },
            { speaker: "Female", text: "Vado a studiare in biblioteca.", en: "I’m going to study in the library.", zh: "我要去圖書館念書。" },
            { speaker: "Male", text: "Perfetto. E di solito, cosa fai il fine settimana?", en: "Perfect. And usually, what do you do on weekends?", zh: "太好了。那你平常週末都做什麼？" },
            { speaker: "Female", text: "Esco con gli amici o vado al cinema.", en: "I go out with friends or go to the cinema.", zh: "我會跟朋友出去或去電影院。" },
            { speaker: "Male", text: "Bello! E che lavoro fai?", en: "Nice! And what’s your job?", zh: "不錯！那你的工作是什麼？" },
            { speaker: "Female", text: "Sono studentessa. Studio lingue.", en: "I’m a student. I study languages.", zh: "我是學生，我學語言。" },
            { speaker: "Male", text: "Capisco. Io lavoro in ufficio. Cosa fai tu la sera?", en: "I see. I work in an office. What do you do in the evenings?", zh: "我懂。我在辦公室上班。那你晚上都做什麼？" },
            { speaker: "Female", text: "Di solito leggo o guardo un film.", en: "Usually I read or watch a movie.", zh: "通常我會看書或看電影。" },
            { speaker: "Male", text: "Ottimo! Allora buon divertimento stasera.", en: "Great! Then have fun tonight.", zh: "太棒了！那今晚玩得開心。" },
            { speaker: "Female", text: "Grazie! A domani.", en: "Thanks! See you tomorrow.", zh: "謝謝！明天見。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Cosa vuoi? (What do you want?)",
          scene_zh: "第 4 天 – 你要什麼？（點餐場景）",
          dialogue: [
            { speaker: "Waiter", text: "Buongiorno! Cosa vuoi da bere?", en: "Good morning! What do you want to drink?", zh: "早安！你想喝什麼？" },
            { speaker: "Male", text: "Vorrei un cappuccino.", en: "I’d like a cappuccino.", zh: "我想要一杯卡布奇諾。" },
            { speaker: "Waiter", text: "Perfetto. E tu, cosa vuoi?", en: "Perfect. And you, what do you want?", zh: "太好了。那你呢？你要什麼？" },
            { speaker: "Female", text: "Io prendo un tè al limone.", en: "I’ll have a lemon tea.", zh: "我要一杯檸檬茶。" },
            { speaker: "Waiter", text: "Ottimo. E da mangiare, cosa volete?", en: "Great. And to eat, what do you want?", zh: "很好。那要吃的呢？你們要什麼？" },
            { speaker: "Male", text: "Io voglio un cornetto alla crema.", en: "I want a cream croissant.", zh: "我要一個奶油可頌。" },
            { speaker: "Female", text: "E io voglio una fetta di torta.", en: "And I want a slice of cake.", zh: "我要一片蛋糕。" },
            { speaker: "Waiter", text: "Perfetto. Quale torta preferisci?", en: "Perfect. Which cake do you prefer?", zh: "太好了。你比較喜歡哪一個蛋糕？" },
            { speaker: "Female", text: "La torta al cioccolato, per favore.", en: "The chocolate cake, please.", zh: "我要巧克力蛋糕，謝謝。" },
            { speaker: "Male", text: "Che buono! Anch’io la voglio domani.", en: "So good! I want it too tomorrow.", zh: "真好吃！我明天也要點這個。" },
            { speaker: "Waiter", text: "Va bene. Arriva subito.", en: "Alright. It’s coming right up.", zh: "好的，馬上來。" },
            { speaker: "Female", text: "Grazie mille!", en: "Thanks a lot!", zh: "非常感謝！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Review Mix (Che cos’è / Cosa significa / Cosa fai / Cosa vuoi)",
          scene_zh: "第 5 天 – 複習混合（這是什麼／意思／在做什麼／你要什麼）",
          dialogue: [
            { speaker: "Female", text: "Ciao! Che cos’è questo sul tavolo?", en: "Hi! What is this on the table?", zh: "嗨！桌上的這是什麼？" },
            { speaker: "Male", text: "È un dizionario di italiano.", en: "It’s an Italian dictionary.", zh: "這是一本義大利語字典。" },
            { speaker: "Female", text: "Interessante! Cosa significa ‘ciao’?", en: "Interesting! What does ‘ciao’ mean?", zh: "有趣！『ciao』是什麼意思？" },
            { speaker: "Male", text: "Vuol dire ‘hello’ o ‘hi’.", en: "It means ‘hello’ or ‘hi’.", zh: "意思是『你好』或『嗨』。" },
            { speaker: "Female", text: "Perfetto! E adesso, cosa fai?", en: "Perfect! And now, what are you doing?", zh: "太好了！那你現在在做什麼？" },
            { speaker: "Male", text: "Studio un po’ di grammatica.", en: "I’m studying some grammar.", zh: "我在學一點文法。" },
            { speaker: "Female", text: "Bravo! Dopo cosa fai?", en: "Good! What are you doing after?", zh: "很好！等一下你要做什麼？" },
            { speaker: "Male", text: "Vado al bar. Cosa vuoi da bere?", en: "I’m going to the café. What do you want to drink?", zh: "我要去咖啡館。你想喝什麼？" },
            { speaker: "Female", text: "Voglio un cappuccino.", en: "I want a cappuccino.", zh: "我要一杯卡布奇諾。" },
            { speaker: "Male", text: "Perfetto, allora prendiamo due cappuccini.", en: "Perfect, then let’s get two cappuccinos.", zh: "太好了，那我們就來兩杯卡布奇諾。" },
            { speaker: "Female", text: "Ottima idea! A dopo.", en: "Great idea! See you later.", zh: "好主意！待會見。" },
            { speaker: "Male", text: "A dopo, ciao!", en: "See you later, bye!", zh: "待會見，再見！" }
          ]
        },
        // Day 6 – Choosing desserts & drinks (Qual è / Quale)
        {
          sceneId: 6,
          scene: "Day 6 – Choosing things – Which one? (Qual è / Quale)",
          scene_zh: "第 6 天 – 選甜點與飲料：哪一個？",
          dialogue: [
            { speaker: "Female", text: "Qual è il tuo piatto preferito?", en: "Which is your favorite dish?", zh: "你最喜歡的菜是哪一道？" },
            { speaker: "Male", text: "La pasta alla carbonara.", en: "Pasta carbonara.", zh: "卡邦那拉義大利麵。" },
            { speaker: "Female", text: "E qual è il tuo dolce preferito?", en: "And which is your favorite dessert?", zh: "那你最喜歡的甜點是哪一個？" },
            { speaker: "Male", text: "Il tiramisù.", en: "Tiramisu.", zh: "提拉米蘇。" },
            { speaker: "Female", text: "Qual è il tuo colore preferito?", en: "Which is your favorite color?", zh: "你最喜歡的顏色是哪一個？" },
            { speaker: "Male", text: "Il blu.", en: "Blue.", zh: "藍色。" },
            { speaker: "Female", text: "E quale sport ti piace di più?", en: "And which sport do you like the most?", zh: "那你最喜歡哪一個運動？" },
            { speaker: "Male", text: "Il calcio.", en: "Soccer.", zh: "足球。" },
            { speaker: "Female", text: "Qual è la tua stagione preferita?", en: "Which is your favorite season?", zh: "你最喜歡的季節是哪一個？" },
            { speaker: "Male", text: "L’estate.", en: "Summer.", zh: "夏天。" },
            { speaker: "Female", text: "Perfetto! Abbiamo gusti diversi.", en: "Perfect! We have different tastes.", zh: "太棒了！我們的喜好不一樣。" },
            { speaker: "Male", text: "Sì, ma interessante!", en: "Yes, but interesting!", zh: "是啊，但很有趣！" }
          ]
        },

        // Day 7 – Personal info (Qual è + basics)
        {
          sceneId: 7,
          scene: "Day 7 – Personal info – What’s your…? (Qual è + basics)",
          scene_zh: "第 7 天 – 個人資訊：你的…是什麼？",
          dialogue: [
            { speaker: "Male", text: "Ciao! Qual è il tuo nome?", en: "Hi! What’s your name?", zh: "嗨！你叫什麼名字？" },
            { speaker: "Female", text: "Mi chiamo Anna.", en: "My name is Anna.", zh: "我叫 Anna。" },
            { speaker: "Male", text: "Qual è il tuo cognome?", en: "What’s your surname?", zh: "你的姓氏是什麼？" },
            { speaker: "Female", text: "Bianchi.", en: "Bianchi.", zh: "Bianchi。" },
            { speaker: "Male", text: "Qual è la tua nazionalità?", en: "What’s your nationality?", zh: "你的國籍是什麼？" },
            { speaker: "Female", text: "Sono francese.", en: "I’m French.", zh: "我是法國人。" },
            { speaker: "Male", text: "Qual è il tuo numero di telefono?", en: "What’s your phone number?", zh: "你的電話號碼是多少？" },
            { speaker: "Female", text: "È 345 678 910.", en: "It’s 345 678 910.", zh: "是 345 678 910。" },
            { speaker: "Male", text: "E qual è il tuo indirizzo e-mail?", en: "And what’s your email address?", zh: "那你的電子郵件地址是什麼？" },
            { speaker: "Female", text: "anna.bianchi@example.com.", en: "anna.bianchi@example.com.", zh: "anna.bianchi@example.com。" },
            { speaker: "Male", text: "Perfetto, ti scrivo dopo.", en: "Perfect, I’ll write to you later.", zh: "太好了，我等一下寫信給你。" },
            { speaker: "Female", text: "Va bene, a presto!", en: "Alright, see you soon!", zh: "好的，回頭見！" }
          ]
        },

        // Day 8 – Favorites & choices (Qual è / Quale)
        {
          sceneId: 8,
          scene: "Day 8 – Favorites & choices (Qual è / Quale)",
          scene_zh: "第 8 天 – 喜好與選擇",
          dialogue: [
            { speaker: "Female", text: "Qual è il tuo colore preferito?", en: "Which is your favorite color?", zh: "你最喜歡的顏色是哪一個？" },
            { speaker: "Male", text: "Il blu.", en: "Blue.", zh: "藍色。" },
            { speaker: "Female", text: "Quale sport guardi più spesso?", en: "Which sport do you watch most often?", zh: "你最常看哪一種運動？" },
            { speaker: "Male", text: "Il calcio.", en: "Soccer.", zh: "足球。" },
            { speaker: "Female", text: "Qual è la tua stagione preferita?", en: "Which is your favorite season?", zh: "你最喜歡的季節是哪一個？" },
            { speaker: "Male", text: "L’estate.", en: "Summer.", zh: "夏天。" },
            { speaker: "Female", text: "Quale film vuoi vedere stasera?", en: "Which movie do you want to watch tonight?", zh: "你今晚想看哪一部電影？" },
            { speaker: "Male", text: "Quello nuovo di azione.", en: "The new action one.", zh: "那部新的動作片。" },
            { speaker: "Female", text: "Perfetto! Qual è l’orario migliore?", en: "Perfect! Which time is best?", zh: "太好了！哪個時間最好？" },
            { speaker: "Male", text: "Alle otto e mezza.", en: "At eight-thirty.", zh: "八點半。" },
            { speaker: "Female", text: "Allora prenoto i biglietti.", en: "Then I’ll book the tickets.", zh: "那我來訂票。" },
            { speaker: "Male", text: "Ottimo, grazie!", en: "Great, thanks!", zh: "太棒了，謝謝！" }
          ]
        },
        // Day 9 – Which place/route? (Qual è / Quale + places)
        {
          sceneId: 9,
          scene: "Day 9 – Which place/route? (Qual è / Quale + places)",
          scene_zh: "第 9 天 – 哪個地方／哪條路？",
          dialogue: [
            { speaker: "Male", text: "Qual è il museo più vicino?", en: "Which is the nearest museum?", zh: "最近的博物館是哪一個？" },
            { speaker: "Female", text: "Il Museo Centrale, a dieci minuti.", en: "The Central Museum, ten minutes away.", zh: "中央博物館，走路十分鐘。" },
            { speaker: "Male", text: "Quale autobus devo prendere?", en: "Which bus should I take?", zh: "我應該搭哪一路公車？" },
            { speaker: "Female", text: "Il numero 12.", en: "Number 12.", zh: "12 號。" },
            { speaker: "Male", text: "Qual è la fermata giusta?", en: "Which is the right stop?", zh: "正確的站是哪一站？" },
            { speaker: "Female", text: "Piazza Verdi.", en: "Piazza Verdi.", zh: "維爾第廣場站。" },
            { speaker: "Male", text: "Quale strada è più veloce a piedi?", en: "Which street is faster on foot?", zh: "走路哪條街比較快？" },
            { speaker: "Female", text: "Via Garibaldi, poi a sinistra.", en: "Garibaldi Street, then left.", zh: "加里波第街，然後左轉。" },
            { speaker: "Male", text: "Perfetto, grazie mille.", en: "Perfect, thanks a lot.", zh: "太好了，非常感謝。" },
            { speaker: "Female", text: "Di niente! Buona visita.", en: "You’re welcome! Enjoy the visit.", zh: "不客氣！玩得開心。" },
            { speaker: "Male", text: "A dopo!", en: "See you later!", zh: "待會見！" },
            { speaker: "Female", text: "A presto!", en: "See you soon!", zh: "回頭見！" }
          ]
        },

        // Day 10 – Review: Which…? + quick small talk
        {
          sceneId: 10,
          scene: "Day 10 – Review mix with ‘Which…?’",
          scene_zh: "第 10 天 – 複習混合：Which…？",
          dialogue: [
            { speaker: "Female", text: "Cosa fai stasera?", en: "What are you doing tonight?", zh: "你今晚要做什麼？" },
            { speaker: "Male", text: "Vado fuori a cena.", en: "I’m going out for dinner.", zh: "我要出去吃晚餐。" },
            { speaker: "Female", text: "Qual è il ristorante?", en: "Which restaurant is it?", zh: "是哪一家餐廳？" },
            { speaker: "Male", text: "Una pizzeria in centro.", en: "A pizzeria downtown.", zh: "市中心的一家披薩店。" },
            { speaker: "Female", text: "Quale pizza ordini di solito?", en: "Which pizza do you usually order?", zh: "你平常點哪一種披薩？" },
            { speaker: "Male", text: "Di solito la margherita.", en: "Usually margherita.", zh: "通常是瑪格麗塔。" },
            { speaker: "Female", text: "Qual è l’orario della prenotazione?", en: "Which is the reservation time?", zh: "訂位時間是幾點？" },
            { speaker: "Male", text: "Alle otto.", en: "At eight.", zh: "八點。" },
            { speaker: "Female", text: "Perfetto! Dopo quale gelato prendiamo?", en: "Perfect! After, which gelato shall we get?", zh: "太好了！之後我們要吃哪一種義式冰淇淋？" },
            { speaker: "Male", text: "Pistacchio per me. E per te?", en: "Pistachio for me. And for you?", zh: "我選開心果。你呢？" },
            { speaker: "Female", text: "Cioccolato fondente.", en: "Dark chocolate.", zh: "黑巧克力。" },
            { speaker: "Male", text: "Ottima scelta!", en: "Great choice!", zh: "好選擇！" }
          ]
        }
      ]
    },
    {
      topicId: 4,
      topic: "❓ Quanto & Quanti – How much and How many",
      topic_zh: "❓ Quanto 與 Quanti – 多少錢與多少人／數量",
      scenes: [
        // Day 1（上面已給）——在餐廳
        {
          sceneId: 1,
          scene: "Day 1 – Dinner at a restaurant (quanto, quanti)",
          scene_zh: "第 1 天 – 在餐廳吃晚餐",
          dialogue: [
            { speaker: "Male", text: "Buonasera! Possiamo cenare qui?", en: "Good evening! Can we have dinner here?", zh: "晚上好！我們可以在這裡吃晚餐嗎？" },
            { speaker: "Female", text: "Certo! Quante persone siete?", en: "Of course! How many people are you?", zh: "當然！你們有幾位？" },
            { speaker: "Male", text: "Siamo in tre.", en: "We are three.", zh: "我們有三位。" },
            { speaker: "Female", text: "Perfetto, vi accompagno al tavolo.", en: "Perfect, I’ll take you to the table.", zh: "太好了，我帶你們去座位。" },
            { speaker: "Male", text: "Grazie! Quanto costa il menù fisso?", en: "Thanks! How much is the fixed menu?", zh: "謝謝！套餐多少錢？" },
            { speaker: "Female", text: "Costa venti euro a persona.", en: "It costs twenty euros per person.", zh: "每人二十歐元。" },
            { speaker: "Male", text: "E quante portate include?", en: "And how many courses does it include?", zh: "有幾道菜？" },
            { speaker: "Female", text: "Tre portate: antipasto, primo e dolce.", en: "Three courses: appetizer, main, and dessert.", zh: "三道菜：前菜、主菜和甜點。" },
            { speaker: "Male", text: "Ottimo! Quanto costa una bottiglia di vino?", en: "Great! How much is a bottle of wine?", zh: "太好了！一瓶酒多少錢？" },
            { speaker: "Female", text: "Quindici euro.", en: "Fifteen euros.", zh: "十五歐元。" },
            { speaker: "Male", text: "Perfetto, allora prendiamo tre menù fissi e una bottiglia di vino.", en: "Perfect, then we’ll take three fixed menus and a bottle of wine.", zh: "太好了，那我們要三份套餐和一瓶酒。" },
            { speaker: "Female", text: "Va bene, arrivo subito.", en: "Alright, I’ll be right back.", zh: "好的，我馬上來。" }
          ]
        },
        // Day 2——在火車站（你要的括號提示）
        {
          sceneId: 2,
          scene: "Day 2 – At the train station (quanto, quando)",
          scene_zh: "第 2 天 – 在火車站",
          dialogue: [
            { speaker: "Male", text: "Buongiorno! Vorrei un biglietto per Firenze.", en: "Good morning! I’d like a ticket to Florence.", zh: "早安！我要一張去佛羅倫斯的票。" },
            { speaker: "Female", text: "Quando vuole partire?", en: "When do you want to leave?", zh: "您想什麼時候出發？" },
            { speaker: "Male", text: "Oggi pomeriggio.", en: "This afternoon.", zh: "今天下午。" },
            { speaker: "Female", text: "Perfetto. Quale treno preferisce, l’alta velocità o il regionale?", en: "Perfect. Which train do you prefer, the high-speed or the regional?", zh: "好的。您要哪一班火車，高速還是區間？" },
            { speaker: "Male", text: "Preferisco l’alta velocità.", en: "I prefer the high-speed train.", zh: "我想要高速火車。" },
            { speaker: "Female", text: "Va bene. Quanto costa?", en: "Alright. How much does it cost?", zh: "好的。多少錢？" },
            { speaker: "Male", text: "Costa quaranta euro.", en: "It costs forty euros.", zh: "要四十歐元。" },
            { speaker: "Female", text: "Capisco. Quanto dura il viaggio fino a Firenze?", en: "I see. How long does the trip to Florence take?", zh: "我懂。到佛羅倫斯的旅程要多久？" },
            { speaker: "Male", text: "Circa un’ora e mezza.", en: "About an hour and a half.", zh: "大約一個半小時。" },
            { speaker: "Female", text: "Benissimo. A che ora parte il prossimo treno?", en: "Great. What time does the next train leave?", zh: "太好了。下一班火車幾點出發？" },
            { speaker: "Male", text: "Alle due e mezza.", en: "At two-thirty.", zh: "下午兩點半。" },
            { speaker: "Female", text: "Perfetto. Allora prendo questo, grazie!", en: "Perfect. Then I’ll take this one, thank you!", zh: "太好了，那我就買這一班，謝謝！" }
          ]
        },
        // Day 3——年齡 & 人數（把「幾歲」「幾個人」一起練）
        {
          sceneId: 3,
          scene: "Day 3 – Age & group size (quanti anni, quante persone)",
          scene_zh: "第 3 天 – 年齡與人數",
          dialogue: [
            { speaker: "Female", text: "Ciao! Quanti anni hai?", en: "Hi! How old are you?", zh: "嗨！你幾歲？" },
            { speaker: "Male", text: "Ho ventidue anni. E tu?", en: "I’m twenty-two. And you?", zh: "我二十二歲。你呢？" },
            { speaker: "Female", text: "Ne ho venti.", en: "I’m twenty.", zh: "我二十。" },
            { speaker: "Male", text: "Andate al concerto stasera?", en: "Are you going to the concert tonight?", zh: "你們今晚要去聽音樂會嗎？" },
            { speaker: "Female", text: "Sì! Quante persone vengono con te?", en: "Yes! How many people are coming with you?", zh: "會！有多少人跟你一起來？" },
            { speaker: "Male", text: "Siamo in quattro.", en: "There are four of us.", zh: "我們四個人。" },
            { speaker: "Female", text: "Perfetto. Quanto costa il biglietto?", en: "Perfect. How much is the ticket?", zh: "太好了。票多少錢？" },
            { speaker: "Male", text: "Dieci euro. E per gli studenti è meno.", en: "Ten euros. For students it’s less.", zh: "十歐元。學生更便宜。" },
            { speaker: "Female", text: "Ottimo! Allora compro quattro biglietti.", en: "Great! Then I’ll buy four tickets.", zh: "太棒！那我買四張。" },
            { speaker: "Male", text: "Ci vediamo lì alle otto?", en: "See you there at eight?", zh: "八點在那裡見？" },
            { speaker: "Female", text: "Sì, a dopo!", en: "Yes, see you later!", zh: "好，待會見！" },
            { speaker: "Male", text: "A dopo!", en: "See you later!", zh: "待會見！" }
          ]
        },

        // Day 4——市場買東西（重量、單價）
        {
          sceneId: 4,
          scene: "Day 4 – At the market (quanto costa, al chilo)",
          scene_zh: "第 4 天 – 市場買東西",
          dialogue: [
            { speaker: "Female", text: "Buongiorno! Quanto costa questo pane?", en: "Good morning! How much does this bread cost?", zh: "早安！這個麵包多少錢？" },
            { speaker: "Male", text: "Costa un euro.", en: "It costs one euro.", zh: "一歐元。" },
            { speaker: "Female", text: "Perfetto, ne prendo due.", en: "Perfect, I’ll take two.", zh: "太好了，我要兩個。" },
            { speaker: "Male", text: "Vuole anche del formaggio?", en: "Do you also want some cheese?", zh: "你要不要也買些起司？" },
            { speaker: "Female", text: "Sì, grazie. Quanto costa al chilo?", en: "Yes, thanks. How much is it per kilo?", zh: "好啊，謝謝。一公斤多少錢？" },
            { speaker: "Male", text: "Otto euro al chilo.", en: "Eight euros per kilo.", zh: "八歐元一公斤。" },
            { speaker: "Female", text: "È un po’ caro. Quale mi consiglia?", en: "That’s a bit expensive. Which one do you recommend?", zh: "有點貴。你推薦哪一個？" },
            { speaker: "Male", text: "Questo è più fresco e costa solo sei euro.", en: "This one is fresher and only costs six euros.", zh: "這個比較新鮮，只要六歐元。" },
            { speaker: "Female", text: "Perfetto, ne prendo mezzo chilo.", en: "Perfect, I’ll take half a kilo.", zh: "太好了，我要半公斤。" },
            { speaker: "Male", text: "Va bene. Qualcos’altro?", en: "Okay. Anything else?", zh: "好的。還要別的嗎？" },
            { speaker: "Female", text: "No, grazie. Quanto pago in totale?", en: "No, thanks. How much do I pay in total?", zh: "不用了，謝謝。我總共要付多少？" },
            { speaker: "Male", text: "Sette euro in tutto.", en: "Seven euros in total.", zh: "總共七歐元。" }
          ]
        },
        // Day 5——博物館買票（綜合：幾個人、多少錢、多久）
        {
          sceneId: 5,
          scene: "Day 5 – Museum tickets (quanti, quanto costa, quanto dura)",
          scene_zh: "第 5 天 – 博物館買票",
          dialogue: [
            { speaker: "Male", text: "Buongiorno! Quanti biglietti per favore.", en: "Good morning! (We need) how many tickets please?", zh: "早安！我們要買幾張票，麻煩了。" },
            { speaker: "Female", text: "Quanti siete?", en: "How many of you are there?", zh: "你們幾位？" },
            { speaker: "Male", text: "Siamo in due adulti e un bambino.", en: "Two adults and one child.", zh: "兩大一小。" },
            { speaker: "Female", text: "Va bene. Quanto costa il biglietto ridotto? Dipende dall’età.", en: "Alright. How much is the reduced ticket? It depends on age.", zh: "好的。優惠票多少錢？要看年齡。" },
            { speaker: "Male", text: "Ha otto anni.", en: "He is eight years old.", zh: "他八歲。" },
            { speaker: "Female", text: "Perfetto: adulti dodici euro, bambino sei euro.", en: "Perfect: adults twelve euros, child six euros.", zh: "好的：大人十二歐，小孩六歐。" },
            { speaker: "Male", text: "Grazie. Quanto dura la visita media?", en: "Thanks. How long does an average visit take?", zh: "謝謝。一般參觀需要多久？" },
            { speaker: "Female", text: "Circa un’ora e mezza.", en: "About an hour and a half.", zh: "大約一個半小時。" },
            { speaker: "Male", text: "Benissimo. Quanto costa l’audioguida?", en: "Great. How much is the audio guide?", zh: "太好了。語音導覽多少錢？" },
            { speaker: "Female", text: "Quattro euro a persona.", en: "Four euros per person.", zh: "每人四歐。" },
            { speaker: "Male", text: "Allora prendiamo tre biglietti e due audioguide.", en: "Then we’ll take three tickets and two audio guides.", zh: "那我們要三張票、兩個語音導覽。" },
            { speaker: "Female", text: "Perfetto, buon divertimento!", en: "Perfect, enjoy!", zh: "太好了，玩得愉快！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Where is it? (Dove si trova…)",
          scene_zh: "第 6 天 – …在哪裡？",
          dialogue: [
            { speaker: "Male", text: "Scusi, dov’è il bagno?", en: "Excuse me, where is the bathroom?", zh: "不好意思，洗手間在哪裡？" },
            { speaker: "Female", text: "È in fondo al corridoio, a destra.", en: "It’s at the end of the corridor, on the right.", zh: "在走廊盡頭，右邊。" },
            { speaker: "Male", text: "Grazie mille! E dove si trova la cassa?", en: "Thanks a lot! And where is the cashier?", zh: "非常感謝！那收銀台在哪裡？" },
            { speaker: "Female", text: "Accanto all’entrata.", en: "Next to the entrance.", zh: "在入口旁邊。" },
            { speaker: "Male", text: "Perfetto. Dove posso prendere un taxi?", en: "Perfect. Where can I get a taxi?", zh: "太好了。我在哪裡可以搭計程車？" },
            { speaker: "Female", text: "Fuori, davanti all’hotel.", en: "Outside, in front of the hotel.", zh: "在外面，飯店前面。" },
            { speaker: "Male", text: "Ottimo, grazie ancora!", en: "Great, thanks again!", zh: "太棒了，再次感謝！" },
            { speaker: "Female", text: "Prego, buona giornata!", en: "You’re welcome, have a nice day!", zh: "不客氣，祝你今天愉快！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Where are you? (Dove sei?)",
          scene_zh: "第 7 天 – 你在哪裡？",
          dialogue: [
            { speaker: "Male", text: "Ciao! Dove sei adesso?", en: "Hi! Where are you now?", zh: "嗨！你現在在哪裡？" },
            { speaker: "Female", text: "Sono in centro, vicino al Duomo.", en: "I’m downtown, near the Duomo.", zh: "我在市中心，大教堂附近。" },
            { speaker: "Male", text: "Davvero? Io sono a casa.", en: "Really? I’m at home.", zh: "真的嗎？我在家。" },
            { speaker: "Female", text: "Dove abiti?", en: "Where do you live?", zh: "你住在哪裡？" },
            { speaker: "Male", text: "Abito a Roma, vicino al Colosseo.", en: "I live in Rome, near the Colosseum.", zh: "我住在羅馬，靠近羅馬競技場。" },
            { speaker: "Female", text: "Che bello! E dov’è il tuo ufficio?", en: "Nice! And where is your office?", zh: "不錯！那你的辦公室在哪裡？" },
            { speaker: "Male", text: "È a Termini, vicino alla stazione.", en: "It’s at Termini, near the station.", zh: "在特米尼，靠近火車站。" },
            { speaker: "Female", text: "Perfetto. E dov’è la fermata dell’autobus qui?", en: "Perfect. And where’s the bus stop here?", zh: "太好了。這裡的公車站在哪裡？" },
            { speaker: "Male", text: "Lì, davanti al bar.", en: "There, in front of the café.", zh: "在那裡，就在咖啡館前面。" },
            { speaker: "Female", text: "Ottimo, grazie!", en: "Great, thanks!", zh: "太棒了，謝謝！" },
            { speaker: "Male", text: "Di niente. Ci vediamo dopo.", en: "You’re welcome. See you later.", zh: "不客氣。待會見。" },
            { speaker: "Female", text: "A dopo!", en: "See you later!", zh: "待會見！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Where are you from? (Di dove sei?)",
          scene_zh: "第 8 天 – 你從哪裡來？",
          dialogue: [
            { speaker: "Male", text: "Ciao! Di dove sei?", en: "Hi! Where are you from?", zh: "嗨！你從哪裡來？" },
            { speaker: "Female", text: "Sono di Firenze. E tu?", en: "I’m from Florence. And you?", zh: "我來自佛羅倫斯。你呢？" },
            { speaker: "Male", text: "Io sono di Napoli.", en: "I’m from Naples.", zh: "我來自拿坡里。" },
            { speaker: "Female", text: "Interessante! E di dove è la tua famiglia?", en: "Interesting! And where is your family from?", zh: "有意思！那你的家人來自哪裡？" },
            { speaker: "Male", text: "La mia famiglia è di Sicilia.", en: "My family is from Sicily.", zh: "我家人來自西西里。" },
            { speaker: "Female", text: "Wow! E adesso vivi a Roma?", en: "Wow! And now do you live in Rome?", zh: "哇！那你現在住在羅馬嗎？" },
            { speaker: "Male", text: "Sì, da tre anni.", en: "Yes, for three years.", zh: "是的，三年了。" },
            { speaker: "Female", text: "E dove studi o lavori?", en: "And where do you study or work?", zh: "那你在哪裡讀書或工作？" },
            { speaker: "Male", text: "Lavoro in un ufficio in centro.", en: "I work in an office downtown.", zh: "我在市中心的一間辦公室上班。" },
            { speaker: "Female", text: "Perfetto. Piace anche a te vivere qui?", en: "Perfect. Do you also like living here?", zh: "太好了。你也喜歡住在這裡嗎？" },
            { speaker: "Male", text: "Sì, molto! Roma è bellissima.", en: "Yes, a lot! Rome is beautiful.", zh: "非常喜歡！羅馬很美。" },
            { speaker: "Female", text: "Anch’io la adoro.", en: "I love it too.", zh: "我也很喜歡。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Where do you live? (Dove abiti?)",
          scene_zh: "第 9 天 – 你住在哪裡？",
          dialogue: [
            { speaker: "Female", text: "Ciao! Dove abiti?", en: "Hi! Where do you live?", zh: "嗨！你住在哪裡？" },
            { speaker: "Male", text: "Abito a Milano, vicino al centro.", en: "I live in Milan, near the center.", zh: "我住在米蘭，靠近市中心。" },
            { speaker: "Female", text: "Che bello! Io abito a Firenze.", en: "Nice! I live in Florence.", zh: "不錯！我住在佛羅倫斯。" },
            { speaker: "Male", text: "Firenze è bellissima! Dove abita la tua famiglia?", en: "Florence is beautiful! Where does your family live?", zh: "佛羅倫斯很美！那你的家人住在哪裡？" },
            { speaker: "Female", text: "A Bologna.", en: "In Bologna.", zh: "在波隆那。" },
            { speaker: "Male", text: "Perfetto. Dove lavori adesso?", en: "Perfect. Where do you work now?", zh: "太好了。那你現在在哪裡工作？" },
            { speaker: "Female", text: "Lavoro in un ufficio in centro.", en: "I work in an office downtown.", zh: "我在市中心的一間辦公室工作。" },
            { speaker: "Male", text: "Ottimo! Allora ci vediamo presto a Milano.", en: "Great! Then see you soon in Milan.", zh: "太好了！那我們很快在米蘭見。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Where are you going? (Dove vai?)",
          scene_zh: "第 10 天 – 你要去哪裡？",
          dialogue: [
            { speaker: "Male", text: "Ciao! Dove vai adesso?", en: "Hi! Where are you going now?", zh: "嗨！你現在要去哪裡？" },
            { speaker: "Female", text: "Vado al mercato.", en: "I’m going to the market.", zh: "我要去市場。" },
            { speaker: "Male", text: "Davvero? Anch’io! Dove si trova esattamente?", en: "Really? Me too! Where exactly is it?", zh: "真的嗎？我也是！那市場確切在哪裡？" },
            { speaker: "Female", text: "Vicino alla piazza principale.", en: "Near the main square.", zh: "在主要廣場附近。" },
            { speaker: "Male", text: "Perfetto. E dopo dove vai?", en: "Perfect. And after that, where are you going?", zh: "太好了。那之後你要去哪裡？" },
            { speaker: "Female", text: "A casa, per cucinare.", en: "Home, to cook.", zh: "回家做飯。" },
            { speaker: "Male", text: "Che buono! Dove compri di solito la frutta?", en: "Yum! Where do you usually buy fruit?", zh: "真好吃！你通常在哪裡買水果？" },
            { speaker: "Female", text: "Sempre al mercato locale.", en: "Always at the local market.", zh: "總是在當地市場。" },
            { speaker: "Male", text: "Fantastico. Allora andiamo insieme.", en: "Fantastic. Then let’s go together.", zh: "太棒了。那我們一起去吧。" },
            { speaker: "Female", text: "Volentieri!", en: "Gladly!", zh: "好啊！" }
          ]
        }
      ]
    }
  ]
};
