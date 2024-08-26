import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo._id)} className="delete-button">Delete</button>
    </div>
  );
}

export default TodoItem;