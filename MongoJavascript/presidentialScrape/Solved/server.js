
var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "OHH GREAT HALL OF PRESIDENTS" +
            "\n***********************************\n");

// Making a axios for wikipedia's US presidents page. The page's HTML is passed as the callback's third argument
axios.get("https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States").then(function(response) {

   // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the URLs that we'll scrape
  var potusURL = {};

  // With cheerio, find each `a` tag with that is nested within a `big` tag
  // (i: iterator. element: the current element)

  // Using a `.each()` function to scrape all the URLs for each president
  $("big > a").each(function(i, element) {
    // In the currently selected element (an a tag), look at its attribute
    // then save the values for the "href"
    var link = $(element).attr("href");

    // push all the URLs into the potusURL array we defined earlier
    potusURL[i] = link
  });

  // console log to make sure all the links are there
  console.log(potusURL);

  // for (let i=0; i<45; i++){
    potusScrape(potusURL[0]);
  // }

var count = 0
  async function potusScrape (url){
    // we are making another axios call and need to pass the base url
    await axios.get("https://en.wikipedia.org" + url).then (function(response){

      // as this is a separate axios call we need to load the html to cheerio again
      var $ = cheerio.load(response.data);
      
      // set variables for the name and birthday
      var name = $(".firstHeading").text();
      var birthday = $(".bday").text();

      console.log (`${name}'s birthday is ${birthday}`);
      count++
      if (count < 45) {

        potusScrape(potusURL[count])
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // we will now loop through each url in the array and find the president's name as well as date of birth

});






