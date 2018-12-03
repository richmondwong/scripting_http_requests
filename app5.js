var https = require('https');

module.exports = function getHTML (inputDestination, callback) {

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






