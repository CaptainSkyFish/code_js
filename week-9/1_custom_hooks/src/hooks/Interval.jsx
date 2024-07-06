import { useEffect } from "react";

export default function useInterval(func, time) {
  useEffect(() => {
    const val = setInterval(() => {
      func();
    }, time);
    return () => {
      clearInterval(val);
    };
  });
}
