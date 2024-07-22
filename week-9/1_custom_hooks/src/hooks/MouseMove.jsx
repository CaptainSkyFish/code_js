import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  });

  return MousePosition;
}
