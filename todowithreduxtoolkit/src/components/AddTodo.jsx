import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodos(input))
    setInput('')
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={handleChange}
        className="bg-gray-800 rounded border border-gray-700 text-white py-1 px-3"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;


