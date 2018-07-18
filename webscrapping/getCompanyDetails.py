# -*- coding: utf-8 -*-
import csv
from unidecode import unidecode
import requests
import json
from BeautifulSoup import BeautifulSoup
import untangle
import config
import urllib


def get_summary_data(site, name, id):
    most_lobbied_bill = ''
    top_recipients = []
    share_holder_politicians = []
    total_lobby_dollars = 0
    total_contribution_dollars = 0
    company_name = name
    os_id = id

    scrape_response = requests.get(site)
    html = scrape_response.content

    soup = BeautifulSoup(html)

    #most lobbied bill
    bill_div = soup.find("div", attrs={'id': 'bill'})

    if bill_div is not None:
        most_lobbied_bill = bill_div.text

        most_lobbied_bill = unidecode(most_lobbied_bill)

    # top recipients (remember to remove the last element in the array)

    table = soup.find("table", attrs={'class': 'datadisplay'})

    if table is not None:
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
    if len(top_recipients) > 2:
        top_recipients.pop()

    # Politicians with Shares
    list = soup.findAll("ul", attrs={'id': 'members'})
    if list is not None:
        i = 0
        while (i < len(list)):
            for row in list[i].findAll('a'):
                i += 1
                share_holder_politicians.append(unidecode(row.text))

    # Lobbying dollars & Contribution dollars

    money = soup.findAll("span", attrs={'class' : 'summ_data_num'})

    if money is not None and len(money) > 1:
        total_contribution_dollars = money[0].text.replace('$','').replace(',','')
        total_lobby_dollars = money[1].text.replace('$','').replace(',','')

    data = {
        "name": unidecode(name).strip(),
        "os_id": id,
        "most_lobbied_bill": most_lobbied_bill,
        "recipients": top_recipients,
        "total_lobby_dollars": total_lobby_dollars,
        "total_contribution_dollars": total_contribution_dollars,
        "share_holder_politicians": share_holder_politicians,
    }

    return data

 ## get company name
f = open('companies.csv')
csv_f = csv.reader(f)

summaryUrl = 'https://www.opensecrets.org/orgs/summary.php?id='

idUrl = 'https://www.opensecrets.org/api/?method=getOrgs&'
key = '&apikey=' + config.os_key

companyDetails = []

notFound = []

for row in csv_f:
 ## make api call for getId
 params = urllib.urlencode({
     'apikey': config.os_key,
     'org': row[0]
 })
 url = idUrl + params
 response = requests.get(url)

 if response.status_code == 404:
     notFound.append(row[0])
     continue

 xml = response.content

 print xml

 obj = untangle.parse(xml)

 org = obj.response.organization
 if type(org) is list:
     org = org[0]

 id = org['orgid']

 ## webscrape info from site
 objSite = summaryUrl + id
 companyDetails.append(get_summary_data(objSite, row[0], id))

outfile = open("./company_politics_details.csv", "wb")
writer = csv.writer(outfile)
writer.writerow(json.dumps(companyDetails))

outfile = open("./unfound_companies.csv", "wb")
writer = csv.writer(outfile)
writer.writerow(notFound)
