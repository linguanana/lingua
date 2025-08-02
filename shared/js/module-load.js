// shared/js/module-load.js

function renderModule(moduleData) {
  const lessonsContainer = document.getElementById("lessons-container");
  const lessonTitle = document.getElementById("lesson-title");
  const lessonTheme = document.getElementById("lesson-theme");
  const lessonContainer = document.getElementById("lesson-container");

  // 確保所有必要的 DOM 元素都存在
  if (!lessonsContainer || !lessonTitle || !lessonTheme || !lessonContainer) {
    console.error("Missing expected DOM elements.");
    return;
  }

  // 清除舊內容
  lessonsContainer.innerHTML = "";
  lessonTitle.textContent = "";
  lessonTheme.textContent = "";
  lessonContainer.innerHTML = "";

  // 建立課程按鈕
  moduleData.lessons.forEach((lesson, index) => {
    const lessonBtn = document.createElement("button");
    lessonBtn.textContent = (index + 1).toString();

    lessonBtn.onclick = function () {
      localStorage.removeItem('lastOpenLevelId'); // 清除 accordion 記憶

      // 更新標題與主題
      lessonTitle.textContent = `Lesson ${lesson.lessonId} – ${lesson.theme || ""}`;
      lessonTheme.textContent = ""; // 你已經在上面顯示完整了，不重複顯示

      // 載入該課程的 levels
      renderLesson(lesson.levels);

      // 更新按鈕樣式
      document.querySelectorAll('#lessons-container button').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    };

    lessonsContainer.appendChild(lessonBtn);
  });

  // 預設載入第一課
  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    lessonTitle.textContent = `Lesson ${firstLesson.lessonId} – ${firstLesson.theme || ""}`;
    lessonTheme.textContent = "";
    renderLesson(firstLesson.levels);
    lessonsContainer.querySelector('button')?.classList.add('active');
  }
}
