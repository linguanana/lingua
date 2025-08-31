// 🇫🇷 Paris (French) — Starter 02: Names, Origins & Work
const episodeData = {
  ep_title: "ep_fr_paris",
  episodeId: 301,
  episode: "🇫🇷 Episode – Starter 02: Names, Origins & Work ",
  episode_zh: "🇫🇷 特別篇 - 入門 02：名字、來自哪裡與工作／職業",
  toggle_title: "Scenes",
  voice: "fr-FR",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "🙋‍♀️ Noms, Origines & Métier",
      topic_zh: "🙋‍♀️ 名字、來自哪裡與工作／職業",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Premières présentations (casual)",
          scene_zh: "第 1 天 – 初次見面（非正式）",
          dialogue: [
            { speaker: "Female", text: "Salut ! Bonjour.", en: "Hi! Good morning.", zh: "嗨！早安。" },
            { speaker: "Male", text: "Bonjour ! Comment tu t’appelles ?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Je m’appelle Emily. Et toi ?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Je m’appelle Antoine.", en: "My name is Antoine.", zh: "我叫 Antoine。" },
            { speaker: "Female", text: "Enchantée, Antoine.", en: "Nice to meet you, Antoine.", zh: "幸會，Antoine。" },
            { speaker: "Male", text: "Enchanté, Emily.", en: "Nice to meet you, Emily.", zh: "幸會，Emily。" },
            { speaker: "Female", text: "Tu es d’ici ?", en: "Are you from here?", zh: "你是這裡人嗎？" },
            { speaker: "Male", text: "Oui, de Paris. Et toi ?", en: "Yes, from Paris. And you?", zh: "是的，巴黎人。你呢？" },
            { speaker: "Female", text: "Je viens des États-Unis. J’habite en Californie.", en: "I come from the United States. I live in California.", zh: "我來自美國，住在加州。" },
            { speaker: "Male", text: "Super ! Bienvenue à Paris.", en: "Great! Welcome to Paris.", zh: "太棒了！歡迎來到巴黎。" },
            { speaker: "Female", text: "Merci ! À plus tard.", en: "Thanks! See you later.", zh: "謝謝！待會見。" },
            { speaker: "Male", text: "À tout à l’heure.", en: "See you in a bit.", zh: "待會見。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Présentation formelle (accueil)",
          scene_zh: "第 2 天 – 正式介紹（櫃台）",
          dialogue: [
            { speaker: "Female", text: "Bonjour, monsieur. Comment vous appelez-vous ?", en: "Good morning, sir. What’s your name?", zh: "早安，先生。您貴姓？" },
            { speaker: "Male", text: "Bonjour. Je m’appelle Charles Dupont.", en: "Good morning. My name is Charles Dupont.", zh: "早安。我叫 Charles Dupont。" },
            { speaker: "Female", text: "Ravie de vous rencontrer, monsieur Dupont.", en: "Nice to meet you, Mr. Dupont.", zh: "幸會，Dupont 先生。" },
            { speaker: "Male", text: "Enchanté. Vous êtes Madame Claire ?", en: "Nice to meet you. Are you Ms. Claire?", zh: "很高興認識您。您是 Claire 女士嗎？" },
            { speaker: "Female", text: "Oui, je suis Claire Martin.", en: "Yes, I’m Claire Martin.", zh: "是的，我是 Claire Martin。" },
            { speaker: "Male", text: "Très bien. Puis-je signer ici ?", en: "Great. May I sign here?", zh: "很好。我可以在這裡簽名嗎？" },
            { speaker: "Female", text: "Oui, s’il vous plaît. Merci.", en: "Yes, please. Thank you.", zh: "可以，麻煩您。謝謝。" },
            { speaker: "Male", text: "De rien. Vous êtes d’où ?", en: "You’re welcome. Where are you from?", zh: "不客氣。您來自哪裡？" },
            { speaker: "Female", text: "Je suis de Lyon, mais j’habite à Paris.", en: "I’m from Lyon, but I live in Paris.", zh: "我來自里昂，但住在巴黎。" },
            { speaker: "Male", text: "Parfait. Bonne journée !", en: "Perfect. Have a nice day!", zh: "太好了。祝您今天愉快！" },
            { speaker: "Female", text: "Merci, à vous aussi. Au revoir.", en: "Thanks, you too. Goodbye.", zh: "謝謝，您也是。再見。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Tu viens d’où et tu habites où ?",
          scene_zh: "第 3 天 – 你來自哪裡／住在哪裡？",
          dialogue: [
            { speaker: "Female", text: "Salut, tu viens d’où ?", en: "Hi, where are you from?", zh: "嗨，你來自哪裡？" },
            { speaker: "Male", text: "Je viens de Bordeaux. Et toi ?", en: "I’m from Bordeaux. And you?", zh: "我來自波爾多。你呢？" },
            { speaker: "Female", text: "Je viens de Los Angeles ; maintenant j’habite à San Diego.", en: "I come from Los Angeles; now I live in San Diego.", zh: "我來自洛杉磯；現在住在聖地牙哥。" },
            { speaker: "Male", text: "Intéressant. J’habite près du centre.", en: "Interesting. I live near the center.", zh: "有意思。我住在市中心附近。" },
            { speaker: "Female", text: "Tu aimes Paris ?", en: "Do you like Paris?", zh: "你喜歡巴黎嗎？" },
            { speaker: "Male", text: "Oui, beaucoup. Et la Californie ?", en: "Yes, a lot. And California?", zh: "是，非常喜歡。那加州呢？" },
            { speaker: "Female", text: "J’aime bien aussi. Tu habites dans quel quartier ?", en: "I like it too. Which neighborhood do you live in?", zh: "我也喜歡。你住在哪個區？" },
            { speaker: "Male", text: "J’habite à Montmartre. Et toi ?", en: "I live in Montmartre. And you?", zh: "我住在蒙馬特。你呢？" },
            { speaker: "Female", text: "Je reste près de Gare du Nord.", en: "I’m staying near Gare du Nord.", zh: "我住在北站附近。" },
            { speaker: "Male", text: "Parfait. On prend un café ?", en: "Perfect. Shall we get a coffee?", zh: "太好了。喝杯咖啡嗎？" },
            { speaker: "Female", text: "Avec plaisir. Allons-y !", en: "With pleasure. Let’s go!", zh: "樂意。走吧！" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Hôtel à Paris : salutations, nom & origine",
          scene_zh: "第 4 天 – 巴黎飯店：打招呼、名字與來自哪裡",
          dialogue: [
            { speaker: "Female", text: "Bonjour !", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "Bonjour ! Comment tu t’appelles ?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Je m’appelle Emily. Et toi ?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Moi, c’est Antoine. Enchanté.", en: "I’m Antoine. Nice to meet you.", zh: "我是 Antoine。幸會。" },
            { speaker: "Female", text: "Enchantée, Antoine. Tu es de Paris ?", en: "Nice to meet you, Antoine. Are you from Paris?", zh: "幸會，Antoine。你是巴黎人嗎？" },
            { speaker: "Male", text: "Oui. Et toi, tu viens d’où ?", en: "Yes. And you, where are you from?", zh: "是的。你來自哪裡？" },
            { speaker: "Female", text: "Des États-Unis. J’habite en Californie.", en: "From the U.S. I live in California.", zh: "美國來的。我住在加州。" },
            { speaker: "Male", text: "Génial ! Tu restes près du centre ?", en: "Great! Are you staying near the center?", zh: "太棒了！你住在市中心附近嗎？" },
            { speaker: "Female", text: "Oui, à l’Hôtel Lumière, à deux minutes du métro.", en: "Yes, at Hôtel Lumière, two minutes from the metro.", zh: "是的，住在 Lumière 飯店，離地鐵兩分鐘。" },
            { speaker: "Male", text: "Parfait. Bonne visite !", en: "Perfect. Enjoy your visit!", zh: "太好了。玩得開心！" },
            { speaker: "Female", text: "Merci, Antoine. À plus tard !", en: "Thanks, Antoine. See you later!", zh: "謝謝你，Antoine。待會見！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Café près de Notre-Dame : d’où tu viens & où tu restes",
          scene_zh: "第 5 天 – 巴黎聖母院旁咖啡館：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Salut, Emily ! Ça va aujourd’hui ?", en: "Hi, Emily! How are you today?", zh: "嗨，Emily！今天好嗎？" },
            { speaker: "Female", text: "Très bien, merci. Et toi, Antoine ?", en: "Very well, thanks. And you, Antoine?", zh: "很好，謝謝。你呢，Antoine？" },
            { speaker: "Male", text: "Ça va. Tu es toujours à l’Hôtel Lumière ?", en: "I’m good. Are you still at Hôtel Lumière?", zh: "不錯。你還住在 Lumière 飯店嗎？" },
            { speaker: "Female", text: "Oui, j’aime bien, c’est près du métro.", en: "Yes, I like it; it’s near the metro.", zh: "對，我喜歡它靠近地鐵。" },
            { speaker: "Male", text: "Tu viens de quelle ville aux États-Unis ?", en: "Which U.S. city are you from?", zh: "你在美國哪個城市？" },
            { speaker: "Female", text: "Je viens de Los Angeles, mais j’habite maintenant en Californie du Nord.", en: "I’m from Los Angeles, but now I live in Northern California.", zh: "我來自洛杉磯，不過現在住在加州北部。" },
            { speaker: "Male", text: "Super. Tu fais quoi cet après-midi ?", en: "Great. What are you doing this afternoon?", zh: "太好了。你今天下午要做什麼？" },
            { speaker: "Female", text: "Je marche au centre-ville et je visite le Louvre.", en: "I’ll walk downtown and visit the Louvre.", zh: "在市中心走走，去羅浮宮。" },
            { speaker: "Male", text: "Bon plan. Si tu as besoin, dis-moi.", en: "Good plan. If you need anything, tell me.", zh: "不錯的計畫。需要幫忙就跟我說。" },
            { speaker: "Female", text: "Merci, Antoine. À ce soir !", en: "Thanks, Antoine. See you tonight!", zh: "謝謝你，Antoine。今晚見！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Jardin du Luxembourg : métier & ce que tu fais maintenant",
          scene_zh: "第 6 天 – 盧森堡公園：工作與你現在在做什麼",
          dialogue: [
            { speaker: "Female", text: "Bonjour, Antoine ! Tu fais quoi aujourd’hui ?", en: "Good morning, Antoine! What are you doing today?", zh: "早安，Antoine！你今天在做什麼？" },
            { speaker: "Male", text: "Je me promène au jardin. Et toi ?", en: "I’m taking a walk in the garden. And you?", zh: "我在花園散步。你呢？" },
            { speaker: "Female", text: "Je prends un café et je lis un peu.", en: "I’m having a coffee and reading a bit.", zh: "我喝咖啡、看一下書。" },
            { speaker: "Male", text: "Super. Tu fais quoi comme travail ?", en: "Great. What do you do for work?", zh: "太棒了。你的工作是什麼？" },
            { speaker: "Female", text: "Je travaille dans la tech. Et toi ?", en: "I work in tech. And you?", zh: "我在科技業。你呢？" },
            { speaker: "Male", text: "Je travaille dans un bureau et j’étudie le soir.", en: "I work in an office and study in the evenings.", zh: "我在辦公室上班，晚上念書。" },
            { speaker: "Female", text: "Intéressant ! Tu habites ici à Paris ?", en: "Interesting! Do you live here in Paris?", zh: "真有趣！你住在巴黎嗎？" },
            { speaker: "Male", text: "Oui, près de Montparnasse. Et toi, tu restes où maintenant ?", en: "Yes, near Montparnasse. And where are you staying now?", zh: "是的，在蒙帕納斯附近。你現在住哪裡？" },
            { speaker: "Female", text: "À l’Hôtel Lumière, près du métro.", en: "At Hôtel Lumière, near the metro.", zh: "在 Lumière 飯店，靠近地鐵。" },
            { speaker: "Male", text: "Parfait pour te déplacer en ville.", en: "Perfect for getting around the city.", zh: "很適合在城裡走動。" },
            { speaker: "Female", text: "Oui. Après, je vais au musée d’Orsay.", en: "Yes. Later I’m going to the Orsay Museum.", zh: "是啊。等一下去奧賽博物館。" },
            { speaker: "Male", text: "Excellent ! À plus tard dans le hall de l’hôtel.", en: "Excellent! See you later in the hotel lobby.", zh: "太棒了！待會在飯店大廳見。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Hall de l’hôtel : noms & logement",
          scene_zh: "第 7 天 – 飯店大廳：名字與住宿",
          dialogue: [
            { speaker: "Female", text: "Bonjour ! Comment tu t’appelles ?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Male", text: "Bonjour. Je m’appelle Antoine. Et toi ?", en: "Good morning. My name is Antoine. And you?", zh: "早安。我叫 Antoine。你呢？" },
            { speaker: "Female", text: "Je m’appelle Emily. Enchantée.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Enchanté, Emily. Tu viens d’où ?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Des États-Unis, de Californie. Et toi ?", en: "From the United States, from California. And you?", zh: "我來自美國，加州。你呢？" },
            { speaker: "Male", text: "Je viens de Paris. Tu restes où maintenant ?", en: "I’m from Paris. Where are you staying now?", zh: "我來自巴黎。你現在住哪裡？" },
            { speaker: "Female", text: "Je reste à l’Hôtel Lumière, près du centre.", en: "I’m staying at Hôtel Lumière, near the center.", zh: "我住在 Lumière 飯店，靠近市中心。" },
            { speaker: "Male", text: "Parfait. Tu fais quoi aujourd’hui ?", en: "Perfect. What are you doing today?", zh: "太好了。你今天在做什麼？" },
            { speaker: "Female", text: "Je fais le check-in et je me promène sur la place.", en: "I’m checking in and walking around the square.", zh: "我先辦入住，之後在廣場走走。" },
            { speaker: "Male", text: "Très bien. Si tu as besoin, dis-moi.", en: "Great. If you need help, tell me.", zh: "很好。需要幫忙就跟我說。" },
            { speaker: "Female", text: "Merci, Antoine. À plus tard !", en: "Thanks, Antoine. See you later!", zh: "謝謝你，Antoine。待會見！" },
            { speaker: "Male", text: "Avec plaisir. À bientôt !", en: "My pleasure. See you soon!", zh: "不客氣。回頭見！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Sur la place : d’où tu viens & où tu habites",
          scene_zh: "第 8 天 – 廣場：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "Salut ! Ça va, Emily ?", en: "Hi! How’s it going, Emily?", zh: "嗨！最近如何，Emily？" },
            { speaker: "Female", text: "Très bien, merci. Et toi, Antoine ?", en: "Very well, thanks. And you, Antoine?", zh: "很好，謝謝。你呢，Antoine？" },
            { speaker: "Male", text: "Ça va. Tu habites aux États-Unis, non ?", en: "I’m good. You live in the U.S., right?", zh: "不錯。你住在美國，對吧？" },
            { speaker: "Female", text: "Oui, j’habite à San Diego, en Californie.", en: "Yes, I live in San Diego, in California.", zh: "對，我住在加州聖地牙哥。" },
            { speaker: "Male", text: "Moi, j’habite à Paris, près du parc.", en: "I live in Paris, near the park.", zh: "我住在巴黎，公園附近。" },
            { speaker: "Female", text: "Et ta famille, elle vient d’où ?", en: "And your family, where are they from?", zh: "那你的家人來自哪裡？" },
            { speaker: "Male", text: "Ma famille vient de Lyon.", en: "My family is from Lyon.", zh: "我家人來自里昂。" },
            { speaker: "Female", text: "Super. Où tu restes quand tu voyages ?", en: "Nice. Where do you stay when you travel?", zh: "不錯。你旅行時都住哪裡？" },
            { speaker: "Male", text: "D’habitude, dans un hôtel près du centre.", en: "Usually in a hotel near the center.", zh: "通常住在市中心附近的飯店。" },
            { speaker: "Female", text: "En ce moment je suis dans une auberge, mais c’est calme.", en: "Right now I’m in a hostel, but it’s quiet.", zh: "我現在住青年旅館，不過很安靜。" },
            { speaker: "Male", text: "Parfait. Prenons un café et continuons.", en: "Perfect. Let’s have a coffee and continue.", zh: "太好了。我們喝杯咖啡再聊。" },
            { speaker: "Female", text: "D’accord. Merci pour l’invitation.", en: "Okay. Thanks for the invitation.", zh: "好的。謝謝邀請。" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Cours de langue : tour de présentation",
          scene_zh: "第 9 天 – 語言課：自我介紹",
          dialogue: [
            { speaker: "Female", text: "Bon après-midi. Je m’appelle Emily.", en: "Good afternoon. My name is Emily.", zh: "午安。我叫 Emily。" },
            { speaker: "Male", text: "Enchanté, Emily. Moi, c’est Daniel.", en: "Nice to meet you, Emily. I’m Daniel.", zh: "幸會，Emily。我是 Daniel。" },
            { speaker: "Female", text: "Enchantée, Daniel. Tu viens d’où ?", en: "Nice to meet you, Daniel. Where are you from?", zh: "很高興認識你，Daniel。你來自哪裡？" },
            { speaker: "Male", text: "Je viens de Boston, aux États-Unis. Et toi ?", en: "I’m from Boston, in the United States. And you?", zh: "我來自美國波士頓。你呢？" },
            { speaker: "Female", text: "Je viens de Californie. J’habite à San Diego.", en: "I’m from California. I live in San Diego.", zh: "我來自加州，住在聖地牙哥。" },
            { speaker: "Male", text: "Tu restes où maintenant à Paris ?", en: "Where are you staying now in Paris?", zh: "你現在在巴黎住在哪裡？" },
            { speaker: "Female", text: "Je reste dans un hôtel près de Montparnasse.", en: "I’m staying in a hotel near Montparnasse.", zh: "我住在蒙帕納斯附近的一家飯店。" },
            { speaker: "Male", text: "Super. Moi, je suis dans un petit appartement.", en: "Nice. I’m in a small apartment.", zh: "不錯。我住在一間小公寓。" },
            { speaker: "Female", text: "Tu fais quoi après le cours ?", en: "What are you doing after class?", zh: "下課之後你要做什麼？" },
            { speaker: "Male", text: "Je vais au musée puis je dîne avec des amis.", en: "I’m going to the museum and then having dinner with friends.", zh: "我要去博物館，之後和朋友吃晚餐。" },
            { speaker: "Female", text: "Parfait. À demain !", en: "Perfect. See you tomorrow!", zh: "太好了。明天見！" },
            { speaker: "Male", text: "À demain ! Merci pour la discussion.", en: "See you tomorrow! Thanks for the chat.", zh: "明天見！謝謝聊天。" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Train pour Lyon : intro rapide & projets",
          scene_zh: "第 10 天 – 火車上：快速認識與行程",
          dialogue: [
            { speaker: "Female", text: "Pardon, cette place est libre ?", en: "Excuse me, is this seat free?", zh: "不好意思，這個位子有人嗎？" },
            { speaker: "Male", text: "Oui, s’il vous plaît. Je m’appelle Lucas. Et vous ?", en: "Yes, please. I’m Lucas. And you?", zh: "請坐。我叫 Lucas。您呢？" },
            { speaker: "Female", text: "Je m’appelle Emily. Enchantée.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Enchanté, Emily. Vous venez d’où ?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識您，Emily。您
