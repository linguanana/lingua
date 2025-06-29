document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.auto-list').forEach(container => {
    const rawHTML = container.innerHTML;
    const lines = rawHTML.split(/<br\s*\/?>/i).map(line => line.trim()).filter(line => line !== '');

    const ul = document.createElement('ul');

    lines.forEach(line => {
      const li = document.createElement('li');
      li.innerHTML = line; // ← 這裡改成 innerHTML 來保留 <span> 等標籤
      ul.appendChild(li);
    });

    container.innerHTML = '';
    container.appendChild(ul);
  });
});
