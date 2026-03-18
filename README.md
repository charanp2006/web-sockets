# WebSocket Broadcast Demo

A simple Node.js WebSocket project that demonstrates real-time message broadcasting to all connected clients.

## What this project does

- Starts a WebSocket server on `ws://localhost:9090` using the `ws` package.
- Accepts incoming client connections.
- Broadcasts every received message to all connected clients.
- Provides a browser client (`index.html`) to send and view live messages.

## Project structure

- `server.js` - WebSocket server and broadcast logic.
- `index.html` - Minimal browser client with connection status and message log.
- `package.json` - Scripts and dependencies.

## Requirements

- Node.js 18+ (recommended)
- npm

## Install dependencies

```bash
npm install
```

## Run the server

```bash
npm run dev
```

This starts the server in watch mode (auto-restarts when `server.js` changes).

Expected log:

```text
WebSocket Server is running on ws://localhost:9090
```

## Open a client

Open `index.html` in your browser.

When connected, you can type a message and submit. The server broadcasts it to every connected client.

## Test with multiple clients

- Open `index.html` in two or more browser tabs/windows.
- Send a message from one tab.
- All connected tabs should receive: `Server Broadcast: <your message>`.

## Optional CLI test with wscat

You can also connect from terminal using `wscat`:

```bash
npx wscat -c ws://localhost:9090
```

Type a message and press Enter to send.

## How broadcasting works

1. A client sends a message.
2. The server receives it in the `message` event.
3. The server loops through `wss.clients`.
4. Each open client receives the message via `client.send(...)`.

## Notes

- This is a learning/demo project (no authentication or message persistence).
- Error and disconnect events are logged on the server.
