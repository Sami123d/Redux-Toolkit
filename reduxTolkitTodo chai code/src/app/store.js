// YE STORE KISI BHI LOCATION PR BANA SKTE KOI PROBLEM NAHI.
import todoReducer from '/src/features/todo/todoSlice.js'
import {configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: todoReducer
});