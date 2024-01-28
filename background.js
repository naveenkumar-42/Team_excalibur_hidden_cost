let isHighlighting = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = !isHighlighting; // Toggle the highlighting state
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'toggleHighlighting', isHighlighting });
    });
    
    // Save the highlighting state in storage
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  }
});

// Retrieve the highlighting state from storage on extension startup
chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
});
