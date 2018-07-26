This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).



## Table of Contents
* [About Product To Politics](#about-product-to-politics)
* [Required Libraries](#required-libraries)
* [Simulators/Expo](#simulators/expo)
* [Open Secrets Api](#open-secrets-api)
* [EANdata Api](#eandata-api)
* [Common Expo Errors](#common-expo-errors)
* [Final Thoughts](#final-thoughts)




## About Product To Politics

Android and IOS friendly app that allows you to scan almost any product's barcode and find out about its parent company's lobbying activity. 

## Required Libraries
Libraries are in the build files of each of the respective repos.
For Rails API: bundle install
For Python Webscrapper: You can use this to update the seed files, but I have already placed the seed files as a json in the Rails API.
$ rails db:reset
$ rails db:seed
This will seed the backend with the prescrapped data.

Before first running the front end do a npm install to install the necessary libraries.
This is made on expo, please review the expo site to set up the react native environment.

$ npm install



## Simulators/Expo:
andriod simulator like Andriod Studio
download expo app for android/iOS. The current verision(SDK29) is not working, if you can get SDK28 or older.
the simulator does not process upc codes (you will need either an andriod phone iphone or ipad to test the full functionality of the app).
I also suggest getting a React Native Debugger. But, you can also debug directly in the console when you are in production mode for expo.

Any issues with the seed data, checkout open secrets to rescrape the info to update. You will need an APIKey and to make sure the site is still organized to fit the scrape in the python webscrapper code base. For the most part, the info is pulled from the companies summary page and the totals tab of the its' summary page. You will have to first pull the company's id via the open secrets API. 

You can also request bulk data access to avoid the hassle of web-scrapping.

## Open Secrets Api
Open Secrets is a great resource and provided the builk of my seed data.

Any issues with the seed data, checkout open secrets to rescrape the info to update. You will need an APIKey and to make sure the site is still organized to fit the scrape in the python webscrapper code base. For the most part, the info is pulled from the companies summary page and the totals tab of the its' summary page. You will have to first pull the company's id via the open secrets API. 

All the required libraries are in the webscrapping repo. To regenerate the seed data run:

I also researched the bills and input that data by hand into the seed file. But, that could be scrapped as well. There is no code written to do that yet.

You can also request bulk data access to avoid the hassle of web-scrapping.

open secrets: apis@crp.org
also ask questions in the group: opensecrets-open-data@googlegroups.com
https://www.opensecrets.org/resources/datadictionary/UserGuide.pdf

## EANdata API
For the upc code database you will need a key from https://eandata.com/ . Update the .env in the rails app with the APIKey.
Bundle install then deploy locally or on a server (heroku works great!).

Also used https://www.upcitemdb.com/ as a backup database if the parent company info was missing. They have a trial api and you do not need an APIKey.

## Final Thoughts
After you have deployed the backend with seeded data, and started the expo simulator on a phone/ipad, you should be able to run the app. Simply hit scan and scan a barcode. The app should show the product you are scanning and the political activities of its parent company (this may take a while as there are 2 API calls being made).

## Common Expo Errors:
- Expo is very picky. I find it easier to set up my developing environment first then starting expo via npm start.
- Unpaired tags in the front end and displaying objects with a view/text tag will cause errors.
- Test out code on expo.snack.io to help debug as well
- Be aware that Expo is a framework for react native, it does not support all the react native libraries.
-SDK 29 on android QR Code scanner to start running app does not work. After you do npm start select email/text project link and you can open the email link with expo on Andrio phones (Galaxy S7/S8)
