import { useEffect, useMemo, useRef, useState } from 'react';
import CanvasScene from '../../CanvasComponents/CanvasScene';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import TagLine from '../../Components/TagLine/TagLine';
import './LandingPage.css';

const LandingPage = () => {
	return (
		<>
			<div className='searchBar-container'>
				<SearchBar position='bottom' />
			</div>
			{/* <TagLine /> */}
		</>
	);
};

export default LandingPage;
