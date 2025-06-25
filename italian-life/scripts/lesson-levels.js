document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'level-title'. These are your clickable headings for each level.
    const levelTitles = document.querySelectorAll('.level-title');

    // Loop through each level title and attach an event listener.
    levelTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Find the closest parent 'div' with the class 'lesson-level'. This is the container for the entire level section.
            const levelDiv = title.closest('.lesson-level');
            // The 'level-content' is the next sibling element after the 'level-title'. This is the part that expands/collapses.
            const levelContent = title.nextElementSibling;

            // Check if the current level is already active (i.e., it's open).
            if (levelDiv.classList.contains('active')) {
                // If it's active, we want to close it.
                levelDiv.classList.remove('active'); // Remove the 'active' class from the parent div.
                levelContent.style.maxHeight = '0'; // Set max-height to 0 to collapse the content.
                levelContent.style.padding = '0px 12px'; // Adjust padding to match the collapsed state defined in CSS.
            } else {
                // If it's not active, we want to open it.
                // First, close any other levels that might be open. This ensures only one level is expanded at a time (accordion-style).
                document.querySelectorAll('.lesson-level.active').forEach(openLevel => {
                    openLevel.classList.remove('active'); // Remove 'active' class.
                    const openContent = openLevel.querySelector('.level-content'); // Get its content.
                    openContent.style.maxHeight = '0'; // Collapse its content.
                    openContent.style.padding = '0px 12px'; // Adjust its padding.
                });

                // Now, open the clicked level.
                levelDiv.classList.add('active'); // Add the 'active' class to the parent div.
                // Set max-height to the actual scrollHeight of the content. This allows for a smooth transition regardless of content size.
                levelContent.style.maxHeight = levelContent.scrollHeight + 'px';
                levelContent.style.padding = '10px 12px'; // Adjust padding to match the expanded state defined in CSS.
            }
        });
    });

    // Optional: Automatically open the first level when the page loads. This provides an immediate view of the first set of content.
    const firstLevel = document.querySelector('.lesson-level');
    if (firstLevel) {
        firstLevel.classList.add('active'); // Mark the first level as active.
        const firstLevelContent = firstLevel.querySelector('.level-content'); // Get its content div.
        // Set its max-height and padding to immediately show its content.
        firstLevelContent.style.maxHeight = firstLevelContent.scrollHeight + 'px';
        firstLevelContent.style.padding = '10px 12px';
    }
});
