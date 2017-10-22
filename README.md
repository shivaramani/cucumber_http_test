The idea of this project is to provide a simple cucumber test implementation

## Goal: To validate the expected result output from the feature file for
1) Addition and multiplication of two numbers
2) Validating a HTTP POST service response


## Expected NPM Packages:
a) Cucumber - Core Behavior Driven Development / Test facilitator
b) Gulp - Gulp will be used to run the application ex: $gulp httptest
c) node-fetch, build-url - These packages will help us to GET/POST HTTP calls
d) jsonpath, unexpected - Used to validate json response

##Install the following
1) npm install cucumber
2) npm install gulp
3) npm install gulp-cli
4) npm install node-fetch
5) npm install build-url
6) npm install jsonpath
7) npm install unexpected

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
