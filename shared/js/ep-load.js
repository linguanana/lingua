function renderEpisodeHeaderAndTopics(episodeData) {
  const titleEl = document.getElementById("ep-title");
  const topicsContainer = document.getElementById("topics");

  // 顯示標題
  titleEl.textContent = `🎬 ${episodeData.episode}`;
  titleEl.setAttribute("title", `${episodeData.title_en} (${episodeData.title_zh})`);

  // 建立 Topic 按鈕區塊
  const nav = document.createElement("div");
  nav.id = "topic-nav";

  const label = document.createElement("p");
  label.className = "info-text-size";
  label.innerHTML = `<strong>📚 Topics:</strong> `;
  nav.appendChild(label);  // ✅ 加這一行

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
        renderSingleTopic(topic);
      };
      nav.appendChild(btn);
    });

    // Default load the first topic and set its button as active
    if (episodeData.topics.length > 0) {
      const firstButton = nav.querySelector('button'); // Get the first button created
      if (firstButton) {
        firstButton.classList.add('active'); // Add active class to it
      }
    }
  topicsContainer.appendChild(nav);

  // 預設載入第一個 topic
  renderSingleTopic(episodeData.topics[0]);
}


function renderSingleTopic(topicObj) {
  const container = document.getElementById("topics");

  // 清空除按鈕外的內容
  [...container.children].forEach(child => {
    if (child.id !== "topic-nav") container.removeChild(child);
  });

  // === 🎧 Create audio player dynamically ===
  const epId = new URLSearchParams(window.location.search).get("id") || "1";
  const topicId = topicObj.topicId || "1";
  const filename = topicObj.mp3 || `ep${epId}_${topicId}.mp3`;

  const audio = document.createElement("audio");
  audio.setAttribute("controls", "");
  audio.className = "small-audio";

  // Use topicObj.mp3 if defined, or fallback to epX_Y.mp3
  const epId = new URLSearchParams(window.location.search).get("id") || "1";
  const topicId = topicObj.topicId || "1"; // fallback if missing
  const filename = topicObj.mp3 || `ep${epId}_${topicId}.mp3`;

  const source = document.createElement("source");
  source.src = `./audio/${filename}`;
  source.type = "audio/mpeg";
  audio.appendChild(source);

  // 顯示該 topic 底下所有 scene
  topicObj.scenes.forEach((sceneObj) => {
    const sceneDiv = document.createElement("div");
    sceneDiv.className = "scene-block";

    const sceneTitle = document.createElement("h3");
    sceneTitle.textContent = sceneObj.scene;
    sceneDiv.appendChild(sceneTitle);

    const dialogueList = document.createElement("div");
    dialogueList.className = "dialogue-box";

    sceneObj.dialogue.forEach((line) => {
      const lineEl = document.createElement("p");
      const emoji = line.speaker === "1" ? "👩🏻‍‍" : "🧑‍🍳";
      lineEl.innerHTML = `
        <strong>${emoji} <span class="italian-word">${line.text}</span></strong><br>
        <span class="translation">→ ${line.en}${line.zh ? ` (${line.zh})` : ""}</span>
      `;
      dialogueList.appendChild(lineEl);
    });

    sceneDiv.appendChild(dialogueList);
    container.appendChild(sceneDiv);
  });
}
