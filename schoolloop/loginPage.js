// Put all the javascript code here, that you want to execute after page load.

document.getRootNode
document.getElementById('container_login_page').style.background = 'url(https://source.unsplash.com/random/2000x2000/?city) center no-repeat'
document.getElementById('container_login_page').style.display = 'block'

document.getElementsByClassName('sl-login-page__form-holder')[0].prepend(document.getElementById('page_title_login'))
document.getElementsByClassName('sl-login-page__form-holder')[0].prepend(document.getElementsByClassName('sl-login-page__sl-logo')[0])


document.getElementsByClassName('sl-login-page__sl-logo')[0].innerHTML = `<img src="https://s3.amazonaws.com/playon-video-portal-production/channel_logos/700/original.png" alt="School Loop" style="align-self: center">`
document.getElementsByClassName('sl-login-page__sl-logo')[0].style.display = 'block'
document.getElementsByClassName('sl-login-page__sl-logo')[0].style.marginRight = 'auto'
document.getElementsByClassName('sl-login-page__sl-logo')[0].style.marginLeft = 'auto'

document.getElementById('page_title_login').style.color = 'black'
document.getElementsByClassName('sl-login-page__messages')[0].remove()
document.getElementsByClassName('sl-login-page__footer--text-link')[0].innerHTML += ' and HMBHS'
//document.getElementsByClassName('sl-login-page__footer--school-loop-container')[0].remove()

//align-items