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
    parsed.dates.push(observation.close_approach_date)
    parsed.orbiting_body.push(observation.orbiting_body)
    parsed.distances.push(observation.miss_distance.kilometers)
    parsed.velocity.push(observation.relative_velocity.kilometers_per_hour)
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
    document.getElementById('asteriodNameId').innerHTML = name;

    if (hazardous === true) {
      document.getElementById('asteroidInfoId').innerHTML = `Asteroid ${name} is potentially hazardous, thus we want to see the trend as it gets closer and predict it's potential arrival.`;
    } else {
      document.getElementById('asteroidInfoId').innerHTML = `Asteroid ${name} is not hazardous, but it's nice to keep track of this lovely rock.`;
    }

    buildTable(dates, orbiting_body, distances, velocity);
    // buildPlot(dates, orbiting_body, distances, velocity);
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

getAsteroidData();

