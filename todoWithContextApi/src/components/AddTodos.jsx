import React, { useState } from 'react'
import { useTodo } from '../context';

function AddTodos() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, checked: false })
        setTodo("")
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none text-black duration-150 bg-white/20 py-1.5"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 font-bold cursor-pointer bg-blue-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodos