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
  const productSellingPrice = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole');
  const productTitle = document.querySelectorAll('#productTitle');
  const productDiscount = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage');
  const MRP = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-small.aok-align-center > span > span.aok-relative > span.a-size-small.a-color-secondary.aok-align-center.basisPrice > span');
  const productTotal = document.querySelectorAll('#subtotals-marketplace-table > tbody > tr:nth-child(4) > td.a-color-price.a-size-medium.a-text-right.grand-total-price.aok-nowrap.a-text-bold.a-nowrap')
  const MRPRefurbished = document.querySelectorAll('#corePrice_desktop > div > table > tbody > tr:nth-child(1) > td.a-span12.a-color-secondary.a-size-base > span.a-price.a-text-price.a-size-base > span:nth-child(2)');
  const productSellingPriceRefurbished = document.querySelectorAll('#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span:nth-child(2)');
  
  price(productSellingPrice);
  price(productSellingPriceRefurbished);
  title(productTitle);
  discount(productDiscount);
  fullprice(MRP);
  fullprice(MRPRefurbished);
  final(productTotal);
}

function highlightFlipkartProductDetails() {
  const productSellingPrice = document.querySelectorAll('#container div._30jeq3._16Jk6d,#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._1WpvJ7');
  const productTitle = document.querySelectorAll('#container h1 span.B_NuCI');
  const MRP = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3I9_wc._2p6lqe,#container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._2xc6hH');
  const productDiscount = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3Ay6Sb._31Dcoz,#container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span.dML6Ak');
  const finalPrice = document.querySelectorAll('#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div._1YokD2._3Mn1Gg.col-4-12._78xt5Y > div._1AtVbE.col-12-12 > div > div > div > div._3LxTgx > div > div.z4Ha90 > span > div > div > div.z4Ha90');
 
  price(productSellingPrice);
  title(productTitle);
  fullprice(MRP);
  discount(productDiscount);
  final(finalPrice);
}

function highlightMeeshoProductDetails() {
  const productPrices = document.querySelectorAll('#__next div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN h4');
  const productTitle = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > span');
  const productTitle2 = document.querySelectorAll('#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > span')
  const productOffer = document.querySelectorAll('#__next > div.sc-bcXHqe.Pagestyled__ContainerStyled-sc-ynkej6-0.cppHWG.eQYgmX > div > div.sc-dkrFOg.eTpILp > div.sc-ftTHYK.hqYVzH.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-ftTHYK.lljzUO.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > span.sc-eDvSVe.dOqdSt');
  const productTotal = document.querySelectorAll('#app-layout-body > div > div > div.sc-kDDrLX.sc-bdxVC.bSVgRk.eDXKIy > div.sc-fvNpTx.jA-dyDh.sc-feINqK.gTfMRp.sc-feINqK.gTfMRp > div.sc-eEpejC.cDWdJc > div.sc-eBxihg.cppOtL > span:nth-child(2)')
  const MRP = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > p')
  const productDiscount = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > span.sc-dkrFOg.hSBOpl')
 
  price(productPrices);
  title(productTitle);
  title(productTitle2);
  discount(productDiscount);
  fullprice(MRP);
  offer(productOffer);
  final(productTotal);
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