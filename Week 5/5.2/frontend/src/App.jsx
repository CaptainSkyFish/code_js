import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
      </div>
    </>
  );
}

export default App;
