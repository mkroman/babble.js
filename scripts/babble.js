var Babble = function(canvas) {
  var babble = this;

  this.width = canvas.attr('width');
  this.height = canvas.attr('height');
  this.context = canvas[0].getContext('2d');
  this.connection = new BMPConnection();

  this.room = new Room(1, "HEIL HITLER");
  this.elements = [this.room];

  this.context.fillStyle = '#2C4D5C';

  this.room.image.onload = function(event) { babble.draw(); }
};

Babble.prototype.draw = function() {
  var context = this.context;

  $.each(this.elements, function(index, value) {
    value.draw(context);
  });
};

