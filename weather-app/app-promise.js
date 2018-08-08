const yargs = require('yargs');
const axios = require('axios');
const fahrToCels = fahrTemp => ((fahrTemp - 32) * 5 / 9).toFixed(2);

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error('unable to find the address');
    }

    let [lat, long] = [response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lat];
    let weatherURL = `https://api.darksky.net/forecast/be243b78b4c7c873806b3726863d5ee3/${lat},${long}`

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    let temperature = fahrToCels(response.data.currently.temperature);
    let apparentTemperature = fahrToCels(response.data.currently.apparentTemperature);
    console.log(`The Temperature currently is ${temperature} and feels like ${apparentTemperature}`);
}).catch((error) => {
    if (error.code === "ENOTFOUND") {
        console.log("unable to connect to API server");
    } else {
        console.log(error.message);
    }
})