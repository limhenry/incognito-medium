const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', (e) => {
  chrome.storage.sync.set({'is-medium-incognito-enabled': e.target.checked});
});

chrome.storage.sync.get('is-medium-incognito-enabled', (result) => {
  const value = result['is-medium-incognito-enabled'];
  if (value && value === true) checkbox.setAttribute("checked", "checked");
});
