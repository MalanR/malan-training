class Logger {
    constructor(handler) {
        this.handler = handler;
    }
    
    log(level, message) {
        const formattedMessage = LogFormatter.format(level, message);
        this.handler.write(formattedMessage);
    }
}

module.exports = Logger;