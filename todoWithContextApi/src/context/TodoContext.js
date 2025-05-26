import { createContext, useContext } from "react";

export const createTodoContext = createContext({
    todos: [
        {
            id: 1,
            todomsg: " Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id , todo) => {},
    deletetodo: (id) => {},
    ToggleTodo: (id) => {}
})

export const TodoContextProvider = createTodoContext.Provider

export const useTodo = () => {
    return useContext(createTodoContext)
}