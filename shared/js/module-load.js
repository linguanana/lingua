// 🔧 Italic parser (currently for **...**) → colored word
window.currentLanguage = window.currentLanguage || localStorage.getItem('userLanguage') || 'en';

function parseWord(text) {
  if (!text) return "";
  return text.replace(/\*\*(.+?)\*\*/g, '<span class="italian-word">$1</span>');
}

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

  const nav = document.createElement("div");
  nav.id = "lesson-buttons";

  const label = document.createElement("p");
  label.innerHTML = `<span class="info-text-size">📚 ${i18n.lessons[currentLanguage]}</span>`;
  nav.appendChild(label);

  moduleData.lessons.forEach((lesson, index) => {
    const btn = document.createElement("button");
    btn.classList.add("info-text-size");
    btn.textContent = `${index + 1}`;
    btn.onclick = () => {
      localStorage.removeItem(`${location.pathname}-openLevelId`);

      window.currentModuleId = moduleData.moduleId || 1;
      window.currentLessonId = lesson.lessonId;

      const lessonLabel = i18n.lesson[currentLanguage];
      lessonTitle.innerHTML = `<span class="info-text-size">🎬 ${lessonLabel} ${lesson.lessonId}: ${lesson.theme || ""}</span>`;

      lessonTheme.textContent = "";
      renderLesson(lesson.levels, moduleData.speakers);
      activateLessonAccordion();

      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };

    nav.appendChild(btn);
  });

  lessonTitle.after(nav);

  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    window.currentModuleId = moduleData.moduleId || 1;
    window.currentLessonId = firstLesson.lessonId;

    const lessonLabel = window.currentLanguage === 'zh' ? '課程' : 'Lesson';
    lessonTitle.innerHTML = `<span class="info-text-size">🎬 ${lessonLabel} ${firstLesson.lessonId}: ${firstLesson.theme || ""}</span>`;

    lessonTheme.textContent = "";
    renderLesson(firstLesson.levels, moduleData.speakers);
    nav.querySelector("button")?.classList.add("active");
    activateLessonAccordion();
  }
}

function renderLesson(levels, moduleSpeakers = {}) {
  const container = document.getElementById("lesson-container");
  if (!container) return;

  container.innerHTML = "";

  const infoText = document.createElement("p");
  infoText.className = "info-text-size";
  infoText.innerHTML = `<span class="info-text-size">${i18n.startWithLevel1[currentLanguage]}</span>`;
  container.appendChild(infoText);

  const modId = window.currentModuleId;
  const lesId = window.currentLessonId;

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

    // 📗 Key Phrase + Audio
    if (level.keyPhrases?.length) {
      const h3 = document.createElement("h3");
      //h3.innerHTML = "📗 Key Phrase";
      h3.innerHTML = i18n.keyPhrase[currentLanguage];
      contentEl.appendChild(h3);

      const audio = document.createElement("audio");
      audio.setAttribute("controls", "");
      audio.className = "small-audio";
      const source = document.createElement("source");
      source.src = `./audio/mod${modId}-lesson${lesId}-keyphrase.mp3`;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      contentEl.appendChild(audio);

      const ul = document.createElement("ul");
      ul.className = "auto-list";

      level.keyPhrases.forEach(p => {
        const li = document.createElement("li");
        const lang = window.currentLanguage || 'en';

        let translation = "";
        if (lang === "zh" && p.zh) {translation = ` – ${p.zh}`;} else if (lang === "en" && p.en) {translation = ` – ${p.en}`;}

        li.innerHTML = `<span class="italian-word">${p.text || p.it}</span>${translation}`;
        ul.appendChild(li);
      });

      contentEl.appendChild(ul);
    }

    // 🎯 Dialogue + Audio
    if (level.dialogues?.length) {
      const h3 = document.createElement("h3");
      h3.innerHTML = "🎯 Dialogue / When to use";
      contentEl.appendChild(h3);

      const audio = document.createElement("audio");
      audio.setAttribute("controls", "");
      audio.className = "small-audio";
      const source = document.createElement("source");
      source.src = `./audio/mod${modId}-lesson${lesId}-dialogue.mp3`;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      contentEl.appendChild(audio);

      const dialogueBox = document.createElement("div");
      dialogueBox.className = "dialogue-box";

      level.dialogues.forEach(line => {
        const emoji = moduleSpeakers[line.speaker] || "🗣";
        const p = renderDialogueLine(line, emoji);
        dialogueBox.appendChild(p);
      });

      contentEl.appendChild(dialogueBox);
    }

    // 📌 Tip
    // 📌 Tip
    if (level.tips?.length) {
      const h3 = document.createElement("h3");
      h3.innerHTML = "📌 Tip";
      contentEl.appendChild(h3);

      const ul = document.createElement("ul");
      ul.className = "auto-list";

      level.tips.forEach(tip => {
        const li = document.createElement("li");
        const zh = (tip.zh && tip.zh.trim() !== "") ? tip.zh : null;
        const textToShow = zh || tip.en || "";
        li.innerHTML = `💡 ${parseWord(textToShow)}`;
        ul.appendChild(li);
      });

      contentEl.appendChild(ul);
    }

    levelDiv.appendChild(contentEl);
    container.appendChild(levelDiv);
  });
}

