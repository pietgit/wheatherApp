var React = require('react');


var WeatherForm = React.createClass({
  //state: curcity,cityweather
  formSubmitted: function(e){
    var inputtext = this.refs.cityinput;
    e.preventDefault();
    if (inputtext.value.length > 0){
      this.props.onSearch(inputtext.value);
      inputtext.value = "";
    }
  },
  render : function(){
    return (
      <form onSubmit={this.formSubmitted}>
        <input type="text" ref="cityinput"></input>
        <input type="submit" value="Get Weather"></input>
    </form>
    );
  }
});

module.exports = WeatherForm;
