<!-- @format -->

# Real-Time-Bus-Tracker

<h3>Description</h3>
<p>
This is a JavaScript code to display the real-time locations of buses in a route on a map using the Mapbox API. The code first loads a Mapbox map with a set style and center point. <br>
Then, the addMarkers function retrieves the bus data from the MBTA API and adds/updates markers on the map for each bus. <br>
The bus data includes the bus id, latitude, and longitude. A marker icon color is determined based on the bus's direction. <br>
The addMarkers function is executed every 15 seconds to update the bus locations.<br>
The code uses the fetch API for data retrieval and the Mapbox API for map and marker manipulation.
</p>
<br>
<h3>MIT License </h3>
<p>Copyright (c) 2023 Eddie Larabi</p>

<p>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</p>
