import React from 'react';

    const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
      return (
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          </div>
          <button
            className="text-red-500"
            onClick={() => removeTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      );
    };

    export default TodoItem;
