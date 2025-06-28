document.addEventListener('DOMContentLoaded', () => {
  const levelTitles = document.querySelectorAll('.level-title');

  levelTitles.forEach(title => {
    title.addEventListener('click', () => {
      const levelDiv = title.closest('.lesson-level');
      const levelContent = title.nextElementSibling;

      if (levelDiv.classList.contains('active')) {
        levelDiv.classList.remove('active');
        levelContent.style.maxHeight = '0';
        levelContent.style.padding = '0px 12px';
      } else {
        // Close all other active levels
        document.querySelectorAll('.lesson-level.active').forEach(openLevel => {
          openLevel.classList.remove('active');
          const openContent = openLevel.querySelector('.level-content');
          openContent.style.maxHeight = '0';
          openContent.style.padding = '0px 12px';
        });

        // Open current
        levelDiv.classList.add('active');
        levelContent.style.maxHeight = levelContent.scrollHeight + 'px';
        levelContent.style.padding = '10px 12px';
      }
    });
  });

  // Auto-open the first lesson
  const firstLevel = document.querySelector('.lesson-level');
  if (firstLevel) {
    firstLevel.classList.add('active');
    const firstLevelContent = firstLevel.querySelector('.level-content');
    firstLevelContent.style.maxHeight = firstLevelContent.scrollHeight + 'px';
    firstLevelContent.style.padding = '10px 12px';
  }
});
