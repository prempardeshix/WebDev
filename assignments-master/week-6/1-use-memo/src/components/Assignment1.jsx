import { useEffect, useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here

  function factorial(n) {
    let factorial = 1;
    for (let i = n; i > 0; i--) {
      factorial = factorial * i;
    }
    return factorial;
  }

  const expensiveValue = useMemo(() => {
    console.log("hi");
    let factorial = 1;
    for (let i = input; i > 0; i--) {
      factorial = factorial * i;
    }
    return factorial;
  }, [input]);

  //   const [expensiveValue, setExpensiveValue] = useState(0);

  //   useEffect(() => {
  //     console.log("hi");
  //     setExpensiveValue(factorial(input));
  //   }, [input]);

  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
