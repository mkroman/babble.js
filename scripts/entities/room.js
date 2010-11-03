var Room = function(id, name, users) {
  this.id = id;
  this.name = name || "Neutral";
  this.users = users || [];

  this.image = new Image();
  this.image.src = 'http://hhsrv.n.dk/chat/gfx/rum/special/niels.jpg';
};

Room.prototype.draw = function(context) {
  context.fillStyle = "red";
  context.drawImage(this.image, 0, 0, 408, 374);
  context.fillText("[" + this.id + "] " + this.name, 3, 13);
};
