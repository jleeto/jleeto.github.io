$(document).ready(function() {
  var backgrounds = [#000, #333, #111];

  var randomnumber = Math.floor(Math.random() * backgrounds.length);
  var classToAdd = backgrounds[randomnumber];

  $('body').addClass(classToAdd);
});
