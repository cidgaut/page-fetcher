const request = require('request');
const fs = require('node:fs');




request(process.argv[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); //no need to print out the body

  //took from nodejs.org
  //replaced file path with process arg 3 //counting from 0
  fs.writeFile(process.argv[3], body, err => {

    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`);
    }
  });

});



