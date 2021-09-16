//document.getElementById("submit").addEventListener("click", validate);
const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);
chrome.storage.local.clear()
    //if (browser.storage.local.get("user") || browser.storage.local.get("user")) document.location.href = document.location.origin + "/schoolloop/redesign/dashboard/dashboard.html"

if (urlParams.get('user') && urlParams.get('pass')) {
    document.getElementsByClassName('form-signin').innerHTML = `<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`
    const user = urlParams.get('user')
    const pass = urlParams.get('pass')
    console.log(`Trying to login with key: ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}`)
                fetch(`https://hmbhs.schoolloop.com/mapi/login?version=3&devToken=${encodeURI(chrome.runtime.id)}&devOS=${encodeURI(chrome.runtime.getManifest().version)}&year=${new Date().getFullYear()}`, {
                            headers: {
                                authorization: `Basic ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}`
            }
                }).then((data) => {
                        console.log('Login successful')
                    data.json().then((data) => {
                    
                    var user = data
						user.auth = `Basic ${btoa(`${encodeURI(user)}:${encodeURI(pass)}`)}` //SAve Auth header for future use
                        browser.storage.local.set({ user }).then(() => { //Save it in extension storage since cokkies/window storage gets cleared every time the extension page is loaded
                            console.log('saved')
                        })
                        document.location = document.location.origin + "/schoolloop/redesign/dashboard/dashboard.html"
                    
                    
                    })
                        
                        
                    })
                    .catch((err) => {
					//Want to do some bootstrap magic here in the future
					console.log('Login Failed')
                    document.location = document.location.origin + document.location.pathname + `?failed=true`
                })
}
if (urlParams.get('failed')) {

    console.log('Showing Error Toast')
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

}


function validate(e) {
    e.preventDefault();

    const username = document.getElementById("floatingUsername");
    const password = document.getElementById("floatingPassword");
    console.log(`${username} : ${password}`)


    return valid;
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}