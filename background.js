let isHighlighting = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = !isHighlighting; 

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'toggleHighlighting', isHighlighting });
      chrome.storage.local.set({ isHighlighting: isHighlighting });
    });
  }
});

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

chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    isHighlighting = true;
    chrome.storage.local.set({ isHighlighting: isHighlighting });
    chrome.tabs.sendMessage(tabId, { action: 'toggleHighlighting', isHighlighting });

    isHighlighting = false;
    chrome.storage.local.set({ isHighlighting: isHighlighting });
    chrome.tabs.sendMessage(tabId, { action: 'toggleHighlighting', isHighlighting });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'backButtonClicked') {
    chrome.browserAction.setIcon({path: 'images/default.png'}, function() {
      if (!isHighlighting) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.runtime.reload();
        });
      }
    });
  }
});

// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log("Dark Pattern Extension installed");
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "openNewTab") {
    const mlUrl = "http://127.0.0.1:5000/";  // Replace with your ML server URL
    const newTabUrl = mlUrl + "?url=" + encodeURIComponent(message.url);
    chrome.tabs.create({ url: newTabUrl });

  }
});