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


// 修改後的 renderSingleTopic 函式，加入了開合功能
function renderSingleTopic(topicObj) {
  const container = document.getElementById("topics");

  // 清空除按鈕外的內容
  [...container.children].forEach(child => {
    if (child.id !== "topic-nav") container.removeChild(child);
  });

  // 建立 audio player
  const epId = new URLSearchParams(window.location.search).get("id") || "1";
  const topicId = topicObj.topicId || "1";
  const filename = topicObj.mp3 || `ep${epId}_${topicId}.mp3`;

  const audio = document.createElement("audio");
  audio.setAttribute("controls", "");
  audio.className = "small-audio";

  const source = document.createElement("source");
  source.src = `./audio/${filename}`;
  source.type = "audio/mpeg";
  audio.appendChild(source);

  // load audio
  container.appendChild(audio);


  // 修改後的 renderSingleTopic 函式，直接使用現有的 level-xxx class
  function renderSingleTopic(topicObj) {
    const container = document.getElementById("topics");

    // 清空除按鈕外的內容
    [...container.children].forEach(child => {
      if (child.id !== "topic-nav") container.removeChild(child);
    });

    // 移除頂層的整個 topic 的音頻播放器，因為現在每個 scene 會有自己的音頻
    // 如果你之前在這裡有創建一個頂層音頻播放器，這行是提醒你移除它
    // 例如: container.querySelector('.small-audio')?.remove(); // 如果有這行請確保它只移除 topic 層級的音頻

    const epId = new URLSearchParams(window.location.search).get("id") || "1";
    const topicId = topicObj.topicId || "1";

    // 顯示該 topic 底下所有 scene，並為其加上開合功能
    topicObj.scenes.forEach((sceneObj) => {
      const sceneDiv = document.createElement("div");
      // !!! 關鍵修改：使用 'lesson-level' class 來應用開合樣式和行為 !!!
      sceneDiv.className = "scene-block lesson-level"; // 每個 scene 變成一個 'lesson-level'

      const sceneTitle = document.createElement("h3");
      sceneTitle.textContent = sceneObj.scene;
      // !!! 關鍵修改：使用 'level-title' class !!!
      sceneTitle.className = "scene-title level-title"; // 每個 scene 的標題變成 'level-title'
      sceneDiv.appendChild(sceneTitle);

      // --- 為每個 Scene 創建獨立的 Audio Player ---
      if (sceneObj.mp3) {
          const sceneAudio = document.createElement("audio");
          sceneAudio.setAttribute("controls", "");
          sceneAudio.className = "small-audio scene-audio";

          const sceneSource = document.createElement("source");
          sceneSource.src = `./audio/${sceneObj.mp3}`;
          sceneSource.type = "audio/mpeg";
          sceneAudio.appendChild(sceneSource);

          sceneDiv.appendChild(sceneAudio);
      } else {
          console.warn(`Warning: No MP3 defined for scene "${sceneObj.scene}"`);
      }
      // --- 結束新增 ---

      const dialogueList = document.createElement("div");
      // !!! 關鍵修改：使用 'level-content' class !!!
      dialogueList.className = "dialogue-box level-content"; // 對話框內容變成 'level-content'

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

      // 加入事件監聽器，當點擊標題時，切換開合狀態
      sceneTitle.addEventListener('click', () => {
        // 注意：這裡我們仍然使用 currentScene 變數，它會指向上層的 .lesson-level
        const currentSceneContainer = sceneTitle.closest('.lesson-level');
        // 找到要開合的內容區塊，也就是 .level-content
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
