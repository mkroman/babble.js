var Room = function(id, name, users) {
  this.id = id;
  this.name = name || "Exoroom";
  this.users = users || [];

  this.image = new Image();
  this.image.src = 'http://hhsrv.n.dk/chat/gfx/rum/special/niels.jpg';
};

Room.prototype.draw = function(context) {
  context.drawImage(this.image, 0, 0, 408, 374);
};
