import React from 'react';
import AddNote from '../components/AddNote';
import ListNotes from '../components/ListNotes';

export default function Home() {
	return (
		<div className='max-w-4xl m-auto px-5 md:px-10 my-4 placeholder:md:my-8'>
			<AddNote />
			<ListNotes />
		</div>
	);
}
