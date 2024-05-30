import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "do smthn from 3-7",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      description: "do smthn from 3-7",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodo([
      ...todos,
      {
        id: todos.length + 1,
        title: "new Todo",
        description: "This is the new todo",
        completed: false,
      },
    ]);
  }

  return (
    <div style={{ display: "flex" }}>
      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ background: "black", color: "beige" }}>
            <Todo title={todo.title} description={todo.description} />
            <button onClick={addTodo}>Add Todo</button>{" "}
          </div>
        );
      })}
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

// function CustomButton(props) {
//   function clickHandler() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={clickHandler}>Counter {props.count}</button>;
// }

export default App;
