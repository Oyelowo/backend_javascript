const request = require('request');

request({
    url: 'https://mapsgoogleapis.com/maps/api/geocode/json?address=1301%20lombard%20street' +
            '%20philidelphia&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(error, undefined, 4));
});
 

