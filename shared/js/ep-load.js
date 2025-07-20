// ep-load.js
const urlParams = new URLSearchParams(window.location.search);
const episodeId = urlParams.get('episode') || 'episode1'; // default to episode1.json
let episodeData = null;

fetch(`./${episodeId}.json`)
  .then(res => res.json())
  .then(data => {
    episodeData = data;
    document.getElementById('episode-title').textContent = `🎬 Episode: ${data.episodeTitle}`;
    renderTopicNav();
    loadTopic(1);
  });

function renderTopicNav() {
  const navContainer = document.querySelector('.topic-nav');
  navContainer.innerHTML = '';

  episodeData.topics.forEach(topic => {
    const btn = document.createElement('button');
    btn.textContent = topic.id;
    btn.onclick = () => loadTopic(topic.id);
    navContainer.appendChild(btn);
  });
}

function loadTopic(topicId) {
  const topic = episodeData.topics.find(t => t.id === topicId);
  const container = document.getElementById('scene-container');
  container.innerHTML = `<h2>📘 Topic ${topicId}: ${topic.title}</h2>`;

  topic.scenes.forEach(scene => {
    const sceneHTML = `
      <div class="dialogue-box">
        <p>${scene.speaker} <span class="italian-word">${scene.italian}</span><br>
        <span class="translation">${scene.translation}</span></p>
      </div>
    `;
    container.innerHTML += sceneHTML;
  });
}
