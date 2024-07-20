import { useRecoilState, useRecoilValue } from "recoil";
import { titleAtom } from "../store/atoms/title";
import { descriptionAtom } from "../store/atoms/description";
import { todosAtom } from "../store/atoms/todos";

export function Adder() {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  return (
    <>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Enter Title"
      ></input>
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Enter Description"
      ></input>
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              title,
              description,
            },
          ]);
        }}
      >
        Add Todo
      </button>
    </>
  );
}
