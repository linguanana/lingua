function renderLesson(levels) {
  const container = document.getElementById('lesson-container');
  if (!container) return;

  container.innerHTML = '';

  const infoText = document.createElement('p');
  infoText.classList.add('info-text-size');
  infoText.textContent = 'Start with Level 1 — come back for Level 2 or/and 3 as you progress.';
  container.appendChild(infoText);

  levels.forEach((level, index) => {
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('lesson-level');
    levelDiv.id = `level-${index}`;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('level-title');
    titleDiv.textContent = level.title;
    levelDiv.appendChild(titleDiv);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('level-content');

    // ✅ Key Phrases
    if (level.keyPhrases && level.keyPhrases.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Key Phrases';
      contentDiv.appendChild(h3);

      const ul = document.createElement('ul');
      ul.classList.add('auto-list');

      level.keyPhrases.forEach(phrase => {
        const li = document.createElement('li');
        const itWord = phrase.text || phrase.it || '—';
        const enWord = phrase.en || '';
        const zhWord = phrase.zh ? `<span lang="zh-TW">(${phrase.zh})</span>` : '';
        li.innerHTML = `<span class="italian-word">${itWord}</span> – ${enWord} ${zhWord}`;
        ul.appendChild(li);
      });

      contentDiv.appendChild(ul);
    }

    // ✅ Dialogues
    if (level.dialogues && level.dialogues.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Dialogue';
      contentDiv.appendChild(h3);

      const dialogueBox = document.createElement('div');
      dialogueBox.classList.add('dialogue-box');

      level.dialogues.forEach(line => {
        const zhLine = line.zh ? `<span lang="zh-TW">${line.zh}</span><br>` : '';
        const speaker = line.speaker || '';
        const text = line.text || '';
        const p = document.createElement('p');
        p.innerHTML = `<span class="start-with-word">${speaker}:</span> ${zhLine}<strong>${text}</strong>`;
        dialogueBox.appendChild(p);
      });

      contentDiv.appendChild(dialogueBox);
    }

    // ✅ Tips → now as auto-list
    if (level.tips && level.tips.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Tips';
      contentDiv.appendChild(h3);

      const ul = document.createElement('ul');
      ul.classList.add('auto-list');

      level.tips.forEach(tip => {
        const tipText = tip.text || '';
        const zhText = tip.zh ? `<span lang="zh-TW">(${tip.zh})</span>` : '';
        const li = document.createElement('li');
        li.innerHTML = `<span class="italian-word">${tipText}</span> ${zhText}`;
        ul.appendChild(li);
      });

      contentDiv.appendChild(ul);
    }

    levelDiv.appendChild(contentDiv);
    container.appendChild(levelDiv);
  });

  // ✅ Auto-expand first level
  const firstLevel = document.querySelector('.lesson-level');
  if (firstLevel) {
    firstLevel.classList.add('active');
    const content = firstLevel.querySelector('.level-content');
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.padding = '3px 12px';
  }
}
