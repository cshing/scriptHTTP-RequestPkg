var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
       })

       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })

       .on('response', function (response) {
        console.log(response.statusMessage);
        console.log('Downloading image...');
      })

      .on('response', function (response) {
        console.log(response.headers['content-type'])
        console.log('Download complete.');
      })

      .pipe(fs.createWriteStream('./future.jpg'));