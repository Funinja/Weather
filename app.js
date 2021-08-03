const request = require('request');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


geocode('Boston', (error, data) => {
    console.log("Error:", error);
    console.log("Data:", data);

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })

});
