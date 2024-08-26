import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:3000/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (text) => {
    const response = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3000/api/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-items">
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;