// mod/es-mod1.js — Spanish Module 1 (Lessons 1–8)
const moduleData = {
  moduleId: "1",
  title: "Module 1 – Saludos",
  title_zh: "模組 1 – 打招呼（西班牙語）",
  voice: "es-ES",
  lessons: [
    // ===== Lesson 1 =====
    {
      lessonId: 1,
      title: "Lección 1 – ¡Hola! Misión en el mercado",
      theme: "Greetings in everyday Spanish",
      theme_zh: "日常西班牙語的問候語",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0+): Say Hello!",
          title_zh: "第一級（A0+）: 打招呼！",
          keyPhrases: [
            { text: "¡Hola!", en: "Hi / Hello!", zh: "嗨／你好" },
            { text: "Buenos días", en: "Good morning", zh: "早安／你好" },
            { text: "Buenas tardes", en: "Good afternoon / evening (early)", zh: "午安／傍晚好" },
            { text: "Buenas noches", en: "Good evening / Good night", zh: "晚上好／晚安" },
            { text: "¿Qué tal?", en: "How’s it going?", zh: "怎麼樣？／最近如何？" }
          ],
          dialogues: [
            { speaker: "Female", when: "Talking to friends or classmates", text: "¡Hola!", en: "Hi!", zh: "嗨！" },
            { speaker: "Female", when: "Morning at a hotel or store", text: "Buenos días", en: "Good morning", zh: "早安" },
            { speaker: "Female", when: "Early evening at a restaurant", text: "Buenas tardes", en: "Good afternoon/evening", zh: "午安／傍晚好" },
            { speaker: "Female", when: "Night greeting or farewell", text: "Buenas noches", en: "Good evening / Good night", zh: "晚上好／晚安" },
            { speaker: "Female", when: "Casual check-in", text: "¿Qué tal?", en: "How’s it going?", zh: "最近如何？" },
            { speaker: "Female", when: "Greeting a group", text: "¡Hola a todos!", en: "Hi everyone!", zh: "大家好！" }
          ],
          tips: [
            { en: "Use **¡Hola!** any time of day.", zh: "**¡Hola!** 一整天都可以用。" },
            { en: "**Buenos días** ≈ until about 12–1 p.m.; **Buenas tardes** ≈ until sunset; **Buenas noches** after dark or before bed.", zh: "**Buenos días** 約到中午；**Buenas tardes** 到黃昏；**Buenas noches** 入夜或睡前。" },
            { en: "**¿Qué tal?** is neutral and friendly.", zh: "**¿Qué tal?** 中性且友善。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0+): More Greetings & Goodbyes",
          title_zh: "第二級（A0+）: 更多問候與道別",
          keyPhrases: [
            { text: "Encantado / Encantada", en: "Nice to meet you (m./f.)", zh: "很高興認識你（男／女說法）" },
            { text: "Mucho gusto", en: "Pleased to meet you", zh: "幸會／很高興認識你" },
            { text: "Hasta luego", en: "See you later", zh: "待會見" },
            { text: "Hasta pronto", en: "See you soon", zh: "很快再見" },
            { text: "Hasta mañana", en: "See you tomorrow", zh: "明天見" },
            { text: "Adiós", en: "Goodbye", zh: "再見" }
          ],
          dialogues: [
            { speaker: "Female", when: "First meeting (female speaker)", text: "Encantada", en: "Nice to meet you", zh: "很高興認識你（女）" },
            { speaker: "Male", when: "First meeting (male speaker)", text: "Encantado", en: "Nice to meet you", zh: "很高興認識你（男）" },
            { speaker: "Female", when: "General polite intro", text: "Mucho gusto", en: "Pleased to meet you", zh: "幸會" },
            { speaker: "Female", when: "Leaving for later", text: "Hasta luego", en: "See you later", zh: "待會見" },
            { speaker: "Female", when: "Leaving soon", text: "Hasta pronto", en: "See you soon", zh: "很快再見" },
            { speaker: "Female", when: "Tomorrow", text: "Hasta mañana", en: "See you tomorrow", zh: "明天見" },
            { speaker: "Female", when: "Formal or final bye", text: "Adiós", en: "Goodbye", zh: "再見" }
          ],
          tips: [
            { en: "**Encantado**/**Encantada** agree with the speaker: -o (male), -a (female).", zh: "**Encantado/Encantada** 與說話者性別一致。男用 -o，女用 -a。" },
            { en: "**Hasta luego** vs. **Hasta pronto**: later vs. soon.", zh: "**Hasta luego**= 等會兒；**Hasta pronto**= 很快。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0+): Even More Ways to Say Goodbye",
          title_zh: "第三級（A0+）: 更多道別方式",
          keyPhrases: [],
          dialogues: [
            { speaker: "Female", when: "Wrapping up a conversation", text: "Nos vemos", en: "See you", zh: "到時見" },
            { speaker: "Female", when: "Meeting again soon", text: "Nos vemos pronto", en: "See you soon", zh: "很快再見" },
            { speaker: "Female", when: "Very soon", text: "Hasta ya mismo", en: "See you very soon", zh: "馬上見" },
            { speaker: "Female", when: "Evening farewell", text: "Que tengas buena tarde", en: "Have a nice afternoon", zh: "祝你午后愉快" },
            { speaker: "Female", when: "Daytime farewell", text: "Que tengas buen día", en: "Have a good day", zh: "祝你今天愉快" },
            { speaker: "Female", when: "Next time", text: "Hasta la próxima", en: "Until next time", zh: "下次見" }
          ],
          tips: [
            { en: "**Nos vemos** is common for in-person plans.", zh: "**Nos vemos** 常用於之後會見面的情況。" },
            { en: "Use **Que tengas + [buen día]** to wish someone well.", zh: "用 **Que tengas + [buen día]** 祝福對方。" }
          ]
        }
      ]
    },

    // ===== Lesson 2 =====
    {
      lessonId: 2,
      title: "Lección 2 – ¿Cómo estás? Misión en el mercado",
      theme: "How are you? Feelings and responses",
      theme_zh: "你好嗎？感受與回應",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0+): Ask 'How are you?'",
          title_zh: "第一級（A0+）: 詢問『你最近好嗎？』",
          keyPhrases: [
            { text: "¿Cómo estás?", en: "How are you? (informal)", zh: "你最近好嗎？（非正式）" },
            { text: "¿Cómo está?", en: "How are you? (formal)", zh: "您好嗎？（正式）" },
            { text: "¿Qué tal?", en: "How’s it going?", zh: "最近如何？" },
            { text: "Bien", en: "Good / Fine", zh: "很好" },
            { text: "Así así / Más o menos", en: "So-so", zh: "普普通通／馬馬虎虎" }
          ],
          dialogues: [
            { speaker: "Female", when: "Greeting a friend casually", text: "¿Cómo estás?", en: "How are you?", zh: "你好嗎？" },
            { speaker: "Female", when: "Talking to a teacher or someone older", text: "¿Cómo está?", en: "How are you? (formal)", zh: "您好嗎？（正式）" },
            { speaker: "Female", when: "Neutral and common", text: "¿Qué tal?", en: "How’s it going?", zh: "最近如何？" },
            { speaker: "Female", when: "Feeling good", text: "Bien", en: "Good.", zh: "很好。" },
            { speaker: "Female", when: "Feeling so-so", text: "Más o menos", en: "So-so.", zh: "馬馬虎虎。" },
            { speaker: "Female", when: "Not feeling great", text: "No muy bien", en: "Not so good.", zh: "不太好。" }
          ],
          tips: [
            { en: "Reply with **Estoy bien** = I’m fine; **Muy bien** = very well.", zh: "可回覆 **Estoy bien**（我很好）；**Muy bien**（非常好）。" },
            { en: "**Estoy** comes from **estar** (to be/feel).", zh: "**Estoy** 來自動詞 **estar**（描述狀態）。" },
            { en: "**Así así** and **Más o menos** both mean ‘so-so’.", zh: "**Así así** 與 **Más o menos** 都是「普普通通」。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0): Answer 'How are you?'",
          title_zh: "第二級（A0）: 回答『你最近好嗎？』",
          keyPhrases: [
            { text: "¡Estoy genial!", en: "I’m great!", zh: "我非常好！" },
            { text: "Estoy cansado / cansada", en: "I’m tired (m./f.)", zh: "我累了（男／女）" },
            { text: "No muy bien", en: "Not very well", zh: "不太好" },
            { text: "¿Y tú?", en: "And you? (informal)", zh: "你呢？（非正式）" },
            { text: "¿Y usted?", en: "And you? (formal)", zh: "您呢？（正式）" }
          ],
          dialogues: [
            { speaker: "Female", text: "¡Hola! ¿Cómo estás hoy?", en: "Hi! How are you today?", zh: "嗨！你今天好嗎？" },
            { speaker: "Male", text: "¡Estoy genial! Terminé mis vacaciones. ¿Y tú?", en: "I’m great! I finished my vacation. And you?", zh: "我超好！剛放完假。你呢？" },
            { speaker: "Female", text: "Más o menos. Tengo mucho trabajo.", en: "So-so. I have a lot of work.", zh: "普普通通。工作很多。" },
            { speaker: "Male", text: "Ya veo. Yo estoy cansado hoy.", en: "I see. I’m tired today.", zh: "了解。我今天很累。" },
            { speaker: "Female", text: "Entonces no muy bien. ¿Quieres un café?", en: "Then not very well. Do you want a coffee?", zh: "那就不太好。要喝咖啡嗎？" },
            { speaker: "Male", text: "¡Sí, gracias! Un café me ayudará.", en: "Yes, thanks! A coffee will help.", zh: "好啊，謝謝！咖啡會有幫助。" }
          ],
          tips: [
            { en: "Use **Estoy genial** when you feel great.", zh: "感覺超好時用 **Estoy genial**。" },
            { en: "**Cansado** (m.) / **cansada** (f.) agree with the speaker.", zh: "**Cansado**（男）/ **Cansada**（女）要與說話者性別一致。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0): More feelings & everyday responses",
          title_zh: "第三級（A0）: 更多感受與日常回應",
          keyPhrases: [
            { text: "Estoy muy bien", en: "I’m very well", zh: "我非常好" },
            { text: "Estoy mal", en: "I’m not well / I feel bad", zh: "我不好／不舒服" },
            { text: "Estoy enfermo / enferma", en: "I’m sick (m./f.)", zh: "我生病了（男／女）" },
            { text: "Tengo hambre", en: "I’m hungry", zh: "我餓了" },
            { text: "Tengo sueño", en: "I’m sleepy", zh: "我想睡覺" },
            { text: "Regular", en: "So-so / Not great", zh: "普通／不太好" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿Cómo estás hoy?", en: "How are you today?", zh: "你今天好嗎？" },
            { speaker: "Male", text: "Estoy muy bien, gracias.", en: "I’m very well, thanks.", zh: "我非常好，謝謝。" },
            { speaker: "Female", text: "Yo regular, mucho trabajo.", en: "So-so, lots of work.", zh: "普通，工作很多。" },
            { speaker: "Male", text: "Yo estoy enfermo hoy.", en: "I’m sick today.", zh: "我今天生病了。" },
            { speaker: "Female", text: "¡Uy! Entonces, descansa.", en: "Oh! Then, rest up.", zh: "哦！那就好好休息。" },
            { speaker: "Male", text: "Sí, y tengo sueño también.", en: "Yes, and I’m sleepy too.", zh: "是的，而且我也想睡覺。" },
            { speaker: "Female", text: "Yo tengo hambre, ¿vamos a comer?", en: "I’m hungry, shall we eat?", zh: "我餓了，我們去吃飯吧？" },
            { speaker: "Male", text: "Buena idea. ¡Vamos!", en: "Good idea. Let’s go!", zh: "好主意，我們走吧！" }
          ],
          tips: [
            { en: "Use **Estoy muy bien** for strong positive feelings.", zh: "感覺非常好時可說 **Estoy muy bien**。" },
            { en: "**Estoy mal** is a simple way to say you don’t feel well.", zh: "**Estoy mal** 是表達自己狀況不好的簡單方式。" },
            { en: "**Enfermo / enferma** must match your gender.", zh: "**Enfermo / enferma** 要與自己的性別一致。" },
            { en: "Use **Tengo hambre / Tengo sueño** for physical states (hungry / sleepy).", zh: "用 **Tengo hambre / Tengo sueño** 來表達生理狀態（餓／想睡）。" },
            { en: "**Regular** is another casual reply for 'so-so'.", zh: "**Regular** 是另一個隨意的回應，意思是「普通」。" }
          ]
        }
      ]
    },

    // ===== Lesson 3 =====
    {
      lessonId: 3,
      title: "Lección 3 – ¡Sé cortés! Misión en la estación",
      theme: "Being polite and asking for help",
      theme_zh: "禮貌用語 & 請求幫忙",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Basic polite words",
          title_zh: "第一級（A0）: 基礎禮貌用語",
          keyPhrases: [
            { text: "Gracias", en: "Thank you", zh: "謝謝" },
            { text: "De nada", en: "You’re welcome", zh: "不客氣" },
            { text: "Por favor", en: "Please", zh: "請" },
            { text: "Perdón", en: "Excuse me / Sorry", zh: "不好意思／對不起" },
            { text: "Disculpe", en: "Excuse me (to get attention)", zh: "打擾一下（引起注意）" },
            { text: "Señor / Señora / Señores", en: "Sir / Ma’am / Ladies and gentlemen", zh: "先生／女士／各位先生女士" }
          ],
          dialogues: [],
          tips: [
            { en: "Use **Disculpe** to get attention; **Perdón** for small apologies or to pass.", zh: "**Disculpe** 用於引起注意；**Perdón** 用於小道歉或通過他人身旁。" },
            { en: "**Por favor** often goes at the end in Spanish.", zh: "西語中 **Por favor** 常放句尾。" },
            { en: "**Gracias** ↔ **De nada** is the classic pair (Thanks ↔ You’re welcome).", zh: "**Gracias** ↔ **De nada** 是經典搭配（謝謝 ↔ 不客氣）。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Asking for information and making requests",
          title_zh: "第二級（A1）: 詢問資訊與提出請求",
          keyPhrases: [
            { text: "¿Puedo ...?", en: "Can I ...?", zh: "我可以……嗎？" },
            { text: "¿Puede ...?", en: "Can you ...? (formal)", zh: "您可以……嗎？（正式）" },
            { text: "Quisiera ... / Me gustaría ...", en: "I would like ... (polite)", zh: "我想要……（禮貌）" },
            { text: "¿Hay ...?", en: "Is there ...?", zh: "有……嗎？" },
            { text: "¿Le / Te puedo ayudar?", en: "Can I help you? (formal / informal)", zh: "我可以幫您／你嗎？" },
            { text: "Con permiso", en: "Excuse me (to pass by / interrupt)", zh: "不好意思（通過／打斷）" },
            { text: "¿Puedo usar el baño?", en: "Can I use the bathroom?", zh: "我可以用洗手間嗎？" }
          ],
          dialogues: [
            { text: "", en: "Example 1: Asking directions", zh: "例子 1：問路 + 廁所" },
            { speaker: "Female", text: "¡Disculpe! ¿Puede ayudarme?", en: "Excuse me! Can you help me?", zh: "打擾一下！您可以幫我嗎？" },
            { speaker: "Male", text: "Sí, claro.", en: "Yes, of course.", zh: "可以，當然。" },
            { speaker: "Female", text: "¿Hay un bar cerca?", en: "Is there a bar nearby?", zh: "附近有酒吧嗎？" },
            { speaker: "Male", text: "Sí, allí a la izquierda.", en: "Yes, over there on the left.", zh: "有，在那邊左手邊。" },
            { speaker: "Female", text: "¿Puedo usar el baño?", en: "Can I use the bathroom?", zh: "我可以用洗手間嗎？" },
            { speaker: "Male", text: "Sí, al fondo del pasillo.", en: "Yes, at the end of the corridor.", zh: "可以，在走廊盡頭。" },

            { text: "", en: "Example 2: Ordering food", zh: "例子 2：點餐" },
            { speaker: "Female", text: "Con permiso. ¿Puedo sentarme aquí?", en: "Excuse me. Can I sit here?", zh: "不好意思。我可以坐這裡嗎？" },
            { speaker: "Male", text: "Sí, claro.", en: "Yes, of course.", zh: "可以，當然。" },
            { speaker: "Female", text: "Quisiera un café y un cruasán.", en: "I would like a coffee and a croissant.", zh: "我想要一杯咖啡和一個可頌。" },
            { speaker: "Male", text: "Está bien. ¿Algo más?", en: "Okay. Anything else?", zh: "好的，還要別的嗎？" },
            { speaker: "Female", text: "No, gracias. ¿Y puedo usar el baño?", en: "No, thanks. And can I use the bathroom?", zh: "不用了，謝謝。我可以用洗手間嗎？" },
            { speaker: "Male", text: "Sí, cerca de la puerta.", en: "Yes, near the door.", zh: "可以，就在門旁邊。" },

            { text: "", en: "Example 3: Shopping", zh: "例子 3：買東西" },
            { speaker: "Female", text: "Con permiso. ¿Le puedo ayudar?", en: "Excuse me. Can I help you?", zh: "不好意思。我可以幫您嗎？" },
            { speaker: "Male", text: "Sí, quisiera una botella de agua.", en: "Yes, I’d like a bottle of water.", zh: "好，我想要一瓶水。" },
            { speaker: "Female", text: "¿Hay agua con gas?", en: "Is there sparkling water?", zh: "有氣泡水嗎？" },
            { speaker: "Male", text: "Sí, hay botellas pequeñas y grandes.", en: "Yes, there are small and large bottles.", zh: "有，小瓶和大瓶。" },
            { speaker: "Female", text: "Tomo una grande, gracias.", en: "I’ll take a large one, thanks.", zh: "我要一瓶大的，謝謝。" },
            { speaker: "Male", text: "Perfecto. Son 2 euros.", en: "Perfect. That’s 2 euros.", zh: "好，兩歐元。" }
          ],
          tips: [
            { en: "Prefer **Quisiera / Me gustaría** for polite requests instead of **Quiero**.", zh: "禮貌請求用 **Quisiera / Me gustaría**，少用較直接的 **Quiero**。" },
            { en: "**¿Puedo ...?** is for your own permission; **¿Puede ...?** asks someone else to do something (formal).", zh: "**¿Puedo ...?** 用於詢問自己可否；**¿Puede ...?** 則是（正式）請對方做事。" },
            { en: "Add **por favor** to sound more polite.", zh: "加上 **por favor** 會更禮貌。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Understanding, clarifying and responding",
          title_zh: "第三級（A1）: 理解、澄清與回應",
          keyPhrases: [
            { text: "Entiendo / No entiendo", en: "I understand / I don’t understand", zh: "我懂／我不懂" },
            { text: "¿Puede repetir, por favor?", en: "Can you repeat, please?", zh: "請您再說一遍，好嗎？" },
            { text: "¿Puede hablar más despacio?", en: "Can you speak more slowly?", zh: "您可以說慢一點嗎？" },
            { text: "Lo siento", en: "I’m sorry", zh: "我很抱歉" },
            { text: "Claro", en: "Of course", zh: "當然" },
            { text: "Con gusto", en: "Gladly / With pleasure", zh: "樂意之至" }
          ],
          dialogues: [
            { speaker: "Female", text: "Disculpe, ¿hay un tren a Valencia?", en: "Excuse me, is there a train to Valencia?", zh: "不好意思，有去巴倫西亞的火車嗎？" },
            { speaker: "Male", text: "Claro, el de las 14:30 en la vía nueve.", en: "Of course, the 2:30 PM one on platform nine.", zh: "當然，下午兩點半在第九月台。" },
            { speaker: "Female", text: "Lo siento, no entiendo… ¿Puede hablar más despacio?", en: "I’m sorry, I don’t understand… Can you speak more slowly?", zh: "不好意思，我不太懂……您可以說慢一點嗎？" },
            { speaker: "Male", text: "Claro. Sale a las 14:30. Vía nueve.", en: "Of course. Leaves at 2:30. Platform nine.", zh: "好的。兩點半發車。第九月台。" },
            { speaker: "Female", text: "¿Puede repetir la vía?", en: "Can you repeat the platform?", zh: "您可以再說一次月台嗎？" },
            { speaker: "Male", text: "Vía nueve. AVE.", en: "Platform nine. AVE.", zh: "第九月台。高速列車。" },
            { speaker: "Female", text: "¡Ah! Entiendo, ¡muchas gracias!", en: "Ah! I understand, thank you very much!", zh: "啊！我懂了，非常感謝！" }
          ],
          tips: [
            { en: "Not understanding is normal. Using **¿Puede repetir?** shows you’re engaged.", zh: "聽不懂很正常。用 **¿Puede repetir?** 表示你有在聽且願意學習。" },
            { en: "**Lo siento** is for apologizing; **Perdón/Disculpe** are for getting attention or small bumps.", zh: "**Lo siento** 用於道歉；**Perdón/Disculpe** 用於引起注意或小碰撞致歉。" },
            { en: "Combine phrases: **No entiendo, lo siento**. (I don’t understand, I’m sorry.)", zh: "可以組合：**No entiendo, lo siento**。（我不懂，抱歉。）" }
          ]
        }
      ]
    },

    // ===== Lesson 4 =====
    {
      lessonId: 4,
      title: "Lección 4 – ¿Cómo te llamas?",
      title_zh: "第 4 課 – 你叫什麼名字？",
      theme: "Introduce yourself politely",
      theme_zh: "自我介紹與打招呼",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Basic name introduction",
          title_zh: "第一級（A0）: 基本名字介紹",
          keyPhrases: [
            { text: "¿Cómo te llamas?", en: "What’s your name?", zh: "你叫什麼名字？" },
            { text: "Me llamo Ana.", en: "My name is Ana.", zh: "我叫 Ana。" },
            { text: "¿Y tú?", en: "And you?", zh: "你呢？" }
          ],
          dialogues: [
            { speaker: "Female", text: "¡Hola! ¿Cómo te llamas?", en: "Hi! What’s your name?", zh: "嗨！你叫什麼名字？" },
            { speaker: "Male", text: "Me llamo Juan. ¿Y tú?", en: "My name is Juan. And you?", zh: "我叫 Juan。你呢？" },
            { speaker: "Female", text: "Me llamo Ana.", en: "My name is Ana.", zh: "我叫 Ana。" }
          ],
          tips: [
            { en: "Use **¿Cómo te llamas?** informally with friends.", zh: "和朋友時用 **¿Cómo te llamas?**。" },
            { en: "Reply with **Me llamo ...** = My name is...", zh: "回答時用 **Me llamo ...** = 我叫…" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A0): Formal version",
          title_zh: "第二級（A0）: 正式版本",
          keyPhrases: [
            { text: "¿Cómo se llama?", en: "What’s your name? (formal)", zh: "您貴姓？" },
            { text: "Me llamo María López.", en: "My name is María López.", zh: "我叫 María López。" },
            { text: "Mucho gusto", en: "Nice to meet you", zh: "幸會／很高興認識您" },
            { text: "El gusto es mío", en: "The pleasure is mine", zh: "我也很高興認識您" }
          ],
          dialogues: [
            { speaker: "Female", text: "Buenos días, ¿cómo se llama?", en: "Good morning, what’s your name?", zh: "早安，您貴姓？" },
            { speaker: "Male", text: "Me llamo María López. ¿Y usted?", en: "My name is María López. And you?", zh: "我叫 María López。您呢？" },
            { speaker: "Female", text: "Me llamo Juan Pérez. Mucho gusto.", en: "My name is Juan Pérez. Nice to meet you.", zh: "我叫 Juan Pérez。幸會！" },
            { speaker: "Male", text: "El gusto es mío.", en: "The pleasure is mine.", zh: "我也很高興。" }
          ],
          tips: [
            { en: "Use **¿Cómo se llama?** in formal contexts.", zh: "在正式場合用 **¿Cómo se llama?**。" },
            { en: "**Mucho gusto** is a standard polite greeting.", zh: "**Mucho gusto** 是標準禮貌用語。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A0): Other ways to say Nice to meet you",
          title_zh: "第三級（A0）: 說「很高興認識你」的其他方式",
          keyPhrases: [
            { text: "Encantado / Encantada", en: "Nice to meet you (m./f.)", zh: "很高興認識你（男／女）" },
            { text: "Es un placer conocerte", en: "It’s a pleasure to meet you (informal)", zh: "認識你很高興（非正式）" },
            { text: "Es un placer conocerle", en: "It’s a pleasure to meet you (formal)", zh: "認識您很高興（正式）" }
          ],
          dialogues: [
            { speaker: "Female", text: "Soy Laura.", en: "I’m Laura.", zh: "我是 Laura。" },
            { speaker: "Male", text: "Encantado.", en: "Nice to meet you.", zh: "很高興認識你。" },
            { speaker: "Female", text: "Es un placer conocerte.", en: "It’s a pleasure to meet you.", zh: "很高興認識你。" }
          ],
          tips: [
            { en: "**Encantado/Encantada** must match your gender.", zh: "**Encantado/Encantada** 要與性別一致。" },
            { en: "Use **Es un placer conocerte** informally, **conocerle** for formal.", zh: "非正式用 **Es un placer conocerte**，正式場合用 **conocerle**。" }
          ]
        }
      ]
    },

    // ===== Lesson 5 =====
    {
      lessonId: 5,
      title: "Lección 5 – ¿De dónde eres?",
      title_zh: "第 5 課 – 你來自哪裡？",
      theme: "Ask where someone is from and where they live",
      theme_zh: "詢問某人來自哪裡與住在哪裡",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A0): Ask about origin",
          title_zh: "第一級（A0）: 詢問某人來自哪裡",
          keyPhrases: [
            { text: "¿De dónde eres?", en: "Where are you from?", zh: "你來自哪裡？" },
            { text: "Soy de Madrid.", en: "I’m from Madrid.", zh: "我來自馬德里。" },
            { text: "¿Y tú?", en: "And you?", zh: "你呢？" },
            { text: "Vivo en Barcelona.", en: "I live in Barcelona.", zh: "我住在巴塞隆納。" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿De dónde eres?", en: "Where are you from?", zh: "你來自哪裡？" },
            { speaker: "Male", text: "Soy de Sevilla. ¿Y tú?", en: "I’m from Seville. And you?", zh: "我來自塞維亞。你呢？" },
            { speaker: "Female", text: "Soy de Madrid.", en: "I’m from Madrid.", zh: "我來自馬德里。" }
          ],
          tips: [
            { en: "Use **Soy de + [city]** to say where you’re from.", zh: "說自己來自哪裡時用 **Soy de + [城市]**。" },
            { en: "Use **Vivo en + [city]** to say where you live now.", zh: "現在住哪裡時用 **Vivo en + [城市]**。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Talking about country & current city",
          title_zh: "第二級（A1）: 談論國家與目前居住的城市",
          keyPhrases: [
            { text: "Vengo de México.", en: "I come from Mexico.", zh: "我來自墨西哥。" },
            { text: "Vivo en Lima.", en: "I live in Lima.", zh: "我住在利馬。" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿De dónde eres?", en: "Where are you from?", zh: "你來自哪裡？" },
            { speaker: "Male", text: "Soy de Chile. ¿Y tú?", en: "I’m from Chile. And you?", zh: "我來自智利。你呢？" },
            { speaker: "Female", text: "Vengo de México. Ahora vivo en Lima.", en: "I come from Mexico. Now I live in Lima.", zh: "我來自墨西哥，現在住在利馬。" }
          ],
          tips: [
            { en: "Use **Vengo de + [country]** to express country of origin.", zh: "表達國家來源時用 **Vengo de + [國家]**。" },
            { en: "Remember: **de** = from, **en** = in.", zh: "注意：**de** = 從，**en** = 在。" }
          ]
        }
      ]
    },

    // ===== Lesson 6 =====
    {
      lessonId: 6,
      title: "Lección 6 – ¿Qué haces? / ¿A qué te dedicas?",
      title_zh: "第 6 課 – 你在做什麼？／你的職業是什麼？",
      theme: "Ask what someone is doing and about their job",
      theme_zh: "詢問某人正在做什麼與職業",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Ask what someone is doing now",
          title_zh: "第一級（A1）: 詢問某人現在在做什麼",
          keyPhrases: [
            { text: "¿Qué haces?", en: "What are you doing?", zh: "你在幹嘛？" },
            { text: "Estudio.", en: "I’m studying.", zh: "我在學習。" },
            { text: "Trabajo.", en: "I’m working.", zh: "我在工作。" },
            { text: "Leo un libro.", en: "I’m reading a book.", zh: "我在看書。" },
            { text: "Cocino.", en: "I’m cooking.", zh: "我在做飯。" },
            { text: "Nada especial.", en: "Nothing special.", zh: "沒什麼特別的。" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿Qué haces?", en: "What are you doing?", zh: "你在幹嘛？" },
            { speaker: "Male", text: "Cocino. ¿Y tú?", en: "I’m cooking. And you?", zh: "我在做飯。你呢？" },
            { speaker: "Female", text: "Leo un libro.", en: "I’m reading a book.", zh: "我在看書。" },
            { speaker: "Male", text: "Nada especial.", en: "Nothing special.", zh: "沒什麼特別的。" }
          ],
          tips: [
            { en: "Use **¿Qué haces?** for casual ‘what are you doing?’", zh: "隨意問「在幹嘛」時用 **¿Qué haces?**。" },
            { en: "Use present tense verbs like **Estudio, Trabajo, Leo**.", zh: "用現在式動詞，例如 **Estudio, Trabajo, Leo**。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Ask & answer about professions",
          title_zh: "第二級（A1）: 詢問與回答職業",
          keyPhrases: [
            { text: "¿A qué te dedicas?", en: "What do you do (for work)?", zh: "你的工作是什麼？" },
            { text: "Soy profesor / profesora.", en: "I’m a teacher.", zh: "我是老師。" },
            { text: "Soy médico / médica.", en: "I’m a doctor.", zh: "我是醫生。" },
            { text: "Trabajo en una oficina.", en: "I work in an office.", zh: "我在辦公室工作。" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿A qué te dedicas?", en: "What do you do?", zh: "你是做什麼的？" },
            { speaker: "Male", text: "Soy médico.", en: "I’m a doctor.", zh: "我是醫生。" },
            { speaker: "Female", text: "Soy profesora. ¿Y tú?", en: "I’m a teacher. And you?", zh: "我是老師，你呢？" }
          ],
          tips: [
            { en: "Use **Soy + [profession]** to state your job.", zh: "說工作時用 **Soy + [職業]**。" },
            { en: "Professions agree in gender: **profesor/profesora, médico/médica**.", zh: "職業需依性別變化：**profesor/profesora, médico/médica**。" }
          ]
        }
      ]
    },

    // ===== Lesson 7 =====
    {
      lessonId: 7,
      title: "Lección 7 – Las Preguntas (Question Words)",
      title_zh: "學習西班牙語提問詞",
      theme: "how, who, what, where, when, why, which and how much/many",
      theme_zh: "怎麼樣、誰、什麼、哪裡、何時、為什麼、哪一個以及多少",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Preguntas básicas – Basic Question Words",
          title_zh: "第一級（A1）: 基本提問詞",
          keyPhrases: [
            { text: "Cómo", en: "How", zh: "怎麼樣" },
            { text: "Quién", en: "Who", zh: "誰" },
            { text: "Qué", en: "What", zh: "什麼" },
            { text: "Dónde", en: "Where", zh: "哪裡" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿Cómo estás?", en: "How are you?", zh: "你好嗎？" },
            { speaker: "Female", text: "¿Quién es ella?", en: "Who is she?", zh: "她是誰？" },
            { speaker: "Female", text: "¿Qué haces hoy?", en: "What are you doing today?", zh: "你今天做什麼？" },
            { speaker: "Female", text: "¿Dónde vas?", en: "Where are you going?", zh: "你去哪裡？" },
            { speaker: "Female", text: "¿Dónde está el baño?", en: "Where is the bathroom?", zh: "洗手間在哪裡？" }
          ],
          tips: [
            { en: "**Cómo** asks about manner or condition (how someone feels).", zh: "**Cómo** 用來詢問方式或狀態，例如問一個人感覺如何。" },
            { en: "**Quién** is used to ask about a person.", zh: "**Quién** 用來詢問人是誰。" },
            { en: "**Qué** means 'what'.", zh: "**Qué** 表示『什麼』。" },
            { en: "**Dónde** is used for locations or destinations.", zh: "**Dónde** 用於詢問地點或目的地。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Más palabras interrogativas – More Question Words",
          title_zh: "第二級（A1）: 更多提問詞",
          keyPhrases: [
            { text: "Cuándo", en: "When", zh: "何時" },
            { text: "Por qué", en: "Why", zh: "為什麼" },
            { text: "Cuál / Cuáles", en: "Which (sing./pl.)", zh: "哪一個／哪些" },
            { text: "Cuánto / Cuánta / Cuántos / Cuántas", en: "How much / How many", zh: "多少" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿Cuándo sale el tren?", en: "When does the train leave?", zh: "火車什麼時候開？" },
            { speaker: "Female", text: "¿Por qué no viniste esta mañana?", en: "Why didn’t you come this morning?", zh: "你今天早上為什麼沒來？" },
            { speaker: "Female", text: "¿Cuál helado quieres?", en: "Which ice cream do you want?", zh: "你想要哪一種冰淇淋？" },
            { speaker: "Female", text: "¿Cuántos amigos tienes en España?", en: "How many friends do you have in Spain?", zh: "你在西班牙有幾個朋友？" },
            { speaker: "Female", text: "¿Por qué te gusta tanto el café?", en: "Why do you like coffee so much?", zh: "你為什麼這麼喜歡咖啡？" }
          ],
          tips: [
            { en: "**Por qué** (two words) is used in questions; **porque** (one word) means 'because'.", zh: "疑問句用 **Por qué**（兩個字）；回答『因為』用 **porque**（一個字）。" },
            { en: "**Cuál** agrees in number: **Cuál/Cuáles**.", zh: "**Cuál** 需配合數量變化：**Cuál/Cuáles**。" },
            { en: "**Cuánto** family agrees in gender/number: **Cuánto/Cuánta/Cuántos/Cuántas**.", zh: "**Cuánto** 系列需配合陰陽性與單複數：**Cuánto/Cuánta/Cuántos/Cuántas**。" }
          ]
        }
      ]
    },

    // ===== Lesson 8 =====
    {
      lessonId: 8,
      title: "Lección 8 – El verbo 'Ser' y los pronombres",
      title_zh: "動詞 ser 與代名詞",
      theme: "Introducing yourself and others, subject pronouns, and possessives",
      theme_zh: "介紹自己與他人、主詞代名詞、所有格",
      levels: [
        {
          levelId: 1,
          title: "Level 1 (A1): Introducing Yourself and Others",
          title_zh: "第一級（A1）: 介紹自己和他人",
          keyPhrases: [
            { text: "Yo soy...", en: "I am...", zh: "我是..." },
            { text: "Soy...", en: "I'm... (subject omitted)", zh: "我是...(可省略主詞)" },
            { text: "Tú eres...", en: "You are... (informal)", zh: "你是...（非正式）" },
            { text: "¿Eres ...?", en: "Are you ...? (subject omitted)", zh: "你是...嗎？（主詞可省略）" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿Eres Marco?", en: "Are you Marco?", zh: "你是馬可嗎？" },
            { speaker: "Male", text: "Sí, soy Marco.", en: "Yes, I'm Marco.", zh: "對，我是馬可。" },
            { speaker: "Female", text: "¿Y tú?", en: "And you?", zh: "那你呢？" },
            { speaker: "Male", text: "Soy Laura.", en: "I'm Laura.", zh: "我是勞拉。" }
          ],
          tips: [
            { en: "Spanish often drops the subject because the verb shows who speaks (e.g., **Soy Laura**).", zh: "西班牙語常省略主詞，因為動詞變位已能看出（例如 **Soy Laura**）。" },
            { en: "In questions, you can use just the verb: **¿Eres Marco?** (instead of **¿Tú eres Marco?**).", zh: "問句可只用動詞：**¿Eres Marco?**（可不用 **¿Tú eres Marco?**）。" }
          ]
        },
        {
          levelId: 2,
          title: "Level 2 (A1): Meet the Spanish Subject Pronouns",
          title_zh: "第二級（A1）: 認識西班牙語主詞代名詞",
          keyPronouns: [
            { text: "yo", en: "I", zh: "我" },
            { text: "yo soy...", en: "I am...", zh: "我是..." },
            { text: "tú", en: "you (informal)", zh: "你（非正式）" },
            { text: "tú eres...", en: "You are...", zh: "你是..." },
            { text: "él", en: "he", zh: "他" },
            { text: "él es...", en: "He is...", zh: "他是..." },
            { text: "ella", en: "she", zh: "她" },
            { text: "ella es...", en: "She is...", zh: "她是..." },
            { text: "usted", en: "you (formal)", zh: "您（正式）" },
            { text: "usted es...", en: "You are...", zh: "您是..." },
            { text: "nosotros / nosotras", en: "we (m./f.)", zh: "我們（陽/陰）" },
            { text: "nosotros/nosotras somos...", en: "We are...", zh: "我們是..." },
            { text: "vosotros / vosotras", en: "you all (Spain)", zh: "你們（西班牙）" },
            { text: "vosotros/vosotras sois...", en: "You all are...", zh: "你們是..." },
            { text: "ellos / ellas", en: "they (m./f.)", zh: "他們／她們" },
            { text: "ellos/ellas son...", en: "They are...", zh: "他們/她們是..." },
            { text: "ustedes", en: "you all (LatAm)", zh: "各位（拉美）" },
            { text: "ustedes son...", en: "You all are...", zh: "各位是..." }
          ],
          dialogues: [
            { speaker: "Male", text: "¿Tú eres María?", en: "Are you María?", zh: "你是瑪麗亞嗎？" },
            { speaker: "Female", text: "Sí, yo soy María.", en: "Yes, I am María.", zh: "對，我是瑪麗亞。" },
            { speaker: "Male", text: "¿Él es Lucas?", en: "Is he Lucas?", zh: "他是路卡嗎？" },
            { speaker: "Female", text: "Sí, él es Lucas.", en: "Yes, he is Lucas.", zh: "對，他是路卡。" },
            { speaker: "Female", text: "¿Ella es italiana?", en: "Is she Italian?", zh: "她是義大利人嗎？" },
            { speaker: "Male", text: "Sí, ella es italiana.", en: "Yes, she is Italian.", zh: "對，她是義大利人。" },
            { speaker: "Female", text: "Disculpe, ¿usted es el señor Blanco?", en: "Excuse me, are you Mr. Blanco? (Formal)", zh: "打擾了，您是布蘭科先生嗎？" },
            { speaker: "Male", text: "Sí, soy yo.", en: "Yes, it's me.", zh: "對，是我。" },
            { speaker: "Female", text: "¿Nosotros somos amigos?", en: "Are we friends?", zh: "我們是朋友嗎？" },
            { speaker: "Male", text: "Sí, somos amigos.", en: "Yes, we are friends.", zh: "對，我們是朋友。" },
            { speaker: "Female", text: "¿Vosotros sois turistas?", en: "Are you all tourists? (Spain)", zh: "你們是遊客嗎？（西班牙）" },
            { speaker: "Male", text: "Sí, somos turistas.", en: "Yes, we are tourists.", zh: "對，我們是遊客。" },
            { speaker: "Female", text: "¿Ellos son americanos?", en: "Are they American?", zh: "他們是美國人嗎？" },
            { speaker: "Male", text: "Sí, son americanos.", en: "Yes, they are American.", zh: "對，他們是美國人。" }
          ],
          tips: [
            { en: "Subject pronouns are often dropped in Spanish (e.g., **(Yo) soy Laura**).", zh: "西語常省略主詞（例如 **（Yo）soy Laura**）。" },
            { en: "**Usted/ustedes** are formal; **vosotros** is mainly used in Spain.", zh: "**Usted/ustedes** 為正式用法；**vosotros** 主要用於西班牙。" }
          ]
        },
        {
          levelId: 3,
          title: "Level 3 (A1): Possessives",
          title_zh: "第三級（A1）: 所有格",
          keyPhrases: [
            { title: "Singular / Plural" },
            { text: "mi / mis", en: "my (sing./pl.)", zh: "我的（單／複）" },
            { text: "tu / tus", en: "your (informal) (sing./pl.)", zh: "你的（單／複）" },
            { text: "su / sus", en: "his/her/your (formal) (sing./pl.)", zh: "他/她/您的（單／複）" },
            { text: "nuestro / nuestra / nuestros / nuestras", en: "our (m./f., sing./pl.)", zh: "我們的（陽/陰、單/複）" },
            { text: "vuestro / vuestra / vuestros / vuestras", en: "your (Spain) (m./f., sing./pl.)", zh: "你們的（西班牙）（陽/陰、單/複）" }
          ],
          dialogues: [
            { speaker: "Female", text: "¿Es tu bolsa?", en: "Is it your bag?", zh: "這是你的包包嗎？" },
            { speaker: "Male", text: "Sí, es mi bolsa.", en: "Yes, it’s my bag.", zh: "對，是我的包包。" },
            { speaker: "Female", text: "¿Dónde está su teléfono?", en: "Where is his/her phone?", zh: "他的/她的手機在哪？" },
            { speaker: "Male", text: "Aquí está su teléfono.", en: "Here’s his/her phone.", zh: "這是他的/她的手機。" },
            { speaker: "Female", text: "¿Es vuestro coche?", en: "Is this your (plural, Spain) car?", zh: "這是你們（西班牙）的車嗎？" },
            { speaker: "Male", text: "Sí, es nuestro coche.", en: "Yes, it’s our car.", zh: "對，是我們的車。" },
            { speaker: "Female", text: "¿Son sus llaves?", en: "Are these their keys?", zh: "這些是他們的鑰匙嗎？" },
            { speaker: "Male", text: "No, no son sus llaves. Son mis llaves.", en: "No, they aren't their keys. They are my keys.", zh: "不，那些不是他們的鑰匙。是我的。" }
          ],
          tips: [
            { en: "Spanish possessives change with the **thing**, not the owner: **mi libro / mis libros**.", zh: "西語的所有格隨『名詞』改變，而非擁有者：**mi libro / mis libros**。" },
            { en: "Only **nuestro/vuestro** agree in gender with the noun: **nuestro coche / nuestra casa**.", zh: "只有 **nuestro/vuestro** 需配合名詞性別：**nuestro coche / nuestra casa**。" },
            { en: "Often the article is not needed: **mi madre**, **tu hermano**.", zh: "常不需要冠詞：**mi madre**、**tu hermano**。" }
          ]
        }
      ]
    }
  ]
};
