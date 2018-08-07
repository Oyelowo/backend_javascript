const yargs = require('yargs');
const geocode=require('./geocode/geocode');

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
geocode.geocodeAddress(argv.a)
// console.log(argv);