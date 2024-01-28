document.addEventListener('DOMContentLoaded', function() {
  const highlightButton = document.getElementById('highlightButton');

  highlightButton.addEventListener('click', function() {
    // Send a message to the background script to toggle highlighting
    chrome.runtime.sendMessage({ action: 'toggleHighlighting' });
  });
});
