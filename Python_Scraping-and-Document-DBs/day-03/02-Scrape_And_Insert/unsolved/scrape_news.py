# import necessary libraries:
  # Browser from splinter
  # BeautifulSoup from bs4


# ---------------------------------------------------------
# Define a function called "init_browser" to initialize your browser

  # Create a Browser instance from splinter using chrome.
    # Documentation: https://splinter.readthedocs.io/en/latest/browser.html





# ---------------------------------------------------------
# Function to scrape for a state from nytimes

  # Initialize browser by calling on your init_browser function.

  
  # Create a variable called "url" and set it to 'https://www.nytimes.com/search?query=california'
    # Or select another state.


  # Using browser, visit the url above.


  # Declare a variable soup and parse through the html from browser using BeautifulSoup.



  # Create an empty array called "state_news" that will be holding your news articles.


  # Loop through all news 'li' elements to retrieve title and url. 
    # Then append the title and url as an object to state_news.












  # Return the state_news array
