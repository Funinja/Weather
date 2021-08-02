const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0a9275d4360d2bc6950b120763fbede6&query=37.8267,-122.4233&units=m';

// request({ url:url, json: true }, (error, response) => {
//     console.log(response.body.current);
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature+ " degrees out. It feels like " + response.body.current.feelslike+ " degrees out.");
// });

//Geocoding
//Address -> Lat/Long -> Weather

const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnVuaW5qYXBwbGUiLCJhIjoiY2tydjJnZDB3MDJrNDJvcjBxZDI3M3IzbyJ9.XJkezJUKp0v3g6w7qXyWEg&limit=1"

request({url: url2, json:true}, (error, response) => {
    console.log(response.body.features[0].center);
})