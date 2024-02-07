let isHighlighting = false;

function highlightElements(elements, backgroundColor, padding, borderRadius, fontWeight) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? backgroundColor : '';
    element.style.padding = isHighlighting ? padding : '';
    element.style.borderRadius = isHighlighting ? borderRadius : '';
    element.style.fontWeight = isHighlighting ? fontWeight : '';
  });
}

function highlightAmazonProductDetails() {
  const productPrices = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole');
  const productTitles = document.querySelectorAll('#productTitle');
  const discountPrices = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage');
  const fullPrice = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-small.aok-align-center > span > span.aok-relative > span.a-size-small.a-color-secondary.aok-align-center.basisPrice > span');
  const productTotal = document.querySelectorAll('#subtotals-marketplace-table > tbody > tr:nth-child(4) > td.a-color-price.a-size-medium.a-text-right.grand-total-price.aok-nowrap.a-text-bold.a-nowrap');

  highlightElements(productPrices, '#4F6F52', '2px 5px', '3px', 'bold');
  highlightElements(productTitles, '#BFD8AF', '2px 5px', '3px', 'bold');
  highlightElements(discountPrices, '#D2E3C8', '2px 5px', '3px', 'bold');
  highlightElements(fullPrice, '#D2E3C8', '2px 5px', '3px', 'bold');
  highlightElements(productTotal, '#D2E3C8', '2px 5px', '3px', 'bold');

  function amazoncompareprice(productPrice, amazonPriceDifference) {
    if (productPrice > amazonPriceDifference) {
      return "There is hidden cost";
    } else {
      return "There is no hidden cost";
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
    let ans = productPriceValue - amazonPriceDifference;
    return  ans.toFixed(2);
  });

  chrome.storage.local.set({
    'amazonProductPrices': Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
    'amazonProductTitles': Array.from(productTitles).map(title => title.textContent),
    'amazonDiscountPrices': Array.from(discountPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('-', ''))),
    'amazonFullPrice': Array.from(fullPrice).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0])),
    'amazonProductTotal': Array.from(productTotal).map(total => total.textContent),
    'amazonPriceDifference': amazonPriceDifferenceArray,
    'amazonComparePrice': amazonComparePriceArray,
    'discountDifference' : discountDifferenceArray 
  });
}

function highlightFlipkartProductDetails() {
  const productPrices = document.querySelectorAll('#container div._30jeq3._16Jk6d, #container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._1WpvJ7');
  const productTitles = document.querySelectorAll('#container h1 span.B_NuCI');
  const fullPrices = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3I9_wc._2p6lqe, #container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._2xc6hH');
  const discountPercentages = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3Ay6Sb._31Dcoz, #container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span.dML6Ak');
  const finalPrices = document.querySelectorAll('#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div._1YokD2._3Mn1Gg.col-4-12._78xt5Y > div._1AtVbE.col-12-12 > div > div > div > div._3LxTgx > div > div.z4Ha90 > span > div > div > div.z4Ha90');

  highlightElements(productPrices, '#4F6F52', '2px 5px', '3px', 'bold');
  highlightElements(productTitles, '#BFD8AF', '2px 5px', '3px', 'bold');
  highlightElements(fullPrices, '#D2E3C8', '2px 5px', '3px', 'bold');
  highlightElements(discountPercentages, '#D4E7C5', '2px 5px', '3px', 'bold');
  highlightElements(finalPrices, '#D2E3C8', '2px 5px', '3px', 'bold');

  function flipkartcompareprice(productPrice, offerPrice) {
    if (productPrice > offerPrice) {
      return "There is hidden cost";
    } else {
      return "There is no hidden cost";
    }
  }

  let offerPricesArray = Array.from(fullPrices).map((price, index) => {
    let fullPriceValue = parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0]);
    let discountPercentage = parseFloat(discountPercentages[index]?.textContent.replace(/,/g, '').replace('-', '').replace('%', ''));
    let offerPrice = fullPriceValue - (fullPriceValue * discountPercentage / 100);
    return offerPrice.toFixed(2);
  });

  let flipkartComparePriceArray = offerPricesArray.map((offerPrice, index) => {
    let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
    return flipkartcompareprice(productPriceValue, offerPrice);
  });


  let discountDifferenceArray = offerPricesArray.map((offerPrice, index) => {
    let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
    let ans = productPriceValue - offerPrice ;
    return ans.toFixed(2);
  });

  chrome.storage.local.set({
    'flipkartProductPrices': Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
    'flipkartProductTitles': Array.from(productTitles).map(title => title.textContent),
    'flipkartFullPrices': Array.from(fullPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0])),
    'flipkartOfferPrices': Array.from(discountPercentages).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('-', ''))),
    'flipkartPriceDifference': offerPricesArray,
    'flipkartFinalPrices': Array.from(finalPrices).map(price => price.textContent),
    'flipkartComparePrice': flipkartComparePriceArray,
    'flipkartdiscountDifference': discountDifferenceArray
  });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = request.isHighlighting; 
    const url = window.location.href;
    if (url.includes('amazon')) {
      highlightAmazonProductDetails();
    } else if (url.includes('flipkart')) {
      highlightFlipkartProductDetails();
    } else if (url.includes('meesho')) {
      highlightMeeshoProductDetails(); 
    }
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  }
});

chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
  const url = window.location.href;
  if (url.includes('amazon')) {
    highlightAmazonProductDetails();
  } else if (url.includes('flipkart')) {
    highlightFlipkartProductDetails();
  } else if (url.includes('meesho')) {
    highlightMeeshoProductDetails(); 
  }
});
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
