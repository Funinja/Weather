const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=0a9275d4360d2bc6950b120763fbede6&query=37.8267,-122.4233&units=m';

// request({ url:url, json: true }, (error, response) => { //if there is an error there is no response and vice versa

//     if(error){

//         console.log('Unable to connect to weather service!');

//     }else if(response.body.error){
        
//         console.log('Unable to find location');
    
//     }else{
//         // console.log(response.body.current);
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature+ " degrees out. It feels like " + response.body.current.feelslike+ " degrees out.");  
//     }

// });

//Geocoding
//Address -> Lat/Long -> Weather

const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZnVuaW5qYXBwbGUiLCJhIjoiY2tydjJnZDB3MDJrNDJvcjBxZDI3M3IzbyJ9.XJkezJUKp0v3g6w7qXyWEg&limit=1"

request({url: url2, json:true}, (error, response) => {

    if (error){
        console.log("Unable to connect to network");

    }else if(response.body.features.length === 0){
        console.log("Unable to find place")

    }else{

        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(longitude + ", " + latitude);
    }

})