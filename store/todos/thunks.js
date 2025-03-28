import { removeTodo, getTodos, uploadTodo } from '../../Firebase/todoProvider';
import { addTodo, deleteTodo, setTodo, updateTodo } from './todoSlice';

export const startSetTodos = () => {
	return async dispatch => {
		const todos = await getTodos();
		dispatch(setTodo(todos));
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
