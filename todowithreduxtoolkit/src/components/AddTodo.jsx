import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos, editTodo, setEditText } from '../features/todo/todoSlice'

function AddTodo() {
  const dispatch = useDispatch();
  const { isEditing, editText, editTodoId } = useSelector((state) => state.todos);

  const handleChange = (e) => {
    dispatch(setEditText(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = editText.trim();
    if (!text) return;

    if (isEditing) {
      dispatch(editTodo({ id: editTodoId, text }));
    } else {
      dispatch(addTodos(text));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={editText}
        onChange={handleChange}
        className="bg-gray-800 rounded border border-gray-700 text-white py-1 px-3"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
      >
        {isEditing ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
}

export default AddTodo;


