const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weatherFetcher = require('./weatherFetcher/weatherFetcher');

const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address for which weather is to be fetched',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weatherFetcher.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`The Temperature in ${results.address} is presently ${weatherResults.temperature} and feels ${weatherResults.apparentTemperature}`)
            }
        })
    }
    // let message = errorMessage ? errorMessage : JSON.stringify(results, null, 2);
    // console.log(message);
})
// console.log(argv);