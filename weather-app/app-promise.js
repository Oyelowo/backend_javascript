const yargs = require('yargs');
const axios = require('axios');

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
    console.log(response.data)
}).catch((error) => {
    if (error.code === "ENOTFOUND") {
        console.log("unable to connect to API server");
    } else {
        console.log(error.message);
    }
})