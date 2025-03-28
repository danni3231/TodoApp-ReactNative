import { router } from 'expo-router';
import {
	loginWithEmailPassword,
	logoutFirebaseAuth,
	registerUserWithEmailPassword,
} from '../../Firebase/authProviders';
import { login, logout } from './authSlice';
export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async dispatch => {
		//dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailPassword({
				email,
				password,
				displayName,
			});

		if (!ok) return dispatch(logout({ errorMessage }));

		console.log(ok);

		await dispatch(login({ uid, displayName, email, photoURL }));
		router.replace('/');
	};
};

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async dispatch => {
		//dispatch(checkingCredentials());

		console.log(email);

		const { ok, uid, displayName, photoURL, errorMessage } =
			await loginWithEmailPassword({ email, password });

		if (!ok) return dispatch(logout({ errorMessage }));

		await dispatch(login({ uid, displayName, email, photoURL }));
		router.replace('/');
	};
};

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebaseAuth();
		dispatch(logout());
	};
};
