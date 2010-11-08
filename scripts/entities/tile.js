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

Tile.prototype.isInBounds = function(x, y) {

  if (this.x <= x && this.x + Tile.width >= x && this.y <= y && this.y + Tile.height >= y)
    return true;
  else
    return false;
};
