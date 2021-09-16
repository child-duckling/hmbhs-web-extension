if (typeof chrome == 'undefined') { let chrome = browser } //Firefox & Chrome supported


console.log(chrome.extension.getURL('options/index.html'))
    //chrome.theme.getCurrent().then((theme) => { console.log(theme) })

//chrome.storage.local