import React from 'react';
import CompanyLogo from '../assets/logo/company-logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='sticky top-0 flex items-center justify-center py-1 px-6 bg-white h-16'>
			<Link to='/'>
				<img
					className='max-w-xs max-h-14'
					src={CompanyLogo}
					alt='company logo'
				/>
			</Link>
		</div>
	);
}
