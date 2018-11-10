//create an svg of of a smiley face and append it to the page using d3.

//select the body and append a new svg element
var svg = d3.select("body").append("svg");
//specify the size of the svg container
svg.attr("width", "500px").attr("height", "500px");

//create the main circle and make it gold
svg.append("circle")
    .attr("cx", 128)
    .attr("cy", 128)
    .attr("r", 120)
    .attr("fill", "gold");

//create the eyes
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

//coordinates for the smile's curve
var smileCurve = "M100, 160 Q128, 190 156, 160";

//create a svg path with the curve
svg.append("path")
    .attr("d", smileCurve)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", "8px")
    .attr("stroke-linecap", "round");


