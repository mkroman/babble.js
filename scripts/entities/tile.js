var Tile = function(x, y) {
  this.x = x;
  this.y = y;
};

Tile.width = 50;
Tile.height = 75;

Tile.prototype.draw = function(context) {
  context.fillStyle = randomRGB();
  context.fillRect(this.x, this.y, Tile.width, Tile.height);
};
