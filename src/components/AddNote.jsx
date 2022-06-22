import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../store/Notes';
import generateUniqueId from '../utils/generateId';

export default function AddNote() {
	const { notes } = useSelector((state) => state.notes);
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleAddNote = (e) => {
		e.preventDefault();

		const id = generateUniqueId(notes.map((e) => e.id));

		if (id) {
			dispatch(
				addNote({
					id: id,
					title: title,
					description: description,
				})
			);
		} else {
			console.log('Unique Id not available!');
		}
	};

	return (
		<form className='flex flex-col items-stretch' onSubmit={handleAddNote}>
			<div className='flex flex-col'>
				<label className='text-sm pl-3'>
					Title <span className='text-red-600'>*</span>
				</label>
				<input
					className='border-gray-50 border-solid border-2 p-3 rounded-md outline-none active:border-gray-500 focus:border-gray-400 mb-4'
					type='text'
					placeholder='Enter here'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required={true}
				/>
			</div>
			<div className='flex flex-col'>
				<label className='text-sm pl-3'>
					Description{' '}
					{title.length < 10 && (
						<span className='text-red-600'>*</span>
					)}
				</label>
				<textarea
					className='border-gray-50 border-solid border-2 p-3 rounded-md outline-none active:border-gray-500 focus:border-gray-400 resize-y'
					type='text'
					placeholder='Enter here'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required={title.length < 10}
				/>
			</div>
			<p className='m-0 mb-4 text-xs text-zinc-500'>
				<b>Note:</b> Description is mandatory if title length is less
				than 10 characters.
			</p>
			<button
				onClick={() => console.log('Hello')}
				className='p-2 rounded-md border-0 bg-blue-200 cursor-pointer text-base hover:bg-blue-300 transition-all active:bg-blue-400'
				type='submit'
			>
				ADD
			</button>
		</form>
	);
}
