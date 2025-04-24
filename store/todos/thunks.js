import { removeTodo, getTodos, uploadTodo } from '../../Firebase/todoProvider';
import {
	addTodo,
	deleteTodo,
	setTodos,
	updateTodo,
	checkingTodos,
} from './todoSlice';

export const startSetTodos = userId => {
	return async dispatch => {
		dispatch(checkingTodos());
		const todos = await getTodos(userId);
		dispatch(setTodos(todos));
	};
};

export const startAddTodo = (todo, userId) => {
	return async dispatch => {
		await uploadTodo(todo, userId);
		dispatch(addTodo(todo));
	};
};

export const startUpdateTodo = (todo, userId) => {
	return async dispatch => {
		await uploadTodo(todo, userId);
		dispatch(updateTodo(todo));
	};
};

export const startDeleteTodo = (todoId, userId) => {
	return async dispatch => {
		await removeTodo(todoId, userId);
		dispatch(deleteTodo(todoId));
	};
};
