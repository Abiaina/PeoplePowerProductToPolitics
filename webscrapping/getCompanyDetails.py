import csv
from unidecode import unidecode
import requests
import json
from BeautifulSoup import BeautifulSoup
import ./companies.csv

 ## get company name
f = open('companies.csv')
csv_f = csv.reader(f)

url = 'https://www.opensecrets.org/api/?method=getOrgs&org='
key = '&apikey=' + OSKey

companyDetails = []

for row in csv_f:

 ## make api call for getId
 response = requests.get(url).json()
 ## get company info from orgId
 ## webscrape info from site
