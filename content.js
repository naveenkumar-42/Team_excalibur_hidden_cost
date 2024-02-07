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
    return  productPriceValue -  amazonPriceDifference;
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

  highlightElements(productPrices, '#4F6F52', '2px 5px', '3px', 'bold');
  highlightElements(productTitles, '#BFD8AF', '2px 5px', '3px', 'bold');
  highlightElements(fullPrices, '#D2E3C8', '2px 5px', '3px', 'bold');
  highlightElements(discountPercentages, '#D4E7C5', '2px 5px', '3px', 'bold');
  highlightElements(finalPrices, '#D2E3C8', '2px 5px', '3px', 'bold');


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
    return offerPrice - productPriceValue;
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

//                                                   //meesho details
// function highlightMeeshoProductDetails() {
//   const productPrices = document.querySelectorAll("#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > h4");
//   const productTitles = document.querySelector("#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > span");
//   const discountPercentages = document.querySelector("#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > span.sc-ipEyDJ.cvayIN");
//   const fullPrices = document.querySelector("#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > p");
//   const finalPrices = document.querySelector("#app-layout-body > div > div > div.sc-kDDrLX.sc-bdxVC.bSVgRk.eDXKIy > div.sc-fvNpTx.jA-dyDh.sc-feINqK.gTfMRp.sc-feINqK.gTfMRp > div.sc-eEpejC.cDWdJc > div.sc-eBxihg.cppOtL > span:nth-child(2)");

//   // Call functions to process data
//   price(productPrices);
//   title(productTitles);
//   fullprice(fullPrices);
//   offer(discountPercentages);
//   final(finalPrices); 

//   // Function to compare product price and offer price
//   function meeshoComparePrice(productPrice, offerPrice) {
//     if (productPrice > offerPrice) {
//       return "there is hidden cost";
//     } else {
//       return "there is no hidden cost";
//     }
//   }

//   // Extract offer prices from full prices and calculate discount difference
//   let offerPricesArray = Array.from(fullPrices).map((price, index) => {
//     let fullPriceValue = parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''));
//     let discountPercentage = parseFloat(discountPercentages[index]?.textContent.replace(/,/g, '').replace('-', '').replace('%', ''));
//     let offerPrice = fullPriceValue - (fullPriceValue * discountPercentage / 100);
//     return offerPrice;
//   });

//   // Compare product price with offer price for each product
//   let meeshoComparePriceArray = offerPricesArray.map((offerPrice, index) => {
//     let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
//     return meeshoComparePrice(productPriceValue, offerPrice);
//   });

//   let discountDifferenceArray = offerPricesArray.map((offerPrice, index) => {
//     let productPriceValue = parseFloat(productPrices[index]?.textContent.replace(/,/g, '').replace('₹', ''));
//     return productPriceValue - offerPrice;
//   });

//   // Store the extracted data in Chrome local storage
//   chrome.storage.local.set({
//     'meeshoProductPrices': Array.from(productPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
//     'meeshoProductTitles': Array.from(productTitles).map(title => title.textContent),
//     'meeshoFullPrices': Array.from(fullPrices).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('₹', ''))),
//     'meeshoOfferPrices': Array.from(discountPercentages).map(price => parseFloat(price.textContent.replace(/,/g, '').replace('-', '').replace('%', '')) / 100),
//     'meeshoPriceDifference': offerPricesArray,
//     'meeshoComparePrice': meeshoComparePriceArray,
//     'meeshoDiscountDifference': discountDifferenceArray,
//     'meeshoFinalPrices': Array.from(finalPrices).map(price => price.textContent) // Storing final prices
//   });
// }

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