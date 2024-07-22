import { useEffect, useState } from "react";

export default function useDimensions() {
  const [ViewWidth, setWidth] = useState(0);
  const [ViewHeight, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return { ViewWidth, ViewHeight };
}
