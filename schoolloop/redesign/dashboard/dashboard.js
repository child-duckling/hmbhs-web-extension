/* globals Chart:false, feather:false */

(async function() {
    'use strict'

    var chrome = browser || chrome

    let user = await chrome.storage.local.get("user")
    user = user.user
    var first = String(user.fullName).split(', ')[1]
    var last = String(user.fullName).split(', ')[0]
    document.getElementById('user').innerHTML = `${String(user.fullName).split(', ')[1]} ${String(user.fullName).split(', ')[0]}`



    feather.replace({ 'aria-hidden': 'true' })


})()