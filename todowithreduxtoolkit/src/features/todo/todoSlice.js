import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux Toolkit",
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
          const { id, text } = action.payload;
          const todo = state.todos.find((todo) => todo.id == id);
          if (todo) {
            todo.text = text;
          }
        }
    }
})

export const { addTodos, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer