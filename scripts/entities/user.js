var User = function(id, name) {
  this.id = id;
  this.name = name || 'unknown';
  this.x = Math.floor(Math.random() * 408);
  this.y = Math.floor(Math.random() * 374);
}

User.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, 30, 60);
}
