import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todoSlice';
import { todoFormSlice } from './todoForm/todoFormSlice';
import { authSlice } from './auth/authSlice';

export default configureStore({
	reducer: {
		todos: todoSlice.reducer,
		todoForm: todoFormSlice.reducer,
		auth: authSlice.reducer,
	},
});
