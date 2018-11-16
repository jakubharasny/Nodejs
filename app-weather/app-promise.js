require('dotenv').config()

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demandOption: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
      default: '60 Fairfoot Road'
    }
  })
  .help()
  .alias('help', 'h')
  .argv



//   var home = (myHomeAddress) => { 
//     if (myHomeAddress === '') {
//       return encodeURIComponent('60 Fairfoot Road')
//     } else {
//       return encodeURIComponent(myHomeAddress)
//     }
//   }

var encodedAddress = encodeURIComponent(argv.address)


var googleKey = process.env.GOOGLE_API_KEY
var forecastKey = process.env.FORECAST_IO_API_KEY

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleKey}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find this address.')
  }
  var latitude = response.data.results[0].geometry.location.lat;
  var longitude = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/${forecastKey}/${latitude},${longitude}`
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response ) => {
    var celcius = ((response.data.currently.temperature - 32) * 5 / 9).toFixed(2);
    var feelLikeCelcius = ((response.data.currently.apparentTemperature - 32) * 5 / 9).toFixed(2);
  console.log(`It's currently ${celcius}. It feels like ${feelLikeCelcius}`)
}).catch((e) => {
  if (e.code === "ENOTFOUND") {
    console.log(`Unable to connect to the API Google server`);
  } else {
    console.log(e.message);
  }
});