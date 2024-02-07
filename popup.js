document.addEventListener('DOMContentLoaded', function () {
  const toggleHighlightingCheckbox = document.getElementById('toggleHighlightingCheckbox');

  // Load the current highlighting state from storage and update the checkbox
  chrome.storage.local.get(['isHighlighting'], function (result) {
    const isHighlighting = result.isHighlighting || false;
    toggleHighlightingCheckbox.checked = isHighlighting;

    // Fetch and display values if highlighting is turned on
    if (isHighlighting) {
      fetchAndDisplayValues();
    } else {
      // If highlighting is turned off, hide all value elements
      hideAllValues();
    }
  });

  // Handle checkbox change event
  toggleHighlightingCheckbox.addEventListener('change', function () {
    const isHighlighting = toggleHighlightingCheckbox.checked;
    chrome.runtime.sendMessage({ action: 'toggleHighlighting', isHighlighting });

    // Save the highlighting state in storage
    chrome.storage.local.set({ isHighlighting: isHighlighting });

    // If highlighting is turned on, fetch and display values
    if (isHighlighting) {
      fetchAndDisplayValues();
    } else {
      // If highlighting is turned off, hide all value elements
      hideAllValues();
    }
  });
});

// Function to fetch and display values based on the selected platform
function fetchAndDisplayValues() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    let selectedPlatform = '';
    if (url.includes('amazon')) {
      selectedPlatform = 'amazon';
    } else if (url.includes('flipkart')) {
      selectedPlatform = 'flipkart';
    }
    chrome.storage.local.get([
      'amazonPriceDifference',
      'amazonFullPrice',
      'amazonDiscountPrices',
      'amazonComparePrice',
      'discountDifference',
      'flipkartPriceDifference',
      'flipkartFullPrices',
      'flipkartOfferPrices',
      'flipkartComparePrice',
      'flipkartdiscountDifference',
    ], function (result) {
      if (selectedPlatform === 'amazon') {
        document.getElementById('amazonFullPrice').innerText = 'Amazon Full Price: ' + result.amazonFullPrice;
        document.getElementById('amazonDiscountPrices').innerText = 'Amazon Discount Prices: ' + result.amazonDiscountPrices;
        document.getElementById('amazonPriceDifference').innerText = 'Amazon Price Difference: ' + result.amazonPriceDifference;
        document.getElementById('amazonComparePrice').innerText = 'Amazon Compare Price: ' + result.amazonComparePrice;
        document.getElementById('discountDifference').innerText = 'Amazon Discount Difference: ' + result.discountDifference;
        showAmazonValues(); // Show Amazon values when highlighting is turned on
        hideFlipkartValues(); // Hide Flipkart values when highlighting is turned on
      } else if (selectedPlatform === 'flipkart') {
        document.getElementById('flipkartFullPrices').innerText = 'Flipkart Full Price: ' + result.flipkartFullPrices;
        document.getElementById('flipkartOfferPrices').innerText = 'Flipkart Offer Prices: ' + result.flipkartOfferPrices;
        document.getElementById('flipkartPriceDifference').innerText = 'Flipkart Price Difference: ' + result.flipkartPriceDifference;
        document.getElementById('flipkartComparePrice').innerText = 'Flipkart Compare Price: ' + result.flipkartComparePrice;
        document.getElementById('flipkartdiscountDifference').innerText = 'Flipkart Discount Difference: ' + result.flipkartdiscountDifference;
        showFlipkartValues(); // Show Flipkart values when highlighting is turned on
        hideAmazonValues(); // Hide Amazon values when highlighting is turned on
      }
    });
  });
}

// Function to hide all value elements
function hideAllValues() {
  document.getElementById('amazonFullPrice').style.display = 'none';
  document.getElementById('amazonDiscountPrices').style.display = 'none';
  document.getElementById('amazonPriceDifference').style.display = 'none';
  document.getElementById('amazonComparePrice').style.display = 'none';
  document.getElementById('discountDifference').style.display = 'none';
  document.getElementById('flipkartFullPrices').style.display = 'none';
  document.getElementById('flipkartOfferPrices').style.display = 'none';
  document.getElementById('flipkartPriceDifference').style.display = 'none';
  document.getElementById('flipkartComparePrice').style.display = 'none';
  document.getElementById('flipkartdiscountDifference').style.display = 'none';
}

// Function to show Amazon value elements
function showAmazonValues() {
  document.getElementById('amazonFullPrice').style.display = 'block';
  document.getElementById('amazonDiscountPrices').style.display = 'block';
  document.getElementById('amazonPriceDifference').style.display = 'block';
  document.getElementById('amazonComparePrice').style.display = 'block';
  document.getElementById('discountDifference').style.display = 'block';
}

// Function to show Flipkart value elements
function showFlipkartValues() {
  document.getElementById('flipkartFullPrices').style.display = 'block';
  document.getElementById('flipkartOfferPrices').style.display = 'block';
  document.getElementById('flipkartPriceDifference').style.display = 'block';
  document.getElementById('flipkartComparePrice').style.display = 'block';
  document.getElementById('flipkartdiscountDifference').style.display = 'block';
}

// Function to hide Amazon value elements
function hideAmazonValues() {
  document.getElementById('amazonFullPrice').style.display = 'none';
  document.getElementById('amazonDiscountPrices').style.display = 'none';
  document.getElementById('amazonPriceDifference').style.display = 'none';
  document.getElementById('amazonComparePrice').style.display = 'none';
  document.getElementById('discountDifference').style.display = 'none';
}

// Function to hide Flipkart value elements
function hideFlipkartValues() {
  document.getElementById('flipkartFullPrices').style.display = 'none';
  document.getElementById('flipkartOfferPrices').style.display = 'none';
  document.getElementById('flipkartPriceDifference').style.display = 'none';
  document.getElementById('flipkartComparePrice').style.display = 'none';
  document.getElementById('flipkartdiscountDifference').style.display = 'none';
}
