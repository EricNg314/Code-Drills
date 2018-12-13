console.log('app.js loaded');

// console.log(whale_list);

// Reformat whale_list:

function parseData(arr){
  var reformatted = {
    lat: [],
    lon: [],
    hover_text: []
  };

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

  var data = [{
    "type": "scattergeo",
    // "locationmode": "ISO-3",
    // "locationmode": "USA-states",
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
