const request = require('request');

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0a9275d4360d2bc6950b120763fbede6&query='+ longitude + ','+ latitude +'&units=m';
    
    request({url: url, json: true}, (error, response) =>{

        if (error){
            callback("Unable to connect to weather services", undefined);
        }else if(response.body.error){
            callback("Unable to find coordinates", undefined);
        }else{
            const data = response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature+ " degrees out. It feels like " + response.body.current.feelslike+ " degrees out.";  
            callback(undefined, data);
        }


    });

}

module.exports = forecast;