The idea of this project is to provide a simple cucumber test implementation

## Goal: To validate the expected result output from the feature file for
1) Addition and multiplication of two numbers
2) Validating a HTTP POST service response


## Expected NPM Packages:
Cucumber - Core Behavior Driven Development / Test facilitator
Gulp - Gulp will be used to run the application ex: $gulp httptest
node-fetch, build-url - These packages will help us to GET/POST HTTP calls
jsonpath, unexpected - Used to validate json response

##Install the following
npm install cucumber
npm install gulp
npm install gulp-cli
npm install node-fetch
npm install build-url
npm install jsonpath
npm install unexpected

## Running examples
The example can be run by running the sample node server along with Gulp by calling as follows

# run the node http server
$ cd httptest\server
$ node server.js

# run gulp for testing the feature files
$ gulp httptest

# known issues
# below is not working - ONLY "gulp httptest" works
npm run-script httptest  # not working

# gulpfile.js has reference of "cucumber_js" instead of "cucumber.js" - This is a known implementation due to a possible cucumber bug
