var hour = (new Date()).getHours();
var night = hour > 19 || hour < 4;

document.getElementsByTagName('body')[0].classList.add(night ? 'night' : 'day');
