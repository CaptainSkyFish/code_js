import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({port : 2040})

wss.on("connection", function(socket) {
  console.log("connection established!")

  socket.on("message", (e) => {
      socket.send(e.toString())
  })
} )
