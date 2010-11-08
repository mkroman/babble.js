var Room = function(id, name, users) {
  this.id = id;
  this.name = name || "Neutral";
  this.users = users || [];
  this.tiles = [];

  this.image = new Image();
  this.image.src = 'http://hhsrv.n.dk/chat/gfx/rum/special/niels.jpg';

  this.generate();
};

Room.prototype.generate = function() {
  var x, y;

  for (var column = 0; column < 5; column++)
    for (var row = 0; row < 8; row++) {
      x = row * Tile.width;
      y = column * Tile.height;

      if (column % 2 == 1)
        if (row >= 7) break;
        else
          x += Tile.width * 0.5;

      this.tiles.push(new Tile(x, y));
    }
}

Room.prototype.draw = function(context) {
  context.fillStyle = randomRGB();

  if (this.image.complete)
    context.drawImage(this.image, 0, 0, 408, 374);

  $.each(this.tiles, function(index, tile) {
    tile.draw(context);
  });

  context.font = "regular 12px arial";
  context.fillText(this.id + ": " + this.name, 3, 13);
};

Room.prototype.validTile = function(x, y) {
  var result;

  $.each(this.tiles, function(index, tile) {
    if (tile.isInBounds(x, y))
      result = tile;
  });

  return result;
};
