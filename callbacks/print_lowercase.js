var getHTMLImported = require('../app5.js')


var destination = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printLowerCase(input){
  console.log(input.toLowerCase())
}

getHTMLImported(destination, printLowerCase)