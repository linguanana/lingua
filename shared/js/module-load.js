function renderModule(moduleData) {
  const lessonTitle = document.getElementById("lesson-title");
  const lessonTheme = document.getElementById("lesson-theme");
  const lessonContainer = document.getElementById("lesson-container");

  if (!lessonTitle || !lessonTheme || !lessonContainer) {
    console.error("Missing expected DOM elements.");
    return;
  }

  // 清空舊內容
  lessonTitle.textContent = "";
  lessonTheme.textContent = "";
  lessonContainer.innerHTML = "";

  // ➕ 建立按鈕區（插入在 lessonTitle 右邊）
  const nav = document.createElement("span");
  nav.className = "info-text-size";
  nav.innerHTML = `<strong>📚 Lessons:</strong> `;

  moduleData.lessons.forEach((lesson, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${index + 1}`;
    btn.onclick = () => {
      localStorage.removeItem("lastOpenLevelId");

      // 更新標題與主題
      lessonTitle.textContent = `🎬 Lesson ${lesson.lessonId}: ${lesson.theme || ""}`;
      lessonTheme.textContent = "";

      // 渲染內容
      renderLesson(lesson.levels);

      // 更新按鈕樣式
      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };

    nav.appendChild(btn);
  });

  lessonTitle.after(nav);

  // ➕ 預設載入第一課
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

  // 說明文字
  const infoText = document.createElement("p");
  infoText.className = "info-text-size";
  infoText.innerHTML = `<span class="start-with-word">Start with Level 1</span> — come back for Level 2 or/and 3 as you progress.`;
  container.appendChild(infoText);

  levels.forEach((level, index) => {
    const levelDiv = document.createElement("div");
    levelDiv.className = "lesson-level";
    levelDiv.id = `level-${index + 1}`; // for localStorage

    const titleEl = document.createElement("h2");
    titleEl.className = "level-title";
    titleEl.innerHTML = `✅ ${level.title}`;
    levelDiv.appendChild(titleEl);

    const contentEl = document.createElement("div");
    contentEl.className = "level-content";

    if (level.keyPhrases?.length) {
      const h3 = document.createElement("h3");
      h3.textContent = "Key Phrases";
      contentEl.appendChild(h3);

      const ul = document.createElement("ul");
      ul.className = "auto-list";

      level.keyPhrases.forEach(p => {
        const zh = p.zh ? ` <span lang="zh-TW">(${p.zh})</span>` : "";
        const li = document.createElement("li");
        li.innerHTML = `<span class="italian-word">${p.text || p.it}</span> – ${p.en || ""}${zh}`;
        ul.appendChild(li);
      });

      contentEl.appendChild(ul);
    }

    if (level.dialogues?.length) {
      const h3 = document.createElement("h3");
      h3.textContent = "Dialogue";
      contentEl.appendChild(h3);

      const box = document.createElement("div");
      box.className = "dialogue-box";

      level.dialogues.forEach(line => {
        const p = document.createElement("p");
        const zhLine = line.zh ? `<span lang="zh-TW">${line.zh}</span><br>` : "";
        p.innerHTML = `<span class="start-with-word">${line.speaker}:</span> ${zhLine}<strong>${line.text}</strong>`;
        box.appendChild(p);
      });

      contentEl.appendChild(box);
    }

    if (level.tips?.length) {
      const h3 = document.createElement("h3");
      h3.textContent = "Tips";
      contentEl.appendChild(h3);

      const ul = document.createElement("ul");
      ul.className = "auto-list";

      level.tips.forEach(tip => {
        const zh = tip.zh ? ` <span lang="zh-TW">(${tip.zh})</span>` : "";
        const li = document.createElement("li");
        li.innerHTML = `<span class="italian-word">${tip.text}</span>${zh}`;
        ul.appendChild(li);
      });

      contentEl.appendChild(ul);
    }

    levelDiv.appendChild(contentEl);
    container.appendChild(levelDiv);
  });
}

// ✅ 匯出到全域，確保 HTML 可以呼叫
window.renderModule = renderModule;
window.renderLesson = renderLesson;
