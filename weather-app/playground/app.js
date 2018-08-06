const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street' +
            '%20philidelphia&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body.results[0].address_components, undefined, 4));
});

