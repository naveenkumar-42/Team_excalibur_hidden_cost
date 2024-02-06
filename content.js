let isHighlighting = false;

function title(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#BFD8AF' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function price(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#4F6F52' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function discount(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#D2E3C8' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function offer(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#D4E7C5' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function fullprice(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#D2E3C8' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function final(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#D2E3C8' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function highlightAmazonProductDetails() {
  const productPrices = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole');
  const productTitles = document.querySelectorAll('#productTitle');
  const discountPrices = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage');
  const fullPrice = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-small.aok-align-center > span > span.aok-relative > span.a-size-small.a-color-secondary.aok-align-center.basisPrice > span');
  const productTotal = document.querySelectorAll('#subtotals-marketplace-table > tbody > tr:nth-child(4) > td.a-color-price.a-size-medium.a-text-right.grand-total-price.aok-nowrap.a-text-bold.a-nowrap')

  price(productPrices);
  title(productTitles);
  discount(discountPrices);
  fullprice(fullPrice);
  final(productTotal);


  function amazoncompareprice(productPrice, amazonPriceDifference) {
    if (productPrice > amazonPriceDifference) {
      return "there is hidden cost";
    } else {
      return "there is no hidden cost";
    }
  }

  let amazonPriceDifferenceArray = Array.from(fullPrice).map((price, index) => {
    let fullPriceValue = parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0]);
    let discountPrice = parseFloat(discountPrices[index]?.textContent.replace(/,/g, '').replace('-', '').replace('%', '')) / 100;
    let amazonPriceDifference = fullPriceValue - (fullPriceValue * discountPrice);
    return amazonPriceDifference;
  });

  let amazonComparePriceArray = amazonPriceDifferenceArray.map((amazonPriceDifference, index) => {
    let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
    return amazoncompareprice(productPriceValue, amazonPriceDifference);
  });

   let discountDifferenceArray = amazonPriceDifferenceArray.map((amazonPriceDifference, index) => {
    let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
    return amazonPriceDifference - productPriceValue;
  });

  chrome.storage.local.set({
    'amazonProductPrices': Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
    'amazonProductTitles': Array.from(productTitles).map(title => title.textContent),
    'amazonDiscountPrices': Array.from(discountPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('-', '').replace('%', '')) / 100),
    'amazonFullPrice': Array.from(fullPrice).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0])),
    'amazonProductTotal': Array.from(productTotal).map(total => total.textContent),
    'amazonPriceDifference': amazonPriceDifferenceArray,
    'amazonComparePrice': amazonComparePriceArray,
    'discountDifference' : discountDifferenceArray 
  });
}

//flipcart details

function highlightFlipkartProductDetails() {
  const productPrices = document.querySelectorAll('#container div._30jeq3._16Jk6d, #container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._1WpvJ7');
  const productTitles = document.querySelectorAll('#container h1 span.B_NuCI');
  const fullPrices = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3I9_wc._2p6lqe, #container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._2xc6hH');
  const discountPercentages = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3Ay6Sb._31Dcoz, #container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span.dML6Ak');
  const finalPrices = document.querySelectorAll('#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div._1YokD2._3Mn1Gg.col-4-12._78xt5Y > div._1AtVbE.col-12-12 > div > div > div > div._3LxTgx > div > div.z4Ha90 > span > div > div > div.z4Ha90');

  // Call functions to process data
  price(productPrices);
  title(productTitles);
  fullprice(fullPrices);
  offer(discountPercentages);
  final(finalPrices);

  // Function to compare product price and offer price
  function flipkartcompareprice(productPrice, offerPrice) {
    if (productPrice > offerPrice) {
      return "there is hidden cost";
    } else {
      return "there is no hidden cost";
    }
  }

  // Extract offer prices from full prices and calculate discount difference
  let offerPricesArray = Array.from(fullPrices).map((price, index) => {
    let fullPriceValue = parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0]);
    let discountPercentage = parseFloat(discountPercentages[index]?.textContent.replace(/,/g, '').replace('-', '').replace('%', ''));
    let offerPrice = fullPriceValue - (fullPriceValue * discountPercentage / 100);
    return offerPrice;
  });

  // Compare product price with offer price for each product
  let flipkartComparePriceArray = offerPricesArray.map((offerPrice, index) => {
    let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
    return flipkartcompareprice(productPriceValue, offerPrice);
  });


  let discountDifferenceArray = offerPricesArray.map((offerPrice, index) => {
    let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
    return productPriceValue - offerPrice;
  });

  // Store the extracted data in Chrome local storage
  chrome.storage.local.set({
    'flipkartProductPrices': Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
    'flipkartProductTitles': Array.from(productTitles).map(title => title.textContent),
    'flipkartFullPrices': Array.from(fullPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0])),
    'flipkartOfferPrices': Array.from(discountPercentages).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('-', '').replace('%', '')) / 100),
    'flipkartPriceDifference': offerPricesArray,
    'flipkartFinalPrices': Array.from(finalPrices).map(price => price.textContent),
    'flipkartComparePrice': flipkartComparePriceArray,
    'flipkartdiscountDifference': discountDifferenceArray
  });
}






