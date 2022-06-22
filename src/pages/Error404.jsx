import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/illustrations/page-not-found.svg';

export default function Error404() {
	return (
		<div className='max-w-4xl mx-auto px-5 md:px-10 placeholder:md:my-8 flex flex-col items-center my-20'>
			<img className='max-w-2xl w-4/5' src={PageNotFound} alt='404' />
            <p className='text-lg text-gray-600 animate-pulse font-bold'>PAGE NOT FOUND</p>
            <Link to="/" className='p-2 text-white bg-blue-700 rounded-md'>HOME</Link>
		</div>
	);
}
