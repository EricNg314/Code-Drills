// NOTE: We've placed "whale_list" as an array into javascript that from flask.
console.log(whale_list);

// Function to reformat whale_list:
function parseData(arr) {
  var reformatted = {
    lat: [],
    lon: [],
    hover_text: []
  };

  // TODO: Create a loop that will parse through "arr" and push values to reformatted object.
  for (var i = 0; i < arr.length; i++) {
    reformatted['lat'].push(arr[i]['latitude']);
    reformatted['lon'].push(arr[i]['longitude']);
    reformatted['hover_text'].push('Description: ' + arr[i]['description']);
  };

  return reformatted;
};

var whale_list_reformat = parseData(whale_list);
console.log(whale_list_reformat)

function buildPlot() {

  // TODO: Setup your the data you'll be passing into your plot.
  var data = [{
    "type": "scattergeo",
    "lat": whale_list_reformat['lat'],
    "lon": whale_list_reformat['lon'],
    "text": whale_list_reformat['hover_text'],
    "hoverinfo": "text",
    "marker": {
      "size": 50,
      "line": {
        "color": "rgb(8,8,8)",
        "width": 1
      },
    }
  }]

  // TODO: Setup your layout for your chart.
  // NOTE: Would recommend looking into geo.lonaxis and geo.lataxis
  var layout = {
    scope: "world",
    title: "Whale Sightings",
    showlegend: false,
    height: 600,
    // width: 980,
    geo: {
      scope: "north america",
      // projection: {
      //   type: "natural earth"
      // },
      lonaxis: {
        'range': [-133, -119.0]
      },
      lataxis: {
        'range': [46.5, 50.2]
      },
      showland: true,
      landcolor: "rgb(217, 217, 217)",
      subunitwidth: 1,
      countrywidth: 1,
      showocean: true,
      subunitcolor: "rgb(255,255,255)",
      countrycolor: "rgb(255,255,255)"
    }
  };

  Plotly.newPlot("plot", data, layout);

}

buildPlot();
