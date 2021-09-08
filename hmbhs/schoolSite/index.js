let slButton = document.createElement('li')
slButton.role = 'menuitem'
slButton.ariaDisabled = 'false'
slButton.ariaHasPopup = 'false'
slButton.innerHTML = '<a class="rmLink rmRootLink rmSelected" href="https://hmbhs.schoolloop.com" menunumber="8"><span class="rmText">School Loop</span></a>'
document.getElementsByClassName('rmRootGroup rmHorizontal')[0].appendChild(slButton)


let cleverButton = document.createElement('li')
cleverButton.role = 'menuitem'
cleverButton.ariaDisabled = 'false'
cleverButton.ariaHasPopup = 'false'
cleverButton.innerHTML = '<a class="rmLink rmRootLink rmSelected" href="https://clever.com/login?student" menunumber="9"><span class="rmText">Clever</span></a>'
document.getElementsByClassName('rmRootGroup rmHorizontal')[0].appendChild(cleverButton)