// meesho function
function highlightMeeshoProductDetails() {
 const productPrices = document.querySelectorAll('#_next div.sc-bcXHqe.eWRWAb.ShippingInfo_PriceRow-sc-frp12n-1.eMWeDN h4');
  const fullPriceElements = document.querySelectorAll('#_next div.sc-bcXHqe.eWRWAb.ShippingInfo_PriceRow-sc-frp12n-1.eMWeDN p');
  const productTitles = document.querySelectorAll('#_next div.sc-bcXHqe.hcOLTO.ShippingInfo_DetailCard-sc-frp12n-0.dKuTbW span');
  const discountPrices = document.querySelectorAll('#_next div.sc-bcXHqe.eWRWAb.ShippingInfo_PriceRow-sc-frp12n-1.eMWeDN span.sc-dkrFOg.hSBOpl');
  const finalPrices = document.querySelectorAll('#app-layout-body div.sc-eEpejC.cDWdJc span:nth-child(2)');
 
  // Call functions to process data
  price(productPrices);
  title(productTitles);
  fullprice(fullPriceElements);
  discount(discountPrices);
  final(finalPrices);

  const meeshoProductPrices = Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '')));
  const meeshoProductTitles = Array.from(productTitles).map(title => title.textContent);
  const meeshoFullPrices = Array.from(fullPriceElements).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '')));
  const meeshoDiscountPrices = Array.from(discountPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))/100);
  const meeshoFinalPrices = Array.from(finalPrices).map(total => parseFloat(total.textContent.replace(/,/g, '').replace('₹', '')));

  const meeshoPriceDifferenceArray = Array.from(fullPriceElements).map((fullPrice, index) => {
    const fullPriceValue = parseFloat(fullPrice.textContent.replace(/,/g, '').replace('₹', ''));
    const discountPrice = parseFloat(discountPrices[index].textContent.replace(/,/g, '').replace('₹', ''))/100;
    return calculateMeeshoPriceDifference(fullPriceValue, discountPrice);
  });

  const meeshoComparePriceArray = meeshoProductPrices.map((productPrice, index) => {
    return compareMeeshoPrice(productPrice, meeshoPriceDifferenceArray[index]);
  });

  const meeshoDiscountDifferenceArray = meeshoPriceDifferenceArray.map((meeshoPriceDifference, index) => {
    return meeshoPriceDifference - meeshoProductPrices[index];
  });

  // Store the values in Chrome local storage
  chrome.storage.local.set({
    'meeshoProductPrices': meeshoProductPrices,
    'meeshoProductTitles': meeshoProductTitles,
    'meeshoFullPrices': meeshoFullPrices,
    'meeshoDiscountPrices': meeshoDiscountPrices,
    'meeshoFinalPrices': meeshoFinalPrices,
    'meeshoPriceDifference': meeshoPriceDifferenceArray,
    'meeshoComparePrice': meeshoComparePriceArray,
    'meeshoDiscountDifference': meeshoDiscountDifferenceArray
  });
}






chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = request.isHighlighting; // Update highlighting state
    // Execute the appropriate highlighting function based on the current URL
    const url = window.location.href;
    if (url.includes('amazon')) {
      highlightAmazonProductDetails();
    } else if (url.includes('flipkart')) {
      highlightFlipkartProductDetails();
    } else if (url.includes('meesho')) {
      highlightMeeshoProductDetails();
    }

    // Save the highlighting state in storage
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  }
});

// Retrieve the highlighting state from storage on page load
chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
  // Execute the appropriate highlighting function based on the current URL
  const url = window.location.href;
  if (url.includes('amazon')) {
    highlightAmazonProductDetails();
  } else if (url.includes('flipkart')) {
    highlightFlipkartProductDetails();
  } else if (url.includes('meesho')) {
    highlightMeeshoProductDetails();
  }
});

// Your existing highlighting functions remain the same...

// Execute the appropriate highlighting function when the page is loaded
window.addEventListener('load', function() {
  const url = window.location.href;
  if (url.includes('amazon')) {
    highlightAmazonProductDetails();
  } else if (url.includes('flipkart')) {
    highlightFlipkartProductDetails();
  } else if (url.includes('meesho')) {
    highlightMeeshoProductDetails();
  }
});