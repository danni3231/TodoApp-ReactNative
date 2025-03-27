import { ref, set, get, child, remove } from 'firebase/database';
import { db } from './firebaseConfig';

export const uploadTodo = async todo => {
	const todoRef = ref(db, 'todos/' + todo.id);

	console.log(todoRef);

	await set(todoRef, todo)
		.then(() => {
			console.log('Todo added successfully:', todo);
		})
		.catch(error => {
			console.error('Error adding todo:', error);
		});
};

export const removeTodo = async id => {
	const todoRef = ref(db, 'todos/' + id);
	await remove(todoRef);
};

export const getTodos = async () => {
	const dbRef = ref(db);

	let todos = [];

	await get(child(dbRef, 'todos'))
		.then(snapshot => {
			const dbTodos = Object.values(snapshot.val());
			todos = dbTodos;
		})
		.catch(error => {
			console.error('Error getting todos:', error);
		});

	return todos;
};
