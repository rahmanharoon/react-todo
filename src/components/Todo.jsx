import React, { useEffect } from "react";

const Todo = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  let today = new Date();
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  const onFormHandler = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * (today * 2)),
          title: input,
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo);
    }
  };
  return (
    <form action="" onSubmit={onFormHandler}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a plan for tomorrow"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Todo;
