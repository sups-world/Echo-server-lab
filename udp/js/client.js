// client-udp.js

const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const message = Buffer.from("Hello UDP Server 👋");

client.send(message, 5001, "localhost", (err) => {
  if (err) console.error(err);
  else console.log("Message sent to UDP server");

  client.on("message", (msg) => {
    console.log("Server replied:", msg.toString());
    client.close();
  });
});
