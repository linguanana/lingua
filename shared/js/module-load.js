function renderModule(moduleData) {
  const lessonTitle = document.getElementById("lesson-title");
  const lessonTheme = document.getElementById("lesson-theme");
  const lessonContainer = document.getElementById("lesson-container");

  if (!lessonTitle || !lessonTheme || !lessonContainer) {
    console.error("Missing expected DOM elements.");
    return;
  }

  lessonTitle.textContent = "";
  lessonTheme.textContent = "";
  lessonContainer.innerHTML = "";

  const nav = document.createElement("span");
  nav.className = "info-text-size";
  nav.innerHTML = `<strong>📚 Lessons:</strong> `;

  moduleData.lessons.forEach((lesson, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${index + 1}`;
    btn.onclick = () => {
      localStorage.removeItem("lastOpenLevelId");
      lessonTitle.textContent = `🎬 Lesson ${lesson.lessonId}: ${lesson.theme || ""}`;
      lessonTheme.textContent = "";
      renderLesson(lesson.levels);

      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
    nav.appendChild(btn);
  });

  lessonTitle.after(nav);

  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    lessonTitle.textContent = `🎬 Lesson ${firstLesson.lessonId}: ${firstLesson.theme || ""}`;
    lessonTheme.textContent = "";
    renderLesson(firstLesson.levels);
    nav.querySelector("button")?.classList.add("active");
  }
}

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

// ✅ Export both functions to the global window:
window.renderModule = renderModule;
window.renderLesson = renderLesson;
