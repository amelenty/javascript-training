'use strict';

const http = require('http');
const url = require('url');

const port = process.argv[2];


const server = http.createServer((request, response) => {
  const urlData = url.parse(request.url, true);
  switch (urlData.pathname) {
    case '/api/parsetime':
      // parsing logic
      break;
    case '/api/unixtime':
      // unixtime logic
      break;
    default:
      console.err('Sorry, wrong URL!');
      break;
  }
});

server.listen(port);
