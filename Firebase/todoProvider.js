import { ref, set, get, child, remove } from 'firebase/database';
import { FirebaseDB } from './firebaseConfig';

export const uploadTodo = async (todo, userId) => {
	const todoRef = ref(FirebaseDB, `todos/${userId}/${todo.id}`);

	await set(todoRef, todo)
		.then(() => {
			console.log('Todo added successfully:', todo);
		})
		.catch(error => {
			console.error('Error adding todo:', error);
		});
};

export const removeTodo = async (todoID, userId) => {
	const todoRef = ref(FirebaseDB, `todos/${userId}/${todoID}`);
	await remove(todoRef);
};

export const getTodos = async userId => {
	const dbRef = ref(FirebaseDB);

	let todos = [];

	await get(child(dbRef, `todos/${userId}`))
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
