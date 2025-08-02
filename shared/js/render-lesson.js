function renderLesson(levels) {
  const container = document.getElementById('lesson-container'); // 🟢 Use correct container
  if (!container) {
    console.error('Missing #lesson-container');
    return;
  }

  container.innerHTML = ''; // Clear old content

  // Optional guidance text
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

    // Key Phrases
    if (level.keyPhrases && level.keyPhrases.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Key Phrases';
      contentDiv.appendChild(h3);

      const ul = document.createElement('ul');
      ul.classList.add('auto-list');

      level.keyPhrases.forEach(phrase => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="italian-word">${phrase.text}</span> – ${phrase.en} <span lang="zh-TW">(${phrase.zh})</span>`;
        ul.appendChild(li);
      });

      contentDiv.appendChild(ul);
    }

    // Dialogue
    if (level.dialogues && level.dialogues.length > 0) {
      const h3 = document.createElement('h3');
      h3.textContent = 'Dialogue';
      contentDiv.appendChild(h3);

      const dialogueBox = document.createElement('div');
      dialogueBox.classList.add('dialogue-box');

      level.dialogues.forEach(line => {
        const p = document.createElement('p');
        p.innerHTML = `<span class="start-with-word">${line.speaker}:</span> <span lang="zh-TW">${line.zh}</span><br><strong>${line.text}</strong>`;
        dialogueBox.appendChild(p);
      });

      contentDiv.appendChild(dialogueBox);
    }

    // Tips
    if (level.tips && level.tips.length > 0) {
      const tipBox = document.createElement('div');
      tipBox.classList.add('tip-box');

      level.tips.forEach(tip => {
        const p = document.createElement('p');
        p.innerHTML = `<span class="italian-word">${tip.text}</span> <span lang="zh-TW">(${tip.zh})</span>`;
        tipBox.appendChild(p);
      });

      contentDiv.appendChild(tipBox);
    }

    levelDiv.appendChild(contentDiv);
    container.appendChild(levelDiv);
  });

  // ❌ Do NOT auto-expand anything here
  // Leave accordion behavior entirely to toggle-lesson-level.js
}
