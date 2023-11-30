import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/styles.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto my-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="border p-2 mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Todo
        </button>
      </div>
      <TransitionGroup className="todo-list">
        {todos.map((todo, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <div className="todo-item bg-gray-200 p-3 mb-2 flex justify-between items-center">
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
