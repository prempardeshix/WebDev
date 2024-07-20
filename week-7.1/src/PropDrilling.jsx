import { useContext, useState } from "react";
import { countContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(countContext);

  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
