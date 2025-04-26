import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './Components/CreateToDo';
import { Todos } from './Components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []); // <-- Empty dependency array = runs only once after page loads

  return (
    <div>
      <CreateTodo refreshTodos={() => {
        fetch("http://localhost:3000/todos")
          .then(async (res) => {
            const json = await res.json();
            setTodos(json.todos);
          });
      }} />
      <Todos todos={todos} updateTodo={(updatedTodo) => {
        const newTodos = todos.map(todo => {
          if (todo._id === updatedTodo._id) return updatedTodo;
          return todo;
        });
        setTodos(newTodos);
      }} />
    </div>
  );
}

export default App;
