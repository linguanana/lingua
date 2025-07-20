// shared/js/ep-load.js

// 取得目前頁面參數（ep 編號與 topic 編號）
const params = new URLSearchParams(window.location.search);
const epNumber = params.get("ep") || "1";
const topicIndex = parseInt(params.get("t")) || 1;

// 動態載入對應 ep 的資料檔案，例如 ep1.js
const script = document.createElement("script");
script.src = `ep/ep${epNumber}.js`;  // 假設 JS 放在 ep 資料夾內
document.head.appendChild(script);

// 載入後自動渲染內容
script.onload = () => {
  renderEpisodeHeaderAndTopics(window.epData, topicIndex);
  renderEpisodeFromData(window.epData, topicIndex);
};

// ✅ 渲染頁面標題與 Topics 切換導覽列
function renderEpisodeHeaderAndTopics(data, topicIndex) {
  const h1 = document.getElementById("episode-title");
  h1.textContent = `${data.flag || "🎬"} ${data.episode}`;
  if (data.title_en && data.title_zh) {
    h1.title = `${data.title_en}（${data.title_zh}）`;
  }

  const nav = document.getElementById("topics-nav");
  let html = '<strong>📚 Topics:</strong> ';

  const pageName = window.location.pathname.split("/").pop();
  data.topics.forEach((_, i) => {
    const num = i + 1;
    if (num === topicIndex) {
      html += `<span class="current-topic">${num}</span>`;
    } else {
      html += ` | <a href="${pageName}?ep=${epNumber}&t=${num}">${num}</a>`;
    }
  });

  nav.innerHTML = html;
}

// ✅ 渲染單一 topic 的對話內容
function renderEpisodeFromData(data, topicIndex) {
  const container = document.getElementById("episode-content");
  const topic = data.topics[topicIndex - 1];

  if (!topic) {
    container.innerHTML = `<p>⚠️ Topic ${topicIndex} not found.</p>`;
    return;
  }

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
