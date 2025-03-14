import { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  //const [message, setMessage] = useState("...")
  const [socket, setSocket] = useState<WebSocket | null>()
  const inputRef = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = () => {
    const message = inputRef.current?.value

    if(socket && message)
      socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:2040")
    setSocket(ws)
    ws.onmessage = (e)=> {
      setMessages((prevmessages) => [...prevmessages, e.data])
    } 

    return () => {
      ws.close()
    }
    }, [])

  return <div style={{ display: "flex", top: "50%"}}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="Type your message here" ref={inputRef} />
        <button onClick={sendMessage}>Send</button>
      </div>


    <div style={{
          flex: 1,
          borderLeft: "2px solid #ddd",
          padding: "10px",
          overflowY: "auto",
          maxHeight: "100vh",
        }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
      { messages.map((msg, index) => ( 
        <li key = {index} style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}>{msg}</li>
      )) }
      </ul>
    </div>
  </div>
}

export default App
