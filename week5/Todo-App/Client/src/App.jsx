import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";


function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/todos").then(async (response) => {
    const res = await response.json();
    setTodos(res.todos);
  })
},[]) 

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <CreateTodo />
        <Todos
          todos={todos}
        />
      </div>
    </>
  );
}

export default App;
