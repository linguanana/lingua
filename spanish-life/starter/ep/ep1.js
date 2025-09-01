const episodeData = {
  ep_title: "ep",
  episodeId: 1,
  episode: "🇪🇸 Episode – Starter 01: Spanish Starter Dialogues",
  episode_zh: "🇪🇸 特別篇 - 入門 01：西班牙語入門對話",
  toggle_title: "Scenes",
  voice: "es-US",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "👋 Greetings and Polite Words",
      topic_zh: "👋 打招呼和禮貌用語",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Morning greeting",
          scene_zh: "第1天 – 早晨打招呼",
          dialogue: [
            { speaker: "Female", text: "¡Buenos días!", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "¡Buenos días! ¿Cómo estás?", en: "Good morning! How are you?", zh: "早安！你好吗？" },
            { speaker: "Female", text: "Estoy bien, gracias. ¿Y tú?", en: "I’m fine, thanks. And you?", zh: "我很好，谢谢。你呢？" },
            { speaker: "Male", text: "Muy bien también.", en: "Very well too.", zh: "我也很好。" },
            { speaker: "Female", text: "Me alegro.", en: "I’m glad.", zh: "我很高兴。" },
            { speaker: "Male", text: "Que tengas un buen día.", en: "Have a good day.", zh: "祝你有美好的一天。" },
            { speaker: "Female", text: "Gracias, igualmente.", en: "Thanks, same to you.", zh: "谢谢，你也是。" },
            { speaker: "Male", text: "Hasta luego.", en: "See you later.", zh: "待会见。" },
            { speaker: "Female", text: "Adiós.", en: "Goodbye.", zh: "再见。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Evening greeting",
          scene_zh: "第2天 – 晚上打招呼",
          dialogue: [
            { speaker: "Male", text: "¡Buenas tardes!", en: "Good afternoon!", zh: "午安！" },
            { speaker: "Female", text: "¡Buenas tardes! ¿Cómo te va?", en: "Good afternoon! How’s it going?", zh: "午安！过得怎么样？" },
            { speaker: "Male", text: "Más o menos, un poco cansado.", en: "So-so, a bit tired.", zh: "马马虎虎，有点累。" },
            { speaker: "Female", text: "Lo siento. ¿Quieres un café?", en: "I’m sorry. Do you want a coffee?", zh: "真不好意思。要喝咖啡吗？" },
            { speaker: "Male", text: "Sí, por favor.", en: "Yes, please.", zh: "好的，请。" },
            { speaker: "Female", text: "Aquí tienes.", en: "Here you go.", zh: "给你。" },
            { speaker: "Male", text: "Muchas gracias.", en: "Thanks a lot.", zh: "非常谢谢。" },
            { speaker: "Female", text: "De nada.", en: "You’re welcome.", zh: "不客气。" },
            { speaker: "Male", text: "Hasta mañana.", en: "See you tomorrow.", zh: "明天见。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Asking how someone is",
          scene_zh: "第3天 – 询问近况",
          dialogue: [
            { speaker: "Female", text: "Hola, ¿qué tal?", en: "Hi, how’s it going?", zh: "嗨，你好吗？" },
            { speaker: "Male", text: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?", zh: "很好，谢谢。你呢？" },
            { speaker: "Female", text: "Regular. Un poco ocupada.", en: "So-so. A bit busy.", zh: "一般般。有点忙。" },
            { speaker: "Male", text: "Ah, lo entiendo.", en: "Ah, I understand.", zh: "啊，我懂了。" },
            { speaker: "Female", text: "Pero estoy contenta.", en: "But I’m happy.", zh: "不过我很开心。" },
            { speaker: "Male", text: "Me alegro mucho.", en: "I’m very glad.", zh: "我很高兴。" },
            { speaker: "Female", text: "Gracias. Eres amable.", en: "Thanks. You’re kind.", zh: "谢谢，你人真好。" },
            { speaker: "Male", text: "De nada. ¡Hasta pronto!", en: "You’re welcome. See you soon!", zh: "不客气。回头见！" },
            { speaker: "Female", text: "Chao.", en: "Bye.", zh: "拜拜。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Saying sorry",
          scene_zh: "第4天 – 道歉",
          dialogue: [
            { speaker: "Male", text: "Perdón, perdón.", en: "Sorry, sorry.", zh: "对不起，对不起。" },
            { speaker: "Female", text: "No pasa nada.", en: "It’s okay.", zh: "没关系。" },
            { speaker: "Male", text: "Lo siento, choqué contigo.", en: "I’m sorry, I bumped into you.", zh: "不好意思，我撞到你了。" },
            { speaker: "Female", text: "Tranquilo, está bien.", en: "Don’t worry, it’s fine.", zh: "别担心，没事的。" },
            { speaker: "Male", text: "Gracias por tu paciencia.", en: "Thanks for your patience.", zh: "谢谢你的体谅。" },
            { speaker: "Female", text: "Claro, de nada.", en: "Of course, you’re welcome.", zh: "当然，不客气。" },
            { speaker: "Male", text: "Que tengas una buena noche.", en: "Have a good night.", zh: "祝你晚安。" },
            { speaker: "Female", text: "Igualmente. Buenas noches.", en: "Same to you. Good night.", zh: "你也是。晚安。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Asking for help",
          scene_zh: "第5天 – 请求帮忙",
          dialogue: [
            { speaker: "Female", text: "Disculpe, ¿puede ayudarme?", en: "Excuse me, can you help me?", zh: "不好意思，可以帮我吗？" },
            { speaker: "Male", text: "Sí, claro. ¿Qué pasa?", en: "Yes, of course. What’s wrong?", zh: "好的，当然。怎么了？" },
            { speaker: "Female", text: "Busco la estación.", en: "I’m looking for the station.", zh: "我在找车站。" },
            { speaker: "Male", text: "Está cerca, a la derecha.", en: "It’s nearby, to the right.", zh: "就在附近，往右走。" },
            { speaker: "Female", text: "Ah, perfecto. Muchas gracias.", en: "Ah, perfect. Thank you very much.", zh: "啊，太好了。非常谢谢你。" },
            { speaker: "Male", text: "De nada, con gusto.", en: "You’re welcome, with pleasure.", zh: "不客气，很乐意。" },
            { speaker: "Female", text: "Hasta luego.", en: "See you later.", zh: "待会见。" },
            { speaker: "Male", text: "Adiós.", en: "Goodbye.", zh: "再见。" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – On the street: sorry & help",
          scene_zh: "第 6 天 — 街上：道歉與求助",
          dialogue: [
            { speaker: "Male", text: "¡Oh, perdón!", en: "Oh, sorry!", zh: "喔，不好意思！" },
            { speaker: "Female", text: "No hay problema.", en: "No problem.", zh: "沒關係。" },
            { speaker: "Male", text: "Lo siento mucho.", en: "I’m really sorry.", zh: "我真的很抱歉。" },
            { speaker: "Female", text: "Tranquilo, está bien.", en: "It’s fine, no worries.", zh: "沒事，別擔心。" },
            { speaker: "Male", text: "Por favor, ¿puede ayudarme?", en: "Please, can you help me?", zh: "請問，您能幫我嗎？" },
            { speaker: "Female", text: "Sí, claro.", en: "Yes, of course.", zh: "可以，當然。" },
            { speaker: "Male", text: "¿Dónde está el metro?", en: "Where is the metro?", zh: "地鐵在哪裡？" },
            { speaker: "Female", text: "Allí, a la izquierda.", en: "There, on the left.", zh: "在那邊，左邊。" },
            { speaker: "Male", text: "¡Muchas gracias! ¡Adiós!", en: "Thank you very much! Goodbye!", zh: "非常感謝！再見！" },
            { speaker: "Female", text: "¡Adiós! ¡Que tenga un buen día!", en: "Goodbye! Have a nice day!", zh: "再見！祝你有美好的一天！" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – On the bus: small courtesy",
          scene_zh: "第 7 天 — 公車上：小小禮讓",
          dialogue: [
            { speaker: "Female", text: "Perdón, ¿este asiento está libre?", en: "Excuse me, is this seat free?", zh: "不好意思，這位子有人坐嗎？" },
            { speaker: "Male", text: "Sí, por favor.", en: "Yes, please.", zh: "是的，請坐。" },
            { speaker: "Female", text: "Gracias.", en: "Thank you.", zh: "謝謝。" },
            { speaker: "Male", text: "De nada.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Female", text: "Disculpe, necesito bajar.", en: "Excuse me, I need to get off.", zh: "不好意思，我要下車了。" },
            { speaker: "Male", text: "Claro, adelante.", en: "Sure, go ahead.", zh: "當然，請。" },
            { speaker: "Female", text: "¡Que tenga un buen día!", en: "Have a nice day!", zh: "祝你今天愉快！" },
            { speaker: "Male", text: "¡Hasta pronto! ¡Chao!", en: "See you soon! Bye!", zh: "回頭見！掰！" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – At the café: order & farewell",
          scene_zh: "第 8 天 — 咖啡館：點餐與道別",
          dialogue: [
            { speaker: "Female", text: "¡Buenos días! Un café, por favor.", en: "Good morning! A coffee, please.", zh: "早安！一杯咖啡，謝謝。" },
            { speaker: "Male", text: "Enseguida. ¿En la barra o en la mesa?", en: "Right away. At the counter or at the table?", zh: "馬上。在吧台還是桌邊？" },
            { speaker: "Female", text: "En la barra, gracias.", en: "At the counter, thanks.", zh: "在吧台，謝謝。" },
            { speaker: "Male", text: "Aquí tiene el café.", en: "Here is the coffee.", zh: "您的咖啡好了。" },
            { speaker: "Female", text: "Perfecto. ¿Cuánto es?", en: "Perfect. How much is it?", zh: "太好了。多少錢？" },
            { speaker: "Male", text: "Un euro con diez.", en: "One euro ten.", zh: "一歐元一角。" },
            { speaker: "Female", text: "Aquí tiene. ¡Muchas gracias!", en: "Here you go. Thank you so much!", zh: "給您。非常感謝！" },
            { speaker: "Male", text: "Gracias a usted. ¡Que tenga un buen día!", en: "Thanks to you. Have a nice day!", zh: "也謝謝您。祝您有美好的一天！" },
            { speaker: "Female", text: "¡Adiós!", en: "Goodbye!", zh: "再見！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – In a small shop (",
          scene_zh: "第 9 天 — 商店",
          dialogue: [
            { speaker: "Female", text: "Perdón, ¿dónde está la leche?", en: "Excuse me, where is the milk?", zh: "不好意思，牛奶在哪裡？" },
            { speaker: "Male",   text: "Allí, a la derecha.", en: "Over there, to the right.", zh: "在那邊，右邊。" },
            { speaker: "Female", text: "Ah, perfecto. Muchas gracias.", en: "Ah, perfect. Thank you very much.", zh: "啊，太好了，非常感謝。" },
            { speaker: "Male",   text: "De nada.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Female", text: "¿Cuánto es?", en: "How much is it?", zh: "多少錢？" },
            { speaker: "Male",   text: "Dos euros.", en: "Two euro.", zh: "2歐元。" },
            { speaker: "Female", text: "Está bien. Aquí tiene.", en: "Alright. Here you go.", zh: "好的，給您。" },
            { speaker: "Male",   text: "Gracias, ¡hasta luego!", en: "Thanks, see you later!", zh: "謝謝，待會見！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Review: many goodbyes",
          scene_zh: "第 10 天 — 複習：各種再見",
          dialogue: [
            { speaker: "Female", text: "Hola, ¿cómo estás hoy?", en: "Hi, how are you today?", zh: "嗨，今天好嗎？" },
            { speaker: "Male", text: "Bien, gracias. ¿Y tú?", en: "Good, thanks. And you?", zh: "很好，謝謝。你呢？" },
            { speaker: "Female", text: "No está mal.", en: "Not bad.", zh: "還不錯。" },
            { speaker: "Male", text: "Tengo que irme.", en: "I have to go.", zh: "我得走了。" },
            { speaker: "Female", text: "Está bien. ¡Que tengas una buena tarde!", en: "Alright. Have a nice evening!", zh: "好的。祝你晚上愉快！" },
            { speaker: "Male", text: "¡Gracias! ¡Hasta mañana!", en: "Thanks! See you tomorrow!", zh: "謝謝！明天見！" },
            { speaker: "Female", text: "¡Hasta pronto! ¡Adiós!", en: "See you soon! Goodbye!", zh: "回頭見！再見！" },
            { speaker: "Male", text: "¡Chao chao!", en: "Bye bye!", zh: "掰掰！" }
          ]
        }
      ]
    },
    {
      topicId: 2,
      topic: "🙋‍♀️ Names, Origins & What You Do",
      topic_zh: "🙋‍♀️ 名字、出身與在做什麼/工作",
      scenes: [
        // Day 1 – First introductions (casual)
        {
          sceneId: 1,
          scene: "Day 1 – First introductions (casual)",
          scene_zh: "第 1 天 – 初次見面（非正式）",
          dialogue: [
            { speaker: "Female", text: "¡Hola! Buenos días.", en: "Hi! Good morning.", zh: "嗨！早安。" },
            { speaker: "Male", text: "¡Buenos días! ¿Cómo te llamas?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Me llamo Emily. ¿Y tú?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Me llamo Carlos.", en: "My name is Carlos.", zh: "我叫 Carlos。" },
            { speaker: "Female", text: "Mucho gusto, Carlos.", en: "Nice to meet you, Carlos.", zh: "幸會，Carlos。" },
            { speaker: "Male", text: "El gusto es mío, Emily.", en: "The pleasure is mine, Emily.", zh: "我也很高興，Emily。" },
            { speaker: "Female", text: "¿Eres de aquí?", en: "Are you from here?", zh: "你是這裡人嗎？" },
            { speaker: "Male", text: "Sí, soy de Madrid. ¿De dónde eres?", en: "Yes, I’m from Madrid. Where are you from?", zh: "對，我來自馬德里。你來自哪裡？" },
            { speaker: "Female", text: "Soy de Estados Unidos, de California.", en: "I’m from the United States, from California.", zh: "我來自美國，加州。" },
            { speaker: "Male", text: "¡Qué bien! ¿Vives aquí ahora?", en: "Nice! Do you live here now?", zh: "不錯！你現在住這裡嗎？" },
            { speaker: "Female", text: "No, me quedo cerca del centro por unos días.", en: "No, I’m staying near the center for a few days.", zh: "沒有，我在市中心附近住幾天。" },
            { speaker: "Male", text: "Perfecto. ¡Hasta luego!", en: "Perfect. See you later!", zh: "太好了。待會見！" }
          ]
        },

        // Day 2 – Formal introductions (reception)
        {
          sceneId: 2,
          scene: "Day 2 – Formal introductions (reception)",
          scene_zh: "第 2 天 – 正式介紹（櫃台）",
          dialogue: [
            { speaker: "Female", text: "Buenos días, señor. ¿Cómo se llama?", en: "Good morning, sir. What’s your name?", zh: "早安，先生。您貴姓？" },
            { speaker: "Male", text: "Buenos días. Me llamo Carlos Gómez.", en: "Good morning. My name is Carlos Gómez.", zh: "早安。我叫 Carlos Gómez。" },
            { speaker: "Female", text: "Mucho gusto, señor Gómez.", en: "Nice to meet you, Mr. Gómez.", zh: "幸會，Gómez 先生。" },
            { speaker: "Male", text: "El gusto es mío. ¿Usted es la señorita Laura?", en: "The pleasure is mine. Are you Miss Laura?", zh: "我也很高興。您是 Laura 小姐嗎？" },
            { speaker: "Female", text: "Sí, soy Laura Pérez.", en: "Yes, I’m Laura Pérez.", zh: "是的，我是 Laura Pérez。" },
            { speaker: "Male", text: "Encantado, señora Pérez.", en: "Nice to meet you, Ms. Pérez.", zh: "很高興認識您，Pérez 女士。" },
            { speaker: "Female", text: "Con permiso, ¿puede firmar aquí, por favor?", en: "Excuse me, can you sign here, please?", zh: "不好意思，請您在這裡簽名，好嗎？" },
            { speaker: "Male", text: "Claro. Aquí tiene.", en: "Of course. Here you go.", zh: "當然。給您。" },
            { speaker: "Female", text: "Muchas gracias. ¿De dónde es usted?", en: "Thank you very much. Where are you from?", zh: "非常感謝。您來自哪裡？" },
            { speaker: "Male", text: "Soy de Bogotá, pero vivo en Madrid.", en: "I’m from Bogotá, but I live in Madrid.", zh: "我來自波哥大，但住在馬德里。" },
            { speaker: "Female", text: "Perfecto. Bienvenido. ¡Que tenga un buen día!", en: "Perfect. Welcome. Have a nice day!", zh: "太好了。歡迎您。祝您今天愉快！" },
            { speaker: "Male", text: "Gracias, igualmente. Hasta luego.", en: "Thanks, same to you. See you later.", zh: "謝謝，您也是。待會見。" }
          ]
        },

        // Day 3 – Where are you from & where do you live?
        {
          sceneId: 3,
          scene: "Day 3 – Where are you from & where do you live?",
          scene_zh: "第 3 天 – 你來自哪裡／住在哪裡？",
          dialogue: [
            { speaker: "Female", text: "Hola, ¿de dónde eres?", en: "Hi, where are you from?", zh: "嗨，你來自哪裡？" },
            { speaker: "Male", text: "Soy de Chile. ¿Y tú?", en: "I’m from Chile. And you?", zh: "我來自智利。你呢？" },
            { speaker: "Female", text: "Vengo de México; ahora vivo en Barcelona.", en: "I come from Mexico; now I live in Barcelona.", zh: "我來自墨西哥；現在住在巴塞隆納。" },
            { speaker: "Male", text: "Ah, qué bonito. Yo vivo en Madrid.", en: "Oh, how nice. I live in Madrid.", zh: "哇，不錯。我住在馬德里。" },
            { speaker: "Female", text: "¿Te gusta Madrid?", en: "Do you like Madrid?", zh: "你喜歡馬德里嗎？" },
            { speaker: "Male", text: "Sí, mucho. ¿Y Barcelona?", en: "Yes, a lot. And Barcelona?", zh: "是，非常喜歡。那巴塞隆納呢？" },
            { speaker: "Female", text: "También me gusta. ¿En qué barrio vives?", en: "I like it too. Which neighborhood do you live in?", zh: "我也喜歡。你住在哪個社區？" },
            { speaker: "Male", text: "Vivo en Lavapiés. ¿Y tú?", en: "I live in Lavapiés. And you?", zh: "我住在 Lavapiés。你呢？" },
            { speaker: "Female", text: "Vivo en Gràcia, cerca del metro.", en: "I live in Gràcia, near the metro.", zh: "我住在 Gràcia，靠近地鐵站。" },
            { speaker: "Male", text: "¿Vienes por vacaciones o trabajas aquí?", en: "Are you here on vacation or do you work here?", zh: "你是來度假，還是在這裡工作？" },
            { speaker: "Female", text: "Trabajo aquí, soy profesora.", en: "I work here; I’m a teacher.", zh: "我在這裡工作；我是老師。" },
            { speaker: "Male", text: "Yo soy ingeniero. ¡Encantado de conocerte!", en: "I’m an engineer. Nice to meet you!", zh: "我是工程師。很高興認識你！" }
          ]
        },

        // Day 4 – Madrid hotel lobby: greetings, names & origin
        {
          sceneId: 4,
          scene: "Day 4 – Madrid hotel lobby: greetings, names & origin",
          scene_zh: "第 4 天 – 馬德里飯店大廳：打招呼、名字與來自哪裡",
          dialogue: [
            { speaker: "Female", text: "¡Buenos días!", en: "Good morning!", zh: "早安！" },
            { speaker: "Male", text: "¡Buenos días! ¿Cómo te llamas?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Female", text: "Me llamo Emily. ¿Y tú?", en: "My name is Emily. And you?", zh: "我叫 Emily。你呢？" },
            { speaker: "Male", text: "Soy Carlos. Mucho gusto.", en: "I’m Carlos. Nice to meet you.", zh: "我是 Carlos。幸會。" },
            { speaker: "Female", text: "Mucho gusto, Carlos. ¿Eres de Madrid?", en: "Nice to meet you, Carlos. Are you from Madrid?", zh: "幸會，Carlos。你是馬德里人嗎？" },
            { speaker: "Male", text: "Sí, soy de aquí. ¿De dónde eres?", en: "Yes, I’m from here. Where are you from?", zh: "是的，我在地人。你來自哪裡？" },
            { speaker: "Female", text: "Soy de Estados Unidos. Vivo en California.", en: "I’m from the United States. I live in California.", zh: "我來自美國，住在加州。" },
            { speaker: "Male", text: "¡Qué bien! ¿Te quedas cerca del centro?", en: "Nice! Are you staying near the center?", zh: "太好了！你住在市中心附近嗎？" },
            { speaker: "Female", text: "Sí, en el Hotel Sol Central, a dos minutos de la Puerta del Sol.", en: "Yes, at Hotel Sol Central, two minutes from Puerta del Sol.", zh: "是的，住在 Sol Central 飯店，離太陽門廣場走路兩分鐘。" },
            { speaker: "Male", text: "Perfecto. ¿Cuántos días te quedas en Madrid?", en: "Perfect. How many days are you staying in Madrid?", zh: "太好了。你在馬德里待幾天？" },
            { speaker: "Female", text: "Cuatro días. Hoy solo descanso un poco.", en: "Four days. Today I’m just resting a bit.", zh: "四天。今天先休息一下。" },
            { speaker: "Male", text: "Entiendo. Bienvenida y que tengas una buena estancia.", en: "I understand. Welcome and have a nice stay.", zh: "了解。歡迎你，祝你入住愉快。" },
            { speaker: "Female", text: "Gracias, Carlos. ¡Nos vemos luego!", en: "Thanks, Carlos. See you later!", zh: "謝謝你，Carlos。待會見！" }
          ]
        },

        // Day 5 – Café by Puerta del Sol: where you’re from & where you stay
        {
          sceneId: 5,
          scene: "Day 5 – Café by Puerta del Sol: where you’re from & where you stay",
          scene_zh: "第 5 天 – 太陽門咖啡館：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "¡Hola, Emily! ¿Cómo estás hoy?", en: "Hi, Emily! How are you today?", zh: "嗨，Emily！今天好嗎？" },
            { speaker: "Female", text: "Muy bien, gracias. ¿Y tú, Carlos?", en: "Very well, thanks. And you, Carlos?", zh: "很好，謝謝。你呢，Carlos？" },
            { speaker: "Male", text: "Bien también. ¿Sigues en el Hotel Sol Central?", en: "Good too. Are you still at Hotel Sol Central?", zh: "也不錯。你還住在 Sol Central 嗎？" },
            { speaker: "Female", text: "Sí, me gusta porque está muy cerca del metro.", en: "Yes, I like it because it’s very close to the metro.", zh: "是的，我喜歡它離地鐵很近。" },
            { speaker: "Male", text: "Genial. ¿De qué ciudad de Estados Unidos eres?", en: "Great. What city in the U.S. are you from?", zh: "太好了。你在美國哪個城市？" },
            { speaker: "Female", text: "Vengo de Los Ángeles, pero ahora vivo en el norte de California.", en: "I come from Los Angeles, but now I live in Northern California.", zh: "我來自洛杉磯，不過現在住在加州北部。" },
            { speaker: "Male", text: "Interesante. ¿Qué plan tienes esta tarde?", en: "Interesting. What’s your plan this afternoon?", zh: "有意思。你今天下午有什麼計畫？" },
            { speaker: "Female", text: "Caminar por el centro y visitar la Plaza Mayor.", en: "Walk around downtown and visit Plaza Mayor.", zh: "在市中心走走，去主廣場。" },
            { speaker: "Male", text: "Buen plan. Si necesitas ayuda, dime.", en: "Good plan. If you need help, tell me.", zh: "不錯的計畫。需要幫忙就跟我說。" },
            { speaker: "Female", text: "Gracias. Por cierto, ¿cómo te llamas completo?", en: "Thanks. By the way, what’s your full name?", zh: "謝謝。對了，你的全名是什麼？" },
            { speaker: "Male", text: "Carlos García. Mucho gusto otra vez.", en: "Carlos García. Nice to meet you again.", zh: "Carlos García。再次幸會。" },
            { speaker: "Female", text: "Encantada, Carlos García. ¡Nos vemos esta noche!", en: "Nice to meet you, Carlos García. See you tonight!", zh: "很高興認識你，Carlos García。今晚見！" }
          ]
        },

        // Day 6 – Retiro park: what you do & what you’re doing now
        {
          sceneId: 6,
          scene: "Day 6 – Retiro park: what you do & what you’re doing now",
          scene_zh: "第 6 天 – 雷蒂羅公園：你的工作與你現在在做什麼",
          dialogue: [
            { speaker: "Female", text: "¡Buenos días, Carlos! ¿Qué haces hoy?", en: "Good morning, Carlos! What are you doing today?", zh: "早安，Carlos！你今天在做什麼？" },
            { speaker: "Male", text: "Paseo por el Retiro. ¿Y tú?", en: "I’m strolling through Retiro Park. And you?", zh: "我在雷蒂羅公園散步。你呢？" },
            { speaker: "Female", text: "Tomo un café y leo un poco.", en: "I’m having a coffee and reading a bit.", zh: "我喝咖啡、看一下書。" },
            { speaker: "Male", text: "Suena bien. Por cierto, ¿a qué te dedicas?", en: "Sounds good. By the way, what do you do (for work)?", zh: "聽起來不錯。順便問一下，你做什麼工作？" },
            { speaker: "Female", text: "Trabajo en tecnología. ¿Y tú?", en: "I work in tech. And you?", zh: "我在科技業。你呢？" },
            { speaker: "Male", text: "Trabajo en una oficina y estudio por las tardes.", en: "I work in an office and study in the evenings.", zh: "我在辦公室上班，傍晚去念書。" },
            { speaker: "Female", text: "¡Qué interesante! ¿Vives aquí en Madrid?", en: "How interesting! Do you live here in Madrid?", zh: "真有趣！你住在馬德里嗎？" },
            { speaker: "Male", text: "Sí, vivo cerca de Atocha. ¿Y tú dónde te quedas ahora?", en: "Yes, I live near Atocha. And where are you staying now?", zh: "是的，我住在阿托查附近。你現在住哪裡？" },
            { speaker: "Female", text: "En el Hotel Sol Central, cerca del metro.", en: "At Hotel Sol Central, near the metro.", zh: "在 Sol Central 飯店，靠近地鐵。" },
            { speaker: "Male", text: "Perfecto para moverte por la ciudad.", en: "Perfect for getting around the city.", zh: "很適合在城裡走動。" },
            { speaker: "Female", text: "Sí. Luego voy al Museo del Prado.", en: "Yes. Later I’m going to the Prado Museum.", zh: "是啊。等一下要去普拉多博物館。" },
            { speaker: "Male", text: "¡Buen plan! Nos vemos esta noche en el lobby del hotel.", en: "Great plan! See you tonight in the hotel lobby.", zh: "好主意！今晚在飯店大廳見。" },
            { speaker: "Female", text: "De acuerdo. ¡Hasta luego!", en: "Alright. See you later!", zh: "好的。待會見！" }
          ]
        },

        // Day 7 – Hotel lobby: names & stay (+ light job)
        {
          sceneId: 7,
          scene: "Day 7 – Hotel lobby: names & stay",
          scene_zh: "第 7 天 – 飯店大廳：名字與住宿",
          dialogue: [
            { speaker: "Female", text: "¡Buenos días! ¿Cómo te llamas?", en: "Good morning! What’s your name?", zh: "早安！你叫什麼名字？" },
            { speaker: "Male", text: "Buenos días. Me llamo Carlos. ¿Y tú?", en: "Good morning. My name is Carlos. And you?", zh: "早安。我叫 Carlos。你呢？" },
            { speaker: "Female", text: "Me llamo Emily. Mucho gusto.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Encantado, Emily. ¿De dónde eres?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Soy de Estados Unidos, de California. ¿Y tú?", en: "I’m from the United States, from California. And you?", zh: "我來自美國，加州。你呢？" },
            { speaker: "Male", text: "Soy de Madrid. ¿Dónde te quedas ahora?", en: "I’m from Madrid. Where are you staying now?", zh: "我來自馬德里。你現在住哪裡？" },
            { speaker: "Female", text: "Me quedo en el Hotel Sol, cerca del centro.", en: "I’m staying at the Hotel Sol, near the center.", zh: "我住在 Sol 飯店，靠近市中心。" },
            { speaker: "Male", text: "Perfecto. ¿Qué haces hoy?", en: "Perfect. What are you doing today?", zh: "太好了。你今天在做什麼？" },
            { speaker: "Female", text: "Ahora hago el check-in y luego paseo por la plaza.", en: "Now I’m checking in and then I’ll walk around the plaza.", zh: "我先辦理入住，之後去廣場走走。" },
            { speaker: "Male", text: "Bien. Yo trabajo cerca; salgo a las seis.", en: "Good. I work nearby; I get off at six.", zh: "好。我在附近上班；六點下班。" },
            { speaker: "Female", text: "Genial. ¡Nos vemos por la tarde!", en: "Great. See you in the afternoon!", zh: "太好了。下午見！" },
            { speaker: "Male", text: "¡Hasta luego!", en: "See you later!", zh: "待會見！" }
          ]
        },

        // Day 8 – Plaza meetup: where you’re from & where you live (+ job mention)
        {
          sceneId: 8,
          scene: "Day 8 – Plaza: where you're from & live",
          scene_zh: "第 8 天 – 廣場：你來自哪裡與住在哪裡",
          dialogue: [
            { speaker: "Male", text: "¡Hola! ¿Qué tal, Emily?", en: "Hi! How’s it going, Emily?", zh: "嗨！最近如何，Emily？" },
            { speaker: "Female", text: "Muy bien, gracias. ¿Y tú, Carlos?", en: "Very well, thanks. And you, Carlos?", zh: "很好，謝謝。你呢，Carlos？" },
            { speaker: "Male", text: "Bien. Oye, ¿vives en Estados Unidos?", en: "Good. Hey, do you live in the United States?", zh: "不錯。欸，你住在美國嗎？" },
            { speaker: "Female", text: "Sí, vivo en San Diego, en California.", en: "Yes, I live in San Diego, in California.", zh: "對，我住在加州的聖地牙哥。" },
            { speaker: "Male", text: "Yo vivo en Madrid, cerca del parque.", en: "I live in Madrid, near the park.", zh: "我住在馬德里，公園附近。" },
            { speaker: "Female", text: "¿Y de dónde es tu familia?", en: "And where is your family from?", zh: "那你的家人來自哪裡？" },
            { speaker: "Male", text: "Mi familia es de Valencia.", en: "My family is from Valencia.", zh: "我家人來自瓦倫西亞。" },
            { speaker: "Female", text: "¿A qué te dedicas?", en: "What do you do (for work)?", zh: "你的工作是什麼？" },
            { speaker: "Male", text: "Soy diseñador y trabajo en el centro.", en: "I’m a designer and I work downtown.", zh: "我是設計師，在市中心上班。" },
            { speaker: "Female", text: "Interesante. Yo trabajo en tecnología.", en: "Interesting. I work in tech.", zh: "有意思。我在科技業。" },
            { speaker: "Male", text: "Perfecto. Tomemos un café y seguimos hablando.", en: "Perfect. Let’s have a coffee and keep talking.", zh: "太好了。我們喝杯咖啡再聊。" },
            { speaker: "Female", text: "Claro. Gracias por la invitación.", en: "Sure. Thanks for the invitation.", zh: "好的。謝謝邀請。" }
          ]
        },

        // Day 9 – Class circle: names, origins, where staying (+ after-class plan)
        {
          sceneId: 9,
          scene: "Day 9 – Class circle: names & where from",
          scene_zh: "第 9 天 – 語言課：自我介紹",
          dialogue: [
            { speaker: "Female", text: "Buenas tardes. Me llamo Emily.", en: "Good afternoon. My name is Emily.", zh: "午安。我叫 Emily。" },
            { speaker: "Male", text: "Mucho gusto, Emily. Yo soy Daniel.", en: "Nice to meet you, Emily. I’m Daniel.", zh: "幸會，Emily。我是 Daniel。" },
            { speaker: "Female", text: "Encantada, Daniel. ¿De dónde eres?", en: "Nice to meet you, Daniel. Where are you from?", zh: "很高興認識你，Daniel。你來自哪裡？" },
            { speaker: "Male", text: "Soy de Boston, en Estados Unidos. ¿Y tú?", en: "I’m from Boston, in the United States. And you?", zh: "我來自美國波士頓。你呢？" },
            { speaker: "Female", text: "Soy de California. Vivo en San Diego.", en: "I’m from California. I live in San Diego.", zh: "我來自加州，住在聖地牙哥。" },
            { speaker: "Male", text: "¿Dónde te quedas ahora en Madrid?", en: "Where are you staying now in Madrid?", zh: "你現在在馬德里住在哪裡？" },
            { speaker: "Female", text: "Me quedo en un hotel cerca de Atocha.", en: "I’m staying in a hotel near Atocha.", zh: "我住在阿托查附近的一家飯店。" },
            { speaker: "Male", text: "Qué bien. Yo me quedo en un apartamento pequeño.", en: "Nice. I’m staying in a small apartment.", zh: "不錯。我住在一間小公寓。" },
            { speaker: "Female", text: "¿Qué haces después de clase?", en: "What are you doing after class?", zh: "下課之後你要做什麼？" },
            { speaker: "Male", text: "Voy al museo y luego ceno con amigos.", en: "I’m going to the museum and then having dinner with friends.", zh: "我要去博物館，之後和朋友吃晚餐。" },
            { speaker: "Female", text: "Perfecto. ¡Nos vemos mañana!", en: "Perfect. See you tomorrow!", zh: "太好了。明天見！" },
            { speaker: "Male", text: "¡Hasta mañana! Gracias por la charla.", en: "See you tomorrow! Thanks for the chat.", zh: "明天見！謝謝聊天。" }
          ]
        },

        // Day 10 – Train to Sevilla: quick intro + where staying + what doing now
        {
          sceneId: 10,
          scene: "Day 10 – Train: quick intro & plans",
          scene_zh: "第 10 天 – 火車上：快速認識與行程",
          dialogue: [
            { speaker: "Female", text: "Perdón, ¿este asiento está libre?", en: "Excuse me, is this seat free?", zh: "不好意思，這個位子有人嗎？" },
            { speaker: "Male", text: "Sí, por favor. Soy Luis. ¿Cómo te llamas?", en: "Yes, please. I’m Luis. What’s your name?", zh: "請坐。我是 Luis。你叫什麼名字？" },
            { speaker: "Female", text: "Me llamo Emily. Encantada.", en: "My name is Emily. Nice to meet you.", zh: "我叫 Emily。很高興認識你。" },
            { speaker: "Male", text: "Encantado, Emily. ¿De dónde eres?", en: "Nice to meet you, Emily. Where are you from?", zh: "很高興認識你，Emily。你來自哪裡？" },
            { speaker: "Female", text: "Soy de Estados Unidos. ¿Y tú?", en: "I’m from the United States. And you?", zh: "我來自美國。你呢？" },
            { speaker: "Male", text: "Soy de Sevilla. ¿Dónde te quedas allí?", en: "I’m from Seville. Where are you staying there?", zh: "我來自塞維亞。你到那邊住哪裡？" },
            { speaker: "Female", text: "Me quedo en un hotel cerca de la estación.", en: "I’m staying at a hotel near the station.", zh: "我住在車站附近的一家飯店。" },
            { speaker: "Male", text: "Perfecto. ¿Qué haces ahora en el tren?", en: "Perfect. What are you doing now on the train?", zh: "太好了。你現在在火車上做什麼呢？" },
            { speaker: "Female", text: "Leo un poco y escucho música.", en: "I’m reading a bit and listening to music.", zh: "我看看書、聽聽音樂。" },
            { speaker: "Male", text: "Muy bien. Yo reviso correos del trabajo.", en: "Very good. I’m checking work emails.", zh: "很好。我在看工作郵件。" },
            { speaker: "Female", text: "Qué productivo. ¡Buen viaje!", en: "So productive. Have a good trip!", zh: "很有效率。旅途愉快！" },
            { speaker: "Male", text: "Gracias. ¡Hasta luego!", en: "Thanks. See you later!", zh: "謝謝。待會見！" }
          ]
        }
      ]
    }
  ]
};
