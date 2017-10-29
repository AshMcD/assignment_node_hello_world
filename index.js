var lodash = require('lodash');
var chalk = require('chalk');
var demo = require('./data/demo');

lodash.each(demo, function(color) {

  console.log(color);
});
