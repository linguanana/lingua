document.querySelectorAll('.auto-list').forEach(container => {
  const lines = container.innerText.split('\n').filter(line => line.trim() !== '');
  const ul = document.createElement('ul');

  lines.forEach(line => {
    const li = document.createElement('li');
    li.textContent = line.trim();
    ul.appendChild(li);
  });

  container.innerHTML = '';
  container.appendChild(ul);
});
