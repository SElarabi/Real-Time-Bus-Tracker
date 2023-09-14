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

const map = new mapboxgl.Map({
	container: 'map', // div id
	style: 'mapbox://styles/mapbox/streets-v12', // style
	center: [-71.101, 42.358], // location [lng, lat]
	zoom: 12, // zoom
});
// Create a custom marker element

//initialize the map
function init() {
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

	//trackBusStops();
}

async function trackBusStops() {
	const response = await fetch(stopaddress);
	const data = await response.json();
	const terminusList = data.data;
	console.log('bus Stops ====>');
	console.log(data);
	const terminus = terminusList.map((x) => x.attributes.name);
	console.log('terminus', terminus);
	//setTimeout(trackBusStops, 10000);
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
		const busLabels = busList.map((bus) => bus.attributes.label);
		console.log('Bus Labels:', busLabels);

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
		console.log('Markers after timeout:', markerLabel);
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
	print('markerItem  added : ' + nwmarker.id);
	markers.push(nwmarker);
}

// color of the marker
function getColor(bus) {
	const direction = bus.attributes.direction_id;

	if (direction === 0) return inboundColor;
	if (direction === 1) return outboundClor;
}

// console print
function print(x) {
	console.log(x);
}

window.onload = init();
