import React from "react";

const Todo = ({ input, setInput, todos, setTodos }) => {
  let today = new Date();
  const onFormHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * (today * 2)),
        title: input,
        finish: false,
      },
      setInput("")
    ]);
  };
  console.log(todos);
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
        Add
      </button>
    </form>
  );
};

export default Todo;
