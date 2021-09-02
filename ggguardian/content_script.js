
// Put all the javascript code here, that you want to execute after page load.
let blockedURL = decodeURI(new URL(window.location.href).searchParams.get('rdr'))
let teacher = decodeURI(new URL(window.location.href).searchParams.get('cs'))


console.log(blockedURL)
console.log(teacher)


notifications.create({
    "type": "basic",
    "title": "Uh oh!",
    "message": `Let me fix the mistake that ${teacher[0].name} did`
});

let frame = document.createElement('body');
frame.innerHTML = `<iframe src="https://google.com" width="100%" height="100%"></iframe>`//` <iframe src="${blockedURL}" width="100%" height="100%"></iframe>`;

document.addEventListener('loadstart', () => {
document.body.parentNode.removeChild(document.body);
document.documentElement.innerHTML = `<!DOCTYPE html><head></head><body><iframe src="${blockedURL}" width="100%" height="1000px"></iframe></body>`

})

setTimeout(() => {
    window.open(blockedURL)
    document.body.parentNode.removeChild(document.body);
    document.documentElement.innerHTML = `<!DOCTYPE html><head></head><body><iframe src="${blockedURL}" width="100%" height="1000px"></iframe></body>`


}, 2000)