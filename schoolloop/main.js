let color = '#FF7417'


function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE ',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }


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
document.querySelector('.header_icons').remove()
header.style = 'filter:hue-rotate(180deg);'
header.innerHTML += `<a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer" data-track-link="calendar" class="icon_classroom" style="${classroomStyle} onhover=${hover}">Classroom</a>`
document.querySelector('.module').prepend(header)
let appText = document.createElement('h2')
appText.textContent = 'Links'
document.querySelector('.module').prepend(appText)


let credit = document.createElement('a')
credit.href = 'https://hmbhs.cabrillo.k12.ca.us'
credit.className = 'button_footer'
credit.innerHTML = `     Modified by the HMBHS ${get_browser_info().name} Extension`
document.querySelector('.button_spacer').append(credit)
