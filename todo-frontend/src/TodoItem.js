import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
}

export default TodoItem;