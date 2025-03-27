import { ref, set, update, get, child, remove } from 'firebase/database';
import { db } from './firebaseConfig';

export const writeTodo = todo => {
	const todoRef = ref(db, 'todos/' + todo.id);

	set(todoRef, todo)
		.then(() => {
			console.log('Todo write successfully:', todo);
		})
		.catch(error => {
			console.error('Error adding todo:', error);
		});
};

export const removeTodo = id => {
	const todoRef = ref(db, 'todos/' + id);
	remove(todoRef);
};

export const readTodos = () => {
	const dbRef = ref(db);

	return get(child(dbRef, 'todos'));
};
