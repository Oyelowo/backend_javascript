const request = require('request');
const yargs = require('yargs');

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

// console.log(argv);

// both below would work
// let encodedAddress = encodeURIComponent(argv.a);
let encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('unable to connect to google servers');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find the address. Recheck and try again');
    } else if (body.status === 'OK') {
        // console.log(JSON.stringify(body, undefined, 4));
        console.log(body.results[0].formatted_address);
        console.log(` latitude: ${body.results[0].geometry.location.lat} \n longitude: ${body.results[0].geometry.location.lng}`);
    }

});