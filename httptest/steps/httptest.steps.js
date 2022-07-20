const { When, Then} = require('@cucumber/cucumber');
const expect = require('unexpected');
const requester = require('./servicerequester');

const RESPONSE_PATHS = {
    'Answer': '$.answer',
    'Name': '$.name'
};

var param1 = "";
var param2 = "";

    When('I retrieve the service response', function() {
        //console.log('My log - I retrieve the service response');
        return requester.post('', { param1: param1, param2: param2 });
    });

    When('I update the service response to have first {string}', function (inputParam1) {
        //console.log('My log - I update the service response  to have name - param1 - ' + inputParam1 );
        param1 = inputParam1;
    });

    // And the service response has "param1" status
    When('I update the service response to have second {string}', function (inputParam2) {
        //console.log('My log - I update theservice response to have name - param2 - ' + inputParam2 );
        param2 = inputParam2;
    });

    Then('And the service response has {string} status}', function (expectedOutput, callback) {
      console.log('Expected output - ' +expectedOutput);
      callback(expectedOutput, pending);
    });

    function callback(expectedOutput){
        console.log('Expected output callback');
        return requester.getserviceResponse().then((response) => {
            const expected = data.rowsHash();

            var expectedOutput = false;
            // below coded for only debugging
            if(response){
              var serviceResponse = JSON.parse(response.body);
              if(serviceResponse){
                  var name = serviceResponse.name;
                  var app = serviceResponse.app;
                  var answer = serviceResponse.answer;
                  var type = serviceResponse.type;
                  console.log('************************************')
                  console.log('name - ' + name + ': app - ' + app + ': answer - ' + answer + ': type - ' + type)

                  expectedOutput = (expectedString == answer);
              }
            }
            expect(true, 'to equal', expectedOutput);
        });
    }

    Then('the service response has details:', function(data) {
        return requester.getserviceResponse().then((response) => {
            const expected = data.rowsHash();

            var expectedOutput = false;
            var serviceOutput = "";
            // below coded for only debugging
            if(response){
              var serviceResponse = JSON.parse(response.body);
              if(serviceResponse){
                  var name = serviceResponse.name;
                  var app = serviceResponse.app;
                  var answer = serviceResponse.answer;
                  var type = serviceResponse.type;
                  serviceOutput = answer;
                  //console.log('---------------------------------')
                  //console.log('name - ' + name + ': app - ' + app + ': answer - ' + answer + ': type - ' + type)
              }
            }

            // for data table

            //console.log('My Log -Datatable Asertion after this ');


            if(expected && expected["answer"]){
              expectedValue = expected["answer"];
            }
            expect( expectedValue, 'to equal', serviceOutput);

            /*
            Object.keys(expected)
                .filter(key => RESPONSE_PATHS.hasOwnProperty(key))
                .forEach(key => {
                    const expectedValue = expected[key];
                    const path = RESPONSE_PATHS[key];
                    const value = jsonpath.value(response.body, path).toString();
                    console.log()
                    console.log('expectedValue - ' + expectedValue + " : value - " + value)
                    expect(value, 'to equal', expectedValue);
                });
            */
        });
    });