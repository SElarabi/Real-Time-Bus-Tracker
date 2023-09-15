/** @format */
const busesLoaction =
	'https://api-v3.mbta.com/vehicles?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1';

const stopaddress =
	'https://api-v3.mbta.com/stops?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1';

async function getdata() {
	const response = await fetch(stopaddress);
	const data = await response.data;

	console.log('STOP ADDRESS DATA ', data);
}

mapboxgl.accessToken =
	'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';
const busList = [];
const markers = [];
const buses = [];
const inboundColor = 'rgb(33, 126, 15)';
const outboundClor = '#FF0000';
const busStops = [];

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
		const busStops = data.data;
		console.log('terminusList ', busStops);
		// Clear the existing table data
		const busStopsTableBody = document.getElementById('busStopsTableBody');
		busStopsTableBody.innerHTML = '';

		// Populate the table with bus stop data
		busStops.forEach((stop, index) => {
			const row = document.createElement('tr');
			row.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${stop.attributes.at_street}</td>
        <td>${stop.id}</td>
      `;
			busStopsTableBody.appendChild(row);
		});
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
		const busList = data.data;

		console.log('BusList:', busList);

		// Extract bus labels
		//const busLabels = busList.map((bus) => bus.attributes.label);
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

		const markerLabel = markers.map((marker) => marker.id);
		//console.log('Markers after timeout:', markerLabel);
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
