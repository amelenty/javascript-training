'use strict';

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, lines) => {
  for (let i = 0; i < lines.length; i++) {
    if (path.extname(lines[i]) === '.' + process.argv[3]) {
      console.log(lines[i]);
    }
  }
});
