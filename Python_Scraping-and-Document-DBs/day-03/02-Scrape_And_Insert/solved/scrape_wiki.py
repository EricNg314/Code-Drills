from splinter import Browser
from bs4 import BeautifulSoup

# Define a function called "init_browser" to initialize your browser
def init_browser():
  # Create a Browser instance from splinter using chrome.
    # Documentation: https://splinter.readthedocs.io/en/latest/browser.html
  # @NOTE: Replace the path with your actual path to the chromedriver
  # executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
  executable_path = {"executable_path": "chromedriver"}
  return Browser("chrome", **executable_path, headless=False)

# Function to scrape for states in States Wiki
def scrape_states():
  # Initialize browser by calling on your init_browser function.
  browser = init_browser()
  
  # Set your url to the list of states and territories of United States in wikipedia.org
  url = "https://www.nytimes.com/search?query=california"
  browser.visit(url)

  html = browser.html
  soup = BeautifulSoup(html, "html.parser")

  states_info = []
  # info = soup.find_all('hr', class=Item-headline-'')

  for title in soup.select('li[class*="SearchResults-item"]'):
    # print(title.find('a').attr('href'))
    print('-------------------------')
    print(title.find('a').attr('href'))


  # for row in table.findAll("tr"):
  #   state = {}
  #   print('====================================')
  #   print(row)
  #   for data in row:
  #     state['info'] = data.find('td')
  #     print('------------------------------------------')
  #     print(state)



  # print(table)


  return states_info