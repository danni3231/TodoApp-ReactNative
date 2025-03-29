import { removeTodo, getTodos, uploadTodo } from '../../Firebase/todoProvider';
import {
	addTodo,
	deleteTodo,
	setTodos,
	updateTodo,
	checkingTodos,
} from './todoSlice';

export const startSetTodos = () => {
	return async dispatch => {
		dispatch(checkingTodos());
		const todos = await getTodos();
		dispatch(setTodos(todos));
	};
};

export const startAddTodo = todo => {
	return async dispatch => {
		await uploadTodo(todo);
		dispatch(addTodo(todo));
	};
};

export const startUpdateTodo = todo => {
	return async dispatch => {
		await uploadTodo(todo);
		dispatch(updateTodo(todo));
	};
};

export const startDeleteTodo = id => {
	return async dispatch => {
		await removeTodo(id);
		dispatch(deleteTodo(id));
	};
};
