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
    table = soup.findAll("table", attrs={'class': 'datadisplay'})[1]

    # this going row by row
    for row in table.findAll('tr'):
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

    print "data is here"
    print data

get_summary_data('https://www.opensecrets.org/orgs/totals.php?id=D000027084&cycle=2018')
