require('dotenv').config()

const yargs = require('yargs');
const geocode = require('./geocode/geocode')

const argv = yargs
    .options({
        a: {
            demanded: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geolocation(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    };
});



