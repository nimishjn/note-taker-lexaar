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
		deleteAllNotes: (state) => {
			state.notes = [];
			localStorage.setItem('notes', JSON.stringify(state.notes));
		},
		editNote: (state, action) => {
			const newNotes = state.notes.map((note) => {
				if (note.id === action.payload.id) {
					note = action.payload;
				}

				return note;
			});
			state.notes = newNotes;
			localStorage.setItem('notes', JSON.stringify(newNotes));
		},
	},
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, deleteAllNotes, editNote } = notes.actions;

export default notes.reducer;
