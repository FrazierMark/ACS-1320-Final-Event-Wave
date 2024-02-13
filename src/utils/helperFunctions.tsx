export const parseData = (responseData) => {
	const eventsContext = [];
	responseData.events.forEach((event) => {
		const {
			title,
			id: seatgeek_id,
			url,
			datetime_utc: pub,
			type: eventType,
			performers,
			venue,
		} = event;
		const performerArray = performers.map((performer) => performer.name);
		const context = {
			title,
			seatgeek_id,
			url,
			pub,
			performer: performers[0].name,
			performers,
			performerArray,
			eventType,
			image: performers[0].image,
			venue: venue.name,
		};
		eventsContext.push(context);
	});
	return eventsContext;
};

export const createGoogleEvent = (responseData) => {
	const title = responseData['events'][0]['title'];
	const url = responseData['events'][0]['url'];
	const pub = responseData['events'][0]['datetime_utc'];
	const name_v2 = responseData.events[0].venue.name_v2.replace(/ /g, '+');
	const address = responseData.events[0].venue.address.replace(/ /g, '+');
	const extended_address =
		responseData.events[0].venue.extended_address.replace(/ /g, '+');
	const googleEventTitle = title.replace(/ /g, '+');
	const googleEventStart = pub.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');
	const googleEventEnd = String(
		parseInt(googleEventStart.replace('T', '')) + 1
	);
	const googleEventEndFormatted =
		googleEventEnd.slice(0, 8) + 'T' + googleEventEnd.slice(8);
	const googleEventDetails = `&details=For+details,+link+here:+${url}`;
	const googleEventAddress = `&location=${name_v2}${address}${extended_address}`;

	return `https://calendar.google.com/calendar/r/eventedit?text=${googleEventTitle}&dates=${googleEventStart}/${googleEventEndFormatted}${googleEventDetails}${googleEventAddress}`;
};

export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	};
	return date.toLocaleString('en-US', options);
};

export const isValidZipCode = (zipCode: string) => {
	const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
	const isValid = zipCodePattern.test(zipCode);
	const alert = document.getElementById('zip-code-alert');
	if (!isValid) {
		alert!.classList.add('invalid');
	} else {
		alert!.classList.remove('invalid');
	}
	return isValid;
};
