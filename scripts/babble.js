var Babble = function(canvas) {
  var babble = this;

  this.width = canvas.attr('width');
  this.height = canvas.attr('height');
  this.context = canvas[0].getContext('2d');
  this.connection = new BMPConnection('localhost');
  this.connection.establish();

  this.room = new Room(1, "HEIL HITLER");
  this.elements = [this.room];

  this.elements.push(new User(1));
  this.context.fillStyle = '#2C4D5C';
  this.room.image.onload = function(event) { babble.draw(); }

  canvas.mousedown(function(event) {
    babble.mouseClick(Math.floor(event.clientX - canvas.offset().left), Math.floor(event.clientY - canvas.offset().top));
    babble.draw();
  });
};

Babble.prototype.draw = function() {
  var context = this.context;

  $.each(this.elements, function(index, value) {
    value.draw(context);
  });
};

Babble.prototype.mouseClick = function(x, y) {
  var tile;
  if (tile = this.room.validTile(x, y)) {
    this.elements[1].x = tile.x;
    this.elements[1].y = tile.y;
  }
};
