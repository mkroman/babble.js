var Tile = function(x, y) {
  this.x = x;
  this.y = y;
};

Tile.width = 50;
Tile.height = 75;

function rand(value) {
  return Math.floor(Math.random() * value);
}

Tile.prototype.draw = function(context) {
  context.fillStyle = 'rgb(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ')';
  context.fillRect(this.x, this.y, Tile.width, Tile.height);
};
