//https://www.bing.com/search?q=hmbhs%20schoolloop

const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);
const query = urlParams.get('q')


if (query.includes('schoolloop') || query.includes('school loop')) location.href = 'https://hmbhs.schoolloop.com'
if (query.includes('google classroom')) location.href = 'https://classroom.google.com'
if (query.includes('bell+schedule ')) location.href = 'https://hmbhs.cabrillo.k12.ca.us/our_school/bell_schedules'