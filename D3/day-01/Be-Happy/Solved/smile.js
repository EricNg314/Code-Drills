
var svg = d3.select("body").append("svg");

svg.attr("width", "500px").attr("height", "500px");

svg.append("circle")
    .attr("cx", 128)
    .attr("cy", 128)
    .attr("r", 120)
    .attr("fill", "gold");

svg.append("circle")
    .attr("cx", 80)
    .attr("cy", 104)
    .attr("r", 12)
    .attr("fill", "white");

svg.append("circle")
    .attr("cx", 170)
    .attr("cy", 104)
    .attr("r", 12)
    .attr("fill", "white");

//<path d="M100, 160 Q128, 190 156, 160" fill="none" stroke="white" stroke-width="8px" stroke-linecap="round" />
var smileCurve = "M100, 160 Q128, 190 156, 160";

svg.append("path")
    .attr("d", smileCurve)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", "8px")
    .attr("stroke-linecap", "round");


