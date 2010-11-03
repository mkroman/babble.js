var User = function(id, name) {
  this.id = id;
  this.name = name || 'anonymous';
  this.x = Math.floor(Math.random() * 408);
  this.y = Math.floor(Math.random() * 374);

  this.image = new Image();
  this.image.src = 'http://hhsrv.n.dk/chat/gfx/actors/guest.gif';

  this.image.onload = function(event) { kBabble.draw(); }
}

User.prototype.draw = function(context) {
  context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
  context.fillStyle = "white";
  context.fillText(this.name, this.x - 10, this.y + 70);
}
