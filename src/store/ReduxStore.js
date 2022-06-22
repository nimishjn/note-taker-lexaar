import { configureStore } from '@reduxjs/toolkit';
import Notes from './Notes';

export default configureStore({
	reducer: {
		notes: Notes,
	},
});
