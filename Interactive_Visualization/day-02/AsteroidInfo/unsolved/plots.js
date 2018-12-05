// Apply for an api key at NASA to get your fill of space data! Or empty space?
// https://api.nasa.gov/index.html#apply-for-an-api-key
var apiKey = "";

// Pick an asteroid ID(neo_reference_id) of your choice! 
  // Open the below url in your browser to retrieve an example list of asteroid's info given a time period.
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-07&end_date=2018-09-08&api_key=${apiKey}
      // Replace ${apiKey} with your apiKey retrieved earlier and review the response output.
var asteroidID = "";


// ======================= BEGIN Function parseData ==================================
// This function should parse the data output from your api query.
  // Should then return an object with each of the following keys and value as an array.
    // "dates", "orbiting_body", "distances", "velocity"
// Suggestion: Create this function when you have reviewed your api's result. 
function parseData(data) {
  var parsed = {
    dates: [],
    orbiting_body: [],
    distances: [],
    velocity: []
  }

  // For each row of data, add data to "parsed" if it's related to "Earth"





  

  return parsed
}
// ======================= END Function parseData ==================================

// ======================= BEGIN Function getAsteroidData ==================================
function getAsteroidData() {
  var queryUrl = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=${apiKey}`;
  
  // Using d3, get the json data from the below url and retrieve the following information:
  
    // Retrieve "name", "hazardous", "parsed", "dates", "orbiting_body", "distances", and "velocity"

    







    // Update the html element id "asteroidNameId" with the name retrieved above.


    // OPTIONAL: add a check if the asteroid is hazardous and 
      // update the HTML element id "asteroidInfoId" with a message stating whether it's dangerous.







    // Execute the functions "buildTable" and "buildPlots"


}

// ======================= END Function getAsteroidData ==================================

// ======================= BEGIN Function buildTable ==================================

function buildTable(dates, orbiting_body, distances, velocity) {
  // buildTable function should take in "dates", "orbiting_body", "distances", and "velocity" as arguments
  // Using d3 append the information to your html table body as "td" elements (NOTE: table has an element id of "summary-table").
    // Added from latest to earliest date.

    







}
// ======================= END Function buildTable ==================================

// ======================= BEGIN Function buildPlots ==================================
function buildPlots(name, dates, distances, velocity) {
  // buildPlots function should take in "name", "dates", "distances", and "velocity" as arguments
  // =================== Adding plot 1 ==========================
    // Create your trace and layout, then plot onto HTML element id "plot".









 
    







  

  // Plotly.newPlot("plot", data, layout);

  // =================== Adding plot 2 ==========================
    // Create your trace and layout, then plot onto HTML element id "plot2".
  
    


















  // Plotly.newPlot("plot2", data2, layout2);
}
// ======================= END Function buildPlots ==================================

// Execute your function "getAsteroidData" created earlier inorder to plot info.
getAsteroidData();
