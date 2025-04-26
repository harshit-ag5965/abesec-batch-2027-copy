const fileSystem = require('fs');


function meraPehlaKaam() {
    console.log('Mera pehla kaam....')
}

function meraDoosraKaam(err, data) {
    if(err == null) {
        console.log('Mera doosra kaam kaam:', data, ".....");
    } else {
        console.error('Error reading file:', err);
    }
}

setTimeout(meraPehlaKaam, 3000);

fileSystem.readFile('./sample.txt', 'utf8', meraDoosraKaam);

console.log('File read initiated. Waiting for callbacks...');