export function Todos({ todos, updateTodo }) {
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo._id} style={{ marginBottom: "20px" }}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                fetch(`http://localhost:3000/completetodo/${todo._id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                  .then(async (res) => {
                    const json = await res.json();
                    updateTodo(json.todo); // 👈 Update in UI immediately
                  });
              }}
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>
    );
  }
  