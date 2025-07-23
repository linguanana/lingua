// ep-load.js

// 函式 1: 負責渲染 Episode 標頭和 Topic 導航按鈕
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
  nav.appendChild(label);

  episodeData.topics.forEach((topic, index) => {
      const btn = document.createElement("button");
      btn.textContent = `${topic.title || (index + 1)}`;
      btn.onclick = () => {
        // 移除所有按鈕的 'active' class
        document.querySelectorAll('#topic-nav button').forEach(button => {
          button.classList.remove('active');
        });
        // 為被點擊的按鈕添加 'active' class
        btn.classList.add('active');
        // 呼叫更新後的 renderSingleTopic，它會處理每個 scene 的渲染和開合
        renderSingleTopic(topic);
      };
      nav.appendChild(btn);
    });

    // 預設載入第一個 topic 並設置其按鈕為 active
    if (episodeData.topics.length > 0) {
      const firstButton = nav.querySelector('button');
      if (firstButton) {
        firstButton.classList.add('active');
      }
    }
  topicsContainer.appendChild(nav);

  // 預設載入第一個 topic
  renderSingleTopic(episodeData.topics[0]);
}


// 函式 2: 這是您最終需要的 renderSingleTopic 函式，它負責渲染單個 Topic 下的所有 Scene
// 並為每個 Scene 添加獨立的音頻播放器和開合功能。
// 這個函式必須在全域作用域，而不是在其他函式內部。
function renderSingleTopic(topicObj) {
  const container = document.getElementById("topics");

  // 清空除按鈕區塊外的所有內容 (只保留 id="topic-nav")
  [...container.children].forEach(child => {
    if (child.id !== "topic-nav") container.removeChild(child);
  });

  // 這裡不再需要為整個 Topic 建立單一的音頻播放器了，因為每個 Scene 會有自己的音頻。
  // 所以將之前單獨 Topic 音頻的相關程式碼移除。
  // 例如，以下這段程式碼應該被刪除，因為現在音頻會在每個 Scene 內部創建：
  /*
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
  container.appendChild(audio);
  */

  const epId = new URLSearchParams(window.location.search).get("id") || "1"; // 仍然保留以備不時之需或用於 MP3 命名
  const topicId = topicObj.topicId || "1"; // 仍然保留以備不時之需或用於 MP3 命名

  // 遍歷並顯示該 Topic 下的所有 Scene，並為其加上開合功能
  topicObj.scenes.forEach((sceneObj) => {
    const sceneDiv = document.createElement("div");
    // 使用 'lesson-level' class 來應用開合樣式和行為
    sceneDiv.className = "scene-block lesson-level";

    const sceneTitle = document.createElement("h3");
    sceneTitle.textContent = sceneObj.scene;
    // 使用 'level-title' class 作為可點擊的標題
    sceneTitle.className = "scene-title level-title";
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

        sceneDiv.appendChild(sceneAudio); // 將音頻播放器添加到 sceneDiv 內部
    } else {
        console.warn(`Warning: No MP3 defined for scene "${sceneObj.scene}"`);
    }
    // --- 結束 Audio Player 創建 ---

    const dialogueList = document.createElement("div");
    // 使用 'level-content' class 作為可收合的內容區塊
    dialogueList.className = "dialogue-box level-content";

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
