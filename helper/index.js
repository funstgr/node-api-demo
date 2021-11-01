const axios = require('axios');

// fetches cities from api for autocomplete
// eslint-disable-next-line import/prefer-default-export
async function fetchData() {
   await axios.get('http://localhost:4000/')
    .then((res) => {
      res.data
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = fetchData;



