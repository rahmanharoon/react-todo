import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;
