// Apply for an api key at NASA to get your fill of space data! Or empty space?
// https://api.nasa.gov/index.html#apply-for-an-api-key
var apiKey = "";

// Pick an asteroid ID(neo_reference_id) of your choice! 
  // Open the below url in your browser to retrieve an example list of asteroid's info given a time period.
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-07&end_date=2018-09-08&api_key=${apiKey}
      // Replace ${apiKey} with your apiKey retrieved earlier and review the response output.
var asteroidID = "3542519";


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
  data.forEach(function (observation) {
    if (observation.orbiting_body === "Earth") {
      parsed.dates.push(observation.close_approach_date)
      parsed.orbiting_body.push(observation.orbiting_body)
      parsed.distances.push(observation.miss_distance.kilometers)
      parsed.velocity.push(observation.relative_velocity.kilometers_per_hour)
    }
  })

  return parsed
}
// ======================= END Function parseData ==================================

// ======================= BEGIN Function getAsteroidData ==================================
function getAsteroidData() {
  var queryUrl = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=${apiKey}`;
  
  // Using d3, get the json data from the below url and retrieve the following information:
  d3.json(queryUrl).then(function (data) {
    // Retrieve "name", "hazardous", "parsed", "dates", "orbiting_body", "distances", and "velocity"
    var name = data.name;
    var hazardous = data.is_potentially_hazardous_asteroid;
    var parsed = parseData(data.close_approach_data)
    var dates = parsed.dates;
    var orbiting_body = parsed.orbiting_body;
    var distances = parsed.distances;
    var velocity = parsed.velocity;

    // Update the html element id "asteroidNameId" with the name retrieved above.
    document.getElementById('asteroidNameId').innerHTML = name;

    // OPTIONAL: add a check if the asteroid is hazardous and 
      // update the HTML element id "asteroidInfoId" with a message stating whether it's dangerous.
    if (hazardous === true) {
      document.getElementById('asteroidInfoId').innerHTML = `Asteroid ${name} is potentially hazardous, thus we want to see the trend as it gets closer and predict it's potential arrival.`;
    } else {
      document.getElementById('asteroidInfoId').innerHTML = `Asteroid ${name} is not hazardous, but it's nice to keep track of this lovely rock.`;
    }

    // Execute the functions "buildTable" and "buildPlots"
    buildTable(dates, orbiting_body, distances, velocity);
    buildPlots(name, dates, distances, velocity);
  });
}

// ======================= END Function getAsteroidData ==================================

// ======================= BEGIN Function buildTable ==================================

function buildTable(dates, orbiting_body, distances, velocity) {
  // buildTable function should take in "dates", "orbiting_body", "distances", and "velocity" as arguments
  // Using d3 append the information to your html table body as "td" elements (NOTE: table has an element id of "summary-table").
    // Added from latest to earliest date.
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = dates.length -1; i >= 0; i--) {
    trow = tbody.append("tr");
    trow.append("td").text(dates[i]);
    trow.append("td").text(orbiting_body[i]);
    trow.append("td").text(distances[i]);
    trow.append("td").text(velocity[i]);
  }
}
// ======================= END Function buildTable ==================================

// ======================= BEGIN Function buildPlots ==================================
function buildPlots(name, dates, distances, velocity) {
  // buildPlots function should take in "name", "dates", "distances", and "velocity" as arguments
  // =================== Adding plot 1 ==========================
    // Create your trace and layout, then plot onto HTML element id "plot".
  var trace1 = {
    x: dates,
    y: distances,

    mode: "lines+markers",
    name: "Distance",
    marker: {
      color: "red",
      size: 5,
      symbol: "x",
      opacity: 0.4
    },
    line: {
      color: 'rgb(0,0,255)',
      width: 0.5,
      dash: 'dot'
    }
  };


  var data = [trace1];
  var layout = {
    title: `Distance By Date ${name}`,
    xaxis: {
      title: "Date"
    },
    yaxis: {
      title: "Distance(km)"
    },
    showlegend: true
  };
  

  Plotly.newPlot("plot", data, layout);

  // =================== Adding plot 2 ==========================
    // Create your trace and layout, then plot onto HTML element id "plot2".
  var trace2 = {
    x: dates,
    y: velocity,

    mode: "lines+markers",
    name: "Velocity",
    marker: {
      color: "blue",
      size: 5,
      symbol: "circle",
      opacity: 0.4
    },
    line: {
      color: 'rgb(0,255,0)',
      width: 0.5,
      dash: 'dot'
    }
  };

  var data2 = [trace2];
  var layout2 = {
    title: `Velocity By Date ${name}`,
    xaxis: {
      title: "Date"
    },
    yaxis: {
      title: "Velocity(km)"
    },
    showlegend: true
  };


  Plotly.newPlot("plot2", data2, layout2);
}
// ======================= END Function buildPlots ==================================

// Execute your function "getAsteroidData" created earlier inorder to plot info.
getAsteroidData();
