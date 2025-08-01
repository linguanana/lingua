// shared/js/lesson-load.js
document.addEventListener('DOMContentLoaded', () => {
    // A simple function to safely get the lesson ID from the URL
    const getLessonIdFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('lessonId');
    };

    const lessonId = getLessonIdFromUrl();

    if (!lessonId) {
        const appDiv = document.getElementById('app');
        if (appDiv) {
            appDiv.innerHTML = '<div class="text-center text-red-500 font-semibold p-8">Error: Please provide a lessonId in the URL. For example: lesson.html?lessonId=1</div>';
        }
        console.error("Error: lessonId is missing from the URL.");
        return;
    }

    // Dynamically create and append a script tag to load the lesson data
    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonId}.js`;
    script.async = true;

    // Log the path we are attempting to load
    console.log(`Attempting to load lesson data from: ${script.src}`);

    script.onload = () => {
        // After the script is loaded, window.lessonData should be available
        if (typeof window.lessonData === 'undefined') {
            const appDiv = document.getElementById('app');
            if (appDiv) {
                appDiv.innerHTML = `<div class="text-center text-red-500 font-semibold p-8">Error: Cannot find data for lesson ID ${lessonId}.</div>`;
            }
            console.error(`Error: The lesson data object 'lessonData' was not found for lesson ID ${lessonId}. Check the file for syntax errors or variable naming issues.`);
            return;
        }

        console.log(`Successfully loaded data for lesson ID ${lessonId}.`);
        renderLesson(window.lessonData);
    };

    script.onerror = () => {
        const appDiv = document.getElementById('app');
        if (appDiv) {
            appDiv.innerHTML = `<div class="text-center text-red-500 font-semibold p-8">Error: Failed to load lessons/lesson${lessonId}.js. Please check the file path.</div>`;
        }
        console.error(`Error: Failed to load script lessons/lesson${lessonId}.js. Check if the file exists and the path is correct.`);
    };

    document.head.appendChild(script);

    /**
     * Renders the lesson content into the DOM based on the lessonData object.
     * @param {object} lessonData The data object for the current lesson.
     */
    const renderLesson = (lessonData) => {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = ''; // Clear the "Loading" message

        // Render lesson title and introductory info
        const lessonHeader = document.createElement('h1');
        lessonHeader.innerHTML = `${lessonData.lesson_title}`;
        appDiv.appendChild(lessonHeader);

        // Render each level as a collapsible accordion
        lessonData.levels.forEach(level => {
            const levelDiv = document.createElement('div');
            levelDiv.classList.add('lesson-level');
            levelDiv.id = `level-${level.level.toLowerCase()}`; // e.g., level-a0

            const levelTitle = document.createElement('h2');
            levelTitle.classList.add('level-title');
            levelTitle.textContent = `${level.level}: ${lessonData.title_en}`; // Simplified title
            levelTitle.dataset.levelId = level.level.toLowerCase(); // Store level ID for the click handler

            const levelContent = document.createElement('div');
            levelContent.classList.add('level-content');
            levelContent.id = `content-${level.level.toLowerCase()}`;

            // Render Key Phrases section
            if (level.keyPhrases && level.keyPhrases.length > 0) {
                const keyPhraseSection = document.createElement('div');
                keyPhraseSection.classList.add('section-container');
                const title = document.createElement('h3');
                title.textContent = 'Key Phrases';
                keyPhraseSection.appendChild(title);
                const list = document.createElement('ul');
                list.classList.add('auto-list');
                level.keyPhrases.forEach(phrase => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="word">${phrase.fr}</span> – ${phrase.en}（${phrase.zh}）`;
                    list.appendChild(li);
                });
                keyPhraseSection.appendChild(list);
                levelContent.appendChild(keyPhraseSection);
            }

            // Render Dialog section
            if (level.dialog && level.dialog.length > 0) {
                const dialogSection = document.createElement('div');
                dialogSection.classList.add('section-container');
                const title = document.createElement('h3');
                title.textContent = 'Dialog';
                dialogSection.appendChild(title);

                level.dialog.forEach(dialogueBlock => {
                    const dialogueBox = document.createElement('div');
                    dialogueBox.classList.add('dialogue-box');
                    dialogueBlock.dialogue.forEach(line => {
                        const p = document.createElement('p');
                        p.innerHTML = `<span class="speaker">Speaker ${line.speaker}</span>: <span class="word">${line.text}</span><br>
                                       → ${line.en}（${line.zh}）`;
                        dialogueBox.appendChild(p);
                    });
                    dialogSection.appendChild(dialogueBox);
                });
                levelContent.appendChild(dialogSection);
            }

            // Render Tips section
            if (level.tips && level.tips.length > 0) {
                const tipsSection = document.createElement('div');
                tipsSection.classList.add('section-container');
                const title = document.createElement('h3');
                title.textContent = 'Tips';
                tipsSection.appendChild(title);
                const list = document.createElement('ul');
                list.classList.add('auto-list');
                level.tips.forEach(tip => {
                    const li = document.createElement('li');
                    li.textContent = tip.en;
                    list.appendChild(li);
                });
                tipsSection.appendChild(list);
                levelContent.appendChild(tipsSection);
            }

            levelDiv.appendChild(levelTitle);
            levelDiv.appendChild(levelContent);
            appDiv.appendChild(levelDiv);
        });

        // Add the event listener for the accordion functionality
        setupAccordion();
    };

    /**
     * Sets up the event listeners for the accordion.
     */
    const setupAccordion = () => {
        const levelTitles = document.querySelectorAll('.level-title');
        levelTitles.forEach(title => {
            title.addEventListener('click', () => {
                const currentLevelId = title.dataset.levelId;
                const content = document.getElementById(`content-${currentLevelId}`);
                if (content) {
                    content.classList.toggle('active');
                }
            });
        });
    };
});
