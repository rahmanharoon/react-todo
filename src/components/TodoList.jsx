import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDlete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, finish: !item.finish };
        }
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            className={`list ${todo.finish ? "complete" : ""}`}
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <IoIosDoneAll />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <MdModeEdit />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDlete(todo)}
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
