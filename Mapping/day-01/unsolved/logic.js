// Store our API endpoint inside queryUrl
var queryUrl = "https://data.humdata.org/dataset/a60ac839-920d-435a-bf7d-25855602699d/resource/7234d067-2d74-449a-9c61-22ae6d98d928/download/volcano.json";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(volcanoData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the VEI (volcanic explosivity index)
  
  // Create a GeoJSON layer containing the features array on the volcanoData object
  // Run the onEachFeature function once for each piece of data in the array

  // Send the volcanos layer to the createMap function

}

function createMap(volcanos) {

  // Define satellite and terrain layers
  var satellite = L.tileLayer(


  );

  var terrain = L.tileLayer(


  );

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
   

  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {


  };

  // Create our map, giving it the satellite and volcanos layers to display on load, set the intial zoom to be Tokyo, Japan
  var myMap = L.map("map", {
 

    
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
