import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Set your backend NodePort URL
const API_BASE_URL = ""; // <-- update to your backend NodePort

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch todos on load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/todos`);
      setTodos(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch todos. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!task.trim()) return;
    try {
      const res = await axios.post(`${API_BASE_URL}/todos`, { task: task });
      setTodos([...todos, res.data]);
      setTask("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to add todo.");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to delete todo.");
    }
  };

  return (
    <div className="appContainer">
      <h1 className="title">DevOps Todo App</h1>

      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading todos...</div>
      ) : (
        <div className="todoList">
          {todos.length === 0 ? (
            <div className="empty">No tasks yet!</div>
          ) : (
            todos.map((todo) => (
              <div className="todoItem" key={todo._id}>
                <span>{todo.task}</span>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
