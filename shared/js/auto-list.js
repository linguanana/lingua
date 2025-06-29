function convertAutoList(el) {
  if (el.dataset.converted === 'true') return;

  const lines = el.innerHTML
    .trim()
    .split('<br>')
    .map(line => line.trim())
    .filter(line => line !== '');

  const ul = document.createElement('ul');

  let currentUl = ul;
  lines.forEach(text => {
    // Support indentation with "-- " to create nested levels
    if (text.startsWith('-- ')) {
      const li = document.createElement('li');
      li.innerHTML = text.slice(3);
      let nestedUl = document.createElement('ul');
      nestedUl.classList.add('nested'); // Use .auto-list.nested styles
      li.appendChild(nestedUl);
      currentUl.appendChild(li);
      currentUl = nestedUl; // Move deeper
    } else {
      currentUl = ul; // Reset nesting
      const li = document.createElement('li');
      li.innerHTML = text;
      currentUl.appendChild(li);
    }
  });

  el.innerHTML = '';
  el.appendChild(ul);
  el.dataset.converted = 'true';
}

// Convert .auto-list only after section opens
document.querySelectorAll('.level-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    setTimeout(() => {
      const autoLists = content.querySelectorAll('.auto-list');
      autoLists.forEach(convertAutoList);
    }, 50);
  });
});

// Also handle default-visible content on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.level-content').forEach(content => {
    const computed = window.getComputedStyle(content);
    if (computed.maxHeight !== '0px') {
      const autoLists = content.querySelectorAll('.auto-list');
      autoLists.forEach(convertAutoList);
    }
  });
});
