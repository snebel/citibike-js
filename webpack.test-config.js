module.exports = {
  entry: 'mocha!./src/test/index.js',
  output: {
    path: 'src/test',
    filename: 'testBundle.js'
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