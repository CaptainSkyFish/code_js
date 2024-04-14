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

  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button
        onClick={() =>
          setSelectedId((selectedId + 1) % 6 == 0 ? 1 : (selectedId + 1) % 6)
        }
      >
        Next
      </button>
      <RenderTodo todoId={selectedId}></RenderTodo>
    </div>
  );
}

function RenderTodo({ todoId }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + todoId)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [todoId]);

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
