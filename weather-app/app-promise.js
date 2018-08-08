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
let geocodeURL = `https://mapsgoogleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw`;

axios.get(geocodeURL).then((res) => {
    console.log(res.data)
}).catch((error) => {
    if (error.code === "ENOTFOUND") {
        console.log("unable to connect to API server");
    }
})