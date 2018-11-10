// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom


// Load data from height_of_rollercoasters.csv
d3.csv("heights_of_rollercoasters.csv", function(error, coasterData) {
  if (error) throw error;

  console.log(coasterData);



  // Build a bar chart using the information in heights_of_rollercoasters.csv

});
