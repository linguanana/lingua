function renderLesson(levels) {
  const container = document.getElementById('lesson-container');
  if (!container) return;

  container.innerHTML = '';

  // 說明文字
  const infoText = document.createElement('p');
  infoText.className = 'info-text-size';
  infoText.innerHTML = `<span class="start-with-word">Start with Level 1</span> — come back for Level 2 or/and 3 as you progress.`;
  container.appendChild(infoText);

  levels.forEach((level, index) => {
    // 每個卡片
    const levelDiv = document.createElement('div');
    levelDiv.className = 'lesson-level';
    levelDiv.id = `level-${index + 1}`; // 為了 localStorage 可用

    // 標題 - 使用 <h2> 並帶上 ✅ emoji 和 class
    const titleEl = document.createElement('h2');
    titleEl.className = 'level-title';
    titleEl.innerHTML = `✅ ${level.title}`;
    levelDiv.appendChild(titleEl);

    // 內容區塊 - 可以是 key phrases / dialogues / tips
    const contentEl = document.createElement('div');
    contentEl.className = 'level-content';

    if (level.keyPhrases?.length) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Key Phrases';
      contentEl.appendChild(h3);

      const ul = document.createElement('ul');
      ul.className = 'auto-list';
      level.keyPhrases.forEach(p => {
        const li = document.createElement('li');
        const zh = p.zh ? ` <span lang="zh-TW">(${p.zh})</span>` : '';
        li.innerHTML = `<span class="italian-word">${p.text || p.it}</span> – ${p.en || ''}${zh}`;
        ul.appendChild(li);
      });
      contentEl.appendChild(ul);
    }

    if (level.dialogues?.length) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Dialogue';
      contentEl.appendChild(h3);

      const box = document.createElement('div');
      box.className = 'dialogue-box';
      level.dialogues.forEach(line => {
        const p = document.createElement('p');
        const zhLine = line.zh ? `<span lang="zh-TW">${line.zh}</span><br>` : '';
        p.innerHTML = `<span class="start-with-word">${line.speaker}:</span> ${zhLine}<strong>${line.text}</strong>`;
        box.appendChild(p);
      });
      contentEl.appendChild(box);
    }

    if (level.tips?.length) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Tips';
      contentEl.appendChild(h3);

      const ul = document.createElement('ul');
      ul.className = 'auto-list';
      level.tips.forEach(tip => {
        const zh = tip.zh ? ` <span lang="zh-TW">(${tip.zh})</span>` : '';
        const li = document.createElement('li');
        li.innerHTML = `<span class="italian-word">${tip.text}</span>${zh}`;
        ul.appendChild(li);
      });
      contentEl.appendChild(ul);
    }

    levelDiv.appendChild(contentEl);
    container.appendChild(levelDiv);
  });
}

// ✅ Add this as the LAST line:
window.renderLesson = renderLesson;
