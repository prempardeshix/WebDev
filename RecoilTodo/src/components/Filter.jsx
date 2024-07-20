import { useRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/filter";
import { todosAtom } from "../store/atoms/todos";

export function Filter() {
  const [filter, setFilter] = useRecoilState(filterAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const filteredTodos = todos.filter(
    (todo) => todo.title.includes(filter) || todo.description.includes(filter)
  );
  return (
    <>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        placeholder="Filter"
      ></input>
      {filteredTodos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
          </div>
        );
      })}
    </>
  );
}
