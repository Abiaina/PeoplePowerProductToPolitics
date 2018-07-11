# -*- coding: utf-8 -*-
import csv
from unidecode import unidecode
import requests
import json
from BeautifulSoup import BeautifulSoup
import untangle

# do I need this?
import ./companies.csv

def get_summary_data(site):
    most_lobbied_bill = ''
    top_recipients = []
    share_holder_politicians = []
    total_lobby_dollars = 0
    total_contribution_dollars = 0

    scrape_response = requests.get(site)
    html = scrape_response.content

    soup = BeautifulSoup(html)

    #most lobbied bill
    most_lobbied_bill = soup.find("div", attrs={'id': 'bill'}).text

    most_lobbied_bill = unidecode(most_lobbied_bill)

    # top recipients (remember to remove the last element in the array)
    table = soup.find("table", attrs={'class': 'datadisplay'})

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
            top_recipients.append(list_of_cells[0])

    # Politicians with Shares

    list = soup.findAll("ul", attrs={'id': 'members'})
    i = 0
    while (i < len(list)):
        for row in list[i].findAll('a'):
            i += 1
            share_holder_politicians.append(unidecode(row.text))

    # Lobbying dollars & Contribution dollars

    money = soup.findAll("span", attrs={'class' : 'summ_data_num'})

    total_contribution_dollars = money[0].text
    total_lobby_dollars = money[1].text

    data = {
        'most_lobbied_bill' : most_lobbied_bill,
        'top_recipients' : top_recipients,
        'total_lobby_dollars' : total_lobby_dollars,
        'total_contribution_dollars' : total_contribution_dollars,
        'share_holder_politicians' : share_holder_politicians,
    }

    return data

 ## get company name
f = open('companies.csv')
csv_f = csv.reader(f)

summaryUrl = 'https://www.opensecrets.org/orgs/summary.php?id='

idUrl = 'https://www.opensecrets.org/api/?method=getOrgs&org='
key = '&apikey=' + OSKey

companyDetails = []

for row in csv_f:
 ## make api call for getId
 obj = untangle.parse(idUrl + row + key)
    id = obj.response.organization['orgid']

 ## webscrape info from site
        objSite = summaryUrl + id
