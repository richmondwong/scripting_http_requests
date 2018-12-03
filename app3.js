var https = require('https');

var destination = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var requestOptions = options;

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (dataPrint){
      console.log(dataPrint)
    }
    );
  });

};

getAndPrintHTML(destination)
