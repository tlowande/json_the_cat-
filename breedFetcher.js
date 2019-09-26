// let argument = process.argv.slice(2)

const request = require('request');
// const fs = require('fs'); NOT NEEDED FOR THIS FILE

// TO CALL VIA COMMANDLINE
// request.get('https://api.thecatapi.com/v1/breeds/search?q=' + argument[0], (error, response, body) => {
//   if (error) {
//     console.log("Error getting URL " + error);
//   } else if (argument.length === 0 || body.length === 2) {
//     console.log('Cat breed not found');
//   } else {
//     let data = JSON.parse(body);
//     console.log(data[0].description);

//   }
// })


const fetchBreedDescription = function(breedName, callback) {
  request.get('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (!breedName || body.length === 2) {
      callback(null,'Cat breed not found');
    } else {
      let data = JSON.parse(body);
      callback(null, data[0].description);
  
    }
  });
};

module.exports = fetchBreedDescription;