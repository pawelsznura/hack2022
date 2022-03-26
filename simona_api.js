const carTravel = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com',
		'X-RapidAPI-Key': '9f6d293190msh422bc63cc1d4340p130a1fjsn1966984411ed'
	}
};

fetch('https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com',
        'X-RapidAPI-Key': '9f6d293190msh422bc63cc1d4340p130a1fjsn1966984411ed'
    }
};

fetch('https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?distance=1000&type=Taxi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

