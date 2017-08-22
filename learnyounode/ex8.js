'use strict';

const http = require('http');

let answer = '';

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
      answer += data;
  });
  response.on('end', () => {
    console.log(answer.length);
    console.log(answer);
  });
});
