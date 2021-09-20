function logout(r = null) {
    chrome.storage.local.clear(() => {
        console.log('Logged Out!')
        document.location.href = document.location.origin + `/schoolloop/redesign/login/login.html?out=true&r=${encodeURI(JSON.stringify(r))}`
    })
}

document.getElementById('logout').addEventListener('click', () => {

    logout()

})

feather.replace({ 'aria-hidden': 'true' })