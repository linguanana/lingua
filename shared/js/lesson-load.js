// shared/js/lesson-load.js (UPDATED based on ep-load.js philosophy)

document.addEventListener('DOMContentLoaded', () => {
    console.log("lesson-load.js: DOMContentLoaded event fired.");

    const lessonId = new URLSearchParams(window.location.search).get('lessonId');
    console.log("lesson-load.js: Retrieved lessonId from URL:", lessonId);

    if (!lessonId) {
        console.error("lesson-load.js: No lessonId found in URL. Displaying generic error.");
        document.body.innerHTML = '<h1>Error: No lessonId provided. Please specify a lessonId in the URL (e.g., ?lessonId=1).</h1>';
        return;
    }

    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonId}.js`; // Path relative to the HTML file (e.g., lesson11.html)
    script.async = true; // Use async to not block parsing, but `onload` will still fire
    console.log("lesson-load.js: Attempting to load dynamic script from:", script.src);

    script.onload = () => {
        console.log("lesson-load.js: Dynamic lesson script LOADED. Checking for window.lessonData...");

        // After the script loads, lessonData should be available globally
        if (typeof window.lessonData === 'undefined' || window.lessonData === null) {
            console.error(`lesson-load.js: 'window.lessonData' is undefined or null after script load for lessonId ${lessonId}.
                           This indicates lesson${lessonId}.js did not correctly define and expose 'lessonData'.
                           Ensure your lesson file contains 'const lessonData = {...};' at the top level.`);
            document.body.innerHTML = `<h1>Error: Lesson data not found or improperly defined for lessonId ${lessonId}. Please check console.</h1>`;
            return;
        }

        console.log("lesson-load.js: 'lessonData' found. Proceeding with rendering.");

        const appDiv = document.getElementById('app');
        if (!appDiv) {
            console.error("lesson-load.js: 'app' div not found in HTML. Cannot render lesson.");
            document.body.innerHTML = '<h1>Error: Application root element (div id="app") not found.</h1>';
            return;
        }
        appDiv.innerHTML = ''; // Clear existing content

        const titleHeader = document.createElement('h1');
        titleHeader.innerHTML = `${lessonData.lesson} - ${lessonData.title_en} (${lessonData.title_zh})`;
        appDiv.appendChild(titleHeader);

        lessonData.levels.forEach(level => {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level-box';
            levelDiv.id = `level-${level.levelId}`;

            const levelTitle = document.createElement('h2');
            levelTitle.innerHTML = `<span class="toggle-icon">+</span> ${level.title}`;
            levelTitle.className = 'level-title';
            levelTitle.onclick = () => toggleLessonLevel(level.levelId);
            levelDiv.appendChild(levelTitle);

            const levelContentDiv = document.createElement('div');
            levelContentDiv.className = 'level-content hidden'; // Start hidden
            levelContentDiv.id = `level-content-${level.levelId}`;
            levelDiv.appendChild(levelContentDiv);

            level.sections.forEach(section => {
                const sectionTitle = document.createElement('h3');
                sectionTitle.innerHTML = section.title;
                levelContentDiv.appendChild(sectionTitle);

                if (section.audio) {
                    const audioDiv = document.createElement('div');
                    audioDiv.className = "audio-controls";
                    audioDiv.innerHTML = `<audio controls class="small-audio">
                                              <source src="audio/${section.audio}" type="audio/mpeg">
                                              Your browser does not support the audio element.
                                            </audio>`;
                    levelContentDiv.appendChild(audioDiv);
                }

                if (section.type === "keyPhrase") {
                    const phraseList = document.createElement('ul');
                    phraseList.className = "phrase-list";
                    section.phrases.forEach(phrase => {
                        const li = document.createElement('li');
                        li.innerHTML = `<span class="italian-word">${phrase.text}</span> – ${phrase.en}（${phrase.zh}）`;
                        phraseList.appendChild(li);
                    });
                    levelContentDiv.appendChild(phraseList);

                } else if (section.type === "dialogue") {
                    const dialogueBoxDiv = document.createElement('div');
                    dialogueBoxDiv.className = "dialogue-box";

                    const getSpeakerEmoji = (speakerId) => {
                        if (speakerId === "1") {
                            return "👩🏻‍‍";
                        } else if (speakerId === "2") {
                            return "🧑‍🍳";
                        }
                        return speakerId;
                    };

                    if (section.scenarios) {
                        section.scenarios.forEach(scenario => {
                            const scenarioTitle = document.createElement('strong');
                            scenarioTitle.innerHTML = scenario.title;
                            dialogueBoxDiv.appendChild(scenarioTitle);
                            scenario.lines.forEach(line => {
                                const p = document.createElement('p');
                                let lineContent = '';
                                const displaySpeaker = line.speaker ? getSpeakerEmoji(line.speaker) : '';
                                if (displaySpeaker) lineContent += `${displaySpeaker} : `;
                                lineContent += `<span class="italian-word">${line.text}</span>`;
                                if (line.en || line.zh) {
                                    lineContent += '<br>→ ';
                                    if (line.en) lineContent += line.en;
                                    if (line.zh) lineContent += `（${line.zh}）`;
                                }
                                p.innerHTML = lineContent;
                                dialogueBoxDiv.appendChild(p);
                            });
                            dialogueBoxDiv.innerHTML += '<br>';
                        });
                    } else if (section.lines) {
                        section.lines.forEach(line => {
                            const p = document.createElement('p');
                            let lineContent = '';
                            let displaySpeakerEmoji = line.emoji;
                            if (!displaySpeakerEmoji && line.speaker) {
                                displaySpeakerEmoji = getSpeakerEmoji(line.speaker);
                            }
                            if (displaySpeakerEmoji) lineContent += `${displaySpeakerEmoji} `;
                            lineContent += `Say <span class="italian-word">${line.text}</span>`;
                            if (line.en) lineContent += ` – ${line.en}`;
                            if (line.zh) lineContent += `（${line.zh}）`;
                            p.innerHTML = lineContent;
                            dialogueBoxDiv.appendChild(p);
                        });
                    }
                    levelContentDiv.appendChild(dialogueBoxDiv);

                } else if (section.type === "tip") {
                    const tipBoxDiv = document.createElement('div');
                    tipBoxDiv.className = "tip-box";

                    section.content.forEach(item => {
                        if (item.type === "paragraph") {
                            const p = document.createElement('p');
                            let pContent = '';
                            if (item.emoji) pContent += `${item.emoji} `;
                            pContent += `<span class="italian-word">${item.text}</span>`;
                            if (item.en) pContent += ` ${item.en}`;
                            if (item.text_2) pContent += ` <span class="italian-word">${item.text_2}</span>`;
                            if (item.en_2) pContent += ` ${item.en_2}`;
                            if (item.text_3) pContent += ` <span class="italian-word">${item.text_3}</span>`;
                            if (item.en_3) pContent += ` ${item.en_3}`;
                            if (item.zh) pContent += `（${item.zh}）`;
                            p.innerHTML = pContent;
                            tipBoxDiv.appendChild(p);

                        } else if (item.type === "comparison_paragraph") {
                            const p = document.createElement('p');
                            let pContent = '';
                            if (item.emoji) pContent += `${item.emoji} `;
                            pContent += `<span class="italian-word">${item.phrase1}</span> `;
                            if (item.phrase1_en) pContent += `${item.phrase1_en} `;
                            if (item.phrase1_zh) pContent += `（${item.phrase1_zh}）`;

                            if (item.vs_text) pContent += ` <strong>${item.vs_text}</strong> `;

                            pContent += `<span class="italian-word">${item.phrase2}</span>`;
                            if (item.phrase2_en) pContent += ` ${item.phrase2_en}`;
                            if (item.phrase2_zh) pContent += `（${item.phrase2_zh}）`;

                            if (item.overall_note_en || item.overall_note_zh) {
                                pContent += `<br>→ `;
                                if (item.overall_note_en) pContent += item.overall_note_en;
                                if (item.overall_note_zh) pContent += `（${item.overall_note_zh}）`;
                            }
                            p.innerHTML = pContent;
                            tipBoxDiv.appendChild(p);

                        } else if (item.type === "list_paragraph") {
                            const listContainer = document.createElement('div');
                            if (item.emoji) {
                                const emojiSpan = document.createElement('span');
                                emojiSpan.className = 'emoji-prefix';
                                emojiSpan.textContent = item.emoji + ' ';
                                listContainer.appendChild(emojiSpan);
                            }
                            if (item.introduction_en) {
                                const introP = document.createElement('p');
                                introP.textContent = item.introduction_en;
                                if (item.introduction_zh) {
                                    introP.textContent += `（${item.introduction_zh}）`;
                                }
                                listContainer.appendChild(introP);
                            }

                            const ul = document.createElement('ul');
                            ul.className = "tip-list";
                            item.items.forEach(listItem => {
                                const li = document.createElement('li');
                                li.innerHTML = `<span class="italian-word">${listItem.text}</span> – ${listItem.en}`;
                                if (listItem.zh) li.innerHTML += `（${listItem.zh}）`;
                                ul.appendChild(li);
                            });
                            listContainer.appendChild(ul);
                            tipBoxDiv.appendChild(listContainer);

                        } else if (item.type === "categorized_phrases_tip") {
                            const subTipContainer = document.createElement('div');
                            subTipContainer.className = "sub-tip";
                            const subTipTitle = document.createElement('h4');
                            subTipTitle.innerHTML = item.title;
                            subTipContainer.appendChild(subTipTitle);

                            item.categories.forEach(category => {
                                const categoryP = document.createElement('p');
                                let categoryContent = '';
                                if (category.emoji) categoryContent += `${category.emoji} `;
                                categoryContent += `<strong>${category.context}</strong>`;
                                if (category.context_en) categoryContent += ` (${category.context_en})`;
                                if (category.context_zh) categoryContent += `（${category.context_zh}）`;
                                categoryP.innerHTML = categoryContent;
                                subTipContainer.appendChild(categoryP);

                                if (category.phrases) {
                                    const phraseList = document.createElement('ul');
                                    phraseList.className = "example-list";
                                    category.phrases.forEach(phrase => {
                                        const phraseLi = document.createElement('li');
                                        phraseLi.innerHTML = `<span class="italian-word">${phrase.text}</span> – ${phrase.en}`;
                                        if (phrase.zh) phraseLi.innerHTML += `（${phrase.zh}）`;
                                        phraseList.appendChild(phraseLi);
                                    });
                                    subTipContainer.appendChild(phraseList);
                                }
                            });
                            tipBoxDiv.appendChild(subTipContainer);

                        } else if (item.type === "nested-paragraph") {
                            const p = document.createElement('p');
                            p.className = "nested-tip";
                            let pContent = '';
                            if (item.text) pContent += item.text;
                            if (item.en) pContent += ` ${item.en}`;
                            if (item.zh) pContent += `（${item.zh}）`;
                            if (item.example) pContent += `<br>Example: ${item.example}`;
                            p.innerHTML = pContent;
                            tipBoxDiv.appendChild(p);

                        } else if (item.type === "nested-2-paragraph") {
                            const p = document.createElement('p');
                            p.className = "nested-tip-2";
                            let pContent = '';
                            if (item.text) pContent += item.text;
                            if (item.zh) pContent += `（${item.zh}）`;
                            p.innerHTML = pContent;
                            tipBoxDiv.appendChild(p);

                        } else if (item.type === "dialogue-example") {
                            const p = document.createElement('p');
                            p.className = "dialogue-example";
                            p.innerHTML = `${item.speaker_a_emoji} ${item.speaker_a}: <span class="italian-word">${item.text_a}</span><br>${item.speaker_b_emoji} ${item.speaker_b}: <span class="italian-word">${item.text_b}</span>`;
                            tipBoxDiv.appendChild(p);
                        }
                    });
                    levelContentDiv.appendChild(tipBoxDiv);
                }
            });
            appDiv.appendChild(levelDiv);
        });
    };

    script.onerror = (e) => {
        console.error(`lesson-load.js: ERROR loading dynamic script from ${script.src}:`, e);
        document.body.innerHTML = `<h1>Error: Failed to load lesson data script for lessonId ${lessonId}. Please check your file path and the browser console for details.</h1>`;
    };

    document.head.appendChild(script);
    console.log("lesson-load.js: Dynamic script append attempt complete.");

    // This function needs to be in the global scope if it's called by inline onclick,
    // or if it's generally a utility function meant for the entire script.
    function toggleLessonLevel(levelId) {
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
    }
    // Make it available globally if needed by older inline event handlers,
    // though adding event listeners is generally preferred.
    window.toggleLessonLevel = toggleLessonLevel;
});
