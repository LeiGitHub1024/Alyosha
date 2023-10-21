chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    console.log('url: ', url);
    
    if (/porn|%E8%89%B2%E6%83%85|%E6%B6%A9%E6%83%85/.test(url)) {
      return {redirectUrl: chrome.runtime.getURL('static.html')};
    }
  },
  {urls: ["http://*/*", "https://*/*"]},
  ['blocking']
);