let isHighlighting = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = !isHighlighting; 
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];

    chrome.tabs.sendMessage(activeTab.id, { action: 'toggleHighlighting', isHighlighting });

   
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  });
});

chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
});
