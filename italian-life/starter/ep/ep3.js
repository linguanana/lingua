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
      topic: "❓ Le Domande – Question Words",
      topic_zh: "❓ 問句與疑問詞",
      scenes: [

        // Day 1 – Chi, Come, Dove
        {
          sceneId: 1,
          scene: "Day 1 – Meeting a new friend",
          scene_zh: "第 1 天 – 認識新朋友",
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
          scene_zh: "第 2 天 – 在咖啡館",
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
          scene: "Day 3 – Making plans",
          scene_zh: "第 3 天 – 訂計劃",
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
          scene: "Day 4 – Nationalities",
          scene_zh: "第 4 天 – 國籍",
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
          scene: "Day 5 – Asking directions",
          scene_zh: "第 5 天 – 問路",
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
          scene: "Day 6 – In Italian class",
          scene_zh: "第 6 天 – 在義大利文課堂",
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
          scene: "Day 7 – Buying a ticket",
          scene_zh: "第 7 天 – 在火車站買票",
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
          scene: "Day 8 – Visiting a friend",
          scene_zh: "第 8 天 – 拜訪朋友",
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
          scene: "Day 9 – Shopping at the market",
          scene_zh: "第 9 天 – 在市場買東西",
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
          scene: "Day 10 – Review and age",
          scene_zh: "第 10 天 – 複習與年齡",
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
    }
  ]
};
