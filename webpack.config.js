var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var isProduction = env === 'production';
var plugins = [];

if (isProduction) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: true
    }
  }));
}

module.exports = {
  entry: path.join(__dirname, 'src/index'),
  
  cache: true,
  
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: isProduction ? 'get-position.min.js' : 'get-position.js'
  },
  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  },
  
  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },
  
  plugins: plugins
};
