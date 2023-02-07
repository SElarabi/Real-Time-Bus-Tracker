/** @format */

const url =
  "https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]=1&include=trip";
// get token at https://account.mapbox.com

mapboxgl.accessToken =
  "pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg";

const markers = [];
const dataArray = [];

//Load map
function init() {
  var map = new mapboxgl.Map({
    container: "map", // div id
    style: "mapbox://styles/mapbox/streets-v11", // style
    center: [-71.101, 42.358], // location [lng, lat]
    zoom: 12, // zoom
  });
  addMarkers();
}

// Add bus markers to map
async function addMarkers() {
  // get bus data
  var location = await getBusLocations();
  console.log(location);

  location.forEach((bus) => {
    var marker = getMarker(bus.id);
    if (marker) {
      moveMarker(marker, bus);
    } else {
      addMarker(bus);
    }
  });

  //timer

  setTimeout(addMarkers, 15000);
}

// GD
async function getBusLocations() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

function getMarker(id) {
  var marker = markers.find(function (item) {
    return item.id === id;
  });
  return marker;
}

function addMarker(bus) {
  var icon = getIcon(bus);

  var marker = new mapboxgl.Marker().setLngLat([
    bus.attributes.latitude,
    bus.attributes.longitude,
  ]);

  //marker.addTo(map);
  markers.push(marker);
  console.log("longitude =" + bus.attributes.longitude);
  console.log(" icon ====================== " + icon);
}

function moveMarker(marker, bus) {
  // change icon if bus has changed direction
  var icon = getIcon(bus);
  console.log(icon);
  marker.setIcon(icon);

  // move icon to new lat/lon

  marker.setLngLat(bus.attributes.longitude, bus.attributes.latitude);

  //marker.update();
  //marker.addTo(map); display the icon
  console.log("updated icon ===== " + icon);
}

function getIcon(bus) {
  // select icon based on bus direction
  // console.log(
  //   "bus.attributes.direction_id == " + bus.attributes.direction_id
  // );
  if (bus.attributes.direction_id === 0) {
    return "red.png";
  }
  return "blue.png";
}

window.onload = init();
