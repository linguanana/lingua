function renderModule(moduleData) {
  const container = document.getElementById("lessons-container");

  moduleData.lessons.forEach((lesson) => {
    const lessonDiv = document.createElement("div");
    lessonDiv.className = "lesson-block";

    const lessonTitle = document.createElement("h2");
    lessonTitle.textContent = `🎯 ${lesson.title}`;
    lessonDiv.appendChild(lessonTitle);

    lesson.levels.forEach((level) => {
      const levelDiv = document.createElement("div");
      levelDiv.className = "lesson-level";

      const levelTitle = document.createElement("h3");
      levelTitle.className = "level-title";
      levelTitle.textContent = level.levelName;
      levelDiv.appendChild(levelTitle);

      // --- Audio ---
      const audio = document.createElement("audio");
      audio.setAttribute("controls", "");
      const source = document.createElement("source");
      source.src = `./audio/${level.mp3}`;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      levelDiv.appendChild(audio);

      // --- Key Phrase ---
      const keyPhraseTitle = document.createElement("h4");
      keyPhraseTitle.textContent = "📗 Key Phrase";
      levelDiv.appendChild(keyPhraseTitle);
      const keyList = document.createElement("div");
      keyList.className = "auto-list";
      level.keyPhrases.forEach(kp => {
        keyList.innerHTML += `<span class="italian-word">${kp.text}</span> – ${kp.en}（${kp.zh}）<br>`;
      });
      levelDiv.appendChild(keyList);

      // --- Dialogue ---
      const dialogueTitle = document.createElement("h4");
      dialogueTitle.textContent = "🎯 Dialogue";
      levelDiv.appendChild(dialogueTitle);
      const dialogueBox = document.createElement("div");
      dialogueBox.className = "dialogue-box";
      level.dialogue.forEach(line => {
        const emoji = line.speaker === "1" ? "👩🏻‍‍" : "🧑‍🍳";
        dialogueBox.innerHTML += `
          <p><strong>${emoji} <span class="italian-word">${line.text}</span></strong><br>
          <span class="translation">→ ${line.en}（${line.zh}）</span></p>
        `;
      });
      levelDiv.appendChild(dialogueBox);

      // --- Tips ---
      const tipTitle = document.createElement("h4");
      tipTitle.textContent = "📌 Tips";
      levelDiv.appendChild(tipTitle);
      const tipList = document.createElement("div");
      tipList.className = "auto-list";
      level.tips.forEach(t => {
        tipList.innerHTML += `${t.text}（${t.zh}）<br>`;
      });
      levelDiv.appendChild(tipList);

      lessonDiv.appendChild(levelDiv);
    });

    container.appendChild(lessonDiv);
  });
}
