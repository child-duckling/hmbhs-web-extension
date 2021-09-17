/* globals Chart:false, feather:false */

(async function() {
    'use strict'
    /*
        try {

            

        } catch (e) {
            try {

                let user = await browser.storage.local.get("user")

            } catch (e) {

                console.log(e)

            }


        }
        */
    let user = await chrome.storage.local.get()
    try {
        let user = await chrome.storage.local.get()
        user = user.user
        var first = String(user.fullName).split(', ')[1]
        var last = String(user.fullName).split(', ')[0]
        document.getElementById('user').innerHTML = `${String(user.fullName).split(', ')[1]} ${String(user.fullName).split(', ')[0]}`
    } catch (e) {
        //Not logged in
        //document.location.href = document.location.origin + 'schoolloop/redesign/login/login.html'
        console.log(e)
    }




    feather.replace({ 'aria-hidden': 'true' })


})()