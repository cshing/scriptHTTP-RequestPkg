var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')
       .on('error', function (err) {
       })

       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })

       .on('response', function (response) {
        console.log(response.statusMessage);
      })

      .on('response', function (response) {
        console.log(response.statusheaders['content-type']);
      })

       .pipe(fs.createWriteStream('./future.jpg'));