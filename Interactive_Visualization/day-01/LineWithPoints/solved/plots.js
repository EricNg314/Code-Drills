
//========================= Chart 1 =====================================
let data ={
  date: [],
  gdp: []
}

realGDP.forEach((quarterlyGDP) =>{
  data['date'].push(quarterlyGDP['DATE']);
  data['gdp'].push(quarterlyGDP['GDPC1']);
})

const chart1Trace = {
  x: data['date'],
  y: data['gdp'],
  // type: "scatter",
  name: "GDP",
  marker: {
    color:"grey"
  }
};

const chartData = [chart1Trace];

const chart1Layout = {
  title: "US Quarterly Real GDP",
  xaxis: {
    title: "Year"
  },
  yaxis: {
    title: "Real GDP"
  }
}

Plotly.newPlot("plotID1", chartData, chart1Layout);

//========================= Chart 2 =====================================
const length = data['date'].length;

const date2 = data['date'].slice(length - 10, length)
const gdp2 = data['gdp'].slice(length - 10, length)

const data2 ={
  date: date2,
  gdp: gdp2
}

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
