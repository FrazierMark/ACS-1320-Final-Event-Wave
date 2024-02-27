import { useParams } from 'react-router-dom';
import { parseData, createGoogleEvent } from '../../utils/helperFunctions';
import { getEventDetails } from '../../utils/searchApi';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import DetailsCard from '../../Components/DetailsCard/DetailsCard';
import './DetailsPage.css';

const DetailsPage = () => {
	const [parsedData, setParsedData] = useState();
	const [googleEventLink, setGoogleEventLink] = useState();
	const { seatgeekId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const rawEventDetails = await getEventDetails(seatgeekId);
			const eventDetails = parseData(rawEventDetails.data);
			setParsedData(eventDetails);

			const googleUrl = createGoogleEvent(rawEventDetails.data);
			setGoogleEventLink(googleUrl);
		};
		fetchData();
	}, [seatgeekId]);

	return (
		<div className='detailsPage-container'>
			<SearchBar position={'top'} />
			{parsedData &&
				parsedData.map((eventGig, idx) => (
					<DetailsCard
						title={eventGig.title}
						seatgeekId={eventGig.seatgeek_id}
						url={eventGig.url}
						pub={eventGig.pub}
						performer={eventGig.performer}
						eventType={eventGig.eventType}
						image={eventGig.image}
						venue={eventGig.venue}
						location={eventGig.location}
						address={eventGig.address}
						googleLink={googleEventLink}
						key={idx}
					/>
				))}
		</div>
	);
};

export default DetailsPage;
