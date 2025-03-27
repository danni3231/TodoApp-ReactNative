import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todoSlice';
import { formSlice } from './form/formSlice';

export default configureStore({
	reducer: {
		todos: todoSlice.reducer,
		form: formSlice.reducer,
	},
});
