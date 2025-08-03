// 🔧 Italic parser (currently for **...**) → colored word
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
 label.textContent = "📚 Lessons:";
 nav.appendChild(label);

 moduleData.lessons.forEach((lesson, index) => {
   const btn = document.createElement("button");
   btn.textContent = `${index + 1}`;
   btn.onclick = () => {
     localStorage.removeItem("lastOpenLevelId");

     window.currentModuleId = moduleData.moduleId || 1;
     window.currentLessonId = lesson.lessonId;

     lessonTitle.innerHTML = `🎬 Lesson ${lesson.lessonId}: <span class="info-text-size">${lesson.theme || ""}</span>`;
     lessonTheme.textContent = "";
     renderLesson(lesson.levels, moduleData.speakers);

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

   lessonTitle.innerHTML = `🎬 Lesson ${firstLesson.lessonId}:<span class="auto-list">${firstLesson.theme || ""}</span>`;
   lessonTheme.textContent = "";
   renderLesson(firstLesson.levels, moduleData.speakers);
   nav.querySelector("button")?.classList.add("active");
 }
}

function renderLesson(levels, moduleSpeakers = {}) {
 const container = document.getElementById("lesson-container");
 if (!container) return;

 container.innerHTML = "";

 const infoText = document.createElement("p");
 infoText.className = "info-text-size";
 infoText.innerHTML = `<span class="start-with-word">Start with Level 1</span> — come back for Level 2 or/and 3 as you progress.`;
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
     h3.innerHTML = "📗 Key Phrase";
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
       const zh = p.zh ? `（${p.zh}）` : "";
       const li = document.createElement("li");
       li.innerHTML = `<span class="italian-word">${p.text || p.it}</span> – ${p.en || ""}${zh}`;
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
       const p = document.createElement("p");
       const emoji = moduleSpeakers[line.speaker] || "🗣";
       const zhLine = line.zh ? `（${line.zh}）` : "";
       const enLine = line.en ? `→ ${line.en} ${zhLine}` : zhLine;
       p.innerHTML = `${emoji} : <span class="italian-word">${line.text}</span><br>${enLine}`;
       dialogueBox.appendChild(p);
     });

     contentEl.appendChild(dialogueBox);
   }

   // 📌 Tip
   if (level.tips?.length) {
     const h3 = document.createElement("h3");
     h3.innerHTML = "📌 Tip";
     contentEl.appendChild(h3);

     const ul = document.createElement("ul");
     ul.className = "auto-list";

     level.tips.forEach(tip => {
       const zh = tip.zh ? `（${tip.zh}）` : "";
       const li = document.createElement("li");
       li.innerHTML = `${parseWord(tip.en)}${zh}`;
       ul.appendChild(li);
     });

     contentEl.appendChild(ul);
   }

   levelDiv.appendChild(contentEl);
   container.appendChild(levelDiv);
 });
}

// ✅ Export both functions to the global window:
window.renderModule = renderModule;
window.renderLesson = renderLesson;
