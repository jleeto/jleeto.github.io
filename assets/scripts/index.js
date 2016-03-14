$(document).ready(function() {
  $.getJSON('https://mcapi.ca/query/mc.minesuperior.com/players', function(res) {
    $('#randomcount').text(res.players.online);
 });
});
