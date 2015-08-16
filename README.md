
[![Build Status](https://travis-ci.org/snebel/citibike-js.svg?branch=master)](https://travis-ci.org/snebel/citibike-js)
[![Coverage Status](https://coveralls.io/repos/snebel/citibike-js/badge.svg?branch=master&service=github)](https://coveralls.io/github/snebel/citibike-js?branch=master)

> [citibiker.herokuapp.com](http://citibiker.herokuapp.com/)

# Citibiker
>A work-in-progress alternative Citibike app using various js build tools and frameworks. Application built with Node, Express, Leaflet & Marionette.

Notable Dependencies
```
Server:
├── bower@1.4.1
├── express@4.13.3
├── request@2.60.0
└── jade@1.11.0

Client:
├── requirejs#2.1.20
├── backbone#1.2.1\n
│ └── underscore#1.8.3
├── marionette#2.4.2
│ ├── backbone#1.2.1
│ ├── jquery#2.1.4
│ └── underscore#1.8.3
├── leaflet#0.7.3 (latest is 1.0.0-beta.1)
├── geolib#2.0.18/n
└── handlebars@2.0.0

Dev/Test:
├── gulp@3.9.0
├── gulp-coveralls@0.1.4
│ └── coveralls@2.11.4
├── gulp-istanbul@0.10.0
│ └── istanbul@0.3.17
├── gulp-jasmine@2.0.1
| └── jasmine@2.3.2
└── jasmine-node@1.14.5
```

###Development
Install: `$ npm install`

Start Server: `$ npm start`

Test: `$ gulp test`

Coverage: `$ gulp coveralls`
