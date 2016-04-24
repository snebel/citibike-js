module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      // only specify one entry point
      // and require all tests in there
      'index.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'index.js': ['webpack']
    },

    reporters: ['progress', 'html'],

    browsers: ['PhantomJS'],

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },

    plugins: [
      require('karma-webpack'),
      require("karma-mocha"),
      // require("karma-chrome-launcher"),
      require('karma-phantomjs-launcher'),
      require("karma-spec-reporter")
    ],

    output: {
      filename: 'testBundle.js'
    },

    webpack: {
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
      }
    },

    webpackMiddleware: {
      noInfo: true
    }

  });
};