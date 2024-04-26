import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTodoHandler = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        isCompleted: false,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (res) => {
      const response = res.json();
      alert("todo added");
    });
  };

  return (
    <>
      <div>
        <input
          style={{
            margin: "10px",
            padding: "10px",
          }}
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <br />
        <input
          style={{
            margin: "10px",
            padding: "10px",
          }}
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <button
          style={{
            margin: "10px",
            padding: "10px",
          }}
          onClick={createTodoHandler}
        >
          Add a todo
        </button>
      </div>
    </>
  );
};
export default CreateTodo;
