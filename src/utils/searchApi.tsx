import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const PER_PAGE = '&per_page=20';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchEvents = async (zip, radius, startDate) => {

    const query = `${BASE_URL}geoip=${zip}&range=${radius}mi${PER_PAGE}${CLIENT_ID}`
    try {
        const response = await axios.get(query)
        // console.log("RESPONSE ==== : ", response.data);
        return response;
    } catch (err) {
            console.log("ERROR: === ", err)
    }
}


export const getEventDetails = async (eventId) => {
    
    const query = `${BASE_URL}id=${eventId}${CLIENT_ID}`
    try {
        const response = await axios.get(query)
        
        return response;
    } catch (err) {
            console.log("ERROR: === ", err)
    }
}