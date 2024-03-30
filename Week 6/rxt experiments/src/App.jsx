import { memo, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Todos, setTodos] = useState([]);

  // function HandleClick() {
  //   setTodos([
  //     ...Todos,
  //     {
  //       id: Math.random() * 10000,
  //       title: "Todo 4",
  //       description: "desc4",
  //     },
  //   ]);
  // }
  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://sum-server.100xdevs.com/todos", {
      method: "GET",
    }).then(async (res) => {
      const jsonObj = await res.json();
      setTodos(jsonObj.todos);
    });
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <button onClick={fetchData}>Refresh todos</button>
      {Todos.map((todo) => (
        <CardWrapper key={todo.id}>
          <Todo title={todo.title} description={todo.description}></Todo>
        </CardWrapper>
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <li style={{ listStyle: "none", display: "flex" }}>
      <label className="container">
        <input type="checkbox" />
        <div className="checkmark"></div>
      </label>
      <CardWrapper>
        <span>{title}</span>
      </CardWrapper>
      <CardWrapper>
        <span>{description}</span>
      </CardWrapper>
    </li>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: "5px",
        backgroundColor: "lavender",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        textDecoration: "none",
        margin: "8px",
        padding: "4px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

export default App;
