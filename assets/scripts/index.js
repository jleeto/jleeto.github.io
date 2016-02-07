var date = newDate();
hour = date.getHours();
// check for time
if(hour > 19 || < 4) {
  night = true;
}
// set new background if higher than 19 o'clock
document.body.setAttribute('class','night');
