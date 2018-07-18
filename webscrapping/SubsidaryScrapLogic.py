# -*- coding: utf-8 -*-
import csv
from unidecode import unidecode
import requests
import json
from BeautifulSoup import BeautifulSoup
import untangle

def get_summary_data(site):
    subsidiaries = []

    scrape_response = requests.get(site)
    html = scrape_response.content

    soup = BeautifulSoup(html)

    # top recipients (remember to remove the last element in the array)
    info_table = soup.findAll("table", attrs={'class': 'datadisplay'})[-1]
    if info_table.find('tr').find('th').text.lower() == "affiliate":
        for row in info_table.findAll('tr'):
            list_of_cells = []
            # going looking for a link tag in the row
            for cell in row.findAll('td'):
                # this is checking the link tag for any non ascii char
                text = unidecode(cell.text)
                text = text.replace('&nbsp;', '')
                list_of_cells.append(text)
            if list_of_cells:
                subsidiaries.append(list_of_cells[0])

        data = {
            'subsidiaries': subsidiaries,
        }

        outfile = "./unfound_companies.json"

        with open(outfile, 'w') as outfile:
            json.dump(data, outfile, sort_keys = True, indent = 4,
               ensure_ascii = False)

data = get_summary_data('https://www.opensecrets.org/orgs/totals.php?id=D000027084&cycle=2018')

# # data = json.dumps(data)
# outfile = open("./unfound_companies.csv", "wb")
# writer = csv.writer(outfile)
# writer.writerow(data)

print data
