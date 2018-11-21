var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Create an initial parameter for the x-axis that will use the 'domestic' column from the csv


// Create a function that will be used for updating x-scale var upon click on axis label


// Create a function that will be used for updating xAxis var upon click on axis label

// Create a function that will be used for updating circles group with a transition to new circles


// Create a function that will be used for updating circles group with new tooltip

// Remember that you want to show the tooltip on mouse over and hide it on mouse out


// Retrieve data from the CSV file and execute everything below
d3.csv("boxOffice.csv", function(err, boxOffice) {
  if (err) throw err;

  // parse the data as integers
  // xLinearScale function above csv import
  // Create y scale function
  // Create initial axis functions
  // append x axis
  // append y axis
  // append initial circles with a radius of 25, a fill of #2fc656 and opacity of .5

  // Create group for  2 x- axis labels

  // append y axis

  // updateToolTip function above csv import


  // create an x axis labels event listener that will change the current x-axis once clicked
});
