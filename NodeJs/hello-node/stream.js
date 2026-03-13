
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
readableStream.setEncoding('utf8');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.toString());
});

readableStream.on('end', () => {
  console.log('Finished reading the file.');
});

readableStream.on('error', (err) => {
  console.error('Error reading the file:', err);
});

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, this is a writable stream example.\n');
writableStream.write('This data will be written to output.txt.\n');

writableStream.end(() => {
  console.log('Finished writing to the file.');
});


// ------------------
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const transformedChunk = chunk.toString().toUpperCase();
    this.push(transformedChunk);
    callback();
  }
});

const inputStream = fs.createReadStream('input.txt');
const outputStream = fs.createWriteStream('transformed_output.txt');

inputStream.pipe(transformStream).pipe(outputStream);

