let isHighlighting = false;

function applyStyles(elements) {
  elements.forEach(element => {
    element.style.backgroundColor = isHighlighting ? 'yellow' : ''; // Toggle background color
    element.style.padding = isHighlighting ? '2px 5px' : ''; // Toggle padding
    element.style.borderRadius = isHighlighting ? '3px' : ''; // Toggle border radius
    element.style.fontWeight = isHighlighting ? 'bold' : ''; // Toggle font weight
  });
}

function highlightAmazonProductDetails() {
  const productPrices = document.querySelectorAll('#priceblock_ourprice');
  const productTitles = document.querySelectorAll('#productTitle');
  
  applyStyles(productPrices);
  applyStyles(productTitles);
}

function highlightFlipkartProductDetails() {
  const productPrices = document.querySelectorAll('#container div._30jeq3._16Jk6d');
  const productTitles = document.querySelectorAll('#container h1 span.B_NuCI');
  
  applyStyles(productPrices);
  applyStyles(productTitles);
}

function highlightMeeshoProductDetails() {
  const productPrices = document.querySelectorAll('#__next div.sc-bcXHqe.eWRWAb.ShippingInfo__PriceRow-sc-frp12n-1.eMWeDN h4');
  const productTitles = document.querySelectorAll('#__next span');
  
  applyStyles(productPrices);
  applyStyles(productTitles);
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