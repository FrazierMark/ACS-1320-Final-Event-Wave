import { useState } from 'react';
import { searchEvents } from '../../utils/searchApi.js';
import { useNavigate } from 'react-router-dom';
import { isValidZipCode } from '../../utils/helperFunctions.js';
import './SearchBar.css';

interface SearchBarProps {
	position: 'bottom' | 'top'; // Define valid positions
}

const SearchBar = ({ position }: SearchBarProps) => {
	const [zip, setZip] = useState('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [radius, setRadius] = useState('');
	const navigate = useNavigate();

	const onZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setZip(value);
	};

	const onRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setRadius(value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isValidZipCode(zip)) {
			const responseData = await searchEvents(zip, radius);
			if (responseData) {
				navigate('/events', { state: responseData.data });
			}
		}
	};

	const searchBarStyle =
		position === 'bottom' ? { bottom: '10%' } : { top: '13%' };

	return (
		<div className='search-bar-container'>
			<form
				className='search-bar'
				style={searchBarStyle}
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					className='search-query'
					placeholder='Zip Code'
					value={zip}
					onChange={onZipChange}
				/>
				<button type='submit' className='search-btn'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#fff'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
				</button>
			</form>
			<form
				className='radius-bar'
				style={searchBarStyle}
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					className='radius-query'
					placeholder='Radius (mi)'
					value={radius}
					onChange={onRadiusChange}
				/>
			</form>
			<div className='alert' id='zip-code-alert'>
				Please enter a valid zip code.
			</div>
		</div>
	);
};

export default SearchBar;
