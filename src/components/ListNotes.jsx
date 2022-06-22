import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteIcon } from './icons';
import { Link } from 'react-router-dom';
import NoNotes from './NoNotes';
import { deleteNote } from '../store/Notes';
import DeleteAllNotes from './DeleteAllNotes';

export default function ListNotes() {
	const { notes } = useSelector((state) => state.notes);
	const dispatch = useDispatch();

	const handleDeleteNode = (noteId) => {
		dispatch(deleteNote(noteId));
	};

	

	if (notes.length === 0) {
		return <NoNotes />;
	}

	return (
		<div className='flex flex-col items-stretch'>
			<h1 className='text-center'>Notes</h1>
			<ol className='p-0 m-0 flex flex-wrap items-start justify-center sm:justify-start'>
				{notes.map((note, index) => (
					<div
						to={'/note/' + note.id}
						className='text-black h-48 w-4/5 sm:w-40 p-4 border-1 border-blue-200 border-solid flex flex-col m-2 drop-shadow-2xl bg-gradient-to-br from-slate-50 to-slate-200 hover:border-blue-400'
						key={index}
						id={note.id}
					>
						<h3 className='m-0 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-full'>
							{note.title}
						</h3>
						{note.description ? (
							<p className='grow break-words mt-2 mb-0 text-sm max-h-36 overflow-hidden'>
								{note.description.slice(0, 120)}
								{note.description.length > 120 && '...'}
							</p>
						) : (
							<i className='grow break-words mt-2 mb-0 text-gray-500 text-sm'>No description.</i>
						)}
						<div className='flex items-center justify-center'>
							<Link
								to={'/note/' + note.id}
								className='text-white py-2 px-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600  rounded-l-md leading-none'
							>
								Open
							</Link>
							<button
								className='py-2 border-0 justify-self-end bg-red-600 text-white border-l-0 cursor-pointer leading-none rounded-r-md w-6 hover:w-12 transition-all'
								onClick={() => handleDeleteNode(note.id)}
							>
								<DeleteIcon />
							</button>
						</div>
					</div>
				))}
			</ol>
			<DeleteAllNotes />
		</div>
	);
}
