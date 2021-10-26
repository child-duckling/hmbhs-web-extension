
// Put all the javascript code here, that you want to execute after page load.
let blockedURL = decodeURI(new URL(window.location.href).searchParams.get('rdr'))
let teacher = JSON.parse(decodeURI(new URL(window.location.href).searchParams.get('cs')))[0].name
let teacherFirst  = String(teacher).split(' ')[0]
document.getElementById('content').innerHTML = `<h1>Hey there!</h1><p>${teacher || 'Your teacher'} thinks its funny.... its not</p><iframe src="https://dino.duckling.pw" width="570px" height="180px" style="position:relative;left:-20%;border: 0;"></iframe>`  
