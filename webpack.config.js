var webpack = require('webpack');


//Exports object that specifies what webpack does
module.exports = {
  //react are indicated in the translator part below
  //jquery and foundation needs to loaded before app.jsx, because it will use it
  //script! indicates that the webpack script-loader module will be used
  entry: ['script!jquery/dist/jquery.min.js','script!foundation-sites/dist/foundation.min.js','./app/app.jsx'],
  output: {
    path: __dirname, //this is a node global var, gets current directory
    filename: './public/bundle.js'
  },
  externals: {
    //used to provide values that will be available as global variables
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery':'jquery'
    })
  ],
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
