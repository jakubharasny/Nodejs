const request = require('request');

var getWeather = (latitude, longitude, callback) => {

    var forecastKey = process.env.FORECAST_IO_API_KEY
    request({
        url: `https://api.darksky.net/forecast/${forecastKey}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server')
        } else if (response.statusCode === 400) {
            callback('Incorrect latitude or longitude')
        } else if (response.statusCode === 403) {
            callback('API key is incorrect')
        } else {
            callback(undefined, {
                //some extra converting from farenheit to celcius
                celcius: ((body.currently.temperature - 32) * 5 / 9).toFixed(2),
                feelLikeCelcius: ((body.currently.apparentTemperature - 32) * 5 / 9).toFixed(2)
            })
        }
    }); 
}

module.exports.getWeather = getWeather;
