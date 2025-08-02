function renderModule(moduleData) {
  const lessonsContainer = document.getElementById("lessons-container");
  const lessonTitle = document.getElementById("lesson-title");

  // ⛔️ 安全檢查
  if (!lessonsContainer || !lessonTitle) {
    console.error("Missing container elements. Check your HTML.");
    return;
  }

  // --- 建立按鈕區塊 ---
  const lessonButtonsWrapper = document.createElement("div");
  lessonButtonsWrapper.id = "lesson-buttons";
  lessonButtonsWrapper.style.display = "flex";
  lessonButtonsWrapper.style.alignItems = "center";
  lessonButtonsWrapper.style.flexWrap = "wrap"; // 小螢幕可以自動換行
  lessonButtonsWrapper.style.gap = "10px";
  lessonButtonsWrapper.style.marginBottom = "20px";

  const lessonLabel = document.createElement("p");
  lessonLabel.textContent = "Lessons:";
  lessonLabel.style.margin = "0";
  lessonButtonsWrapper.appendChild(lessonLabel);

  // --- 建立每個按鈕 ---
  moduleData.lessons.forEach((lesson, index) => {
    const lessonBtn = document.createElement("button");
    lessonBtn.textContent = (index + 1).toString();
    lessonBtn.style.padding = "6px 12px";
    lessonBtn.style.borderRadius = "4px";

    lessonBtn.onclick = function () {
      // 更新標題 h2
      lessonTitle.textContent = lesson.title || `Lesson ${index + 1}`;
      // 清空內容容器
      lessonsContainer.innerHTML = "";
      // 把按鈕區塊加回來
      lessonsContainer.appendChild(lessonButtonsWrapper);
      // 產生這一課的內容
      renderLesson(lesson);
    };

    lessonButtonsWrapper.appendChild(lessonBtn);
  });

  // --- 預設顯示第一課 ---
  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    lessonTitle.textContent = firstLesson.title || "Lesson 1";
    lessonsContainer.appendChild(lessonButtonsWrapper);
    renderLesson(firstLesson);
  }
}
