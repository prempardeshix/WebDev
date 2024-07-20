import React, { useEffect, useState } from "react";

function App() {
  const [r, setR] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setR((r) => !r);
    }, 5000);
  });

  return <>{r ? <MyComponent /> : <div></div>}</>;
}

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     setCount((count) => count + 1);
//   }

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <p> {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

function MyComponent() {
  useEffect(() => {
    console.log("Mounted!");

    return () => {
      console.log("Unmounted!");
    };
  }, []);

  return <div>Inside component.</div>;
}

export default App;
