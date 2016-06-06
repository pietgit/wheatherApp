var React = require('react');
var Nav = require('Nav');

//http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&apikey=40de15fdeb6dcfb8e6ec12faf8025a01


var WeatherMain = ({children}) =>
  (
    <div>
    <Nav></Nav>
    <h2>Main Component</h2>
    {children}
    </div>
  );

module.exports = WeatherMain;
