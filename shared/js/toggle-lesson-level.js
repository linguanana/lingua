document.addEventListener("DOMContentLoaded", function () {
  const lessonLevels = document.querySelectorAll(".lesson-level");

  // 只有超過兩個 lesson-level 區塊時才啟用手風琴效果
  if (lessonLevels.length > 2) {
    lessonLevels.forEach((level, index) => {
      const title = level.querySelector(".level-title");
      const content = level.querySelector(".level-content");

      if (title && content) {
        title.addEventListener("click", () => {
          // 關閉所有內容
          document.querySelectorAll(".lesson-level .level-content").forEach((c) => {
            c.style.display = "none";
          });

          // 打開目前這個
          content.style.display = "block";
        });

        // 預設只打開第一個
        if (index === 0) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      }
    });
  } else {
    // 只有 1～2 個區塊就全部展開
    lessonLevels.forEach((level) => {
      const content = level.querySelector(".level-content");
      if (content) {
        content.style.display = "block";
      }
    });
  }
});
