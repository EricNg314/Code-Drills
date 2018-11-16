// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string
var parseTime = d3.timeParse("%B");

// Load data from pokemon_go.csv
d3.csv("pokemon_go.csv", function(error, pokemonData) {

  // Throw an error if one occurs
  if (error) throw error;


  // Format the date and cast the miles value to a number
  pokemonData.forEach(function(data) {
    data.mystic = +data.mystic;
    data.valor = +data.valor;
    data.instinct = +data.instinct;
  });

    // Print the milesData
    console.log(pokemonData);

   // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xBandScale = d3.scaleBand()
    .range([0, chartWidth])
    .domain(pokemonData.map(d => d.communityDay))
    .padding(1);

  // Configure a linear scale with a range between the chartHeight and 0
  // Set the domain for the yLinearScale for 0 to 100
  var yLinearScale = d3.scaleLinear()
    .range([chartHeight, 0])
    .domain([0, 100]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xBandScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Configure a drawLine function which will use our scales to plot the line's points
  var mysticLine = d3
    .line()
    .x(data => xBandScale(data.communityDay))
    .y(data => yLinearScale(data.mystic));

    var valorLine = d3
    .line()
    .x(data => xBandScale(data.communityDay))
    .y(data => yLinearScale(data.valor));

    var instinctLine = d3
    .line()
    .x(data => xBandScale(data.communityDay))
    .y(data => yLinearScale(data.instinct));

  // Append an SVG path and plot its points using the line function
  chartGroup.append("path")
    // The mysticLine function returns the instructions for creating the line for milesData
    .attr("d", mysticLine(pokemonData))
    .classed("mystic", true);
  chartGroup.append("path")
    // The mysticLine function returns the instructions for creating the line for milesData
    .attr("d", valorLine(pokemonData))
    .classed("valor", true);
  chartGroup.append("path")
    // The mysticLine function returns the instructions for creating the line for milesData
    .attr("d", instinctLine(pokemonData))
    .classed("instinct", true);

  // Append an SVG group element to the SVG area, create the left axis inside of it
  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", "translate(0, " + chartHeight + ")")
    .call(bottomAxis);
});
