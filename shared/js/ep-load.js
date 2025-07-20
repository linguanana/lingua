function renderEpisodeHeaderAndTopics(data) {
  // Set page title and episode title
  const pageTitle = document.getElementById("page-title");
  const epTitle = document.getElementById("ep-title");
  if (pageTitle) pageTitle.textContent = data.episode;
  if (epTitle) epTitle.textContent = `🎬 ${data.episode} (${data.title_zh})`;

  // Target container for topics
  const topicsContainer = document.getElementById("topics");
  if (!topicsContainer) return;

  // Loop through all topics
  data.topics.forEach((topic, index) => {
    // Create topic wrapper
    const topicDiv = document.createElement("div");
    topicDiv.className = "topic-block";

    const topicHeader = document.createElement("h2");
    topicHeader.textContent = `🟦 Topic ${index + 1}`;
    topicDiv.appendChild(topicHeader);

    // Loop through scenes in the topic
    topic.scenes.forEach((sceneObj) => {
      const sceneTitle = document.createElement("h3");
      sceneTitle.textContent = `🎭 ${sceneObj.scene}`;
      topicDiv.appendChild(sceneTitle);

      const dialogueList = document.createElement("div");
      dialogueList.className = "dialogue-box";

      sceneObj.dialogue.forEach((line) => {
        const lineEl = document.createElement("p");
        lineEl.innerHTML = `<strong>${line.speaker === "1" ? "👤" : "🧑‍🍳"}</strong>
          <span class="italian-word">${line.text}</span><br>
          <span class="translation">EN: ${line.en}</span><br>
          <span class="translation">ZH: ${line.zh}</span>`;
        dialogueList.appendChild(lineEl);
      });

      topicDiv.appendChild(dialogueList);
    });

    topicsContainer.appendChild(topicDiv);
  });
}
