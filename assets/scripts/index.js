var date = newDate();
hour = date.getHours();

if(hour > 19 || < 4) {
  night = true;
}

document.body.setAttribute('class','night');
