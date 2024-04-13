import { useEffect, useState } from "react";
// import './App.css'
import axios from "axios";

function App() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://sum-server.100xdevs.com/todos")
  //     .then(function (response) {
  //       setTodos(response.data.todos);
  //     });
  // }, []);

  return (
    <div>
      <RenderTodo todoId={2}></RenderTodo>
    </div>
  );
}

function RenderTodo({ todoId }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

// function TodoBlock({ title, description }) {
//   return (
//     <li style={{ listStyle: "none", display: "flex" }}>
//       <span>{title}</span>
//       <span>{description}</span>
//     </li>
//   );
// }

export default App;
