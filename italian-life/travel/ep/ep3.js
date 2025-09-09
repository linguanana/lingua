const episodeData = {
  ep_title: "ep",
  episodeId: 3,
  episode: "🇮🇹 Episode – Italian Travel Conversations",
  episode_zh: "🇮🇹 特別篇 - 義大利旅遊大補帖",
  toggle_title: "Scenes",
  voice: "it-IT",
  speaking_rate: "0.7",
  topics: [
    {
      topicId: 1,
      topic: "🗺️ 10 Ways to Ask for Directions - One Example a Day",
      topic_zh: "🗺️ 10 種問路方式 - 每天一個例子",
      scenes: [
        {
          sceneId: 1,
          scene: "Day 1 – Using 'Dov'è...?'",
          scene_zh: "第 1 天 — 使用「...在哪裡？」",
          dialogue: [
            { speaker: "Female", text: "Scusi, dov'è il duomo?", en: "Excuse me, where is the cathedral?", zh: "不好意思，請問大教堂在哪裡？" },
            { speaker: "M_Chef", text: "Il duomo? È lì, in fondo alla via, dopo la piazza.", en: "The cathedral? It's there, at the end of the street, after the square.", zh: "大教堂？它就在那裡，這條路的盡頭，廣場之後。" },
            { speaker: "Female", text: "In fondo alla via... Ho capito.", en: "At the end of the street... I understand.", zh: "在路的盡頭…我明白了。" },
            { speaker: "M_Chef", text: "Sì, lo vede subito. È l'edificio più grande.", en: "Yes, you'll see it immediately. It's the largest building.", zh: "是的，您馬上就會看到了。它是那邊最大的建築物。" },
            { speaker: "Female", text: "Quindi, dritto e non devo girare da nessuna parte?", en: "So, straight and I don't have to turn anywhere?", zh: "所以是直走，中間都不用轉彎對嗎？" },
            { speaker: "M_Chef", text: "Esatto, è dritto per dritto. Sono solo un paio di minuti.", en: "Exactly, it's straight ahead. It's just a couple of minutes away.", zh: "沒錯，就是直直走。只要幾分鐘就到了。" },
            { speaker: "Female", text: "Perfetto! Grazie mille.", en: "Perfect! Thank you very much.", zh: "太好了！非常感謝您。" },
            { speaker: "M_Chef", text: "Prego, buona passeggiata!", en: "You're welcome, have a nice walk!", zh: "不客氣，祝您散步愉快！" }
          ]
        },
        {
          sceneId: 2,
          scene: "Day 2 – Asking for a Route ('Per andare a...')",
          scene_zh: "第 2 天 — 詢問路線 (使用 'Per andare a...')",
          dialogue: [
            { speaker: "Female", text: "Scusi, per andare alla stazione, per favore?", en: "Excuse me, how can I get to the station, please?", zh: "不好意思，請問火車站怎麼走？" },
            { speaker: "M_Chef", text: "Deve andare dritto su questa strada.", en: "You have to go straight on this street.", zh: "您要沿著這條路直走。" },
            { speaker: "Female", text: "Dritto? E dopo?", en: "Straight? And after that?", zh: "直走？然後呢？" },
            { speaker: "M_Chef", text: "Poi la vede, è sulla destra. Non può sbagliare.", en: "Then you will see it, it's on the right. You can't miss it.", zh: "然後您就會看到它了，就在右手邊。您不會錯過的。" },
            { speaker: "Female", text: "Quindi, dritto e poi a destra. Ho capito. È lontano?", en: "So, straight and then on the right. I understand. Is it far?", zh: "所以，直走然後在右手邊。我明白了。遠嗎？" },
            { speaker: "M_Chef", text: "No, sono solo cinque minuti a piedi.", en: "No, it's only a five-minute walk.", zh: "不遠，走路只要五分鐘。" },
            { speaker: "Female", text: "Perfetto! Grazie mille!", en: "Perfect! Thank you very much!", zh: "太好了！非常感謝！" },
            { speaker: "M_Chef", text: "Prego, buona giornata!", en: "You're welcome, have a good day!", zh: "不客氣，祝您有個美好的一天！" }
          ]
        },
        {
          sceneId: 3,
          scene: "Day 3 – Using Landmarks",
          scene_zh: "第 3 天 — 使用地標",
          dialogue: [
            { speaker: "Female", text: "Mi scusi, il Colosseo è da questa parte?", en: "Excuse me, is the Colosseum this way?", zh: "不好意思，請問競技場是這個方向嗎？" },
            { speaker: "M_Chef", text: "No, è dall'altra parte. Deve tornare indietro.", en: "No, it's the other way. You have to go back.", zh: "不是的，在另一個方向。您必須往回走。" },
            { speaker: "Female", text: "Oh, davvero? Fino a che punto devo tornare?", en: "Oh, really? How far do I have to go back?", zh: "喔，真的嗎？要回到哪裡？" },
            { speaker: "M_Chef", text: "Fino alla piazza principale. Lì vede una grande fontana?", en: "Until the main square. Do you see a big fountain there?", zh: "回到主要廣場。您在那裡有看到一個大噴水池嗎？" },
            { speaker: "Female", text: "Sì, la vedo da qui.", en: "Yes, I can see it from here.", zh: "有，我從這裡看得到。" },
            { speaker: "M_Chef", text: "Bene, da lì gira a sinistra e lo troverà dopo 200 metri.", en: "Good, from there you turn left and you will find it after 200 meters.", zh: "好的，從那裡左轉，走約兩百公尺就會到了。" },
            { speaker: "Female", text: "Grazie per l'aiuto! Siete molto gentili.", en: "Thanks for the help! You are very kind.", zh: "謝謝您的幫忙！您人真好。" },
            { speaker: "M_Chef", text: "Di niente! È un piacere.", en: "Not at all! It's a pleasure.", zh: "不客氣！這是我的榮幸。" }
          ]
        },
        {
          sceneId: 4,
          scene: "Day 4 – Using Turns",
          scene_zh: "第 4 天 — 使用轉彎詞彙",
          dialogue: [
            { speaker: "Female", text: "Scusi, come arrivo al cinema?", en: "Excuse me, how do I get to the cinema?", zh: "不好意思，請問電影院怎麼走？" },
            { speaker: "M_Chef", text: "Allora, prenda la prima a destra, poi la seconda a sinistra.", en: "So, take the first right, then the second left.", zh: "好的，第一個路口右轉，然後第二個路口左轉。" },
            { speaker: "Female", text: "La prima a destra e la seconda a sinistra, giusto?", en: "The first right and the second left, is that correct?", zh: "第一個路口右轉，然後第二個路口左轉，對嗎？" },
            { speaker: "M_Chef", text: "Esatto! Poi continua dritto per circa tre isolati.", en: "Exactly! Then continue straight for about three blocks.", zh: "沒錯！然後再直走大約三個街區。" },
            { speaker: "Female", text: "È un edificio grande? Lo vedo facilmente?", en: "Is it a big building? Will I see it easily?", zh: "是個大建築物嗎？會很顯眼嗎？" },
            { speaker: "M_Chef", text: "Sì, è un edificio rosso e molto grande. Lo vedrà sicuramente.", en: "Yes, it's a very large red building. You will definitely see it.", zh: "是的，那是一棟很大的紅色建築。您一定會看到的。" },
            { speaker: "Female", text: "Fantastico! Grazie mille per le indicazioni.", en: "Great! Thank you very much for the directions.", zh: "太好了！非常感謝您的指引。" },
            { speaker: "M_Chef", text: "Prego! Divertiti al cinema!", en: "You're welcome! Have fun at the cinema!", zh: "不客氣！祝您看電影愉快！" }
          ]
        },
        {
          sceneId: 5,
          scene: "Day 5 – Asking about Distance",
          scene_zh: "第 5 天 — 詢問距離",
          dialogue: [
            { speaker: "Female", text: "Mi scusi, sa dirmi dov'è la farmacia più vicina?", en: "Excuse me, can you tell me where the nearest pharmacy is?", zh: "不好意思，請問最近的藥局在哪裡？" },
            { speaker: "M_Chef", text: "Certo. Va dritto fino al semaforo e poi gira a destra.", en: "Of course. Go straight until the traffic light and then turn right.", zh: "好的。您直走到紅綠燈，然後右轉。" },
            { speaker: "Female", text: "È lontano da qui?", en: "Is it far from here?", zh: "從這裡走會很遠嗎？" },
            { speaker: "M_Chef", text: "No, sono circa dieci minuti a piedi, non più di un chilometro.", en: "No, it's about a ten-minute walk, no more than a kilometer.", zh: "不遠，走路大約十分鐘，不會超過一公里。" },
            { speaker: "Female", text: "Ah, va bene. Pensavo fosse più distante.", en: "Ah, okay. I thought it was farther.", zh: "啊，好的。我以為會比較遠。" },
            { speaker: "M_Chef", text: "La trova dopo il supermercato, sulla sinistra.", en: "You'll find it after the supermarket, on the left.", zh: "您在超市之後就會看到它了，在左手邊。" },
            { speaker: "Female", text: "Ottimo, grazie per la precisione.", en: "Great, thanks for the precise information.", zh: "太好了，謝謝您說得這麼詳細。" },
            { speaker: "M_Chef", text: "Prego, si figuri!", en: "You're welcome, don't mention it!", zh: "不客氣，別客氣！" }
          ]
        },
        {
          sceneId: 6,
          scene: "Day 6 – Asking for Directions to a Bus Stop",
          scene_zh: "第 6 天 — 詢問公車站",
          dialogue: [
            { speaker: "Female", text: "Buongiorno, sa dove posso prendere l'autobus per il centro?", en: "Good morning, do you know where I can catch the bus to the city center?", zh: "早安，請問哪裡可以搭公車去市中心？" },
            { speaker: "M_Chef", text: "Sì, deve andare in fondo a questa via.", en: "Yes, you have to go to the end of this street.", zh: "有的，您必須走到這條路的盡頭。" },
            { speaker: "Female", text: "In fondo? E poi?", en: "To the end? And then?", zh: "盡頭？然後呢？" },
            { speaker: "M_Chef", text: "Alla fine, attraversa la strada e vede la fermata dell'autobus.", en: "At the end, cross the street and you'll see the bus stop.", zh: "到了盡頭，過馬路就會看到公車站牌了。" },
            { speaker: "Female", text: "Quale numero di autobus devo prendere?", en: "Which bus number should I take?", zh: "我應該搭幾號公車？" },
            { speaker: "M_Chef", text: "Il numero 12. Passa ogni 15 minuti.", en: "Number 12. It passes every 15 minutes.", zh: "12號公車。它每15分鐘會來一班。" },
            { speaker: "Female", text: "Ottimo, grazie per tutte le informazioni!", en: "Great, thanks for all the information!", zh: "太好了，謝謝您提供這麼多資訊！" },
            { speaker: "M_Chef", text: "Prego. L'autobus arriva a momenti.", en: "You're welcome. The bus will be here any moment.", zh: "不客氣。公車快來了。" }
          ]
        },
        {
          sceneId: 7,
          scene: "Day 7 – Asking for Directions to a Pharmacy",
          scene_zh: "第 7 天 — 詢問藥局",
          dialogue: [
            { speaker: "Female", text: "Scusi, c'è una farmacia qui vicino?", en: "Excuse me, is there a pharmacy nearby?", zh: "不好意思，附近有藥局嗎？" },
            { speaker: "M_Chef", text: "Sì, ce n'è una in Piazza Garibaldi.", en: "Yes, there is one in Garibaldi Square.", zh: "有的，加里波底廣場那邊有一家。" },
            { speaker: "Female", text: "Piazza Garibaldi... è molto lontana?", en: "Garibaldi Square... is that very far?", zh: "加里波底廣場…會很遠嗎？" },
            { speaker: "M_Chef", text: "No, sono solo duecento metri. Gira a sinistra alla prossima via.", en: "No, it's only two hundred meters. Turn left at the next street.", zh: "不遠，大約兩百公尺而已。在下一個路口左轉。" },
            { speaker: "Female", text: "Giro a sinistra. E la farmacia dove si trova?", en: "I turn left. And where is the pharmacy located?", zh: "我左轉。那藥局在哪裡？" },
            { speaker: "M_Chef", text: "La vede subito dopo la chiesa, con la croce verde.", en: "You'll see it right after the church, with the green cross.", zh: "您在教堂之後就會看到它了，上面有個綠色的十字。" },
            { speaker: "Female", text: "Grazie! Era proprio quello che cercavo.", en: "Thank you! That's exactly what I was looking for.", zh: "謝謝！這正是我在找的地方。" },
            { speaker: "M_Chef", text: "Prego, felice di averla aiutata.", en: "You're welcome, happy to have helped you.", zh: "不客氣，很高興能幫到你。" }
          ]
        },
        {
          sceneId: 8,
          scene: "Day 8 – Giving Directions",
          scene_zh: "第 8 天 — 指引方向",
          dialogue: [
            { speaker: "Female", text: "Mi scusi, sa come si arriva al museo?", en: "Excuse me, do you know how to get to the museum?", zh: "不好意思，請問去博物館怎麼走？" },
            { speaker: "M_Chef", text: "Certo. Vede quel ponte laggiù? Attraversi il fiume.", en: "Of course. Do you see that bridge over there? Cross the river.", zh: "好的。您看到那邊那座橋了嗎？過那條河。" },
            { speaker: "Female", text: "Il ponte. Ok.", en: "The bridge. Okay.", zh: "橋。好的。" },
            { speaker: "M_Chef", text: "Poi continua dritto per un altro isolato. Il museo è sulla destra, proprio di fronte al parco.", en: "Then continue straight for another block. The museum is on the right, right in front of the park.", zh: "然後再直走一個街區。博物館就在右手邊，公園的正對面。" },
            { speaker: "Female", text: "Di fronte al parco... E c'è una fermata della metro vicina?", en: "In front of the park... And is there a metro station nearby?", zh: "公園對面…那附近有地鐵站嗎？" },
            { speaker: "M_Chef", text: "Sì, la fermata 'Centrale' è proprio a fianco del museo.", en: "Yes, the 'Centrale' station is right next to the museum.", zh: "有的，「中央站」就在博物館旁邊。" },
            { speaker: "Female", text: "Perfetto, grazie mille! È stato molto utile.", en: "Perfect, thank you very much! That was very helpful.", zh: "太好了，非常感謝！您說得很有用。" },
            { speaker: "M_Chef", text: "Prego, si figuri!", en: "You're welcome, don't mention it!", zh: "不客氣，別客氣！" }
          ]
        },
        {
          sceneId: 9,
          scene: "Day 9 – Asking to Repeat",
          scene_zh: "第 9 天 — 請求重複",
          dialogue: [
            { speaker: "Female", text: "Scusi, per andare al teatro? Non ho capito bene l'ultima parte.", en: "Excuse me, to get to the theater? I didn't quite understand the last part.", zh: "不好意思，去劇院怎麼走？我沒有聽清楚最後一部分。" },
            { speaker: "M_Chef", text: "Certo, nessun problema. Segua la strada per circa 300 metri.", en: "Of course, no problem. Follow the street for about 300 meters.", zh: "好的，沒問題。沿著這條路走大約300公尺。" },
            { speaker: "Female", text: "300 metri, ok. E poi?", en: "300 meters, okay. And then?", zh: "300公尺，好的。然後呢？" },
            { speaker: "M_Chef", text: "Poi la trova, è l'edificio giallo a sinistra, dopo la banca.", en: "Then you'll find it, it's the yellow building on the left, after the bank.", zh: "然後您就會看到它了，是左手邊的黃色建築，在銀行之後。" },
            { speaker: "Female", text: "Ah, il palazzo giallo a sinistra. Adesso ho capito, grazie!", en: "Ah, the yellow building on the left. Now I understand, thanks!", zh: "啊，左手邊的黃色建築。現在我明白了，謝謝！" },
            { speaker: "M_Chef", text: "Prego, si assicuri di non girare troppo presto.", en: "You're welcome, make sure you don't turn too early.", zh: "不客氣，請務必不要太早轉彎。" },
            { speaker: "Female", text: "No, no. Farò attenzione.", en: "No, no. I'll be careful.", zh: "不會的，我會小心的。" },
            { speaker: "M_Chef", text: "Bene. Buona passeggiata!", en: "Good. Have a nice walk!", zh: "好的。祝您散步愉快！" }
          ]
        },
        {
          sceneId: 10,
          scene: "Day 10 – Asking to Speak Slower",
          scene_zh: "第 10 天 — 請求講慢一點",
          dialogue: [
            { speaker: "Female", text: "Scusi, potrebbe parlare un po' più lentamente? Non sono italiano.", en: "Excuse me, could you speak a little slower? I'm not Italian.", zh: "不好意思，您能說慢一點嗎？我不是義大利人。" },
            { speaker: "M_Chef", text: "Certo, mi scusi. Allora, deve camminare fino al negozio di alimentari.", en: "Of course, my apologies. So, you must walk until the grocery store.", zh: "好的，抱歉。您要走到雜貨店那邊。" },
            { speaker: "Female", text: "Fino al negozio di alimentari... ok.", en: "Until the grocery store... okay.", zh: "走到雜貨店…好的。" },
            { speaker: "M_Chef", text: "Dopo il negozio, attraversa la strada e la biblioteca è lì.", en: "After the store, you cross the street and the library is there.", zh: "過了雜貨店，您過馬路，圖書館就在那裡。" },
            { speaker: "Female", text: "Dopo il negozio, attraversa e c'è la biblioteca. Ho capito. Grazie!", en: "After the store, cross and there's the library. I understand. Thanks!", zh: "過了雜貨店，過馬路，圖書館就在那裡。我明白了。謝謝！" },
            { speaker: "M_Chef", text: "Prego! Ha bisogno di altro aiuto?", en: "You're welcome! Do you need any other help?", zh: "不客氣！還需要其他協助嗎？" },
            { speaker: "Female", text: "No, va bene così. Molto gentile, grazie.", en: "No, I'm good. Very kind of you, thanks.", zh: "不用了，這樣就好。您人真好，謝謝。" },
            { speaker: "M_Chef", text: "Di niente! È un piacere.", en: "Not at all! It's a pleasure.", zh: "不客氣！這是我的榮幸。" }
          ]
        },
        {
          sceneId: 11,
          scene: "Day 11 – Thanking and Confirming",
          scene_zh: "第 11 天 — 感謝與確認",
          dialogue: [
            { speaker: "Female", text: "Scusi, per il museo, devo girare a destra o a sinistra?", en: "Excuse me, for the museum, should I turn right or left?", zh: "不好意思，去博物館是要右轉還是左轉？" },
            { speaker: "M_Chef", text: "Deve girare a destra. Segua la strada per 10 minuti.", en: "You have to turn right. Follow the street for 10 minutes.", zh: "您要右轉。沿著這條路走10分鐘。" },
            { speaker: "Female", text: "Dieci minuti... ok. E poi è facile da trovare?", en: "Ten minutes... okay. And then is it easy to find?", zh: "10分鐘…好的。那之後會很容易找到嗎？" },
            { speaker: "M_Chef", text: "Sì, è un edificio moderno con un grande muro di vetro. Non può mancarlo.", en: "Yes, it's a modern building with a large glass wall. You can't miss it.", zh: "是的，那是一棟有大片玻璃牆的現代建築。您不會錯過的。" },
            { speaker: "Female", text: "Grazie. Quindi riassumendo: giro a destra, vado dritto per 10 minuti e cerco un edificio con una parete di vetro.", en: "Thanks. So to summarize: I turn right, go straight for 10 minutes and look for a building with a glass wall.", zh: "謝謝。所以總結一下：我右轉，直走10分鐘，然後尋找一棟有玻璃牆的建築物。" },
            { speaker: "M_Chef", text: "Esatto! Proprio così.", en: "Exactly! That's right.", zh: "沒錯！就是這樣。" },
            { speaker: "Female", text: "Perfetto! Lei è stato molto chiaro. Grazie mille!", en: "Perfect! You were very clear. Thank you very much!", zh: "太好了！您說得非常清楚。非常感謝！" },
            { speaker: "M_Chef", text: "Prego, buona visita!", en: "You're welcome, enjoy your visit!", zh: "不客氣，祝您參觀愉快！" }
          ]
        }
      ]
    }
   // new
  ]
};
