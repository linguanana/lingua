function renderEpisodeFromJSON(jsonPath) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("scenes-container");
      data.scenes.forEach(scene => {
        const sceneDiv = document.createElement("div");
        sceneDiv.className = "scene";

        const sceneTitle = document.createElement("h2");
        sceneTitle.textContent = scene.scene;
        sceneDiv.appendChild(sceneTitle);

        const table = document.createElement("table");
        table.className = "dialogue-table";

        scene.dialogue.forEach(line => {
          const row = document.createElement("tr");

          const speakerCell = document.createElement("td");
          speakerCell.className = "speaker-cell";
          speakerCell.textContent = line.speaker;

          const textCell = document.createElement("td");
          textCell.className = "italian-cell";
          textCell.textContent = line.text;

          const englishCell = document.createElement("td");
          englishCell.className = "english-cell";
          englishCell.textContent = line.en || "";

          const chineseCell = document.createElement("td");
          chineseCell.className = "chinese-cell";
          chineseCell.textContent = line.zh || "";

          row.appendChild(speakerCell);
          row.appendChild(textCell);
          row.appendChild(englishCell);
          row.appendChild(chineseCell);
          table.appendChild(row);
        });

        sceneDiv.appendChild(table);
        container.appendChild(sceneDiv);
      });
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
}
