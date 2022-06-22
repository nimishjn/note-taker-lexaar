import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	notes: JSON.parse(localStorage.getItem('notes')) || [],
};

export const notes = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote: (state, action) => {
			state.notes.push(action.payload);
			localStorage.setItem('notes', JSON.stringify(state.notes));
		},
		deleteNote: (state, action) => {
			state.notes = state.notes.filter((e) => e.id !== action.payload);
			localStorage.setItem('notes', JSON.stringify(state.notes));
		},
	},
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote } = notes.actions;

export default notes.reducer;
