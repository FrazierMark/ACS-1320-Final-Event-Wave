import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import EventsPage from './Pages/EventsPage/EventsPage';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CanvasScene from './CanvasComponents/CanvasScene';
import DetailsPage from './Pages/DetailsPage/DetailsPage';

function App() {
	const location = useLocation();
	const [key, setKey] = useState(0);

	// Force a remount of the Navbar component to reset the scroll position
	useEffect(() => {
		setKey((prev) => prev + 1);
	}, [location]);

	return (
		<div className='page-container'>
			<Navbar key={key} />
			<Routes location={location}>
				<Route path='/' element={<LandingPage />} />
				<Route path='/events' element={<EventsPage />} />
				<Route path='/events/:seatgeekId' element={<DetailsPage />} />
			</Routes>
			<CanvasScene key={location.pathname}  />
		</div>
	);
}

export default App;
