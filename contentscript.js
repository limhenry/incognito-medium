chrome.storage.sync.get('is-medium-incognito-enabled', (result) => {
  const value = result['is-medium-incognito-enabled'];
  if (value && value === true) {
    chrome.runtime.sendMessage({
      id: 'medium-incognito',
      url: window.location.href,
    });
  }
});
