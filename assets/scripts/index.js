var analyser, canvas, canvasContext;

window.onload = function() {
	setupWebAudio();
	setupDrawingCanvas();
	draw();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
