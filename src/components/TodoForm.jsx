import React, { useState } from 'react';
    import { useSpring, animated } from 'react-spring';

    const TodoForm = ({ addTodo }) => {
      const [value, setValue] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo({
          id: new Date().getTime(),
          text: value,
          completed: false,
        });
        setValue('');
      };

      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
      });

      return (
        <animated.form style={fadeIn} onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add a new todo"
          />
        </animated.form>
      );
    };

    export default TodoForm;
