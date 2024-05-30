import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>Count is {count}</div>;
}

function Buttons() {
  let { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => setCount(++count)}
      >
        +
      </button>
      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => setCount(--count)}
      >
        -
      </button>
    </div>
  );
}

export default App;
