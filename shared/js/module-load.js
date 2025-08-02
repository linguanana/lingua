// module-load.js

/**
 * 根據提供的模組資料渲染整個應用程式。
 * @param {object} moduleData 包含課程和級別的模組資料。
 */
function renderModule(moduleData) {
    // 修正：將 ID 更改為 "lessons-buttons-wrapper" 以匹配 HTML
    const lessonsContainer = document.getElementById("lessons-container");
    const lessonTitle = document.getElementById("lesson-title");
    const lessonsButtonsWrapper = document.getElementById("lessons-buttons-wrapper");

    if (!lessonsContainer || !lessonTitle || !lessonsButtonsWrapper) {
        console.error("Missing container elements. Check your HTML.");
        return;
    }

    // 清空舊的按鈕
    lessonsContainer.innerHTML = "";

    // 建立每個課程的按鈕
    moduleData.lessons.forEach((lesson, index) => {
        const lessonBtn = document.createElement("button");
        lessonBtn.textContent = (index + 1).toString();

        lessonBtn.onclick = function () {
            // 更新課程標題
            lessonTitle.textContent = `主題: ${lesson.title || `Lesson ${index + 1}`}`;

            // 渲染新的課程內容
            renderLesson(lesson.levels);

            // 更新按鈕的 active 狀態
            document.querySelectorAll('#lessons-container button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        };

        lessonsContainer.appendChild(lessonBtn);
    });

    // 預設顯示第一個課程
    if (moduleData.lessons.length > 0) {
        const firstLesson = moduleData.lessons[0];
        lessonTitle.textContent = `主題: ${firstLesson.title || "Lesson 1"}`;
        renderLesson(firstLesson.levels);

        // 設定第一個按鈕為 active
        lessonsContainer.querySelector('button').classList.add('active');
    }
}

/**
 * 根據提供的級別資料渲染單個課程內容。
 * @param {Array<object>} levels 包含該課程所有級別的陣列。
 */
function renderLesson(levels) {
    const container = document.getElementById('lesson-container');
    if (!container) {
        console.error("Lesson container not found.");
        return;
    }
    container.innerHTML = ''; // 清空舊的內容

    // 增加 level-toggle 前的說明文字
    const infoText = document.createElement('p');
    infoText.classList.add('info-text-size');
    infoText.textContent = '從 Level 1 開始 — 隨著你的進度再回來學習 Level 2 或/和 3。';
    container.appendChild(infoText);

    levels.forEach((level, index) => {
        // 建立 level 外層容器
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('lesson-level');

        // 建立 level 標題
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('level-title');
        titleDiv.textContent = level.title;
        levelDiv.appendChild(titleDiv);

        // 建立 level 內容
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('level-content');

        // 加入 key phrases
        if (level.keyPhrases && level.keyPhrases.length > 0) {
            const h3 = document.createElement('h3');
            h3.textContent = 'Key Phrases';
            contentDiv.appendChild(h3);

            const ul = document.createElement('ul');
            ul.classList.add('auto-list');

            level.keyPhrases.forEach(phrase => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="italian-word">${phrase.text}</span> – ${phrase.en} <span lang="zh-TW">(${phrase.zh})</span>`;
                ul.appendChild(li);
            });
            contentDiv.appendChild(ul);
        }

        // 加入 dialogues
        if (level.dialogues && level.dialogues.length > 0) {
            const h3 = document.createElement('h3');
            h3.textContent = 'Dialogue';
            contentDiv.appendChild(h3);

            const dialogueBox = document.createElement('div');
            dialogueBox.classList.add('dialogue-box');

            level.dialogues.forEach(line => {
                const p = document.createElement('p');
                p.innerHTML = `<span class="start-with-word">${line.speaker}:</span> <span lang="zh-TW">${line.zh}</span><br><strong>${line.text}</strong>`;
                dialogueBox.appendChild(p);
            });
            contentDiv.appendChild(dialogueBox);
        }

        // 加入 tips
        if (level.tips && level.tips.length > 0) {
            const tipBox = document.createElement('div');
            tipBox.classList.add('tip-box');
            level.tips.forEach(tip => {
                const p = document.createElement('p');
                p.innerHTML = `<span class="italian-word">${tip.text}</span> <span lang="zh-TW">(${tip.zh})</span>`;
                tipBox.appendChild(p);
            });
            contentDiv.appendChild(tipBox);
        }

        levelDiv.appendChild(contentDiv);
        container.appendChild(levelDiv);

        // 為每個標題添加收合功能
        titleDiv.addEventListener('click', () => {
            levelDiv.classList.toggle('active');
        });
    });

    // 預設展開第一個 level
    const firstLevel = document.querySelector('.lesson-level');
    if (firstLevel) {
        firstLevel.classList.add('active');
    }
}
