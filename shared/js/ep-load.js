// ep-load.js

// Language helpers
const currentLanguage =
  window.currentLanguage || localStorage.getItem('userLanguage') || 'en';

// Function 1: Renders the episode header and topic navigation buttons
function renderEpisodeHeaderAndTopics(episodeData) {
  const titleEl = document.getElementById("ep-title");
  const topicsContainer = document.getElementById("topics");

  // Display title
  titleEl.textContent = `${episodeData.episode}`;
  titleEl.setAttribute("title", `${episodeData.title_en} (${episodeData.title_zh})`);

  // ✅ Insert topic header (ABOVE the Topics nav)
  const topicHeader = document.createElement('p');
  topicHeader.id = 'topic-header';
  topicHeader.className = 'info-text-size';
  const firstTopic = episodeData.topics[0];
  topicHeader.textContent = currentLanguage === 'zh'
    ? `🎬 主題 ${firstTopic.topicId}: ${firstTopic.topic_zh || firstTopic.topic}`
    : `🎬 Topic ${firstTopic.topicId}: ${firstTopic.topic}`;
  topicsContainer.appendChild(topicHeader);

  // Create Topic buttons area
  const nav = document.createElement("div");
  nav.id = "topic-nav";

  const label = document.createElement("p");
  label.innerHTML = `<span class="info-text-size">📚 Topics:</span>`;
  nav.appendChild(label);

  episodeData.topics.forEach((topic, index) => {
    const btn = document.createElement("button");
    // keep numbers, or use titles if you want:
    // btn.textContent = currentLanguage === 'zh' ? (topic.topic_zh || index + 1) : (topic.topic || index + 1);
    btn.textContent = `${topic.title || (index + 1)}`;

    btn.onclick = () => {
      // toggle active button
      document.querySelectorAll('#topic-nav button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // ✅ Update the topic header text on click
      const headerEl = document.getElementById('topic-header');
      if (headerEl) {
        headerEl.textContent = currentLanguage === 'zh'
          ? `🎬 主題 ${topic.topicId}: ${topic.topic_zh || topic.topic}`
          : `🎬 Topic ${topic.topicId}: ${topic.topic}`;
      }

      // render the selected topic
      renderSingleTopic(topic);
    };

    nav.appendChild(btn);
  });

  // Default: activate first button
  if (episodeData.topics.length > 0) {
    const firstButton = nav.querySelector('button');
    if (firstButton) firstButton.classList.add('active');
  }

  topicsContainer.appendChild(nav);

  // Default load the first topic
  renderSingleTopic(episodeData.topics[0]);
}

// Function 2: Renders a single topic, including all its scenes with independent audio players and toggle functionality.
function renderSingleTopic(topicObj) {
  const container = document.getElementById("topics");

  // Clear all content except the topic navigation area (keep the header + nav)
  // We'll keep both #topic-header and #topic-nav
  [...container.children].forEach(child => {
    if (child.id !== "topic-header" && child.id !== "topic-nav") {
      container.removeChild(child);
    }
  });

  // epId and topicId are defined here as they are used for constructing MP3 filenames
  const epId = new URLSearchParams(window.location.search).get("id") || "1";
  const topicId = topicObj.topicId || "1";

  // Iterate through all scenes for the current topic and render each one
  topicObj.scenes.forEach((sceneObj, sceneIndex) => {
    const sceneDiv = document.createElement("div");
    sceneDiv.className = "scene-block lesson-level";

    const sceneTitle = document.createElement("h3");
    // 語言切換場景名稱
    const sceneName = (currentLanguage === 'zh' && sceneObj.scene_zh)
      ? sceneObj.scene_zh
      : sceneObj.scene;

    sceneTitle.textContent = episodeData.toggle_title + ": " + sceneName;
    sceneTitle.className = "scene-title level-title";
    sceneDiv.appendChild(sceneTitle);

    // --- collapsible content block ---
    const dialogueList = document.createElement("div");
    dialogueList.className = "dialogue-box level-content";

    // --- independent Audio Player for EACH Scene ---
    const sceneAudio = document.createElement("audio");
    sceneAudio.setAttribute("controls", "");
    sceneAudio.className = "small-audio scene-audio";

    const sceneSource = document.createElement("source");
    const defaultMp3Filename = `ep${epId}_topic${topicId}_scene${sceneIndex + 1}.mp3`;
    const mp3FilenameToUse = sceneObj.mp3 || defaultMp3Filename;

    sceneSource.src = `./audio/${mp3FilenameToUse}`;
    sceneSource.type = "audio/mpeg";
    sceneAudio.appendChild(sceneSource);

    if (!sceneObj.mp3) {
      sceneAudio.classList.add('generated-mp3-placeholder');
    }

    dialogueList.appendChild(sceneAudio);

    // Dialogue lines
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

    sceneDiv.appendChild(dialogueList);
    container.appendChild(sceneDiv);

    // accordion toggle
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
  });
}
