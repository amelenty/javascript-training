'use strict';

const http = require('http');
const url = require('url');
const Readable = require('stream').Readable;

const port = process.argv[2];


const server = http.createServer((request, response) => {
  const urlData = url.parse(request.url, true);
  const time = {};
  const date = new Date(urlData.query.iso);
  const outStream = new Readable();
  outStream._read = function noop() {};
  switch (urlData.pathname) {
    case '/api/parsetime':
      time.hour = date.getHours();
      time.minute = date.getMinutes();
      time.second = date.getSeconds();
      break;
    case '/api/unixtime':
      time.unixtime = date.getTime();
      break;
    default:
      console.err('Sorry, wrong URL!');
      break;
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  outStream.push(JSON.stringify(time));
  outStream.push(null);
  outStream.pipe(response);
});

server.listen(port);
