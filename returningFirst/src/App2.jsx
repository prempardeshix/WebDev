import "./index.css";
import "./App.css";
import { useEffect, useState } from "react";

function Component() {
  const [count, setCount] = useState(Math.floor(Math.random() * 100));

  function increment() {
    if (count < 100) setCount((count) => count + 1);
  }

  function decrement() {
    if (count > 0) setCount((count) => count - 1);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

function Second() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted " + count);
    return () => {
      console.log("Cleaned " + count);
    };
  }, [count]);

  function increment() {
    console.log("*");
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>Current Number is {count}</div>
      <button onClick={increment}>+</button>
    </>
  );
}

function App() {
  // return <Component></Component>;
  return <Second></Second>;
}

export default App;
