const fetch = require('node-fetch');
const port = 3000;
const baseUrl = 'http://localhost:' + port;

let serviceResponse;


// Perform a GET request to the server
function get(url) {
    const realUrl = new URL(url, baseUrl);
    const headers = {};
   serviceResponse = fetch(realUrl, { headers: headers })
        .then((res) => {
            let bodyPromise;
            const contentType = res.headers.get('content-type') || '';
            if (contentType.indexOf('application/json') >= 0) {
                bodyPromise = res.json();
            } else {
                bodyPromise = res.text();
            }

            return bodyPromise.then((body) => {
                return {
                    status: res.status,
                    headers: res.headers.raw(),
                    body: body
                };
            });
        });

    return serviceResponse;
}

// Perform a POST request to the server
function post(url, body) {
    const realUrl = new URL(url, baseUrl);

    const headers = {};
    headers['content-type'] = 'application/json';

    //console.log('My Log - POST URL - ' + realUrl);
    serviceResponse = fetch(realUrl, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then((res) => {
            let bodyPromise;
            const contentType = res.headers.get('content-type') || '';
            if (contentType.indexOf('application/json') >= 0) {
                bodyPromise = res.json();
            } else {
                bodyPromise = res.text();
            }

            return bodyPromise.then((body) => {
                //console.log('My Log - POST body response - ' + JSON.stringify(body));
                return {
                    status: res.status,
                    headers: res.headers.raw(),
                    body: body
                };
            });
        });

    return serviceResponse;
}

// Get the last response that we received
function getserviceResponse() {
    return serviceResponse;
}


module.exports = {
    get: get,
    post: post,
    getserviceResponse: getserviceResponse
};
