import { useState, useEffect } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import { AddItems, AddTodos } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const editTodo = (id, todo) => {
    setTodos((oldTodo) => oldTodo.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((filterTodo) => filterTodo.id !== id))
  }
  const toggleTodo = (id) => {
    setTodos((prevToggle) => prevToggle.map((prevValue) => prevValue.id === id ? { ...prevValue, checked: !prevValue.checked } : prevValue))
  }

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('reactTodo'))

    if (getTodos && getTodos.length > 0) {
      setTodos(getTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('reactTodo', JSON.stringify(todos))
  }, [todos])
  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <AddTodos />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <AddItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
