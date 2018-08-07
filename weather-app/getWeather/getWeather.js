const request = require('request');

getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/be243b78b4c7c873806b3726863d5ee3/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(null, body.currently.temperature);
        } else {
            callback('unable to fetch weather')
        }
    })
}

module.exports.getWeather = getWeather;