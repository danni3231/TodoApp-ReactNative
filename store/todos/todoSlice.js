import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		setTodo: (state, { payload }) => {
			state.todos = payload;
		},
		addTodo: (state, { payload }) => {
			state.todos = [...state.todos, payload];
		},
		updateTodo: (state, { payload }) => {
			state.todos = state.todos.map(item =>
				item.id === payload.id ? payload : item
			);
		},
		deleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter(todo => todo.id !== payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, setTodo, updateTodo } = todoSlice.actions;
