// File: shared/js/language-initializer.js

// 將語言變數設為全域變數
window.currentLanguage = localStorage.getItem('userLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langZhBtn = document.getElementById('lang-zh');

    // 根據當前語言設定按鈕樣式
    if (langEnBtn && langZhBtn) {
        if (window.currentLanguage === 'zh') {
            langZhBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langZhBtn.classList.remove('active');
        }

        // 按鈕點擊事件
        const switchLanguage = (lang) => {
            window.currentLanguage = lang;
            localStorage.setItem('userLanguage', lang);

            // 更新按鈕樣式
            if (lang === 'en') {
                langEnBtn.classList.add('active');
                langZhBtn.classList.remove('active');
            } else {
                langZhBtn.classList.add('active');
                langEnBtn.classList.remove('active');
            }

            // 通知頁面重新渲染，這是一個通用的方法
            window.dispatchEvent(new Event('language-changed'));
        };

        langEnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage('en');
        });

        langZhBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage('zh');
        });
    }
});
