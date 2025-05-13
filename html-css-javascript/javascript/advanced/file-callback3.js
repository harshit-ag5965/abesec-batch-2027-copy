const fileSystem = require('fs');

function meraDoosraKaam(err, data) {
    if(err == null) {
        console.log('Mera doosra kaam kaam:', data, ".....");
    } else {
        console.error('Error reading file:', err);
    }
}

function readFileWalaKaam() {
    console.log('Mera pehla kaam....')
    fileSystem.readFile('./sample.txt', 'utf8', meraDoosraKaam);
}

setTimeout(readFileWalaKaam, 3000);
console.log('File read initiated. Waiting for callbacks...');