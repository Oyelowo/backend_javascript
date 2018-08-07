// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs.options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address for which weather is to be fetched',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     let message = errorMessage ? errorMessage : JSON.stringify(results, null, 2);
//     console.log(message);
// })
// console.log(argv);


const yargs = require('yargs');
// const getWeather = require('./getWeather/getWeather');
const request = require('request');

request({
    url: `https://api.darksky.net/forecast/be243b78b4c7c873806b3726863d5ee3/60.2413032,25.0710316`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('unable to fetch weather')
    }
})



// const argv = yargs.options({
//         t: {
//             demand: true,
//             alias: 'temperature',
//             describe: 'temperature of address for which weather is to be fetched',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// getWeather.getWeather(argv.t, (errorMessage, results) => {
//     let message = errorMessage ? errorMessage : JSON.stringify(results, null, 2);
//     console.log(message);
// })