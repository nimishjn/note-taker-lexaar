import React from 'react';
import AddDocument from '../assets/illustrations/add-document.svg';

export default function NoNotes() {
	return (
		<div className='relative w-full pt-10 flex flex-col items-center'>
			<h1 className='text-center py-2 text-xl md:text-3xl select-none text-gray-400 -mb-8 z-10'>
				No notes to display.
			</h1>
			<img
				className='max-w-lg w-full'
				src={AddDocument}
				alt='Add Document'
			/>
		</div>
	);
}
