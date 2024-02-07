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
  'discountDifference',
  'flipkartPriceDifference',
  'flipkartFullPrices',
  'flipkartOfferPrices',
  'flipkartComparePrice',
  'flipkartdiscountDifference',
  
], function (result) {
 
  console.log('amazon Full price :', result.amazonFullPrice);
  console.log('amazon Discount Prices:', result.amazonDiscountPrices);
  console.log('Amazon Price Difference:', result.amazonPriceDifference);
  console.log('Amazon Compare Price:', result.amazonComparePrice);
  console.log('amazon Discount Difference:', result.discountDifference);
  console.log('flipcart Full price :', result.flipkartFullPrices);
  console.log('flipcart Discount Prices:', result.flipkartOfferPrices);
  console.log('Flipkart Price Difference:', result.flipkartPriceDifference);
  console.log('Flipkart Compare Price:', result.flipkartComparePrice);
  console.log('flipcart Discount Difference:', result.flipkartdiscountDifference);
  // console.log('meesho Price Difference:', result.meeshoPriceDifference);
  // console.log('meesho Discount Prices:', result.meeshoDiscountPrices);
  // console.log('meesho Full price :', result.meeshoFullPrices);
  // console.log('meesho Compare Price:', result.meeshoComparePrice);
  // console.log('meesho Discount Difference:', result.meeshoDiscountDifference);
  
});