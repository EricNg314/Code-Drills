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

  


  

  return reformatted;
};

var whale_list_reformat = parseData(whale_list);
console.log(whale_list_reformat)

function buildPlot() {

  // TODO: Setup your the data you'll be passing into your plot.
  var data = [{
   
    






  }]

  // TODO: Setup your layout for your chart.
  // NOTE: Would recommend looking into geo.lonaxis and geo.lataxis
  var layout = {
   
    






    
  };

  Plotly.newPlot("plot", data, layout);

}

buildPlot();
