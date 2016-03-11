$(document).ready(function() {
  $.getJSON('https://mcapi.ca/query/mc.minesuperior.com/players', function(res) {
    $('#mineplex').text(res.players.online);
 });
});
