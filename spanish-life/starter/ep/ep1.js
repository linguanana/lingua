const episodeData = {
  ep_title: "ep",
  episodeId: 1,
  episode: "🇪🇸 Episode – Spanish Starter Dialogues",
  episode_zh: "🇪🇸 特別篇 - 西班牙語入門對話",
  toggle_title: "Scenes",
  voice: "es-ES",
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
            { speaker: "F", text: "¡Buenos días!", en: "Good morning!", zh: "早安！" },
            { speaker: "M", text: "¡Buenos días! ¿Cómo estás?", en: "Good morning! How are you?", zh: "早安！你好吗？" },
            { speaker: "F", text: "Estoy bien, gracias. ¿Y tú?", en: "I’m fine, thanks. And you?", zh: "我很好，谢谢。你呢？" },
            { speaker: "M", text: "Muy bien también.", en: "Very well too.", zh: "我也很好。" },
            { speaker: "F", text: "Me alegro.", en: "I’m glad.", zh: "我很高兴。" },
            { speaker: "M", text: "Que tengas un buen día.", en: "Have a good day.", zh: "祝你有美好的一天。" },
            { speaker: "F", text: "Gracias, igualmente.", en: "Thanks, same to you.", zh: "谢谢，你也是。" },
            { speaker: "M", text: "Hasta luego.", en: "See you later.", zh: "待会见。" },
            { speaker: "F", text: "Adiós.", en: "Goodbye.", zh: "再见。" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Evening greeting",
          scene_zh: "第2天 – 晚上打招呼",
          dialogue: [
            { speaker: "M", text: "¡Buenas tardes!", en: "Good afternoon!", zh: "午安！" },
            { speaker: "F", text: "¡Buenas tardes! ¿Cómo te va?", en: "Good afternoon! How’s it going?", zh: "午安！过得怎么样？" },
            { speaker: "M", text: "Más o menos, un poco cansado.", en: "So-so, a bit tired.", zh: "马马虎虎，有点累。" },
            { speaker: "F", text: "Lo siento. ¿Quieres un café?", en: "I’m sorry. Do you want a coffee?", zh: "真不好意思。要喝咖啡吗？" },
            { speaker: "M", text: "Sí, por favor.", en: "Yes, please.", zh: "好的，请。" },
            { speaker: "F", text: "Aquí tienes.", en: "Here you go.", zh: "给你。" },
            { speaker: "M", text: "Muchas gracias.", en: "Thanks a lot.", zh: "非常谢谢。" },
            { speaker: "F", text: "De nada.", en: "You’re welcome.", zh: "不客气。" },
            { speaker: "M", text: "Hasta mañana.", en: "See you tomorrow.", zh: "明天见。" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Asking how someone is",
          scene_zh: "第3天 – 询问近况",
          dialogue: [
            { speaker: "F", text: "Hola, ¿qué tal?", en: "Hi, how’s it going?", zh: "嗨，你好吗？" },
            { speaker: "M", text: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?", zh: "很好，谢谢。你呢？" },
            { speaker: "F", text: "Regular. Un poco ocupada.", en: "So-so. A bit busy.", zh: "一般般。有点忙。" },
            { speaker: "M", text: "Ah, lo entiendo.", en: "Ah, I understand.", zh: "啊，我懂了。" },
            { speaker: "F", text: "Pero estoy contenta.", en: "But I’m happy.", zh: "不过我很开心。" },
            { speaker: "M", text: "Me alegro mucho.", en: "I’m very glad.", zh: "我很高兴。" },
            { speaker: "F", text: "Gracias. Eres amable.", en: "Thanks. You’re kind.", zh: "谢谢，你人真好。" },
            { speaker: "M", text: "De nada. ¡Hasta pronto!", en: "You’re welcome. See you soon!", zh: "不客气。回头见！" },
            { speaker: "F", text: "Chao.", en: "Bye.", zh: "拜拜。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Saying sorry",
          scene_zh: "第4天 – 道歉",
          dialogue: [
            { speaker: "M", text: "Perdón, perdón.", en: "Sorry, sorry.", zh: "对不起，对不起。" },
            { speaker: "F", text: "No pasa nada.", en: "It’s okay.", zh: "没关系。" },
            { speaker: "M", text: "Lo siento, choqué contigo.", en: "I’m sorry, I bumped into you.", zh: "不好意思，我撞到你了。" },
            { speaker: "F", text: "Tranquilo, está bien.", en: "Don’t worry, it’s fine.", zh: "别担心，没事的。" },
            { speaker: "M", text: "Gracias por tu paciencia.", en: "Thanks for your patience.", zh: "谢谢你的体谅。" },
            { speaker: "F", text: "Claro, de nada.", en: "Of course, you’re welcome.", zh: "当然，不客气。" },
            { speaker: "M", text: "Que tengas una buena noche.", en: "Have a good night.", zh: "祝你晚安。" },
            { speaker: "F", text: "Igualmente. Buenas noches.", en: "Same to you. Good night.", zh: "你也是。晚安。" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Asking for help",
          scene_zh: "第5天 – 请求帮忙",
          dialogue: [
            { speaker: "F", text: "Disculpe, ¿puede ayudarme?", en: "Excuse me, can you help me?", zh: "不好意思，可以帮我吗？" },
            { speaker: "M", text: "Sí, claro. ¿Qué pasa?", en: "Yes, of course. What’s wrong?", zh: "好的，当然。怎么了？" },
            { speaker: "F", text: "Busco la estación.", en: "I’m looking for the station.", zh: "我在找车站。" },
            { speaker: "M", text: "Está cerca, a la derecha.", en: "It’s nearby, to the right.", zh: "就在附近，往右走。" },
            { speaker: "F", text: "Ah, perfecto. Muchas gracias.", en: "Ah, perfect. Thank you very much.", zh: "啊，太好了。非常谢谢你。" },
            { speaker: "M", text: "De nada, con gusto.", en: "You’re welcome, with pleasure.", zh: "不客气，很乐意。" },
            { speaker: "F", text: "Hasta luego.", en: "See you later.", zh: "待会见。" },
            { speaker: "M", text: "Adiós.", en: "Goodbye.", zh: "再见。" }
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
          scene: "Day 9 – Asking the time",
          scene_zh: "第 9 天 — 問時間",
          dialogue: [
            { speaker: "Male", text: "Perdón, ¿qué hora es?", en: "Excuse me, what time is it?", zh: "不好意思，現在幾點？" },
            { speaker: "Female", text: "Son las tres.", en: "It’s three o’clock.", zh: "三點。" },
            { speaker: "Male", text: "Gracias.", en: "Thank you.", zh: "謝謝。" },
            { speaker: "Female", text: "De nada.", en: "You’re welcome.", zh: "不客氣。" },
            { speaker: "Male", text: "Lo siento, tengo prisa.", en: "Sorry, I’m in a hurry.", zh: "抱歉，我趕時間。" },
            { speaker: "Female", text: "Está bien, ¡hasta luego!", en: "Alright, see you later!", zh: "好的，待會見！" },
            { speaker: "Male", text: "¡Hasta pronto! ¡Chao!", en: "See you soon! Bye!", zh: "回頭見！掰！" },
            { speaker: "Female", text: "¡Chao!", en: "Bye!", zh: "掰掰！" }
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
    }
  ]
}
