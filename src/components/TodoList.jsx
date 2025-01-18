import React from 'react';
    import TodoItem from './TodoItem';

    const TodoList = ({ todos, toggleComplete, removeTodo }) => {
      return (
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      );
    };

    export default TodoList;
