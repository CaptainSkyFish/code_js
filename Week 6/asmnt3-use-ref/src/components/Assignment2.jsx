import React, { useState, useRef } from "react";

export function Assignment2() {
  const [, setNumber] = useState(0);
  const trackRender = useRef(0);

  const handleReRender = () => {
    setNumber(Math.random());
  };

  trackRender.current++;

  return (
    <div>
      <p>This component has rendered {trackRender.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
