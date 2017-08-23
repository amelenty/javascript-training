'use strict';

const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const respFile = fs.createReadStream(filePath);

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain'});
  respFile.pipe(response);
});

server.listen(port);
