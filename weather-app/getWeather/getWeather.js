const request = require('request');

getWeather = (lat, long, callback) => {
    request({
        url: `https://apidarksky.net/forecast/be243b78b4c7c873806b3726863d5ee3/60.2413032,25.0710316`,
        json: true
    }, (error, response, body) => {
        callback(body)
        // if (error) {
        //     callback('unable to connect to google servers');
        // } else if (body.status === 'ZERO_RESULTS') {
        //     callback('unable to find the address. Recheck and try again');
        // } else if (body.status === 'OK') {
        //     // console.log(JSON.stringify(body, undefined, 2));
        //     callback(null, {
        //         address: body.results[0].formatted_address,
        //         latitude: body.results[0].geometry.location.lat,
        //         longitude: body.results[0].geometry.location.lng
        //     })
        // }
    });
}

module.exports.getWeather = getWeather;