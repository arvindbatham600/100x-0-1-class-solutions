const CreateTodo = () => {    
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
          />{" "}
          <br />
          <input
            style={{
              margin: "10px",
              padding: "10px",
            }}
            type="text"
            placeholder="description"
          />
          <br />
          <button
            style={{
              margin: "10px",
              padding: "10px",
            }}
          >
            
            Add a todo
          </button>
        </div>
      </>
    );
}
export default CreateTodo;

