
let data ={
  date: [],
  gdp: []
}

realGDP.forEach((quarterlyGDP) =>{
  data['date'].push(quarterlyGDP['DATE']);
  data['gdp'].push(quarterlyGDP['GDPC1']);
})



let chart1Trace = {
  x: data['date'],
  y: data['gdp'],
  type: "scatter",
  name: "GDP",
  marker: {
    color:"blue"
    // symbol: "diamond-x"
  }
};


let chartData = [chart1Trace];

let chart1Layout = {
  title: "US Quarterly Real GDP",
  xaxis: {
    title: "Year"
  },
  yaxis: {
    title: "Real GDP"
  }
}

Plotly.newPlot("plotID1", chartData, chart1Layout);

//================= Chart 2 =====================================

const length = data['date'].length;

let test = data['date'].slice(1,2);
let date3 = data['date'].slice(length - 10, length)
let gdp3 = data['gdp'].slice(length - 10, length)

let data3 ={
  date: date3,
  gdp: gdp3
}

realGDP.forEach((quarterlyGDP) =>{
  data3['date'].push(quarterlyGDP['DATE']);
  data3['gdp'].push(quarterlyGDP['GDPC1']);
})



let chart2Trace1 = {
  x: data3['date'],
  y: data3['gdp'],
  type: "scatter",
  name: "GDP",
  marker: {
    color:"blue"
    // symbol: "diamond-x"
  }
};


let chart2Trace2 = {
  x: data3['date'],
  y: data3['gdp'],
  mode: "markers",
  type: "scatter",
  name: "GDP",
  marker: {
    color:"orange",
    symbol: "diamond-x"
  }
};


let chartData2 = [chart2Trace1, chart2Trace2];

let chart2Layout = {
  title: "US Quarterly Real GDP",
  xaxis: {
    title: "Year"
  },
  yaxis: {
    title: "Real GDP"
  }
}

Plotly.newPlot("plotID2", chartData2, chart2Layout);




