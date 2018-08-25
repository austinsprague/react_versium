
var express = require('express');
var router = express.Router();
var request = require('request');
var Promise = require('bluebird');

router.get('/api/getList', (req,res) => {

  return new Promise(function(resolve, reject){
    request('https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=elon&d_last=musk&d_state=la&output=json', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      var json = JSON.parse(body);
      resolve(json);
    })
  }).then(results=>{
    console.log('RESULTS', results.datafinder.results[0].FirstName);
    var arr = [];
    arr.push(results.datafinder.results[0].FirstName);
    res.json(arr);
  });
});

module.exports = router
