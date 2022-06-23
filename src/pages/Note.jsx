import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingIcon } from '../components/icons';
import { deleteNote, editNote } from '../store/Notes';

export default function Note() {
	const { notes } = useSelector((state) => state.notes);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const noteId = params.noteId;
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [editing, setEditing] = useState('');

	useEffect(() => {
		if (!noteId || !notes.map((e) => e.id).includes(noteId)) {
			navigate('/404');
		} else {
			const noteData = notes.filter((e) => e.id === noteId);
			setTitle(noteData[0].title);
			setDescription(noteData[0].description);
		}
	});

	const handleDeleteNode = (noteId) => {
		dispatch(deleteNote(noteId));
		navigate('/');
	};

	const handEditClick = () => {
		setEditing(true);
	};

	return (
		<div className='max-w-4xl m-auto px-5 md:px-10 my-4 placeholder:md:my-8'>
			{editing ? (
				<EditNote
					initialTitle={title}
					initialDescription={description}
					noteId={noteId}
					notes={notes}
					setEditing={setEditing}
				/>
			) : (
				<>
					{title ? (
						<h1 className='text-center text-4xl break-words'>{title}</h1>
					) : (
						<WaitingBox />
					)}
					{description ? (
						<p className='break-words'>{description}</p>
					) : (
						<WaitingBox />
					)}
					<div className='flex gap-2 justify-center'>
						<button
							className='py-2 px-4 border-0 rounded-md bg-blue-500 text-white text-base cursor-pointer'
							onClick={handEditClick}
						>
							Edit
						</button>
						<button
							className='py-2 px-4 border-0 rounded-md bg-red-600 text-white text-base cursor-pointer'
							onClick={() => handleDeleteNode(noteId)}
						>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
}

const WaitingBox = () => {
	return (
		<div className='w-full flex justify-center bg-slate-50 p-4 text-3xl'>
			<LoadingIcon className='animate-spin' />
		</div>
	);
};

const EditNote = ({
	initialTitle,
	initialDescription,
	noteId,
	notes,
	setEditing,
}) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(initialTitle);
	const [description, setDescription] = useState(initialDescription);
	const [error, setError] = useState('');

	const handleEditNote = (e) => {
		e.preventDefault();

		if (
			notes.map((element) => element.title).includes(title) &&
			title !== initialTitle
		)
			return setError('Title should be unique!');
		else setError('');

		dispatch(
			editNote({
				id: noteId,
				title: title,
				description: description,
			})
		);

		setEditing(false);
	};

	const resetForm = () => {
		setTitle(initialTitle);
		setDescription(initialDescription);
	};

	return (
		<form className='flex flex-col items-stretch' onSubmit={handleEditNote}>
			<div className='flex flex-col'>
				<label className='text-sm pl-3'>
					Title <span className='text-red-600'>*</span>
				</label>
				<input
					className='border-gray-50 border-solid border-1 p-3 rounded-md outline-none active:border-gray-500 focus:border-gray-400 mb-4'
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
					className='border-gray-50 border-solid border-1 p-3 rounded-md outline-none active:border-gray-500 focus:border-gray-400 resize-y h-40'
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
			<p className='text-red-600 text-sm text-center'>{error || ''}</p>
			<button
				className='p-2 rounded-md border-0 bg-blue-200 cursor-pointer text-base hover:bg-blue-300 transition-all active:bg-blue-400'
				type='submit'
			>
				SAVE
			</button>
			<div className='flex gap-2 mt-2 justify-center'>
				<button
					className='w-1/2 py-2 px-4 rounded-md border-0 bg-green-200 cursor-pointer text-base hover:bg-green-300 transition-all active:bg-green-400'
					onClick={resetForm}
					type='button'
				>
					RESET
				</button>
				<button
					className='w-1/2 py-2 px-4 rounded-md border-0 bg-red-200 cursor-pointer text-base hover:bg-red-300 transition-all active:bg-red-400'
					onClick={() => setEditing(false)}
					type='button'
				>
					CANCEL
				</button>
			</div>
		</form>
	);
};
