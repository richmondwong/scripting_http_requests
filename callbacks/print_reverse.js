var getHTMLImported = require('../app5.js')
var destination = require('./data')

function printReverse(input){
  console.log(input.split("").reverse().join(""))
}
getHTMLImported(destination, printReverse)