var kCanvas, kContext, WIDTH, HEIGHT;

function circle(x, y, r) {
  kContext.beginPath();
  kContext.arc(x, y, r, 0, Math.PI * 2, true);
  kContext.closePath();
  kContext.fill();
}

var x = 50, y = 50;

function draw() {
  alert('firs');
  kContext.clearRect(0, 0, WIDTH, HEIGHT);
  circle(x, y, 10);
}

$(function() {
  kCanvas = document.getElementById('babble');
  kContext = kCanvas.getContext('2d');

  WIDTH = kCanvas.width();
  HEIGHT = kCanvas.height();

});

