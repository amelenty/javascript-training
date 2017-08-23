'use strict';

const http = require('http');
const url = require('url');

const port = process.argv[2];


const server = http.createServer((request, response) => {
  const urlData = url.parse(request.url, true);
  let time = {}
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
  response.writeHead(200, { 'Content-Type': 'application/json' });
  time.stringify().pipe(response);
});

server.listen(port);
