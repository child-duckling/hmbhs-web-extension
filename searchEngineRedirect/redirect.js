//https://www.bing.com/search?q=hmbhs%20schoolloop

const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);
const query = urlParams.get('q')



//HMBHS
if (query.includes('hmbhs')) {
  if (query.includes('schoolloop') || query.includes('school loop')) location.href = 'https://hmbhs.schoolloop.com'
  if (query.includes('bell')) location.href = 'https://hmbhs.cabrillo.k12.ca.us/our_school/bell_schedules'
  if (query.includes('site')) location.href = 'https://hmbhs.cabrillo.k12.ca.us'   
}

//Google Stuff
if (query.includes('google')) {
  if (query.includes('classroom')) location.href = 'https://classroom.google.com'
  if (query.includes('slides')) location.href = 'https://slides.google.com'
  if (query.includes('docs')) location.href = 'https://docs.google.com'
  if (query.includes('drive')) location.href = 'https://drive.google.com'
}

if (query.includes('gmail')) location.href = 'https://mail.google.com'
