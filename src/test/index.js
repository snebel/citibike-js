var context = require.context('.', true, /Tests.js$/)
context.keys().forEach(context);
module.exports = context;
