import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllNotes } from '../store/Notes';

import { DangerIcon1 } from './icons';

export default function DeleteAllNotes() {
	const dispatch = useDispatch();

	const handleDeleteAll = () => {
		if (window.confirm('Are you sure you want to delete all your notes?')) {
			dispatch(deleteAllNotes());
		}
	};

	return (
		<button
			className='mt-6 w-fit self-center bg-red-700 border-0 px-4 py-2 rounded-md text-white cursor-pointer hover:animate-pulse leading-none align-middle'
			onClick={handleDeleteAll}
		>
			<DangerIcon1 className='align-middle text-lg' /> DELETE ALL NOTES
		</button>
	);
}
