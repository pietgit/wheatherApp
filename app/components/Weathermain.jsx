var React = require('react');
var Nav = require('Nav');

//http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&apikey=40de15fdeb6dcfb8e6ec12faf8025a01


var WeatherMain = ({children}) =>
  (
    <div>
    <Nav></Nav>
    <div className="row">
    <div className="column medium-6 large-4 small-centered">
      {children}
    </div>
    </div>
    </div>
  );

module.exports = WeatherMain;
