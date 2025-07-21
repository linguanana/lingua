// shared/js/render-single-module.js

document.addEventListener('DOMContentLoaded', () => {
    // We explicitly want to load the 'travel1' module for this page.
    const requestedModuleId = 'travel1';

    // This line MUST get the div with the ID 'travel-modules-container'
    // It's the placeholder in your HTML where the generated module content will go.
    const targetContainer = document.getElementById('travel-modules-container');

    // If the div isn't found, log an error and stop.
    if (!targetContainer) {
        console.error('Target container not found. Please ensure your HTML has a div with id="travel-modules-container".');
        return;
    }

    targetContainer.innerHTML = ''; // Clear any loading messages or existing content.

    // Basic check to ensure modulesData is available.
    if (typeof modulesData === 'undefined' || !Array.isArray(modulesData)) {
        console.error('modulesData is not defined or is not an array. Please ensure modules-it.js is correctly loaded before this script.');
        targetContainer.innerHTML = '<p class="error-message">Error loading modules data.</p>';
        return;
    }

    // Find the specific module (the 'travel1' module in this case) from your data.
    const moduleToRender = modulesData.find(module => module.moduleId === requestedModuleId);

    if (moduleToRender) {
        // Create the <section> element for the module.
        const moduleSection = document.createElement('section');
        moduleSection.className = 'module-section';
        // Assign the *module's unique ID* (e.g., 'travel1') to this new section element.
        moduleSection.id = moduleToRender.moduleId;

        // Create and append the module title.
        const moduleTitle = document.createElement('h2');
        moduleTitle.textContent = moduleToRender.title;
        moduleSection.appendChild(moduleTitle);

        // If the module has lessons, create and append the lesson list.
        if (moduleToRender.lessons && moduleToRender.lessons.length > 0) {
            const lessonList = document.createElement('ul');
            lessonList.className = 'lesson-list';

            moduleToRender.lessons.forEach(lesson => {
                const listItem = document.createElement('li');
                const lessonLink = document.createElement('a');

                // Adjust the lesson link path.
                // If your modulesData links are like "travel/ep1.html"
                // and this page is 'travel/index.html', you need to remove the "travel/" prefix
                // so the link becomes "ep1.html" relative to the current page.
                const adjustedLink = lesson.link.startsWith('travel/') ? lesson.link.substring(7) : lesson.link;
                lessonLink.href = adjustedLink;

                lessonLink.textContent = lesson.name;

                listItem.appendChild(lessonLink);
                lessonList.appendChild(listItem);
            });
            moduleSection.appendChild(lessonList);
        } else {
            // Display 'coming soon' if there are no lessons.
            const comingSoon = document.createElement('p');
            comingSoon.textContent = '(Episodes coming soon!)';
            comingSoon.className = 'coming-soon';
            moduleSection.appendChild(comingSoon);
        }

        // Finally, append the fully constructed module section into your target container div.
        targetContainer.appendChild(moduleSection);
    } else {
        // Handle cases where the specified module ID is not found in modulesData.
        targetContainer.innerHTML = `<p class="error-message">Module with ID "${requestedModuleId}" not found in data.</p>`;
        console.warn(`Module ID: "${requestedModuleId}" not found in modulesData.`);
    }
});
