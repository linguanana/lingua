// shared/js/lesson-load.js (UPDATED with 'en' and 'zh' for all translations)

document.addEventListener('DOMContentLoaded', () => {
    const lessonId = new URLSearchParams(window.location.search).get('lessonId');
    if (!lessonId) {
        document.body.innerHTML = '<h1>Error: No lessonId provided.</h1>';
        return;
    }

    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonId}.js`;
    script.onload = () => {
        if (!window.lessonData) {
            document.body.innerHTML = `<h1>Error: lessonData not found for lessonId ${lessonId}.</h1>`;
            return;
        }

        const appDiv = document.getElementById('app');
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

                    // Function to get emoji based on speaker ID
                    const getSpeakerEmoji = (speakerId) => {
                        if (speakerId === "1") {
                            return "👩🏻‍‍"; // Person 1 emoji
                        } else if (speakerId === "2") {
                            return "🧑‍🍳"; // Person 2 emoji
                        }
                        // Add more conditions for other speaker IDs (e.g., "3", "4", etc.)
                        return speakerId; // Default to showing the raw speaker ID if no emoji is mapped
                    };

                    // Handle dialogue with explicit scenarios (lesson3.js style and Levels 2/3 of lesson1.js)
                    if (section.scenarios) {
                        section.scenarios.forEach(scenario => {
                            const scenarioTitle = document.createElement('strong');
                            scenarioTitle.innerHTML = scenario.title;
                            dialogueBoxDiv.appendChild(scenarioTitle);
                            scenario.lines.forEach(line => {
                                const p = document.createElement('p');
                                let lineContent = '';

                                // Get the emoji based on the speaker ID
                                const displaySpeaker = line.speaker ? getSpeakerEmoji(line.speaker) : '';

                                if (displaySpeaker) lineContent += `${displaySpeaker} : `;
                                lineContent += `<span class="italian-word">${line.text}</span>`;

                                // Now using 'en' and 'zh' for translations
                                if (line.en || line.zh) {
                                    lineContent += '<br>→ ';
                                    if (line.en) lineContent += line.en;
                                    if (line.zh) lineContent += `（${line.zh}）`;
                                }
                                p.innerHTML = lineContent;
                                dialogueBoxDiv.appendChild(p);
                            });
                            dialogueBoxDiv.innerHTML += '<br>'; // Add a break between scenarios
                        });
                    } else if (section.lines) {
                        // Handle simpler dialogue lines (Level 1 of lesson1.js)
                        section.lines.forEach(line => {
                            const p = document.createElement('p');
                            let lineContent = '';

                            // Use original emoji from data, or map if speaker is a number
                            let displaySpeakerEmoji = line.emoji; // Try to use existing emoji first
                            if (!displaySpeakerEmoji && line.speaker) { // If no explicit emoji, but speaker ID exists
                                displaySpeakerEmoji = getSpeakerEmoji(line.speaker); // Map numerical speaker to emoji
                            }

                            if (displaySpeakerEmoji) lineContent += `${displaySpeakerEmoji} `;
                            lineContent += `Say <span class="italian-word">${line.text}</span>`;

                            // Now using 'en' and 'zh' for descriptions/translations
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
                        } else if (item.type === "nested-paragraph") {
                            const p = document.createElement('p');
                            p.className = "nested-tip";
                            let pContent = '';
                            if (item.text) pContent += item.text; // Text might not be Italian word here
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
                        } else if (item.type === "subTip") {
                            const subTipDiv = document.createElement('div');
                            subTipDiv.className = "sub-tip";
                            const subTipTitle = document.createElement('h4');
                            subTipTitle.innerHTML = item.title;
                            subTipDiv.appendChild(subTipTitle);
                            item.sections.forEach(subItem => {
                                const subItemP = document.createElement('p');
                                let subItemContent = '';
                                if (subItem.emoji) subItemContent += `${subItem.emoji} `;
                                subItemContent += `<strong>${subItem.context}</strong>`;
                                if (subItem.context_zh) subItemContent += `（${subItem.context_zh}）`;
                                subItemP.innerHTML = subItemContent;
                                subTipDiv.appendChild(subItemP);

                                if (subItem.examples) {
                                    const exampleList = document.createElement('ul');
                                    exampleList.className = "example-list";
                                    subItem.examples.forEach(example => {
                                        const exampleLi = document.createElement('li');
                                        exampleLi.innerHTML = `<span class="italian-word">${example.text}</span> – ${example.en}`;
                                        if (example.zh) exampleLi.innerHTML += `（${example.zh}）`;
                                        exampleList.appendChild(exampleLi);
                                    });
                                    subTipDiv.appendChild(exampleList);
                                }
                            });
                            tipBoxDiv.appendChild(subTipDiv);
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
    document.head.appendChild(script);

    function toggleLessonLevel(levelId) {
        const levelContent = document.getElementById(`level-content-${levelId}`);
        const toggleIcon = document.querySelector(`#level-${levelId} .toggle-icon`);
        if (levelContent.classList.contains('hidden')) {
            levelContent.classList.remove('hidden');
            toggleIcon.textContent = '−';
        } else {
            levelContent.classList.add('hidden');
            toggleIcon.textContent = '+';
        }
    }
});


// shared/js/lesson-load.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("lesson-load.js: DOMContentLoaded event fired.");

    const lessonId = new URLSearchParams(window.location.search).get('lessonId');
    console.log("lesson-load.js: Retrieved lessonId from URL:", lessonId);

    if (!lessonId) {
        console.error("lesson-load.js: No lessonId found in URL. Displaying generic error.");
        document.body.innerHTML = '<h1>Error: No lessonId provided.</h1>';
        return; // Stop execution here if no lessonId
    }

    // Now, confirm the script path building logic (which we previously confirmed is correct for your structure)
    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonId}.js`; // This path is relative to the HTML file (e.g., lesson11.html)
    console.log("lesson-load.js: Attempting to load dynamic script from:", script.src);

    script.onload = () => {
        console.log("lesson-load.js: Dynamic lesson script LOADED.");
        if (!window.lessonData) {
            console.error("lesson-load.js: 'window.lessonData' is undefined after script load. This means lessonX.js didn't define it.");
            document.body.innerHTML = `<h1>Error: lessonData not found for lessonId ${lessonId}.</h1>`;
            return;
        }
        console.log("lesson-load.js: 'lessonData' found. Proceeding with rendering.");
        // ... (rest of your existing rendering code)
    };

    // Add an onerror handler to catch failed script loads
    script.onerror = (e) => {
        console.error("lesson-load.js: ERROR loading dynamic script:", script.src, e);
        document.body.innerHTML = `<h1>Error: Failed to load lesson data script for lessonId ${lessonId}. Please check the console for details.</h1>`;
    };

    document.head.appendChild(script); // Append the script to the head to start loading
    console.log("lesson-load.js: Dynamic script append attempt complete.");
});
