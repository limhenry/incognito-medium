chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({'is-medium-incognito-enabled': true});
});

chrome.runtime.onMessage.addListener(({ id, url }) => {
  if (id !== 'medium-incognito') return;
  chrome.windows.create({url, incognito: true});
});