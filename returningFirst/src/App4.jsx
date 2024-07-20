import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

function useIsOnline() {
  // useState mai default value pass krna mat bhulna
  const [stat, setStat] = useState(window.navigator.onLine);

  useEffect(() => {
    const tid = setInterval(() => setStat(window.navigator.onLine), 1000);

    return () => {
      clearInterval(tid);
    };
  }, [stat]);

  return stat;
}

export default function App() {
  const isOnline = useIsOnline();

  if (isOnline) return <div>Yippie! Yippie! Yippie!</div>;
  else return <div>You are disconnected!</div>;
}
