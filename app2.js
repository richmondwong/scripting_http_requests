
var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (dataPrint) {
    console.log("This is Data" , dataPrint)
    })
  })

};



getAndPrintHTML()