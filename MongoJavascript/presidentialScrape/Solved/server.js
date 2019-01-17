
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
  var potusURL = [];

  // With cheerio, find each `a` tag with that is nested within a `big` tag
  // (i: iterator. element: the current element)

  // Using a `.each()` function to scrape all the URLs for each president
  $("big > a").each(function(i, element) {
    // In the currently selected element (an a tag), look at its attribute
    // then save the values for the "href"
    var link = $(element).attr("href");

    // push all the URLs into the potusURL array we defined earlier
    potusURL.push(link);
  });

  // console log to make sure all the links are there
  console.log(potusURL);

  function potusScrape (url){
    // we are making another axios call and need to pass the base url
    axios.get("https://en.wikipedia.org" + url).then (function(response){

      // as this is a separate axios call we need to load the html to cheerio again
      var $ = cheerio.load(response.data);
      
      // set variables for the name and birthday
      var name = $(".firstHeading").text();
      var birthday = $(".bday").text();

      // log the name and birthdate of each president
      console.log (`${name}'s birthday is ${birthday}`);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // we now loop through each url in the array and find the president's name as well as date of birth
for (var i =0; i < potusURL.length; i++){
  potusScrape(potusURL[i]);
}

 // Make it run the scrape in order! Recursive Method
//======================================================================================
 
  // // we set a counter variable to 0
  // var count = 0;
  // // we run the function for the first item in the array
  // potusScrapeRecursive(potusURL[0]);
  // // the function should look virtually identical to the previous one
  // function potusScrapeRecursive (url){
  //   axios.get("https://en.wikipedia.org" + url).then (function(response){

  //     var $ = cheerio.load(response.data);
  //     var name = $(".firstHeading").text();
  //     var birthday = $(".bday").text();

  //     console.log (`${name}'s birthday is ${birthday}`);
  //   // the fun starts here! we increment the count variable
  //     count++
  //   // and we then continue to run the function, within itself (hence the term recursive), while count is less than 45
  //     if (count < 45) {
  //   // finally we pass the function the potusURL array with an index equal to the current value of count
  //       potusScrapeRecursive(potusURL[count])
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  //=====================================================================================

 // Make it run the scrape in order! Async/Await Method
 //======================================================================================
  // // we wrap the function with the keyword async. This ensures that the function will return a promise
  // async function potusScrapeAsync (url){
  //   // we wrap the axios call in an await. This forces our code to wait until a promise is settled 
  //   await axios.get("https://en.wikipedia.org" + url).then (function(response){

  //     var $ = cheerio.load(response.data);
  //     var name = $(".firstHeading").text();
  //     var birthday = $(".bday").text();

  //     console.log (`${name}'s birthday is ${birthday}`);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  // // however, a forLoop or forEach will still not work, because loops happen instantaenously. The function will not wait.
  // // To fix this we use another asynchronous function with a `for...of` statement 
  // async function processPotus(array) {
  //   for (var item of array) {
  //     await potusScrapeAsync(item);
  //   }
  //   console.log('Done!');
  // }
  
  // processPotus(potusURL);

})
.catch(function (error) {
  console.log(error);
});;






