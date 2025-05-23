import { router } from 'expo-router';
import {
	loginWithEmailPassword,
	logoutFirebaseAuth,
	registerUserWithEmailPassword,
	updateUserProfilePhoto,
	uploadUser,
    deleteCurrentUser
} from '../../Firebase/authProviders';
import { checkingCredentials, login, logout, setPhotoURL } from './authSlice';
import { uploadProfilePhoto } from '../../Firebase/storageProvider';

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailPassword({
				email,
				password,
				displayName,
			});

		if (!ok) return dispatch(logout({ errorMessage }));

		console.log('pass');

		await uploadUser({ uid, displayName, photoURL, email });

		await dispatch(login({ uid, displayName, email, photoURL }));
		router.replace('/');
	};
};

export const startDeletingUser = () => {
    return async dispatch => {
        const {ok, message} = await deleteCurrentUser();

        if (ok) {
            return dispatch(logout());
        }

        console.log(message);
    };
}

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async dispatch => {
		dispatch(checkingCredentials());

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

export const startUploadProfilePhoto = (uri, userId) => {
	return async dispatch => {
		const photoURL = await uploadProfilePhoto(uri, userId);
		dispatch(setPhotoURL(photoURL));
		dispatch(updateUserProfilePhoto(photoURL));
	};
};
