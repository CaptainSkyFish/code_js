import { useEffect, useRef } from "react";

export function Assignment1() {
  const inputref = useRef();
  useEffect(() => {
    inputref.current.focus();
  }, [inputref]);

  const handleButtonClick = () => {
    inputref.current.focus();
  };

  return (
    <div>
      <input ref={inputref} type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
