import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos: [{id:1, text: "Hello World"}]
// }

// Just like this todoSlice we can have LoginSlice, AuthenticationSlice etc
export const todoSlice = createSlice({
    name : "todo",

    initialState: {
        todos: [
            {
                id:1, 
                text: "Hello World"
            }
        ]
    },

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions 
// Here we're exporting the individual functionality, so that these functions can be used in the components

export default todoSlice.reducer;