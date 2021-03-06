module.exports = {
  entry: './src/main/citibike/main.js',
  output: {
    path: 'src/main',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },
  resolve: {
    alias: {
      'handlebars': 'handlebars/dist/handlebars.min.js'
    }
  },
  resolveLoader: {
    alias: {
      'hbs': 'handlebars-loader'
    }
  },
  node: {
    fs: "empty"
  }
};
