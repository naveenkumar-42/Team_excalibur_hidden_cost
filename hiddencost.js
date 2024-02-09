document.addEventListener('DOMContentLoaded', function () {
  const toggleHighlightingCheckbox = document.getElementById('toggleHighlightingCheckbox');
  chrome.storage.local.get(['isHighlighting'], function (result) {
    const isHighlighting = result.isHighlighting ?? true;
    toggleHighlightingCheckbox.checked = isHighlighting;
    if (isHighlighting) {
      fetchAndDisplayValues();
    } else {
      hideAllValues();
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/default.png' }); // Set icon to default
    }
  });
  toggleHighlightingCheckbox.addEventListener('change', function () {
    const isHighlighting = toggleHighlightingCheckbox.checked;
    chrome.runtime.sendMessage({ action: 'toggleHighlighting', isHighlighting });
    chrome.storage.local.set({ isHighlighting });
    if (isHighlighting) {
      fetchAndDisplayValues();
    } else {
      hideAllValues();
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/default.png' }); // Set icon to default
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
    } else {
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/default.png' });
      return; // Early return to avoid unnecessary processing
    }
    const amazonElements = ['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference', 'amazonComparePrice'];
    const flipkartElements = ['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference', 'flipkartComparePrice'];
    toggleElementsDisplay([...amazonElements, ...flipkartElements], 'none'); // Combine arrays and hide all elements

    chrome.storage.local.get([
      'amazonPriceDifference', 'amazonFullPrice', 'amazonDiscountPrices', 'discountDifference', 'flipkartPriceDifference',
      'flipkartFullPrices', 'flipkartOfferPrices', 'flipkartdiscountDifference', 'amazonComparePrice', 'flipkartComparePrice'
    ], function (result) {
      if (selectedPlatform === 'amazon') {
        displayAmazonValues(result);
      } else if (selectedPlatform === 'flipkart') {
        displayFlipkartValues(result);
      }
    });
  });
}

function displayAmazonValues(result) {
  const amazonElements = ['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference', 'amazonComparePrice'];
  document.getElementById('amazonFullPrice').innerHTML = '<h2>Amazon Full Price:</h2><p>' + result.amazonFullPrice.join(', ') + '</p>';
  document.getElementById('amazonDiscountPrices').innerHTML = '<h2>Amazon Discount Prices:</h2><p>' + result.amazonDiscountPrices.join(', ') + '% </p>';
  document.getElementById('amazonPriceDifference').innerHTML = '<h2>Amazon Price Difference:</h2><p>' + result.amazonPriceDifference.join(', ') + '</p>';
  document.getElementById('discountDifference').innerHTML = '<h2>Amazon Discount Difference:</h2><p>' + result.discountDifference.join(', ') + '</p>';
  document.getElementById('amazonComparePrice').innerHTML = '<h1>' + result.amazonComparePrice.join(', ') + '</h1>';
  updateIconAndTextColor(result.amazonComparePrice, 'amazonComparePrice');
  toggleElementsDisplay(amazonElements, 'block');
  hideElements(['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference', 'flipkartComparePrice']);
}

function displayFlipkartValues(result) {
  const flipkartElements = ['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference', 'flipkartComparePrice'];
  document.getElementById('flipkartFullPrices').innerHTML = '<h2>Flipkart Full Price:</h2><p>' + result.flipkartFullPrices.join(', ') + '</p>';
  document.getElementById('flipkartOfferPrices').innerHTML = '<h2>Flipkart Offer Prices:</h2><p>' + result.flipkartOfferPrices.join(', ') + '% </p>';
  document.getElementById('flipkartPriceDifference').innerHTML = '<h2>Flipkart Price Difference:</h2><p>' + result.flipkartPriceDifference.join(', ') + '</p>';
  document.getElementById('flipkartdiscountDifference').innerHTML = '<h2>Flipkart Discount Difference:</h2><p>' + result.flipkartdiscountDifference.join(', ') + '</p>';
  document.getElementById('flipkartComparePrice').innerHTML = '<h1>' + result.flipkartComparePrice.join(', ') + '</h1>';
  updateIconAndTextColor(result.flipkartComparePrice, 'flipkartComparePrice');
  toggleElementsDisplay(flipkartElements, 'block');
  hideElements(['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference', 'amazonProductTotal', 'amazonComparePrice']);
}

function updateIconAndTextColor(prices, elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = '<h1>' + prices.join(', ') + '</h1>';
  if (prices.some(price => price.includes('no'))) {
    element.style.color = '#00FA9A';
    chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/green.png' });
  } else if (prices.some(price => !price.includes('no'))) {
    element.style.color = 'red';
    chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/red.png' });
  }
}

function hideAllValues() {
  const allElements = ['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference', 'amazonComparePrice',
    'flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference', 'flipkartComparePrice'];
  toggleElementsDisplay(allElements, 'none');
}

function toggleElementsDisplay(elementIds, display) {
  elementIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = display;
    }
  });
}

function hideElements(elementIds) {
  toggleElementsDisplay(elementIds, 'none');
}

let backButton = document.querySelector('.back_button');

backButton.addEventListener('click', function() {
  chrome.runtime.sendMessage({action: 'backButtonClicked'});
});


// popup.js
document.getElementById('urlForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const url = document.getElementById('urlInput').value;

  chrome.runtime.sendMessage({ action: 'openNewTab', url: url });
});