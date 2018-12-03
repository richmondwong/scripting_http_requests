var getHTMLImported = require('../app5.js')

var destination = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printUpperCase (input) {
  console.log(input.toUpperCase())
}

getHTMLImported(destination, printUpperCase);
