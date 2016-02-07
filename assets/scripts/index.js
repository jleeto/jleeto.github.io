var hour = (new Date()).getHours();
var night = hour > 19 || hour < 4;

document.body.classList.add(night ? 'night' : 'day');
