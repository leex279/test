import React from 'react';
    import TodoItem from './TodoItem';
    import { useTrail, animated } from 'react-spring';

    const TodoList = ({ todos, toggleComplete, removeTodo }) => {
      const trail = useTrail(todos.length, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { mass: 5, tension: 2000, friction: 200 },
      });

      return (
        <div>
          {trail.map((style, index) => (
            <animated.div key={todos[index].id} style={style}>
              <TodoItem
                todo={todos[index]}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            </animated.div>
          ))}
        </div>
      );
    };

    export default TodoList;
