let isHighlighting = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = !isHighlighting; 
  }

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'setIcon') {
    console.log('Received message:', message);
    chrome.action.setIcon({ path: message.path }, () => {
      if (chrome.runtime.lastError) {
        console.log('Error setting icon:', chrome.runtime.lastError);
        sendResponse({ success: false });
      } else {
        console.log('Icon set');
        sendResponse({ success: true });
      }
    });
  }
  return true;  // Will respond asynchronously.
});

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];

    chrome.tabs.sendMessage(activeTab.id, { action: 'toggleHighlighting', isHighlighting });

   
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  });
});

chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
});
