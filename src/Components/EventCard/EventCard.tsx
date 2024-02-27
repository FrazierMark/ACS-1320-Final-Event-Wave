import './EventCard.css';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helperFunctions';

interface EventCardProps {
	title: string;
	seatgeekId: number;
	url: string;
	pub: string;
	performer: string;
	eventType: string;
	image: string;
	venue: string;
}

const EventCard = ({
	title,
	seatgeekId,
	pub,
	image,
}: EventCardProps) => {
	return (
		<>
			<div className='card-container'>
				<div className='card'>
					<p className='card-title'>
						<Link to={`/events/${seatgeekId}`}>{title}</Link>
					</p>
					<div
						className='card-image'
						style={{ backgroundImage: `url(${image})` }}
					>
						{' '}
					</div>

					<h2 className='card-details'>{formatDate(pub)}</h2>
					{/* <h4 className="card-details">{venue}</h4> */}

					<h4 className='card-details'>
						<Link to={`/events/${seatgeekId}`}>{title}</Link>
					</h4>
				</div>
			</div>
		</>
	);
};

export default EventCard;
