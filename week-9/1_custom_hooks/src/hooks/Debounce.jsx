import { useEffect, useState } from "react";

export default function useDebounce(searchText, time) {
  const [debouncedValue, setDebouncedValue] = useState(searchText);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(searchText);
    }, time);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [searchText]);

  return debouncedValue;
}
