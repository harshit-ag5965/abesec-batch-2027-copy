const fileSystem = require('fs');

function callback(err, data) {
    if(err == null) {
        console.log('File content:', data);
    } else {
        console.error('Error reading file:', err);
    }
}

fileSystem.readFile('./sample.txt', 'utf8', callback);
console.log('File read initiated. Waiting for callback...');