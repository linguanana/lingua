function renderModule(moduleData) {
  const lessonsContainer = document.getElementById("lessons-container");
  const lessonTitle = document.getElementById("lesson-title");
  const lessonTheme = document.getElementById("lesson-theme");
  const lessonContainer = document.getElementById("lesson-container");

  if (!lessonsContainer || !lessonTitle || !lessonTheme || !lessonContainer) {
    console.error("Missing expected DOM elements.");
    return;
  }

  // Clear previous content
  lessonsContainer.innerHTML = "";
  lessonTitle.textContent = "";
  lessonTheme.textContent = "";
  lessonContainer.innerHTML = "";

  // Create label + buttons inline
  const nav = document.createElement("span");
  nav.className = "info-text-size";
  nav.innerHTML = `<strong>📚 Lessons:</strong> `;

  moduleData.lessons.forEach((lesson, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${index + 1}`;
    btn.onclick = () => {
      localStorage.removeItem('lastOpenLevelId');

      // Set title
      lessonTitle.textContent = `🎬 Lesson ${lesson.lessonId}: ${lesson.theme || ""}`;
      lessonTheme.textContent = "";
      renderLesson(lesson.levels);

      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
    nav.appendChild(btn);
  });

  // Load first lesson by default
  if (moduleData.lessons.length > 0) {
    const firstLesson = moduleData.lessons[0];
    lessonTitle.textContent = `🎬 Lesson ${firstLesson.lessonId}: ${firstLesson.theme || ""}`;
    lessonTheme.textContent = "";
    renderLesson(firstLesson.levels);
    nav.querySelector("button")?.classList.add("active");
  }

  // Add nav after lesson title
  lessonTitle.after(nav);
}
