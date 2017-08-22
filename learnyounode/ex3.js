'use strict';

const fs = require('fs');

const fileString = fs.readFileSync(process.argv[2]).toString();

const fileLines = fileString.split('\n');

console.log(fileLines.length - 1);
