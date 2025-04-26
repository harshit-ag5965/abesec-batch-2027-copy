function validateFile(fileName: string) {
    if(fileName.endsWith('.jpg')) return true;



    // return true/false;
}


async function compressFile() {

    // ..
    // ..
    // ..

    // return data;
}

async function uploadFile(data) {
    // ..

    // ,.,

    // fetch(https://api.example.com/upload, {
    //     method: 'POST',
    //     body: data,
    // })

    // return true/false;
}

function logFileStatus() {
    console.log('File successfully uploaded.');
}

const isValidated = validateFile(file);
if(isValidated) {
    const compressedData = compressFile(file);
    const isUploaded = uploadFile(compressedData);
    if(isUploaded) {
        logFileStatus();
    } else {
        console.error('File upload failed.');
    }
}