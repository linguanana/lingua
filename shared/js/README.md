# JavaScript 說明 – shared/js/

這個資料夾包含網站各個頁面共用的 JavaScript 功能，包括 Module Index 頁面與每個 Lesson 課程頁的互動功能。

---

## 📁 檔案列表與用途

### 1. `render-modules.js`
🔧 **用途**：動態生成 Module Index 頁面中的模組清單與課程連結，支援展開／收合模組。

- 依據 `modulesData` 陣列內容產生模組
- 點擊模組標題可展開／收合
- 頁面載入完成後自動初始化

✅ **依賴**：`modules-it.js` / `modules-fr.js`（定義模組資料）

---

### 2. `auto-list.js`
🔧 **用途**：將 `.auto-list` 內的純文字自動轉換成 `<ul><li>` 有條列符號的清單。

- 方便在 HTML 中快速建立清單，不需手動寫 `<ul><li>`
- 每行一個項目，自動排版整齊

## 🧱 建議搭配的 HTML 結構
```html
<div class="auto-list">
  🍎 Apple – 蘋果
  🍊 Orange – 柳橙
</div>
```

---
### 3. `toggle-lesson-level.js`

🔧 **用途**  
在課程頁中實現「手風琴式（accordion）」的展開/收合效果，讓每個 `.lesson-level` 區塊能單獨打開與關閉。

---

## ✅ 功能摘要

- 點擊 `.level-title` → 展開或收起對應的 `.level-content`
- 同一時間只會展開一個區塊（自動關閉其他）
- 頁面載入時，自動展開第一個區塊（可調整）

---

## 🧱 建議搭配的 HTML 結構

```html
<div class="lesson-level">
  <div class="level-title">Level 1</div>
  <div class="level-content">
    這裡放課程內容，例如詞彙表、對話、範例句…
  </div>
</div>
