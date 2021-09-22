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

function error(p = null) {

    if (p) document.location.href = document.location.origin + `/schoolloop/redesign/login/login.html?failed=${encodeURI(p)}`
    document.location.href = document.location.origin + "/schoolloop/redesign/login/login.html"


}

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    loginAlert.append(wrapper)
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
        console.log(response)
        if (response.statusText != 'OK') document.location.href = document.location.origin + `/schoolloop/redesign/login/login.html?failed=true`
        response = await response.json()
        response.auth = `Basic ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}` //SAve Auth header for future use
        console.log(response)
        //response.role = 'admin'
        //if (response.role != 'student') error(response.role)
    
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
                } catch (e) {
                    console.warn('saving disabled, enabling crosspage url params mode')
                    login(String(response))
                }
            }
        }
                        
        //login()
    }
    
    if (urlParams.get('failed')) {
        var loginAlert = document.getElementById('loginAlert')
        alert('Please check your username and password', 'danger')
    }
    
    
    
    if (urlParams.get('r') != 'null') {

    console.log('Wrong Role')
    document.getElementById('error').innerHTML = `
<div class="modal" id="roleError" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Error</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>This site <b>only</b> allows users with a <code> student </code> role at this time <br><br>Your role of <code>${JSON.parse(decodeURI(urlParams.get('r'))).role}</code> is not supported</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

`
    var myModal = new bootstrap.Modal(document.getElementById('roleError'), {})
    myModal.toggle()

    }
    if (urlParams.get('out') && urlParams.get('r') === 'null') {
    console.log('Logged Out')
        document.getElementById('error').outerHTML = `<div class="toast position-absoulute bottom-0 end-0 text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" id='loggedOutToast'>
  <div class="d-flex">
    <div class="toast-body">
      You have been logged out.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`
    //loggedOutToast

    }
}
main()

$(document).ready(function(){
    $('.toast').toast('show');
    setTimeout(() => {
        $('.toast').toast('hide');
    }, 2500)
});