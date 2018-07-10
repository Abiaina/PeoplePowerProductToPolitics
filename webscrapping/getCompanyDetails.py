import csv
from unidecode import unidecode
import requests
import json
from BeautifulSoup import BeautifulSoup
import untangle

# do I need this?
import ./companies.csv

 ## get company name
f = open('companies.csv')
csv_f = csv.reader(f)

url = 'https://www.opensecrets.org/api/?method=getOrgs&org='
key = '&apikey=' + OSKey

companyDetails = []

for row in csv_f:
 ## make api call for getId
 obj = untangle.parse(url + row + key)
    id = obj.response.organization['orgid']
 ## get company info from orgId
    objSite = untangle.parse('https://www.opensecrets.org/api/?method=orgSummary&id=' + id + key)
 ## webscrape info from site
        objSite
