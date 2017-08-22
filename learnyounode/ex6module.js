'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extName, callback) {
  fs.readdir(dirName, (err, lines) => {
    for (let i = 0; i < lines.length; i++) {
      if (path.extname(lines[i]) === '.' + extName) {
        console.log(lines[i]);
      }
    }
  });
};
