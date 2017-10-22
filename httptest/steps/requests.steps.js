const defineSupportCode = require('cucumber').defineSupportCode;
const httpStatusCodes = require('http-status-codes');
const expect = require('unexpected');
const requester = require('./servicerequester');

defineSupportCode(function ({ Before, Then }) {
    Before(function() {
        return requester.post('');
    });

    Then(/^I get an? (.+) response$/, function (statusName) {
        console.log('My log - I get a response');
        const statusCode = httpStatusCodes[statusName.toUpperCase().replace(' ', '_')];

        return requester.getserviceResponse()
            .then((response) => {
                console.log('response status - ' + response.status + " : statuscode - " +statusCode);
                expect(response.status, 'to equal', statusCode);
            });
    });
});
