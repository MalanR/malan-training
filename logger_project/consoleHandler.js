class LogFormatter {
    static format(level, message) {
        return `[${new Date().toISOString()}] [${level.toUpperCase()}]: ${message}`;
    }
}

module.exports = LogFormatter;