import { useEffect, useState } from "react";
import "./App.css";
// import useTodos from "./hooks/TodosHook";
import axios from "axios";
import useAutoRefreshFetchTodos from "./hooks/AutoRefresh";

function App() {
  // const { todos, loading } = useTodos();
  const { todos, loading } = useAutoRefreshFetchTodos(5);

  return (
    <div>
      <div>
        {loading
          ? "Laoding...."
          : todos.map((todo) => <TodoList key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}

function TodoList({ todo }) {
  return (
    <div>
      <span>{todo.title}</span> <br />
      <span>{todo.description}</span> <br />
      <span>{todo.completed}</span> <br />
    </div>
  );
}

function MyComponent() {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.error("unmounted");
    };
  }, []);

  return <div>Text inside MyComponent.</div>;
}

export default App;
