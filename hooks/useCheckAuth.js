import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { login } from '../store/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/firebaseConfig';
import { router } from 'expo-router';

export const useCheckAuth = () => {
	const { status } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async user => {
			if (!user) return dispatch(logout({}));

			const { uid, email, displayName, photoURL } = user;

			dispatch(login({ uid, displayName, email, photoURL }));
			router.replace('/');
		});
	}, []);

	return status;
};
