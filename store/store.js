import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todoSlice';

export default configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
});
