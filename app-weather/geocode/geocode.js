const request = require('request')

var geolocation = (address, callback) => {
  var encodedAddress = encodeURIComponent(address)
  var googleKey = process.env.GOOGLE_API_KEY

  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleKey}`

  request({
    url,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
      callback(`The address you input doesn't exist`)
    } else if (body.status === 'OK') {
      // dlaczego bez undefined zwraca text a nie obiekt ? Rozumiem ze undefined jest jako errorMessage ale dlaczego wiec dziala wogole jak tego nie podam ?
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports.geolocation = geolocation
