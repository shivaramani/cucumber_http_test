The idea of this project is to provide a simple cucumber test implementation

## Goal: To validate the expected result output from the feature file for
1) Addition and multiplication of two numbers
2) Validating a HTTP POST service response


## Expected NPM Packages:
a) Cucumber - Core Behavior Driven Development / Test facilitator
b) Gulp - Gulp will be used to run the application ex: $gulp httptest
c) express - run the express web application
c) node-fetch, build-url - These packages will help us to GET/POST HTTP calls
d) jsonpath, unexpected - Used to validate json response

##Install the following
1) npm install cucumber
   npm install -g cucumber
   npm install --save-dev cucumber
2) npm install gulp (try with -g options if need be)
3) npm install gulp-cli (try with -g options if need be)
4) npm install gulp-shell (try with -g options if need be)
5) npm install express (try with -g options if need be)
6) npm install body-parser (try with -g options if need be)
7) npm install node-fetch (try with -g options if need be)
8) npm install build-url (try with -g options if need be)
9) npm install jsonpath (try with -g options if need be)
10) npm install unexpected (try with -g options if need be)

## Running examples
The example can be run by running the sample node server along with Gulp by calling as follows

## run the node http server
a) Change directory - $ cd httptest\server
b) $ node server.js

## run gulp for testing the feature files
$ gulp httptest

## known issues
## below is not working - ONLY "gulp httptest" works
npm run-script httptest  # not working

## gulpfile.js has reference of "cucumber_js" instead of "cucumber.js" - This is a known implementation due to a possible cucumber bug
if cucumber_js did not work, please try changing it to cucumber.js (works in linux)
