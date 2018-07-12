

const request = require('request');
let apiKey = '5a6aa5428547dc809c54a7bf7d8576ba';
let url = `http://api.openweathermap.org/data/2.5/forecast?lat=30.2240897&lon=-92.0198427000000&units=imperial&appid=${apiKey}`
let temperature = new Array();

const getData = function(callback) {
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