function validateFile(fileName, compressFileCallback) {
    setTimeout(() => {
        if(!fileName.endsWith('.jpg')) {
            return compressFileCallback(new Error('Invalid file type'), false, uploadFile);
        }  
        console.log('File is valid. Proceeding to compression...');
        compressFileCallback(null, true, uploadFile);
    }, 2000);
}


async function compressFile(error, isValidated, uploadFileCallback) {
    setTimeout(() => {
        if(error) {
            console.error(error.message);
            return;
        } else {
            console.log('File is being compressed...');
            const compressedData = 'compressed data';
            uploadFileCallback(compressedData, logFileStatus);
        }
    }, 3000);
}

function uploadFile(compressedData, logFileStatusCallback) {
    setTimeout(() => {
        if(compressedData.length != 0) {
            console.log('File is getting uploaded...');
            const isUploaded = true;
            logFileStatusCallback(null, isUploaded);
        }
    }, 2000);
}

function logFileStatus(error, isUploaded) {
    setTimeout(() => {
        if(error) {
            console.error(error.message);
            return;
        } else {
            console.log('File successfully uploaded.');
        }
    }, 1000);
}

validateFile('sample.jpg', compressFile);