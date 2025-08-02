function renderLesson(levels) {
  const container = document.getElementById("lesson-container");

  levels.forEach((level) => {
    const levelDiv = document.createElement("div");
    levelDiv.className = "lesson-level";
    levelDiv.id = `level-${level.levelId}`;

    const title = document.createElement("h3");
    title.className = "level-title";
    title.textContent = level.levelName;
    levelDiv.appendChild(title);

    const content = document.createElement("div");
    content.className = "level-content";

    // --- Audio ---
    if (level.mp3) {
      const audio = document.createElement("audio");
      audio.controls = true;
      const source = document.createElement("source");
      source.src = `./audio/${level.mp3}`;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      content.appendChild(audio);
    }

    // --- Key Phrase ---
    if (level.keyPhrases?.length) {
      const keyTitle = document.createElement("h4");
      keyTitle.textContent = "📗 Key Phrases";
      content.appendChild(keyTitle);

      const list = document.createElement("div");
      list.className = "auto-list";
      level.keyPhrases.forEach(kp => {
        list.innerHTML += `<span class="italian-word">${kp.text}</span> – ${kp.en}（${kp.zh}）<br>`;
      });
      content.appendChild(list);
    }

    // --- Dialogue ---
    if (level.dialogue?.length) {
      const dialogTitle = document.createElement("h4");
      dialogTitle.textContent = "🗣 Dialogue";
      content.appendChild(dialogTitle);

      const box = document.createElement("div");
      box.className = "dialogue-box";
      level.dialogue.forEach(line => {
        const emoji = line.speaker === "1" ? "👩🏻‍‍" : "🧑‍🍳";
        box.innerHTML += `
          <p><strong>${emoji} <span class="italian-word">${line.text}</span></strong><br>
          <span class="translation">→ ${line.en}（${line.zh}）</span></p>`;
      });
      content.appendChild(box);
    }

    // --- Tips ---
    if (level.tips?.length) {
      const tipTitle = document.createElement("h4");
      tipTitle.textContent = "📌 Tips";
      content.appendChild(tipTitle);

      const list = document.createElement("div");
      list.className = "auto-list";
      level.tips.forEach(tip => {
        list.innerHTML += `${tip.text}（${tip.zh}）<br>`;
      });
      content.appendChild(list);
    }

    levelDiv.appendChild(content);
    container.appendChild(levelDiv);
  });

  // ⬅️ 讓 toggle-lesson-level.js 可以自動啟用展開功能
  setTimeout(() => {
    document.querySelectorAll('.level-title').forEach(btn => {
      btn.click(); // 預設展開第一個
    });
  }, 100);
}
