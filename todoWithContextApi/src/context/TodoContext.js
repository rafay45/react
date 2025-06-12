import { createContext, useContext } from "react";

export const createTodoContext = createContext({
    todos: [
        {
            id: 1,
            todomsg: " Todo msg",
            checked: false
        }
    ],
    addTodo: (todo) => { },
    editTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { }
})

export const TodoContextProvider = createTodoContext.Provider

export const useTodo = () => {
    return useContext(createTodoContext)
}