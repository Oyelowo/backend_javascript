// import request from 'request';
const request = require('request');

// be243b78b4c7c873806b3726863d5ee3
// https://api.darksky.net/forecast/be243b78b4c7c873806b3726863d5ee3/37.8267,-122.4233
const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address)
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find the address. Recheck and try again');
        } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, undefined, 2));
            callback(null, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }

    });
}

module.exports.geocodeAddress = geocodeAddress;