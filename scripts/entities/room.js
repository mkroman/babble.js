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
  var xoffset = 30, yoffset = -30;
  var x = 0, y = 0;

  for (var column = 0; column < 5; column++)
    for (var row = 0; row < 8; row++) {
      x = row * Tile.width;
      y = column * Tile.height;

      if (column % 2 == 1)
        x += Tile.width * 0.5;

      this.tiles.push(new Tile(x, y));
    }
}

Room.prototype.draw = function(context) {
  context.fillStyle = randomRGB();

  if (this.image != null)
    context.drawImage(this.image, 0, 0, 408, 374);

  context.fillText("[" + this.id + "] " + this.name, 3, 13);

  $.each(this.tiles, function(index, tile) {
    tile.draw(context);
  });
};
