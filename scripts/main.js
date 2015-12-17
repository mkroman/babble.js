var kBabble;

$(function() {
  kBabble = new Babble($("#babble"));
});

function rand(value) {
  return Math.floor(Math.random() * value);
}

function randomRGB() {
  return 'rgb(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ')';
}
