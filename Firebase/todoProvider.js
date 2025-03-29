import { ref, set, get, child, remove } from 'firebase/database';
import { FirebaseDB } from './firebaseConfig';

export const uploadTodo = async todo => {
	const todoRef = ref(FirebaseDB, 'todos/' + todo.id);

	await set(todoRef, todo)
		.then(() => {
			console.log('Todo added successfully:', todo);
		})
		.catch(error => {
			console.error('Error adding todo:', error);
		});
};

export const removeTodo = async id => {
	const todoRef = ref(FirebaseDB, 'todos/' + id);
	await remove(todoRef);
};

export const getTodos = async () => {
	const dbRef = ref(FirebaseDB);

	let todos = [];

	await get(child(dbRef, 'todos'))
		.then(snapshot => {
			if (snapshot.exists()) {
				const dbTodos = Object.values(snapshot.val());
				todos = dbTodos;
			}
		})
		.catch(error => {
			console.error('Error getting todos:', error);
		});

	return todos;
};
