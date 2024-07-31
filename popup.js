document.getElementById('open-cache').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const currentUrl = tab.url;
      const cachePrefix = 'https://webcache.googleusercontent.com/search?q=cache:';
      const newUrl = cachePrefix + currentUrl;
  
      console.log("Button clicked");
      console.log("Current URL: ", currentUrl);
      console.log("New URL: ", newUrl);
  
      chrome.tabs.create({ url: newUrl });
    });
  });
  