'use strict';

// scenario.js
const fs = require('fs');

const peach = function(obj) {
  console.trace('traced'); // trace the message "traced"
  console.dir(obj); // dump obj to stdout
};

const bowser = function(callback) {
  fs.readFile(process.argv[2], { encoding: 'utf8' }, callback);
};

const koopa = function(error, file) {
  // handle error by printing something to stderr
  if (error) {
    console.error('Wow, an error!');
  }
  peach(JSON.parse(file));
};

bowser(koopa);

