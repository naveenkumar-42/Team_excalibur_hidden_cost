// content.js

function highlightFlipkartProductDetails() {
  // Highlighting product prices
  const productPrices = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div');
  productPrices.forEach(price => {
    price.style.backgroundColor = 'yellow';
    price.style.padding = '2px 5px';
    price.style.borderRadius = '3px';
    price.style.fontWeight = 'bold';
  });

  // Highlighting product titles
  const productTitles = document.querySelectorAll('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(1) > h1 > span');
  productTitles.forEach(title => {
    title.style.textDecoration = 'underline';
      title.style.fontWeight = 'bold';
      title.style.backgroundColor = 'yellow';
  });
}

// content.js

function highlightAmazonProductDetails() {
  // Highlighting product prices
  const productPrices = document.querySelectorAll('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole');
  productPrices.forEach(price => {
    price.style.backgroundColor = 'yellow';
    price.style.padding = '2px 5px';
    price.style.borderRadius = '3px';
    price.style.fontWeight = 'bold';
  });

  // Highlighting product titles
  const productTitles = document.querySelectorAll('#productTitle');
  productTitles.forEach(title => {
    title.style.textDecoration = 'underline';
    title.style.fontWeight = 'bold';
    title.style.backgroundColor = 'yellow';
  });
}

// content.js

function highlightMeeshoProductDetails() {
  // Highlighting product prices
  const productPrices = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN > h4');
  productPrices.forEach(price => {
    price.style.backgroundColor = 'yellow';
    price.style.padding = '2px 5px';
    price.style.borderRadius = '3px';
    price.style.fontWeight = 'bold';
  });

  // Highlighting product titles
  const productTitles = document.querySelectorAll('#__next > div.sc-ipEyDJ.Pagestyled__ContainerStyled-sc-ynkej6-0.gFCkMM.eQYgmX > div > div.sc-eDWCr.gYhLHJ > div.sc-bcXHqe.hcOLTO.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW.ShippingInfo__DetailCard-sc-frp12n-0.dKuTbW > span');
  productTitles.forEach(title => {
    title.style.textDecoration = 'underline';
    title.style.fontWeight = 'bold';
    title.style.backgroundColor = 'yellow';
  });
}

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