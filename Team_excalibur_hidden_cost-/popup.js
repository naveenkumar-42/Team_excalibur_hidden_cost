document.getElementById('submitUrl').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = tabs[0].url;
        chrome.runtime.sendMessage({ action: 'openNewTab', url: url });
    });
});
