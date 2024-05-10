import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World " }],
};
// slice man lo ky reduer ka hi bara version hai , reducer: jaha functionality define krte
// state se current state milti hai, or acton se jo bhi datapass ho rha hai vo milta hai
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
   
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
