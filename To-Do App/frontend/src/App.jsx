import { CreateTodo } from "./components/CreateTodo";
import { GetTodo } from "./components/GetTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <>
      <CreateTodo></CreateTodo>
      <GetTodo
        todos={[
          { title: "Workout", description: "We Go Jim!", completed: false },
        ]}
      ></GetTodo>
    </>
  );
}

export default App;
