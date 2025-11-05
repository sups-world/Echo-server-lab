### TCP Echo Server

- This folder contains a simple TCP Echo Server built using Node.js.
- It listens for connections, receives messages, and sends the same message back — demonstrating raw socket communication without HTTP or WebSockets.

### How it Works

- Client connects

- Server acknowledges

- Client sends data

- Server echoes exact same data back

- Client disconnects

# Operation

- Initiate the server with:
  > node server.js
- Open a terminal
  > nc localhost 5000
- You can open multiple terminals and test the echo server

# How TCP server works

- The Node.js script starts a TCP server using the net module

- The server listens on a specific port (example: 5000)

- A client (like netcat / nc) connects to the server

- When a client connects, the server prints "Client connected"

- Whatever the client types is sent to the server as data

- The server receives the data through socket.on("data")

  - socket.on(...) in the TCP server listens to the client input

- The server logs the received message in the terminal

- The server uses socket.write() to send the same message back (echo)

- The client sees the echoed message immediately

- When the client disconnects, the server prints "Client disconnected"

- If any network error occurs, the "error" event logs it

# Reference Information

- TCP (Transmission Control Protocol)

  - Foundation Layer: HTTP, WebSockets, gRPC, etc. all sit on top of TCP.

  - A communication method computers use to send data reliably

  - Ensures data arrives complete and in order (like a guaranteed delivery courier)

  - Used by web browsers, SSH, FTP, databases, etc.

- net module in Node.js

  -Built-in module for working with TCP connections

  - Lets you create TCP servers and clients

  - Used for low-level network communication (raw data transfer)

  - Used to work with TCP and IPC (Inter-Process Communication) sockets
  - It gives you functions like:

    - net.createServer() → create a TCP server

    - socket.write() → send raw bytes to the client

    - socket.on("data") → receive bytes from client

- nc (Netcat)

  - Command-line tool for testing networks and sending raw data

  - Can act as a simple TCP client or server

  - Example: nc localhost 3000 connects to a local TCP server on port 3000

  # What I Learned

- How TCP works and how clients and servers communicate

- Difference between low-level TCP sockets and HTTP/WebSockets

- How to create a TCP server in Node.js using the net module

- How to test TCP servers using nc (Netcat)

- How socket.on() listens for events like:

- data → client sends a message

- end → client disconnects

- error → network/connection issue

- How to echo data back to the client using socket.write()

- Understanding the request-response flow at the network layer

- Improved debugging by reading server logs and client output

- Hands-on practice with terminals and real network streams
