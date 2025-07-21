// shared/js/render-single-module.js

document.addEventListener('DOMContentLoaded', () => {
    // 從 URL 取得想要載入的 moduleId
    // 例如：如果您的 URL 是 travel-modules.html?module=travel1
    // 或者您直接硬編碼一個 ID
    const urlParams = new URLSearchParams(window.location.search);
    const requestedModuleId = urlParams.get('module') || 'travel1'; // 預設載入 'travel1'

    const targetContainer = document.getElementById('travel-modules-container'); // 這個 ID 應該與您的 HTML 匹配

    if (!targetContainer) {
        console.error('目標容器未找到。請確認 HTML 中存在 id 為 "travel-modules-container" 的元素。');
        return;
    }

    targetContainer.innerHTML = ''; // 清除任何初始載入訊息

    // 檢查 modulesData 是否已定義且為陣列
    if (typeof modulesData === 'undefined' || !Array.isArray(modulesData)) {
        console.error('modulesData 未定義或不是陣列。請確認 modules-it.js 已正確載入。');
        targetContainer.innerHTML = '<p class="error-message">載入模組資料時出錯，請檢查控制台。</p>';
        return;
    }

    // 尋找符合 requestedModuleId 的單元
    const moduleToRender = modulesData.find(module => module.moduleId === requestedModuleId);

    if (moduleToRender) {
        // 創建單元區塊 (section)
        const moduleSection = document.createElement('section');
        moduleSection.className = 'module-section'; // 沿用 module-style.css 的樣式
        moduleSection.id = moduleToRender.moduleId; // 設定 section 的 ID

        // 創建單元標題 (h2)
        const moduleTitle = document.createElement('h2');
        moduleTitle.textContent = moduleToRender.title;
        moduleSection.appendChild(moduleTitle);

        // 檢查是否有課程 (lessons)
        if (moduleToRender.lessons && moduleToRender.lessons.length > 0) {
            // 創建課程列表 (ul)
            const lessonList = document.createElement('ul');
            lessonList.className = 'lesson-list'; // 沿用 module-style.css 的樣式

            moduleToRender.lessons.forEach(lesson => {
                const listItem = document.createElement('li');
                const lessonLink = document.createElement('a');

                lessonLink.href = lesson.link; // 課程連結
                lessonLink.textContent = lesson.name; // 課程名稱

                listItem.appendChild(lessonLink);
                lessonList.appendChild(listItem);
            });
            moduleSection.appendChild(lessonList);
        } else {
            // 如果沒有課程，顯示「即將推出」訊息
            const comingSoon = document.createElement('p');
            comingSoon.textContent = '(課程即將推出！)';
            comingSoon.className = 'coming-soon'; // 沿用 module-style.css 的樣式
            moduleSection.appendChild(comingSoon);
        }

        // 將整個單元區塊添加到容器中
        targetContainer.appendChild(moduleSection);
    } else {
        // 如果找不到指定的單元
        targetContainer.innerHTML = `<p class="error-message">找不到 ID 為 "${requestedModuleId}" 的單元。</p>`;
        console.warn(`在 modulesData 中找不到 moduleId: "${requestedModuleId}"。`);
    }
});
