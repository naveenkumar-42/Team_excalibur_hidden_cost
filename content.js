function title(elements) { // Title Color
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#BFD8AF' : '';
    element.style.padding = isHighlighting ? '2px 5px' : ''; 
    element.style.borderRadius = isHighlighting ? '3px' : '';
    element.style.fontWeight = isHighlighting ? 'bold' : '';
  });
}

function price(elements) { // Price Color
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#4F6F52' : '';
    element.style.padding = isHighlighting ? '2px 5px' : ''; 
    element.style.borderRadius = isHighlighting ? '3px' : '';
    element.style.fontWeight = isHighlighting ? 'bold' : ''; 
  });
}

function discount(elements) { // Discount Color
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#D2E3C8' : ''; 
    element.style.padding = isHighlighting ? '2px 5px' : ''; 
    element.style.borderRadius = isHighlighting ? '3px' : '';
    element.style.fontWeight = isHighlighting ? 'bold' : '';
  });
}

function MRP_finalprice(elements) { // MRP and Final Price Color
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? '#D2E3C8' : ''; 
    element.style.padding = isHighlighting ? '2px 5px' : ''; 
    element.style.borderRadius = isHighlighting ? '3px' : ''; 
    element.style.fontWeight = isHighlighting ? 'bold' : ''; 
  });
}

function highlightAmazonProductDetails() { // Amazon Product Details
  const productTitle = document.querySelectorAll('#productTitle'); // Title of the product
  const productSellingPrice = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole'); // Current Selling Price of the product
  const productSellingPriceRefurbished = document.querySelectorAll('#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span:nth-child(2)'); // Current Selling Price of the product Refurbished 
  const MRP = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-small.aok-align-center > span > span.aok-relative > span.a-size-small.a-color-secondary.aok-align-center.basisPrice > span'); // MRP
  const MRPRefurbished = document.querySelectorAll('#corePrice_desktop > div > table > tbody > tr:nth-child(1) > td.a-span12.a-color-secondary.a-size-base > span.a-price.a-text-price.a-size-base > span:nth-child(2)'); // MRP Refurbished
  const productDiscount = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage'); // Discount percetage
  const finalPrice = document.querySelectorAll('#subtotals-marketplace-table > tbody > tr:nth-child(4) > td.a-color-price.a-size-medium.a-text-right.grand-total-price.aok-nowrap.a-text-bold.a-nowrap'); // Final Price at checkout
  
  title(productTitle);
  price(productSellingPrice);
  price(productSellingPriceRefurbished);
  discount(productDiscount);
  MRP_finalprice(MRP);
  MRP_finalprice(MRPRefurbished);
  MRP_finalprice(finalPrice);
}

function highlightFlipkartProductDetails() { // Flipkart Product Details
  const productTitle = document.querySelectorAll('#container h1 span.B_NuCI'); // Title of the product
  const productSellingPrice = document.querySelectorAll('#container div._30jeq3._16Jk6d,#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._1WpvJ7'); // Current Selling Price of the product
  const MRP = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3I9_wc._2p6lqe,#container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span._2-ut7f._2xc6hH'); // MRP
  const productDiscount = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3Ay6Sb._31Dcoz,#container > div > div._1Er18h > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div._2nQDXZ > div._3fSRat > span.dML6Ak'); // Discount percetage
  const finalPrice = document.querySelectorAll('#container > div > div._1Er18h > div > div._1YokD2._2GoDe3.col-12-12 > div._1YokD2._3Mn1Gg.col-4-12._78xt5Y > div._1AtVbE.col-12-12 > div > div > div > div._3LxTgx > div > div.z4Ha90 > span > div > div > div.z4Ha90'); // Final Price at checkout
 
  title(productTitle);
  price(productSellingPrice);
  MRP_finalprice(MRP);
  discount(productDiscount);
  MRP_finalprice(finalPrice);
}

function highlightMeeshoProductDetails() { // Meesho Product Details
  const productTitle = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > span'); // Title of the product
  const productTitle2 = document.querySelectorAll('#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > span') // Title of the product with discount
  const productSellingPrice = document.querySelectorAll('#__next div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN h4'); // Current Selling Price of the product
  const MRP = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > p'); // MRP
  const MRP1 = document.querySelectorAll('#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > p'); // MRP with discount
  const productDiscount = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > span.sc-dkrFOg.hSBOpl'); // Discount percetage
  const productDiscount1 = document.querySelectorAll('#__next > div.sc-ksBlkl.Pagestyled__ContainerStyled-sc-ynkej6-0.ggLBLW.eQYgmX > div > div.sc-fnGiBr.kBAWpQ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > span.sc-ipEyDJ.cvayIN'); // Discount percetage
  const productDiscount2 = document.querySelectorAll('#__next > div.sc-bcXHqe.Pagestyled__ContainerStyled-sc-ynkej6-0.cppHWG.eQYgmX > div > div.sc-dkrFOg.eTpILp > div.sc-ftTHYK.hqYVzH.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-ftTHYK.lljzUO.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > span.sc-eDvSVe.dOqdSt'); // Discount percetage
  const finalPrice = document.querySelectorAll('#app-layout-body > div > div > div.sc-kDDrLX.sc-bdxVC.bSVgRk.eDXKIy > div.sc-fvNpTx.jA-dyDh.sc-feINqK.gTfMRp.sc-feINqK.gTfMRp > div.sc-eEpejC.cDWdJc > div.sc-eBxihg.cppOtL > span:nth-child(2)'); // Final Price at checkout

  title(productTitle);
  title(productTitle2);
  price(productSellingPrice);
  MRP_finalprice(MRP);
  MRP_finalprice(MRP1);
  discount(productDiscount);
  discount(productDiscount1);
  discount(productDiscount2);
  MRP_finalprice(finalPrice);
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = request.isHighlighting; // Update highlighting state
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