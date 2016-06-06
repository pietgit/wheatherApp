var React = require('react');



//stateless functional component:
//beceause the render function essentialy just return

var About = (props) => (
  <div>
      <h1 className="text-center">About</h1>
      <p>This is the about page. Its used for:</p>
      <ul>
        <li>
          Telling you about the app.
        </li>
        <li>
          Linking to stuff you might want to know.
       </li>
      </ul>
  </div>
    );

module.exports = About;
