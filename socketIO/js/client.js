// client-sio.js

const { io } = require("socket.io-client");
const socket = io("http://localhost:5003");

socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
  socket.emit("message", "Hello Socket.IO Server 👋");
});

socket.on("message", (msg) => {
  console.log("Server replied:", msg);
  socket.close();
});
