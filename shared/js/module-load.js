// module-load.js (clean + accordion left to toggle-lesson-level.js)
function renderModule(moduleData) {
    const lessonsContainer = document.getElementById("lessons-container");
    const lessonTitle = document.getElementById("lesson-title");
    const lessonTheme = document.getElementById("lesson-theme");
    const lessonContainer = document.getElementById("lesson-container");

    if (!lessonsContainer || !lessonTitle || !lessonTheme || !lessonContainer) {
        console.error("Missing expected DOM elements.");
        return;
    }

    // Clear everything
    lessonsContainer.innerHTML = "";
    lessonTheme.textContent = "";
    lessonContainer.innerHTML = "";

    moduleData.lessons.forEach((lesson, index) => {
        const lessonBtn = document.createElement("button");
        lessonBtn.textContent = (index + 1).toString();

        lessonBtn.onclick = function () {
            localStorage.removeItem('lastOpenLevelId'); // Reset accordion memory

            // Title + Theme
            lessonTitle.textContent = `主題: ${lesson.title || `Lesson ${index + 1}`}`;
            lessonTheme.textContent = `Theme: ${lesson.theme || ""}`;

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

    // Auto-load first lesson
    if (moduleData.lessons.length > 0) {
        const firstLesson = moduleData.lessons[0];
        lessonTitle.textContent = `主題: ${firstLesson.title}`;
        lessonTheme.textContent = `Theme: ${firstLesson.theme || ""}`;
        renderLesson(firstLesson.levels);
        lessonsContainer.querySelector('button').classList.add('active');
    }
}
