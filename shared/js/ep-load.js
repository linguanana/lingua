function renderEpisodeHeaderAndTopics(episodeData) {
  const titleEl = document.getElementById("ep-title");
  const topicsContainer = document.getElementById("topics");

  // 顯示標題
  titleEl.textContent = `🎬 ${episodeData.episode}`;

  // 建立 Topic 按鈕區塊
  const nav = document.createElement("div");
  nav.id = "topic-nav";
  episodeData.topics.forEach((topic, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${topic.title || 'Topic ' + (index + 1)}`;
    btn.onclick = () => renderSingleTopic(topic);
    nav.appendChild(btn);
  });
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
