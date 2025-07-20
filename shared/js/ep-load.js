function renderDialogue(dialogue) {
  return dialogue.map(d => `
    <div class="dialogue-box">
      <p class="speaker-line">👤 ${d.speaker}: <span class="italian-word">${d.text}</span></p>
      <p class="translation-line">${d.en}</p>
      <p class="translation-line zh">${d.zh}</p>
    </div>
  `).join("");
}

function renderScene(scene) {
  return `
    <h3 class="scene-title">🎬 ${scene.scene}</h3>
    ${renderDialogue(scene.dialogue)}
  `;
}

function renderTopic(topic) {
  const scenesHTML = topic.scenes.map(renderScene).join("");
  return `
    <section class="topic-section">
      <h2 class="topic-title">📌 ${topic.topic}</h2>
      ${scenesHTML}
    </section>
  `;
}

function renderEpisodeHeaderAndTopics(epData) {
  document.title = epData.episode;
  document.getElementById("ep-title").textContent = `${epData.episode} – ${epData.title_en} · ${epData.title_zh}`;

  const topicsHTML = epData.topics.map(renderTopic).join("");
  document.getElementById("topics").innerHTML = topicsHTML;
}
