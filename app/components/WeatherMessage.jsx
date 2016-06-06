var React = require('react');

var WeatherMessage = React.createClass({
  //state: curcity,cityweather
  render : function(){

  }
});

//new props syntax:
var WeatherMessage = ({temp,city}) =>
  (
    <h2>It is {temp} degrees celsius in {city}</h2>
  );

module.exports = WeatherMessage;
