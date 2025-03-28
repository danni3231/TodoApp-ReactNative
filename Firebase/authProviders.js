import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './firebaseConfig';

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const resp = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { uid, photoURL } = resp.user;

		await updateProfile(FirebaseAuth.currentUser, { displayName });

		return {
			ok: true,
			uid,
			displayName,
			photoURL,
			email,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const loginWithEmailPassword = async ({ email, password }) => {
	try {
		const result = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		const { displayName, photoURL, uid } = result.user;

		return {
			ok: true,
			//userInfo
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const logoutFirebaseAuth = async () => {
	return await FirebaseAuth.signOut();
};
