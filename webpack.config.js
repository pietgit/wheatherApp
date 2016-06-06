
//Exports object that specifies what webpack does
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname, //this is a node global var, gets current directory
    filename: './public/bundle.js'
  },
  resolve: {//which files we're going to work with
      extensions: ['','.js','.jsx'],
      root: __dirname,
      alias: {
        WeatherMain : 'app/components/Weathermain.jsx',
        Nav: 'app/components/Nav.jsx',
        Weather: 'app/components/Weather.jsx',
        About: 'app/components/About.jsx',
        Examples: 'app/components/Examples.jsx',
        WeatherForm: 'app/components/WeatherForm.jsx',
        WeatherMessage: 'app/components/WeatherMessage.jsx',
        OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
      }
  },
  module: { //specify webpack modules/in our case "translators"
      loaders:[
        {
        loader: 'babel-loader',
        query:{//what languages to look for
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/, //what files to look for
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: "cheap-module-eval-source-map"
};
