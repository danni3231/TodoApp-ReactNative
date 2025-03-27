import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		formType: '',
		todoRef: {},
		sheetIsOpen: false,
	},
	reducers: {
		setFormType: (state, { payload }) => {
			console.log(payload);
			state.formType = payload;
		},
		setTodoRef: (state, { payload }) => {
			state.todoRef = payload;
		},
		toggleSheetIsOpen: state => {
			state.sheetIsOpen = !state.sheetIsOpen;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setFormType, setTodoRef, toggleSheetIsOpen } = formSlice.actions;
