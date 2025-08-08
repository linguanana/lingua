// shared/js/lesson-load.js (已修復載入問題，並確保 Tip 區塊中的單字正確加粗)

window.currentLanguage = window.currentLanguage || localStorage.getItem('userLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    console.log("lesson-load.js: DOMContentLoaded event fired.");

    const lessonId = new URLSearchParams(window.location.search).get('lessonId');
    console.log("lesson-load.js: Retrieved lessonId from URL:", lessonId);

    if (!lessonId) {
        console.error("lesson-load.js: No lessonId found in URL. Displaying generic error.");
        document.body.innerHTML = '<h1>錯誤：未提供 lessonId。請在 URL 中指定 lessonId (例如：?lessonId=1)。</h1>';
        return;
    }

    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonId}.js`;
    script.async = true;
    console.log("lesson-load.js: Attempting to load dynamic script from:", script.src);

    script.onload = () => {
        console.log("lesson-load.js: Dynamic lesson script LOADED. Checking for window.lessonData...");

        if (typeof window.lessonData === 'undefined' || window.lessonData === null) {
            console.error(`lesson-load.js: 'window.lessonData' is undefined or null after script load for lessonId ${lessonId}.
                                 This indicates lesson${lessonId}.js did not correctly define and expose 'lessonData'.
                                 Ensure your lesson file contains 'const lessonData = {...};' at the top level.`);
            document.body.innerHTML = `<h1>錯誤：找不到課程資料或定義不正確，課程 ID ${lessonId}。請檢查控制台。</h1>`;
            return;
        }

        console.log("lesson-load.js: 'lessonData' found. Proceeding with rendering.");

        const appDiv = document.getElementById('app');
        if (!appDiv) {
            console.error("lesson-load.js: 'app' div not found in HTML. Cannot render lesson.");
            document.body.innerHTML = '<h1>錯誤：找不到應用程式根元素 (div id="app")。</h1>';
            return;
        }
        appDiv.innerHTML = '';

        // --- Render Lesson Header ---
        const moduleLessonHeader = document.createElement('h1');
        moduleLessonHeader.title = lessonData.module_title_tooltip || `${lessonData.title_en} (${lessonData.title_zh})`;
        // zh and en
        const displayTitle = lessonData.lesson_display_title || (currentLanguage === 'zh' ? lessonData.title_zh : lessonData.title_en);
        moduleLessonHeader.innerHTML = `${lessonData.module_emoji || '🇮🇹'} Module ${lessonData.module_id || ''} – Lesson ${lessonData.lesson_id || ''}: ${displayTitle}`;
        appDiv.appendChild(moduleLessonHeader);

        const infoText = document.createElement('p');
        infoText.className = "info-text-size";
        infoText.innerHTML = `
            <strong>🎬 Theme:</strong> ${currentLanguage === 'zh' ? lessonData.theme_zh || lessonData.theme : lessonData.theme || 'N/A'}<br>
            <strong>📚 Lessons:</strong>
            ${lessonData.lesson_navigation ? lessonData.lesson_navigation.map(link =>
                `<a href="lesson.html?lessonId=${link.id}"${link.id == lessonId ? ' class="current-lesson"' : ''}>${link.label}</a>`
            ).join(' | ') : ''}
            <br><br>
            <span class="start-with-word">${lessonData.level_guidance || 'Start with Level 1'}</span>
        `;
        appDiv.appendChild(infoText);

        // --- Render Levels and Sections ---
        lessonData.levels.forEach(level => {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'lesson-level';
            levelDiv.id = `level-${level.levelId}`;

            const levelTitle = document.createElement('h2');
            levelTitle.className = 'level-title';

            const levelTitleText = currentLanguage === 'zh' ? level.title_zh || level.title : level.title;
            levelTitle.innerHTML = `<span class="toggle-icon">+</span> ${levelTitleText}`;
            levelTitle.onclick = () => window.toggleLessonLevel(level.levelId);
            levelDiv.appendChild(levelTitle);

            const levelContentDiv = document.createElement('div');
            levelContentDiv.className = 'level-content hidden';
            levelContentDiv.id = `level-content-${level.levelId}`;
            levelDiv.appendChild(levelContentDiv);

            level.sections.forEach(section => {
                const sectionContainer = document.createElement('div');
                sectionContainer.className = 'section-container';

                const sectionTitle = document.createElement('h3');
                let sectionEmoji = '';
                if (section.type === 'keyPhrase') sectionEmoji = '📗';
                else if (section.type === 'dialogue') sectionEmoji = '🎯';
                else if (section.type === 'tip') sectionEmoji = '📌';
                else if (section.type === 'task') sectionEmoji = '🤖';

                const sectionTitleText = currentLanguage === 'zh' ? section.title_zh || section.title : section.title;
                sectionTitle.innerHTML = `${sectionEmoji} ${sectionTitleText}`;

                sectionContainer.appendChild(sectionTitle);

                if (section.audio) {
                    const audioDiv = document.createElement('div');
                    audioDiv.className = "audio-controls";
                    audioDiv.innerHTML = `<audio controls class="small-audio">
                                            <source src="audio/${section.audio}" type="audio/mpeg">
                                            您的瀏覽器不支援音訊元素。
                                          </audio>`;
                    sectionContainer.appendChild(audioDiv);
                }

                switch (section.type) {
                    case "keyPhrase":
                        if (section.phrases) {
                            const phraseList = document.createElement('div');
                            phraseList.className = "auto-list";
                            section.phrases.forEach(phrase => {
                                const p = document.createElement('p');
                                const meaning = currentLanguage === 'zh' ? `（${phrase.zh}）` : `– ${phrase.en}`;
                                p.innerHTML = `<span class="italian-word">${phrase.text}</span> ${meaning}`;
                                phraseList.appendChild(p);
                            });
                            sectionContainer.appendChild(phraseList);
                        }
                        break;

                    case "dialogue":
                        const dialogueBoxDiv = document.createElement('div');
                        dialogueBoxDiv.className = "dialogue-box";

                        const getSpeakerEmoji = (speakerChar) => {
                            if (speakerChar === "1") return "👩🏻‍‍";
                            if (speakerChar === "2") return "🧑‍🍳";
                            if (speakerChar === "🧸") return "🧸";
                            if (speakerChar === "👨") return "👨";
                            if (speakerChar === "👩‍🏫") return "👩‍🏫";
                            if (speakerChar === "🧑") return "🧑";
                            if (speakerChar === "👨‍🍳") return "👨‍🍳";
                            if (speakerChar === "👩") return "👩";
                            if (speakerChar === "👧") return "👧";
                            if (speakerChar === "👦") return "👦";
                            if (speakerChar === "🧑‍💻") return "🧑‍💻";
                            if (speakerChar === "👩‍🎓") return "👩‍🎓";
                            return speakerChar;
                        };

                        if (section.dialogues && section.dialogues.length > 0) {
                            section.dialogues.forEach(dialogueBlock => {
                                const dialogueBlockTitle = document.createElement('p');
                                dialogueBlockTitle.innerHTML = `<strong>${dialogueBlock.emoji ? dialogueBlock.emoji + ' ' : ''}${dialogueBlock.title}</strong><br>`;
                                dialogueBoxDiv.appendChild(dialogueBlockTitle);

                                if (dialogueBlock.audio) {
                                    const blockAudioDiv = document.createElement('div');
                                    blockAudioDiv.className = "audio-controls";
                                    blockAudioDiv.innerHTML = `<audio controls class="small-audio">
                                                                <source src="audio/${dialogueBlock.audio}" type="audio/mpeg">
                                                                您的瀏覽器不支援音訊元素。
                                                              </audio>`;
                                    dialogueBoxDiv.appendChild(blockAudioDiv);
                                }

                                dialogueBlock.lines.forEach(line => {
                                    const p = document.createElement('p');
                                    const displaySpeaker = line.speaker ? `${getSpeakerEmoji(line.speaker)} : ` : '';
                                    const meaning = currentLanguage === 'zh' ? `（${line.zh}）` : `→ ${line.en}`;
                                    p.innerHTML = `${displaySpeaker}<span class="italian-word">${line.text}</span><br>${meaning}`;
                                    dialogueBoxDiv.appendChild(p);
                                });
                                dialogueBoxDiv.appendChild(document.createElement('br'));
                            });
                        } else if (section.lines && section.lines.length > 0) {
                            section.lines.forEach(line => {
                                const p = document.createElement('p');
                                const displaySpeaker = line.speaker ? `${getSpeakerEmoji(line.speaker)} ` : '';
                                p.innerHTML = `${displaySpeaker}<span class="italian-word">${line.text}</span><br>
                                               ${line.en}${line.zh ? `（${line.zh}）` : ""}`;
                                dialogueBoxDiv.appendChild(p);
                            });
                        } else if (section.contexts && section.contexts.length > 0) {
                            section.contexts.forEach(context => {
                                const p = document.createElement('p');
                                let pContent = '';
                                if (context.emoji) pContent += `${context.emoji} `;
                                if (context.title) pContent += `${context.title}<br>`;
                                if (context.phrase) pContent += `<span class="italian-word">${context.phrase}</span> – ${context.en || ''}${context.zh ? `（${context.zh}）` : ''}`;
                                p.innerHTML = pContent;
                                dialogueBoxDiv.appendChild(p);
                            });
                        }
                        sectionContainer.appendChild(dialogueBoxDiv);
                        break;

                    case "tip":
                        if (section.content) {
                            const tipBoxDiv = document.createElement('div');
                            tipBoxDiv.className = section.className || "auto-list";

                            section.content.forEach(item => {
                                if (item.type === "paragraph") {
                                    const p = document.createElement('p');
                                    let pContent = '';
                                    if (item.emoji) pContent += `${item.emoji} `;
                                    // 已修復：將所有的義大利文單字用 <strong> 包裹，使其變為粗體
                                    if (item.text) pContent += `<strong>${item.text}</strong>`;
                                    if (item.en) pContent += ` ${item.en}`;
                                    if (item.zh) pContent += `（${item.zh}）`;
                                    if (item.text_2) pContent += ` <strong>${item.text_2}</strong>`;
                                    if (item.en_2) pContent += ` ${item.en_2}`;
                                    if (item.zh_2) pContent += `（${item.zh_2}）`;
                                    if (item.text_3) pContent += ` <strong>${item.text_3}</strong>`;
                                    if (item.en_3) pContent += ` ${item.en_3}`;
                                    if (item.zh_3) pContent += `（${item.zh_3}）`;

                                    p.innerHTML = pContent;
                                    tipBoxDiv.appendChild(p);
                                } else if (item.type === "nested_paragraph") {
                                    const p = document.createElement('p');
                                    p.className = item.className || "tip-nested";
                                    let pContent = '';
                                    if (item.emoji) pContent += `${item.emoji} `;
                                    if (item.strong) pContent += `<strong>${item.strong}</strong>`;
                                    if (item.text) pContent += `<strong>${item.text}</strong>`;
                                    if (item.en) pContent += ` ${item.en}`;
                                    if (item.zh) pContent += `（${item.zh}）`;
                                    p.innerHTML = pContent;
                                    tipBoxDiv.appendChild(p);
                                }
                            });
                            sectionContainer.appendChild(tipBoxDiv);
                        }
                        break;

                    case "task":
                        if (section.content) {
                            const taskDiv = document.createElement('div');
                            taskDiv.className = section.className || "auto-list";
                            taskDiv.innerHTML = `<p>${section.content}</p>`;
                            sectionContainer.appendChild(taskDiv);
                        }
                        break;

                    default:
                        console.warn(`Unknown section type: ${section.type}`);
                        break;
                }
                levelContentDiv.appendChild(sectionContainer);
            });
            appDiv.appendChild(levelDiv);
        });
    };

    script.onerror = (e) => {
        console.error(`lesson-load.js: ERROR loading dynamic script from ${script.src}:`, e);
        document.body.innerHTML = `<h1>錯誤：無法載入課程資料腳本，課程 ID ${lessonId}。請檢查檔案路徑和瀏覽器控制台。</h1>`;
    };

    document.head.appendChild(script);

    window.toggleLessonLevel = function(levelId) {
        const levelContent = document.getElementById(`level-content-${levelId}`);
        const levelTitle = document.querySelector(`#level-${levelId} .level-title`);
        const toggleIcon = levelTitle ? levelTitle.querySelector('.toggle-icon') : null;

        if (!levelContent) {
            console.warn(`toggleLessonLevel: levelContent for levelId ${levelId} not found.`);
            return;
        }

        if (levelContent.classList.contains('hidden')) {
            levelContent.classList.remove('hidden');
            if (toggleIcon) toggleIcon.textContent = '−';
        } else {
            levelContent.classList.add('hidden');
            if (toggleIcon) toggleIcon.textContent = '+';
        }
    };
});
