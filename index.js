import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


//isko use nhi karni hume toh import wali hi property chahiye var qr = require('qr-image');
inquirer
  .prompt([
    {message:"write URL :",
     name:"URL"}
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    fs.writeFile('qr.txt', url, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });