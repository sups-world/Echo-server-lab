# Socket.IO Echo Server

- Socket.io is built on top of websocket. It provides more features such as:
  - Automatic reconnection if the client disconnects
  - Event-based communication instead of plain messages
  - Fallback support(it can use polling if websocket isn't available)
- Socket.io provides a more robust and developer-friendly API, making it great for real-time applications like chats,live dashboards or _notifications_

## How To Run

- Use `npm install` for the first time
- To run the server, `node server.js`

## How To Test

- There are two ways to test this
  1. Use the test.html file
     - Open the html file in a browser and check the console to see the echoed messages
  2. Run the client.js file
     - `node client.js`

## Workflow

- Client connects to the Socket.IO server.

- The server maintains an open channel and listens for custom events.

- When the client sends a message event, the server echoes it back.

- Socket.IO handles reconnects and fallbacks automatically.

### Reference Information

- Socket.io builds on top of websockets for more reliable real-time communication with extended features
- Event driven messages with _emit_ and _on_
