var gabumon = {
    digivolutions: [
      {
        stage: 1,
        name: "Garurumon"
      },
      {
        stage: 2,
        name: "WereGarurumon"
      },
      {
          stage: 3,
          name: "MetalGarurumon"
      },
      {
          stage: 4,
          name: "ZeedGarurumon"
      }
    ],
    image: "https://vignette.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg/revision/latest?cb=20171127121438"
  };


// Select the div with a class of tagline
var tagline = d3.select(".tagline").text();
// console.log the text within the tagline
console.log(tagline);
// replace the text with "D3gimon are the Champions!"
d3.select(".tagline").text("D3gimon are the Champions");

// Capture the HTML link for "D3 D3 D3givolve"
var link = d3.select(".digi-link").html();
console.log("link: ", link);

// Select the child element for the link
var linkAnchor = d3.select(".digi-link>a");
console.log(linkAnchor);

// // Capture the child element's href attribute
var linkAnchorAttribute = linkAnchor.attr("href");
console.log("linkAnchorAttribute: " + linkAnchorAttribute);

// Change the link to any digimon related video
linkAnchor.attr("href", "https://www.youtube.com/watch?v=4icg8AuAsoY");

// using the same selection, change the link's text to and href to the digimon wikipedia page
d3.select(".digi-link>a").attr("href", "https://en.wikipedia.org/wiki/Digimon").text("Learn More about Digimon");

// Create a new <li> element and and append it to the <ul>, give this new element text of "Victory Greymon"
var li = d3.select("ul").append("li");
li.text("Victory Greymon");

// Use chaining to create another new element and set its text as "Omnimon"
var li2 = d3.select("ul").append("li").text("Omnimon");

// Select the div with an id of "agumon" and append a new <img> element using this image "https://vignette.wikia.nocookie.net/digimon/images/6/68/Agumon_b.jpg/revision/latest?cb=20170210150934"

var agumon = d3.select("#agumon").append("img");
agumon.attr("src","https://vignette.wikia.nocookie.net/digimon/images/6/68/Agumon_b.jpg/revision/latest?cb=20170210150934");

// select the div with an id of gabumon
var gabumonDiv = d3.select("#gabumon");

// append a new <img> element to the gabumon div using this image https://vignette.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg/revision/latest?cb=20171127121438

var gabumonImg = gabumonDiv.append("img");
gabumonImg.attr("src", "https://vignette.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg/revision/latest?cb=20171127121438");

// append a new <ul> element to the div
var gabumonUl = gabumonDiv.append("ul");

// Using the gabumon object, append <li> elements to the new <ul>. There should be a new list item for each digivolution name

// Create a variable to refrence the digivolutions
var digivolutions = gabumon.digivolutions;

for (var i = 0; i < digivolutions.length; i++){
    var newLi = gabumonUl.append("li");
    newLi.text(digivolutions[i].name);
}

// Select all list items, then change their font color
d3.selectAll("li").style("color", "red");


  
