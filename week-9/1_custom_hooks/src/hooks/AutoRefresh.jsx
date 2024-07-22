import axios from "axios";
import { useEffect, useState } from "react";

export default function useAutoRefreshFetchTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ivValue = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
      clearInterval(ivValue);
    };
  }, [n]);

  return { todos, loading };
}
