const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20stree' +
            't%20philidelphia&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 4));
    // console.log(body.results[0].formatted_address);
    console.log(` latitude: ${body.results[0].geometry.location.lat} \n longitude: ${body.results[0].geometry.location.lng}`);
});
