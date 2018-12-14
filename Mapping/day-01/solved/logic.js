// Store our API endpoint inside queryUrl
var queryUrl = "https://data.humdata.org/dataset/a60ac839-920d-435a-bf7d-25855602699d/resource/7234d067-2d74-449a-9c61-22ae6d98d928/download/volcano.json";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(volcanoData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the volcano
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.V_Name +
      "</h3><hr><p> Volcanic Explosivity Index: " + feature.properties.VEI_Holoce + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the volcanoData object
  // Run the onEachFeature function once for each piece of data in the array
  var volcanos = L.geoJSON(volcanoData, {
    onEachFeature: onEachFeature
  });

  // Sending our volcanos layer to the createMap function
  createMap(volcanos);
}

function createMap(volcanos) {

  // Define streetmap and darkmap layers
  var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
  });

  var terrain = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.mapbox-terrain-v2",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Satellite": satellite,
    "Terrain": terrain
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    volcanos: volcanos
  };

  // Create our map, giving it the streetmap and volcanos layers to display on load
  var myMap = L.map("map", {
    center: [
      35.68, 139.69
    ],
    zoom: 5,
    layers: [satellite, volcanos]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
