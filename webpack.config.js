var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    libraryTarget: "umd",
    library: "PreambleUtils"
  },
  resolve: {
    extensions: ['', '.js']
  }
}
