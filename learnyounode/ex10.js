'use strict';

const strftime = require('strftime');

const net = require('net');
const port = process.argv[2];

const server = net.createServer((socket) => {
  socket.end(strftime('%F %R\n'));
});

server.listen(port);
