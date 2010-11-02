var Babble = function(canvas) {
  this.width = canvas.attr('width');
  this.height = canvas.attr('height');
  this.context = canvas[0].getContext('2d');
  this.connection = new BMPConnection();

  this.room = new Room(1);
  this.elements = [this.room];

  this.context.fillStyle = '#2C4D5C';
  setInterval(this.draw(), 10);
};

Babble.prototype.draw = function() {
  this.context.fillRect(this.width * 0.5 - 100, this.height * 0.5 - 100, 200, 200);

  var context = this.context;

  $.each(this.elements, function(index, value) {
    value.draw(context);
  });
};
