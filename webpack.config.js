var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-1'],
        "ignore": ["node_modules/"]
      }
    }]
  },
  output: {
    libraryTarget: "umd",
    library: "PreambleUtils"
  },
  resolve: {
    extensions: ['', '.js']
  }
}
