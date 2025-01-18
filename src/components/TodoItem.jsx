import React from 'react';
    import { useSpring, animated } from 'react-spring';

    const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
      });

      return (
        <animated.div style={fadeIn} className="flex items-center justify-between p-2 border-b">
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
        </animated.div>
      );
    };

    export default TodoItem;
