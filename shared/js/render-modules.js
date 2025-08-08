// File: shared/js/render-modules.js

// This function will render modules based on a target container ID and an optional filter.
// - targetContainerId: The ID of the HTML div where the modules will be rendered (e.g., 'modules-container' or 'travel-modules-container').
// - moduleIdToRender: (Optional) If provided, only the module with this ID will be rendered. If null, all modules are rendered.
let currentLanguage = 'en'; // or 'zh'

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
        moduleDiv.id = moduleData.moduleId;

        const h2 = document.createElement('h2');
        h2.textContent = currentLanguage === 'zh' && moduleData.title_zh ? moduleData.title_zh : moduleData.title;
        h2.onclick = function() { toggleLessons(this); };

        const lessonListDiv = document.createElement('div');
        lessonListDiv.classList.add('lesson-list');

        // Populate the lesson list within the module
        if (moduleData.lessons && moduleData.lessons.length > 0) {
            moduleData.lessons.forEach(lesson => {
                const a = document.createElement('a');

                // --- Start of Dynamic Link Path Adjustment ---
                let finalLink = lesson.link;
                const currentPathname = window.location.pathname;

                // Check if the current page's path includes '/travel/' AND is not the base 'italian-life/' path.
                // This indicates we are in a subdirectory like 'lingua/italian-life/travel/index.html'
                // The check `!currentPathname.endsWith('/italian-life/')` prevents false positives on the main index.
                if (currentPathname.includes('/travel/') && !currentPathname.endsWith('/italian-life/')) {
                    // If the link itself starts with 'travel/', remove it to prevent 'travel/travel/'
                    if (finalLink.startsWith('travel/')) {
                        finalLink = finalLink.substring('travel/'.length);
                    }
                }
                // --- End of Dynamic Link Path Adjustment ---

                a.href = finalLink; // Use the adjusted link
                a.textContent = currentLanguage === 'zh' && lesson.name_zh ? lesson.name_zh : lesson.name;
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
        document.querySelectorAll('.module.active').forEach(openModule => {
            openModule.classList.remove('active');
            openModule.querySelector('.lesson-list').style.maxHeight = '0';
            openModule.querySelector('.lesson-list').style.padding = '0px 12px';
        });

        moduleDiv.classList.add('active');
        lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
        lessonList.style.padding = '10px 12px'; // Adjust padding for expanded state
    }
}

// Initial page load handler
document.addEventListener('DOMContentLoaded', () => {
    // 取得模組容器
    const mainModulesContainer = document.getElementById('modules-container');
    const travelModulesContainer = document.getElementById('travel-modules-container');

    // *** 修正點：在這裡宣告 languageSwitcherContainer 變數 ***
    const languageSwitcherContainer = document.getElementById('language-switcher-container');

    // 如果首頁模組容器和語言切換容器都存在，才執行以下程式碼
    if (languageSwitcherContainer && mainModulesContainer) {
        // 這裡我們直接將按鈕的 HTML 插入到指定的容器中
        languageSwitcherContainer.innerHTML = `
            <button id="lang-en" class="active">English</button>
            <button id="lang-zh">中文</button>
        `;

        // 這裡我們保留你原本的事件監聽器，但增加了更新 active 樣式的邏輯
        document.getElementById('lang-en').addEventListener('click', () => {
            currentLanguage = 'en';
            localStorage.setItem('userLanguage', 'en'); // <-- 修正點1: 儲存語言到 localStorage
            const activeModuleId = document.querySelector('.module.active')?.id;
            renderModules('modules-container');

            // 修正點：在重新渲染後，恢復展開的模組
            if (activeModuleId) {
              const newActiveModule = document.getElementById(activeModuleId);
              if (newActiveModule) {
                newActiveModule.classList.add('active');
                const lessonList = newActiveModule.querySelector('.lesson-list');
                if (lessonList) {
                  lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
                  lessonList.style.padding = '10px 12px';
                }
              }
            }

            document.getElementById('lang-en').classList.add('active');
            document.getElementById('lang-zh').classList.remove('active');
        });

        document.getElementById('lang-zh').addEventListener('click', () => {
            currentLanguage = 'zh';
            localStorage.setItem('userLanguage', 'zh');
            const activeModuleId = document.querySelector('.module.active')?.id;
            renderModules('modules-container');

            // 修正點：在重新渲染後，恢復展開的模組
            if (activeModuleId) {
              const newActiveModule = document.getElementById(activeModuleId);
              if (newActiveModule) {
                newActiveModule.classList.add('active');
                const lessonList = newActiveModule.querySelector('.lesson-list');
                if (lessonList) {
                  lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
                  lessonList.style.padding = '10px 12px';
                }
              }
            }

            document.getElementById('lang-zh').classList.add('active');
            document.getElementById('lang-en').classList.remove('active');
        });

        // 初始載入時，渲染頁面內容
        renderModules('modules-container');
    } else if (travelModulesContainer) {
        // Leave this to the inline script in travel/index.html
    }
});
