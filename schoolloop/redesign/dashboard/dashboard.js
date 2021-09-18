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

    console.log(courses.statusText)
    let courseList = await courses.json().then((courses) => { return courses })
    console.log(courseList)
    var count = 0
    courseList.forEach(course => {
        let firstSpaceAmt = 20 - (String(course.courseName).length - 4)
        let secondSpaceAmt = 20 - (String(`${course.grade} ${course.score}`).length)

        var firstSpace = '&nbsp'.repeat(firstSpaceAmt)

        var secondSpace = '&nbsp'.repeat(secondSpaceAmt)



        let card = document.createElement('li')
        card.className = 'list-group-item'
        card.innerHTML = `
  <small>${course.period}</small> &nbsp&nbsp ${course.courseName} ${firstSpace} ${course.grade} (${course.score}) ${secondSpace} ${course.teacherName}`

        document.getElementById('class-table').appendChild(card)
    })





}
/*
{
  "teacherName": "Olson, Pat",
  "teacherRegistered": "true",
  "periodID": "1593846839236",
  "period": "2",
  "courseName": "Broadcasting",
  "teacherID": "1102472042704",
  "grade": "A+",
  "coTeacherID": "0",
  "coTeacherName": "null",
  "score": "98%",
  "lastUpdated": "9/17/21 11:55 AM"
}
*/





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
        user = user.user || user.response
        var first = String(user.fullName).split(', ')[1]
        var last = String(user.fullName).split(', ')[0]
        document.getElementById('user').innerHTML = `${String(user.fullName).split(', ')[1]} ${String(user.fullName).split(', ')[0]}`
        getEverything(user)
    });




    feather.replace({ 'aria-hidden': 'true' })


})()

$(function() {
    $('#myTab li:last-child a').tab('show')
})