document.addEventListener('DOMContentLoaded', function () {
  const toggleHighlightingCheckbox = document.getElementById('toggleHighlightingCheckbox');

  // Load the current highlighting state from storage and update the checkbox
  chrome.storage.local.get(['isHighlighting'], function (result) {
    const isHighlighting = result.isHighlighting || false;
    toggleHighlightingCheckbox.checked = isHighlighting;
  });

  // Handle checkbox change event
  toggleHighlightingCheckbox.addEventListener('change', function () {
    const isHighlighting = toggleHighlightingCheckbox.checked;
    chrome.runtime.sendMessage({ action: 'toggleHighlighting', isHighlighting });

    // Save the highlighting state in storage
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  });
});


chrome.storage.local.get([
  'amazonPriceDifference',
  'amazonFullPrice',
  'amazonDiscountPrices',
  'amazonComparePrice',
  'flipkartPriceDifference',
  'flipkartFullPrices',
  'flipkartOfferPrice',
  'meeshoPriceDifference',
  'meeshoMRP',
  'meeshoProductOffer'
], function (result) {
  console.log('Amazon Price Difference:', result.amazonPriceDifference);
  console.log('Discount Prices:', result.amazonDiscountPrices);
  console.log('Full price :', result.amazonFullPrice);
  console.log('Amazon Compare Price:', result.amazonComparePrice);
  console.log('Flipkart Price Difference:', result.flipkartPriceDifference);
  console.log('Discount Prices:', result.flipkartOfferPrice);
  console.log('Full price :', result.flipkartFullPrices);
  console.log('meesho Price Difference:', result.meeshoPriceDifference);
  console.log('Discount Prices:', result.meeshoProductOffer);
  console.log('Full price :', result.meeshoMRP);
});