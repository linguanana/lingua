// File: shared/js/render-modules.js
// This file handles rendering all modules and their content.

// 'currentLanguage' is assumed to be a global variable, set by another script.
// If you don't have a separate language script, you can declare it here:
const currentLanguage = window.currentLanguage || 'en';

function renderModules(targetContainerId, moduleIdToRender = null) {
    const modulesContainer = document.getElementById(targetContainerId);

    if (!modulesContainer) {
        console.error(`Target container not found: id="${targetContainerId}". Please check your HTML.`);
        return;
    }

    modulesContainer.innerHTML = ''; // Clear any existing content

    let modulesToDisplay = modulesData;

    if (moduleIdToRender) {
        const foundModule = modulesData.find(module => module.moduleId === moduleIdToRender);
        if (foundModule) {
            modulesToDisplay = [foundModule];
        } else {
            console.warn(`Module with ID "${moduleIdToRender}" not found in modulesData.`);
            modulesContainer.innerHTML = `<p class="error-message">Module "${moduleIdToRender}" not found.</p>`;
            return;
        }
    }

    modulesToDisplay.forEach(moduleData => {
        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');
        moduleDiv.id = moduleData.moduleId;

        const h2 = document.createElement('h2');
        h2.textContent = currentLanguage === 'zh' ? moduleData.title_zh : moduleData.title;
        h2.onclick = function() { toggleLessons(this); };

        const lessonListDiv = document.createElement('div');
        lessonListDiv.classList.add('lesson-list');

        if (moduleData.lessons && moduleData.lessons.length > 0) {
            moduleData.lessons.forEach(lesson => {
                const a = document.createElement('a');
                let finalLink = lesson.link;
                const currentPathname = window.location.pathname;

                if (window.lessonLinkPrefixToStrip && finalLink.startsWith(window.lessonLinkPrefixToStrip)) {
                    finalLink = finalLink.substring(window.lessonLinkPrefixToStrip.length);
                }

                a.href = finalLink;
                a.textContent = currentLanguage === 'zh' && lesson.name_zh ? lesson.name_zh : lesson.name;
                lessonListDiv.appendChild(a);
            });
        } else {
            const noLessons = document.createElement('p');
            noLessons.textContent = currentLanguage === 'zh' ? '(此模組課程尚未推出!)' : '(No lessons available for this module yet!)';
            noLessons.className = 'coming-soon';
            lessonListDiv.appendChild(noLessons);
        }

        moduleDiv.appendChild(h2);
        moduleDiv.appendChild(lessonListDiv);
        modulesContainer.appendChild(moduleDiv);

        if (moduleIdToRender) {
            moduleDiv.classList.add('active');
        }
    });
}

function toggleLessons(el) {
    const moduleDiv = el.closest('.module');
    if (moduleDiv.classList.contains('active')) {
        moduleDiv.classList.remove('active');
    } else {
        document.querySelectorAll('.module.active').forEach(openModule => {
            openModule.classList.remove('active');
        });
        moduleDiv.classList.add('active');
    }
}

window.addEventListener('language-changed', () => {
    renderModules('modules-container');
});
