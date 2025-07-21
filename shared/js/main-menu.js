// main-menu.js (modification)

document.addEventListener('DOMContentLoaded', () => {
    const modulesContainer = document.getElementById('modules-container');

    // ... (rest of the initial checks)

    modulesData.forEach(module => {
        const moduleSection = document.createElement('section');
        moduleSection.className = 'module-section'; // For styling

        // --- NEW LINE ADDED ---
        if (module.moduleId) { // Only add if moduleId exists
            moduleSection.id = module.moduleId;
        }
        // --- END NEW LINE ---

        const moduleTitle = document.createElement('h2');
        moduleTitle.textContent = module.title;
        moduleSection.appendChild(moduleTitle);

        // ... (rest of the lesson rendering logic)

        modulesContainer.appendChild(moduleSection);
    });
});
