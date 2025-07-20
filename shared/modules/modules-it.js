const modulesData = [
    {
        title: '🇮🇹 Module 1 – Greeting 問候',
        lessons: [
            { name: 'Lesson1: Say Hello 打招呼', link: 'module1/lesson1.html' },
            { name: 'Lesson2: Ask “How are you?” 最近如何', link: 'module1/lesson2.html' },
            { name: 'Lesson3: Polite Words 客氣詞', link: 'module1/lesson3.html' },
            { name: 'Lesson4: Waht is your name 你叫什麼名字？', link: 'module1/lesson4.html' },
            { name: 'Lesson5: Where are you from? 你從哪裡來', link: 'module1/lesson5.html' },
            { name: 'Lesson6: What are you doing? What is your job?（在做什麼？／你的職業是什麼)', link: 'module1/lesson6.html' },
            { name: 'Lesson7: Capisco / Posso（理解與請求', link: 'module1/lesson7.html' },
            { name: 'Lesson8: Italian Question Words ( how, who, what, where, when, why, which and how much/many)（學習義大利提問詞)', link: 'module1/lesson8.html' },
            { name: 'Lesson9: Personal Pronouns and Possessives (Io, tu, lui, lei )人稱代名詞與所有格', link: 'module1/lesson9.html' },
        ]
    },
    {
        title: '✈️ Travel Survival Italian 旅行義大利語精選',
        lessons: [
            { "name": "Episode 1: At the Airport 機場場景", "link": "travel/ep1.html" },
            { "name": "Episode 2: Asking for Directions 問路任務", "link": "travel/ep2.html" },
            { "name": "Episode 3: Buying a Train Ticket 買火車票任務", "link": "travel/ep3.html" },
            { "name": "Episode 4: Ordering Food at a Restaurant 餐廳點餐任務", "link": "travel/ep4.html" },
            { "name": "Episode 5: Hotel Check-in 入住旅館對話", "link": "travel/ep5.html" },
            { "name": "Episode 6: Going to the Bathroom 洗手間在哪裡", "link": "travel/ep6.html" },
            { "name": "Episode 7: Taking the Bus 搭乘公車或計程車", "link": "travel/ep7.html" },
            { "name": "Episode 8: Visiting a Plaza or Monument 尋找景點", "link": "travel/ep8.html" },
            { "name": "Episode 9: Shopping at a Market 市場購物對話", "link": "travel/ep9.html" },
            { "name": "Episode 10: At the Pharmacy 藥局購買常備品", "link": "travel/ep10.html" }
          ]
    },
    {
        title: '🇮🇹 Module 2 – Order at a Café 買咖啡早餐',
        lessons: [
          { name: 'Lesson1: The Italian Bar & Coffee Basics 義式咖啡館', link: 'module2/lesson1.html' },
          { name: 'Lesson2: Ordering Pastries & Drinks 點心與其他飲品', link: 'module2/lesson2.html' },
          { name: 'Lesson3: Making Special Requests 客製化需求', link: 'module2/lesson3.html' },
          { name: 'Lesson4: Asking for the Bill & Paying 結帳與付款', link: 'module2/lesson4.html' },
          { name: 'Lesson5: Cafe Small Talk 咖啡館簡短閒聊', link: 'module2/lesson5.html' }, // The 5th lesson!
        ]
    },
    { title: 'Module 3 – Buy Fruits at the Market 買水果 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 4 – Buy a Train Ticket to Florence 買火車票 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 5 – Hotel Check-in 櫃台對話 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 6 – Public Transport & Directions 問路搭車 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 7 – Order Pasta and Wine 餐廳點餐 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 8 – Shop at Supermarket / Ask for Deals 超市購物 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 9 – Describe Symptoms at the Pharmacy 看病買藥 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 10 – Book a Room & Ask the Host 找民宿 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 11 – Open a Bank Account 開戶對話 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 12 – Navigate Bureaucracy 處理行政 (Coming Soon! 即將推出!)', lessons: [] },
    {
        title: 'Module 13 – Make Friends & Introduce Yourself 認識朋友與自我介紹',
        lessons: [
            { name: 'Lesson1: Sharing More About Yourself (Condividere di Più su di Te)', link: 'module13/lesson1.html' },
            { name: 'Lesson2: Talking About Where You Live (Dove Abito? - Deeper Dive)', link: 'module13/lesson2.html' },
            { name: 'Lesson3: What I Like and What I Don\'t (Cosa Mi Piace e Cosa Non Mi Piace)', link: 'module13/lesson3.html' },
            { name: 'Lesson4: Describing Your Family (La Mia Famiglia)', link: 'module13/lesson4.html' },
            { name: 'Lesson5: Basic Personality & Adjectives (Come Sono?)', link: 'module13/lesson5.html' },
        ]
    },
    { title: 'Module 14 – Express Opinions 表達想法 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 15 – Festival Market Chat 市集聊天 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 16 – Emergencies & Help 緊急狀況 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 17 – Plans and Time 任務與時間 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 18 – Daily Errands 日常生活 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 19 – Appearance & Feelings 外觀與感受 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 20 – Weather 天氣任務 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 21 – Make a Reservation 預約任務 (Coming Soon! 即將推出!)', lessons: [] },
    { title: 'Module 22 – Ask for Clarification 理解與確認 (Coming Soon! 即將推出!)', lessons: [] },
];
