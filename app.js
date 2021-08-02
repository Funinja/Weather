const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0a9275d4360d2bc6950b120763fbede6&query=37.8267,-122.4233';

request({ url:url, json: true }, (error, response) => {
    console.log(response.body.current);
    console.log("It is currently " + response.body.current.temperature+ " degrees out. It feels like " + response.body.current.feelslike+ " degrees out.");
});