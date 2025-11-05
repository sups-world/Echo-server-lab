//UDP Echo Server using node.js dgram module

const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const PORT = 5001;

server.on("message", (msg, rinfo) => {
  console.log(`Received from client: ${msg.toString().trim()}`);
  server.send(`Echo response from server -> ` + msg, rinfo.port, rinfo.address);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`UDP server listening on ${address.address}:${address.port}`);
});

server.on("error", (err) => {
  console.error(`Server error: ${err}`);
  server.close();
});

server.bind(PORT);
