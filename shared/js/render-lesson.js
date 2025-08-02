// shared/js/render-lesson.js

function renderLesson(levels) {
  const container = document.getElementById('lessons-container');
  container.innerHTML = ''; // Clear previous content

  levels.forEach((level, index) => {
    // 建立外層容器
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('lesson-level');
    levelDiv.id = `level-${index}`;

    // 建立 level 標題
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('level-title');
    titleDiv.textContent = level.title;
    levelDiv.appendChild(titleDiv);

    // 建立 level 內容
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('level-content');

    // 加入 key phrases
    if (level.keyPhrases && level.keyPhrases.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Key Phrases';
      contentDiv.appendChild(h3);

      const ul = document.createElement('ul');
      ul.classList.add('auto-list');

      level.keyPhrases.forEach(phrase => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="italian-word">${phrase.it}</span> – ${phrase.en}`;
        ul.appendChild(li);
      });

      contentDiv.appendChild(ul);
    }

    // 加入 dialogues
    if (level.dialogues && level.dialogues.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Dialogue';
      contentDiv.appendChild(h3);

      const dialogueBox = document.createElement('div');
      dialogueBox.classList.add('dialogue-box');

      level.dialogues.forEach(line => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${line.speaker}:</strong> ${line.text}`;
        dialogueBox.appendChild(p);
      });

      contentDiv.appendChild(dialogueBox);
    }

    // 加入 tips（可選）
    if (level.tips && level.tips.length > 0) {
      const tipBox = document.createElement('div');
      tipBox.classList.add('tip-box');
      level.tips.forEach(tip => {
        const p = document.createElement('p');
        p.innerHTML = tip;
        tipBox.appendChild(p);
      });
      contentDiv.appendChild(tipBox);
    }

    levelDiv.appendChild(contentDiv);
    container.appendChild(levelDiv);
  });

  // ✅ 自動展開第一個 level（如果有的話）
  const firstLevel = document.querySelector('.lesson-level');
  if (firstLevel) {
    firstLevel.classList.add('active');
    const content = firstLevel.querySelector('.level-content');
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.padding = '3px 12px';
  }
}
