'use strict';

const mymodule = require('./ex6module.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
  data.forEach((entry) => {
    console.log(entry);
  });
});
