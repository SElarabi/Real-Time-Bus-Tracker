/** @format */
const busesLoaction =
	'https://api-v3.mbta.com/vehicles?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1';

const stopaddress =
	'https://api-v3.mbta.com/stops?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1';

mapboxgl.accessToken =
	'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';
let busList = [];
let markers = [];
let buses = [];
let busStops = [];
const inboundColor = 'rgb(33, 126, 15)';
const outboundClor = '#FF0000';

const map = new mapboxgl.Map({
	container: 'map', // div id
	style: 'mapbox://styles/mapbox/streets-v12', // style
	center: [-71.101, 42.358], // location [lng, lat]
	zoom: 12, // zoom
});

//initialize the map
function init() {
	getBusStops();

	// Create marker  MIT location
	const marker = new mapboxgl.Marker({
		color: '#FF3F',
	})
		.setLngLat([-71.0942, 42.3601])
		.addTo(map);

	// track buses
	trackBuses();
	// Track buses every 5 seconds
	setInterval(trackBuses, 5000);

	// Update Bus stops data
}

//Functions used after init

async function getBusStops() {
	try {
		const response = await fetch(stopaddress);
		const data = await response.json();
		busStops = data.data;
		console.log('BUS STOPS ', busStops);

		console.log('Bus Stops data loaded successfully.');
	} catch (error) {
		console.error('Error fetching bus stops:', error);
	}
}

// map data
async function trackBuses() {
	try {
		// Get data from MBTA API
		const response = await fetch(busesLoaction);
		const data = await response.json();
		busList = data.data;

		console.log('BusList:', busList);

		// Extract bus labels AND ids

		const busLabel0 = busList[0].attributes.label;
		const busStop0 = busList[0].relationships.stop.data.id;
		console.log('Bus Labels:', busLabel0);
		console.log('Bus Stop:', busStop0);

		// Update markers
		busList.forEach((bus) => {
			const id = bus.id;

			const markerItem = getElement(id);

			if (markerItem) {
				// Move marker
				moveMarker(bus);
			} else {
				// Add Marker
				addMarker(bus);
			}
		});

		// Clear the existing table data
		const busStopsTableBody = document.getElementById('busStopsTableBody');
		busStopsTableBody.innerHTML = '';

		// Populate the table with bus stop data
		busList.forEach((bus, index) => {
			//find the stop id
			let id = bus.relationships.stop.data.id;
			// based on this id find busStop element with thid id
			let matchingStop = busStops.find((stop) => stop.id === id);
			if (matchingStop) {
				const row = document.createElement('tr');
				row.innerHTML = `
		      <th scope="row">${index + 1}</th>
					
		      <td>${bus.attributes.label}</td>
		      <td>${matchingStop.attributes.at_street}</td>
		      <td>${bus.relationships.stop.data.id}</td>
		    `;
				busStopsTableBody.appendChild(row);
			}
		});
	} catch (error) {
		console.error('Error:', error);
	}
}

//check marker if it exists
function getElement(id) {
	let markerItem = markers.find((item) => {
		return item.id === id;
	});
	//if (markerItem) print("getElement marker return ===>  " + markerItem.id);
	return markerItem;
}

//Move Marker
function moveMarker(bus) {
	let markerItem = markers.find(function (item) {
		return item.id === bus.id;
	});

	markerItem.marker.setLngLat([
		bus.attributes.longitude,
		bus.attributes.latitude,
	]);

	markerItem.marker.color = getColor(bus);
	//markerItem.marker._color = getColor(bus);
}

// Create a new marker.
function addMarker(bus) {
	let dir = bus.attributes.direction_id; //bus direction
	let id = bus.id;

	let nwmarker = {
		id: id,
		marker: new mapboxgl.Marker({
			color: getColor(bus),
		})
			.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
			.addTo(map),
	};
	//print('markerItem  added : ' + nwmarker.id);
	markers.push(nwmarker);
}

// color of the marker
function getColor(bus) {
	const direction = bus.attributes.direction_id;

	if (direction === 0) return inboundColor;
	if (direction === 1) return outboundClor;
}

window.onload = init();
