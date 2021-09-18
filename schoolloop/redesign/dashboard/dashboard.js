/* globals Chart:false, feather:false */

async function getEverything(user) {
    let auth = {
        headers: {

            'Authorization': `${user.auth}`

        }
    }
    let courses = await fetch(`https://hmbhs.schoolloop.com/mapi/report_card?studentID=${user.students[0].studentID}`, { headers: { 'Authorization': `${user.auth}` } }).then((response) => { return response })
    let assignments = await fetch(`https://hmbhs.schoolloop.com/mapi/assignments?studentID=${user.students[0].studentID}`, auth).then((response) => { return response })
    let news = await fetch(`https://hmbhs.schoolloop.com/mapi/news?studentID=${user.students[0].studentID}`, auth).then((response) => { return response.data })
    let loopmails = await fetch(`https://hmbhs.schoolloop.com/mapi/mail_messages?studentID=${user.students[0].studentID}`, auth).then((response) => { return response })

    console.log(courses.statusText())
    courses.json().then(console.log)

}






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
    await chrome.storage.local.get(function(user) {
        user = user.user
        var first = String(user.fullName).split(', ')[1]
        var last = String(user.fullName).split(', ')[0]
        document.getElementById('user').innerHTML = `${String(user.fullName).split(', ')[1]} ${String(user.fullName).split(', ')[0]}`
        getEverything(user)
    });




    feather.replace({ 'aria-hidden': 'true' })


})()