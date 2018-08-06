const getData = require('./include.js');
const express = require('express')
const app = express();
const cors = require('cors'); app.use(cors());

function findMode([array]) {

    var modes = [];
    var count = []; 
    var num = 0; 
    var max = 0;
 
 // loops over each number in the array and tallies up the 
 // total count for each
    for (i = 0; i < array.length; i ++) {
        num = array[i];
        count[num] = (count[num] || 0) + 1;
        if (count[num] > max) {
            max = count[num];
        }
    }
 
 //loops over the total count and stores the mode of the //array or multiple modes if their count's equal their 
 //max frequency
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === max) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}

function findMean([array]){
  //reduce being used to add up the numbers in the array.
  //a being the accmulated value and b being the current value
  return array.reduce((a, b) => a + b)/array.length;
}

function findMedian([array]) {
  //define median, set starting val to 0
    var median = 0;
  //define the array's length (self-explanatory)  
    var length = array.length;
    
  //sorts the array from smallest to largest values
    array.sort();
 
    if (
        length % 2 === 0 // for even array
    ) {
        median = 
        //finds lower low mid num then high mid num 
        //then divides by 2 to get mean of the 2 middle //nums
        (array[length / 2 - 1] + array[length / 2]) / 2;
    } else { //for odd array
        // middle number only
        median = array[(length - 1) / 2];
    }
 
    return median;
}

var port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(`Weather app listening on port ${port}`)
});


// getData(function(data){
// let array = new Array(data);

app.get('/', (req, res) => {
  let retVal = {};
  getData(function(data){
      let numbers = [data];
      retVal.mode = findMode(numbers)
      retVal.mean = findMean(numbers)
      retVal.median = findMedian(numbers)
      res.json(retVal)
  })

});

app.get('/:city/:country', function (req, res) {
    let retVal = {};
    getData(req.params.city, req.params.country, function(data){
      let numbers = [data];
      retVal.mode = findMode(numbers)
      retVal.mean = findMean(numbers)
      retVal.median = findMedian(numbers)
      res.json(retVal)
  })


});



/* 

getData(city, country, callback)

*/