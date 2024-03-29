import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo.jsx";
import { Todos } from "./Components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <>
      <div style={{}}>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
    </>
  );
}

export default App;
