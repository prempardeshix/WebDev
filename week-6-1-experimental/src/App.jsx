import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todo } from "./Todo";

function App() {
  const [count, setCount] = useState(4);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "GYM JAO!",
      completed: false,
    },
    { id: 2, title: "Do DSA", description: "Love", completed: false },
    {
      id: 3,
      title: "Gaming",
      description: "1HP hai rush krde",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: count,
        title: `Added todo`,
        description: "This is added when button is clicked.",
        completed: false,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

export default App;
