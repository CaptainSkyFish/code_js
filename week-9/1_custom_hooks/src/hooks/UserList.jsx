import { useEffect, useState } from "react";
import { generateRandomWords } from "../utils/users";

export function useUserList() {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    setUserArray(generateRandomWords(1000));
  }, []);

  return userArray;
}
