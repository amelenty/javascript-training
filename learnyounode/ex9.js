'use strict';

const http = require('http');

const answers = ['', '', ''];
let done = 0;

function processData(response, i) {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    answers[i] += data;
  });
  response.on('end', () => {
    done++;
    if (done === 3) {
      answers.forEach((item) => console.log(item));
    }
  });
}

for (let i = 2; i < process.argv.length; i++) {
  http.get(process.argv[i], (response) => processData(response, i - 2));
}
