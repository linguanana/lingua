// module-load.js

/**
 * 根據提供的模組資料渲染整個應用程式。
 * @param {object} moduleData 包含課程和級別的模組資料。
 */
function renderModule(moduleData) {
    const lessonsContainer = document.getElementById("lessons-container");
    if (!lessonsContainer) {
        console.error("Missing lessons-container element. Check your HTML.");
        return;
    }

    const lessonTitle = document.getElementById("lesson-title");
    if (!lessonTitle) {
        console.error("Missing lesson-title element. Check your HTML.");
        return;
    }

    const lessonTheme = document.getElementById("lesson-theme");
    if (!lessonTheme) {
        console.error("Missing lesson-theme element. Check your HTML.");
        return;
    }

    const lessonContainer = document.getElementById('lesson-container');
    if (!lessonContainer) {
        console.error("Missing lesson-container element. Check your HTML.");
        return;
    }

    // 清空現有內容
    lessonsContainer.innerHTML = "";
    lessonTheme.textContent = "";

    // 建立每個課程的按鈕
    moduleData.lessons.forEach((lesson, index) => {
        const lessonBtn = document.createElement("button");
        lessonBtn.textContent = (index + 1).toString();

        lessonBtn.onclick = function () {
            // 清除上次打開的 Level 狀態
            localStorage.removeItem('lastOpenLevelId');

            // 更新課程標題
            lessonTitle.textContent = `主題: ${lesson.title || `Lesson ${index + 1}`}`;

            // 更新主題文字
            lessonTheme.textContent = `Theme: ${lesson.theme || ""}`;

            // 渲染新的課程內容並設定手風琴效果
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
        lessonTheme.textContent = `Theme: ${firstLesson.theme || ""}`;
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
    container.innerHTML = '';

    // 將提示文字改為英文
    const infoText = document.createElement('p');
    infoText.classList.add('info-text-size');
    infoText.textContent = 'Start with Level 1 — come back for Level 2 or/and 3 as you progress.';
    container.appendChild(infoText);

    levels.forEach((level, index) => {
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('lesson-level');
        levelDiv.id = `level-${index}`; // 為每個 level 區塊設定唯一的 ID

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('level-title');
        titleDiv.textContent = level.title;
        levelDiv.appendChild(titleDiv);

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
    });

    // 在渲染所有課程內容後，設定手風琴效果
    setupAccordion();
}

/**
 * 設置 Level 區塊的手風琴 (Accordion) 功能。
 * - 每次只展開一個區塊。
 * - 使用 localStorage 記住使用者上次打開的區塊。
 */
function setupAccordion() {
    const levelTitles = document.querySelectorAll('.level-title');
    const lessonLevels = document.querySelectorAll('.lesson-level');

    // Helper function to set max-height for smooth transitions
    function setContentMaxHeight(contentElement, isActive) {
        if (isActive) {
            contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
        } else {
            contentElement.style.maxHeight = null;
        }
    }

    // On Page Load: Try to restore the last open level
    const lastOpenLevelId = localStorage.getItem('lastOpenLevelId');
    if (lastOpenLevelId) {
        const targetLevel = document.getElementById(lastOpenLevelId);
        if (targetLevel) {
            targetLevel.classList.add('active');
            const content = targetLevel.querySelector('.level-content');
            setContentMaxHeight(content, true);
        }
    }

    // Click Event Listener for Level Titles
    levelTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            const currentLevel = this.closest('.lesson-level');
            const content = currentLevel.querySelector('.level-content');
            const currentLevelId = currentLevel.id;

            if (currentLevel.classList.contains('active')) {
                // Close it
                currentLevel.classList.remove('active');
                setContentMaxHeight(content, false);
                localStorage.removeItem('lastOpenLevelId');
            } else {
                // If the clicked level is not active (closed), open it
                // First, close any other open levels (accordion behavior)
                lessonLevels.forEach(function(level) {
                    if (level !== currentLevel && level.classList.contains('active')) {
                        level.classList.remove('active');
                        setContentMaxHeight(level.querySelector('.level-content'), false);
                    }
                });

                // Then, open the clicked level
                currentLevel.classList.add('active');
                setContentMaxHeight(content, true);
                localStorage.setItem('lastOpenLevelId', currentLevelId);
            }
        });
    });
}
