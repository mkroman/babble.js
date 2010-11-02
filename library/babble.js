var kCanvas, kContext, WIDTH = 800, HEIGHT = 600;

function circle(x, y, r) {
  kContext.beginPath();
  kContext.arc(x, y, r, 0, Math.PI * 2, true);
  kContext.closePath();
  kContext.fill();
}

function rand(max) {
  return Math.floor(Math.random() * max);
}

var x = rand(WIDTH), y = rand(HEIGHT), dx = 10, dy = 10;

function draw() {
  kContext.clearRect(0, 0, WIDTH, HEIGHT);
  circle(x, y, 20);

  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}

$(function() {
  kCanvas = $('#babble');
  kContext = kCanvas[0].getContext('2d');

  kContext.fillStyle = "rgb(" + rand(255) + "," + rand(255) + "," + rand(255) + ")";

  setInterval(draw, 10);
});

