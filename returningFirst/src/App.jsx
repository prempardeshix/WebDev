import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

function useDebounce(input, d) {
  const [val, setVal] = useState(input);

  useEffect(() => {
    let timer = setTimeout(() => setVal(input), d);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return val;
}

export default function App() {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 1000);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />
      <div>Debounced value is {debouncedValue}</div>
    </>
  );
}
