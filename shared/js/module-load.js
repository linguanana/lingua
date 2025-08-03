function renderLesson(levels) {
  const container = document.getElementById("lesson-container");
  if (!container) return;

  container.innerHTML = "";

  const infoText = document.createElement("p");
  infoText.className = "info-text-size";
  infoText.innerHTML = `<span class="start-with-word">Start with Level 1</span> — come back for Level 2 or/and 3 as you progress.`;
  container.appendChild(infoText);

  levels.forEach((level, index) => {
    const levelDiv = document.createElement("div");
    levelDiv.className = "lesson-level";
    levelDiv.id = `level-${index + 1}`;

    const titleEl = document.createElement("h2");
    titleEl.className = "level-title";
    titleEl.innerHTML = `✅ ${level.title}`;
    levelDiv.appendChild(titleEl);

    const contentEl = document.createElement("div");
    contentEl.className = "level-content";

    // 📗 Key Phrase
    if (level.keyPhrases?.length) {
      const h3 = document.createElement("h3");
      h3.innerHTML = "📗 Key Phrase";
      contentEl.appendChild(h3);

      const listDiv = document.createElement("div");
      listDiv.className = "auto-list";

      level.keyPhrases.forEach(p => {
        const zh = p.zh ? `（${p.zh}）` : "";
        const line = document.createElement("div");
        line.innerHTML = `<span class="italian-word">${p.text || p.it}</span> – ${p.en || ""}${zh}`;
        listDiv.appendChild(line);
      });

      contentEl.appendChild(listDiv);
    }

    // 🎯 Dialogue + audio
    if (level.dialogues?.length) {
      const h3 = document.createElement("h3");
      h3.innerHTML = "🎯 Dialogue / When to use";
      contentEl.appendChild(h3);

      if (level.mp3) {
        const audio = document.createElement("audio");
        audio.setAttribute("controls", "");
        audio.className = "small-audio";
        const source = document.createElement("source");
        source.src = `./audio/${level.mp3}`;
        source.type = "audio/mpeg";
        audio.appendChild(source);
        contentEl.appendChild(audio);
      }

      const dialogueBox = document.createElement("div");
      dialogueBox.className = "dialogue-box";

      level.dialogues.forEach(line => {
        const p = document.createElement("p");
        const zh = line.zh ? `<br><span lang="zh-TW">${line.zh}</span>` : "";
        p.innerHTML = `🗣 ${line.speaker}<br><span class="italian-word">${line.text}</span>${zh}`;
        dialogueBox.appendChild(p);
      });

      contentEl.appendChild(dialogueBox);
    }

    // 📌 Tips
    if (level.tips?.length) {
      const h3 = document.createElement("h3");
      h3.innerHTML = "📌 Tip";
      contentEl.appendChild(h3);

      const tipsDiv = document.createElement("div");
      tipsDiv.className = "auto-list";

      level.tips.forEach(tip => {
        const zh = tip.zh ? `（${tip.zh}）` : "";
        const line = document.createElement("div");
        line.innerHTML = `<span class="italian-word">${tip.text}</span>${zh}`;
        tipsDiv.appendChild(line);
      });

      contentEl.appendChild(tipsDiv);
    }

    levelDiv.appendChild(contentEl);
    container.appendChild(levelDiv);
  });
}

// ✅ 匯出到全域，確保 HTML 可以呼叫
window.renderModule = renderModule;
window.renderLesson = renderLesson;
