import { Adder } from "./components/Adder";
import { Filter } from "./components/Filter";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Adder></Adder>
      <Filter></Filter>
    </RecoilRoot>
  );
}
