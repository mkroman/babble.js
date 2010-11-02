var BMPPackage = function(name, body) {
  this.name = name;
  this.body = body;
};

BMPPackage.prototype.toJSON = function() {
  return JSON.stringify(this.toObject());
};

BMPPackage.prototype.toObject = function() {
  return { n: this.name, b: this.body };
};

BMPPackage.prototype.toString = function() {
  return this.toObject();
};
