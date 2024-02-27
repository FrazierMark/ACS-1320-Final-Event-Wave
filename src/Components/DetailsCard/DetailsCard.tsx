import './DetailsCard.css';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/helperFunctions';
import * as eventApi from '../../utils/eventApi';

interface DetailCardProps {
	title: string;
	seatgeekId: number;
	url: string;
	pub: string;
	performer: string;
	eventType: string;
	image: string;
	venue: string;
	location: string;
	address: string;
	googleLink: string;
}

const DetailsCard = ({
	title,
	seatgeekId,
	url,
	pub,
	performer,
	image,
	venue,
	location,
	address,
	googleLink,
	eventType,
}: DetailCardProps) => {
	return (
		<div className='details-card-container'>
			<div className='card'>
				<p className='card-title'> {title} </p>
				<div
					className='card-image'
					style={{ backgroundImage: `url(${image})` }}
				>
					{' '}
				</div>

				<h2 className='card-details'>{formatDate(pub)}</h2>
				<h4 className='card-details'>Venue: {venue}</h4>
				<h4 className='card-details'>
					<a href={`${url}`} target='_blank' rel='noreferrer'>
						Tickets
					</a>
				</h4>
				<h4 className='card-details'>
					<a href={`${googleLink}`} target='_blank' rel='noreferrer'>
						Create Calendar Event
					</a>
				</h4>
				<h4 className='card-details'>Performers: {performer}</h4>
				<h4 className='card-details'>Event Type: {eventType}</h4>
				<h4 className='card-details'>Location: {location}</h4>
				<h4 className='card-details'>Address: {address}</h4>
			</div>
		</div>
	);
};

export default DetailsCard;
