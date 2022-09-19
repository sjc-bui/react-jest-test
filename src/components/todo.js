import React from "react";

function Todo({ todo }) {
  const { id, title, completed } = todo;
  const p = <h1>{title}</h1>
  const text = completed ? <strike>{p}</strike> : p;
  return (
    <div data-testid={`todo-${id}`}>
      {text}
    </div>
  )
}

export default Todo;
