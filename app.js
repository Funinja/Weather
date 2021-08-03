const request = require('request');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if (process.argv[2] === undefined){
    console.log("There is no location inputted");
}else{
    geocode(process.argv[2], (error, data) => {

        if (error){
            return console.log(error);
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
    
            if (error){
                return console.log(error);
            }
    
            console.log(data.location);
            console.log(forecastData);
        })
    
    });
}
