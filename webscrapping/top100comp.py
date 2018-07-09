import csv
import requests
from BeautifulSoup import BeautifulSoup

url = 'https://www.foodengineeringmag.com/2017-top-100-food-and-beverage-companies'
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html)
table = soup.find('tbody')

list_of_rows = []
for row in table.findAll('tr'):
    list_of_cells = []
    for cell in row.findAll('strong'):
        text = cell.text.replace('&nbsp;', '')
    list_of_cells.append(text)
    list_of_rows.append(list_of_cells)

outfile = open("./companies.csv", "wb")
writer = csv.writer(outfile)
writer.writerow(["Company Name"])
writer.writerows(list_of_rows)
