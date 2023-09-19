<!-- @format -->

# Real-Time Bus Tracker

Visit the site: [Real-Time Bus Tracker](https://selarabi.github.io/Real-Time-Bus-Tracker/)

## Description

This webpage is powered by JavaScript and enhanced with CSS animations to provide a dynamic display of bus locations in real-time. It leverages the Mapbox API to showcase these locations using customized icons on a map.

## How It Runs

The code in the `mapanimation.js` file will initially load a Mapbox map with a set style and center point.

1. **MIT Marker**: It adds an MIT marker landmark to the map.

2. **Fetching Bus Stops Data**: The code fetches bus stop data and starts tracking related buses running along these bus stops using markers for display.

3. **Adding Markers**: The `addMarkers` function retrieves the bus data from the MBTA API and adds/updates markers on the map for each bus. The bus data includes the bus id, latitude, and longitude. A marker icon color is determined based on the bus's direction.

## Functions

- `getBusStops()`: Fetches data for all bus stops and subdivides them into two arrays, one for inbound (leaving Harvard going to Boston) and the other for outbound (coming from Boston to Harvard as the final destination).

- `trackBuses()`: Is executed every 10 seconds to update the bus location markers and displayed data tables. The code uses the fetch API for data retrieval and the Mapbox API for map and marker manipulation.

- `getElement(id)`: Checks if a marker exists.

- `moveMarker()`: Takes a bus element as an argument and updates its associated marker accordingly.

- `addMarker(bus)`: Takes a bus element and creates an associated new marker.

- `getColor(bus)`: Updates the marker color based on its direction to Harvard or Boston. Green markers are for those heading to Harvard, and red markers are for those leaving from Harvard.

This website was built using the Mapbox API, which will require an API key to access the map functionality. Additionally, Bootstrap CSS and custom styling were used to design the site.

## Bootstrap CDN Links

- Bootstrap CSS:
  ```html
  <link
  	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  	rel="stylesheet"
  	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  	crossorigin="anonymous"
  />
  <h2>License</h2>
  ```

<p><strong>MIT License</strong> (c) 2023 Eddie Larabi</p>

<p>This project is open-source and available under the MIT License, granting permission to use, modify, and distribute the software. Please refer to the LICENSE file for more details.</p>
