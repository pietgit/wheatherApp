var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var getTemp = require('OpenWeatherMap');

var Weather = React.createClass({
    //state: curcity,cityweather
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(city) {
      this.setState({isLoading : true});
      var that = this;
        getTemp(city).then(function(temp) {
            //we're inside a function of a METHOD >> this object is WRONG
            //we have access to that because of CLOSURES

            that.setState({city: city, temp: temp,isLoading : false});
        }, function(res) {
            console.log(res);
            that.setState({city:null, temp:null,isLoading : false});
        });
    },
    render: function() {
      var {isLoading, city, temp} = this.state;
        var getMessage = function() {
          if(isLoading) {
              return (<h3>Fetching Weather...</h3>);
            } else if (city && temp) {
                return <WeatherMessage city={city} temp={temp}/>;
            }
        };
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {getMessage()}
            </div>
        );
    }
});

module.exports = Weather;
