var fs = require('fs');
var firebaseCollection = require('./firebaseCollection');

var enventHandler = function(e) {
  // Write output to console
  console.log(JSON.stringify(e));
}

firebaseCollection
  .createObserver('https://popping-torch-9759.firebaseio.com', 'aditi')
  .listen(enventHandler);
