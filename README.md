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
Run - "npm install" to accomplish the installation of these

If you want to run individually, you may run these with -g / --save-dev options to have it run locally

1) npm install cucumber
   npm install -g cucumber
   npm install --save-dev cucumber
2) npm install -g gulp
3) npm install -g gulp-cli
4) npm install -g gulp-shell
5) npm install -g express
6) npm install -g body-parser
7) npm install -g node-fetch
8) npm install -g build-url
9) npm install -g jsonpath
10) npm install -g unexpected

## Running examples
The example can be run by running the sample node server along with Gulp by calling as follows

## run the node http server
```
  node server\server.js
```

## run gulp for testing the feature files - on another tab/terminal
```
   npm run-script httptest
```