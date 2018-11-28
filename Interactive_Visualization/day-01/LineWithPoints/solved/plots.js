
//========================= Chart 1 =====================================
// Create an object called data with the keys of "date" and "gdp" as empty arrays.
let data ={
  date: [],
  gdp: []
}

// Parse through each object in the realGDP array that was imported from data.js
realGDP.forEach((quarterlyGDP) =>{
  data['date'].push(quarterlyGDP['DATE']);
  data['gdp'].push(quarterlyGDP['GDPC1']);
})

// Create the first trace using date and gdp from the parsed variable "data"
  // trace should have a name and a random marker color of your choice.
const chart1Trace = {
  x: data['date'],
  y: data['gdp'],
  name: "GDP",
  marker: {
    color:"grey"
  }
};

// Create an array called chartData. 
  // Add the first trace to the array.
const chartData = [chart1Trace];

// Create an object called "chart1Layout".
  // For the layout, add a title, x and y axis labels
const chart1Layout = {
  title: "US Quarterly Real GDP",
  xaxis: {
    title: "Year"
  },
  yaxis: {
    title: "Real GDP"
  }
}

// Add the new plot from chartData and chart1Layout to the element you created earlier with the id "plotID1"
Plotly.newPlot("plotID1", chartData, chart1Layout);

// ========================= Chart 2 =====================================
// ========================= Harder Challenge =====================================

// Only plot the lastest 10 observations from your data.
  // Would recommend reviewing ".length" property and ".slice()" method.
    // for arrays to manipulate your data variable.
const length = data['date'].length;

const date2 = data['date'].slice(length - 10, length)
const gdp2 = data['gdp'].slice(length - 10, length)

const data2 ={
  date: date2,
  gdp: gdp2
}

// Your new trace should include a line and marker for each data point.
  // Only 1 trace should be displayed with the name "GDP"

  // The points should have the following attributes:
    // Color of red
    // Have a larger size preferably 20
    // The symbol should look like an "X"
    // Needs to be partially transparent

  // The line should have the following attributes:
    // Color of blue without specifying the word "blue"
    // A thicker line with the value of 3
    // Use dots instead of a solid line
const chart2Trace = {
  x: data2['date'],
  y: data2['gdp'],
  type: "scatter",
  mode: "lines+markers",
  name: "GDP",
  marker: {
    color:"red",
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

// Plot the new trace onto the element you created earlier with the id "plotID2"
const chartData2 = [chart2Trace];

const chart2Layout = {
  title: "US Quarterly Real GDP",
  xaxis: {
    title: "Year"
  },
  yaxis: {
    title: "Real GDP"
  }
}

Plotly.newPlot("plotID2", chartData2, chart2Layout);
