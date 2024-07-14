const needle = require('needle');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  needle.get(url, (error, response, body) => {
    // check for error on getting url
    if (error) {
      return callback(error, null);
    }
    // check if invalid search query
    if (!body[0]) {
      return callback('Breed not found', null);
    }
    // if not error and valid search query
    return callback(null, response.body[0]['description']);
  });
};


module.exports = { fetchBreedDescription };