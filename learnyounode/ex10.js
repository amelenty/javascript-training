'use strict';

const net = require('net');
const port = process.argv[2];

const server = net.createServer( (socket) => {
  // some logic
});
server.listen(port);
