const express = require('express');
const path = require('path');
const request = require('request');
const Promise = require('bluebird');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items

app.get('/api/getList', (req,res) => {
  return new Promise(function(resolve, reject){
    request('https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=elon&d_last=musk&d_state=la&output=json', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      let json = JSON.parse(body);
      resolve(json);
    })
  }).then(results=>{
    return new Promise(function(resolve, reject){
      const res = results.datafinder.results;
      let arr1 = [];
      for(let i = 0; i< res.length; i++){
        let obj = {
          FirstName: res[i].FirstName,
          LastName: res[i].LastName,
          City: res[i].City,
          State: res[i].State
        };
        arr1.push(obj);
      }
      resolve(arr1);
    }).then(array=>{
      res.json(array);
    })
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
