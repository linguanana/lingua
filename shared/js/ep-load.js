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

  // epId 和 topicId 在這裡定義，因為它們會被用於構建 MP3 檔案名
  const epId = new URLSearchParams(window.location.search).get("id") || "1";
  const topicId = topicObj.topicId || "1";

  // 遍歷並顯示該 Topic 下的所有 Scene，並為其加上開合功能
  topicObj.scenes.forEach((sceneObj, sceneIndex) => { // <-- sceneIndex 在這裡可用
    const sceneDiv = document.createElement("div");
    // 使用 'lesson-level' class 來應用開合樣式和行為
    sceneDiv.className = "scene-block lesson-level";

    const sceneTitle = document.createElement("h3");
    // 使用 episodeData.toggle_title 和 sceneObj.scene
    sceneTitle.textContent = episodeData.toggle_title + ": " + sceneObj.scene; // Added a colon for better spacing
    // 使用 'level-title' class 作為可點擊的標題
    sceneTitle.className = "scene-title level-title";
    sceneDiv.appendChild(sceneTitle);

    // --- 創建可收合的內容區塊 (dialogueList) ---
    // 確保 dialogueList 只在這裡被聲明一次
    const dialogueList = document.createElement("div");
    dialogueList.className = "dialogue-box level-content";

    // --- 為每個 Scene 創建獨立的 Audio Player 並添加到 dialogueList 內部 ---
    const sceneAudio = document.createElement("audio");
    sceneAudio.setAttribute("controls", "");
    sceneAudio.className = "small-audio scene-audio";

    const sceneSource = document.createElement("source");
    // 構建預設的 MP3 檔案名
    const defaultMp3Filename = `ep${epId}_topic${topicId}_scene${sceneIndex + 1}.mp3`;
    // 優先使用 sceneObj.mp3，否則使用預設構建的檔案名
    const mp3FilenameToUse = sceneObj.mp3 || defaultMp3Filename;

    sceneSource.src = `./audio/${mp3FilenameToUse}`;
    sceneSource.type = "audio/mpeg";
    sceneAudio.appendChild(sceneSource);

    // 可選：如果檔案是預設生成且可能不存在，添加額外的樣式或提示
    if (!sceneObj.mp3) {
        sceneAudio.classList.add('generated-mp3-placeholder');
    }

    dialogueList.appendChild(sceneAudio); // <-- 音頻播放器現在添加到 dialogueList 內部
    // --- 結束 Audio Player 創建 ---

    // 添加對話內容到 dialogueList
    sceneObj.dialogue.forEach((line) => {
      const lineEl = document.createElement("p");
      const emoji = line.speaker === "1" ? "👩🏻‍‍" : "🧑‍🍳";
      lineEl.innerHTML = `
        <strong>${emoji} <span class="italian-word">${line.text}</span></strong><br>
        <span class="translation">→ ${line.en}${line.zh ? ` (${line.zh})` : ""}</span>
      `;
      dialogueList.appendChild(lineEl);
    });

    sceneDiv.appendChild(dialogueList); // 將整個 dialogueList (含音頻和對話) 添加到 sceneDiv
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
  }); // <-- forEach 迴圈的結尾
} // <-- renderSingleTopic 函式的結尾
