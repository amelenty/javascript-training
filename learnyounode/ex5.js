'use strict';

const fs = require('fs');

fs.readdir(process.argv[2], (err, lines) => {
  console.log(lines);
});
