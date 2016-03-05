SC.initialize({
  client_id: '5243f20018208a075ed2497b7e9bd405'
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play();
});
