// shared/js/module-load.js

function renderModule(moduleData) {
  const lessonTitle = document.getElementById("lesson-title");
  const lessonTheme = document.getElementById("lesson-theme");
  const lessonContainer = document.getElementById("lesson-container");

  if (!lessonTitle || !lessonTheme || !lessonContainer) {
    console.error("Missing expected DOM elements.");
    return;
  }

  // 清除舊內容
  lessonTitle.textContent = "";
  lessonTheme.textContent = "";
  lessonContainer.innerHTML = "";

  // 建立標題右邊的按鈕區域
  const nav = document.createElement("span");
  nav.className = "info-text-size";
  nav.innerHTML = `<strong>📚 Lessons:</strong> `;

  moduleData.lessons.forEach((lesson, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${index + 1}`;
    btn.onclick = () => {
      localStorage.removeItem('lastOpenLevelId');

      // 更新標題與主題
      lessonTitle.textContent = `🎬 Lesson ${lesson.lessonId}: ${lesson.theme || ""}`;
      lessonTheme.textContent = "";

      // 載入內容
      renderLesson(lesson.levels);

      // 更新按鈕狀態
      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };

    nav.appendChild(btn);
  });

  // 將 nav 插入到 lessonTitle 後面
  lessonTitle.after(nav);

  // 預設載入第一課
  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    lessonTitle.textContent = `🎬 Lesson ${firstLesson.lessonId}: ${firstLesson.theme || ""}`;
    lessonTheme.textContent = "";
    renderLesson(firstLesson.levels);
    nav.querySelector("button")?.classList.add("active");
  }
}
