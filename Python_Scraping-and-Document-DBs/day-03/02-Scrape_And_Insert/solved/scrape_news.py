# import necessary libraries:
  # Browser from splinter
  # BeautifulSoup from bs4
from splinter import Browser
from bs4 import BeautifulSoup

# ---------------------------------------------------------
# Define a function called "init_browser" to initialize your browser
def init_browser():
  # Create a Browser instance from splinter using chrome.
    # Documentation: https://splinter.readthedocs.io/en/latest/browser.html
  # @NOTE: Replace the path with your actual path to the chromedriver
  # executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
  executable_path = {"executable_path": "chromedriver"}
  return Browser("chrome", **executable_path, headless=False)

# ---------------------------------------------------------
# Function to scrape for a state from nytimes
def scrape_states():
  # Initialize browser by calling on your init_browser function.
  browser = init_browser()
  
  # Create a variable called "url" and set it to 'https://www.nytimes.com/search?query=california'
    # Or select another state.
  url = "https://www.nytimes.com/search?query=california"

  # Using browser, visit the url above.
  browser.visit(url)

  # Declare a variable soup and parse through the html from browser using BeautifulSoup.
  html = browser.html
  soup = BeautifulSoup(html, "html.parser")

  # Create an empty array called "state_news" that will be holding your news articles.
  state_news = []

  # Loop through all news 'li' elements to retrieve title and url. 
    # Then append the title and url as an object to state_news.
  for list_element in soup.select('li[class*="SearchResults-item"]'):

    title = list_element.find('h4').get_text()
    url_link = f"https://www.nytimes.com{list_element.find('a')['href']}"

    data = {
      'title': title,
      'url_link': url_link
    }

    state_news.append(data)

  # Return the state_news array
  return state_news