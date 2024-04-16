import { useState, useMemo, useRef } from "react";

export function Assignment1() {
  const [input, setInput] = useState(0);
  const inputref = useRef();

  const expensiveValue = useMemo(() => {
    let factorial = 1,
      num = inputref.current.value;
    while (num > 0) {
      factorial *= num--;
    }
    return factorial;
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        ref={inputref}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
