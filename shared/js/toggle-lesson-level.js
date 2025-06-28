document.addEventListener('DOMContentLoaded', function() {
    const levelTitles = document.querySelectorAll('.level-title');
    const lessonLevels = document.querySelectorAll('.lesson-level'); // Get all lesson level containers

    // Helper function to set max-height for smooth transitions
    function setContentMaxHeight(contentElement, isActive) {
        if (isActive) {
            contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
        } else {
            contentElement.style.maxHeight = null; // Resets max-height for collapse
        }
    }

    // --- On Page Load: Try to restore the last open level ---
    const lastOpenLevelId = localStorage.getItem('lastOpenLevelId'); // Retrieve stored ID
    if (lastOpenLevelId) {
        const targetLevel = document.getElementById(lastOpenLevelId);
        if (targetLevel) {
            targetLevel.classList.add('active'); // Add 'active' class to the stored level
            const content = targetLevel.querySelector('.level-content');
            setContentMaxHeight(content, true); // Expand its content
        }
    }
    // If no ID is found in localStorage, or the ID doesn't match an existing element,
    // all levels will remain closed by default (which fulfills your "all close on refresh" for initial state).


    // --- Click Event Listener for Level Titles ---
    levelTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            const currentLevel = this.closest('.lesson-level'); // Get the parent .lesson-level
            const content = currentLevel.querySelector('.level-content');
            const currentLevelId = currentLevel.id; // Get the unique ID of the clicked level

            // If the clicked level is currently active (open)
            if (currentLevel.classList.contains('active')) {
                // Close it
                currentLevel.classList.remove('active');
                setContentMaxHeight(content, false);
                localStorage.removeItem('lastOpenLevelId'); // Clear the stored state, as nothing is open
            } else {
                // If the clicked level is not active (closed), open it
                // First, close any other open levels (accordion behavior)
                lessonLevels.forEach(function(level) {
                    if (level !== currentLevel && level.classList.contains('active')) {
                        level.classList.remove('active');
                        setContentMaxHeight(level.querySelector('.level-content'), false);
                    }
                });

                // Then, open the clicked level
                currentLevel.classList.add('active');
                setContentMaxHeight(content, true);
                localStorage.setItem('lastOpenLevelId', currentLevelId); // Store the ID of the newly opened level
            }
        });
    });
});
