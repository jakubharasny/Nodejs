require('dotenv').config()

const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demanded: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

geocode.geolocation(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(results.address)
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage)
      } else {
        // var celcius = ((weatherResults.temperature - 32) * 5 / 9).toFixed(2);
        // var feelLikeCelcius = ((weatherResults.feel_like - 32) * 5 / 9).toFixed(2);

        console.log(`It's currently ${weatherResults.celcius} and it feels like ${weatherResults.feelLikeCelcius}.`)
      };
    })
  };
})
