import csv
from unidecode import unidecode
import requests
from BeautifulSoup import BeautifulSoup

url = 'https://consumergoods.com/top-100-consumer-goods-companies-2017'
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html)
table = soup.find('table')

list_of_rows = []
# this going row by row
for row in table.findAll('tr'):
    list_of_cells = []
    # going looking for a link tag in the row
    for cell in row.findAll('a'):
        # this is checking the link tag for any non ascii char
        text = unidecode(cell.text).strip()
        list_of_cells.append(text)
    if list_of_cells:
        list_of_rows.append(list_of_cells)

outfile = open("./companies.csv", "wb")
writer = csv.writer(outfile)
writer.writerow(["Company Name"])
writer.writerows(list_of_rows)
