let slButton = document.createElement('li')
slButton.role = 'menuitem'
slButton.ariaDisabled = 'false'
slButton.ariaHasPopup = 'false'
slButton.innerHTML = '<a class="rmLink rmRootLink rmSelected" href="https://hmbhs.schoolloop.com" target="_blank" rel="noopener noreferrer" menunumber="8"><span class="rmText">School Loop</span></a>'
document.getElementsByClassName('rmRootGroup rmHorizontal')[0].appendChild(slButton)


let cleverButton = document.createElement('li')
cleverButton.role = 'menuitem'
cleverButton.ariaDisabled = 'false'
cleverButton.ariaHasPopup = 'false'
cleverButton.innerHTML = '<a class="rmLink rmRootLink rmSelected" href="https://clever.com/login?student" target="_blank" rel="noopener noreferrer" menunumber="9"><span class="rmText">Clever</span></a>'
document.getElementsByClassName('rmRootGroup rmHorizontal')[0].appendChild(cleverButton)

let gclassButton = document.createElement('li')
gclassButton.role = 'menuitem'
gclassButton.ariaDisabled = 'false'
gclassButton.ariaHasPopup = 'false'
gclassButton.innerHTML = '<a class="rmLink rmRootLink rmSelected" href="https://classroom.google.com" target="_blank" rel="noopener noreferrer" menunumber="9"><span class="rmText">Google Classroom</span></a>'
document.getElementsByClassName('rmRootGroup rmHorizontal')[0].appendChild(gclassButton)