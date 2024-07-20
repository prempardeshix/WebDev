import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

function useCount(n) {
  const [count, setCount] = useState(n);

  useEffect(() => {
    const tid = setInterval(() => setCount((count) => count + 1), 1000);
    return () => {
      clearInterval(tid);
    };
  }, [count]);

  return count;
}

export default function App() {
  const count = useCount(0);

  return <>The count is : {count}</>;
}
