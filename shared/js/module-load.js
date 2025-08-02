// module-load.js (clean + accordion left to toggle-lesson-level.js)
function renderModule(moduleData) {
    const lessonsContainer = document.getElementById("lessons-container");
    const lessonTitle = document.getElementById("lesson-title");
    const lessonTheme = document.getElementById("lesson-theme");
    const lessonContainer = document.getElementById("lesson-container");

    const lessonHeading = document.getElementById("lesson-heading"); // 新 id

    if (!lessonsContainer || !lessonHeading || !lessonContainer) {
      console.error("Missing expected DOM elements.");
      return;
    }
    // Clear everything
    lessonsContainer.innerHTML = "";
    if (lessonTheme) lessonTheme.textContent = "";
    lessonContainer.innerHTML = "";

    moduleData.lessons.forEach((lesson, index) => {
        const lessonBtn = document.createElement("button");
        lessonBtn.textContent = (index + 1).toString();

        lessonBtn.onclick = function () {
            localStorage.removeItem('lastOpenLevelId'); // Reset accordion memory

            // Title + Theme
            lessonHeading.textContent = `Lesson ${lesson.lessonId} – ${lesson.theme || ''}`;

            // Render this lesson’s levels
            renderLesson(lesson.levels);

            // Highlight active button
            document.querySelectorAll('#lessons-container button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        };

        lessonsContainer.appendChild(lessonBtn);
    });

    // Auto-load first lesson (if you want to disable auto-load, comment this block out)
    if (moduleData.lessons.length > 0) {
        const firstLesson = moduleData.lessons[0];
        lessonHeading.textContent = `Lesson ${firstLesson.lessonId} – ${firstLesson.theme || ''}`;
        renderLesson(firstLesson.levels);
        lessonsContainer.querySelector('button').classList.add('active');
    }
}
