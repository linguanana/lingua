// File: shared/js/language-initializer.js

let currentLanguage = localStorage.getItem('userLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langZhBtn = document.getElementById('lang-zh');

    if (langEnBtn && langZhBtn) {
        function updateLanguage(language) {
            currentLanguage = language;
            localStorage.setItem('userLanguage', language);
            const activeModuleId = document.querySelector('.module.active')?.id;
            renderModules('modules-container');
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
        }

        if (currentLanguage === 'zh') {
            langZhBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langZhBtn.classList.remove('active');
        }

        langEnBtn.addEventListener('click', () => {
            updateLanguage('en');
            langEnBtn.classList.add('active');
            langZhBtn.classList.remove('active');
        });

        langZhBtn.addEventListener('click', () => {
            updateLanguage('zh');
            langZhBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        });
    }
});
