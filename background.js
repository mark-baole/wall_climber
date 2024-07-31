chrome.action.onClicked.addListener((tab) => {
  console.log("Wall Climber extension clicked");

  const currentUrl = tab.url;
  const cachePrefix = 'https://webcache.googleusercontent.com/search?q=cache:';
  const newUrl = cachePrefix + currentUrl;

  console.log("Current URL: ", currentUrl);
  console.log("New URL: ", newUrl);

  chrome.tabs.create({ url: newUrl });
});
