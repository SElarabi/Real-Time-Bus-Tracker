<!-- @format -->

# Real-Time Bus Tracker

Explore the live site: [Real-Time Bus Tracker](https://selarabi.github.io/Real-Time-Bus-Tracker/)

## Overview

Welcome to the Real-Time Bus Tracker! This dynamic web application, powered by JavaScript and enhanced with CSS animations, offers a real-time visualization of bus locations on an interactive map. The heart of this system lies in the Mapbox API, which brings these bus locations to life as custom icons.

## How It Works

1. **Initialization**: The journey begins with the `mapanimation.js` script. It sets the stage by initializing a Mapbox map with predefined styling and a central focus point.

2. **MIT Landmark Marker**: We've thoughtfully included an MIT marker to help users orient themselves on the map.

3. **Bus Stop Data**: To track buses effectively, we gather data about bus stops along the route. This data becomes instrumental in monitoring buses' progress.

4. **Marker Magic**: The `addMarkers` function works behind the scenes to retrieve bus data from the MBTA API and update the map with markers for each bus. The markers' colors provide at-a-glance information about the bus's direction.

## Key Functions

- `getBusStops()`: Organizes bus stop data into two arrays—one for inbound buses (from Harvard to Boston) and the other for outbound buses (from Boston to Harvard).

- `trackBuses()`: This function runs like clockwork, updating bus location markers and data tables every 10 seconds. It leverages the fetch API for data retrieval and the Mapbox API for seamless map and marker manipulation.

- `getElement(id)`: A handy utility function to check if a marker element exists.

- `moveMarker()`: Updates the associated marker for a given bus element.

- `addMarker(bus)`: Creates a new marker for a bus element.

- `getColor(bus)`: Determines marker colors based on bus direction: green for buses heading to Harvard and red for buses leaving Harvard.

## Dependencies

- To unlock the full potential of this website, you'll need a Mapbox API key, granting access to map-related functionalities. <link href ="https://docs.mapbox.com/mapbox-gl-js/api/ "> for documentation and sign up.

- We've tastefully styled this website using Bootstrap CSS and complemented it with custom styling in the `style.css` file.

## Bootstrap CDN Links

- Bootstrap CSS:
  ```html
  <link
  	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  	rel="stylesheet"
  	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  	crossorigin="anonymous"
  />
  /* MIT License
  ```

Copyright (c) 2023 Eddie Larabi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,
OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\*/
