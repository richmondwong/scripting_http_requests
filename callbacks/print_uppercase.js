var getHTMLImported = require('../app5.js')
var destination = require('./data')

function printUpperCase (input) {
  console.log(input.toUpperCase())
}

getHTMLImported(destination, printUpperCase);
