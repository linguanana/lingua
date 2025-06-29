document.addEventListener('DOMContentLoaded', function() { // 確保在 DOM 加載完成後執行
    document.querySelectorAll('.auto-list').forEach(container => {
        // 1. 使用 textContent 獲取容器的原始文字內容，這比 innerText 更能保持原始文字結構。
        // 2. 將所有可能的換行符號序列 (CRLF 或 LF) 替換為單一的 '\n'。
        //    這一步是為了確保跨瀏覽器對換行符的處理一致性。
        const rawText = container.textContent.replace(/\r?\n/g, '\n');

        // 3. 按 '\n' 分割字串，對每一行進行 trim() 移除首尾空白，
        //    然後過濾掉任何空字串 (這會處理掉因多個換行符或首尾換行產生的空行)。
        const lines = rawText.split('\n').map(line => line.trim()).filter(line => line !== '');

        const ul = document.createElement('ul');

        if (lines.length > 0) {
            // 如果成功分割出多行，則為每一行創建一個 <li>
            lines.forEach(line => {
                const li = document.createElement('li');
                li.textContent = line; // line 在前面已經 trim() 過了
                ul.appendChild(li);
            });
        } else if (rawText.trim() !== '') {
            // 備用方案：如果雖然容器有文字內容 (不是空的)，但卻沒有分割出任何行。
            // 這可能發生在 Safari 將所有換行符都變成空格的情況下。
            // 在這種情況下，將整個內容作為一個單一的列表項。
            const li = document.createElement('li');
            li.textContent = rawText.trim();
            ul.appendChild(li);
        }
        // 如果 rawText.trim() 是空的，則什麼也不做，ul 將保持為空。

        container.innerHTML = ''; // 清空容器的現有內容
        container.appendChild(ul); // 將生成的 ul 元素添加到容器中
    });
});
