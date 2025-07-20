const params = new URLSearchParams(window.location.search);
const epNumber = params.get("ep") || "1";

const script = document.createElement("script");
script.src = `ep/ep${epNumber}.js`;
script.onload = () => {
  renderEpisodeHeaderAndTopics(window.epData);
};
document.body.appendChild(script);

function renderEpisodeHeaderAndTopics(data) {
  // 顯示主標題
  const titleContainer = document.getElementById("ep-title");
  titleContainer.innerHTML = `
    <h2>${data.episode}</h2>
    <p>${data.title_en} · ${data.title_zh}</p>
  `;

  // 顯示每個 Topic（目前只一個 topicId）
  const topicsContainer = document.getElementById("topics");
  data.topics.forEach((topic) => {
    topic.scenes.forEach((sceneObj, index) => {
      const sceneDiv = document.createElement("div");
      sceneDiv.className = "scene";
      sceneDiv.innerHTML = `<h3>🎬 ${sceneObj.scene}</h3>`;

      sceneObj.dialogue.forEach((line) => {
        const p = document.createElement("p");
        p.innerHTML = `
          <strong>👤 ${line.speaker}:</strong>
          <span class="italian">${line.text}</span><br>
          <span class="en">${line.en}</span><br>
          <span class="zh">${line.zh}</span>
        `;
        sceneDiv.appendChild(p);
      });

      topicsContainer.appendChild(sceneDiv);
    });
  });
}
