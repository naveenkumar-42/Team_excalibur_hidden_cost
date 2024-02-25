document.addEventListener('DOMContentLoaded', function() {
  var compareButton = document.getElementById('compareButton');
  compareButton.addEventListener('click', function() {
    comparePrices();
  });
});

function comparePrices() {
  chrome.storage.local.get(['amazonProductTitles', 'amazonProductPrices'], function (result) {
    const amazonProductTitles = result.amazonProductTitles;
    const amazonProductPrices = result.amazonProductPrices;

    if (!amazonProductTitles || !amazonProductPrices) {
      alert('Amazon product data is not available. Please set the product title and price.');
      return;
    }

    fetch('http://localhost:5010/compare', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amazon_product_title: amazonProductTitles,
        amazon_product_price: amazonProductPrices
      }) 
    })
    .then(response => response.json())
    .then(data => {
      displayComparison(data);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while fetching data. Please try again later.');
    });
  });
}

function displayComparison(data) {
  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  var flipkartPrices = data.flipkart_prices;
  var amazonPrices = data.amazon_prices;
  var comparisonResults = data.comparison_results;

  // Check if there is any data to display
  if (flipkartPrices.length === 0 || amazonPrices.length === 0 || comparisonResults.length === 0) {
    alert("No data available for comparison.");
    return;
  }

  // Display comparison data only once
  var pricesContainer = document.createElement("div");
  pricesContainer.classList.add("prices-container");

  var amazonResult = document.createElement("div");
  amazonResult.classList.add("result");
  amazonResult.innerHTML = "<h3>Amazon</h3><p>" + amazonPrices[0] + "</p>";
  pricesContainer.appendChild(amazonResult);

  var flipkartResult = document.createElement("div");
  flipkartResult.classList.add("result");
  flipkartResult.innerHTML = "<h3>Flipkart</h3><p>" + flipkartPrices[0] + "</p>";
  pricesContainer.appendChild(flipkartResult);

  resultsDiv.appendChild(pricesContainer);

  var priceDifference = document.createElement("div");
  priceDifference.classList.add("result");
  var difference = Math.abs(amazonPrices[0] - flipkartPrices[0]); 
  priceDifference.innerHTML = "<h3>Price Difference</h3><p>" + difference + "</p>";
  resultsDiv.appendChild(priceDifference);

  var comparisonMessage = document.createElement("div");
  comparisonMessage.classList.add("result");
  comparisonMessage.innerHTML = "<h3 class='compare'>Comparison Result</h3><p>" + comparisonResults[0] + "</p>";
  resultsDiv.appendChild(comparisonMessage);
}
