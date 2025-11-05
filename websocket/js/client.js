// client-ws.js

const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:5002");

ws.on("open", () => {
  console.log("Connected to WebSocket server");
  ws.send("Hello WebSocket Server 👋");
});

ws.on("message", (msg) => {
  console.log("Server replied:", msg.toString());
  ws.close();
});
