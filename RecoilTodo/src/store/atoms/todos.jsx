import { atom } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [
    {
      title: "Demo",
      description: "This is a demo todo.",
    },
  ],
});
