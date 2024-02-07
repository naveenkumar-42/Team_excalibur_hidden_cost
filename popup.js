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
      'amazonComparePrice',
      'flipkartFullPrices',
      'flipkartOfferPrices',
      'flipkartPriceDifference',
      'flipkartdiscountDifference',
      
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
      'amazonComparePrice',
      'flipkartComparePrice'
    ], function (result) {
      if (selectedPlatform === 'amazon') {
        document.getElementById('amazonFullPrice').innerHTML = '<h2>Amazon Full Price:</h2><p>' + result.amazonFullPrice.join(', ') + '</p>';
        document.getElementById('amazonDiscountPrices').innerHTML = '<h2>Amazon Discount Prices:</h2><p>' + result.amazonDiscountPrices.join(', ') + '% </p>';
        document.getElementById('amazonPriceDifference').innerHTML = '<h2>Amazon Price Difference:</h2><p>' + result.amazonPriceDifference.join(', ') + '</p>';
        document.getElementById('discountDifference').innerHTML = '<h2>Amazon Discount Difference:</h2><p>' + result.discountDifference.join(', ') + '</p>';
        document.getElementById('amazonComparePrice').innerHTML = '<h1>' + result.amazonComparePrice.join(', ') + '</h1>';
        let amazonComparePriceElement = document.getElementById('amazonComparePrice');
    amazonComparePriceElement.innerHTML = '<h1>' + result.amazonComparePrice.join(', ') + '</h1>';
    if (result.amazonComparePrice.some(price => price.includes('no'))) {
      amazonComparePriceElement.style.color = '#00FA9A';
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/green.png' });
      
    } else {
      amazonComparePriceElement.style.color = 'red';
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/red.png' });
        }
        toggleElementsDisplay(['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference', 'amazonComparePrice'], 'block');
        hideElements(['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference', 'flipkartComparePrice']);
      } else if (selectedPlatform === 'flipkart') {
        document.getElementById('flipkartFullPrices').innerHTML = '<h2>Flipkart Full Price:</h2><p>' + result.flipkartFullPrices.join(', ') + '</p>';
        document.getElementById('flipkartOfferPrices').innerHTML = '<h2>Flipkart Offer Prices:</h2><p>' + result.flipkartOfferPrices.join(', ') + '% </p>';
        document.getElementById('flipkartPriceDifference').innerHTML = '<h2>Flipkart Price Difference:</h2><p>' + result.flipkartPriceDifference.join(', ') + '</p>';
        document.getElementById('flipkartdiscountDifference').innerHTML = '<h2>Flipkart Discount Difference:</h2><p>' + result.flipkartdiscountDifference.join(', ') + '</p>';
        document.getElementById('flipkartComparePrice').innerHTML = '<h1>' + result.flipkartComparePrice.join(', ') + '</h1>';
         let flipkartComparePriceElement = document.getElementById('flipkartComparePrice');
    flipkartComparePriceElement.innerHTML = '<h1>' + result.flipkartComparePrice.join(', ') + '</h1>';
    if (result.flipkartComparePrice.some(price => price.includes('no'))) {
      flipkartComparePriceElement.style.color = '#00FA9A';
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/green.png' });
    } else {
      flipkartComparePriceElement.style.color = 'red';
      chrome.runtime.sendMessage({ action: 'setIcon', path: 'images/red.png' });
    }
        toggleElementsDisplay(['flipkartFullPrices', 'flipkartOfferPrices', 'flipkartPriceDifference', 'flipkartdiscountDifference', 'flipkartComparePrice'], 'block');
        hideElements(['amazonFullPrice', 'amazonDiscountPrices', 'amazonPriceDifference', 'discountDifference', 'amazonComparePrice']);
      }
    });
  });
}

function hideAllValues() {
  document.getElementById('amazonFullPrice').style.display = 'none';
  document.getElementById('amazonDiscountPrices').style.display = 'none';
  document.getElementById('amazonPriceDifference').style.display = 'none';
  document.getElementById('discountDifference').style.display = 'none';
  document.getElementById('amazonComparePrice').style.display = 'none';
  document.getElementById('flipkartFullPrices').style.display = 'none';
  document.getElementById('flipkartOfferPrices').style.display = 'none';
  document.getElementById('flipkartPriceDifference').style.display = 'none';
  document.getElementById('flipkartdiscountDifference').style.display = 'none';
  document.getElementById('flipkartComparePrice').style.display = 'none';
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
  elementIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });
}
