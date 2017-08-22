'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, fileContents) => {
  const linesNumber = fileContents.split('\n').length - 1;
  console.log(linesNumber);
});
