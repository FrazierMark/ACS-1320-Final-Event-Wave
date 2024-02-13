import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
	return (
		<>
			<Navbar />

			<Routes location={location}>
				<Route path='/' element={<LandingPage />} />
				{/* <Route path='/events' element={<EventsPage />} />
				<Route path='/events/:seatgeekId' element={<DetailsPage />} /> */}
			</Routes>
		</>
	);
}

export default App;
