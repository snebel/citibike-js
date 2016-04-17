module.exports = {
  entry: './src/citibike/main.js',
  output: {
    path: 'src',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  }
};