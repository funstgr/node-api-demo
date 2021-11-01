const express = require('express');
const sneakersRouter = express.Router();
const request = require('request');
const axios = require('axios');

const fetchData = require('../helper/index.js');

sneakersRouter.get('/', async function(request, response, next) {
  await axios.get('http://localhost:4000/')
    .then((res) => {
      response.send(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}); 

module.exports = sneakersRouter;
