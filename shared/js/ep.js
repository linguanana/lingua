function renderEpisodeHeaderAndTopics(data) {
  const params = new URLSearchParams(window.location.search);
  const topicIndex = parseInt(params.get("t")) || 1;

  // Set <h1> title from JSON
  const h1 = document.getElementById("episode-title");
  h1.textContent = `🇮🇹 ${data.episode}`;
  if (data.title_en && data.title_zh) {
    h1.title = `${data.title_en}（${data.title_zh}）`;
  }

  // Render Topics nav
  const nav = document.getElementById("topics-nav");
  nav.innerHTML = '<strong>📚 Topics:</strong> ';

  data.topics.forEach((topic, i) => {
    const num = i + 1;
    if (num === topicIndex) {
      nav.innerHTML += `<span class="current-topic">${num}</span>`;
    } else {
      nav.innerHTML += ` | <a href="ep1.html?t=${num}">${num}</a>`;
    }
  });
}

function renderEpisodeFromData(data) {
  const params = new URLSearchParams(window.location.search);
  const topicIndex = parseInt(params.get("t")) || 1;
  const container = document.getElementById("episode-content");

  const topic = data.topics[topicIndex - 1];
  if (!topic) {
    container.innerHTML = `<p>⚠️ Topic ${topicIndex} not found.</p>`;
    return;
  }

  // 顯示 topic 標題
  const topicTitle = document.createElement("h2");
  topicTitle.innerHTML = topic.title || `Topic ${topicIndex}`;
  container.appendChild(topicTitle);

  // 渲染每個 scene
  topic.scenes.forEach((scene, index) => {
    const sceneTitle = document.createElement("h3");
    sceneTitle.innerHTML = `🎬 Scene ${index + 1}: ${scene.scene}`;
    container.appendChild(sceneTitle);

    const dialogueBox = document.createElement("div");
    dialogueBox.className = "dialogue-box";

    scene.dialogue.forEach((line) => {
      const p = document.createElement("p");
      const italianSpan = `<span class="italian-word">${line.text}</span>`;
      const translation = `→ ${line.en}（${line.zh}）`;
      p.innerHTML = `${line.speaker}: ${italianSpan}<br>${translation}`;
      dialogueBox.appendChild(p);
    });

    container.appendChild(dialogueBox);
  });
}
