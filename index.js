var lodash = require('lodash');
var chalk = require('chalk');
var logs = require('./data/logs');

var logger = require('./lib/logger');
logger('This is an error level message', 'ERROR');
logger('This is an warning level message', 'WARNING');
logger('This is an info level message', 'INFO');

var error = function(message) {
  conole.log(message, 'error');
};

var warning = function(message) {
  conole.log(message, 'warning');
};

var info = function(message) {
  conole.log(message, 'info');
};

lodash.each(logs, function(element) {
  logger(element.message, element.level);
});
