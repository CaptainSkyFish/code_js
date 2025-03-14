"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 2040 });
wss.on("connection", function (socket) {
    console.log("connection established!");
    socket.on("message", (e) => {
        socket.send(e.toString());
    });
});
