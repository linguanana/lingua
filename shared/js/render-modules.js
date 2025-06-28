// 模組生成函數
function renderModules() {
    const modulesContainer = document.getElementById('modules-container');
    modulesContainer.innerHTML = ''; // 清空現有內容

    modulesData.forEach(moduleData => {
        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');

        const h2 = document.createElement('h2');
        h2.textContent = moduleData.title;
        h2.onclick = function() { toggleLessons(this); }; // 設定點擊事件

        const lessonListDiv = document.createElement('div');
        lessonListDiv.classList.add('lesson-list');

        moduleData.lessons.forEach(lesson => {
            const a = document.createElement('a');
            a.href = lesson.link;
            a.textContent = lesson.name;
            lessonListDiv.appendChild(a);
        });

        moduleDiv.appendChild(h2);
        moduleDiv.appendChild(lessonListDiv);
        modulesContainer.appendChild(moduleDiv);
    });
}

// 模組展開/收合函數 (與之前相同)
function toggleLessons(el) {
    const moduleDiv = el.closest('.module');
    const lessonList = el.nextElementSibling;

    if (moduleDiv.classList.contains('active')) {
        moduleDiv.classList.remove('active');
        lessonList.style.maxHeight = '0';
        lessonList.style.padding = '0px 12px';
    } else {
        // Close other open modules
        document.querySelectorAll('.module.active').forEach(openModule => {
            openModule.classList.remove('active');
            openModule.querySelector('.lesson-list').style.maxHeight = '0';
            openModule.querySelector('.lesson-list').style.padding = '0px 12px';
        });

        moduleDiv.classList.add('active');
        lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
        lessonList.style.padding = '10px 12px';
    }
}

// 頁面載入完成後呼叫 renderModules 函數
document.addEventListener('DOMContentLoaded', renderModules);
