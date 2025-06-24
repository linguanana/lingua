// 模組資料，您可以直接在這裡修改模組的名稱和課程內容
const modulesData = [
    {
        title: '🇮🇹 Module 1 – Greeting 問候',
        lessons: [
          { name: 'Lesson 1: Say Hello 打招呼', link: 'module1/lesson1.html' }, // 確保這裡顯示完整
                     { name: 'Lesson 2: Ask “How are you?” 最近如何', link: 'module1/lesson2.html' },
                     { name: 'Lesson 3: Introduce Your Name 說出名字', link: 'module1/lesson3.html' },
                     { name: 'Lesson 4: Where are you from? 你從哪裡來', link: 'module1/lesson4.html' },
                     { name: 'Lesson 5: Personal Pronouns & Possession', link: 'module1/lesson5.html' },
                     { name: 'Lesson 6: Polite Words 客氣詞', link: 'module1/lesson6.html' },
                     { name: 'Lesson 7: Professions & Greetings 打招呼與職業', link: 'module1/lesson7.html' },
                    },
    },
    { title: 'Module 2 – Introduce Yourself 自我介紹', lessons: [] },
    { title: 'Module 3 – Order at a Café 點餐', lessons: [] },
    { title: 'Module 4 – Buy Fruits at the Market 買水果', lessons: [] },
    { title: 'Module 5 – Buy a Train Ticket to Florence 買火車票', lessons: [] },
    { title: 'Module 6 – Hotel Check-in 櫃台對話', lessons: [] },
    { title: 'Module 7 – Public Transport & Directions 問路搭車', lessons: [] },
    { title: 'Module 8 – Order Pasta and Wine 餐廳點餐', lessons: [] },
    { title: 'Module 9 – Shop at Supermarket / Ask for Deals 超市購物', lessons: [] },
    { title: 'Module 10 – Describe Symptoms at the Pharmacy 看病買藥', lessons: [] },
    { title: 'Module 11 – Book a Room & Ask the Host 找民宿', lessons: [] },
    { title: 'Module 12 – Open a Bank Account 開戶對話', lessons: [] },
    { title: 'Module 13 – Navigate Bureaucracy 處理行政', lessons: [] },
    { title: 'Module 14 – Make Friends and Describe 家人與朋友', lessons: [] },
    { title: 'Module 15 – Express Opinions 表達想法', lessons: [] },
    { title: 'Module 16 – Festival Market Chat 市集聊天', lessons: [] },
    { title: 'Module 17 – Emergencies & Help 緊急狀況', lessons: [] },
    { title: 'Module 18 – Plans and Time 任務與時間', lessons: [] },
    { title: 'Module 19 – Daily Errands 日常生活', lessons: [] },
    { title: 'Module 20 – Appearance & Feelings 外觀與感受', lessons: [] },
    { title: 'Module 21 – Weather 天氣任務', lessons: [] },
    { title: 'Module 22 – Make a Reservation 預約任務', lessons: [] },
    { title: 'Module 23 – Ask for Clarification 理解與確認', lessons: [] },
];

// 模組生成函數
function renderModules() {
    const modulesContainer = document.getElementById('modules-container');
    modulesContainer.innerHTML = ''; // 清空現有內容

    modulesData.forEach(moduleData => {
        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');

        const h2 = document.createElement('h2');
        h2.textContent = moduleData.title;
        h2.onclick = function() { toggleLessons(this); }; // 設定點擊事件

        const lessonListDiv = document.createElement('div');
        lessonListDiv.classList.add('lesson-list');

        moduleData.lessons.forEach(lesson => {
            const a = document.createElement('a');
            a.href = lesson.link;
            a.textContent = lesson.name;
            lessonListDiv.appendChild(a);
        });

        moduleDiv.appendChild(h2);
        moduleDiv.appendChild(lessonListDiv);
        modulesContainer.appendChild(moduleDiv);
    });
}

// 模組展開/收合函數 (與之前相同)
function toggleLessons(el) {
    const moduleDiv = el.closest('.module');
    const lessonList = el.nextElementSibling;

    if (moduleDiv.classList.contains('active')) {
        moduleDiv.classList.remove('active');
        lessonList.style.maxHeight = '0';
        lessonList.style.padding = '0px 12px';
    } else {
        // Close other open modules
        document.querySelectorAll('.module.active').forEach(openModule => {
            openModule.classList.remove('active');
            openModule.querySelector('.lesson-list').style.maxHeight = '0';
            openModule.querySelector('.lesson-list').style.padding = '0px 12px';
        });

        moduleDiv.classList.add('active');
        lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
        lessonList.style.padding = '10px 12px';
    }
}

// 頁面載入完成後呼叫 renderModules 函數
document.addEventListener('DOMContentLoaded', renderModules);
