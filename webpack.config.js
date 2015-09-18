var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    libraryTarget: "umd",
    library: "Preamble"
  },
  resolve: {
    extensions: ['', '.js']
  }
}
