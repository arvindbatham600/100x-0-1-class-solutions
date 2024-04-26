export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.title}>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <button>{item.isCompleted ? "done" : "mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
};
