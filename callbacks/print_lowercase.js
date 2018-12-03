var getHTMLImported = require('../app5.js')
var destination = require('./data')

function printLowerCase(input){
  console.log(input.toLowerCase())
}

getHTMLImported(destination, printLowerCase)