//Socket.IO Echo Server
const http = require("http");
const { Server } = require("socket.io");

const PORT = 5003;

//Create HTTP server
const server = http.createServer();

//Create socket.io server
const io = new Server(server, {
  cors: {
    origin: "*", //allow all origins for testing
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("message", (msg) => {
    console.log("Client says:: ", msg);
    socket.send(msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.error("Socket error:: ", err);
  });
});

server.listen(PORT, () => {
  console.log(`Socket.io server is running on http:://localhost:${PORT}`);
});
