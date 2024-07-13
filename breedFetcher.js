const needle = require('needle');

const search = process.argv.slice(2);

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response) => {
  const firstBody = response.body[0]; // makes first body result easier to access
  // check if error returns while fetching URL
  if (error) {
    console.error(error);
    return;
  }
  // check if search returns no results
  if (!firstBody) {
    console.log(`Search term: "${search}" not found...`);
    return;
  }
  console.log(firstBody['description']);
});