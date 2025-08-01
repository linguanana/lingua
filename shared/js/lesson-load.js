// shared/js/lesson-load.js (FINAL COMPREHENSIVE VERSION for Levels/Sections/Types)

document.addEventListener('DOMContentLoaded', () => {
    console.log("lesson-load.js: DOMContentLoaded event fired.");

    // Get lessonId from URL (e.g., ?lessonId=1)
    const lessonId = new URLSearchParams(window.location.search).get('lessonId');
    console.log("lesson-load.js: Retrieved lessonId from URL:", lessonId);

    if (!lessonId) {
        console.error("lesson-load.js: No lessonId found in URL. Displaying generic error.");
        document.body.innerHTML = '<h1>Error: No lessonId provided. Please specify a lessonId in the URL (e.g., ?lessonId=1).</h1>';
        return;
    }

    // Dynamically create a script tag to load the specific lesson's data file
    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonId}.js`; // This path should be relative to your lesson.html
    script.async = true; // Load asynchronously
    console.log("lesson-load.js: Attempting to load dynamic script from:", script.src);

    script.onload = () => {
        console.log("lesson-load.js: Dynamic lesson script LOADED. Checking for window.lessonData...");

        // After the script loads, window.lessonData should be available globally
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
        appDiv.innerHTML = ''; // Clear existing 'Loading lesson content...' or any previous content

        // --- Render Lesson Header (Module/Lesson Title and Info Text) ---
        const moduleLessonHeader = document.createElement('h1');
        moduleLessonHeader.title = lessonData.module_title_tooltip || `${lessonData.title_en} (${lessonData.title_zh})`; // Use tooltip if provided
        moduleLessonHeader.innerHTML = `${lessonData.module_emoji || '🇮🇹'} Module ${lessonData.module_id || ''} – Lesson ${lessonData.lesson_id || ''}: ${lessonData.lesson_display_title || lessonData.title_en}`; // Example: 🇮🇹 Module 1 – Lesson 2: Come stai? Missione al mercato
        appDiv.appendChild(moduleLessonHeader);

        const infoText = document.createElement('p');
        infoText.className = "info-text-size";
        infoText.innerHTML = `
            <strong>🎬 Theme:</strong> ${lessonData.theme || 'N/A'}<br>
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
            levelDiv.className = 'lesson-level'; // Matches your existing CSS class
            levelDiv.id = `level-${level.levelId}`;

            const levelTitle = document.createElement('h2');
            levelTitle.className = 'level-title'; // Matches your existing CSS class
            levelTitle.innerHTML = `<span class="toggle-icon">+</span> ${level.title}`;
            levelTitle.onclick = () => window.toggleLessonLevel(level.levelId); // Use global function
            levelDiv.appendChild(levelTitle);

            const levelContentDiv = document.createElement('div');
            levelContentDiv.className = 'level-content hidden'; // Matches your existing CSS class, start hidden
            levelContentDiv.id = `level-content-${level.levelId}`;
            levelDiv.appendChild(levelContentDiv);

            // Iterate through each section within the current level
            level.sections.forEach(section => {
                const sectionContainer = document.createElement('div');
                sectionContainer.className = 'section-container'; // Generic wrapper for section content

                const sectionTitle = document.createElement('h3');
                let sectionEmoji = '';
                if (section.type === 'keyPhrase') sectionEmoji = '📗';
                else if (section.type === 'dialogue') sectionEmoji = '🎯'; // Changed emoji for general dialogue/usage
                else if (section.type === 'tip') sectionEmoji = '📌';
                else if (section.type === 'task') sectionEmoji = '🤖'; // Re-added emoji for task

                sectionTitle.innerHTML = `${sectionEmoji} ${section.title}`;
                sectionContainer.appendChild(sectionTitle);

                // Optional: Section-level audio player (if section.audio is present)
                if (section.audio) {
                    const audioDiv = document.createElement('div');
                    audioDiv.className = "audio-controls";
                    audioDiv.innerHTML = `<audio controls class="small-audio">
                                              <source src="audio/${section.audio}" type="audio/mpeg">
                                              Your browser does not support the audio element.
                                            </audio>`;
                    sectionContainer.appendChild(audioDiv);
                }

                // Render content based on section type
                switch (section.type) {
                    case "keyPhrase":
                        if (section.phrases) {
                            const phraseList = document.createElement('div');
                            phraseList.className = "auto-list"; // Matches your HTML
                            section.phrases.forEach(phrase => {
                                const p = document.createElement('p'); // Using paragraph for each phrase for spacing
                                p.innerHTML = `<span class="italian-word">${phrase.text}</span> – ${phrase.en} （${phrase.zh}）`;
                                phraseList.appendChild(p);
                            });
                            sectionContainer.appendChild(phraseList);
                        }
                        break;

                    case "dialogue":
                        const dialogueBoxDiv = document.createElement('div');
                        dialogueBoxDiv.className = "dialogue-box"; // Matches your HTML

                        // Helper for simple speaker emojis (1, 2, or custom characters)
                        const getSpeakerEmoji = (speakerChar) => {
                            if (speakerChar === "1") return "👩🏻‍‍";
                            if (speakerChar === "2") return "🧑‍🍳";
                            // For custom characters like "🧸" or "👨"
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
                            return speakerChar; // Fallback to original char if no specific emoji
                        };


                        if (section.dialogues && section.dialogues.length > 0) {
                            // Handle sections with multiple titled dialogue blocks (like your market example)
                            section.dialogues.forEach(dialogueBlock => {
                                // Add a title for each dialogue block
                                const dialogueBlockTitle = document.createElement('p');
                                dialogueBlockTitle.innerHTML = `<strong>${dialogueBlock.emoji ? dialogueBlock.emoji + ' ' : ''}${dialogueBlock.title}</strong><br>`;
                                dialogueBoxDiv.appendChild(dialogueBlockTitle);

                                // Optional: Audio specific to this dialogue block
                                if (dialogueBlock.audio) {
                                    const blockAudioDiv = document.createElement('div');
                                    blockAudioDiv.className = "audio-controls";
                                    blockAudioDiv.innerHTML = `<audio controls class="small-audio">
                                                                  <source src="audio/${dialogueBlock.audio}" type="audio/mpeg">
                                                                  Your browser does not support the audio element.
                                                                </audio>`;
                                    dialogueBoxDiv.appendChild(blockAudioDiv);
                                }

                                // Render individual lines
                                dialogueBlock.lines.forEach(line => {
                                    const p = document.createElement('p');
                                    const displaySpeaker = line.speaker ? `${getSpeakerEmoji(line.speaker)} : ` : '';
                                    p.innerHTML = `${displaySpeaker}<span class="italian-word">${line.text}</span><br>
                                                   → ${line.en}${line.zh ? `（${line.zh}）` : ""}`;
                                    dialogueBoxDiv.appendChild(p);
                                });
                                dialogueBoxDiv.appendChild(document.createElement('br')); // Add a break between dialogue blocks
                            });
                        } else if (section.lines && section.lines.length > 0) {
                            // Handle simple dialogue (single, untitled block, like your "When to use" example if you had simple lines there)
                            section.lines.forEach(line => {
                                const p = document.createElement('p');
                                const displaySpeaker = line.speaker ? `${getSpeakerEmoji(line.speaker)} ` : ''; // No colon for "When to use" type context
                                p.innerHTML = `${displaySpeaker}<span class="italian-word">${line.text}</span><br>
                                               ${line.en}${line.zh ? `（${line.zh}）` : ""}`;
                                dialogueBoxDiv.appendChild(p);
                            });
                        } else if (section.contexts && section.contexts.length > 0) {
                            // Handles the "When to use" or contextual dialogues where lines are within a context
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
                            tipBoxDiv.className = section.className || "auto-list"; // Use section.className if specified, else auto-list

                            section.content.forEach(item => {
                                if (item.type === "paragraph") {
                                    const p = document.createElement('p');
                                    let pContent = '';
                                    if (item.emoji) pContent += `${item.emoji} `;
                                    pContent += `<span class="italian-word">${item.text}</span>`;
                                    if (item.en) pContent += ` ${item.en}`;
                                    if (item.zh) pContent += `（${item.zh}）`;
                                    if (item.text_2) pContent += ` <span class="italian-word">${item.text_2}</span>`;
                                    if (item.en_2) pContent += ` ${item.en_2}`;
                                    if (item.zh_2) pContent += `（${item.zh_2}）`;
                                    p.innerHTML = pContent;
                                    tipBoxDiv.appendChild(p);
                                } else if (item.type === "nested_paragraph") {
                                    const p = document.createElement('p');
                                    p.className = item.className || "tip-nested";
                                    let pContent = '';
                                    if (item.emoji) pContent += `${item.emoji} `;
                                    if (item.strong) pContent += `<strong>${item.strong}</strong>`;
                                    if (item.text) pContent += `<span class="italian-word">${item.text}</span>`;
                                    if (item.en) pContent += ` ${item.en}`;
                                    if (item.zh) pContent += `（${item.zh}）`;
                                    p.innerHTML = pContent;
                                    tipBoxDiv.appendChild(p);
                                }
                                // You can add more item.types for tips (e.g., 'list_item') if needed
                            });
                            sectionContainer.appendChild(tipBoxDiv);
                        }
                        break;

                    case "task": // Re-added task handling
                        if (section.content) {
                            const taskDiv = document.createElement('div');
                            taskDiv.className = section.className || "auto-list"; // Use section.className or default
                            taskDiv.innerHTML = `<p>${section.content}</p>`; // Simple paragraph for task
                            sectionContainer.appendChild(taskDiv);
                        }
                        break;

                    default:
                        console.warn(`Unknown section type: ${section.type}`);
                        break;
                }
                levelContentDiv.appendChild(sectionContainer); // Append each section to the level's content div
            });
            appDiv.appendChild(levelDiv); // Append the whole level div to the appDiv
        });
    }; // End of script.onload

    script.onerror = (e) => {
        console.error(`lesson-load.js: ERROR loading dynamic script from ${script.src}:`, e);
        document.body.innerHTML = `<h1>Error: Failed to load lesson data script for lessonId ${lessonId}. Please check your file path and the browser console for details.</h1>`;
    };

    document.head.appendChild(script); // Add the dynamic script to the document head

    // Global toggle function for lesson levels (accordions)
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
            if (toggleIcon) toggleIcon.textContent = '−'; // Change icon to minus
            // Optional: for smooth animation, you might set a maxHeight
            // levelContent.style.maxHeight = levelContent.scrollHeight + "px";
        } else {
            levelContent.classList.add('hidden');
            if (toggleIcon) toggleIcon.textContent = '+'; // Change icon to plus
            // Optional: for smooth animation, reset maxHeight
            // levelContent.style.maxHeight = null;
        }
    };
}); // End of DOMContentLoaded
