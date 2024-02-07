document.addEventListener('DOMContentLoaded', function () {
  const toggleHighlightingCheckbox = document.getElementById('toggleHighlightingCheckbox');
  chrome.storage.local.get(['isHighlighting'], function (result) {
    const isHighlighting = result.isHighlighting || false;
    toggleHighlightingCheckbox.checked = isHighlighting;
    if (isHighlighting) {
      fetchAndDisplayValues();
    } else {
      hideAllValues();
    }
  });
  toggleHighlightingCheckbox.addEventListener('change', function () {
    const isHighlighting = toggleHighlightingCheckbox.checked;
    chrome.runtime.sendMessage({ action: 'toggleHighlighting', isHighlighting });
    chrome.storage.local.set({ isHighlighting: isHighlighting });
    if (isHighlighting) {
      fetchAndDisplayValues();
    } else {
      hideAllValues();
    }
  });
});
function fetchAndDisplayValues() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    let selectedPlatform = '';
    if (url.includes('amazon')) {
      selectedPlatform = 'amazon';
    } else if (url.includes('flipkart')) {
      selectedPlatform = 'flipkart';
    }
    toggleElementsDisplay([
      'amazonFullPrice',
      'amazonDiscountPrices',
      'amazonPriceDifference',
      'discountDifference',
      'flipkartFullPrices',
      'flipkartOfferPrices',
      'flipkartPriceDifference',
      'flipkartdiscountDifference'
    ], 'none');

    chrome.storage.local.get([
      'amazonPriceDifference',
      'amazonFullPrice',
      'amazonDiscountPrices',
      'discountDifference',
      'flipkartPriceDifference',
      'flipkartFullPrices',
      'flipkartOfferPrices',
      'flipkartdiscountDifference',
    ], function (result) {
      if (selectedPlatform === 'amazon') {
        document.getElementById('amazonFullPrice').innerHTML = '<h2>Amazon Full Price:</h2><p>' + result.amazonFullPrice + '</p>';
        document.getElementById('amazonDiscountPrices').innerHTML = '<h2>Amazon Discount Prices:</h2><p>' + result.amazonDiscountPrices + '</p>';
        document.getElementById('amazonPriceDifference').innerHTML = '<h2>Amazon Price Difference:</h2><p>' + result.amazonPriceDifference + '</p>';
        document.getElementById('discountDifference').innerHTML = '<h2>Amazon Discount Difference:</h2><p>' + result.discountDifference + '</p>';
        toggleElementsDisplay(['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference'], 'block');
        hideElements(['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference']);
        checkHiddenCost(result.amazonComparePrice);
      } else if (selectedPlatform === 'flipkart') {
        document.getElementById('flipkartFullPrices').innerHTML = '<h2>Flipkart Full Price:</h2><p>' + result.flipkartFullPrices + '</p>';
        document.getElementById('flipkartOfferPrices').innerHTML = '<h2>Flipkart Offer Prices:</h2><p>' + result.flipkartOfferPrices + '</p>';
        document.getElementById('flipkartPriceDifference').innerHTML = '<h2>Flipkart Price Difference:</h2><p>' + result.flipkartPriceDifference + '</p>';
        document.getElementById('flipkartdiscountDifference').innerHTML = '<h2>Flipkart Discount Difference:</h2><p>' + result.flipkartdiscountDifference + '</p>';
        toggleElementsDisplay(['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference'], 'block');
        hideElements(['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference']);
        checkHiddenCost(result.flipkartComparePrice);
      }
    });
  });
}
function hideAllValues() {
  document.getElementById('amazonFullPrice').style.display = 'none';
  document.getElementById('amazonDiscountPrices').style.display = 'none';
  document.getElementById('amazonPriceDifference').style.display = 'none';
  document.getElementById('discountDifference').style.display = 'none';
  document.getElementById('flipkartFullPrices').style.display = 'none';
  document.getElementById('flipkartOfferPrices').style.display = 'none';
  document.getElementById('flipkartPriceDifference').style.display = 'none';
  document.getElementById('flipkartdiscountDifference').style.display = 'none';
}
function toggleElementsDisplay(elementIds, display) {
  elementIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = display;
    }
  });
}

function checkHiddenCost(comparePrice) {
  if (comparePrice.includes('hidden cost')) {
    createFloatingBox('Hidden Cost Detected: ' + comparePrice);
  }
}


function createFloatingBox(message) {
  // Create a div element for the floating box
  const floatingBox = document.createElement('div');
  floatingBox.textContent = message;
  floatingBox.style.position = 'fixed';
  floatingBox.style.top = '50%';
  floatingBox.style.left = '50%';
  floatingBox.style.transform = 'translate(-50%, -50%)';
  floatingBox.style.padding = '10px';
  floatingBox.style.background = 'white';
  floatingBox.style.border = '1px solid black';
  floatingBox.style.zIndex = '9999'; // Ensure it's on top of other elements

  // Append the floating box to the body
  document.body.appendChild(floatingBox);
}
