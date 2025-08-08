// ep-load.js
const currentLanguage = window.currentLanguage || localStorage.getItem('userLanguage') || 'en';
// Function 1: Renders the episode header and topic navigation buttons
function renderEpisodeHeaderAndTopics(episodeData) {
    const titleEl = document.getElementById("ep-title");
    const topicsContainer = document.getElementById("topics");

    // Display title
    titleEl.textContent = `🎬 ${episodeData.episode}`;
    titleEl.setAttribute("title", `${episodeData.title_en} (${episodeData.title_zh})`);

    // Create Topic buttons area
    const nav = document.createElement("div");
    nav.id = "topic-nav";

    const label = document.createElement("p");
    label.innerHTML = `<span class="info-text-size">📚 Topics:</span>`;
    nav.appendChild(label);

    episodeData.topics.forEach((topic, index) => {
        const btn = document.createElement("button");
        btn.textContent = `${topic.title || (index + 1)}`;
        btn.onclick = () => {
            // Remove 'active' class from all buttons within this nav
            document.querySelectorAll('#topic-nav button').forEach(button => {
                button.classList.remove('active');
            });
            // Add 'active' class to the clicked button
            btn.classList.add('active');
            // Call the updated renderSingleTopic, which handles scene rendering and toggling
            renderSingleTopic(topic);
        };
        nav.appendChild(btn);
    });

    // Default load the first topic and set its button as active
    if (episodeData.topics.length > 0) {
        const firstButton = nav.querySelector('button');
        if (firstButton) {
            firstButton.classList.add('active');
        }
    }
    topicsContainer.appendChild(nav);

    // Default load the first topic
    renderSingleTopic(episodeData.topics[0]);
}


// Function 2: Renders a single topic, including all its scenes with independent audio players and toggle functionality.
// This function must be in the global scope, not nested inside another function.
function renderSingleTopic(topicObj) {
    const container = document.getElementById("topics");

    // Clear all content except the topic navigation area (id="topic-nav")
    [...container.children].forEach(child => {
        if (child.id !== "topic-nav") container.removeChild(child);
    });

    // epId and topicId are defined here as they are used for constructing MP3 filenames
    const epId = new URLSearchParams(window.location.search).get("id") || "1";
    const topicId = topicObj.topicId || "1";

    // Iterate through all scenes for the current topic and render each one
    topicObj.scenes.forEach((sceneObj, sceneIndex) => { // sceneIndex is available here
        const sceneDiv = document.createElement("div");
        // Use 'lesson-level' class for accordion styling and behavior
        sceneDiv.className = "scene-block lesson-level";

        const sceneTitle = document.createElement("h3");
        // 根據語言切換場景名稱
        const sceneName = (window.currentLanguage === 'zh' && sceneObj.scene_zh)
          ? sceneObj.scene_zh
          : sceneObj.scene;

        sceneTitle.textContent = episodeData.toggle_title + ": " + sceneName;
        sceneTitle.className = "scene-title level-title";
        sceneDiv.appendChild(sceneTitle);

        // --- Create the collapsible content block (dialogueList) ---
        // Ensure dialogueList is declared only ONCE here for each scene
        const dialogueList = document.createElement("div");
        dialogueList.className = "dialogue-box level-content";

        // --- Create an independent Audio Player for EACH Scene and append it to dialogueList ---
        const sceneAudio = document.createElement("audio");
        sceneAudio.setAttribute("controls", "");
        sceneAudio.className = "small-audio scene-audio";

        const sceneSource = document.createElement("source");
        // Construct the default MP3 filename: ep{episodeId}_topic{topicId}_scene{sceneIndex+1}.mp3
        const defaultMp3Filename = `ep${epId}_topic${topicId}_scene${sceneIndex + 1}.mp3`;
        // Prioritize sceneObj.mp3 if defined, otherwise use the default constructed filename
        const mp3FilenameToUse = sceneObj.mp3 || defaultMp3Filename;

        sceneSource.src = `./audio/${mp3FilenameToUse}`;
        sceneSource.type = "audio/mpeg";
        sceneAudio.appendChild(sceneSource);

        // Optional: Add a class if the file is generated and might not exist, for styling
        if (!sceneObj.mp3) {
            sceneAudio.classList.add('generated-mp3-placeholder');
        }

        dialogueList.appendChild(sceneAudio); // <-- The audio player is appended to dialogueList here

        // Add dialogue content to dialogueList
        sceneObj.dialogue.forEach((line) => {
            const lineEl = document.createElement("p");
            const emoji = line.speaker === "1" ? "👩🏻‍‍" : "🧑‍🍳";
            lineEl.innerHTML = `
              <strong>${emoji} <span class="italian-word">${line.text}</span></strong><br>
              <span class="translation">→ ${
                currentLanguage === 'zh'
                  ? (line.zh || line.en || "")
                  : (line.en || line.zh || "")
              }</span>
            `;
            dialogueList.appendChild(lineEl);
        });

        sceneDiv.appendChild(dialogueList); // Append the entire dialogueList (with audio and text) to sceneDiv
        container.appendChild(sceneDiv);

        // Add event listener to toggle accordion when the title is clicked
        sceneTitle.addEventListener('click', () => {
            const currentSceneContainer = sceneTitle.closest('.lesson-level');
            const contentToToggle = currentSceneContainer.querySelector('.level-content');

            if (currentSceneContainer.classList.contains('active')) {
                currentSceneContainer.classList.remove('active');
                contentToToggle.style.maxHeight = null;
            } else {
                currentSceneContainer.classList.add('active');
                contentToToggle.style.maxHeight = contentToToggle.scrollHeight + 'px';
            }
        });
    }); // End of forEach loop for scenes
} // End of renderSingleTopic function
