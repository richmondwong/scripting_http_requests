var https = require('https');

var destination = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getHTML (inputDestination, callback) {

  var requestOptions = inputDestination;
  var savedData = ""

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (dataPrint){
      console.log(dataPrint)
      savedData += dataPrint
    })

    response.on('end', function () {
      return callback(savedData)
    })
  });
}

function printHTML (input) {
  console.log(input)
};


getHTML(destination, printHTML);