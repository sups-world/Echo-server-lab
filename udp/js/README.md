# UDP echo server (User Datagram Protocol)

- This server listens for UDP packets and echoes them back to the sender. UDP is faster than TCP but does not guarantee delivery, order, or connection state.
- Unlike TCP, this server works on a connectionless basis
- Connectionless: The server does not establish a dedicated, persistent connection with the client before data transfer, nor does it maintain any state about the client after a message is received
- Datagrams: Data is sent in small, self-contained units called datagrams

# Operation

- Run server
  - > node server.js
- Open a terminal
  - > nc -u localhost 5001
  - netcat is used with -u for udp
  - This is an interactive way
- Alternatively,
  - > echo "Hello hello" | nc -u localhost 5001

# How It Works

- A UDP server is created using the dgram module

- The server binds to a port (example: 5001)

- A UDP client sends a datagram (packet) to the server

- The server receives the packet using the "message" event

- The server logs what it received

- The server sends the same message back to the client (server.send)

- Unlike TCP:

  - No connection setup

  - No handshake

  - No guarantee packet arrives

  - No "client connected" or "disconnected" events

  - The client receives the echoed message (if supported by the test tool)

  # UDP vs TCP

  | TCP               | UDP                             |
  | ----------------- | ------------------------------- |
  | Reliable delivery | Not guaranteed                  |
  | Connection based  | Connectionless                  |
  | Slower            | Faster                          |
  | Used for web, SSH | Used for games, streaming, VoIP |

# Reference Information

- UDP's characteristics make it ideal for real-time, loss-tolerant, and query-response applications:
  - Online Gaming: Used for sending real-time player position updates and actions. Losing an occasional update is better than experiencing lag while waiting for retransmission.
  - Voice over IP (VoIP) and Video Conferencing: Applications like Skype or Zoom use UDP. A momentary drop in audio or video quality is preferable to the conversation being significantly delayed by waiting for lost packets to be resent.
  - Domain Name System (DNS) Lookups
  - Live Streaming (Media): Used for transmitting live video and audio streams, where the most current frame is more important than a perfect sequence of all past frames.
  - Multicasting and Broadcasting
  - Simple Network Management Protocol (SNMP) and DHCP: These network maintenance protocols often rely on UDP for fast, lightweight, and transactional communication.
