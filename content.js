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


  function amazoncompareprice(fullPrice, amazonPriceDifference) {
    if (fullPrice < amazonPriceDifference) {
      return "Hidden cost is there";
    } else {
      return "Hidden cost is not there";
    }
  }

  let amazonPriceDifferenceArray = Array.from(fullPrice).map((price, index) => {
    let fullPriceValue = parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0]);
    let discountPrice = parseFloat(discountPrices[index]?.textContent.replace(/,/g, '').replace('-', '').replace('%', '')) / 100;
    let amazonPriceDifference = fullPriceValue - (fullPriceValue * discountPrice);
    return fullPriceValue - amazonPriceDifference;
  });

  let amazonComparePriceArray = amazonPriceDifferenceArray.map((amazonPriceDifference, index) => {
    let fullPriceValue = parseFloat(fullPrice[index]?.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0]);
    return amazoncompareprice(fullPriceValue, amazonPriceDifference);
  });

  chrome.storage.local.set({
    'amazonProductPrices': Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
    'amazonProductTitles': Array.from(productTitles).map(title => title.textContent),
    'amazonDiscountPrices': Array.from(discountPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('-', '').replace('%', '')) / 100),
    'amazonFullPrice': Array.from(fullPrice).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', '').split('₹')[0])),
    'amazonProductTotal': Array.from(productTotal).map(total => total.textContent),
    'amazonPriceDifference': amazonPriceDifferenceArray,
    'amazonComparePrice': amazonComparePriceArray
  });
}

function highlightFlipkartProductDetails() {
  const productPrices = document.querySelectorAll('#container div._30jeq3._16Jk6d,#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._1WpvJ7');
  const productTitles = document.querySelectorAll('#container h1 span.B_NuCI');
  const fullPrices = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3I9_wc._2p6lqe,#container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._2xc6hH');
  const offerPrice = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3Ay6Sb._31Dcoz,#container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span.dML6Ak');
  const finalPrice = document.querySelectorAll('#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div._1YokD2._3Mn1Gg.col-4-12._78xt5Y > div._1AtVbE.col-12-12 > div > div > div > div._3LxTgx > div > div.z4Ha90 > span > div > div > div.z4Ha90');

  price(productPrices);
  title(productTitles);
  discount(fullPrices);
  offer(offerPrice);
  final(finalPrice);

  function flipkartPriceDifference(fullPrice, offerPrice) {
    const fullPriceValue = parseFloat(fullPrice.replace(/,/g, '').replace('₹', ''));
    const offerPriceValue = parseFloat(offerPrice.replace('% off', '')) / 100;
    return fullPriceValue - (fullPriceValue * offerPriceValue);
  }

  chrome.storage.local.set({
    'flipkartProductPrices': Array.from(productPrices).map(price => price.textContent),
    'flipkartProductTitles': Array.from(productTitles).map(title => title.textContent),
    'flipkartFullPrices': Array.from(fullPrices).map(price => price.textContent),
    'flipkartOfferPrice': Array.from(offerPrice).map(price => price.textContent),
    'flipkartFinalPrice': Array.from(finalPrice).map(price => price.textContent),
    'flipkartPriceDifference': Array.from(fullPrices).map((price, index) => flipkartPriceDifference(price.textContent, offerPrice[index].textContent))
  });

  chrome.storage.local.set({
    'flipkartProductPrices': flipkartProductPrices,
    'flipkartProductTitles': flipkartProductTitles,
    'flipkartFullPrices': flipkartFullPrices,
    'flipkartOfferPrice': flipkartOfferPrice,
    'flipkartPriceDifference': flipkartPriceDifference
  });
}


// meesho function


function highlightMeeshoProductDetails() {
  const productPrices = document.querySelectorAll('#_next div.sc-bcXHqe.eWRWAb.ShippingInfo_PriceRow-sc-frp12n-1.eMWeDN h4');
  const MRP = document.querySelectorAll('#_next div.sc-bcXHqe.eWRWAb.ShippingInfo_PriceRow-sc-frp12n-1.eMWeDN p');
  const productTitles = document.querySelectorAll('#_next div.sc-bcXHqe.hcOLTO.ShippingInfo_DetailCard-sc-frp12n-0.dKuTbW span');
  const productOffer = document.querySelectorAll('#_next div.sc-bcXHqe.eWRWAb.ShippingInfo_PriceRow-sc-frp12n-1.eMWeDN span.sc-dkrFOg.hSBOpl');
  const finalPrice = document.querySelectorAll('#app-layout-body div.sc-eEpejC.cDWdJc span:nth-child(2)');

  function meeshoPriceDifference(fullPrice, offerPrice) {
    return fullPrice -(fullPrice * offerPrice);
  }

  const meeshoProductPrices = Array.from(productPrices).map(price => price.textContent);
  const meeshoProductTitles = Array.from(productTitles).map(title => title.textContent);
  const meeshoMRP = Array.from(MRP).map(price => price.textContent);
  const meeshoProductOffer = Array.from(productOffer).map(offer => offer.textContent);
  const meeshoFinalPrices = Array.from(finalPrice).map(total => total.textContent);

  const meeshoPriceDifferenceArray = Array.from(MRP).map((MRP, index) => {
    const fullPrice = parseFloat(MRP.textContent.replace(/,/g, '').replace('₹', ''));
    const offerPrice = parseFloat(productOffer[index].textContent.replace(/,/g, '').replace('₹', ''))/100;
    return meeshoPriceDifference(fullPrice, offerPrice);
    
  });

  // Store the values in Chrome local storage
  chrome.storage.local.set({
    'meeshoProductPrices': meeshoProductPrices,
    'meeshoProductTitles': meeshoProductTitles,
    'meeshoMRP': meeshoMRP,
    'meeshoProductOffer': meeshoProductOffer,
    'meeshofinalPrice': meeshoFinalPrices,
    'meeshoPriceDifference': meeshoPriceDifferenceArray
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