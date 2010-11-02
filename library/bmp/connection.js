var kBMPDefaultHost = window.location.hostname;
var kBMPDefaultPort = 3290;

var BMPConnection = function(host, port) {
  this.host = host || kBMPDefaultHost;
  this.port = port || kBMPDefaultPort;
};
  
BMPConnection.prototype.establish = function() {
  this.socket = new WebSocket('ws://' + host + ':' + port + '/');

  with (this.socket) {
    onopen = function(event) {
      alert('Socket connection was opened.');
    };

    onmessage = function(event) {
      alert('Message received: ' + event.data);
    };

    onclose = function(event) {
      alert('Socket connection was closed.');
    };
  }
};

BMPConnection.prototype.transmit = function(name, body) {
  var outgoingPackage = name instanceof BMPPackage ? name : new BMPPackage(name, body);

  if (this.socket && this.socket.readyState == 1)
    this.socket.send(outgoingPackage.toJSON() + "\n");
  else
    alert('Could not transmit package');
};
