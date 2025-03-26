import { ref, set } from 'firebase/database';
import { db } from './FirebaseConfig';

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
