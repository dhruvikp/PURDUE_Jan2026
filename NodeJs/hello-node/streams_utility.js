// pipeline example
const { pipeline } = require('stream');
const fs = require('fs');

const source = fs.createReadStream('input.txt');
const destination = fs.createWriteStream('pipeline_output.txt');

pipeline(source, destination, (err) => {
  if (err) {
    console.error('Pipeline failed:', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});

// Readable.from example
const { Readable } = require('stream');

const readableFrom = Readable.from(['Hello', 'World', 'This is a Readable.from example.']);

readableFrom.on('data', (chunk) => {
  console.log('Received chunk from Readable.from:', chunk.toString());
});

// finished() example
const { finished } = require('stream');

const readableStream = fs.createReadStream('input.txt');

finished(readableStream, (err) => {
  if (err) {
    console.error('Stream finished with error:', err);
  } else {
    console.log('Stream finished successfully.');
  }
});

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.toString());
}); 


// AbortController abort example
const { AbortController } = require('abort-controller');

const controller = new AbortController();
const signal = controller.signal;

const abortableStream = fs.createReadStream('input.txt', { signal });

abortableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.toString());
});

abortableStream.on('error', (err) => {
  if (err.name === 'AbortError') {
    console.log('Stream was aborted.');
  } else {
    console.error('Stream error:', err);
  }
});

// Abort the stream after 1 second
setTimeout(() => {
  controller.abort();
}, 1000);