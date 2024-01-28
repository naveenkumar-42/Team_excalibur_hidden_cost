document.addEventListener('DOMContentLoaded', function() {
  const turnOnButton = document.getElementById('turnOnButton');
  const turnOffButton = document.getElementById('turnOffButton');

  turnOnButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleHighlighting', isHighlighting: true });
    });
  });

  turnOffButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleHighlighting', isHighlighting: false });
    });
  });
});
