// popup.js
document.getElementById('urlForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const url = document.getElementById('urlInput').value;

  chrome.runtime.sendMessage({ action: 'openNewTab', url: url });
});