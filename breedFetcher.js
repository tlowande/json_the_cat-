let argument = process.argv.slice(2);

const request = require('request');
// const fs = require('fs');

//const get = function(search, callback) {
request.get('https://api.thecatapi.com/v1/breeds/search?q=' + argument[0], (error, response, body) => {
  if (error) {
    console.log("Error getting URL " + error);
  } else if (argument.length === 0 || body.length === 2) {
    console.log('Cat breed not found');
  } else {
    let data = JSON.parse(body);
    console.log(data[0].description);

  }
});
//}

