import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "todo1",
      description: "Go To Gym!",
      completed: "false",
    },
    {
      title: "todo2",
      description: "Study DSA",
      completed: "false",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New Title",
        description: "New Description",
        completed: false,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add new todo!</button>

      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
