document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.auto-list').forEach(container => {
    const rawHTML = container.innerHTML;

    // 用 <br> 分割，保留 HTML 結構
    const lines = rawHTML.split(/<br\s*\/?>/i).map(line => line.trim()).filter(line => line !== '');

    const ul = document.createElement('ul');

    lines.forEach(line => {
      const li = document.createElement('li');
      li.innerHTML = line; // 保留 span、strong 等格式
      ul.appendChild(li);
    });

    container.innerHTML = ''; // 清空舊內容
    container.appendChild(ul);
  });
});
