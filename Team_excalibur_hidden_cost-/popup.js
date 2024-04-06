document.getElementById('urlForm').addEventListener('submit', function (event) {
  event.preventDefault();

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    document.getElementById('urlInput').value = url;

    chrome.runtime.sendMessage({ action: 'openNewTab', url: url });
  });
});