const modulesData = [
  {
     title: '🇪🇸 Module1 – Greeting 問候',
     moduleId: 'm1',
     lessons: [
       { name: 'Lesson1: Say Hello', name_zh: '第1課：打招呼', link: 'module1/lesson1.html' },
       { name: 'Lesson2: Ask “How are you?”', name_zh: '第2課：最近如何', link: 'module1/lesson2.html' },
       { name: 'Lesson3: Polite Words & Ask for Help', name_zh: '第3課：客氣詞、理解與請求', link: 'module1/lesson3.html' },
       { name: 'Lesson4: What is Your Name?', name_zh: '第4課：你叫什麼名字？', link: 'module1/lesson4.html' },
       { name: 'Lesson5: Where Are You From?', name_zh: '第5課：你從哪裡來', link: 'module1/lesson5.html' },
       { name: 'Lesson6: What Are You Doing? What is Your Job?', name_zh: '第6課：你在做什麼？／你的職業是什麼', link: 'module1/lesson6.html' },
       { name: 'Lesson7: Italian Question Words', name_zh: '第7課：西班牙語提問詞（how, who, what, where, when, why, which, how much/many）', link: 'module1/lesson7.html' },
       { name: 'Lesson8: Personal Pronouns and Possessives', name_zh: '第8課：人稱代名詞與所有格（Io, tu, lui, lei）', link: 'module1/lesson8.html' },
     ]
   },
   {
     title: '✈️ Spanish Travel Phrases Survival Spanish 旅行西班牙語精選',
     moduleId: 'travel1',
     lessons: [
       { name: 'Episode 1: At the Coffee Bar', name_zh: '第1集：咖啡吧體驗', link: 'travel/ep.html?id=1' },
       { name: 'Episode 2: Dining at a Restaurant', name_zh: '第2集：餐廳用餐', link: 'travel/ep.html?id=2' },
       { name: 'Episode 3: Buying a Train Ticket', name_zh: '第3集：買火車票任務', link: 'travel/ep.html?id=3' },
       { name: 'Episode 4: Asking for Directions', name_zh: '第4集：問路與尋找洗手間', link: 'travel/ep.html?id=4' },
       { name: 'Episode 5: Hotel Check-in', name_zh: '第5集：入住旅館對話', link: 'travel/ep.html?id=5' },
       { name: 'Episode 6: Taking the Bus or Taxi', name_zh: '第6集：搭乘公車與計程車', link: 'travel/ep.html?id=6' },
       { name: 'Episode 7: Shopping at a Market', name_zh: '第7集：市場購物對話', link: 'travel/ep.html?id=7' },
       { name: 'Episode 8: Visiting Monuments & Plazas', name_zh: '第8集：尋找景點與名勝', link: 'travel/ep.html?id=8' },
       { name: 'Episode 9: At the Pharmacy', name_zh: '第9集：藥局購買常備品', link: 'travel/ep.html?id=9' },
       { name: 'Episode 10: Making Friends & Small Talk', name_zh: '第10集：交朋友與閒聊', link: 'travel/ep.html?id=10' }
     ]
   },
   {
     title: '🇪🇸 Module2 – Order at a Café 買咖啡早餐',
     moduleId: 'm2',
     lessons: [
       { name: 'Lesson1: The Italian Bar & Coffee Basics', name_zh: '第1課：義式咖啡館', link: 'module2/lesson1.html' },
       { name: 'Lesson2: Ordering Pastries & Drinks', name_zh: '第2課：點心與其他飲品', link: 'module2/lesson2.html' },
       { name: 'Lesson3: Making Special Requests', name_zh: '第3課：客製化需求', link: 'module2/lesson3.html' },
       { name: 'Lesson4: Asking for the Bill & Paying', name_zh: '第4課：結帳與付款', link: 'module2/lesson4.html' },
       { name: 'Lesson5: Cafe Small Talk', name_zh: '第5課：咖啡館簡短閒聊', link: 'module2/lesson5.html' }
     ]
   },
    { title: '🇪🇸 Module3 – Buy Fruits at the Market 買水果 (Coming Soon!)', moduleId: 'm3',lessons: [] },
    { title: '🇪🇸 Module4 – Buy a Train Ticket to Florence 買火車票 (Coming Soon!)', moduleId: 'm4', lessons: [] },
    { title: '🇪🇸 Module5 – Hotel Check-in 櫃台對話 (Coming Soon! )', moduleId: 'm5', lessons: [] },
    { title: '🇪🇸 Module6 – Public Transport & Directions 問路搭車 (Coming Soon! )', moduleId: 'm6', lessons: [] },
    { title: '🇪🇸 Module7 – Order Pasta and Wine 餐廳點餐 (Coming Soon! )', moduleId: 'm7', lessons: [] },
    { title: '🇪🇸 Module8 – Shop at Supermarket / Ask for Deals 超市購物 (Coming Soon! )', moduleId: 'm8', lessons: [] },
    { title: '🇪🇸 Module9 – Describe Symptoms at the Pharmacy 看病買藥 (Coming Soon! )', moduleId: 'm9', lessons: [] },
    { title: '🇪🇸 Module10 – Book a Room & Ask the Host 找民宿 (Coming Soon! )', moduleId: 'm10', lessons: [] },
    { title: '🇪🇸 Module11 – Open a Bank Account 開戶對話 (Coming Soon! )', moduleId: 'm11', lessons: [] },
    { title: '🇪🇸 Module12 – Navigate Bureaucracy 處理行政 (Coming Soon! )', moduleId: 'm12', lessons: [] },
    {
        title: '🇪🇸 Module13 – Make Friends & Introduce Yourself 認識朋友與自我介紹',
        moduleId: 'm13',
        lessons: [
          { name: 'Lesson1: Sharing More About Yourself', name_zh: '第1課：更深入介紹自己（', link: 'module13/lesson1.html' },
          { name: 'Lesson2: Talking About Where You Live', name_zh: '第2課：談論你住在哪裡', link: 'module13/lesson2.html' },
          { name: 'Lesson3: What I Like and What I Don’t', name_zh: '第3課：我喜歡什麼、不喜歡什麼（', link: 'module13/lesson3.html' },
          { name: 'Lesson4: Describing Your Family', name_zh: '第4課：介紹你的家庭', link: 'module13/lesson4.html' },
          { name: 'Lesson5: Basic Personality & Adjectives', name_zh: '第5課：基本個性與形容詞', link: 'module13/lesson5.html' }
        ]
    },
    { title: '🇪🇸 Module14 – Express Opinions 表達想法 (Coming Soon! )', moduleId: 'm14', lessons: [] },
    { title: '🇪🇸 Module15 – Festival Market Chat 市集聊天 (Coming Soon! )', moduleId: 'm15', lessons: [] },
    { title: '🇪🇸 Module16 – Emergencies & Help 緊急狀況 (Coming Soon! )', moduleId: 'm16', lessons: [] },
    { title: '🇪🇸 Module17 – Plans and Time 任務與時間 (Coming Soon! )', moduleId: 'm17', lessons: [] },
    { title: '🇪🇸 Module18 – Daily Errands 日常生活 (Coming Soon! )', moduleId: 'm18', lessons: [] },
    { title: '🇪🇸 Module19 – Appearance & Feelings 外觀與感受 (Coming Soon! )', moduleId: 'm19', lessons: [] },
    { title: '🇪🇸 Module20 – Weather 天氣任務 (Coming Soon! )', moduleId: 'm20', lessons: [] },
    { title: '🇪🇸 Module21 – Make a Reservation 預約任務 (Coming Soon! )', moduleId: 'm21', lessons: [] },
    { title: '🇪🇸 Module22 – Ask for Clarification 理解與確認 (Coming Soon! )', moduleId: 'm22', lessons: [] },
];
