<!-- @format -->

# Real-Time-Bus-Tracker
Visit site: https://selarabi.github.io/Real-Time-Bus-Tracker/ 

## Description ##
<p>
This webage is run by a Javascript code to display the
real-time location of buses as icons on a map using Mapbox API.the real-time locations of buses in a route on a map using the Mapbox API. 

## How to Run ##
      
The code in the js file mapanimation.js  first loads a Mapbox map with a set style and center point. <br>
Then, the addMarkers function retrieves the bus data from the MBTA API and adds/updates markers on the map for each bus. <br>
The bus data includes the bus id, latitude, and longitude. A marker icon color is determined based on the bus's direction. <br>
The addMarkers function is executed every 15 seconds to update the bus locations.<br>
The code uses the fetch API for data retrieval and the Mapbox API for map and marker manipulation.
</p>

<p>
This website was build using Mapbox API which will require API key in order to get access to use map.
The navigation bar has 2 elements (Portfolio and Project sites ) which allow to navigate and explore other projects  their repositories and their sites.<br>
This website was built using bootsrap styling with other defined styling included in style.css file.
      
</p>
Bootstrap CSS and JS files are accessible using the following CDN links references without the need for downloading the files and include them in the project files. 
<p>
Bootstrap CSS link 
      
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"/>
   
      
<p/>
<p>
  Bootstrap JS and popper, the order in wich the bootstrap javascript are called is:  Popper.js, then Bootstrap JS
  
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
      crossorigin="anonymous">
    </script>
  
  </p>

## Roadmap of future improvements ##
This website is in progress, originaly was a set with google API but the API Key was expired, free key with Mapbox was an alternative to be used, the code is still to be adjusted and modified to display the icon ontop of the map. 
At this point the data can be seen in console log.
- Adjust code to display animated icons.


## MIT License ##
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
