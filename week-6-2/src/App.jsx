import { useEffect, useState } from "react";
// import { Todo } from "./        Todo";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//       const json = await res.json();
//       setTodos(json.todos);
//     });
//   }, []);

//   return (
//     <>
//       {todos.map((todo) => {
//         return (
//           <Todo
//             key={todo.id}
//             title={todo.title}
//             description={todo.description}
//             completed={todo.completed}
//           ></Todo>
//         );
//       })}
//     </>
//   );
// }

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setSelectedId(4);
        }}
      >
        4
      </button>
      <Todo id={selectedId}></Todo>
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async (res) => {
      const json = await res.json();
      setTodo(json.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
