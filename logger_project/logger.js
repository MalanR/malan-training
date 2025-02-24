const fs = require('fs');

class FileHandler {
    constructor(filename = 'log.txt') {
        this.filename = filename;
    }
    
    write(message) {
        fs.appendFileSync(this.filename, message + '\n');
    }
}

module.exports = FileHandler;