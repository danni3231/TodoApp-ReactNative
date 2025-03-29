import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		status: 'checking', // 'checking', 'loaded'
		todos: [],
	},
	reducers: {
		checkingTodos: state => {
			state.status = 'checking';
		},
		setTodos: (state, { payload }) => {
			state.status = 'loaded';
			state.todos = payload;
		},
		cleanTodos: state => {
			state.todos = [];
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
export const {
	addTodo,
	deleteTodo,
	setTodos,
	updateTodo,
	cleanTodos,
	checkingTodos,
} = todoSlice.actions;
