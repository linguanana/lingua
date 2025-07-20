function renderEpisodeFromJSON(jsonPath) {
  fetch(jsonPath)
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("episode-content");

      data.scenes.forEach((scene, index) => {
        const sceneTitle = document.createElement("h2");
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
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });
}
