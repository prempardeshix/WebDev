import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Wrapper>
        <div>Hi!</div>
      </Wrapper>
      <Wrapper>
        <div>Hello!</div>
      </Wrapper>
    </>
  );

  function Wrapper({ children }) {
    return (
      <div
        style={{
          border: "2px solid black",
          margin: "5px",
        }}
      >
        {children}
      </div>
    );
  }
}

export default App;
