import "./App.css";

function Todo(props: Todo) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      {props.done ? <h3>Completed!</h3> : <h3>Pending!</h3>}
    </>
  );
}

interface Todo {
  title: string;
  description: string;
  done: boolean;
}

function App() {
  return (
    <>
      <Todo title="Gym" description="Lightweight!" done={true}></Todo>
      <Todo title="Eat" description="Chwenchy k Momos" done={false}></Todo>
    </>
  );
}

export default App;
