'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extName, callback) {
  fs.readdir(dirName, (err, lines) => {
    if (err) {
      return callback(err);
    }
    const data = [];
    for (let i = 0; i < lines.length; i++) {
      if (path.extname(lines[i]) === '.' + extName) {
        data.push(lines[i]);
      }
    }
    callback(null, data);
  });
};
