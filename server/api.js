'use strict'
const api = require('express').Router()

const clientId = 'uI5JqT7U2Te9pZAdEX-fzw'
const clientSecret = 'R2EQBf9PEXI9SZAN9BbHu4xKV2W3SAC9tMQ0jg6jbpJbsgQ2XHJ3zpHCc94bEHDj'

api.get('/token',(req,res) => {
  yelp.accessToken(clientId, clientSecret).then(response => {
    //res.json(response.jsonBody.access_token);
    res.json(response);
  }).catch(e => {
    console.log(e);
  });
})
