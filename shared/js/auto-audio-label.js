document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.audio-box').forEach(function (box) {
    const audio = box.querySelector('audio');
    const source = audio?.querySelector('source');
    const label = box.querySelector('.audio-label');

    if (source && label) {
      const fileName = source.getAttribute('src').split('/').pop();
      label.textContent = `🔊 ${fileName}`;
    }
  });
});
