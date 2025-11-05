//TCP echo server using Node.js net module

const net = require("net");
const PORT = 5000;

//This section implements when nc localhost 5000 is executed to create a TCP server
const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log(`Client says : ${data.toString().trim()}`); //logs in the node server
    socket.write(`Echo server response->` + data); //Echo back to the TCP server
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.error(`Socket Error: ${err.message}`);
  });
});

server.listen(PORT, () => {
  console.log(`TCP echo server running on port ${PORT}`);
});
