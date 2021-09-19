function logout() {
    chrome.storage.local.clear(() => {
        console.log('Logged Out!')
        document.location.href = document.location.origin + "/schoolloop/redesign/login/login.html?out=true"
    })
}


document.getElementById('logout').addEventListener('click', () => {

    logout()

})

feather.replace({ 'aria-hidden': 'true' })