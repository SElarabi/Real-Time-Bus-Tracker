/** @format */

const busesLoaction = `https://api-v3.mbta.com/vehicles?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1`;

const stopaddress = `https://api-v3.mbta.com/stops?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1`;

mapboxgl.accessToken =
	'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';

let busList = [];
let markers = [];
let buses = [];
let busStops = [];
let toBostonStops = [];
let toHarvardStops = [];

const map = new mapboxgl.Map({
	container: 'map', // div id
	style: 'mapbox://styles/mapbox/streets-v12', // style
	center: [-71.101, 42.358], // location [lng, lat]
	zoom: 12, // zoom
});

//initialize the map
function init() {
	console.log('APP STARTING');
	// Create marker  MIT location
	const marker = new mapboxgl.Marker({
		color: '#FF3F',
	})
		.setLngLat([-71.0942, 42.3601])
		.addTo(map);

	// Load Bus stops data
	getBusStops();
	// track buses
	trackBuses();
	// Track buses every 5 seconds
	setInterval(trackBuses, 5000);
}

//Functions used after init
// GET BUS STOPS
async function getBusStops() {
	try {
		const response = await fetch(stopaddress);
		const data = await response.json();
		busStops = data.data;
		console.log('BUS STOPS ', busStops);
		toBostonStops = busStops.slice(0, 24);
		console.log('TO BOSTON STOPS ', toBostonStops);
		toHarvardStops = busStops.slice(23, 47).reverse();
		console.log('TO HARVARD STOPS ', toHarvardStops);

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

		//console.log('BusList:', busList);

		// Update markers
		busList.forEach((bus) => {
			const id = bus.id;

			const markerItem = getElement(id);

			if (markerItem) {
				// console.log('markerItem', markerItem);
				markerItem.customMarkerElement.style.backgroundColor = getColor(bus);
				// Move marker
				moveMarker(bus);
			} else {
				// Add Marker
				addMarker(bus);
			}
		});
		//HARVARD TABLE SECTION
		// Clear the existing table data
		const toHarvardStopsTableBody = document.getElementById(
			'toHarvardStopsTableBody'
		);
		toHarvardStopsTableBody.innerHTML = '';

		// Populate the table with bus stop data
		toHarvardStops.forEach((stop, index) => {
			//find the stop id
			let id = stop.id;
			let station = stop.attributes.at_street;
			// based on this id find bus element with thi id
			let matchingBus = busList.find(
				(bus) => bus.relationships.stop.data.id === id
			);

			const row = document.createElement('tr');
			row.innerHTML = `
		      <th scope="row">${index + 1}</th>
					<td class=" station-cell ">${station ? station : stop.attributes.name}</td>
					<td class=" bus-cell-green ${
						matchingBus && matchingBus.attributes.direction_id === 0
							? 'flash-text'
							: ''
					}">
    ${
					matchingBus && matchingBus.attributes.direction_id === 0
						? matchingBus.attributes.label
						: '--'
				}
  </td>
					
				 `;

			toHarvardStopsTableBody.appendChild(row);
		});
		// BOSTON TABLE SECTION
		// Clear the existing table data
		const toBostonStopsTableBody = document.getElementById(
			'toBostonStopsTableBody'
		);
		toBostonStopsTableBody.innerHTML = '';

		// Populate the table with bus stop data
		toBostonStops.forEach((stop, index) => {
			//find the stop id
			let id = stop.id;
			let station = stop.attributes.at_street;
			// based on this id find bus element with thi id
			let matchingBus = busList.find(
				(bus) => bus.relationships.stop.data.id === id
			);

			const row = document.createElement('tr');
			row.innerHTML = `
			    
						<td class=" bus-cell-red ${
							matchingBus && matchingBus.attributes.direction_id === 1
								? 'flash-text'
								: ''
						}">
		  ${
					matchingBus && matchingBus.attributes.direction_id === 1
						? matchingBus.attributes.label
						: '--'
				}
		</td>
		<td class=" station-cell ">${station ? station : stop.attributes.name}</td>
		<th scope="row">${index + 1}</th>
					 `;

			toBostonStopsTableBody.appendChild(row);
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
}

// Create a new marker.
function addMarker(bus) {
	let dir = bus.attributes.direction_id; // bus direction
	let id = bus.id;

	const customMarkerElement = document.createElement('div');
	customMarkerElement.className = 'custom-marker';

	// Set the initial background color based on direction
	let backgroundColor = getColor(bus);
	customMarkerElement.style.backgroundColor = backgroundColor;

	// Create a label element for bus ID
	const labelElement = document.createElement('div');
	labelElement.className = 'label';
	labelElement.textContent = bus.attributes.label;

	// Style the label to center it within the custom marker element
	labelElement.style.position = 'absolute';
	labelElement.style.top = '50%';
	labelElement.style.left = '50%';
	labelElement.style.transform = 'translate(-50%, -50%)';

	// Append the label to the custom marker element
	customMarkerElement.appendChild(labelElement);

	let nwmarker = {
		id: id,
		marker: new mapboxgl.Marker({
			element: customMarkerElement,
			anchor: 'bottom', // Set anchor point to the bottom of the marker
		})
			.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
			.addTo(map),
		customMarkerElement: customMarkerElement, // Store the custom marker element
		labelElement: labelElement, // Store the label element
	};

	markers.push(nwmarker);
}

// color of the marker
function getColor(bus) {
	let direction = bus.attributes.direction_id;

	if (direction === 0) return 'green';
	if (direction === 1) return 'red';
}

window.onload = init();
