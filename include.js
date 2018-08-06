

const request = require('request');
let apiKey = '5a6aa5428547dc809c54a7bf7d8576ba';
let temperature = new Array();

const getData = function(city, country, callback) {
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${apiKey}`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let data = JSON.parse(body);
    let weatherList = data.list;

        for (i=0; i<weatherList.length; i++) {
          temperature[i] = weatherList[i].main.temp;
        }

      callback(temperature);
  }
  
});

}

module.exports = getData