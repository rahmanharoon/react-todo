import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>Plan Maker</h1>
          <Todo
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
