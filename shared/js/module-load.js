// shared/js/module-load.js (Clean version — no render-lesson.js needed)

function renderModule(moduleData) {
  const lessonTitle = document.getElementById("lesson-title");
  const lessonTheme = document.getElementById("lesson-theme");
  const lessonContainer = document.getElementById("lesson-container");

  if (!lessonTitle || !lessonTheme || !lessonContainer) {
    console.error("Missing expected DOM elements.");
    return;
  }

  // Clear previous content
  lessonTitle.textContent = "";
  lessonTheme.textContent = "";
  lessonContainer.innerHTML = "";

  // Create nav buttons inline
  const nav = document.createElement("span");
  nav.className = "info-text-size";
  nav.innerHTML = `<strong>📚 Lessons:</strong> `;

  moduleData.lessons.forEach((lesson, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${index + 1}`;
    btn.onclick = () => {
      localStorage.removeItem('lastOpenLevelId');
      lessonTitle.textContent = `🎮 Lesson ${lesson.lessonId}: ${lesson.theme || ""}`;
      lessonTheme.textContent = "";
      renderLessonInline(lesson.levels);
      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
    nav.appendChild(btn);
  });

  lessonTitle.after(nav);

  // Load first lesson by default
  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    lessonTitle.textContent = `🎮 Lesson ${firstLesson.lessonId}: ${firstLesson.theme || ""}`;
    lessonTheme.textContent = "";
    renderLessonInline(firstLesson.levels);
    nav.querySelector("button")?.classList.add("active");
  }
}

// INLINE rendering (replaces render-lesson.js)
function renderLessonInline(levels) {
  const container = document.getElementById('lesson-container');
  if (!container) return;
  container.innerHTML = '';

  levels.forEach((level, index) => {
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('lesson-level');
    levelDiv.id = `level-${index}`;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('level-title');
    titleDiv.textContent = level.title || `Level ${index + 1}`;
    levelDiv.appendChild(titleDiv);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('level-content');

    // Key Phrases
    if (level.keyPhrases?.length) {
      const h3 = document.createElement('h3'); h3.textContent = 'Key Phrases';
      contentDiv.appendChild(h3);
      const ul = document.createElement('ul'); ul.className = 'auto-list';
      level.keyPhrases.forEach(p => {
        const li = document.createElement('li');
        const zh = p.zh ? `<span lang='zh-TW'>(${p.zh})</span>` : '';
        li.innerHTML = `<span class='italian-word'>${p.it || p.text}</span> – ${p.en || ''} ${zh}`;
        ul.appendChild(li);
      });
      contentDiv.appendChild(ul);
    }

    // Dialogues
    if (level.dialogues?.length) {
      const h3 = document.createElement('h3'); h3.textContent = 'Dialogue';
      contentDiv.appendChild(h3);
      const box = document.createElement('div'); box.className = 'dialogue-box';
      level.dialogues.forEach(line => {
        const zh = line.zh ? `<span lang='zh-TW'>${line.zh}</span><br>` : '';
        const p = document.createElement('p');
        p.innerHTML = `<span class='start-with-word'>${line.speaker}:</span> ${zh}<strong>${line.text}</strong>`;
        box.appendChild(p);
      });
      contentDiv.appendChild(box);
    }

    // Tips
    if (level.tips?.length) {
      const h3 = document.createElement('h3'); h3.textContent = 'Tips';
      contentDiv.appendChild(h3);
      const ul = document.createElement('ul'); ul.className = 'auto-list';
      level.tips.forEach(tip => {
        const zh = tip.zh ? `<span lang='zh-TW'>(${tip.zh})</span>` : '';
        const li = document.createElement('li');
        li.innerHTML = `<span class='italian-word'>${tip.text}</span> ${zh}`;
        ul.appendChild(li);
      });
      contentDiv.appendChild(ul);
    }

    levelDiv.appendChild(contentDiv);
    container.appendChild(levelDiv);
  });

  // Load toggle script AFTER DOM is built
  if (typeof activateLessonAccordion === 'function') {
    activateLessonAccordion();
  }
}
