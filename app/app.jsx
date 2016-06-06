
//because react is now being included using a builder
var React = require('react');//only the name, because it's inside package.json as a module
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute, hashHistory} = require('react-router');
var WeatherMain = require('WeatherMain');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation:
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={WeatherMain}>//root of our app, we want to render for every single page, our main component
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
        <IndexRoute component={Weather}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
