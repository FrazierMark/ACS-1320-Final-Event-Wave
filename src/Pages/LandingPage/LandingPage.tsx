import SearchBar from '../../Components/SearchBar/SearchBar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
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
