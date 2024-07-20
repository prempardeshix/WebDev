import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Title"
      ></input>
      <br></br>
      <br></br>
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added!");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
