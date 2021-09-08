let color = '#FF7417'

document.getElementById('container_header_links').style.background = color
let buttonCorrection = document.getElementsByClassName('link_block_sm')
buttonCorrection[0].style.borderRight = `1px ${color} solid`
buttonCorrection[1].style.borderRight = `1px ${color} solid`
buttonCorrection = document.getElementsByClassName('icon_help2')
buttonCorrection[0].style.borderRight = `1px ${color} solid`
buttonCorrection = document.getElementsByClassName('icon_settings2')
buttonCorrection[0].style.borderLeft = `1px ${color} solid`

document.querySelector('.link_block_sm2').href = 'https://hmbhs.cabrillo.k12.ca.us'


document.getElementsByClassName('dashboard')[0].style.background = '#f8f3ed'
document.getElementsByClassName('dashboard')[1].style.background = '#f8f3ed' // Teacher/Staff Only section
document.getElementsByClassName('dashboard')[2].style.background = '#f8f3ed'
let calenderColorChange = document.getElementsByClassName('due_page')
for (var i = 0; i >= calenderColorChange.length; i++){

    calenderColorChange[i].style.borderLeft = `${color} 3px solid`

}



let classroomStyle = `
    float: left;
    background: url(https://cdn.discordapp.com/attachments/781579790091419739/884608727590797372/unknown.png ) top center no-repeat ;
    display: block;
    width: 75px;
    height: auto;
    font-size: 10px;
    color: #003387;
    text-decoration: none;
    padding: 30px 0px 0px 0px;
    margin: 0px;
    text-align: center;
`
let hover = `
background-color: #ff9900;
text-decoration: none;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;`

let header = document.querySelector('.header_icons')
header.style = 'filter:hue-rotate(180deg);'
header.innerHTML += `<a href="https://classroom.google.com/" data-track-link="calendar" class="icon_classroom" style="${classroomStyle} onhover=${hover}">Classroom</a>`


let credit = document.createElement('a')
credit.href = 'https://hmbhs.cabrillo.k12.ca.us'
credit.className = 'button_footer'
credit.innerHTML = 'Modified by the HMBHS Web Extension'
document.querySelector('.button_spacer').append(credit)


