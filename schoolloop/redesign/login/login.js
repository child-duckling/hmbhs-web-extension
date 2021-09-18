function validate(e) {
    e.preventDefault();

    const username = document.getElementById("floatingUsername");
    const password = document.getElementById("floatingPassword");
    console.log(`${username} : ${password}`)


    return valid;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function login(p = null) {

    if (p) document.location.href = document.location.origin + `/schoolloop/redesign/dashboard/dashboard.html?user=${p}`
    document.location.href = document.location.origin + "/schoolloop/redesign/dashboard/dashboard.html"


}
//document.getElementById("submit").addEventListener("click", validate);
const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);
//chrome.storage.local.clear()

//Cookie checker
/*
try {
    if (browser.storage.local.get("user")) login()
} catch {
    try {
        if (chrome.storage.local.get("user")) login()
    } catch {
        try {
            if (getCookie('user')) login()
        } catch {
            console.warn('No User Detected')
        }
    }
}
*/
async function main() {
    if (urlParams.get('user') && urlParams.get('pass')) {
        document.getElementsByClassName('form-signin').innerHTML = `<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`
        const user = urlParams.get('user')
        const pass = urlParams.get('pass')
        console.log(`Trying to login with key: ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}`)
    let response = await fetch(`https://hmbhs.schoolloop.com/mapi/login?version=3&devToken=${encodeURI(chrome.runtime.id)}&devOS=${encodeURI(chrome.runtime.getManifest().version)}&year=${new Date().getFullYear()}`, {
        headers: {
            authorization: `Basic ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}`
        }
    })
    response = await response.json()
    response.auth = `Basic ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}` //SAve Auth header for future use
    console.log(response)
    await chrome.storage.local.set({ response }, function () {
        console.log("Data was saved.");
        login()
    });
                try {
                    console.log('false')
                } catch (e) {
                            try {
                                browser.storage.local.set({ response }).then(() => { //Save it in Web Extension extension storage since cookies/window storage gets cleared every time the extension page is loaded
                                    console.log('saved')
                                })
                            } catch (e) {
                                try {
                                    document.cookie = `user=${String(response)}`
                                } catch(e) {
                                    console.warn('saving disabled, enabling crosspage url params mode')
                                    login(String(response))
                                }
                            }
                        }
                        
                //login()
}
if (urlParams.get('failed')) {

    console.log('Showing Error Toast')
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

    }
}
main()