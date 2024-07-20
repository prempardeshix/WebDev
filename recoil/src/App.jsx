import {
  RecoilRoot,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/evenSelector";

function App() {
  return (
    <RecoilRoot>
      <Count id="parent" />
    </RecoilRoot>
  );
}

function Count() {
  console.log("hi");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCountRenderer />
    </div>
  );
}

function CountRenderer() {
  // useRecoilValue is used because we only need to read value and not update in this component
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  if (isEven) {
    return <p>Count is even</p>;
  } else {
    return <></>;
  }
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  console.log("Buttons rendered ");

  const clickHandler = () => {
    setCount((count) => count - 1);
    if (count % 2 == 0) {
      const parent = document.getElementById("parent");
      const child = document.createElement("p");
      child.innerHTML = "Count is even.";
      child.setAttribute("id", "child");
      parent.appendChild(child);
    } else {
      const child = document.getElementById("child");
      child.remove();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
