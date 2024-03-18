import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "Todo 1",
      description: "do smthn from 3-7",
      completed: false,
    },
    {
      title: "Todo 2",
      description: "do smthn from 3-7",
      completed: false,
    },
  ]);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div style={{ background: "black", color: "beige" }}>
            <Todo title={todo.title} description={todo.description} />
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
