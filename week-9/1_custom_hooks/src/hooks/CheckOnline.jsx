import { useEffect, useState } from "react";

export default function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    setInterval(() => {
      window.addEventListener("online", () => {
        setIsOnline(true);
      });
      window.addEventListener("offline", () => {
        setIsOnline(false);
      }),
        1500;
    });
  }, []);

  return isOnline;
}
