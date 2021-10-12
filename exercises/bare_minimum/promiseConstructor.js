/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var pluckFirstPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if ( err ) {
        reject(err);
      } else {
        var arrayAllLines = data.toString().split('\n');
        var firstLine = arrayAllLines[0];
        resolve(firstLine);
      }
    });
  });

  pluckFirstPromise.then( (data) => {
    // console.log( 'data type: ', typeof data );
  }).catch( (err) => {
    // console.log( 'err: ', err );
  });

  return pluckFirstPromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var getStatusPromise = new Promise((resolve, reject) => {
    try {
      https.get(url, (res) => {
        resolve(res.statusCode);
      });
    } catch (e) {
      reject(e);
    }
  });

  getStatusPromise.then( (code) => {

  }).catch( (err) => {

  });

  return getStatusPromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
