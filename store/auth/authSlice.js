import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'not-authenticated', //'checking' 'authenticated'
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		errorMessage: null,
	},
	reducers: {
		login: (state, { payload }) => {
			state.status = 'authenticated';
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
			state.errorMessage = payload.errorMessage;
		},
		logout: (state, { payload }) => {
			state.status = 'not-authenticated';
			state.uid = null;
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.errorMessage = payload?.errorMessage;
			console.log(payload?.errorMessage);
		},
		checkingCredentials: state => {
			state.status = 'checking';
		},
		setPhotoURL: (state, { payload }) => {
			state.photoURL = payload;
			console.log(state.photoURL);
		},
	},
});

export const { login, logout, checkingCredentials, setPhotoURL } =
	authSlice.actions;
