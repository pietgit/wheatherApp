//contains all api calls for our context to OWM

var axios = require('axios');
//axios automatically translates json to js result object
const URL = "http://api.openweathermap.org/data/2.5/weather?apikey=40de15fdeb6dcfb8e6ec12faf8025a01";

function getTemp(location) {
    //will return an already set-up axios promise, so you can decide what happens on resolve/reject inside app logic
    //why not just pass callback functions?

  var tempurl =  `${URL}&q=${encodeURIComponent(location)}&units=metric`;
  console.log(tempurl);
    return axios.get(tempurl).then(function(res) {
      debugger;
        if (res.data.cod === 200) {
            return res.data.main.temp
        } else {
            throw new Error(res.data.message);
            //NOW THE FUNCTION PASSED AS THE 'SUCCESS' FUNCTION WILL NOT RECEIVE RESULT, IT WILL RECEIVE ONLY TEMP
        }
    }, function(res) {
        throw new Error(res.data.message);
    });
}

module.exports = getTemp;
