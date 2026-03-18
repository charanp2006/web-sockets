import { error } from "console";
import { WebSocketServer , WebSocket} from "ws";

const wss = new WebSocketServer({port: 9090});

// Connection Event
wss.on("connection", (socket, request) => {
    const ip = request.socket.remoteAddress;

    socket.on('message', (rawData) => {
        console.log({rawData});
        const message = rawData.toString();

        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN) client.send(`Server Broadcast: ${message}`);
        })
    });

    socket.on('error', (err) => {
        console.error(`Error: ${err.message}: ${ip}`);
    })

    socket.on('close', () => {
        console.log('Client Disconnected');
    })
});

console.log('WebSocket Server is running on ws://localhost:9090');
