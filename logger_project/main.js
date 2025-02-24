const Logger = require('./logger');
const ConsoleHandler = require('./consoleHandler');
const FileHandler = require('./fileHandler');

const consoleLogger = new Logger(new ConsoleHandler());
const fileLogger = new Logger(new FileHandler());

consoleLogger.log('info', 'This is a console log message.');
fileLogger.log('error', 'This is a file log message.');