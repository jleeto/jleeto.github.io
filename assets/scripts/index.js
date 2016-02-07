'use strict'

let night, hour, time = new Date();
hour = time.getHours();
night = hour > 19 || hour < 4;

document.body.classList.add(night ? 'night' : 'day');
