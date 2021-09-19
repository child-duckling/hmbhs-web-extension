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
        if (course.grade === 'null') course.grade = 'A'
        if (course.lastUpdated === 'null') course.lastUpdate = 'Unkown'
        let link = document.location.origin + `/schoolloop/redesign/dashboard/class.html?id=${course.periodID}`
        let card = document.createElement('div')
        card.className = 'col-sm-6'
        card.innerHTML = `
        <div href="${link}" class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Period ${course.period}</div>
            <div class="card-body">
                <h5 class="card-title"> <a href="${link}" style="text-decoration:none;" class="text-white">${course.courseName}</a></h5>
                <p class="card-text"><hr></p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary">Teacher: ${course.teacherName}</li>
                    <li class="list-group-item text-white bg-primary">Grade: ${course.grade || 'A'}</li>
                </ul>
            </div>
            <div class="card-footer text-white">
                <small> Last Updated: ${course.lastUpdated || 'Unkown'} </small>
            </div>
        </div>`

        document.getElementById('class-table').appendChild(card)
    })
    ` &nbsp&nbsp ${course.courseName} ${firstSpace} ${course.grade} (${course.score}) ${secondSpace} ${course.teacherName}`




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