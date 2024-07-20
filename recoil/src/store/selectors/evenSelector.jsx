import { selector } from "recoil";
import { countAtom } from "../atoms/count";

export const evenSelector = selector({
  key: "evenSelector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2;
  },
});
