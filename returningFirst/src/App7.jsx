import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

export default function App() {
  const [content, setContent] = useState();

  let timer;
  
  function debounce(e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handler(e);
    }, 1000);
  }

  function handler(e) {
    setContent(e.target.value);
  }

  return (
    <>
      <input
        onChange={(e) => {
          debounce(e);
        }}
      ></input>
      <div>Typed: {content}</div>
    </>
  );
}
