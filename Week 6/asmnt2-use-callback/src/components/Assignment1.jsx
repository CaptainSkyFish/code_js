import { useCallback, useState, memo } from "react";

export function Assignment1() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((cnt) => ++cnt);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((cnt) => --cnt);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <br /> <br />
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
