var webpack = require('webpack');

module.exports = {
  output: {
    libraryTarget: "umd",
    library: "PreambleUtils"
  },
  resolve: {
    extensions: ['', '.js']
  }
}
