# WebSocket Echo Server

- This server is a real-time server that maintains a persistent,bidirectional connection between client and server.HTTP closes connection after every request but websocket allows continuous communication. This allows client and server to send messages at any time.
- Used for chat apps, live notifications or multiplayer games

## How to Run

- Install package when running for the first time `npm install`
- Run server using `node server.js`

## How to Test

- There are 2 ways to test this

1. Using Browser Console

   - Use the console tab in browser
   - ```const socket = new WebSocket("ws://localhost:5002");
           socket.onopen = () => socket.send("Hello WebSocket!");
           socket.onmessage = (e) => console.log("Echoed:", e.data);
     ```

2. Using websocket client(CLI)
   - `npx wscat -c ws://localhost:5002`
     - Then type in any message

### Using client.js

- This file can be run to test swiftly if it works for client.

## WOrkflow

- Client connects to the WebSocket server.

- The connection stays open (no reconnect needed per message).

- Client sends a message.

- Server receives and echoes it back instantly.

- Both can continue exchanging messages until disconnected.

### Reference Information

- Websockets create persistent,full-duplex connections
- Real time communication differs from Http request as http request closes connection but real time keeps it open
