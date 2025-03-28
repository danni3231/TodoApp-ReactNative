import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todoSlice';
import { formSlice } from './todoForm/todoFormSlice';
import { authSlice } from './auth/authSlice';

export default configureStore({
	reducer: {
		todos: todoSlice.reducer,
		todoForm: formSlice.reducer,
		auth: authSlice.reducer,
	},
});
