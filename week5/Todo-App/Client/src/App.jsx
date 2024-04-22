import "./App.css";
import CreateTodo  from "./components/CreateTodo";

function App() {
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
      </div>
    </>
  );
}

export default App;
