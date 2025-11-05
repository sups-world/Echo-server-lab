// Websocket server
const Websocket = require("ws");

const PORT = 5002;
const wss = new Websocket.Server({ port: PORT });

wss.on("connection", (ws) => {
  console.log("Client connected !!!");

  ws.on("message", (message) => {
    console.log(`Received from client: ${message}`);
    ws.send(message);
  });

  ws.on("close", () => {
    console.log("Client disconnected !!!");
  });

  ws.on("error", (err) => {
    console.error(`Socket error : ${err.message}`);
  });
});

console.log(`Websocket server running on ws://localhost:${PORT}`);
