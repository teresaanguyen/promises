/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data) => {
    if ( err ) {
      callback(err, data);
    } else {
      var arrayAllLines = data.toString().split('\n');
      var firstLine = arrayAllLines[0];
      callback(err, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  try {
    https.get(url, (res) => {
      callback(null, res.statusCode);
    });
  } catch (e) {
    return callback(e);
  }
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
