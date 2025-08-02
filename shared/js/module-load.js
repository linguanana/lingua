function renderModule(moduleData) {
  const container = document.getElementById("lessons-container");
  container.innerHTML = ''; // 清空現有內容

  moduleData.lessons.forEach((lesson) => {
    const lessonBtn = document.createElement("button");
    lessonBtn.textContent = lesson.lessonId.toString();
    lessonBtn.onclick = () => {
      const lessonTitleEl = document.getElementById("lesson-title");
      lessonTitleEl.textContent = `🎯 ${lesson.title}`;
      document.getElementById("lesson-container").innerHTML = ''; // 清空上一個 lesson
      renderLesson(lesson.levels); // ⬅️ 呼叫 render-lesson.js 提供的 function
    };
    container.appendChild(lessonBtn);
  });
  
  if (moduleData.lessons.length > 0) {
  const firstLesson = moduleData.lessons[0];
  document.getElementById("lesson-title").textContent = `🎯 ${firstLesson.title}`;
  document.getElementById("lesson-container").innerHTML = '';
  renderLesson(firstLesson.levels);
  }
}
