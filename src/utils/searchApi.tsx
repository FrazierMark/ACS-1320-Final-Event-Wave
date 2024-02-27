import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
const PER_PAGE = import.meta.env.VITE_APP_PER_PAGE;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const searchEvents = async (zip: string, radius: string) => {
	if (radius === '') {
		radius = '10';
	}
	const query = `${BASE_URL}geoip=${zip}&range=${radius}mi${PER_PAGE}${CLIENT_ID}`;
	try {
		const response = await axios.get(query);
		return response;
	} catch (err) {
		console.log('ERROR: === ', err);
	}
};

export const getEventDetails = async (eventId: number) => {
	const query = `${BASE_URL}id=${eventId}${CLIENT_ID}`;
	try {
		const response = await axios.get(query);

		return response;
	} catch (err) {
		console.log('ERROR: === ', err);
	}
};
