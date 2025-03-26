import { ref, set, update, get, child } from 'firebase/database';
import { db } from './firebaseConfig';

export const writeTodo = todo => {
	const todoRef = ref(db, 'todos/' + todo.id);

	set(todoRef, todo)
		.then(() => {
			console.log('Todo added successfully:', todo);
		})
		.catch(error => {
			console.error('Error adding todo:', error);
		});
};

export const updateTodo = todo => {
	const todoRef = ref(db, 'todos/' + todo.id);

	update(todoRef, todo)
		.then(() => {
			console.log('Todo updated successfully:', todo);
		})
		.catch(error => {
			console.error('Error adding todo:', error);
		});
};

export const readTodos = () => {
	const dbRef = ref(db);

	return get(child(dbRef, 'todos'));
};
