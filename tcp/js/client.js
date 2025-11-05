// client-tcp.js

const net = require("net");

const client = net.createConnection({ port: 5000 }, () => {
  console.log("Connected to TCP server");
  client.write("Hello TCP Server 👋");
});

client.on("data", (data) => {
  console.log("Server replied:", data.toString());
  client.end(); // close after one echo
});

client.on("end", () => {
  console.log("Disconnected from server");
});
