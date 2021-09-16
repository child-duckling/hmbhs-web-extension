if (typeof chrome == 'undefined') { let chrome = browser }
document.location.href = chrome.extension.getURL('schoolloop/redesign/login/login.html')