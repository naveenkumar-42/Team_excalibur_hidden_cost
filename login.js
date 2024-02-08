document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const captchaInput = document.getElementById('captchaInput');
  const captchaButton = document.getElementById('captchaButton');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
  });

  captchaButton.addEventListener('click', function() {
    const captchaText = captchaInput.value;
    submitCaptcha(captchaText);
  });

  // Function to handle login
  function login(username, password) {
    chrome.runtime.sendMessage({ action: 'scrape', username: username, password: password }, function(response) {
      console.log('Response from background.js:', response);
      if (response && response.captchaUrl) {
        displayCaptcha(response.captchaUrl);
      } else {
        // Handle success or error response
        if (response.error) {
          alert("Login failed. Please try again.");
        } else {
          alert("Login successful!");
        }
      }
    });
  }

  // Function to submit captcha
  function submitCaptcha(captchaText) {
    chrome.runtime.sendMessage({ action: 'submitCaptcha', captchaText: captchaText }, function(response) {
      console.log('Response from background.js:', response);
      // Handle captcha submission response
      if (response.error) {
        alert("Captcha submission failed. Please try again.");
      } else {
        alert("Captcha submitted successfully!");
      }
    });
  }

  // Function to display captcha
  function displayCaptcha(captchaUrl) {
    const captchaContainer = document.getElementById('captchaContainer');
    captchaContainer.innerHTML = `
      <img src="${captchaUrl}" alt="Captcha"><br>
      <label for="captchaInput">Captcha:</label><br>
      <input class="captcha-input" type="text" id="captchaInput" name="captchaInput"><br>
      <button id="captchaButton" class="submit" type="button">Submit Captcha</button>
    `;
  }
});
