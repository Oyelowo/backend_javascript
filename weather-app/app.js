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
const getWeather = require('./getWeather/getWeather');
const request = require('request');

// const argv = yargs.options({
//         lat: {
//             demand: true,
//             alias: 'latitude',
//             describe: 'temperature of address for which weather is to be fetched',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

getWeather.getWeather(60.2413032,25.0710316, (errorMessage, results) => {
    let message = errorMessage ? errorMessage : JSON.stringify(results, null, 2);
    console.log(message);
})