import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

// function useSize() {
//   const [height, setHeight] = useState(window.innerHeight);
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       setHeight(window.innerHeight);
//       setWidth(window.innerWidth);
//     });
//   }, []);

//   return { height, width };
// }

// export default function App() {
//   const { height, width } = useSize();

//   return (
//     <>
//       <div>Height:{height}</div>
//       <div>Width:{width}</div>
//     </>
//   );
// }

function useSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return { height, width };
}

export default function App() {
  const { height, width } = useSize();

  return (
    <>
      <div>Height:{height}</div>
      <div>Width:{width}</div>
    </>
  );
}
