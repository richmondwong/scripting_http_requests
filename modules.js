var https = require('https')
var getHTMLImported = require('./app5.js')

var destination = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (input) {
  console.log(input)
};

getHTMLImported(destination, printHTML);