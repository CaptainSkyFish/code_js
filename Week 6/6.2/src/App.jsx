import { useEffect, useState, useMemo } from "react";
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
  var [number, setNewNumber] = useState(1);
  var [count, setCount] = useState(0);

  let summer = useMemo(() => {
    let sum = 0;
    while (number > 0) {
      sum += number--;
    }
    return sum;
  }, [number]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewNumber(e.target.value);
        }}
        placeholder="sum from 1 to n"
      />
      <p>Sum is {summer}</p>
      <button onClick={() => setCount(++count)}>counter({count})</button>
      <br />
      <br />
      <br />
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
      .get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
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
