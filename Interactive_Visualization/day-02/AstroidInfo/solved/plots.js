// Apply for an api key at NASA to get your fill of space data! Or empty space?
// https://api.nasa.gov/index.html#apply-for-an-api-key
var apiKey = "";

// Pick an asteroid ID(neo_reference_id) of your choice! 
// Open the below url in your browser to retrieve an example list of asteroids given a time period.
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-07&end_date=2018-09-08&api_key=${apiKey}
var asteroidID = "3542519";

function parseData(data) {
  var parsed = {
    dates: [],
    orbiting_body: [],
    distances: [],
    velocity: []
  }
  console.log(data)

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

function getAsteroidData() {

  var queryUrl = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=${apiKey}`;
  d3.json(queryUrl).then(function (data) {
    var name = data.name;
    var hazardous = data.is_potentially_hazardous_asteroid;
    var parsed = parseData(data.close_approach_data)
    var dates = parsed.dates;
    var orbiting_body = parsed.orbiting_body;
    var distances = parsed.distances;
    var velocity = parsed.velocity;
    console.log(name)
    document.getElementById('asteroidNameId').innerHTML = name;

    if (hazardous === true) {
      document.getElementById('asteroidInfoId').innerHTML = `Asteroid ${name} is potentially hazardous, thus we want to see the trend as it gets closer and predict it's potential arrival.`;
    } else {
      document.getElementById('asteroidInfoId').innerHTML = `Asteroid ${name} is not hazardous, but it's nice to keep track of this lovely rock.`;
    }

    buildTable(dates, orbiting_body, distances, velocity);
    buildPlots(name, dates, distances, velocity);
  });
}

function buildTable(dates, orbiting_body, distances, velocity) {
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < 12; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(dates[i]);
    trow.append("td").text(orbiting_body[i]);
    trow.append("td").text(distances[i]);
    trow.append("td").text(velocity[i]);
  }
}

function buildPlots(name, dates, distances, velocity) {

  var trace1 = {
    x: dates,
    y: distances,

    mode: "lines+markers",
    name: "Distance",
    marker: {
      color: "red",
      size: 20,
      symbol: "x",
      opacity: 0.4
    },
    line: {
      color: 'rgb(0,0,255)',
      width: 3,
      dash: 'dot'
    }
  };

  var trace2 = {
    mode: "line",
    x: dates,
    y: velocity,
    name: "Velocity",
    yaxis: "y2",
    line: {
      color: 'rgb(0,255,0)',
      width: 3,
      dash: 'solid'
    }
  };

  // var data = [trace1, trace2];
  var data = [trace1];
  var layout = {
    title: `Distance and Velocity By Date ${name}`,
    xaxis: {
      title: "Date"
    },
    yaxis: {
      title: "Distance"
    },
    yaxis2: {
      title: "Velocity",
      side: 'right'
    },
    showlegend: true
  };

  Plotly.newPlot("plot", data, layout);

}


// // BONUS - Dynamically add the current date to the report header
// var monthNames = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var today = new Date();
// var date = `${monthNames[today.getMonth()]} ${today.getFullYear().toString().substr(2, 2)}`;

// d3.select("#report-date").text(date);







getAsteroidData();


