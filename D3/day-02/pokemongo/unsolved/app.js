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


// Load data from pokemon_go.csv
d3.csv("pokemon_go.csv", function(error, pokemonData) {

  // Throw an error if one occurs
  if (error) throw error;

  // Format the data as numbers for each team

   // Configure a band scale for the horizontal axis with a padding of 1


  // Configure a linear scale with a range between the chartHeight and 0
  // Set the domain for the yLinearScale for 0 to 100


  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes


  // Configure drawLine functions for each of the teams


  // Append SVG paths and plot for each team and their points using the line function and give each plot its appropriate class


  // Append an SVG group element to the SVG area, create the left axis inside of it


  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page

});
