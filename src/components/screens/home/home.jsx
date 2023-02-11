import React from 'react';
import TodoItem from './Item/TodoItem';
import { useState } from 'react';

const data = [
  {
    _id: 'adw213',
    title: 'Finish the essay colaboration',
    isComplited: false,
  },
  {
    _id: 'adw213dsa',
    title: 'Read next chapter of the book',
    isComplited: false,
  },
  {
    _id: 'ad2w2213',
    title: 'Send the finished assignment',
    isComplited: false,
  },
];

const Home = () => {

  const [todos, setTodos] = useState(data);
  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t.id === id).isComplited;
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }
  return (
    <div className="text-white w-4/5 mx - auto ml-10">
      <h1 className="text-2xl font-bold text-center mb-10">Todo for Junior</h1>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} />
      ))}
      
    </div>
  );
}

export default Home;
