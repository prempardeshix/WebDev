import { useEffect, useState, useMemo } from "react";

export default function App2() {
  const [n, setN] = useState(0);
  const [val, setVal] = useState(0);
  return (
    <>
      <input
        type="text"
        id="val"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
      <Display n={n}></Display>
      <button
        onClick={() => {
          setN(val);
        }}
      >
        Calculate
      </button>
    </>
  );
}

// function Display({ n }) {
//   const [sum, setSum] = useState(0);

//   useEffect(() => {
//     hits++;
//     let temp = 0;
//     for (let i = 1; i <= n; i++) {
//       temp = temp + i;
//     }
//     setSum(temp);
//   }, [n]);

//   return (
//     <>
//       <p>
//         Sum of 1 to {n} is {sum}
//       </p>
//     </>
//   );
// }

function Display({ n }) {
  //   const [sum, setSum] = useState(0);

  let final = useMemo(() => {
    console.log("Memo not used!");
    let temp = 0;
    for (let i = 1; i <= n; i++) {
      temp = temp + i;
    }
    return temp;
  }, [n]);

  return (
    <>
      <p>
        Sum of 1 to {n} is {final}
      </p>
    </>
  );
}
