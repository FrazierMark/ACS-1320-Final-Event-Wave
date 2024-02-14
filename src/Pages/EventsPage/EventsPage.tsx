import { useState, useEffect } from 'react';
import { parseData } from '../../utils/helperFunctions';
import { useLocation } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar';
import EventCard from '../../Components/EventCard/EventCard';
import { ParsedEvent } from '../../utils/helperFunctions';

const EventsPage = () => {
	const [parsedData, setParsedData] = useState([] as ParsedEvent[]);

	const {state} = useLocation();
  console.log(state)
	const searchResults = state
	console.log(searchResults);

	useEffect(() => {
		if (searchResults) {
			const allEvents: ParsedEvent[] = parseData(searchResults);
			setParsedData(allEvents);
		}
	}, [searchResults, state]);

	return (
		<>
			<SearchBar />

			<div className='events-event-row'>
				{parsedData &&
					parsedData.map((eventGig, idx) => (
						<EventCard
							title={eventGig.title}
							seatgeekId={eventGig.seatgeek_id}
							url={eventGig.url}
							pub={eventGig.pub}
							performer={eventGig.performer}
							eventType={eventGig.eventType}
							image={eventGig.image}
							venue={eventGig.venue}
							key={idx}
						/>
					))}
			</div>
		</>
	);
};

export default EventsPage;
