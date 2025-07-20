async function renderEpisodeFromJSON(url) {
  const response = await fetch(url);
  const episodeData = await response.json();
  const container = document.getElementById("scenes-container");

  episodeData.scenes.forEach((scene, sceneIndex) => {
    const sceneTitle = document.createElement("h2");
    sceneTitle.textContent = `Scene ${sceneIndex + 1}: ${scene.title}`;
    container.appendChild(sceneTitle);

    const dialogueList = document.createElement("ul");

    scene.dialogue.forEach((line) => {
      const listItem = document.createElement("li");

      const speaker = document.createElement("strong");
      speaker.textContent = `Speaker ${line.speaker}: `;
      listItem.appendChild(speaker);

      const italian = document.createElement("span");
      italian.className = "italian-word";
      italian.textContent = line.it;
      listItem.appendChild(italian);

      const translation = document.createElement("span");
      translation.className = "translation";
      translation.textContent = ` (${line.en})`;
      listItem.appendChild(translation);

      dialogueList.appendChild(listItem);
    });

    container.appendChild(dialogueList);
  });
}
