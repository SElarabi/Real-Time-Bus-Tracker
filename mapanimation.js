/** @format */
const busesLoaction =
  "https://api-v3.mbta.com/vehicles?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1";

const stopaddress =
  "https://api-v3.mbta.com/stops?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1";

async function getdata() {
  const response = await fetch(stopaddress);
  const data = response.data;

  print(data);
}

mapboxgl.accessToken =
  "pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg";

const markers = [];
const buses = [];
const inboundColor = "#00FF00";
const outboundClor = "#FF0000";

const map = new mapboxgl.Map({
  container: "map", // div id
  style: "mapbox://styles/mapbox/streets-v12", // style
  center: [-71.101, 42.358], // location [lng, lat]
  zoom: 12, // zoom
});

//initialize the map
function init() {
  // Create marker  MIT location
  const marker = new mapboxgl.Marker({
    color: "#FF3F",
  })
    .setLngLat([-71.0942, 42.3601])
    .addTo(map);

  // track buses
  trackBuses();

  // Update Bus stops data
  trackBusStops();
}

async function trackBusStops() {
  const response = await fetch(stopaddress);
  const data = await response.json();
  const terminusList = data.data;
  print("bus Stops ====>");
  print(data);
  const terminus = terminusList.map((x) => x.attributes.name);
  print(terminus);
  //setTimeout(trackBusStops, 10000);
}

// map data
async function trackBuses() {
  // get data from MBTA API
  try {
    const response = await fetch(busesLoaction);
    const data = await response.json();

    let busList = data.data;
    //print(" Updated bus list  : ");
    print(busList);
    const busLabel = busList.map((m) => m.attributes.label);
    //print(busLabel);

    // update markers
    busList.forEach((bus) => {
      let id = bus.id;
      let markerItem = getElement(id);
      //print("marker id =>" + getElement(id));

      if (markerItem) {
        //move marker
        moveMarker(bus);
      } else {
        //add Marker and update the buses list
        addMarker(bus);
      }
    });

    //setTimeout(trackBuses, 5000);

    const markerLabel = markers.map((x) => x.id);
    print("Markers aftertimeout ====> ");
    print(markerLabel);
  } catch {}
}

//check on the marker if it exists
function getElement(id) {
  let markerItem = markers.find(function (item) {
    return item.id === id;
  });
  //if (markerItem) print("getElement marker return ===>  " + markerItem.id);
  return markerItem;
}

//Move Marker
function moveMarker(bus) {
  //print("Marker en move ========> " + bus.id);
  let markerItem = markers.find(function (item) {
    return item.id === bus.id;
  });

  markerItem.marker.setLngLat([
    bus.attributes.longitude,
    bus.attributes.latitude,
  ]);

  markerItem.marker._color = getColor(bus);
  //print(getColor(bus));
}

// Create a new marker.
function addMarker(bus) {
  let dir = bus.attributes.direction_id;
  let id = bus.id;
  let nwmarker = {
    id: id,
    marker: new mapboxgl.Marker({
      color: getColor(bus),
    })
      .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
      .addTo(map),
  };
  print("markerItem  added = = > " + nwmarker.id);
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
