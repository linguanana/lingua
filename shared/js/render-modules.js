// File: shared/js/render-modules.js

// This function will render modules based on a target container ID and an optional filter.
// - targetContainerId: The ID of the HTML div where the modules will be rendered (e.g., 'modules-container' or 'travel-modules-container').
// - moduleIdToRender: (Optional) If provided, only the module with this ID will be rendered. If null, all modules are rendered.
function renderModules(targetContainerId, moduleIdToRender = null) {
    const modulesContainer = document.getElementById(targetContainerId);

    if (!modulesContainer) {
        console.error(`Target container not found: id="${targetContainerId}". Please check your HTML.`);
        return;
    }

    modulesContainer.innerHTML = ''; // Clear any existing content in the container

    let modulesToDisplay = modulesData; // By default, assume we display all modules

    // If a specific moduleId is requested (meaning this is a single-module page)
    if (moduleIdToRender) {
        const foundModule = modulesData.find(module => module.moduleId === moduleIdToRender);
        if (foundModule) {
            modulesToDisplay = [foundModule]; // Wrap the single found module in an array for forEach
        } else {
            console.warn(`Module with ID "${moduleIdToRender}" not found in modulesData.`);
            modulesContainer.innerHTML = `<p class="error-message">Module "${moduleIdToRender}" not found. Please check the module ID in your script and modules-it.js.</p>`;
            return;
        }
    }

    // Loop through the modules (either all or just the specific one) and create their HTML
    modulesToDisplay.forEach(moduleData => {
        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');
        // You can also add the module's ID directly to its container for specific styling if needed
        moduleDiv.id = moduleData.moduleId;

        const h2 = document.createElement('h2');
        h2.textContent = moduleData.title;
        // Set click event for accordion-like behavior (expand/collapse)
        h2.onclick = function() { toggleLessons(this); };

        const lessonListDiv = document.createElement('div');
        lessonListDiv.classList.add('lesson-list');

        // Populate the lesson list within the module
        if (moduleData.lessons && moduleData.lessons.length > 0) {
            moduleData.lessons.forEach(lesson => {
                const a = document.createElement('a');
                a.href = lesson.link;
                a.textContent = lesson.name;
                lessonListDiv.appendChild(a);
            });
        } else {
            const noLessons = document.createElement('p');
            noLessons.textContent = '(No lessons available for this module yet!)';
            noLessons.className = 'coming-soon'; // Apply a class for styling
            lessonListDiv.appendChild(noLessons);
        }

        // Assemble the module's HTML
        moduleDiv.appendChild(h2);
        moduleDiv.appendChild(lessonListDiv);
        modulesContainer.appendChild(moduleDiv);

        // If this is a single-module page, automatically expand the module
        if (moduleIdToRender) {
            moduleDiv.classList.add('active'); // Add 'active' class to expand
            // Use requestAnimationFrame to ensure the element is fully rendered before calculating scrollHeight
            requestAnimationFrame(() => {
                lessonListDiv.style.maxHeight = lessonListDiv.scrollHeight + 'px';
                lessonListDiv.style.padding = '10px 12px'; // Adjust padding as needed for expanded state
            });
        }
    });
}

// Module expand/collapse function (remains the same)
function toggleLessons(el) {
    const moduleDiv = el.closest('.module');
    const lessonList = el.nextElementSibling; // The div containing lessons

    if (moduleDiv.classList.contains('active')) {
        // Collapse the module
        moduleDiv.classList.remove('active');
        lessonList.style.maxHeight = '0';
        lessonList.style.padding = '0px 12px'; // Adjust padding for collapsed state
    } else {
        // Expand the current module and collapse others (if any are open)
        // This is primarily relevant for the "all modules" page.
        document.querySelectorAll('.module.active').forEach(openModule => {
            openModule.classList.remove('active');
            openModule.querySelector('.lesson-list').style.maxHeight = '0';
            openModule.querySelector('.lesson-list').style.padding = '0px 12px';
        });

        moduleDiv.classList.add('active');
        // Calculate and set maxHeight to expand fully
        lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
        lessonList.style.padding = '10px 12px'; // Adjust padding for expanded state
    }
}

// Initial page load handler
document.addEventListener('DOMContentLoaded', () => {
    // Determine which container to target based on the page's structure
    const mainModulesContainer = document.getElementById('modules-container');
    const travelModulesContainer = document.getElementById('travel-modules-container');

    if (mainModulesContainer) {
        // This is the main index.html page, render all modules
        renderModules('modules-container');
    } else if (travelModulesContainer) {
        // This is a single module page (like travel/index.html),
        // it expects an inline script to call renderModules with the specific ID.
        // We'll leave the call to the inline script in travel/index.html.
        // This block is more of a fallback/detection than a primary call for single pages.
        // The inline script below handles the specific moduleId logic.
    }
    // If neither container is found, no modules will be rendered by this script's default behavior.
});