function activateLessonAccordion() {
  const levelTitles = document.querySelectorAll('.level-title');
  const lessonLevels = document.querySelectorAll('.lesson-level');

  function setContentMaxHeight(contentEl, isActive) {
    if (isActive) {
      contentEl.style.maxHeight = contentEl.scrollHeight + 'px';
    } else {
      contentEl.style.maxHeight = null;
    }
  }

  const storageKey = `${location.pathname}-openLevelId`;
  const lastOpenLevelId = localStorage.getItem(storageKey);

  if (lastOpenLevelId) {
    const targetLevel = document.getElementById(lastOpenLevelId);
    if (targetLevel) {
      targetLevel.classList.add('active');
      const contentEl = targetLevel.querySelector('.level-content');
      if (contentEl) {
        setContentMaxHeight(contentEl, true);
      }
    }
  }

  levelTitles.forEach(function(title) {
    title.addEventListener('click', function () {
      const currentLevel = this.closest('.lesson-level');
      const contentEl = currentLevel.querySelector('.level-content');
      const currentLevelId = currentLevel.id;

      if (currentLevel.classList.contains('active')) {
        currentLevel.classList.remove('active');
        setContentMaxHeight(contentEl, false);
        localStorage.removeItem(storageKey);
      } else {
        lessonLevels.forEach(function(level) {
          if (level !== currentLevel && level.classList.contains('active')) {
            level.classList.remove('active');
            const el = level.querySelector('.level-content');
            if (el) {
              setContentMaxHeight(el, false);
            }
          }
        });

        currentLevel.classList.add('active');
        setContentMaxHeight(contentEl, true);
        localStorage.setItem(storageKey, currentLevelId);
      }
    });
  });
}

// ✅ Render dialogue lines with `when` above the speaker
function renderDialogueLine(line, emoji) {
  const p = document.createElement("p");
  let html = "";

  // ⏰ When context (optional)
  if (line.when) {
    html += `<div class="dialogue-context">🕓<span class="when-label">When:</span> ${line.when}</div>`;
  }

  // 💬 Main text (Italian)
  html += `${emoji} : <span class="italian-word">${line.text}</span>`;

  // 🌍 Translation (only one line, based on lang)
  const lang = window.currentLanguage || 'en';
  const translated = (lang === 'zh') ? line.zh : line.en;
  if (translated) {
    html += `<br>→ ${translated}`;
  }

  p.innerHTML = html;
  return p;
}

// ✅ Export to global
window.renderModule = renderModule;
window.renderLesson = renderLesson;
window.renderDialogueLine = renderDialogueLine;
window.activateLessonAccordion = activateLessonAccordion;
