var React = require('react');

var WeatherMessage = React.createClass({
  //state: curcity,cityweather
  render : function(){

  }
});

//new props syntax:
var WeatherMessage = ({temp,city}) =>
  (
    <h3 className="text-center">It is {temp} degrees celsius in {city}</h3>
  );

module.exports = WeatherMessage;
