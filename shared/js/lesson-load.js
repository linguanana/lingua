// shared/js/lesson-load.js (UPDATED with new TIP structures rendering)

document.addEventListener('DOMContentLoaded', () => {
    console.log("lesson-load.js: DOMContentLoaded event fired.");

    const lessonId = new URLSearchParams(window.location.search).get('lessonId');
    console.log("lesson-load.js: Retrieved lessonId from URL:", lessonId);

    if (!lessonId) {
        console.error("lesson-load.js: No lessonId found in URL. Displaying generic error.");
        document.body.innerHTML = '<h1>Error: No lessonId provided.</h1>';
        return; // Stop execution here if no lessonId
    }

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
                            // The original 'paragraph' type in lesson1.js sometimes had text_2/en_2/text_3/en_3
                            // This code keeps compatibility for those specific simple paragraphs.
                            // However, the refactored 'comparison_paragraph' and 'list_paragraph' are preferred.
                            if (item.text_2) pContent += ` <span class="italian-word">${item.text_2}</span>`;
                            if (item.en_2) pContent += ` ${item.en_2}`;
                            if (item.text_3) pContent += ` <span class="italian-word">${item.text_3}</span>`;
                            if (item.en_3) pContent += ` ${item.en_3}`;
                            if (item.zh) pContent += `（${item.zh}）`;
                            p.innerHTML = pContent;
                            tipBoxDiv.appendChild(p);

                        } else if (item.type === "comparison_paragraph") { // NEW TYPE RENDERING
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

                        } else if (item.type === "list_paragraph") { // NEW TYPE RENDERING
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
                            ul.className = "tip-list"; // Add a class for styling if needed
                            item.items.forEach(listItem => {
                                const li = document.createElement('li');
                                li.innerHTML = `<span class="italian-word">${listItem.text}</span> – ${listItem.en}`;
                                if (listItem.zh) li.innerHTML += `（${listItem.zh}）`;
                                ul.
