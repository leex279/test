import React, { useState, useEffect } from 'react';
    import TodoList from './components/TodoList';
    import TodoForm from './components/TodoForm';
    import { useSpring, animated } from 'react-spring';

    const App = () => {
      const [todos, setTodos] = useState([]);
      const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
      }, []);

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      const addTodo = (todo) => {
        setTodos([...todos, todo]);
      };

      const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };

      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
      });

      return (
        <animated.div style={fadeIn} className={`min-h-screen flex items-center justify-center ${darkMode ? 'dark' : ''}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Todo App</h1>
              <button
                className="text-gray-900"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
          </div>
        </animated.div>
      );
    };

    export default App;
