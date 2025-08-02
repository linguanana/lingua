// shared/js/toggle-lesson-level-manual.js

function activateLessonAccordion() {
  const levelTitles = document.querySelectorAll('.level-title');
  const lessonLevels = document.querySelectorAll('.lesson-level');

  function setContentMaxHeight(contentElement, isActive) {
    if (isActive) {
      contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
    } else {
      contentElement.style.maxHeight = null;
    }
  }

  const lastOpenLevelId = localStorage.getItem('lastOpenLevelId');
  if (lastOpenLevelId) {
    const targetLevel = document.getElementById(lastOpenLevelId);
    if (targetLevel) {
      targetLevel.classList.add('active');
      const content = targetLevel.querySelector('.level-content');
      setContentMaxHeight(content, true);
    }
  }

  levelTitles.forEach(function(title) {
    title.addEventListener('click', function () {
      const currentLevel = this.closest('.lesson-level');
      const content = currentLevel.querySelector('.level-content');
      const currentLevelId = currentLevel.id;

      if (currentLevel.classList.contains('active')) {
        currentLevel.classList.remove('active');
        setContentMaxHeight(content, false);
        localStorage.removeItem('lastOpenLevelId');
      } else {
        lessonLevels.forEach(function(level) {
          if (level !== currentLevel && level.classList.contains('active')) {
            level.classList.remove('active');
            setContentMaxHeight(level.querySelector('.level-content'), false);
          }
        });

        currentLevel.classList.add('active');
        setContentMaxHeight(content, true);
        localStorage.setItem('lastOpenLevelId', currentLevelId);
      }
    });
  });
}
